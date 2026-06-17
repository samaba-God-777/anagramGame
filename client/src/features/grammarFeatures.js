/* ═══════════════════════════════════════════
   GRAMMAR FEATURES MODULE
   Progress tracking, quizzes, bookmarks, notes
   ═══════════════════════════════════════════ */

const STORAGE_PREFIX = "grammar_";
const API_BASE = window.location.hostname === "localhost" ? "http://localhost:3001" : "";

// All grammar lessons
export const GRAMMAR_LESSONS = [
  { id: "present-simple", title: "Present Simple", category: "tenses", icon: "📖" },
  { id: "present-continuous", title: "Present Continuous", category: "tenses", icon: "📖" },
  { id: "present-perfect", title: "Present Perfect", category: "tenses", icon: "📖" },
  { id: "present-perfect-continuous", title: "Present Perfect Continuous", category: "tenses", icon: "📖" },
  { id: "past-simple", title: "Past Simple", category: "tenses", icon: "📖" },
  { id: "past-continuous", title: "Past Continuous", category: "tenses", icon: "📖" },
  { id: "past-perfect", title: "Past Perfect", category: "tenses", icon: "📖" },
  { id: "past-perfect-continuous", title: "Past Perfect Continuous", category: "tenses", icon: "📖" },
  { id: "future-simple", title: "Future Simple", category: "tenses", icon: "📖" },
  { id: "future-continuous", title: "Future Continuous", category: "tenses", icon: "📖" },
  { id: "future-perfect", title: "Future Perfect", category: "tenses", icon: "📖" },
  { id: "future-perfect-continuous", title: "Future Perfect Continuous", category: "tenses", icon: "📖" },
  { id: "clauses", title: "Clauses", category: "clauses", icon: "🔗" },
  { id: "noun-clauses", title: "Noun Clauses", category: "clauses", icon: "🔗" },
  { id: "adjective-clauses", title: "Adjective Clauses", category: "clauses", icon: "🔗" },
  { id: "adverb-clauses", title: "Adverb Clauses", category: "clauses", icon: "🔗" },
  { id: "prepositions", title: "Prepositions", category: "other", icon: "📍" },
  { id: "conjunctions", title: "Conjunctions", category: "other", icon: "🔗" },
  { id: "adjective-positions", title: "Adjective Positions", category: "other", icon: "📏" },
  { id: "adverb-positions", title: "Adverb Positions", category: "other", icon: "📍" },
  { id: "phrasal-verbs", title: "Phrasal Verbs", category: "other", icon: "💬" },
  { id: "idiomatic-expressions", title: "Idiomatic Expressions", category: "other", icon: "🎭" },
];

// Quiz questions for each lesson
export const QUIZ_DATA = {
  "present-simple": [
    { q: "She ___ (go) to school every day.", options: ["go", "goes", "going", "gone"], answer: 1 },
    { q: "They ___ (not like) coffee.", options: ["don't like", "doesn't like", "not like", "don't likes"], answer: 0 },
    { q: "___ he ___ (speak) English?", options: ["Do/ speak", "Does/ speaks", "Does/ speak", "Do/ speaks"], answer: 2 },
    { q: "The sun ___ (rise) in the east.", options: ["rise", "rises", "rising", "risen"], answer: 1 },
    { q: "We ___ (have) dinner at 7 PM.", options: ["has", "have", "having", "haves"], answer: 1 },
  ],
  "present-continuous": [
    { q: "She ___ (read) a book right now.", options: ["reads", "is reading", "reading", "read"], answer: 1 },
    { q: "They ___ (play) football at the moment.", options: ["plays", "play", "are playing", "is playing"], answer: 2 },
    { q: "What ___ you ___ (do) now?", options: ["are/ doing", "is/ doing", "do/ do", "are/ do"], answer: 0 },
    { q: "The baby ___ (sleep). Don't make noise.", options: ["sleeps", "is sleeping", "sleeping", "sleep"], answer: 1 },
    { q: "I ___ (not work) today.", options: ["don't work", "am not working", "not work", "isn't working"], answer: 1 },
  ],
  "present-perfect": [
    { q: "I ___ (visit) London three times.", options: ["visit", "visited", "have visited", "visiting"], answer: 2 },
    { q: "She ___ (already finish) her homework.", options: ["already finished", "has already finished", "already finishes", "is already finishing"], answer: 1 },
    { q: "___ you ever ___ (eat) sushi?", options: ["Have/ eaten", "Did/ eat", "Has/ eaten", "Have/ ate"], answer: 0 },
    { q: "We ___ (live) here since 2020.", options: ["live", "lived", "have lived", "are living"], answer: 2 },
    { q: "He ___ (not see) that movie yet.", options: ["didn't see", "doesn't see", "hasn't seen", "isn't seeing"], answer: 2 },
  ],
  "past-simple": [
    { q: "She ___ (go) to Paris last summer.", options: ["go", "goes", "went", "has gone"], answer: 2 },
    { q: "They ___ (not watch) TV yesterday.", options: ["don't watch", "didn't watch", "doesn't watch", "weren't watching"], answer: 1 },
    { q: "___ you ___ (meet) him before?", options: ["Did/ meet", "Have/ met", "Did/ met", "Do/ meet"], answer: 0 },
    { q: "The train ___ (arrive) at 9 AM.", options: ["arrives", "arrived", "has arrived", "arriving"], answer: 1 },
    { q: "I ___ (buy) a new car last week.", options: ["buy", "buys", "bought", "have bought"], answer: 2 },
  ],
  "past-continuous": [
    { q: "I ___ (read) when you called.", options: ["read", "was reading", "have read", "am reading"], answer: 1 },
    { q: "They ___ (play) football at 5 PM yesterday.", options: ["played", "were playing", "are playing", "have played"], answer: 1 },
    { q: "What ___ she ___ (do) at 8 o'clock?", options: ["was/ doing", "did/ do", "is/ doing", "were/ doing"], answer: 0 },
    { q: "While I ___ (cook), the phone rang.", options: ["cook", "cooked", "was cooking", "am cooking"], answer: 2 },
    { q: "It ___ (rain) all day yesterday.", options: ["rained", "was raining", "has rained", "rains"], answer: 1 },
  ],
  "future-simple": [
    { q: "I ___ (call) you tomorrow.", options: ["call", "calls", "will call", "am calling"], answer: 2 },
    { q: "She ___ (not come) to the party.", options: ["won't come", "doesn't come", "isn't coming", "didn't come"], answer: 0 },
    { q: "___ you ___ (help) me?", options: ["Will/ help", "Do/ help", "Are/ helping", "Did/ help"], answer: 0 },
    { q: "The meeting ___ (start) at 10 AM.", options: ["starts", "will start", "is starting", "started"], answer: 1 },
    { q: "I think it ___ (rain) later.", options: ["rains", "will rain", "is raining", "rained"], answer: 1 },
  ],
  "prepositions": [
    { q: "The book is ___ the table.", options: ["in", "on", "at", "by"], answer: 1 },
    { q: "We meet ___ 3 PM.", options: ["in", "on", "at", "for"], answer: 2 },
    { q: "She arrived ___ Monday.", options: ["in", "on", "at", "for"], answer: 1 },
    { q: "The cat is hiding ___ the bed.", options: ["in", "on", "under", "at"], answer: 2 },
    { q: "He's interested ___ learning French.", options: ["in", "on", "at", "for"], answer: 0 },
  ],
  "conjunctions": [
    { q: "I want to go ___ I'm tired.", options: ["and", "but", "or", "so"], answer: 1 },
    { q: "Study hard ___ you will fail.", options: ["and", "but", "or", "so"], answer: 2 },
    { q: "She was tired ___ she kept working.", options: ["and", "but", "or", "because"], answer: 1 },
    { q: "___ it rained, we went out.", options: ["And", "But", "Although", "Or"], answer: 2 },
    { q: "Hurry ___ you'll be late.", options: ["and", "but", "or", "so"], answer: 3 },
  ],
};

// Default quiz for lessons without specific questions
const DEFAULT_QUIZ = [
  { q: "Which is the correct form?", options: ["Option A", "Option B", "Option C", "Option D"], answer: 0 },
  { q: "Choose the correct sentence:", options: ["Sentence A", "Sentence B", "Sentence C", "Sentence D"], answer: 0 },
  { q: "What is the correct usage?", options: ["Usage A", "Usage B", "Usage C", "Usage D"], answer: 0 },
];

/* ── Local Storage Helpers ── */
function getLocal(key) {
  try { return JSON.parse(localStorage.getItem(STORAGE_PREFIX + key)); } catch { return null; }
}

function setLocal(key, value) {
  try { localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value)); } catch {}
}

/* ── Progress Tracking ── */
export function getProgress(userId = "anonymous") {
  const local = getLocal("progress");
  if (local) return local;
  // Initialize with all lessons at 0%
  const progress = {};
  GRAMMAR_LESSONS.forEach(l => { progress[l.id] = { completed: false, score: 0, lastAccess: null }; });
  return progress;
}

export function saveProgress(lessonId, data, userId = "anonymous") {
  const progress = getProgress(userId);
  progress[lessonId] = { ...progress[lessonId], ...data, lastAccess: Date.now() };
  setLocal("progress", progress);
  // Sync to server
  syncProgressToServer(lessonId, data, userId);
}

async function syncProgressToServer(lessonId, data, userId) {
  try {
    await fetch(`${API_BASE}/api/grammar/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, lessonId, ...data }),
    });
  } catch {}
}

export function getCompletionPercent() {
  const progress = getProgress();
  const total = GRAMMAR_LESSONS.length;
  const completed = Object.values(progress).filter(p => p.completed).length;
  return Math.round((completed / total) * 100);
}

/* ── Bookmarks ── */
export function getBookmarks() {
  return getLocal("bookmarks") || [];
}

export function toggleBookmark(lessonId) {
  const bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(lessonId);
  if (idx === -1) bookmarks.push(lessonId);
  else bookmarks.splice(idx, 1);
  setLocal("bookmarks", bookmarks);
  return bookmarks.includes(lessonId);
}

export function isBookmarked(lessonId) {
  return getBookmarks().includes(lessonId);
}

/* ── Notes ── */
export function getNotes(lessonId) {
  return getLocal(`note_${lessonId}`) || "";
}

export function saveNote(lessonId, note) {
  setLocal(`note_${lessonId}`, note);
  // Sync to server
  syncNoteToServer(lessonId, note);
}

async function syncNoteToServer(lessonId, note) {
  try {
    await fetch(`${API_BASE}/api/grammar/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, note }),
    });
  } catch {}
}

/* ── Quiz System ── */
export function getQuiz(lessonId) {
  return QUIZ_DATA[lessonId] || DEFAULT_QUIZ;
}

export function getQuizScore(lessonId) {
  return getLocal(`quiz_${lessonId}`) || { best: 0, attempts: 0 };
}

export function saveQuizScore(lessonId, score, total) {
  const prev = getQuizScore(lessonId);
  const newScore = { score, total, percent: Math.round((score / total) * 100) };
  if (newScore.percent > prev.best) prev.best = newScore.percent;
  prev.attempts++;
  prev.lastScore = newScore;
  setLocal(`quiz_${lessonId}`, prev);
  // Mark lesson as completed if score > 60%
  if (newScore.percent >= 60) {
    saveProgress(lessonId, { completed: true, score: newScore.percent });
  }
  return prev;
}

/* ── Stats ── */
export function getStats() {
  const progress = getProgress();
  const bookmarks = getBookmarks();
  const completed = Object.values(progress).filter(p => p.completed).length;
  const totalLessons = GRAMMAR_LESSONS.length;
  const totalScore = Object.values(progress).reduce((sum, p) => sum + (p.score || 0), 0);
  const avgScore = completed > 0 ? Math.round(totalScore / completed) : 0;

  return {
    totalLessons,
    completed,
    percent: getCompletionPercent(),
    bookmarks: bookmarks.length,
    avgScore,
  };
}

/* ── Quiz UI Component ── */
export function createQuizUI(lessonId, container) {
  const quiz = getQuiz(lessonId);
  const prevScore = getQuizScore(lessonId);
  let currentQ = 0;
  let score = 0;
  let answers = [];

  function render() {
    if (currentQ >= quiz.length) {
      // Show results
      const percent = Math.round((score / quiz.length) * 100);
      saveQuizScore(lessonId, score, quiz.length);

      container.innerHTML = `
        <div class="quiz-results">
          <div class="quiz-score-circle" style="--score: ${percent}%">
            <span class="quiz-score-num">${percent}%</span>
          </div>
          <h3 class="quiz-results-title">${percent >= 80 ? "Excellent!" : percent >= 60 ? "Good job!" : "Keep practicing!"}</h3>
          <p class="quiz-results-text">You got ${score} out of ${quiz.length} correct</p>
          ${prevScore.best > 0 ? `<p class="quiz-results-best">Best score: ${prevScore.best}%</p>` : ""}
          <div class="quiz-results-actions">
            <button class="quiz-btn quiz-btn-retry" data-action="retry">Try Again</button>
            <button class="quiz-btn quiz-btn-next" data-action="next">Next Lesson →</button>
          </div>
        </div>
      `;
      return;
    }

    const q = quiz[currentQ];
    container.innerHTML = `
      <div class="quiz-progress">
        <div class="quiz-progress-bar" style="width: ${((currentQ) / quiz.length) * 100}%"></div>
      </div>
      <div class="quiz-question-num">Question ${currentQ + 1} of ${quiz.length}</div>
      <h3 class="quiz-question">${q.q}</h3>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" data-index="${i}">${opt}</button>
        `).join("")}
      </div>
    `;

    container.querySelectorAll(".quiz-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.index);
        const isCorrect = idx === q.answer;
        if (isCorrect) score++;
        answers.push({ question: currentQ, selected: idx, correct: q.answer, isCorrect });

        // Highlight
        container.querySelectorAll(".quiz-option").forEach((b, i) => {
          b.disabled = true;
          if (i === q.answer) b.classList.add("correct");
          else if (i === idx && !isCorrect) b.classList.add("wrong");
        });

        setTimeout(() => { currentQ++; render(); }, 1200);
      });
    });
  }

  container.addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (action === "retry") { currentQ = 0; score = 0; answers = []; render(); }
    if (action === "next") {
      const currentIdx = GRAMMAR_LESSONS.findIndex(l => l.id === lessonId);
      if (currentIdx < GRAMMAR_LESSONS.length - 1) {
        window.location.href = `/grammar/${GRAMMAR_LESSONS[currentIdx + 1].id}.html`;
      }
    }
  });

  render();
}

/* ── Progress Sidebar Badge ── */
export function getProgressBadge(lessonId) {
  const progress = getProgress();
  const p = progress[lessonId];
  if (!p) return "";
  if (p.completed) return "✅";
  if (p.lastAccess) return "📖";
  return "";
}
