// Moteur du quiz - EEB Alt Nîmes

// Numéro de version affiché en haut de l'appli : à incrémenter à chaque
// mise à jour poussée sur GitHub, pour que les utilisateurs puissent
// vérifier facilement s'ils ont bien la dernière version.
const APP_VERSION = "2.3";
const versionBadge = document.getElementById("app-version");
if (versionBadge) versionBadge.textContent = "v" + APP_VERSION;

const views = {
  home: document.getElementById("view-home"),
  topics: document.getElementById("view-topics"),
  quiz: document.getElementById("view-quiz"),
  result: document.getElementById("view-result"),
  atelierList: document.getElementById("view-atelier-list"),
  atelierWork: document.getElementById("view-atelier-workshop"),
  cours: document.getElementById("view-cours"),
  coursDetail: document.getElementById("view-cours-detail"),
};

function showView(name) {
  Object.values(views).forEach(v => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
}

// ---------- Etat courant du quiz ----------
let currentQuestions = [];
let currentIndex = 0;
let currentScore = 0;
let currentTopicName = "";

// ---------- Persistance : scores des QCM ----------
function loadScores() {
  try { return JSON.parse(localStorage.getItem("eeb-scores") || "{}"); }
  catch (e) { return {}; }
}
function saveScore(topicName, score, total) {
  const scores = loadScores();
  const pct = Math.round((score / total) * 100);
  const prev = scores[topicName];
  scores[topicName] = {
    lastScore: score,
    lastTotal: total,
    lastPct: pct,
    bestPct: prev ? Math.max(prev.bestPct, pct) : pct,
    attempts: prev ? prev.attempts + 1 : 1,
    date: new Date().toISOString(),
  };
  localStorage.setItem("eeb-scores", JSON.stringify(scores));
  return scores[topicName];
}
function getScore(topicName) {
  return loadScores()[topicName] || null;
}

// ---------- Persistance : cours déjà consultés ----------
function loadReadCourses() {
  try { return JSON.parse(localStorage.getItem("eeb-cours-read") || "[]"); }
  catch (e) { return []; }
}
function markCoursRead(nom) {
  const list = loadReadCourses();
  if (!list.includes(nom)) {
    list.push(nom);
    localStorage.setItem("eeb-cours-read", JSON.stringify(list));
  }
}
function isCoursRead(nom) {
  return loadReadCourses().includes(nom);
}

// ---------- Lien QCM -> fiche de cours ----------
function findCoursByTopicName(nom) {
  return COURS_INDEX.find(c => c.nom === nom) || null;
}
function updateCoursLinkButton(btn) {
  const entry = findCoursByTopicName(currentTopicName);
  if (entry && entry.points.length > 0) {
    btn.classList.remove("hidden");
    btn.onclick = () => openCoursDetail(entry);
  } else {
    btn.classList.add("hidden");
    btn.onclick = null;
  }
}

// ---------- Accueil : liste des semaines ----------
function renderHome() {
  const container = document.getElementById("semaines-list");
  container.innerHTML = "";
  QUIZ_DATA.forEach(semaineData => {
    const totalQuestions = semaineData.topics.reduce((sum, t) => sum + t.questions.length, 0);
    const card = document.createElement("div");
    card.className = "semaine-card";
    card.innerHTML = `
      <span class="emoji">${semaineData.emoji}</span>
      <div class="info">
        <span class="badge">${semaineData.periode} — Semaine ${semaineData.semaine}</span>
        <h3>${semaineData.theme}</h3>
        <p>${semaineData.topics.length} sujets</p>
      </div>
      <div class="count">${totalQuestions} questions</div>
    `;
    card.addEventListener("click", () => renderTopics(semaineData));
    container.appendChild(card);
  });
}

// ---------- Liste des sujets d'une semaine ----------
function renderTopics(semaineData) {
  document.getElementById("topics-title").textContent =
    `Semaine ${semaineData.semaine} — ${semaineData.theme}`;
  const container = document.getElementById("topics-list");
  container.innerHTML = "";
  if (semaineData.topics.length === 0) {
    container.innerHTML = `<p class="topics-empty">📝 Pas de QCM pour cette semaine : c'est une semaine de révisions / certification. Reviens réviser les sujets des semaines précédentes en attendant !</p>`;
  }
  semaineData.topics.forEach(topic => {
    const card = document.createElement("div");
    card.className = "topic-card";
    const score = getScore(topic.nom);
    const read = isCoursRead(topic.nom);
    const scoreBadge = score
      ? `<span class="topic-score-badge${score.bestPct < 50 ? " low" : ""}">🏆 ${score.bestPct}%</span>`
      : "";
    const readBadge = read ? `<span class="topic-read-badge" title="Cours déjà consulté">📖</span>` : "";
    card.innerHTML = `
      <h4>${topic.nom}</h4>
      <div class="topic-card-footer">
        <span>${topic.questions.length} questions</span>
        <span>${readBadge}${scoreBadge}</span>
      </div>`;
    card.addEventListener("click", () => startQuiz(topic.nom, topic.questions));
    container.appendChild(card);
  });
  showView("topics");
}

// ---------- Mode Défi : questions mélangées de tout le programme ----------
function startDefi() {
  const allQuestions = [];
  QUIZ_DATA.forEach(semaineData => {
    semaineData.topics.forEach(topic => {
      topic.questions.forEach(q => allQuestions.push(q));
    });
  });
  shuffle(allQuestions);
  const selection = allQuestions.slice(0, 20);
  startQuiz("Mode Défi 🎲", selection);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ---------- Démarrage d'un quiz ----------
function startQuiz(topicName, questions) {
  currentTopicName = topicName;
  currentQuestions = questions.slice();
  shuffle(currentQuestions);
  currentIndex = 0;
  currentScore = 0;
  document.getElementById("quiz-topic-name").textContent = topicName;
  updateCoursLinkButton(document.getElementById("btn-quiz-to-cours"));
  showView("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById("live-score").textContent = currentScore;
  document.getElementById("progress-label").textContent =
    `${currentIndex + 1} / ${currentQuestions.length}`;
  document.getElementById("progress-fill").style.width =
    `${(currentIndex / currentQuestions.length) * 100}%`;

  document.getElementById("question-text").textContent = q.q;
  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";

  const feedback = document.getElementById("feedback-text");
  feedback.classList.add("hidden");
  feedback.textContent = "";
  document.getElementById("btn-next").classList.add("hidden");

  q.options.forEach((optionText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optionText;
    btn.addEventListener("click", () => selectAnswer(idx, btn));
    optionsList.appendChild(btn);
  });
}

function selectAnswer(selectedIdx, btnEl) {
  const q = currentQuestions[currentIndex];
  const allButtons = document.querySelectorAll(".option-btn");
  allButtons.forEach(b => b.disabled = true);

  if (selectedIdx === q.correct) {
    btnEl.classList.add("correct");
    currentScore++;
  } else {
    btnEl.classList.add("incorrect");
    allButtons[q.correct].classList.add("correct");
  }

  document.getElementById("live-score").textContent = currentScore;

  const feedback = document.getElementById("feedback-text");
  feedback.textContent = "💡 " + q.exp;
  feedback.classList.remove("hidden");

  document.getElementById("btn-next").classList.remove("hidden");
}

document.getElementById("btn-next").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    showResult();
  } else {
    renderQuestion();
  }
});

function showResult() {
  document.getElementById("progress-fill").style.width = "100%";
  const total = currentQuestions.length;
  const pct = Math.round((currentScore / total) * 100);

  document.getElementById("result-title").textContent = currentTopicName;
  document.getElementById("result-score").textContent = `${currentScore} / ${total} (${pct}%)`;

  const saved = saveScore(currentTopicName, currentScore, total);
  const bestEl = document.getElementById("result-best");
  if (saved.attempts > 1) {
    bestEl.textContent = `📊 Meilleur score sur ce sujet : ${saved.bestPct}% (${saved.attempts} tentatives)`;
    bestEl.classList.remove("hidden");
  } else {
    bestEl.classList.add("hidden");
  }

  let msg;
  if (pct === 100) msg = "🏆 Score parfait ! Tu maîtrises ce sujet.";
  else if (pct >= 80) msg = "🔥 Très bon niveau, continue comme ça !";
  else if (pct >= 50) msg = "👍 Pas mal, encore un peu de révision et ce sera nickel.";
  else msg = "📘 Ce sujet mérite d'être revu, courage !";
  document.getElementById("result-msg").textContent = msg;

  updateCoursLinkButton(document.getElementById("btn-result-to-cours"));

  showView("result");
}

document.getElementById("btn-retry").addEventListener("click", () => {
  startQuiz(currentTopicName, currentQuestions);
});
document.getElementById("btn-home").addEventListener("click", () => {
  renderHome();
  showView("home");
});
document.getElementById("btn-quit-quiz").addEventListener("click", () => {
  renderHome();
  showView("home");
});
document.getElementById("btn-back-home").addEventListener("click", () => {
  showView("home");
});
document.getElementById("btn-defi").addEventListener("click", startDefi);

// ---------- Cours : fiches détaillées par sujet ----------
// Lien vers les montages pratiques disponibles dans l'atelier (id ATELIER_EXERCISES)
const COURS_ATELIER_LINKS = {
  "Montage Simple Allumage": "simple-allumage",
  "Montage Va et Vient": "va-et-vient",
  "Montage Permutateur": "permutateur",
  "Montage Prise de courant": "prise-de-courant",
  "Montage Télérupteur": "telerupteur",
  "Montage Minuterie": "minuterie",
  "Montage Contacteur HC / HP": "contacteur-hchp",
  "Montage Interrupteur horaire": "interrupteur-horaire",
  "Montage Yokis": "module-yokis",
  "Montage Sonnette (230 V - 12 V)": "sonnette",
  "Montage Détecteur de mouvement": "detecteur-mouvement",
  "L'Interrupteur Différentiel": "tableau-differentiel",
  "Le volet roulant": "volet-roulant",
  "Le chauffage": "chauffage-fil-pilote",
  "La VMC": "vmc",
};

let COURS_INDEX = [];
let currentCoursDetailIndex = -1;

// Mots-clés -> icône COMP_ICONS pour illustrer les sujets sans montage atelier associé
const COURS_ICON_KEYWORDS = [
  ["interrupteur différentiel", "differentiel"],
  ["différentiel", "differentiel"],
  ["disjoncteur", "disjoncteur"],
  ["agcp", "disjoncteur"],
  ["fusible", "fusible"],
  ["parafoudre", "parafoudre"],
  ["indices de protection", "protection-ip"],
  ["classes d'isolation", "protection-ip"],
  ["salle de bain", "salle-bain"],
  ["terre", "bornier-terre"],
  ["va et vient", "va-et-vient"],
  ["permutateur", "permutateur"],
  ["interrupteur horaire", "interrupteur-horaire"],
  ["allumage", "interrupteur"],
  ["interrupteur", "interrupteur"],
  ["télérupteur", "telerupteur"],
  ["contacteur", "contacteur"],
  ["minuterie", "minuterie"],
  ["yokis", "module-yokis"],
  ["détecteur de mouvement", "detecteur"],
  ["sonnette", "sonnette"],
  ["prise de courant", "prise"],
  ["prise commandée", "prise"],
  ["chauffe-eau", "chauffe-eau"],
  ["ecs", "chauffe-eau"],
  ["chauffage", "radiateur"],
  ["plaque de cuisson", "plaque-cuisson"],
  ["volet roulant", "volet-roulant"],
  ["transformateur", "transformateur"],
  ["compteur", "compteur"],
  ["câbles électriques", "cable"],
  ["conducteurs électriques", "cable"],
  ["chemins de câbles", "chemin-cable"],
  ["goulottes", "chemin-cable"],
  ["vmc", "vmc"],
  ["alarme", "alarme"],
  ["contrôles d'accès", "controle-acces"],
  ["portail", "portail"],
  ["porte", "garage"],
  ["rj 45", "rj45"],
  ["rj45", "rj45"],
  ["domotique", "domotique"],
  ["photovoltaïque", "photovoltaique"],
  ["irve", "irve"],
  ["tgbt", "tgbt"],
  ["armoire de distribution", "tgbt"],
  ["tableau de communication", "tgbt"],
  ["gtl", "tgbt"],
];
function topicIconType(nom) {
  const n = nom.toLowerCase();
  for (const [kw, type] of COURS_ICON_KEYWORDS) {
    if (n.includes(kw)) return type;
  }
  return null;
}

function buildCoursIndex() {
  const list = [];
  QUIZ_DATA.forEach(sem => {
    sem.topics.forEach(topic => {
      const seen = new Set();
      const points = [];
      topic.questions.forEach(q => {
        const txt = (q.exp || "").trim();
        if (txt && !seen.has(txt)) { seen.add(txt); points.push(txt); }
      });
      list.push({
        semaine: sem.semaine,
        periode: sem.periode,
        theme: sem.theme,
        emoji: sem.emoji,
        nom: topic.nom,
        points,
        atelierId: COURS_ATELIER_LINKS[topic.nom] || null,
      });
    });
  });
  return list;
}

function renderCoursTable(filter) {
  const tbody = document.getElementById("cours-tbody");
  tbody.innerHTML = "";
  const f = (filter || "").trim().toLowerCase();
  const rows = COURS_INDEX.filter(c =>
    !f || c.nom.toLowerCase().includes(f) || c.theme.toLowerCase().includes(f)
  );
  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">Aucun sujet ne correspond à la recherche.</td></tr>`;
    return;
  }
  rows.forEach(c => {
    const tr = document.createElement("tr");
    if (isCoursRead(c.nom)) tr.classList.add("cours-read");
    const readMark = isCoursRead(c.nom) ? "📖 " : "";
    const score = getScore(c.nom);
    const scoreBadge = score ? `<span class="cours-score-badge">🏆 ${score.bestPct}%</span>` : "";
    tr.innerHTML = `<td>S${c.semaine}</td><td>${c.theme}</td><td>${readMark}${c.nom}${c.atelierId ? " 🔧" : ""}${scoreBadge}</td><td>${c.points.length}</td>`;
    tr.addEventListener("click", () => openCoursDetail(c));
    tbody.appendChild(tr);
  });
}

function renderCoursIllustration(c, exo) {
  const box = document.getElementById("cours-detail-illustration");
  box.innerHTML = "";
  if (exo) {
    box.appendChild(buildExoSchema(exo));
    box.appendChild(buildExoLegend(exo));
    return;
  }
  const iconType = topicIconType(c.nom);
  if (iconType) {
    box.innerHTML = `<div class="cours-icon-banner">${compIcon(iconType)}</div>`;
  } else {
    box.innerHTML = `<div class="cours-icon-banner cours-icon-emoji">${c.emoji}</div>`;
  }
}

function updateCoursNav() {
  const pos = document.getElementById("cours-nav-pos");
  pos.textContent = `Sujet ${currentCoursDetailIndex + 1} / ${COURS_INDEX.length}`;
  const atStart = currentCoursDetailIndex <= 0;
  const atEnd = currentCoursDetailIndex >= COURS_INDEX.length - 1;
  ["btn-cours-prev", "btn-cours-prev-bottom"].forEach(id => document.getElementById(id).disabled = atStart);
  ["btn-cours-next", "btn-cours-next-bottom"].forEach(id => document.getElementById(id).disabled = atEnd);
}
function goCoursPrev() {
  if (currentCoursDetailIndex > 0) openCoursDetail(COURS_INDEX[currentCoursDetailIndex - 1]);
}
function goCoursNext() {
  if (currentCoursDetailIndex < COURS_INDEX.length - 1) openCoursDetail(COURS_INDEX[currentCoursDetailIndex + 1]);
}

function openCoursDetail(c) {
  markCoursRead(c.nom);
  currentCoursDetailIndex = COURS_INDEX.indexOf(c);

  document.getElementById("cours-detail-title").textContent = c.nom;
  document.getElementById("cours-detail-meta").textContent =
    `Semaine ${c.semaine} (${c.periode}) — ${c.theme}`;

  const exo = c.atelierId ? ATELIER_EXERCISES.find(e => e.id === c.atelierId) : null;
  renderCoursIllustration(c, exo);

  document.getElementById("cours-detail-video").href =
    "https://www.youtube.com/results?search_query=" + encodeURIComponent(c.nom + " électricité");

  const allPoints = c.points.slice();
  if (exo) {
    const seen = new Set(allPoints);
    exo.components.forEach(comp => {
      if (comp.info && !seen.has(comp.info)) { seen.add(comp.info); allPoints.push(comp.info); }
    });
  }
  const ul = document.getElementById("cours-detail-points");
  ul.innerHTML = "";
  if (allPoints.length === 0) {
    ul.innerHTML = `<li>Pas de fiche disponible pour ce sujet.</li>`;
  } else {
    allPoints.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      ul.appendChild(li);
    });
  }

  const atelierBox = document.getElementById("cours-detail-atelier");
  if (c.atelierId) {
    atelierBox.classList.remove("hidden");
    atelierBox.innerHTML = `<button class="btn btn-primary" id="btn-cours-to-atelier">🔧 Pratiquer ce montage dans l'atelier</button>`;
    document.getElementById("btn-cours-to-atelier").addEventListener("click", () => {
      openExercise(c.atelierId);
    });
  } else {
    atelierBox.classList.add("hidden");
    atelierBox.innerHTML = "";
  }

  updateCoursNav();
  window.scrollTo(0, 0);
  showView("coursDetail");
}

document.getElementById("btn-cours-prev").addEventListener("click", goCoursPrev);
document.getElementById("btn-cours-next").addEventListener("click", goCoursNext);
document.getElementById("btn-cours-prev-bottom").addEventListener("click", goCoursPrev);
document.getElementById("btn-cours-next-bottom").addEventListener("click", goCoursNext);

document.getElementById("btn-cours").addEventListener("click", () => {
  renderCoursTable(document.getElementById("cours-search").value);
  showView("cours");
});
document.getElementById("btn-back-cours").addEventListener("click", () => {
  showView("home");
});
document.getElementById("btn-back-cours-detail").addEventListener("click", () => {
  renderCoursTable(document.getElementById("cours-search").value);
  showView("cours");
});
document.getElementById("cours-search").addEventListener("input", (e) => {
  renderCoursTable(e.target.value);
});

// ---------- Initialisation ----------
renderHome();
COURS_INDEX = buildCoursIndex();
showView("home");
