/* ═══════════════════════════════════════════
   GRAMMAR FEATURES MODULE
   Progress tracking, quizzes, bookmarks, notes
   Uses hybrid storage (localStorage + Supabase)
   ═══════════════════════════════════════════ */

import { 
  loadGrammarProgress, saveGrammarProgress,
  loadBookmarks, toggleBookmark as toggleBookmarkHybrid, isBookmarked as isBookmarkedHybrid,
  loadNote, saveNote as saveNoteHybrid,
  loadQuizScore, saveQuizScore as saveQuizScoreHybrid
} from '../lib/hybridStorage.js';

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
  "present-perfect-continuous": [
    { q: "I ___ (study) English for three hours.", options: ["study", "studied", "have been studying", "am studying"], answer: 2 },
    { q: "She ___ (work) here since 2019.", options: ["works", "has been working", "is working", "worked"], answer: 1 },
    { q: "They ___ (wait) for two hours.", options: ["wait", "have waited", "have been waiting", "are waiting"], answer: 2 },
    { q: "How long ___ you ___ (learn) Spanish?", options: ["do/ learn", "have/ been learning", "are/ learning", "did/ learn"], answer: 1 },
    { q: "It ___ (rain) all morning.", options: ["rains", "has been raining", "rained", "is raining"], answer: 1 },
  ],
  "past-perfect": [
    { q: "I ___ (already eat) when she arrived.", options: ["already ate", "had already eaten", "already eat", "was already eating"], answer: 1 },
    { q: "She ___ (finish) work before I called.", options: ["finished", "had finished", "has finished", "was finishing"], answer: 1 },
    { q: "They ___ (leave) before we got there.", options: ["leave", "left", "had left", "have left"], answer: 2 },
    { q: "He ___ (never see) snow before that day.", options: ["never saw", "had never seen", "has never seen", "never sees"], answer: 1 },
    { q: "We ___ (plan) the trip before the pandemic.", options: ["planned", "had planned", "have planned", "were planning"], answer: 1 },
  ],
  "past-perfect-continuous": [
    { q: "I ___ (wait) for an hour when the bus finally came.", options: ["waited", "had been waiting", "was waiting", "have waited"], answer: 1 },
    { q: "She ___ (work) all day before she collapsed.", options: ["worked", "had been working", "was working", "has worked"], answer: 1 },
    { q: "They ___ (rain) for hours before it stopped.", options: ["rained", "had been raining", "was raining", "has rained"], answer: 1 },
    { q: "He ___ (study) for hours before the exam.", options: ["studied", "had been studying", "was studying", "studies"], answer: 1 },
    { q: "We ___ (drive) for six hours before we reached the hotel.", options: ["drove", "had been driving", "were driving", "have driven"], answer: 1 },
  ],
  "future-continuous": [
    { q: "I ___ (work) at 8 PM tonight.", options: ["will work", "will be working", "am working", "work"], answer: 1 },
    { q: "This time tomorrow, she ___ (fly) to Paris.", options: ["will fly", "will be flying", "is flying", "flies"], answer: 1 },
    { q: "They ___ (have) dinner at 7 PM.", options: ["will have", "will be having", "are having", "have"], answer: 1 },
    { q: "I ___ (study) all evening.", options: ["will study", "will be studying", "am studying", "study"], answer: 1 },
    { q: "Don't call at 9 — I ___ (sleep).", options: ["will sleep", "will be sleeping", "am sleeping", "sleep"], answer: 1 },
  ],
  "future-perfect": [
    { q: "By next year, I ___ (graduate).", options: ["will graduate", "will have graduated", "am graduating", "graduate"], answer: 1 },
    { q: "She ___ (finish) the project by Friday.", options: ["will finish", "will have finished", "finishes", "is finishing"], answer: 1 },
    { q: "They ___ (live) here for 10 years by 2030.", options: ["will live", "will have lived", "are living", "live"], answer: 1 },
    { q: "By the time you arrive, I ___ (cook) dinner.", options: ["will cook", "will have cooked", "am cooking", "cook"], answer: 1 },
    { q: "He ___ (read) all the books by next month.", options: ["will read", "will have read", "reads", "is reading"], answer: 1 },
  ],
  "future-perfect-continuous": [
    { q: "By next month, I ___ (work) here for five years.", options: ["will work", "will have been working", "am working", "work"], answer: 1 },
    { q: "By 6 PM, she ___ (study) for eight hours.", options: ["will study", "will have been studying", "is studying", "studies"], answer: 1 },
    { q: "They ___ (wait) for three hours by the time the bus arrives.", options: ["will wait", "will have been waiting", "are waiting", "wait"], answer: 1 },
    { q: "By the end of the day, we ___ (travel) for 12 hours.", options: ["will travel", "will have been traveling", "are traveling", "travel"], answer: 1 },
    { q: "By next week, he ___ (run) for 100 days straight.", options: ["will run", "will have been running", "is running", "runs"], answer: 1 },
  ],
  "clauses": [
    { q: "Which sentence has an independent clause?", options: ["The cat sat.", "Although it rained.", "Because she was tired.", "When the sun set."], answer: 0 },
    { q: "___ is a dependent clause.", options: ["I went home.", "She reads books.", "When I arrived.", "They play football."], answer: 2 },
    { q: "Identify the clause: 'The book that I read was great.'", options: ["The book", "that I read", "was great", "The book that"], answer: 1 },
    { q: "How many clauses are in: 'When she arrived, everyone cheered'?", options: ["1", "2", "3", "4"], answer: 1 },
    { q: "A sentence must have at least ___.", options: ["two dependent clauses", "one independent clause", "one dependent clause", "three clauses"], answer: 1 },
  ],
  "noun-clauses": [
    { q: "___ she said was surprising.", options: ["What", "Which", "Where", "When"], answer: 0 },
    { q: "I don't know ___ he is.", options: ["what", "which", "whose", "where"], answer: 0 },
    { q: "Can you tell me ___ the bank is?", options: ["what", "which", "where", "whose"], answer: 2 },
    { q: "___ happens next is unknown.", options: ["What", "Which", "Where", "When"], answer: 0 },
    { q: "She asked ___ I wanted coffee.", options: ["what", "which", "whether", "whose"], answer: 2 },
  ],
  "adjective-clauses": [
    { q: "The man ___ lives next door is a doctor.", options: ["which", "who", "where", "whose"], answer: 1 },
    { q: "The car ___ is parked outside is mine.", options: ["who", "which", "whom", "whose"], answer: 1 },
    { q: "The woman ___ son won the prize is happy.", options: ["who", "which", "whose", "whom"], answer: 2 },
    { q: "This is the place ___ we met.", options: ["which", "who", "where", "whose"], answer: 2 },
    { q: "I remember the day ___ we first met.", options: ["which", "who", "whose", "when"], answer: 3 },
  ],
  "adverb-clauses": [
    { q: "I'll go ___ you want.", options: ["although", "because", "wherever", "since"], answer: 2 },
    { q: "She left ___ she was angry.", options: ["because", "although", "where", "when"], answer: 0 },
    { q: "___ it was late, we continued working.", options: ["Because", "Although", "Where", "When"], answer: 1 },
    { q: "I'll call you ___ I arrive.", options: ["because", "although", "when", "where"], answer: 2 },
    { q: "___ hard you study, it's not easy.", options: ["Because", "Although", "However", "When"], answer: 2 },
  ],
  "adjective-positions": [
    { q: "She wore a ___ dress.", options: ["beautiful red silk", "red beautiful silk", "silk red beautiful", "beautiful silk red"], answer: 0 },
    { q: "The ___ building is very old.", options: ["big brick old", "old big brick", "big old brick", "brick big old"], answer: 2 },
    { q: "OSASCOM order: Opinion, Size, ___, Color, Origin, Material, ___.", options: ["Shape/ Purpose", "Age/ Purpose", "Shape/ Type", "Age/ Type"], answer: 1 },
    { q: "A ___ man walked in.", options: ["tall old", "old tall", "tall and old", "Both A and C are acceptable"], answer: 3 },
    { q: "She bought a ___ table.", options: ["lovely round wooden", "wooden round lovely", "round lovely wooden", "lovely wooden round"], answer: 0 },
  ],
  "adverb-positions": [
    { q: "She ___ arrives on time.", options: ["always", "is always", "always is", "does always"], answer: 0 },
    { q: "I ___ drink coffee in the morning.", options: ["usually", "am usually", "usually do", "do usually"], answer: 0 },
    { q: "He drives ___", options: ["careful", "carefully", "carefulness", "caring"], answer: 1 },
    { q: "They ___ finished their homework.", options: ["have already", "already have", "has already", "already has"], answer: 0 },
    { q: "She ___ speaks English.", options: ["fluent", "fluently", "fluency", "flowing"], answer: 1 },
  ],
  "phrasal-verbs": [
    { q: "Please ___ the lights before leaving.", options: ["turn on", "turn off", "turn up", "turn down"], answer: 1 },
    { q: "I need to ___ my shoes before entering.", options: ["take off", "take on", "take up", "take in"], answer: 0 },
    { q: "She ___ her mother in many ways.", options: ["takes after", "takes off", "takes on", "takes up"], answer: 0 },
    { q: "The meeting was ___ because of the storm.", options: ["called off", "called on", "called up", "called out"], answer: 0 },
    { q: "I can't ___ what you're saying.", options: ["figure out", "figure in", "figure off", "figure up"], answer: 0 },
  ],
  "idiomatic-expressions": [
    { q: "What does 'it's raining cats and dogs' mean?", options: ["Animals are falling", "It's raining heavily", "It's a light rain", "It's snowing"], answer: 1 },
    { q: "'Break a leg' means:", options: ["Get injured", "Good luck", "Go away", "Run fast"], answer: 1 },
    { q: "'Piece of cake' means:", options: ["A dessert", "Something very easy", "Something expensive", "Something old"], answer: 1 },
    { q: "'Hit the hay' means:", options: ["Go to bed", "Go to work", "Go shopping", "Go outside"], answer: 0 },
    { q: "'Cost an arm and a leg' means:", options: ["Something painful", "Something very cheap", "Something very expensive", "Something free"], answer: 2 },
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
  const local = loadGrammarProgress();
  if (local && Object.keys(local).length > 0) return local;
  // Initialize with all lessons at 0%
  const progress = {};
  GRAMMAR_LESSONS.forEach(l => { progress[l.id] = { completed: false, score: 0, lastAccess: null }; });
  return progress;
}

export function saveProgress(lessonId, data, userId = "anonymous") {
  const progress = getProgress(userId);
  progress[lessonId] = { ...progress[lessonId], ...data, lastAccess: Date.now() };
  setLocal("progress", progress);
  // Sync to Supabase via hybrid storage
  saveGrammarProgress(lessonId, {
    completed: data.completed || false,
    score: data.score || 0,
    max_score: 100,
    time_spent_seconds: data.time_spent_seconds || 0,
    attempts: data.attempts || 0
  });
}

export function getCompletionPercent() {
  const progress = getProgress();
  const total = GRAMMAR_LESSONS.length;
  const completed = Object.values(progress).filter(p => p.completed).length;
  return Math.round((completed / total) * 100);
}

/* ── Bookmarks ── */
export function getBookmarks() {
  return loadBookmarks();
}

export function toggleBookmark(lessonId) {
  return toggleBookmarkHybrid(lessonId);
}

export function isBookmarked(lessonId) {
  return isBookmarkedHybrid(lessonId);
}

/* ── Notes ── */
export function getNotes(lessonId) {
  return loadNote(lessonId) || "";
}

export function saveNote(lessonId, note) {
  saveNoteHybrid(lessonId, note);
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
  
  // Save to Supabase via hybrid storage
  saveQuizScoreHybrid(lessonId, {
    score: score,
    total_questions: total,
    correct_answers: score,
    time_taken_seconds: 0,
    answers: []
  });
  
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
