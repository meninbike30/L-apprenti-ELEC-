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

// ---------- Tracé des câbles à angle droit ----------
function elbowPath(x1, y1, x2, y2) {
  if (Math.abs(y1 - y2) < 0.5) return `M ${x1} ${y1} L ${x2} ${y2}`;
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${y1} H ${midX} V ${y2} H ${x2}`;
}

// ---------- Icônes réalistes des composants ----------
const COMP_ICONS = {
  disjoncteur: { vb: "0 0 40 50", w: 24, h: 30, svg: `
    <rect x="2" y="2" width="36" height="46" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>
    <rect x="13" y="9" width="14" height="20" rx="2" fill="#eee" stroke="#333" stroke-width="1.5"/>
    <line x1="20" y1="12" x2="20" y2="24" stroke="#c0392b" stroke-width="4" stroke-linecap="round" transform="rotate(-18 20 18)"/>
    <text x="20" y="42" font-size="9" text-anchor="middle" fill="#333" font-weight="700">A</text>` },
  bornier: { vb: "0 0 70 30", w: 48, h: 20, svg: `
    <rect x="2" y="6" width="66" height="18" rx="2" fill="#f0ede0" stroke="#333" stroke-width="1.5"/>
    ${[10, 26, 42, 58].map(x => `<circle cx="${x}" cy="15" r="4" fill="#bbb" stroke="#333" stroke-width="1"/>`).join("")}` },
  "bornier-terre": { vb: "0 0 70 30", w: 48, h: 20, svg: `
    <rect x="2" y="6" width="66" height="18" rx="2" fill="#e7f3e2" stroke="#2e8b2e" stroke-width="1.5"/>
    ${[10, 26, 42, 58].map(x => `<circle cx="${x}" cy="15" r="4" fill="#8fc27a" stroke="#2e8b2e" stroke-width="1"/>`).join("")}` },
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
  telerupteur: { vb: "0 0 60 50", w: 46, h: 38, svg: `
    <rect x="2" y="2" width="56" height="46" rx="4" fill="#f3e9f8" stroke="#7b3fa0" stroke-width="2"/>
    <circle cx="18" cy="25" r="9" fill="none" stroke="#7b3fa0" stroke-width="2"/>
    <text x="18" y="29" font-size="9" text-anchor="middle" fill="#7b3fa0" font-weight="700">A</text>
    <rect x="36" y="15" width="16" height="20" fill="none" stroke="#333" stroke-width="2"/>` },
  contacteur: { vb: "0 0 60 50", w: 46, h: 38, svg: `
    <rect x="2" y="2" width="56" height="46" rx="4" fill="#f3e9f8" stroke="#7b3fa0" stroke-width="2"/>
    <circle cx="18" cy="25" r="9" fill="none" stroke="#7b3fa0" stroke-width="2"/>
    <text x="18" y="29" font-size="9" text-anchor="middle" fill="#7b3fa0" font-weight="700">A</text>
    <rect x="36" y="15" width="16" height="20" fill="none" stroke="#333" stroke-width="2"/>` },
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
    <rect x="2" y="2" width="66" height="36" rx="4" fill="#f6f8f5" stroke="#666" stroke-width="2"/>
    <rect x="10" y="10" width="50" height="14" fill="#222"/>
    <text x="35" y="21" font-size="9" text-anchor="middle" fill="#5bd15b" font-family="monospace">01234</text>` },
  permutateur: { vb: "0 0 40 40", w: 26, h: 26, svg: `
    <rect x="3" y="3" width="34" height="34" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="10" cy="10" r="2.5" fill="#333"/>
    <circle cx="30" cy="10" r="2.5" fill="#333"/>
    <circle cx="10" cy="30" r="2.5" fill="#333"/>
    <circle cx="30" cy="30" r="2.5" fill="#333"/>
    <line x1="10" y1="10" x2="30" y2="30" stroke="#333" stroke-width="1.5"/>
    <line x1="30" y1="10" x2="10" y2="30" stroke="#333" stroke-width="1.5"/>` },
  minuterie: { vb: "0 0 60 50", w: 46, h: 38, svg: `
    <rect x="2" y="2" width="56" height="46" rx="4" fill="#f3e9f8" stroke="#7b3fa0" stroke-width="2"/>
    <circle cx="18" cy="25" r="9" fill="none" stroke="#7b3fa0" stroke-width="2"/>
    <line x1="18" y1="25" x2="18" y2="19" stroke="#7b3fa0" stroke-width="1.5"/>
    <line x1="18" y1="25" x2="22" y2="27" stroke="#7b3fa0" stroke-width="1.5"/>
    <rect x="36" y="15" width="16" height="20" fill="none" stroke="#333" stroke-width="2"/>` },
  detecteur: { vb: "0 0 40 40", w: 26, h: 26, svg: `
    <rect x="4" y="14" width="32" height="20" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>
    <path d="M10 14 Q20 -2 30 14" fill="#eee" stroke="#333" stroke-width="1.5"/>
    <circle cx="20" cy="24" r="3" fill="#c0392b"/>` },
  transformateur: { vb: "0 0 70 50", w: 46, h: 33, svg: `
    <rect x="2" y="4" width="66" height="42" rx="4" fill="#eef3fb" stroke="#2f6fd1" stroke-width="2"/>
    <circle cx="20" cy="14" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.5"/>
    <circle cx="20" cy="24" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.5"/>
    <circle cx="20" cy="34" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.5"/>
    <line x1="35" y1="8" x2="35" y2="42" stroke="#333" stroke-width="2"/>
    <line x1="39" y1="8" x2="39" y2="42" stroke="#333" stroke-width="2"/>
    <circle cx="52" cy="14" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.5"/>
    <circle cx="52" cy="24" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.5"/>
    <circle cx="52" cy="34" r="5" fill="none" stroke="#2f6fd1" stroke-width="1.5"/>` },
  sonnette: { vb: "0 0 40 50", w: 30, h: 38, svg: `
    <path d="M20 6 Q10 6 10 22 L8 30 h24 l-2 -8 Q30 6 20 6 Z" fill="#f0d24a" stroke="#8a6d00" stroke-width="2"/>
    <circle cx="20" cy="36" r="4" fill="#8a6d00"/>` },
  radiateur: { vb: "0 0 60 50", w: 40, h: 33, svg: `
    <rect x="4" y="10" width="52" height="34" rx="4" fill="#f5f0e8" stroke="#b5651d" stroke-width="2"/>
    ${[14, 24, 34, 44].map(x => `<line x1="${x}" y1="14" x2="${x}" y2="40" stroke="#b5651d" stroke-width="2"/>`).join("")}` },
  programmateur: { vb: "0 0 60 40", w: 44, h: 30, svg: `
    <rect x="2" y="2" width="56" height="36" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="20" cy="20" r="12" fill="#eee" stroke="#333" stroke-width="1.5"/>
    <line x1="20" y1="20" x2="20" y2="12" stroke="#333" stroke-width="1.5"/>
    <line x1="20" y1="20" x2="26" y2="24" stroke="#333" stroke-width="1.5"/>
    <text x="44" y="24" font-size="9" text-anchor="middle" fill="#333" font-weight="700">FP</text>` },
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
    <rect x="2" y="2" width="56" height="46" rx="4" fill="#fff" stroke="#333" stroke-width="2"/>
    <line x1="18" y1="10" x2="18" y2="22" stroke="#c0392b" stroke-width="3" stroke-linecap="round" transform="rotate(-18 18 16)"/>
    <line x1="42" y1="10" x2="42" y2="22" stroke="#2f6fd1" stroke-width="3" stroke-linecap="round" transform="rotate(-18 42 16)"/>
    <text x="30" y="40" font-size="9" text-anchor="middle" fill="#333" font-weight="700">30mA</text>` },
  "plaque-cuisson": { vb: "0 0 60 50", w: 40, h: 33, svg: `
    <rect x="2" y="2" width="56" height="46" rx="4" fill="#1a1a1a" stroke="#333" stroke-width="2"/>
    <circle cx="18" cy="16" r="8" fill="none" stroke="#e08a1e" stroke-width="1.5"/>
    <circle cx="42" cy="16" r="6" fill="none" stroke="#e08a1e" stroke-width="1.5"/>
    <circle cx="18" cy="34" r="6" fill="none" stroke="#e08a1e" stroke-width="1.5"/>
    <circle cx="42" cy="34" r="8" fill="none" stroke="#e08a1e" stroke-width="1.5"/>` },
  "interrupteur-horaire": { vb: "0 0 40 40", w: 24, h: 24, svg: `
    <rect x="3" y="3" width="34" height="34" rx="6" fill="#fff" stroke="#333" stroke-width="2"/>
    <circle cx="20" cy="20" r="11" fill="#eee" stroke="#333" stroke-width="1.5"/>
    <line x1="20" y1="20" x2="20" y2="12" stroke="#333" stroke-width="1.5"/>
    <line x1="20" y1="20" x2="25" y2="23" stroke="#333" stroke-width="1.5"/>` },
  "module-yokis": { vb: "0 0 50 50", w: 34, h: 34, svg: `
    <rect x="6" y="10" width="38" height="30" rx="4" fill="#f3e9f8" stroke="#7b3fa0" stroke-width="2"/>
    <text x="25" y="30" font-size="14" text-anchor="middle" fill="#7b3fa0" font-weight="700">Y</text>
    <path d="M36 8 q4 -4 8 0" fill="none" stroke="#7b3fa0" stroke-width="1.5"/>
    <path d="M38 5 q6 -6 12 0" fill="none" stroke="#7b3fa0" stroke-width="1.5"/>` },
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
    ${[[12, 12], [30, 12], [12, 26], [30, 26], [12, 40], [30, 40]].map(([x, y]) => `<rect x="${x}" y="${y}" width="14" height="10" fill="#fff" stroke="#333" stroke-width="1"/>`).join("")}` }
};

function compIcon(type) {
  const spec = COMP_ICONS[type];
  if (!spec) return "";
  return `<svg viewBox="${spec.vb}" width="${spec.w}" height="${spec.h}">${spec.svg}</svg>`;
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
  fitZoom();
  showView("atelierWork");
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
  const z = Math.min(1, availW / currentExo.canvasW);
  setZoom(Math.max(ZOOM_MIN, z));
}

document.getElementById("btn-zoom-in").addEventListener("click", () => setZoom(canvasZoom + ZOOM_STEP));
document.getElementById("btn-zoom-out").addEventListener("click", () => setZoom(canvasZoom - ZOOM_STEP));
document.getElementById("btn-zoom-fit").addEventListener("click", fitZoom);

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
    path.setAttribute("d", elbowPath(t1.x, t1.y, t2.x, t2.y));
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
function normalizeKey(comp1, term1, comp2, term2) {
  return [comp1 + "." + term1, comp2 + "." + term2].sort().join("|");
}

function checkCircuit() {
  const issues = [];
  const expectedMap = new Map();
  currentExo.connections.forEach(c => {
    const [c1, t1] = c.from.split(".");
    const [c2, t2] = c.to.split(".");
    expectedMap.set(normalizeKey(c1, t1, c2, t2), c);
  });

  const matched = new Set();
  userConnections.forEach(conn => {
    const key = normalizeKey(conn.from.comp, conn.from.term, conn.to.comp, conn.to.term);
    if (expectedMap.has(key)) {
      matched.add(key);
      const expected = expectedMap.get(key);
      if (expected.role !== conn.role) {
        issues.push(`Mauvaise couleur de fil entre ${labelOf(conn.from)} et ${labelOf(conn.to)} : attendu "${WIRE_ROLES[expected.role].label}", posé "${WIRE_ROLES[conn.role].label}".`);
      }
    } else {
      issues.push(`Connexion incorrecte ou en trop entre ${labelOf(conn.from)} et ${labelOf(conn.to)}.`);
    }
  });

  expectedMap.forEach((c, key) => {
    if (!matched.has(key)) {
      const [c1, t1] = c.from.split(".");
      const [c2, t2] = c.to.split(".");
      issues.push(`Connexion manquante entre ${labelOf({ comp: c1, term: t1 })} et ${labelOf({ comp: c2, term: t2 })} (fil ${WIRE_ROLES[c.role].label}).`);
    }
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

  exo.connections.forEach(c => {
    const [c1, t1] = c.from.split(".");
    const [c2, t2] = c.to.split(".");
    const p1 = findTerm(exo, c1, t1);
    const p2 = findTerm(exo, c2, t2);
    const line = document.createElementNS(SVG_NS, "path");
    line.setAttribute("d", elbowPath(p1.x, p1.y, p2.x, p2.y));
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
  showView("atelierList");
});
document.getElementById("btn-check-circuit").addEventListener("click", checkCircuit);
document.getElementById("btn-reset-circuit").addEventListener("click", () => {
  userConnections = [];
  redrawWires();
  document.getElementById("atelier-result").classList.add("hidden");
  const target = document.querySelector(`.comp-box[data-comp="${currentExo.successTarget}"]`);
  if (target) target.classList.remove("success-glow");
});
document.getElementById("btn-help").addEventListener("click", openHelp);
document.getElementById("btn-close-help").addEventListener("click", closeHelp);
