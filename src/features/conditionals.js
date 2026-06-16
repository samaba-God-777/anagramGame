/* ═══════════════════════════════════════════
   CONDITIONALS GRAMMAR MODULE
   ═══════════════════════════════════════════ */

/**
 * Conditionals grammar data, exercises, and rendering.
 * Covers zero, first, second, third, and mixed conditionals.
 * @module features/conditionals
 */

/** @type {Object} Comprehensive conditionals data organized by type */
export const CONDITIONALS_DATA = {
  title: "Conditionals",
  types: {
    "Zero Conditional": {
      structure: "If + present, present",
      use: "General truths, scientific facts",
      example: "If you heat water to 100°C, it boils.",
      signalWords: ["if", "when", "unless"],
      details: {
        affirmative: "Use <strong>present simple</strong> in both the if-clause and the main clause. This describes things that are always true.",
        negative: "Use <strong>don't/doesn't</strong> in the if-clause or main clause as needed.",
        questions: "Invert the subject and auxiliary (do/does) as needed."
      },
      commonMistakes: [
        { mistake: "If it will rain, the grass gets wet.", fix: "If it rains, the grass gets wet.", explanation: "Never use 'will' in zero conditional. Use present simple for both clauses." },
      ],
    },
    "First Conditional": {
      structure: "If + present, will + base verb",
      use: "Real/possible future situations",
      example: "If it rains, I will stay home.",
      signalWords: ["if", "unless", "provided that", "as long as"],
      details: {
        affirmative: "Use <strong>present simple</strong> after 'if' and <strong>will + base verb</strong> in the main clause. You can also use other modals (can, might, should) instead of will.",
        negative: "Use <strong>don't/doesn't</strong> in the if-clause. Use <strong>won't</strong> in the main clause.",
        questions: "Invert will with the subject in the main clause."
      },
      commonMistakes: [
        { mistake: "If I will have money, I will buy a car.", fix: "If I have money, I will buy a car.", explanation: "Use present simple after 'if', not 'will'." },
      ],
    },
    "Second Conditional": {
      structure: "If + past, would/could/might + base verb",
      use: "Unreal/hypothetical present situations",
      example: "If I were rich, I would travel the world.",
      signalWords: ["if", "unless", "suppose"],
      details: {
        affirmative: "Use <strong>past simple</strong> after 'if' (use <strong>were</strong> for all subjects including I/he/she/it). Use <strong>would/could/might + base verb</strong> in the main clause.",
        negative: "Use <strong>didn't</strong> in the if-clause. Use <strong>wouldn't/couldn't/mightn't</strong> in the main clause.",
        questions: "Invert the modal with the subject in the main clause."
      },
      commonMistakes: [
        { mistake: "If I would be you, I would go.", fix: "If I were you, I would go.", explanation: "Use past tense (were for all subjects), not 'would' after 'if'." },
      ],
    },
    "Third Conditional": {
      structure: "If + past perfect, would have + past participle",
      use: "Unreal past situations (regrets)",
      example: "If I had studied harder, I would have passed.",
      signalWords: ["if", "unless"],
      details: {
        affirmative: "Use <strong>had + past participle</strong> after 'if' and <strong>would have + past participle</strong> in the main clause.",
        negative: "Use <strong>hadn't + past participle</strong> in the if-clause. Use <strong>wouldn't have + past participle</strong> in the main clause.",
        questions: "Invert 'would have' with the subject in the main clause."
      },
      commonMistakes: [
        { mistake: "If I studied harder, I would passed.", fix: "If I had studied harder, I would have passed.", explanation: "Third conditional needs past perfect after 'if' and 'would have' + past participle." },
      ],
    },
    "Mixed Conditional": {
      structure: "Various combinations",
      use: "Mixing time references",
      example: "If I had studied medicine, I would be a doctor now.",
      signalWords: [],
      details: {
        affirmative: "Mixed conditionals combine different time references. Common pattern: <strong>If + past perfect, would + base verb</strong> (past cause, present result).",
        negative: "Follow the same negative patterns as the tenses used.",
        questions: "Follow the same question patterns as the tenses used."
      },
      commonMistakes: [
        { mistake: "If I had studied medicine, I would have been a doctor now.", fix: "If I had studied medicine, I would be a doctor now.", explanation: "For present result of past cause, use would + base verb (not would have + past participle)." },
      ],
    },
  },
  commonMistakes: [
    { mistake: "If I will have money, I will buy a car.", fix: "If I have money, I will buy a car.", explanation: "In first conditional, use present simple after 'if', not 'will'." },
    { mistake: "If I would be you, I would go.", fix: "If I were you, I would go.", explanation: "In second conditional, use past tense (were for all subjects), not 'would'." },
    { mistake: "If I studied harder, I would passed.", fix: "If I had studied harder, I would have passed.", explanation: "Third conditional needs past perfect after 'if' and 'would have' + past participle." },
    { mistake: "If it will rain, the grass gets wet.", fix: "If it rains, the grass gets wet.", explanation: "In zero conditional, use present simple in both clauses. Never use 'will' after 'if'." },
    { mistake: "If I would have studied, I would passed.", fix: "If I had studied, I would have passed.", explanation: "Use past perfect (had + past participle) after 'if' in third conditional, not 'would have'." },
    { mistake: "If I was you, I would help her.", fix: "If I were you, I would help her.", explanation: "Use 'were' (not 'was') for all subjects in the second conditional 'if' clause." },
    { mistake: "If it rains, I will would stay home.", fix: "If it rains, I will stay home.", explanation: "Don't combine 'will' and 'would'. Use only one modal in the main clause." },
    { mistake: "If I had ate breakfast, I wouldn't be hungry.", fix: "If I had eaten breakfast, I wouldn't be hungry.", explanation: "After 'had', use the past participle (eaten), not the past simple (ate)." },
  ],
  exercises: [
    { question: "If it ___ tomorrow, we will cancel the picnic.", options: ["rains", "will rain", "rained", "raining"], answer: 0 },
    { question: "If I ___ a million dollars, I would buy a house.", options: ["have", "had", "would have", "will have"], answer: 1 },
    { question: "If she ___ harder, she would have passed the exam.", options: ["studied", "had studied", "would study", "studies"], answer: 1 },
    { question: "If you heat ice, it ___.", options: ["melts", "will melt", "melted", "would melt"], answer: 0 },
    { question: "If I ___ you, I would apologize.", options: ["am", "was", "were", "would be"], answer: 2 },
    { question: "If they had left earlier, they ___ on time.", options: ["would have arrived", "would arrive", "will arrive", "arrived"], answer: 0 },
    { question: "If I ___ to school, I would be tired.", options: ["walk", "walked", "would walk", "am walking"], answer: 1 },
    { question: "If you don't study, you ___ the test.", options: ["will fail", "would fail", "failed", "would have failed"], answer: 0 },
    { question: "If I ___ Spanish, I would talk to them.", options: ["know", "knew", "would know", "am knowing"], answer: 1 },
    { question: "If it hadn't rained, we ___ outside.", options: ["would have played", "would play", "will play", "played"], answer: 0 },
  ],
  notes: "Conditionals express if-then relationships. The key rule: NEVER use 'will' after 'if' — use the appropriate tense instead (present simple for zero/first, past simple for second, past perfect for third). Mixed conditionals combine different time frames — the most common is a past cause with a present result. For the second conditional, always use 'were' (not 'was') for all subjects in the if-clause, especially after 'If I were you'.",
};

/** @type {Array} Extracted exercises for quiz rendering */
export const CONDITIONALS_EXERCISES = CONDITIONALS_DATA.exercises;

/**
 * Renders the conditionals theory card as HTML.
 * @returns {string} HTML string for the theory card
 */
export function renderConditionalsTheory() {
  const t = CONDITIONALS_DATA;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const typeNames = Object.keys(t.types);

  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">🔀</span> ${esc(t.title)}</h2>
        <p class="theory-subtitle">If-clauses and result clauses — zero, first, second, third, and mixed conditionals.</p>
      </div>

      <section class="theory-section">
        <h3 class="theory-section-title">📖 Types of Conditionals</h3>
        <div class="structure-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">
          ${typeNames.map(name => {
            const tn = t.types[name];
            return `
              <div class="structure-card affirmative" style="margin-bottom:8px;">
                <span class="structure-label">${esc(name)}</span>
                <code class="structure-formula">${esc(tn.structure)}</code>
                <p style="font-size:12px;margin:4px 0;color:var(--color-text-muted);">${esc(tn.use)}</p>
                <p style="font-size:12px;margin:4px 0;"><strong>${esc(tn.example)}</strong></p>
                ${tn.signalWords.length > 0 ? `<p style="font-size:11px;margin:4px 0;color:var(--color-text-muted);">Signal words: ${tn.signalWords.map(w => `<span class="theory-badge badge-time" style="font-size:10px;">${esc(w)}</span>`).join(" ")}</p>` : ""}
              </div>`;
          }).join("")}
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📐 Structure Details</h3>
        <table class="theory-table">
          <thead><tr><th>Type</th><th>Structure</th><th>Use</th><th>Example</th></tr></thead>
          <tbody>
            ${typeNames.map(name => {
              const tn = t.types[name];
              return `<tr>
                <td><span class="theory-badge badge-time">${esc(name)}</span></td>
                <td style="font-size:12px;"><code>${esc(tn.structure)}</code></td>
                <td style="font-size:12px;">${esc(tn.use)}</td>
                <td style="font-size:12px;">${esc(tn.example)}</td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${t.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(m.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes" style="background:var(--color-bg-secondary);padding:14px 18px;border-radius:8px;border-left:4px solid var(--color-accent);">${esc(t.notes)}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="condQuizContainer">
          ${t.exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="condQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="condQuizScore">0</span> / ${t.exercises.length}</div>
        </div>
      </section>
    </div>`;
}
