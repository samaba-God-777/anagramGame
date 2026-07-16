/* ═══════════════════════════════════════════
   ACTIVITIES RENDERER MODULE
   Generates printable worksheets for all 12 tenses
   ═══════════════════════════════════════════ */

import { SENTENCES, THEORY, TENSE_ORDER } from '../data/tenses.js';

/* ── HELPERS ── */
const FORMS = ['affirmative', 'negative', 'questions'];
const FORM_LABELS = { affirmative: 'Affirmative', negative: 'Negative', questions: 'Question' };
const ADVERBS = new Set(['ever', 'never', 'already', 'just', 'always', 'really', 'hardly']);

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

/* ── BLANK RULES — per-tense heuristics for verb phrase detection ── */

// [{tense, start, end}] — [start, end] inclusive word indices
// end can be negative (relative to words.length)
const AFFIRMATIVE_RULES = {
  'Present Simple':             { start: 1, end: 1 },
  'Present Continuous':         { start: 1, end: 2 },
  'Present Perfect':            { start: 1, end: 2 },
  'Present Perfect Continuous': { start: 1, end: 3 },
  'Past Simple':                { start: 1, end: 1 },
  'Past Continuous':            { start: 1, end: 2 },
  'Past Perfect':               { start: 1, end: 3 },
  'Past Perfect Continuous':    { start: 1, end: 3 },
  'Future Simple':              { start: 1, end: 2 },
  'Future Continuous':          { start: 1, end: 3 },
  'Future Perfect':             { start: 1, end: 3 },
  'Future Perfect Continuous':  { start: 1, end: 4 },
};

const NEGATIVE_RULES = {
  'Present Simple':             { start: 1, end: 3 },
  'Present Continuous':         { start: 1, end: 3 },
  'Present Perfect':            { start: 1, end: 3 },
  'Present Perfect Continuous': { start: 1, end: 4 },
  'Past Simple':                { start: 1, end: 3 },
  'Past Continuous':            { start: 1, end: 3 },
  'Past Perfect':               { start: 1, end: 3 },
  'Past Perfect Continuous':    { start: 1, end: 4 },
  'Future Simple':              { start: 1, end: 3 },
  'Future Continuous':          { start: 1, end: 4 },
  'Future Perfect':             { start: 1, end: 4 },
  'Future Perfect Continuous':  { start: 1, end: 5 },
};

const QUESTION_RULES = {
  'Present Simple':             { start: 2, end: 2 },
  'Present Continuous':         { start: 2, end: 2 },
  'Present Perfect':            { start: null, skipAdverb: true  },
  'Present Perfect Continuous': { start: 2, end: 3 },
  'Past Simple':                { start: 2, end: 2 },
  'Past Continuous':            { start: 2, end: 2 },
  'Past Perfect':               { start: null, skipAdverb: true  },
  'Past Perfect Continuous':    { start: 2, end: 3 },
  'Future Simple':              { start: 2, end: 2 },
  'Future Continuous':          { start: 2, end: 3 },
  'Future Perfect':             { start: 2, end: 3 },
  'Future Perfect Continuous':  { start: 2, end: 4 },
};

function resolveIndices(words, rule) {
  const len = words.length;
  let s, e;

  if (rule.skipAdverb) {
    // Skip over adverb words to find the main verb
    s = 2;
    while (s < len && ADVERBS.has(words[s].toLowerCase().replace(/[^a-z]/g, ''))) s++;
    e = s;
  } else {
    s = rule.start;
    e = rule.end;
    if (e < 0) e = len + e;
  }

  // Clamp
  s = Math.max(0, Math.min(s, len - 1));
  e = Math.max(s, Math.min(e, len - 1));
  return { start: s, end: e };
}

function blankSentence(sentence, tense, form) {
  const words = sentence.split(' ');
  const rules = form === 'affirmative' ? AFFIRMATIVE_RULES
    : form === 'negative' ? NEGATIVE_RULES
    : QUESTION_RULES;
  const rule = rules[tense];
  if (!rule) return { blanks: ['(verb)'], display: sentence };

  const { start, end } = resolveIndices(words, rule);
  const blanked = words.map((w, i) => (i >= start && i <= end) ? '' : w);
  const blanks = words.slice(start, end + 1);

  // Build display: replace blanked words with underline spans
  const display = blanked.map((w, i) => {
    if (w === '') return `<span class="exercise-blank"></span>`;
    return esc(w);
  }).join(' ');

  return { blanks, display, count: blanks.length };
}

/* ── EXERCISE GENERATORS ── */

let answerData = [];

function resetAnswers() {
  answerData = [];
}

function addAnswer(tense, exercise, num, answer) {
  answerData.push({ tense, exercise, num, answer });
}

function renderFillBlanks(tense) {
  const data = SENTENCES[tense];
  if (!data) return '';

  let html = `<div class="exercise-section">
    <h4 class="exercise-title">A — Complete the Sentences</h4>
    <p class="exercise-instructions">Write the correct verb form to complete each sentence.</p>
    <ol class="exercise-list">`;

  let num = 1;
  FORMS.forEach(form => {
    (data[form] || []).forEach(sentence => {
      const result = blankSentence(sentence, tense, form);
      const formTag = form === 'affirmative' ? '✅' : form === 'negative' ? '❌' : '❓';
      const answer = result.blanks.join(' ');
      html += `<li><span class="form-tag">${formTag}</span> ${result.display}</li>`;
      addAnswer(tense, 'A', num, answer);
      num++;
    });
  });

  html += `</ol></div>`;
  return html;
}

function renderErrorCorrection(tense) {
  const t = THEORY[tense];
  const mistakes = t?.commonMistakes;
  if (!mistakes || mistakes.length === 0) return '';

  let html = `<div class="exercise-section">
    <h4 class="exercise-title">B — Correct the Mistakes</h4>
    <p class="exercise-instructions">Each sentence has one grammar mistake. Write the correct version.</p>
    <ol class="exercise-list">`;

  const count = Math.min(mistakes.length, 5);
  for (let i = 0; i < count; i++) {
    html += `<li>${esc(mistakes[i].mistake)}<br><span class="correct-prompt">→ Correct: <span class="exercise-blank"></span></span></li>`;
    addAnswer(tense, 'B', i + 1, mistakes[i].fix);
  }

  html += `</ol></div>`;
  return html;
}

function renderIdentifyForm(tense) {
  const data = SENTENCES[tense];
  if (!data) return '';

  let html = `<div class="exercise-section">
    <h4 class="exercise-title">C — Identify the Form</h4>
    <p class="exercise-instructions">Read each sentence and write if it is <strong>Affirmative</strong>, <strong>Negative</strong>, or <strong>Question</strong>.</p>
    <ol class="exercise-list">`;

  let num = 1;
  FORMS.forEach(form => {
    const sentences = data[form];
    if (!sentences || sentences.length === 0) return;
    const sentence = sentences[0]; // First sentence of each form
    html += `<li>“${esc(sentence)}”<br><span class="identify-prompt">Form: <span class="exercise-blank" style="min-width:100px;"></span></span></li>`;
    addAnswer(tense, 'C', num, FORM_LABELS[form]);
    num++;
  });

  html += `</ol></div>`;
  return html;
}

function renderTenseSection(tense) {
  const t = THEORY[tense];
  const cefrColor = { A1: '#22c55e', A2: '#3b82f6', B1: '#f59e0b', B2: '#ef4444', C1: '#a855f7', C2: '#ec4899' };

  let html = `
    <div class="tense-section" data-tense="${esc(tense)}" data-time="${tense.includes('Present') ? 'present' : tense.includes('Past') ? 'past' : 'future'}">
      <div class="tense-section-header">
        <h3 class="tense-section-title">${esc(tense)}</h3>
        ${t?.cefr ? `<span class="cefr-badge" style="background:${(cefrColor[t.cefr] || '#6b7280')}20;color:${cefrColor[t.cefr] || '#6b7280'};border:1px solid ${(cefrColor[t.cefr] || '#6b7280')}40;">${t.cefr}</span>` : ''}
        <span class="structure-hint">${t?.structure?.affirmative ? esc(t.structure.affirmative) : ''}</span>
      </div>

      ${renderFillBlanks(tense)}
      ${renderErrorCorrection(tense)}
      ${renderIdentifyForm(tense)}
    </div>
  `;

  return html;
}

function renderAnswerKey() {
  if (answerData.length === 0) return '';

  // Group by tense
  const byTense = {};
  answerData.forEach(a => {
    if (!byTense[a.tense]) byTense[a.tense] = [];
    byTense[a.tense].push(a);
  });

  let html = `
    <section id="answerKey" class="answer-key">
      <h3 class="answer-key-title">📝 Answer Key</h3>
      <p class="answer-key-note">Try the exercises first before checking the answers.</p>`;

  TENSE_ORDER.forEach(tense => {
    const items = byTense[tense];
    if (!items || items.length === 0) return;

    html += `
      <div class="ak-tense">
        <h4 class="ak-tense-title">${esc(tense)}</h4>
        <table class="ak-table">
          <thead><tr><th>#</th><th>Exercise</th><th>Answer</th></tr></thead>
          <tbody>`;

    items.forEach(a => {
      html += `<tr><td class="ak-num">${a.exercise}${a.num}</td><td class="ak-ex">${esc(a.exercise)}</td><td class="ak-answer">${esc(a.answer)}</td></tr>`;
    });

    html += `</tbody></table></div>`;
  });

  html += `</section>`;
  return html;
}

/* ── MAIN EXPORT ── */
export function renderActivitiesPage() {
  const container = document.getElementById('activitiesContent');
  if (!container) return;

  resetAnswers();
  let html = '';

  TENSE_ORDER.forEach(tense => {
    html += renderTenseSection(tense);
  });

  html += renderAnswerKey();

  container.innerHTML = html;

  // Set up filter tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.tense-section').forEach(section => {
        if (filter === 'all' || section.dataset.time === filter) {
          section.style.display = '';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });

  // Set up answer key toggle
  const toggleBtn = document.getElementById('toggleAnswersBtn');
  const answerKey = document.getElementById('answerKey');
  if (toggleBtn && answerKey) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = answerKey.classList.toggle('visible');
      toggleBtn.textContent = isHidden ? '🔍 Hide Answer Key' : '🔍 Show Answer Key';
    });
  }

  // Set up print button
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  // Update exercise count
  const totalEl = document.getElementById('totalExercises');
  if (totalEl) {
    totalEl.textContent = `${answerData.length} exercises`;
  }
}
