// Moteur de l'Atelier de câblage - EEB Alt Nîmes

let currentExo = null;
let userConnections = [];   // { from:{comp,term}, to:{comp,term}, role }
let userCalibre = {};       // { compId: valeur }
let userSection = null;
let selectedRole = null;
let dragState = null;       // { fromComp, fromTerm, tempLine }

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
    <circle cx="25" cy="25" r="3" fill="#2e8b2e"/>` }
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

  wrap.appendChild(canvas);

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

  redrawWires();
}

// ---------- Position d'une borne dans le canvas ----------
function pointerCanvasPos(evt) {
  const canvas = document.getElementById("atelier-canvas");
  const rect = canvas.getBoundingClientRect();
  return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
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

function labelOf(ref) {
  const comp = findComp(currentExo, ref.comp);
  const term = findTerm(currentExo, ref.comp, ref.term);
  return `${comp.label} (${term.label})`;
}

// ---------- Aide : afficher la solution ----------
function openHelp() {
  const modal = document.getElementById("help-modal");
  const body = document.getElementById("help-body");
  body.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.id = "help-canvas-wrap";
  const canvas = document.createElement("div");
  canvas.id = "help-canvas";
  canvas.style.width = currentExo.canvasW + "px";
  canvas.style.height = currentExo.canvasH + "px";

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("width", currentExo.canvasW);
  svg.setAttribute("height", currentExo.canvasH);
  addTerrePattern(svg, "terre-pattern-help");
  canvas.appendChild(svg);

  currentExo.components.forEach(comp => {
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

  currentExo.connections.forEach(c => {
    const [c1, t1] = c.from.split(".");
    const [c2, t2] = c.to.split(".");
    const p1 = findTerm(currentExo, c1, t1);
    const p2 = findTerm(currentExo, c2, t2);
    const line = document.createElementNS(SVG_NS, "path");
    line.setAttribute("d", elbowPath(p1.x, p1.y, p2.x, p2.y));
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", strokeForRole(c.role, "terre-pattern-help"));
    line.setAttribute("stroke-width", "5");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("stroke-linejoin", "round");
    svg.appendChild(line);
  });

  wrap.appendChild(canvas);
  body.appendChild(wrap);

  const list = document.createElement("ul");
  list.className = "help-list";
  currentExo.connections.forEach(c => {
    const [c1, t1] = c.from.split(".");
    const [c2, t2] = c.to.split(".");
    const role = WIRE_ROLES[c.role];
    const swatchStyle = c.role === "terre"
      ? "background:repeating-linear-gradient(45deg,#2e8b2e,#2e8b2e 3px,#e8d21e 3px,#e8d21e 6px)"
      : `background:${role.color}`;
    list.innerHTML += `<li><span class="swatch" style="${swatchStyle}"></span>
      <strong>${role.label}</strong> : ${labelOf({ comp: c1, term: t1 })} → ${labelOf({ comp: c2, term: t2 })}</li>`;
  });
  body.appendChild(list);

  if (currentExo.components.some(c => c.calibreOptions) || currentExo.sectionOptions) {
    const infos = document.createElement("p");
    infos.className = "help-infos";
    let txt = "";
    currentExo.components.forEach(c => {
      if (c.calibreOptions) txt += `Calibre "${c.label}" : ${c.calibreCorrect} A. `;
    });
    if (currentExo.sectionOptions) txt += `Section de câble : ${currentExo.sectionCorrect} mm².`;
    infos.textContent = txt;
    body.appendChild(infos);
  }

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
