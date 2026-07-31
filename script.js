// Moteur du quiz - EEB Alt Nîmes

const views = {
  home: document.getElementById("view-home"),
  topics: document.getElementById("view-topics"),
  quiz: document.getElementById("view-quiz"),
  result: document.getElementById("view-result"),
  atelierList: document.getElementById("view-atelier-list"),
  atelierWork: document.getElementById("view-atelier-workshop"),
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
    card.innerHTML = `<h4>${topic.nom}</h4><span>${topic.questions.length} questions</span>`;
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

  let msg;
  if (pct === 100) msg = "🏆 Score parfait ! Tu maîtrises ce sujet.";
  else if (pct >= 80) msg = "🔥 Très bon niveau, continue comme ça !";
  else if (pct >= 50) msg = "👍 Pas mal, encore un peu de révision et ce sera nickel.";
  else msg = "📘 Ce sujet mérite d'être revu, courage !";
  document.getElementById("result-msg").textContent = msg;

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

// ---------- Initialisation ----------
renderHome();
showView("home");
