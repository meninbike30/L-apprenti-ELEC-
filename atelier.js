// Moteur de l'Atelier de câblage - EEB Alt Nîmes

let currentExo = null;
let userConnections = [];   // { from:{comp,term}, to:{comp,term}, role }
let userCalibre = {};       // { compId: valeur }
let userSection = null;
let selectedRole = null;
let dragState = null;       // { fromComp, fromTerm, tempLine }
let canvasZoom = 1;
const ZOOM_MIN = 0.3, ZOOM_MAX = 1.5, ZOOM_STEP = 0.15;

const SVG_NS = "http://www.w3.org/2000/svg";

// ---------- Motif rayé vert/jaune pour le fil de terre ----------
function addTerrePattern(svg, patternId) {
  const defs = document.createElementNS(SVG_NS, "defs");
  const pattern = document.createElementNS(SVG_NS, "pattern");
  pattern.setAttribute("id", patternId);
  pattern.setAttribute("patternUnits", "userSpaceOnUse");
  pattern.setAttribute("width", "10");
  pattern.setAttribute("height", "10");
  pattern.setAttribute("patternTransform", "rotate(45)");

  const bg = document.createElementNS(SVG_NS, "rect");
  bg.setAttribute("width", "10");
  bg.setAttribute("height", "10");
  bg.setAttribute("fill", "#2e8b2e");
  pattern.appendChild(bg);

  const stripe = document.createElementNS(SVG_NS, "rect");
  stripe.setAttribute("x", "0");
  stripe.setAttribute("width", "5");
  stripe.setAttribute("height", "10");
  stripe.setAttribute("fill", "#e8d21e");
  pattern.appendChild(stripe);

  defs.appendChild(pattern);
  svg.appendChild(defs);
}

function strokeForRole(roleKey, patternId) {
  if (roleKey === "terre") return `url(#${patternId})`;
  return WIRE_ROLES[roleKey].color;
}

// ---------- Tracé des câbles à angle droit (contourne les composants au passage) ----------
// Chaque fil sort d'abord perpendiculairement à son composant (petit "talon"), puis :
//  - s'il n'y a aucun composant entre les deux bornes, un coude simple les relie ;
//  - sinon, le fil est dérouté au-dessus ou en dessous du (ou des) composant(s) gênant(s),
//    en choisissant le côté le plus court — comme un vrai routage de schéma électrique,
//    plutôt que de couper au milieu et risquer de traverser une armoire ou un bornier
//    posé entre le départ et l'arrivée.
// `laneOffset` (optionnel, en px) permet d'écarter légèrement des fils qui emprunteraient
// sinon exactement le même chemin, pour qu'ils restent distinguables visuellement.
function elbowPath(x1, y1, x2, y2, components, laneOffset) {
  const comps = components || (typeof currentExo !== "undefined" && currentExo ? currentExo.components : null) || [];
  const offset = laneOffset || 0;
  const eps = 0.5;
  const margin = 10;
  const stub = 16;

  const containsPoint = (c, x, y) =>
    x >= c.x - eps && x <= c.x + c.w + eps && y >= c.y - eps && y <= c.y + c.h + eps;

  const srcComp = comps.find(c => containsPoint(c, x1, y1));
  const dstComp = comps.find(c => containsPoint(c, x2, y2));
  const exitDir = (comp, x) => {
    if (!comp) return x1 <= x2 ? 1 : -1;
    return Math.abs(x - comp.x) <= Math.abs(x - (comp.x + comp.w)) ? -1 : 1;
  };
  const sx1 = x1 + exitDir(srcComp, x1) * stub;
  const sx2 = x2 + exitDir(dstComp, x2) * stub;

  const yBridgeLo = Math.min(y1, y2), yBridgeHi = Math.max(y1, y2);
  const xSpanLo = Math.min(sx1, sx2), xSpanHi = Math.max(sx1, sx2);

  // Composants gênants : leur emprise (avec marge) chevauche à la fois la plage
  // horizontale ET la plage verticale parcourues par le fil.
  const blockers = comps.filter(c => {
    if (c === srcComp || c === dstComp) return false;
    const overlapsX = (c.x + c.w + margin) > xSpanLo && (c.x - margin) < xSpanHi;
    const overlapsY = (c.y + c.h + margin) > yBridgeLo && (c.y - margin) < yBridgeHi;
    return overlapsX && overlapsY;
  });

  const pts = [[x1, y1], [sx1, y1]];
  if (blockers.length === 0) {
    if (Math.abs(y1 - y2) >= eps) {
      const midX = (sx1 + sx2) / 2 + offset;
      pts.push([midX, y1], [midX, y2]);
    }
  } else {
    const topY = Math.min(...blockers.map(c => c.y)) - margin;
    const bottomY = Math.max(...blockers.map(c => c.y + c.h)) + margin;
    const costAbove = Math.abs(y1 - topY) + Math.abs(y2 - topY);
    const costBelow = Math.abs(y1 - bottomY) + Math.abs(y2 - bottomY);
    const detourY = costAbove <= costBelow ? topY - Math.abs(offset) : bottomY + Math.abs(offset);
    pts.push([sx1, detourY], [sx2, detourY]);
  }
  pts.push([sx2, y2], [x2, y2]);

  // Construction du "d" SVG : segments H/V uniquement, en ignorant les points dégénérés.
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    if (Math.abs(cx - px) < eps && Math.abs(cy - py) < eps) continue;
    if (Math.abs(cy - py) < eps) d += ` H ${cx}`;
    else if (Math.abs(cx - px) < eps) d += ` V ${cy}`;
    else d += ` L ${cx} ${cy}`;
  }
  return d;
}

// ---------- Icônes réalistes des composants ----------
const COMP_ICONS = {
  disjoncteur: { vb: "0 0 40 50", w: 24, h: 30, svg: `
    <rect x="16" y="0" width="8" height="4" fill="#767e79"/>
    <rect x="16" y="46" width="8" height="4" fill="#767e79"/>
    <rect x="4" y="4" width="32" height="42" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <rect x="12" y="7" width="16" height="9" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1.1"/>
    <line x1="13" y1="15" x2="27" y2="8" stroke="#d0d0d0" stroke-width="1.2"/>
    <circle cx="20" cy="11.5" r="1.7" fill="#c9c9c9"/>
    <rect x="13" y="19" width="14" height="18" rx="2" fill="#f4f4f2" stroke="#333" stroke-width="1.3"/>
    <line x1="20" y1="22" x2="20" y2="33" stroke="#c0392b" stroke-width="3.5" stroke-linecap="round" transform="rotate(-16 20 27)"/>
    <rect x="12" y="39" width="16" height="9" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1.1"/>
    <line x1="13" y1="40" x2="27" y2="47" stroke="#d0d0d0" stroke-width="1.2"/>
    <circle cx="20" cy="43.5" r="1.7" fill="#c9c9c9"/>` },
  bornier: { vb: "0 0 92 34", w: 60, h: 22, svg: `
    <rect x="2" y="2" width="88" height="30" rx="6" fill="#efece0" stroke="#8a7f5c" stroke-width="2" stroke-dasharray="5,3"/>
    ${[16, 38, 60, 78].map(x => `
      <rect x="${x - 7}" y="8" width="14" height="18" rx="2.5" fill="#fbfbf8" stroke="#555" stroke-width="1.3"/>
      <path d="M${x - 6} 8 L${x - 6} 0 L${x + 6} 3.5 L${x + 6} 8 Z" fill="#e8862c" stroke="#a85a12" stroke-width="0.8"/>
      <circle cx="${x}" cy="17" r="2" fill="#999"/>`).join("")}` },
  "bornier-terre": { vb: "0 0 92 34", w: 60, h: 22, svg: `
    <rect x="2" y="2" width="88" height="30" rx="6" fill="#e7f3e2" stroke="#2e8b2e" stroke-width="2" stroke-dasharray="5,3"/>
    ${[16, 38, 60, 78].map(x => `
      <rect x="${x - 7}" y="8" width="14" height="18" rx="2.5" fill="#fbfbf8" stroke="#2e8b2e" stroke-width="1.3"/>
      <path d="M${x - 6} 8 L${x - 6} 0 L${x + 6} 3.5 L${x + 6} 8 Z" fill="#e8862c" stroke="#a85a12" stroke-width="0.8"/>
      <circle cx="${x}" cy="17" r="2" fill="#7bb168"/>`).join("")}` },
  interrupteur: { vb: "0 0 40 40", w: 24, h: 24, svg: `
    <rect x="3" y="3" width="34" height="34" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>
    <rect x="14" y="11" width="12" height="18" rx="3" fill="#e6e6e6" stroke="#333" stroke-width="1.5"/>` },
  "va-et-vient": { vb: "0 0 40 40", w: 26, h: 26, svg: `
    <rect x="3" y="3" width="34" height="34" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>
    <rect x="12" y="11" width="16" height="18" rx="3" fill="#e6e6e6" stroke="#333" stroke-width="1.5"/>
    <line x1="15" y1="15" x2="25" y2="25" stroke="#333" stroke-width="1.5"/>
    <line x1="25" y1="15" x2="15" y2="25" stroke="#333" stroke-width="1.5"/>` },
  "bouton-poussoir": { vb: "0 0 40 40", w: 22, h: 22, svg: `
    <rect x="3" y="3" width="34" height="34" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="20" cy="20" r="10" fill="#d1493f" stroke="#333" stroke-width="1.5"/>` },
  telerupteur: { vb: "0 0 80 66", w: 52, h: 43, svg: `
    <rect x="16" y="0" width="10" height="5" fill="#767e79"/>
    <rect x="54" y="0" width="10" height="5" fill="#767e79"/>
    <rect x="4" y="4" width="72" height="58" rx="4" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.5"/>
    <rect x="10" y="8" width="12" height="11" rx="1.5" fill="#2e2e2e" stroke="#000" stroke-width="1.1"/>
    <line x1="11" y1="18" x2="21" y2="9" stroke="#d0d0d0" stroke-width="1.2"/>
    <rect x="10" y="46" width="12" height="11" rx="1.5" fill="#2e2e2e" stroke="#000" stroke-width="1.1"/>
    <line x1="11" y1="47" x2="21" y2="56" stroke="#d0d0d0" stroke-width="1.2"/>
    <rect x="58" y="8" width="12" height="11" rx="1.5" fill="#2e2e2e" stroke="#000" stroke-width="1.1"/>
    <line x1="59" y1="18" x2="69" y2="9" stroke="#d0d0d0" stroke-width="1.2"/>
    <rect x="58" y="46" width="12" height="11" rx="1.5" fill="#2e2e2e" stroke="#000" stroke-width="1.1"/>
    <line x1="59" y1="47" x2="69" y2="56" stroke="#d0d0d0" stroke-width="1.2"/>
    <text x="16" y="26" font-size="6.5" text-anchor="middle" fill="#333" font-weight="700">A1</text>
    <text x="16" y="44" font-size="6.5" text-anchor="middle" fill="#333" font-weight="700">A2</text>
    <text x="64" y="26" font-size="6.5" text-anchor="middle" fill="#333" font-weight="700">1</text>
    <text x="64" y="44" font-size="6.5" text-anchor="middle" fill="#333" font-weight="700">2</text>
    <circle cx="40" cy="33" r="9" fill="#f4f4f2" stroke="#333" stroke-width="1.6"/>
    <path d="M34 33 q3 -6 6 0 q3 6 6 0" fill="none" stroke="#7b3fa0" stroke-width="1.3"/>` },
  contacteur: { vb: "0 0 60 50", w: 46, h: 38, svg: `
    <rect x="20" y="0" width="10" height="4" fill="#767e79"/>
    <rect x="20" y="46" width="10" height="4" fill="#767e79"/>
    <rect x="2" y="4" width="56" height="42" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <rect x="8" y="8" width="12" height="10" rx="1.5" fill="#2e2e2e" stroke="#000" stroke-width="1.1"/>
    <line x1="9" y1="17" x2="19" y2="9" stroke="#d0d0d0" stroke-width="1.2"/>
    <text x="14" y="34" font-size="7" text-anchor="middle" fill="#333" font-weight="700">A</text>
    <circle cx="14" cy="26" r="6" fill="#f4f4f2" stroke="#333" stroke-width="1.3"/>
    <rect x="34" y="12" width="18" height="24" fill="#f4f4f2" stroke="#333" stroke-width="1.6"/>
    <rect x="38" y="8" width="10" height="8" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1"/>
    <rect x="38" y="34" width="10" height="8" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1"/>` },
  lampe: { vb: "0 0 40 50", w: 34, h: 42, svg: `
    <circle cx="20" cy="18" r="14" fill="#fff7d6" stroke="#d99a2b" stroke-width="2"/>
    <line x1="20" y1="4" x2="20" y2="18" stroke="#d99a2b" stroke-width="1.3"/>
    <line x1="20" y1="18" x2="12" y2="26" stroke="#d99a2b" stroke-width="1.3"/>
    <line x1="20" y1="18" x2="28" y2="26" stroke="#d99a2b" stroke-width="1.3"/>
    <rect x="14" y="30" width="12" height="6" fill="#999" stroke="#333" stroke-width="1"/>
    <line x1="15" y1="38" x2="25" y2="38" stroke="#333" stroke-width="1.5"/>
    <line x1="16" y1="41" x2="24" y2="41" stroke="#333" stroke-width="1.5"/>` },
  prise: { vb: "0 0 60 60", w: 50, h: 50, svg: `
    <rect x="3" y="3" width="54" height="54" rx="8" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="20" cy="24" r="4.5" fill="#333"/>
    <circle cx="40" cy="24" r="4.5" fill="#333"/>
    <circle cx="30" cy="40" r="4.5" fill="#2e8b2e"/>` },
  "chauffe-eau": { vb: "0 0 50 60", w: 34, h: 42, svg: `
    <rect x="8" y="4" width="34" height="52" rx="15" fill="#eaf3fc" stroke="#2f80c9" stroke-width="2"/>
    <line x1="16" y1="20" x2="34" y2="20" stroke="#2f80c9" stroke-width="1.5"/>` },
  compteur: { vb: "0 0 70 40", w: 48, h: 27, svg: `
    <rect x="28" y="0" width="14" height="4" fill="#767e79"/>
    <rect x="28" y="36" width="14" height="4" fill="#767e79"/>
    <rect x="2" y="4" width="66" height="32" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <rect x="10" y="10" width="50" height="14" fill="#1c1c1c"/>
    <text x="35" y="21" font-size="9" text-anchor="middle" fill="#5bd15b" font-family="monospace">01234</text>
    <rect x="10" y="27" width="8" height="5" fill="#2e2e2e" stroke="#d0d0d0" stroke-width="1.1"/>
    <rect x="52" y="27" width="8" height="5" fill="#2e2e2e" stroke="#d0d0d0" stroke-width="1.1"/>` },
  permutateur: { vb: "0 0 40 40", w: 26, h: 26, svg: `
    <rect x="3" y="3" width="34" height="34" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="10" cy="10" r="2.5" fill="#333"/>
    <circle cx="30" cy="10" r="2.5" fill="#333"/>
    <circle cx="10" cy="30" r="2.5" fill="#333"/>
    <circle cx="30" cy="30" r="2.5" fill="#333"/>
    <line x1="10" y1="10" x2="30" y2="30" stroke="#333" stroke-width="1.5"/>
    <line x1="30" y1="10" x2="10" y2="30" stroke="#333" stroke-width="1.5"/>` },
  minuterie: { vb: "0 0 60 50", w: 46, h: 38, svg: `
    <rect x="20" y="0" width="10" height="4" fill="#767e79"/>
    <rect x="20" y="46" width="10" height="4" fill="#767e79"/>
    <rect x="2" y="4" width="56" height="42" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <rect x="8" y="8" width="12" height="10" rx="1.5" fill="#2e2e2e" stroke="#000" stroke-width="1.1"/>
    <line x1="9" y1="17" x2="19" y2="9" stroke="#d0d0d0" stroke-width="1.2"/>
    <circle cx="14" cy="28" r="8" fill="#f4f4f2" stroke="#333" stroke-width="1.4"/>
    <line x1="14" y1="28" x2="14" y2="22" stroke="#333" stroke-width="1.4"/>
    <line x1="14" y1="28" x2="18" y2="30" stroke="#333" stroke-width="1.4"/>
    <rect x="34" y="12" width="18" height="24" fill="#f4f4f2" stroke="#333" stroke-width="1.6"/>
    <rect x="38" y="8" width="10" height="8" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1"/>
    <rect x="38" y="34" width="10" height="8" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1"/>` },
  detecteur: { vb: "0 0 40 40", w: 26, h: 26, svg: `
    <rect x="4" y="14" width="32" height="20" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>
    <path d="M10 14 Q20 -2 30 14" fill="#eee" stroke="#333" stroke-width="1.5"/>
    <circle cx="20" cy="24" r="3" fill="#c0392b"/>` },
  transformateur: { vb: "0 0 70 50", w: 46, h: 33, svg: `
    <rect x="28" y="0" width="14" height="4" fill="#767e79"/>
    <rect x="28" y="46" width="14" height="4" fill="#767e79"/>
    <rect x="2" y="4" width="66" height="42" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <circle cx="18" cy="14" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.6"/>
    <circle cx="18" cy="24" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.6"/>
    <circle cx="18" cy="34" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.6"/>
    <line x1="35" y1="8" x2="35" y2="42" stroke="#333" stroke-width="2"/>
    <line x1="39" y1="8" x2="39" y2="42" stroke="#333" stroke-width="2"/>
    <circle cx="52" cy="14" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.6"/>
    <circle cx="52" cy="24" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.6"/>
    <circle cx="52" cy="34" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.6"/>
    <rect x="8" y="8" width="8" height="6" fill="#2e2e2e" stroke="#d0d0d0" stroke-width="1.2"/>
    <rect x="54" y="8" width="8" height="6" fill="#2e2e2e" stroke="#d0d0d0" stroke-width="1.2"/>` },
  sonnette: { vb: "0 0 40 50", w: 30, h: 38, svg: `
    <path d="M20 6 Q10 6 10 22 L8 30 h24 l-2 -8 Q30 6 20 6 Z" fill="#f0d24a" stroke="#8a6d00" stroke-width="2"/>
    <circle cx="20" cy="36" r="4" fill="#8a6d00"/>` },
  radiateur: { vb: "0 0 60 50", w: 40, h: 33, svg: `
    <rect x="4" y="10" width="52" height="34" rx="4" fill="#f5f0e8" stroke="#b5651d" stroke-width="2"/>
    ${[14, 24, 34, 44].map(x => `<line x1="${x}" y1="14" x2="${x}" y2="40" stroke="#b5651d" stroke-width="2"/>`).join("")}` },
  programmateur: { vb: "0 0 60 40", w: 44, h: 30, svg: `
    <rect x="22" y="0" width="14" height="4" fill="#767e79"/>
    <rect x="22" y="36" width="14" height="4" fill="#767e79"/>
    <rect x="2" y="4" width="56" height="32" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <circle cx="20" cy="20" r="11" fill="#f4f4f2" stroke="#333" stroke-width="1.5"/>
    <line x1="20" y1="20" x2="20" y2="12" stroke="#333" stroke-width="1.5"/>
    <line x1="20" y1="20" x2="25" y2="24" stroke="#333" stroke-width="1.5"/>
    <text x="46" y="23" font-size="8" text-anchor="middle" fill="#333" font-weight="700">FP</text>
    <rect x="6" y="8" width="7" height="5" fill="#2e2e2e" stroke="#d0d0d0" stroke-width="1.2"/>
    <rect x="47" y="8" width="7" height="5" fill="#2e2e2e" stroke="#d0d0d0" stroke-width="1.2"/>` },
  "volet-roulant": { vb: "0 0 50 60", w: 34, h: 42, svg: `
    <rect x="4" y="4" width="42" height="14" rx="2" fill="#8a8a8a" stroke="#333" stroke-width="1.5"/>
    <rect x="4" y="20" width="42" height="34" rx="2" fill="#eaf3fc" stroke="#2f6fd1" stroke-width="1.5"/>
    ${[26, 32, 38, 44].map(y => `<line x1="4" y1="${y}" x2="46" y2="${y}" stroke="#2f6fd1" stroke-width="1"/>`).join("")}` },
  "inverseur-volet": { vb: "0 0 40 40", w: 26, h: 26, svg: `
    <rect x="3" y="3" width="34" height="34" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>
    <path d="M20 10 l-5 6 h10 z" fill="#333"/>
    <path d="M20 30 l-5 -6 h10 z" fill="#333"/>` },
  vmc: { vb: "0 0 50 50", w: 34, h: 34, svg: `
    <circle cx="25" cy="25" r="20" fill="#eef6ee" stroke="#2e8b2e" stroke-width="2"/>
    <path d="M25 25 q0 -14 10 -14 q4 6 -2 10 Z" fill="#2e8b2e"/>
    <path d="M25 25 q14 0 14 10 q-6 4 -10 -2 Z" fill="#2e8b2e"/>
    <path d="M25 25 q0 14 -10 14 q-4 -6 2 -10 Z" fill="#2e8b2e"/>
    <circle cx="25" cy="25" r="3" fill="#2e8b2e"/>` },
  differentiel: { vb: "0 0 60 50", w: 42, h: 35, svg: `
    <rect x="20" y="0" width="10" height="4" fill="#767e79"/>
    <rect x="20" y="46" width="10" height="4" fill="#767e79"/>
    <rect x="2" y="4" width="56" height="42" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <rect x="10" y="7" width="12" height="8" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1"/>
    <rect x="34" y="7" width="12" height="8" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1"/>
    <rect x="12" y="18" width="12" height="16" rx="2" fill="#f4f4f2" stroke="#333" stroke-width="1.3"/>
    <rect x="34" y="18" width="12" height="16" rx="2" fill="#f4f4f2" stroke="#333" stroke-width="1.3"/>
    <line x1="18" y1="21" x2="18" y2="31" stroke="#c0392b" stroke-width="3" stroke-linecap="round" transform="rotate(-16 18 26)"/>
    <line x1="40" y1="21" x2="40" y2="31" stroke="#2f6fd1" stroke-width="3" stroke-linecap="round" transform="rotate(-16 40 26)"/>
    <rect x="10" y="39" width="12" height="7" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1"/>
    <rect x="34" y="39" width="12" height="7" rx="1" fill="#2e2e2e" stroke="#000" stroke-width="1"/>` },
  "plaque-cuisson": { vb: "0 0 60 50", w: 40, h: 33, svg: `
    <rect x="2" y="2" width="56" height="46" rx="4" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
    <circle cx="18" cy="16" r="8" fill="none" stroke="#e08a1e" stroke-width="1.5"/>
    <circle cx="42" cy="16" r="6" fill="none" stroke="#e08a1e" stroke-width="1.5"/>
    <circle cx="18" cy="34" r="6" fill="none" stroke="#e08a1e" stroke-width="1.5"/>
    <circle cx="42" cy="34" r="8" fill="none" stroke="#e08a1e" stroke-width="1.5"/>` },
  "interrupteur-horaire": { vb: "0 0 40 40", w: 24, h: 24, svg: `
    <rect x="14" y="0" width="12" height="4" fill="#767e79"/>
    <rect x="14" y="36" width="12" height="4" fill="#767e79"/>
    <rect x="4" y="4" width="32" height="32" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <circle cx="20" cy="20" r="10" fill="#f4f4f2" stroke="#333" stroke-width="1.4"/>
    <line x1="20" y1="20" x2="20" y2="13" stroke="#333" stroke-width="1.4"/>
    <line x1="20" y1="20" x2="25" y2="23" stroke="#333" stroke-width="1.4"/>` },
  "module-yokis": { vb: "0 0 50 50", w: 34, h: 34, svg: `
    <rect x="18" y="4" width="14" height="4" fill="#767e79"/>
    <rect x="18" y="42" width="14" height="4" fill="#767e79"/>
    <rect x="6" y="10" width="38" height="30" rx="3" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.3"/>
    <text x="25" y="30" font-size="13" text-anchor="middle" fill="#7b3fa0" font-weight="700">Y</text>
    <path d="M36 8 q4 -4 8 0" fill="none" stroke="#7b3fa0" stroke-width="1.5"/>
    <path d="M38 5 q6 -6 12 0" fill="none" stroke="#7b3fa0" stroke-width="1.5"/>
    <rect x="10" y="14" width="7" height="5" fill="#2e2e2e" stroke="#d0d0d0" stroke-width="1.2"/>
    <rect x="33" y="14" width="7" height="5" fill="#2e2e2e" stroke="#d0d0d0" stroke-width="1.2"/>` },
  // ---- Icônes utilisées uniquement comme illustrations de cours (pas de montage atelier associé) ----
  fusible: { vb: "0 0 60 30", w: 42, h: 21, svg: `
    <rect x="4" y="8" width="52" height="14" rx="7" fill="#fdf6e3" stroke="#8a6d00" stroke-width="2"/>
    <line x1="20" y1="15" x2="40" y2="15" stroke="#c0392b" stroke-width="2"/>
    <circle cx="8" cy="15" r="3" fill="#888"/>
    <circle cx="52" cy="15" r="3" fill="#888"/>` },
  parafoudre: { vb: "0 0 50 60", w: 34, h: 40, svg: `
    <rect x="6" y="4" width="38" height="44" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>
    <path d="M28 10 L18 28 h8 l-6 16 16 -22 h-9 z" fill="#e08a1e"/>
    <line x1="25" y1="48" x2="25" y2="56" stroke="#2e8b2e" stroke-width="3"/>` },
  "protection-ip": { vb: "0 0 50 55", w: 32, h: 35, svg: `
    <path d="M25 3 L45 10 V27 Q45 42 25 52 Q5 42 5 27 V10 Z" fill="#eaf3fc" stroke="#2f6fd1" stroke-width="2"/>
    <path d="M25 20 q7 10 0 16 q-7 -6 0 -16 Z" fill="#2f6fd1"/>` },
  "salle-bain": { vb: "0 0 60 40", w: 42, h: 28, svg: `
    <path d="M6 20 h48 v6 a10 10 0 0 1 -10 10 H16 A10 10 0 0 1 6 26 Z" fill="#eaf3fc" stroke="#2f6fd1" stroke-width="2"/>
    <line x1="2" y1="20" x2="58" y2="20" stroke="#2f6fd1" stroke-width="2"/>
    <circle cx="12" cy="14" r="3" fill="#2f6fd1"/>` },
  cable: { vb: "0 0 60 30", w: 44, h: 22, svg: `
    <path d="M4 15 q6 -12 12 0 t12 0 t12 0 t12 0" fill="none" stroke="#e08a1e" stroke-width="3"/>` },
  "chemin-cable": { vb: "0 0 70 30", w: 50, h: 21, svg: `
    <rect x="2" y="10" width="66" height="14" fill="#e8e8e8" stroke="#666" stroke-width="1.5"/>
    ${[10, 20, 30, 40, 50, 60].map(x => `<line x1="${x}" y1="10" x2="${x}" y2="24" stroke="#666" stroke-width="1"/>`).join("")}` },
  alarme: { vb: "0 0 40 45", w: 28, h: 32, svg: `
    <path d="M20 4 Q10 4 10 18 L7 30 h26 l-3 -12 Q30 4 20 4 Z" fill="#f5d0d0" stroke="#c0392b" stroke-width="2"/>
    <circle cx="20" cy="36" r="4" fill="#c0392b"/>` },
  "controle-acces": { vb: "0 0 40 50", w: 26, h: 33, svg: `
    <rect x="6" y="4" width="28" height="40" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>
    <rect x="12" y="12" width="16" height="10" rx="2" fill="#2f6fd1"/>
    <circle cx="20" cy="32" r="3" fill="#333"/>` },
  portail: { vb: "0 0 70 40", w: 48, h: 27, svg: `
    <line x1="4" y1="36" x2="66" y2="36" stroke="#666" stroke-width="2"/>
    <rect x="8" y="10" width="24" height="26" fill="none" stroke="#555" stroke-width="2"/>
    <line x1="8" y1="10" x2="32" y2="36" stroke="#555" stroke-width="1.5"/>
    <line x1="32" y1="10" x2="8" y2="36" stroke="#555" stroke-width="1.5"/>
    <rect x="8" y="4" width="6" height="8" fill="#333"/>` },
  garage: { vb: "0 0 50 50", w: 34, h: 34, svg: `
    <path d="M4 46 V18 L25 4 L46 18 V46 Z" fill="none" stroke="#333" stroke-width="2"/>
    ${[24, 30, 36, 42].map(y => `<line x1="8" y1="${y}" x2="42" y2="${y}" stroke="#333" stroke-width="1.3"/>`).join("")}` },
  rj45: { vb: "0 0 40 50", w: 26, h: 33, svg: `
    <rect x="10" y="4" width="20" height="30" rx="2" fill="#eee" stroke="#333" stroke-width="1.5"/>
    ${[13, 17, 21, 25, 29].map(x => `<line x1="${x}" y1="34" x2="${x}" y2="42" stroke="#e08a1e" stroke-width="1.3"/>`).join("")}` },
  domotique: { vb: "0 0 50 50", w: 34, h: 34, svg: `
    <path d="M25 6 L46 22 V44 H4 V22 Z" fill="#eef6ee" stroke="#2e8b2e" stroke-width="2"/>
    <path d="M18 30 a10 10 0 0 1 14 0" fill="none" stroke="#2e8b2e" stroke-width="1.5"/>
    <circle cx="25" cy="36" r="2" fill="#2e8b2e"/>` },
  photovoltaique: { vb: "0 0 60 40", w: 42, h: 28, svg: `
    <rect x="4" y="6" width="52" height="30" fill="#1f3b5c" stroke="#333" stroke-width="2"/>
    ${[17, 30, 43].map(x => `<line x1="${x}" y1="6" x2="${x}" y2="36" stroke="#5b8ac0" stroke-width="1.3"/>`).join("")}
    <line x1="4" y1="21" x2="56" y2="21" stroke="#5b8ac0" stroke-width="1.3"/>` },
  irve: { vb: "0 0 40 50", w: 26, h: 33, svg: `
    <rect x="8" y="4" width="24" height="34" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="20" cy="16" r="6" fill="none" stroke="#2e8b2e" stroke-width="1.5"/>
    <path d="M20 32 l-4 8 h8 z" fill="#e08a1e"/>` },
  tgbt: { vb: "0 0 60 60", w: 40, h: 40, svg: `
    <rect x="4" y="4" width="52" height="52" rx="3" fill="#f6f8f5" stroke="#666" stroke-width="2"/>
    ${[[12, 12], [30, 12], [12, 26], [30, 26], [12, 40], [30, 40]].map(([x, y]) => `<rect x="${x}" y="${y}" width="14" height="10" fill="#fff" stroke="#333" stroke-width="1"/>`).join("")}` },
  gache: { vb: "0 0 40 40", w: 26, h: 26, svg: `
    <rect x="4" y="4" width="32" height="32" rx="4" fill="#eee" stroke="#333" stroke-width="2"/>
    <rect x="12" y="14" width="16" height="12" rx="2" fill="#999" stroke="#333" stroke-width="1.3"/>
    <rect x="16" y="8" width="8" height="8" fill="#c0392b"/>` },
  cellule: { vb: "0 0 60 30", w: 40, h: 20, svg: `
    <rect x="2" y="8" width="12" height="14" rx="2" fill="#fff" stroke="#333" stroke-width="1.6"/>
    <rect x="46" y="8" width="12" height="14" rx="2" fill="#fff" stroke="#333" stroke-width="1.6"/>
    <line x1="14" y1="15" x2="46" y2="15" stroke="#c0392b" stroke-width="1.3" stroke-dasharray="3,3"/>` },
  onduleur: { vb: "0 0 60 50", w: 40, h: 33, svg: `
    <rect x="2" y="2" width="56" height="46" rx="4" fill="#e2e4e0" stroke="#3d4548" stroke-width="2.2"/>
    <path d="M8 30 q6 -14 12 0 t12 0 t12 0" fill="none" stroke="#e08a1e" stroke-width="2"/>
    <line x1="30" y1="8" x2="30" y2="18" stroke="#2f6fd1" stroke-width="2.5"/>` },
  "coffret-vdi": { vb: "0 0 60 60", w: 40, h: 40, svg: `
    <rect x="4" y="4" width="52" height="52" rx="4" fill="#f6f8f5" stroke="#666" stroke-width="2"/>
    ${[[12, 12], [30, 12], [12, 30], [30, 30]].map(([x, y]) => `<rect x="${x}" y="${y}" width="14" height="14" fill="#fff" stroke="#333" stroke-width="1.2"/>`).join("")}` },
  "piquet-terre": { vb: "0 0 40 60", w: 26, h: 40, svg: `
    <line x1="20" y1="4" x2="20" y2="44" stroke="#888" stroke-width="4"/>
    <path d="M20 44 L14 56 M20 44 L26 56" stroke="#888" stroke-width="4" stroke-linecap="round"/>
    <line x1="6" y1="4" x2="20" y2="4" stroke="#2e8b2e" stroke-width="3"/>
    <circle cx="6" cy="4" r="3" fill="#2e8b2e"/>` },
  bobine: { vb: "0 0 50 40", w: 34, h: 27, svg: `
    <rect x="4" y="8" width="42" height="24" rx="3" fill="#fff" stroke="#333" stroke-width="2"/>
    ${[12, 19, 26, 33, 40].map(x => `<line x1="${x}" y1="8" x2="${x}" y2="32" stroke="#7b3fa0" stroke-width="1.6"/>`).join("")}` },
  baes: { vb: "0 0 50 40", w: 34, h: 27, svg: `
    <rect x="4" y="4" width="42" height="26" rx="3" fill="#1a1a1a" stroke="#333" stroke-width="1.5"/>
    <path d="M25 8 L17 20 h6 l-2 10 12 -14 h-7 z" fill="#2ecc71"/>
    <line x1="14" y1="34" x2="36" y2="34" stroke="#333" stroke-width="2"/>` },
  "of-sd": { vb: "0 0 60 40", w: 42, h: 28, svg: `
    <rect x="4" y="4" width="52" height="32" fill="none" stroke="#333" stroke-width="2"/>
    <line x1="4" y1="4" x2="30" y2="36" stroke="#666" stroke-width="1.5"/>
    <rect x="30" y="4" width="26" height="32" fill="#eaf3fc" stroke="#2f6fd1" stroke-width="1.5" transform="rotate(-25 43 20)"/>` },
  "coffret-chantier": { vb: "0 0 60 60", w: 40, h: 40, svg: `
    <rect x="6" y="10" width="48" height="44" rx="4" fill="#fce8b0" stroke="#8a6d00" stroke-width="2.5"/>
    <circle cx="20" cy="34" r="7" fill="#fff" stroke="#333" stroke-width="1.5"/>
    <circle cx="40" cy="34" r="7" fill="#fff" stroke="#333" stroke-width="1.5"/>
    <rect x="14" y="14" width="32" height="10" fill="#333"/>` }
};

function compIcon(type) {
  const spec = COMP_ICONS[type];
  if (!spec) return "";
  return `<svg viewBox="${spec.vb}" width="${spec.w}" height="${spec.h}">${spec.svg}</svg>`;
}

// ---------- Fond "tableau électrique" (coffret + rail DIN) ----------
// Types de composants réellement montés sur rail DIN dans un tableau électrique.
// Le bornier/bornier-terre est volontairement exclu : il est traité comme une
// boîte de dérivation murale distincte (voir COMP_ICONS.bornier).
const TABLEAU_RAIL_TYPES = new Set([
  "disjoncteur", "differentiel", "telerupteur", "contacteur", "minuterie",
  "compteur", "transformateur", "programmateur", "interrupteur-horaire", "module-yokis"
]);
const TABLEAU_PADDING = 20;
const TABLEAU_MERGE_GAP = 60; // écart horizontal max pour regrouper des modules dans le même coffret

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

// Calcule un (ou plusieurs) coffret(s) "tableau électrique" en regroupant les
// modules rail DIN par proximité horizontale, pour ne jamais engloutir un
// composant étranger (bouton-poussoir, détecteur...) positionné entre deux
// modules éloignés sur le même plan de travail.
function computeTableauBoxes(exo) {
  const comps = exo.components.filter(c => TABLEAU_RAIL_TYPES.has(c.type));
  if (!comps.length) return [];
  const others = exo.components.filter(c => !TABLEAU_RAIL_TYPES.has(c.type));

  const sorted = comps.slice().sort((a, b) => a.x - b.x);
  const groups = [];
  let current = [sorted[0]];
  let currentMaxX = sorted[0].x + sorted[0].w;
  for (let i = 1; i < sorted.length; i++) {
    const c = sorted[i];
    if (c.x - currentMaxX <= TABLEAU_MERGE_GAP) {
      current.push(c);
      currentMaxX = Math.max(currentMaxX, c.x + c.w);
    } else {
      groups.push(current);
      current = [c];
      currentMaxX = c.x + c.w;
    }
  }
  groups.push(current);

  return groups.map(group => {
    const minX = Math.min(...group.map(c => c.x));
    const minY = Math.min(...group.map(c => c.y));
    const maxX = Math.max(...group.map(c => c.x + c.w));
    const maxY = Math.max(...group.map(c => c.y + c.h));
    // Réduit le rembourrage si un composant étranger est trop proche, pour ne
    // jamais le faire déborder visuellement dans le coffret.
    let pad = TABLEAU_PADDING;
    const tight = { x: minX - pad, y: minY - pad, w: (maxX - minX) + pad * 2, h: (maxY - minY) + pad * 2 };
    if (others.some(o => rectsOverlap(tight, o))) pad = 6;
    return {
      x: Math.max(0, minX - pad),
      y: Math.max(0, minY - pad - 24), // place pour l'étiquette
      w: (maxX - minX) + pad * 2,
      h: (maxY - minY) + pad * 2 + 24
    };
  });
}

function renderTableauEnclosure(exo, canvas) {
  const boxes = computeTableauBoxes(exo);
  boxes.forEach(box => {
    const enclosure = document.createElement("div");
    enclosure.className = "tableau-enclosure";
    enclosure.style.left = box.x + "px";
    enclosure.style.top = box.y + "px";
    enclosure.style.width = box.w + "px";
    enclosure.style.height = box.h + "px";
    const label = document.createElement("span");
    label.className = "tableau-label";
    label.textContent = "Tableau électrique";
    enclosure.appendChild(label);
    canvas.appendChild(enclosure);
  });
}

// ---------- Info-bulles sur les composants ----------
function renderInfoIcon(comp, canvas) {
  if (!comp.info) return;
  const icon = document.createElement("div");
  icon.className = "info-icon";
  icon.textContent = "i";
  icon.style.left = (comp.x + comp.w - 10) + "px";
  icon.style.top = (comp.y - 10) + "px";
  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleInfoPopup(icon, comp.label, comp.info);
  });
  canvas.appendChild(icon);
}

function toggleInfoPopup(anchorEl, title, text) {
  const popup = document.getElementById("info-popup");
  if (popup.dataset.owner === anchorEl.dataset.uid && !popup.classList.contains("hidden")) {
    popup.classList.add("hidden");
    popup.dataset.owner = "";
    return;
  }
  if (!anchorEl.dataset.uid) {
    anchorEl.dataset.uid = "icon-" + Math.random().toString(36).slice(2);
  }
  popup.innerHTML = `<strong>${title}</strong><p>${text}</p>`;
  const rect = anchorEl.getBoundingClientRect();
  popup.style.left = Math.min(rect.left, window.innerWidth - 300) + "px";
  popup.style.top = (rect.bottom + 6) + "px";
  popup.classList.remove("hidden");
  popup.dataset.owner = anchorEl.dataset.uid;
}

document.addEventListener("click", (e) => {
  const popup = document.getElementById("info-popup");
  if (!popup || popup.classList.contains("hidden")) return;
  if (e.target.closest("#info-popup") || e.target.closest(".info-icon")) return;
  popup.classList.add("hidden");
  popup.dataset.owner = "";
});

// ---------- Liste des exercices ----------
function renderAtelierList() {
  const container = document.getElementById("atelier-list");
  container.innerHTML = "";
  ATELIER_EXERCISES.forEach(exo => {
    const card = document.createElement("div");
    card.className = "exo-card";
    card.innerHTML = `
      <span class="exo-diff exo-diff-${exo.difficulte}">${exo.difficulte}</span>
      <h4>${exo.nom}</h4>
      <p>${exo.description}</p>
      <button class="btn btn-primary">🔌 Commencer</button>
    `;
    card.querySelector("button").addEventListener("click", () => openExercise(exo.id));
    container.appendChild(card);
  });
}

function findComp(exo, compId) {
  return exo.components.find(c => c.id === compId);
}
function findTerm(exo, compId, termId) {
  const comp = findComp(exo, compId);
  return comp.terminals.find(t => t.id === termId);
}

// ---------- Ouverture d'un exercice ----------
function openExercise(exoId) {
  currentExo = ATELIER_EXERCISES.find(e => e.id === exoId);
  userConnections = [];
  userCalibre = {};
  userSection = null;
  selectedRole = null;

  document.getElementById("atelier-exo-title").textContent = currentExo.nom;
  document.getElementById("atelier-result").className = "atelier-result hidden";

  renderRolePalette();
  renderCanvas();
  showView("atelierWork");
  enterAtelierFullscreen();
}

// ---------- Palette de couleurs de fils ----------
function renderRolePalette() {
  const rolesUsed = [...new Set(currentExo.connections.map(c => c.role))];
  const palette = document.getElementById("role-palette");
  palette.innerHTML = "";
  rolesUsed.forEach(roleKey => {
    const role = WIRE_ROLES[roleKey];
    const btn = document.createElement("button");
    btn.className = "role-btn";
    btn.dataset.role = roleKey;
    btn.style.setProperty("--role-color", role.color);
    btn.innerHTML = `<span class="swatch"></span>${role.label}`;
    btn.addEventListener("click", () => {
      selectedRole = roleKey;
      document.querySelectorAll(".role-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    palette.appendChild(btn);
  });
}

// ---------- Rendu du plan de travail ----------
function renderCanvas() {
  const wrap = document.getElementById("atelier-canvas-wrap");
  wrap.innerHTML = "";

  const sizer = document.createElement("div");
  sizer.id = "canvas-sizer";

  const canvas = document.createElement("div");
  canvas.id = "atelier-canvas";
  canvas.style.width = currentExo.canvasW + "px";
  canvas.style.height = currentExo.canvasH + "px";

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("id", "wires-svg");
  svg.setAttribute("width", currentExo.canvasW);
  svg.setAttribute("height", currentExo.canvasH);
  addTerrePattern(svg, "terre-pattern-live");
  canvas.appendChild(svg);

  renderTableauEnclosure(currentExo, canvas);

  // Composants + bornes
  currentExo.components.forEach(comp => {
    const box = document.createElement("div");
    box.className = `comp-box comp-${comp.family}`;
    box.style.left = comp.x + "px";
    box.style.top = comp.y + "px";
    box.style.width = comp.w + "px";
    box.style.height = comp.h + "px";
    box.dataset.comp = comp.id;
    box.innerHTML = `<div class="comp-icon">${compIcon(comp.type)}</div><span class="comp-label">${comp.label}</span>`;
    canvas.appendChild(box);
    renderInfoIcon(comp, canvas);

    if (comp.calibreOptions) {
      const sel = document.createElement("select");
      sel.className = "calibre-select";
      sel.style.left = comp.x + "px";
      sel.style.top = (comp.y + comp.h + 6) + "px";
      sel.style.width = comp.w + "px";
      sel.innerHTML = `<option value="">Calibre ?</option>` +
        comp.calibreOptions.map(v => `<option value="${v}">${v} A</option>`).join("");
      sel.addEventListener("change", () => { userCalibre[comp.id] = sel.value ? Number(sel.value) : null; });
      canvas.appendChild(sel);
    }

    comp.terminals.forEach(term => {
      if (term.network) {
        // Trait pointillé décoratif indiquant l'arrivée réseau
        const stub = document.createElementNS(SVG_NS, "line");
        stub.setAttribute("x1", term.x - 34);
        stub.setAttribute("y1", term.y);
        stub.setAttribute("x2", term.x - 6);
        stub.setAttribute("y2", term.y);
        stub.setAttribute("stroke", "#9aa5a0");
        stub.setAttribute("stroke-width", "3");
        stub.setAttribute("stroke-dasharray", "5,4");
        svg.appendChild(stub);

        const label = document.createElementNS(SVG_NS, "text");
        label.setAttribute("x", term.x - 34);
        label.setAttribute("y", term.y - 8);
        label.setAttribute("font-size", "10");
        label.setAttribute("fill", "#8a958f");
        label.textContent = "réseau";
        svg.appendChild(label);
      }

      const dot = document.createElement("div");
      dot.className = "terminal-dot" + (term.network ? " network" : "");
      dot.style.left = (term.x - 7) + "px";
      dot.style.top = (term.y - 7) + "px";
      dot.dataset.comp = comp.id;
      dot.dataset.term = term.id;
      dot.title = `${comp.label} — ${term.label}`;

      const tlabel = document.createElement("div");
      tlabel.className = "terminal-label";
      tlabel.style.left = (term.x - 7) + "px";
      tlabel.style.top = (term.y + 10) + "px";
      tlabel.textContent = term.label;
      canvas.appendChild(tlabel);

      if (!term.network) {
        dot.addEventListener("pointerdown", (e) => startWire(e, comp.id, term.id));
      }
      canvas.appendChild(dot);
    });
  });

  sizer.appendChild(canvas);
  wrap.appendChild(sizer);

  // Sélecteur de section globale
  const sectionBox = document.getElementById("section-select-wrap");
  sectionBox.innerHTML = "";
  if (currentExo.sectionOptions) {
    const sel = document.createElement("select");
    sel.id = "section-select";
    sel.innerHTML = `<option value="">Section du câble ?</option>` +
      currentExo.sectionOptions.map(v => `<option value="${v}">${v} mm²</option>`).join("");
    sel.addEventListener("change", () => { userSection = sel.value ? Number(sel.value) : null; });
    sectionBox.appendChild(sel);
  }

  applyZoom();
  redrawWires();
}

// ---------- Zoom / vue d'ensemble ----------
function applyZoom() {
  const canvas = document.getElementById("atelier-canvas");
  const sizer = document.getElementById("canvas-sizer");
  if (!canvas || !sizer || !currentExo) return;
  canvas.style.transform = `scale(${canvasZoom})`;
  sizer.style.width = (currentExo.canvasW * canvasZoom) + "px";
  sizer.style.height = (currentExo.canvasH * canvasZoom) + "px";
}

function setZoom(z) {
  canvasZoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));
  applyZoom();
}

function fitZoom() {
  const wrap = document.getElementById("atelier-canvas-wrap");
  if (!wrap || !currentExo) return;
  const availW = wrap.clientWidth - 20;
  const availH = wrap.clientHeight - 20;
  let z = Math.min(availW / currentExo.canvasW, availH / currentExo.canvasH);
  z = Math.min(ZOOM_MAX, z);
  setZoom(Math.max(ZOOM_MIN, z));
}

document.getElementById("btn-zoom-in").addEventListener("click", () => setZoom(canvasZoom + ZOOM_STEP));
document.getElementById("btn-zoom-out").addEventListener("click", () => setZoom(canvasZoom - ZOOM_STEP));
document.getElementById("btn-zoom-fit").addEventListener("click", fitZoom);

// ---------- Plein écran de l'atelier (avec bascule en paysage) ----------
function lockLandscape() {
  // Fonctionne sur Android/Chrome une fois en plein écran (rotation
  // automatique, comme une vidéo). Sur iOS Safari, l'API n'existe pas :
  // pas de bascule forcée, il suffit alors de tourner le téléphone à la
  // main, l'affichage plein écran s'adapte naturellement (voir resize
  // /orientationchange plus bas).
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("landscape").catch(() => {});
  }
}

// Ne sert qu'à savoir si on a vraiment réussi à passer en plein écran
// natif (API Fullscreen). Tant que ce n'est pas vrai, on ignore tout
// évènement "fullscreenchange" : sur certains navigateurs (Safari iOS
// notamment), une tentative de plein écran échouée peut quand même
// déclencher cet évènement, ce qui annulait aussitôt notre propre mode
// plein écran (CSS) sans que l'utilisateur n'ait rien demandé.
let nativeFullscreenEngaged = false;

function enterAtelierFullscreen() {
  document.body.classList.add("fs-atelier");
  const btn = document.getElementById("btn-fullscreen");
  if (btn) btn.classList.add("active");
  const el = document.getElementById("view-atelier-workshop");
  try {
    if (el && el.requestFullscreen) {
      el.requestFullscreen()
        .then(() => { nativeFullscreenEngaged = true; lockLandscape(); })
        .catch(lockLandscape);
    } else {
      lockLandscape();
    }
  } catch (e) {
    lockLandscape();
  }
  setTimeout(fitZoom, 150);
}

function exitAtelierFullscreen() {
  document.body.classList.remove("fs-atelier");
  nativeFullscreenEngaged = false;
  const btn = document.getElementById("btn-fullscreen");
  if (btn) btn.classList.remove("active");
  if (screen.orientation && screen.orientation.unlock) {
    try { screen.orientation.unlock(); } catch (e) {}
  }
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }
  setTimeout(fitZoom, 150);
}

function toggleAtelierFullscreen() {
  if (document.body.classList.contains("fs-atelier")) {
    exitAtelierFullscreen();
  } else {
    enterAtelierFullscreen();
  }
}

document.getElementById("btn-fullscreen").addEventListener("click", toggleAtelierFullscreen);

// Quand l'utilisateur tourne physiquement son téléphone (ou redimensionne
// la fenêtre), on réajuste le schéma à la nouvelle taille disponible —
// sans forcer aucune rotation CSS, pour éviter tout affichage instable.
window.addEventListener("resize", () => {
  if (document.body.classList.contains("fs-atelier")) fitZoom();
});
window.addEventListener("orientationchange", () => {
  if (document.body.classList.contains("fs-atelier")) setTimeout(fitZoom, 250);
});

// Si l'utilisateur quitte le plein écran natif (touche Echap, geste...)
// APRES qu'on a confirmé l'avoir réellement obtenu, on synchronise notre
// propre mode plein écran. On ignore l'évènement sinon (voir commentaire
// sur nativeFullscreenEngaged plus haut).
document.addEventListener("fullscreenchange", () => {
  if (nativeFullscreenEngaged && !document.fullscreenElement && document.body.classList.contains("fs-atelier")) {
    nativeFullscreenEngaged = false;
    document.body.classList.remove("fs-atelier");
    const btn = document.getElementById("btn-fullscreen");
    if (btn) btn.classList.remove("active");
    setTimeout(fitZoom, 50);
  }
});

// ---------- Pincement à deux doigts pour zoomer, limité au canevas ----------
(function setupPinchZoom() {
  const wrap = document.getElementById("atelier-canvas-wrap");
  if (!wrap) return;
  const pointers = new Map();
  let pinchStartDist = 0;
  let pinchStartZoom = 1;

  function dist(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  wrap.addEventListener("pointerdown", (evt) => {
    if (evt.pointerType !== "touch") return;
    pointers.set(evt.pointerId, { x: evt.clientX, y: evt.clientY });
    if (pointers.size === 2) {
      const pts = [...pointers.values()];
      pinchStartDist = dist(pts[0], pts[1]);
      pinchStartZoom = canvasZoom;
    }
  });

  wrap.addEventListener("pointermove", (evt) => {
    if (!pointers.has(evt.pointerId)) return;
    pointers.set(evt.pointerId, { x: evt.clientX, y: evt.clientY });
    if (pointers.size === 2 && pinchStartDist > 0) {
      evt.preventDefault();
      const pts = [...pointers.values()];
      const newDist = dist(pts[0], pts[1]);
      setZoom(pinchStartZoom * (newDist / pinchStartDist));
    }
  });

  function releasePointer(evt) {
    pointers.delete(evt.pointerId);
    if (pointers.size < 2) pinchStartDist = 0;
  }
  wrap.addEventListener("pointerup", releasePointer);
  wrap.addEventListener("pointercancel", releasePointer);
  wrap.addEventListener("pointerleave", releasePointer);
})();

// ---------- Position d'une borne dans le canvas ----------
function pointerCanvasPos(evt) {
  const canvas = document.getElementById("atelier-canvas");
  const rect = canvas.getBoundingClientRect();
  return { x: (evt.clientX - rect.left) / canvasZoom, y: (evt.clientY - rect.top) / canvasZoom };
}

// ---------- Tirage d'un câble ----------
function startWire(evt, compId, termId) {
  evt.preventDefault();
  if (!selectedRole) {
    showHint("👉 Choisis d'abord une couleur de fil dans la palette ci-dessus.");
    return;
  }
  const term = findTerm(currentExo, compId, termId);
  const svg = document.getElementById("wires-svg");
  const tempLine = document.createElementNS(SVG_NS, "path");
  tempLine.setAttribute("d", elbowPath(term.x, term.y, term.x, term.y));
  tempLine.setAttribute("fill", "none");
  tempLine.setAttribute("stroke", strokeForRole(selectedRole, "terre-pattern-live"));
  tempLine.setAttribute("stroke-width", "4");
  tempLine.setAttribute("stroke-dasharray", "2,4");
  svg.appendChild(tempLine);

  dragState = { fromComp: compId, fromTerm: termId, fromX: term.x, fromY: term.y, tempLine };

  window.addEventListener("pointermove", onWireMove);
  window.addEventListener("pointerup", onWireEnd);
}

function onWireMove(evt) {
  if (!dragState) return;
  const pos = pointerCanvasPos(evt);
  dragState.tempLine.setAttribute("d", elbowPath(dragState.fromX, dragState.fromY, pos.x, pos.y));
}

function onWireEnd(evt) {
  if (!dragState) return;
  const pos = pointerCanvasPos(evt);

  // Recherche de la borne la plus proche (hors bornes réseau)
  let best = null, bestDist = 18;
  currentExo.components.forEach(comp => {
    comp.terminals.forEach(term => {
      if (term.network) return;
      const d = Math.hypot(term.x - pos.x, term.y - pos.y);
      if (d < bestDist) { bestDist = d; best = { comp: comp.id, term: term.id }; }
    });
  });

  dragState.tempLine.remove();

  if (best && !(best.comp === dragState.fromComp && best.term === dragState.fromTerm)) {
    // Si un fil existe déjà entre ces deux mêmes bornes (dans un sens ou dans l'autre),
    // on le remplace au lieu d'en empiler un second par-dessus (ex. mauvaise couleur
    // posée par erreur : pas besoin de tout recommencer, il suffit de retirer le fil).
    for (let i = userConnections.length - 1; i >= 0; i--) {
      const c = userConnections[i];
      const sameDirect = c.from.comp === dragState.fromComp && c.from.term === dragState.fromTerm &&
                          c.to.comp === best.comp && c.to.term === best.term;
      const sameReverse = c.from.comp === best.comp && c.from.term === best.term &&
                           c.to.comp === dragState.fromComp && c.to.term === dragState.fromTerm;
      if (sameDirect || sameReverse) userConnections.splice(i, 1);
    }
    userConnections.push({
      from: { comp: dragState.fromComp, term: dragState.fromTerm },
      to: { comp: best.comp, term: best.term },
      role: selectedRole
    });
    redrawWires();
  }

  dragState = null;
  window.removeEventListener("pointermove", onWireMove);
  window.removeEventListener("pointerup", onWireEnd);
}

// ---------- Dessin des câbles posés ----------
function redrawWires() {
  const svg = document.getElementById("wires-svg");
  svg.querySelectorAll(".user-wire").forEach(el => el.remove());

  userConnections.forEach((conn, idx) => {
    const t1 = findTerm(currentExo, conn.from.comp, conn.from.term);
    const t2 = findTerm(currentExo, conn.to.comp, conn.to.term);
    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("class", "user-wire");
    path.setAttribute("d", elbowPath(t1.x, t1.y, t2.x, t2.y, currentExo.components, ((idx % 5) - 2) * 6));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", strokeForRole(conn.role, "terre-pattern-live"));
    path.setAttribute("stroke-width", "5");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.style.cursor = "pointer";
    path.addEventListener("click", () => {
      userConnections.splice(idx, 1);
      redrawWires();
    });
    const title = document.createElementNS(SVG_NS, "title");
    title.textContent = "Cliquer pour supprimer ce câble";
    path.appendChild(title);
    svg.appendChild(path);
  });
}

function showHint(msg) {
  const hint = document.getElementById("atelier-hint");
  hint.textContent = msg;
  hint.classList.remove("hidden");
  clearTimeout(showHint._t);
  showHint._t = setTimeout(() => hint.classList.add("hidden"), 3000);
}

// ---------- Vérification du montage ----------
// La vérification se fait par équivalence électrique (groupes de bornes reliées
// entre elles) et non par correspondance exacte fil à fil : deux bornes qui
// doivent être au même potentiel (ex. tous les points "neutre" d'un montage)
// peuvent être reliées directement, en chaîne, ou dans un ordre différent de
// celui du schéma de référence, du moment que le résultat électrique est le
// même et que la couleur de fil (rôle) est correcte.
function makeUnionFind() {
  const parent = {};
  function find(x) {
    if (!(x in parent)) parent[x] = x;
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }
  function union(a, b) {
    const ra = find(a), rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  }
  return { parent, find, union };
}
function termKey(comp, term) {
  return comp + "." + term;
}
function labelOfKey(key) {
  const [comp, term] = key.split(".");
  return labelOf({ comp, term });
}

function checkCircuit() {
  const issues = [];

  // 1) Regrouper les connexions attendues par rôle : chaque composante connexe
  //    d'un même rôle forme un "réseau" électrique que l'utilisateur doit
  //    reconstituer (peu importe le chemin exact emprunté).
  const roleUF = {};
  currentExo.connections.forEach(c => {
    if (!roleUF[c.role]) roleUF[c.role] = makeUnionFind();
    roleUF[c.role].find(c.from);
    roleUF[c.role].find(c.to);
    roleUF[c.role].union(c.from, c.to);
  });

  // 1bis) Les bornes d'un bornier de distribution (type "bornier"/"bornier-terre",
  //    ex. Bornier Neutre N1/N2) sont physiquement pontées en interne : ce sont
  //    électriquement le même point, quelle que soit la sortie utilisée. On les
  //    fusionne, rôle par rôle (une borne peut ne compter que pour certains rôles).
  currentExo.components.forEach(comp => {
    if (comp.type !== "bornier" && comp.type !== "bornier-terre") return;
    const outKeys = comp.terminals.filter(t => !t.network).map(t => termKey(comp.id, t.id));
    Object.keys(roleUF).forEach(role => {
      const uf = roleUF[role];
      const present = outKeys.filter(k => k in uf.parent);
      for (let i = 1; i < present.length; i++) uf.union(present[0], present[i]);
    });
  });

  // 2) Une même borne peut légitimement appartenir à plusieurs rôles différents
  //    (ex. la sortie d'un disjoncteur alimente à la fois le circuit "phase" et le
  //    circuit "commande" des boutons poussoirs) : on ne peut donc pas lui assigner
  //    un rôle unique. À la place, pour chaque fil posé, on vérifie sa validité dans
  //    le référentiel du rôle que l'utilisateur a lui-même choisi pour ce fil.
  function isKnownTerminal(key) {
    return Object.keys(roleUF).some(role => key in roleUF[role].parent);
  }

  // 3) Rejouer les fils posés par l'utilisateur pour reconstituer ses propres réseaux.
  const userUF = makeUnionFind();
  // Même pontage interne des borniers de distribution que dans le référentiel (1bis) :
  // c'est un fait physique du composant, pas un fil que l'apprenant doit poser lui-même.
  currentExo.components.forEach(comp => {
    if (comp.type !== "bornier" && comp.type !== "bornier-terre") return;
    const outKeys = comp.terminals.filter(t => !t.network).map(t => termKey(comp.id, t.id));
    for (let i = 1; i < outKeys.length; i++) userUF.union(outKeys[0], outKeys[i]);
  });
  userConnections.forEach(conn => {
    const k1 = termKey(conn.from.comp, conn.from.term);
    const k2 = termKey(conn.to.comp, conn.to.term);
    userUF.find(k1);
    userUF.find(k2);

    const chosenUF = roleUF[conn.role];
    if (chosenUF && (k1 in chosenUF.parent) && (k2 in chosenUF.parent) && chosenUF.find(k1) === chosenUF.find(k2)) {
      // Les deux bornes doivent bien être reliées ensemble, avec la bonne couleur.
      userUF.union(k1, k2);
      return;
    }

    // Existe-t-il un rôle sous lequel ces deux bornes forment bien un même réseau ?
    const matchRole = Object.keys(roleUF).find(role => {
      const uf = roleUF[role];
      return (k1 in uf.parent) && (k2 in uf.parent) && uf.find(k1) === uf.find(k2);
    });

    if (matchRole) {
      issues.push(`Mauvaise couleur de fil entre ${labelOfKey(k1)} et ${labelOfKey(k2)} : attendu "${WIRE_ROLES[matchRole].label}", posé "${WIRE_ROLES[conn.role].label}".`);
      userUF.union(k1, k2);
    } else if (isKnownTerminal(k1) && isKnownTerminal(k2)) {
      issues.push(`Connexion incorrecte entre ${labelOfKey(k1)} et ${labelOfKey(k2)} : ces deux points ne doivent pas être reliés ensemble.`);
    } else {
      issues.push(`Connexion incorrecte ou en trop entre ${labelOfKey(k1)} et ${labelOfKey(k2)}.`);
    }
  });

  // 4) Vérifier que chaque réseau attendu est bien entièrement reconstitué côté utilisateur,
  //    quel que soit le chemin emprunté pour y arriver.
  Object.keys(roleUF).forEach(role => {
    const uf = roleUF[role];
    const members = {}; // root -> [keys]
    Object.keys(uf.parent).forEach(key => {
      const root = uf.find(key);
      (members[root] = members[root] || []).push(key);
    });
    Object.values(members).forEach(group => {
      if (group.length < 2) return;
      const subGroups = {}; // userUF root -> [keys]
      group.forEach(key => {
        const root = userUF.find(key);
        (subGroups[root] = subGroups[root] || []).push(key);
      });
      const parts = Object.values(subGroups);
      if (parts.length > 1) {
        for (let i = 1; i < parts.length; i++) {
          issues.push(`Connexion manquante entre ${labelOfKey(parts[0][0])} et ${labelOfKey(parts[i][0])} (fil ${WIRE_ROLES[role].label}).`);
        }
      }
    });
  });

  currentExo.components.forEach(comp => {
    if (comp.calibreOptions) {
      const chosen = userCalibre[comp.id] || null;
      if (chosen !== comp.calibreCorrect) {
        issues.push(`Calibre incorrect pour "${comp.label}" : attendu ${comp.calibreCorrect} A.`);
      }
    }
  });

  if (currentExo.sectionOptions) {
    if (userSection !== currentExo.sectionCorrect) {
      issues.push(`Section de câble incorrecte : attendu ${currentExo.sectionCorrect} mm².`);
    }
  }

  const resultBox = document.getElementById("atelier-result");
  const target = document.querySelector(`.comp-box[data-comp="${currentExo.successTarget}"]`);
  if (target) target.classList.remove("success-glow");

  if (issues.length === 0) {
    resultBox.className = "atelier-result success";
    resultBox.innerHTML = `<strong>✅ Ça fonctionne !</strong> Le montage "${currentExo.nom}" est conforme.`;
    if (target) target.classList.add("success-glow");
  } else {
    resultBox.className = "atelier-result error";
    resultBox.innerHTML = `<strong>⚠️ ${issues.length} point(s) à corriger :</strong><ul>` +
      issues.map(i => `<li>${i}</li>`).join("") + `</ul>`;
  }
  resultBox.classList.remove("hidden");
}

function labelOfExo(exo, compId, termId) {
  const comp = findComp(exo, compId);
  const term = findTerm(exo, compId, termId);
  return `${comp.label} (${term.label})`;
}
function labelOf(ref) {
  return labelOfExo(currentExo, ref.comp, ref.term);
}

// ---------- Schéma statique réutilisable d'un montage (aide + fiches de cours) ----------
function buildExoSchema(exo) {
  const patternId = "terre-pattern-" + Math.random().toString(36).slice(2);
  const wrap = document.createElement("div");
  wrap.className = "exo-schema-wrap";
  const canvas = document.createElement("div");
  canvas.className = "exo-schema-canvas";
  canvas.style.width = exo.canvasW + "px";
  canvas.style.height = exo.canvasH + "px";

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("width", exo.canvasW);
  svg.setAttribute("height", exo.canvasH);
  addTerrePattern(svg, patternId);
  canvas.appendChild(svg);

  renderTableauEnclosure(exo, canvas);

  exo.components.forEach(comp => {
    const box = document.createElement("div");
    box.className = `comp-box comp-${comp.family}`;
    box.style.left = comp.x + "px";
    box.style.top = comp.y + "px";
    box.style.width = comp.w + "px";
    box.style.height = comp.h + "px";
    box.innerHTML = `<div class="comp-icon">${compIcon(comp.type)}</div><span class="comp-label">${comp.label}</span>`;
    canvas.appendChild(box);
    renderInfoIcon(comp, canvas);
    comp.terminals.forEach(term => {
      const dot = document.createElement("div");
      dot.className = "terminal-dot" + (term.network ? " network" : "");
      dot.style.left = (term.x - 7) + "px";
      dot.style.top = (term.y - 7) + "px";
      canvas.appendChild(dot);
    });
  });

  exo.connections.forEach((c, idx) => {
    const [c1, t1] = c.from.split(".");
    const [c2, t2] = c.to.split(".");
    const p1 = findTerm(exo, c1, t1);
    const p2 = findTerm(exo, c2, t2);
    const line = document.createElementNS(SVG_NS, "path");
    line.setAttribute("d", elbowPath(p1.x, p1.y, p2.x, p2.y, exo.components, ((idx % 5) - 2) * 6));
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", strokeForRole(c.role, patternId));
    line.setAttribute("stroke-width", "5");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("stroke-linejoin", "round");
    svg.appendChild(line);
  });

  wrap.appendChild(canvas);
  return wrap;
}

function buildExoLegend(exo) {
  const list = document.createElement("ul");
  list.className = "help-list";
  exo.connections.forEach(c => {
    const [c1, t1] = c.from.split(".");
    const [c2, t2] = c.to.split(".");
    const role = WIRE_ROLES[c.role];
    const swatchStyle = c.role === "terre"
      ? "background:repeating-linear-gradient(45deg,#2e8b2e,#2e8b2e 3px,#e8d21e 3px,#e8d21e 6px)"
      : `background:${role.color}`;
    list.innerHTML += `<li><span class="swatch" style="${swatchStyle}"></span>
      <strong>${role.label}</strong> : ${labelOfExo(exo, c1, t1)} → ${labelOfExo(exo, c2, t2)}</li>`;
  });
  return list;
}

function buildExoInfos(exo) {
  if (!exo.components.some(c => c.calibreOptions) && !exo.sectionOptions) return null;
  const infos = document.createElement("p");
  infos.className = "help-infos";
  let txt = "";
  exo.components.forEach(c => {
    if (c.calibreOptions) txt += `Calibre "${c.label}" : ${c.calibreCorrect} A. `;
  });
  if (exo.sectionOptions) txt += `Section de câble : ${exo.sectionCorrect} mm².`;
  infos.textContent = txt;
  return infos;
}

// ---------- Aide : afficher la solution ----------
function openHelp() {
  const modal = document.getElementById("help-modal");
  const body = document.getElementById("help-body");
  body.innerHTML = "";

  body.appendChild(buildExoSchema(currentExo));
  body.appendChild(buildExoLegend(currentExo));
  const infos = buildExoInfos(currentExo);
  if (infos) body.appendChild(infos);

  modal.classList.remove("hidden");
}

function closeHelp() {
  document.getElementById("help-modal").classList.add("hidden");
}

// ---------- Listeners globaux ----------
document.getElementById("btn-atelier").addEventListener("click", () => {
  renderAtelierList();
  showView("atelierList");
});
document.getElementById("btn-back-atelier-list").addEventListener("click", () => {
  showView("home");
});
document.getElementById("btn-quit-atelier").addEventListener("click", () => {
  exitAtelierFullscreen();
  showView("atelierList");
});
document.getElementById("btn-check-circuit").addEventListener("click", checkCircuit);
document.getElementById("btn-undo-wire").addEventListener("click", () => {
  if (userConnections.length === 0) return;
  userConnections.pop();
  redrawWires();
  document.getElementById("atelier-result").classList.add("hidden");
  const target = document.querySelector(`.comp-box[data-comp="${currentExo.successTarget}"]`);
  if (target) target.classList.remove("success-glow");
});
document.getElementById("btn-reset-circuit").addEventListener("click", () => {
  userConnections = [];
  redrawWires();
  document.getElementById("atelier-result").classList.add("hidden");
  const target = document.querySelector(`.comp-box[data-comp="${currentExo.successTarget}"]`);
  if (target) target.classList.remove("success-glow");
});
document.getElementById("btn-help").addEventListener("click", openHelp);
document.getElementById("btn-close-help").addEventListener("click", closeHelp);
