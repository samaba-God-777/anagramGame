/* ═══════════════════════════════════════════
   PASSIVE VOICE GRAMMAR MODULE
   ═══════════════════════════════════════════ */

/**
 * Passive Voice grammar data, exercises, and rendering.
 * Covers all major tenses in passive form with rules, examples, and quizzes.
 * @module features/passiveVoice
 */

/** @type {Object} Comprehensive passive voice data organized by tense */
export const PASSIVE_VOICE_DATA = {
  title: "Passive Voice",
  description: "The passive voice is used when the focus is on the action, not who performs it. Formed with be + past participle.",
  tenses: {
    "Present Simple": {
      passive: "is/are + past participle",
      example: "English is spoken here.",
      active: "People speak English here.",
      structure: { affirmative: "Subject + am/is/are + past participle", negative: "Subject + am/is/are + not + past participle", questions: "Am/Is/Are + subject + past participle + ?" },
      details: {
        affirmative: "Use <strong>am</strong> with I, <strong>is</strong> with he/she/it, <strong>are</strong> with you/we/they, followed by the past participle.",
        negative: "Place <strong>not</strong> after the auxiliary verb. Contractions: isn't, aren't.",
        questions: "Invert the auxiliary verb with the subject."
      },
      signalWords: ["usually", "often", "always", "every day", "generally"],
      commonMistakes: [
        { mistake: "English is speak here.", fix: "English is spoken here.", explanation: "Use past participle (spoken), not base form (speak)." },
      ],
    },
    "Present Continuous": {
      passive: "is/are being + past participle",
      example: "The road is being repaired.",
      active: "They are repairing the road.",
      structure: { affirmative: "Subject + am/is/are + being + past participle", negative: "Subject + am/is/are + not + being + past participle", questions: "Am/Is/Are + subject + being + past participle + ?" },
      details: {
        affirmative: "Use <strong>am/is/are + being</strong> + past participle to describe an action happening right now.",
        negative: "Place <strong>not</strong> after am/is/are.",
        questions: "Invert the auxiliary verb with the subject."
      },
      signalWords: ["now", "right now", "at the moment", "currently"],
      commonMistakes: [
        { mistake: "The road is being repair.", fix: "The road is being repaired.", explanation: "Use past participle (repaired) after 'being'." },
      ],
    },
    "Present Perfect": {
      passive: "has/have been + past participle",
      example: "The report has been completed.",
      active: "She has completed the report.",
      structure: { affirmative: "Subject + has/have + been + past participle", negative: "Subject + has/have + not + been + past participle", questions: "Has/Have + subject + been + past participle + ?" },
      details: {
        affirmative: "Use <strong>has/have + been</strong> + past participle for completed actions with present relevance.",
        negative: "Place <strong>not</strong> between have/has and been.",
        questions: "Invert have/has with the subject."
      },
      signalWords: ["already", "just", "yet", "ever", "never", "recently"],
      commonMistakes: [
        { mistake: "The report has been finish.", fix: "The report has been finished.", explanation: "Use past participle (finished) after been." },
      ],
    },
    "Past Simple": {
      passive: "was/were + past participle",
      example: "The window was broken.",
      active: "Someone broke the window.",
      structure: { affirmative: "Subject + was/were + past participle", negative: "Subject + was/were + not + past participle", questions: "Was/Were + subject + past participle + ?" },
      details: {
        affirmative: "Use <strong>was</strong> with I/he/she/it, <strong>were</strong> with you/we/they, followed by the past participle.",
        negative: "Place <strong>not</strong> after was/were.",
        questions: "Invert was/were with the subject."
      },
      signalWords: ["yesterday", "last week", "ago", "in 2020", "when"],
      commonMistakes: [
        { mistake: "The window was break yesterday.", fix: "The window was broken yesterday.", explanation: "Use past participle (broken), not base form (break)." },
      ],
    },
    "Past Continuous": {
      passive: "was/were being + past participle",
      example: "The house was being painted.",
      active: "They were painting the house.",
      structure: { affirmative: "Subject + was/were + being + past participle", negative: "Subject + was/were + not + being + past participle", questions: "Was/Were + subject + being + past participle + ?" },
      details: {
        affirmative: "Use <strong>was/were + being</strong> + past participle for ongoing past actions.",
        negative: "Place <strong>not</strong> after was/were.",
        questions: "Invert was/were with the subject."
      },
      signalWords: ["while", "when", "at that time", "this time last week"],
      commonMistakes: [
        { mistake: "The house was being paint.", fix: "The house was being painted.", explanation: "Use past participle (painted) after 'being'." },
      ],
    },
    "Past Perfect": {
      passive: "had been + past participle",
      example: "The cake had been eaten.",
      active: "Someone had eaten the cake.",
      structure: { affirmative: "Subject + had + been + past participle", negative: "Subject + had + not + been + past participle", questions: "Had + subject + been + past participle + ?" },
      details: {
        affirmative: "Use <strong>had been</strong> + past participle for actions completed before another past event.",
        negative: "Place <strong>not</strong> between had and been.",
        questions: "Invert had with the subject."
      },
      signalWords: ["before", "after", "by the time", "already", "just"],
      commonMistakes: [
        { mistake: "The cake had been eat.", fix: "The cake had been eaten.", explanation: "Use past participle (eaten) after 'been'." },
      ],
    },
    "Future Simple": {
      passive: "will be + past participle",
      example: "The project will be finished tomorrow.",
      active: "They will finish the project tomorrow.",
      structure: { affirmative: "Subject + will + be + past participle", negative: "Subject + will + not + be + past participle", questions: "Will + subject + be + past participle + ?" },
      details: {
        affirmative: "Use <strong>will be</strong> + past participle for future passive actions.",
        negative: "Place <strong>not</strong> after will.",
        questions: "Invert will with the subject."
      },
      signalWords: ["tomorrow", "next week", "soon", "in the future", "by"],
      commonMistakes: [
        { mistake: "The project will be finish.", fix: "The project will be finished.", explanation: "Use past participle (finished) after 'be'." },
      ],
    },
    "Future Perfect": {
      passive: "will have been + past participle",
      example: "The work will have been completed by Friday.",
      active: "They will have completed the work by Friday.",
      structure: { affirmative: "Subject + will + have + been + past participle", negative: "Subject + will + not + have + been + past participle", questions: "Will + subject + have + been + past participle + ?" },
      details: {
        affirmative: "Use <strong>will have been</strong> + past participle for actions that will be completed before a future time.",
        negative: "Place <strong>not</strong> after will.",
        questions: "Invert will with the subject."
      },
      signalWords: ["by next week", "by the time", "by then", "by"],
      commonMistakes: [
        { mistake: "The work will have been complete.", fix: "The work will have been completed.", explanation: "Use past participle (completed) after 'been'." },
      ],
    },
    "Modal": {
      passive: "can/must/should be + past participle",
      example: "This must be done immediately.",
      active: "You must do this immediately.",
      structure: { affirmative: "Subject + modal + be + past participle", negative: "Subject + modal + not + be + past participle", questions: "Modal + subject + be + past participle + ?" },
      details: {
        affirmative: "Use <strong>modal + be</strong> + past participle. The modal (can, must, should, may, might, could, would) stays the same for all subjects.",
        negative: "Place <strong>not</strong> after the modal.",
        questions: "Invert the modal with the subject."
      },
      signalWords: ["must", "should", "can", "may", "might", "could", "would"],
      commonMistakes: [
        { mistake: "This must be do immediately.", fix: "This must be done immediately.", explanation: "Use past participle (done) after 'be'." },
      ],
    },
  },
  rules: [
    { rule: "Use 'by + agent' when the doer is important", example: "The book was written by Shakespeare." },
    { rule: "Use passive when the doer is unknown or unimportant", example: "My bike was stolen." },
    { rule: "Use passive in formal/scientific writing", example: "The experiment was conducted in 2020." },
    { rule: "Use passive to emphasize the action or receiver", example: "Three people were injured in the accident." },
    { rule: "The passive is formed with BE (conjugated) + PAST PARTICIPLE", example: "is done, was made, will be seen, can be solved" },
    { rule: "Use the same past participle form regardless of tense", example: "written: is written, was written, will be written" },
  ],
  commonMistakes: [
    { mistake: "The book was wrote by her.", fix: "The book was written by her.", explanation: "Use past participle (written), not past simple (wrote)." },
    { mistake: "English is speak here.", fix: "English is spoken here.", explanation: "Use past participle (spoken), not base form (speak)." },
    { mistake: "The report has been finish.", fix: "The report has been finished.", explanation: "Use past participle (finished) after been." },
    { mistake: "The window was break yesterday.", fix: "The window was broken yesterday.", explanation: "Use past participle (broken), not base form (break)." },
    { mistake: "The cake is being eat.", fix: "The cake is being eaten.", explanation: "Use past participle (eaten) after 'being'." },
    { mistake: "Three people was injured.", fix: "Three people were injured.", explanation: "Use 'were' with plural subjects, 'was' with singular." },
    { mistake: "The letter will sent tomorrow.", fix: "The letter will be sent tomorrow.", explanation: "Don't forget 'be' after 'will' in passive." },
    { mistake: "This exercise must to be done.", fix: "This exercise must be done.", explanation: "No 'to' after modal verbs in passive." },
  ],
  exercises: [
    { question: "The cake ___ by my mother.", options: ["was made", "was making", "made", "makes"], answer: 0 },
    { question: "English ___ in many countries.", options: ["speaks", "is spoken", "is speaking", "spoken"], answer: 1 },
    { question: "The letter ___ yesterday.", options: ["was sent", "was sending", "sent", "sends"], answer: 0 },
    { question: "This building ___ in 1990.", options: ["was built", "was building", "built", "builds"], answer: 0 },
    { question: "The homework ___ by the students.", options: ["was done", "was doing", "did", "does"], answer: 0 },
    { question: "The house ___ right now.", options: ["is being painted", "is painting", "was painted", "has been painted"], answer: 0 },
    { question: "The report ___ by Friday.", options: ["will have been completed", "will have completed", "will be completing", "has been completed"], answer: 0 },
    { question: "This work ___ immediately.", options: ["must be done", "must be doing", "must done", "must to be done"], answer: 0 },
    { question: "The window ___ by someone.", options: ["was broken", "was breaking", "broke", "breaking"], answer: 0 },
    { question: "The food ___ before we arrived.", options: ["had been eaten", "had eaten", "has been eaten", "was eating"], answer: 0 },
  ],
  notes: "The passive voice shifts focus from the doer to the receiver of the action. It is formed with the verb BE (conjugated for tense and subject) + the past participle of the main verb. Use 'by + agent' only when the doer is important. The passive is especially common in formal, academic, and scientific writing where the action matters more than who performs it.",
};

/** @type {Array} Extracted exercises for quiz rendering */
export const PASSIVE_VOICE_EXERCISES = PASSIVE_VOICE_DATA.exercises;

/**
 * Renders the passive voice theory card as HTML.
 * @returns {string} HTML string for the theory card
 */
export function renderPassiveVoiceTheory() {
  const t = PASSIVE_VOICE_DATA;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const tenseNames = Object.keys(t.tenses);

  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">🔄</span> ${esc(t.title)}</h2>
        <p class="theory-subtitle">${esc(t.description)}</p>
      </div>

      <section class="theory-section">
        <h3 class="theory-section-title">📖 When to Use Passive Voice</h3>
        <div class="usage-grid">
          ${t.rules.map(r => `
            <div class="usage-card">
              <span class="usage-card-title">${esc(r.rule)}</span>
              <pre class="usage-card-example" style="margin:8px 0 0;font-size:13px;background:var(--color-bg-secondary);padding:8px;border-radius:6px;white-space:pre-wrap;">${esc(r.example)}</pre>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Passive by Tense</h3>
        <div class="structure-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">
          ${tenseNames.map(name => {
            const tn = t.tenses[name];
            return `
              <div class="structure-card affirmative" style="margin-bottom:8px;">
                <span class="structure-label">${esc(name)}</span>
                <code class="structure-formula">${esc(tn.passive)}</code>
                <p style="font-size:12px;margin:4px 0;color:var(--color-text-muted);">Active: ${esc(tn.active)}</p>
                <p style="font-size:12px;margin:4px 0;">Passive: <strong>${esc(tn.example)}</strong></p>
              </div>`;
          }).join("")}
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📐 Structure</h3>
        <table class="theory-table">
          <thead><tr><th>Tense</th><th>Affirmative</th><th>Negative</th><th>Questions</th></tr></thead>
          <tbody>
            ${tenseNames.map(name => {
              const tn = t.tenses[name];
              return `<tr>
                <td><span class="theory-badge badge-time">${esc(name)}</span></td>
                <td style="font-size:12px;"><code>${esc(tn.structure.affirmative)}</code></td>
                <td style="font-size:12px;"><code>${esc(tn.structure.negative)}</code></td>
                <td style="font-size:12px;"><code>${esc(tn.structure.questions)}</code></td>
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
        <div class="quiz-container" id="passiveQuizContainer">
          ${t.exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="passiveQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="passiveQuizScore">0</span> / ${t.exercises.length}</div>
        </div>
      </section>
    </div>`;
}
