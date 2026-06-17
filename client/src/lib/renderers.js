/* ═══════════════════════════════════════════
   RENDERERS MODULE
   ═══════════════════════════════════════════ */

import { THEORY } from '../data/tenses.js';
import { CLAUSES_THEORY, CLAUSE_EXERCISES } from '../data/clauses.js';
import { ADJECTIVE_POSITIONS, ADJECTIVE_POSITION_EXERCISES } from '../data/adjectivePositions.js';
import { ADVERB_POSITIONS, ADVERB_POSITION_EXERCISES } from '../data/adverbPositions.js';
import { CONJUNCTIONS_DATA, CONJUNCTION_EXERCISES } from '../data/conjunctions.js';
import { PHRASAL_VERBS_DATA, PHRASAL_VERB_EXERCISES } from '../data/phrasalVerbs.js';
import { IDIOMATIC_EXPRESSIONS_DATA, IDIOMATIC_EXPRESSION_EXERCISES } from '../data/idioms.js';

function renderTheoryHTML(tense) {
  const t = THEORY[tense]; if(!t) return "";
  const esc = s => {const d=document.createElement("div"); d.textContent=s; return d.innerHTML;};
  const F = ["affirmative","negative","questions"];
  const cefrColors = {A1:"#22c55e",A2:"#3b82f6",B1:"#f59e0b",B2:"#ef4444",C1:"#a855f7",C2:"#ec4899"};
  const cefrBg = (l) => {const c=cefrColors[l]||"#6b7280"; return `background:${c}15;color:${c};border:1px solid ${c}40;`;};
  return `
    <div class="theory-card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;flex-wrap:wrap;">
        <h2 class="theory-title" style="margin:0;">${esc(tense)}</h2>
        ${t.cefr ? `<span class="theory-badge" style="font-size:13px;font-weight:700;padding:4px 12px;border-radius:999px;${cefrBg(t.cefr)}">${t.cefr}</span>` : ""}
      </div>
      ${t.cefrDescription ? `<p style="font-size:14px;color:var(--color-text-secondary);margin:0 0 16px 0;line-height:1.6;">${esc(t.cefrDescription)}</p>` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">📖 When to Use</h3>
        <p class="theory-description">${t.description}</p>
      </section>

      ${t.usage ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🎯 Usage Breakdown</h3>
        <div class="usage-grid">
          ${t.usage.map(u => `
            <div class="usage-card">
              <span class="usage-card-title">${esc(u.title)}</span>
              <p class="usage-card-text">${u.text}</p>
              ${u.example ? `<code class="usage-card-example">${u.example}</code>` : ""}
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure</h3>
        <div class="structure-grid">
          ${F.map(f => `
            <div class="structure-card ${f}">
              <span class="structure-label">${f==="affirmative"?"✅":f==="negative"?"❌":"❓"} ${f.charAt(0).toUpperCase()+f.slice(1)}</span>
              <code class="structure-formula">${esc(t.structure[f])}</code>
              <p class="structure-detail">${t.details?.[f]||""}</p>
            </div>
          `).join("")}
        </div>
      </section>

      ${t.conjugation ? `
      <section class="theory-section">
        <h3 class="theory-section-title">📋 Conjugation Helper</h3>
        <div class="conjugation-block">${t.conjugation}</div>
      </section>` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">📝 Examples</h3>
        <div class="examples-grid">
          ${F.map(f => `
            <div class="example-group">
              <span class="example-label ${f}-label">${f==="affirmative"?"✅":f==="negative"?"❌":"❓"} ${f.charAt(0).toUpperCase()+f.slice(1)}</span>
              <ul class="example-list">${t.examples[f].map(ex => `<li>${ex}</li>`).join("")}</ul>
            </div>
          `).join("")}
        </div>
      </section>

      ${t.signalWords ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🏷️ Signal Words</h3>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${t.signalWords.map(w => `<span class="theory-badge badge-time" style="font-size:13px;">${esc(w)}</span>`).join("")}
        </div>
      </section>` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${t.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">${esc(m.mistake)}</p>
              <p class="mistake-correct">${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>

      ${t.comparison ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🔍 Compare with Similar Tenses</h3>
        <div class="comparison-grid">
          ${t.comparison.map(c => `
            <div class="comparison-card">
              <span class="comparison-card-title">vs ${esc(c.tense)}</span>
              <p class="comparison-card-text">${c.text}</p>
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${t.notes}</p>
      </section>

      ${t.expressions ? `
      <section class="theory-section">
        <h3 class="theory-section-title">💬 Common Expressions & Collocations</h3>
        <div style="display:grid;gap:8px;">
          ${t.expressions.map(ex => `
            <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:12px;display:flex;gap:12px;align-items:flex-start;">
              <span style="color:var(--color-accent);font-size:16px;">💬</span>
              <div style="flex:1;">
                <p style="font-size:14px;margin:0 0 4px 0;font-weight:600;">${esc(ex.phrase || ex.expression || ex)}</p>
                ${ex.meaning ? `<p style="font-size:12px;color:var(--color-text-muted);margin:0;">${esc(ex.meaning)}</p>` : ""}
              </div>
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      ${t.spokenPatterns ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🗣️ Spoken English Patterns</h3>
        <div style="display:grid;gap:8px;">
          ${t.spokenPatterns.map(sp => `
            <div style="background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.15);border-radius:8px;padding:12px;">
              <p style="font-size:14px;margin:0 0 4px 0;font-weight:600;">${esc(sp.pattern || sp)}</p>
              ${sp.example ? `<p style="font-size:12px;color:var(--color-text-muted);margin:0;font-style:italic;">"${esc(sp.example)}"</p>` : ""}
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      ${t.advancedStructures ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🧩 Advanced Structures</h3>
        <div style="display:grid;gap:8px;">
          ${t.advancedStructures.map(a => `
            <div style="background:rgba(168,85,247,0.06);border:1px solid rgba(168,85,247,0.15);border-radius:8px;padding:12px;">
              <p style="font-size:14px;margin:0 0 4px 0;font-weight:600;">${esc(a.structure || a)}</p>
              ${a.example ? `<p style="font-size:12px;color:var(--color-text-muted);margin:0;font-style:italic;">${esc(a.example)}</p>` : ""}
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      ${t.challenges ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🏋️ CEFR Challenge Exercises</h3>
        <div style="display:grid;gap:10px;">
          ${t.challenges.map(ch => `
            <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:14px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <span class="theory-badge" style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px;${cefrBg(ch.level || "B1")}">${ch.level || "B1"}</span>
                <span style="font-size:13px;color:var(--color-text-secondary);">${esc(ch.question || ch.sentence || ch)}</span>
              </div>
              ${ch.answer ? `<details style="margin-top:6px;"><summary style="font-size:12px;color:var(--color-accent);cursor:pointer;">Show Answer</summary><p style="font-size:13px;margin:6px 0 0 0;"><strong>Answer:</strong> ${esc(ch.answer)}</p>${ch.explanation ? `<p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0 0;">${esc(ch.explanation)}</p>` : ""}</details>` : ""}
            </div>
          `).join("")}
        </div>
      </section>` : ""}

      <div class="theory-actions">
        <button class="btn btn-accent practice-btn" data-tense="${esc(tense)}">
          <span class="btn-icon" aria-hidden="true">🎯</span> Practice ${esc(tense)}
        </button>
      </div>
    </div>`;
}

function renderClauseFullLesson(clauseType) {
  const L = (typeof CLAUSE_FULL_LESSONS !== 'undefined' ? CLAUSE_FULL_LESSONS : window.CLAUSE_FULL_LESSONS || {})[clauseType];
  if (!L) return renderClauseTheory(clauseType);
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };

  const renderIntro = () => `
    <div class="theory-card intro-card" style="background:linear-gradient(135deg,var(--color-surface),var(--color-bg-secondary));border:2px solid var(--color-border);border-radius:var(--radius-lg);padding:24px;margin-bottom:30px;">
      <p style="font-size:16px;line-height:1.7;margin-bottom:12px;">${L.intro.text}</p>
      <p style="font-size:14px;color:var(--color-text-muted);font-style:italic;margin-bottom:16px;padding:8px 12px;background:var(--color-bg-secondary);border-radius:6px;">${L.intro.spanish}</p>
      ${L.intro.examples.map(ex => `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:12px 16px;margin-bottom:8px;">
          <p style="font-size:15px;font-weight:500;">${ex.text}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin-top:4px;">${ex.note}</p>
        </div>
      `).join("")}
    </div>`;

  const renderSubtopics = () => L.subtopics.map(st => `
    <div class="theory-card" style="margin-bottom:28px;">
      <h2 class="theory-title" style="border-bottom:2px solid var(--color-primary);padding-bottom:8px;margin-bottom:6px;">${st.title}</h2>
      <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:16px;">${st.spanish}</p>
      ${st.sections ? st.sections.map(sec => `
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;margin-bottom:16px;">
          <h3 style="font-size:15px;font-weight:700;color:var(--color-primary);margin:0 0 4px;">${sec.title}</h3>
          ${sec.spanish ? `<p style="font-size:12px;color:var(--color-text-muted);margin-bottom:6px;">${sec.spanish}</p>` : ""}
          ${sec.text ? `<p style="font-size:14px;line-height:1.6;margin-bottom:10px;">${sec.text}</p>` : ""}
          ${sec.examples && Array.isArray(sec.examples) ? `
            <div style="margin:8px 0;">
              ${sec.examples.map(ex => {
                if (typeof ex === "string") return `<div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;margin-bottom:6px;font-size:14px;">${ex}</div>`;
                return `<div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;margin-bottom:6px;">
                  <p style="font-size:14px;">${ex.text || ex.correct || ""}</p>
                  ${ex.incorrect ? `<p style="font-size:13px;color:var(--color-error);">✗ ${ex.incorrect}</p>` : ""}
                  ${ex.rule ? `<p style="font-size:12px;color:var(--color-text-muted);">${ex.rule}</p>` : ""}
                  ${ex.normal ? `<p style="font-size:13px;">Normal: ${ex.normal}</p><p style="font-size:13px;">Extraposed: ${ex.extraposed}</p>` : ""}
                  ${ex.direct ? `<p style="font-size:13px;">Direct: ${ex.direct}</p><p style="font-size:13px;">Reported: ${ex.reported}</p>` : ""}
                  ${ex.full ? `<p style="font-size:13px;">Full: ${ex.full}</p><p style="font-size:13px;">Reduced: ${ex.reduced}</p>` : ""}
                  ${ex.formal ? `<p style="font-size:13px;">Formal: ${ex.formal}</p><p style="font-size:13px;">Informal: ${ex.informal}</p>` : ""}
                  ${ex.note ? `<p style="font-size:12px;color:var(--color-text-muted);">${ex.note}</p>` : ""}
                </div>`;
              }).join("")}
            </div>
          ` : ""}
          ${sec.note ? `<p style="font-size:12px;font-style:italic;color:var(--color-text-muted);padding:6px 10px;background:var(--color-surface);border-radius:4px;">💡 ${sec.note}</p>` : ""}
        </div>
      `).join("") : ""}
      ${st.comparisonTable ? `
        <div style="overflow-x:auto;margin-top:12px;">
          <table class="theory-table">
            <thead><tr>${st.comparisonTable.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
            <tbody>${st.comparisonTable.rows.map(r => `<tr>${r.map(c => `<td style="font-size:13px;">${c}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      ` : ""}
    </div>
  `).join("");

  const renderMistakes = () => {
    const m = L.commonMistakes20 || L.commonMistakes25;
    if (!m) return "";
    return `
      <div class="theory-card" style="margin-bottom:28px;">
        <h2 class="theory-title" style="border-bottom:2px solid var(--color-error);padding-bottom:8px;">Common Mistakes</h2>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Errores Comunes — ${m.length} errores frecuentes explicados</p>
        <div class="mistakes-grid">
          ${m.map(err => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(err.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(err.fix)}</p>
              <p class="mistake-explain">${err.explanation}</p>
            </div>
          `).join("")}
        </div>
      </div>`;
  };

  const renderNativeSpeaker = () => {
    const ns = L.nativeSpeaker;
    if (!ns) return "";
    const renderSection = (sec, icon) => sec ? `
      <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;margin-bottom:16px;">
        <h3 style="font-size:15px;font-weight:700;margin:0 0 8px;">${icon} ${sec.title}</h3>
        ${sec.lines ? sec.lines.map(l => `
          <p style="font-size:14px;padding:4px 0;${l.speaker === 'A' ? 'color:var(--color-primary);' : ''}"><strong>${l.speaker}:</strong> ${l.text}</p>
        `).join("") : ""}
        ${sec.examples ? sec.examples.map(ex => `
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:6px;padding:8px 12px;margin-bottom:6px;font-size:14px;">${ex}</div>
        `).join("") : ""}
      </div>
    ` : "";
    return `
      <div class="theory-card" style="margin-bottom:28px;">
        <h2 class="theory-title" style="border-bottom:2px solid var(--color-accent);padding-bottom:8px;">Practice Like a Native Speaker</h2>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Practica con conversaciones reales, escritura académica, profesional y de negocios</p>
        ${renderSection(ns.conversation, "💬")}
        ${renderSection(ns.academic, "📚")}
        ${renderSection(ns.professional, "💼")}
        ${renderSection(ns.business, "🏢")}
      </div>`;
  };

  const renderFinalQuiz = () => {
    const qs = L.finalQuiz50;
    if (!qs) return "";
    const total = qs.length;
    return `
      <div class="theory-card" style="margin-bottom:28px;">
        <h2 class="theory-title" style="border-bottom:2px solid var(--color-primary);padding-bottom:8px;">🎯 Final Quiz — ${total} Questions</h2>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Test your knowledge! Complete all questions to see your score.</p>
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:12px;margin-bottom:16px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-size:13px;font-weight:600;">Progress</span>
            <span style="font-size:13px;font-weight:600;"><span id="fqScore${clauseType.replace(/\s/g,'')}">0</span> / ${total}</span>
          </div>
          <div style="background:var(--color-border);border-radius:99px;height:8px;overflow:hidden;">
            <div id="fqBar${clauseType.replace(/\s/g,'')}" style="background:var(--color-primary);height:100%;width:0%;border-radius:99px;transition:width 0.3s;"></div>
          </div>
        </div>
        <div class="quiz-container" id="fqContainer">
          ${qs.map((q, i) => `
            <div class="quiz-question" data-qid="fq${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(q.question)}</p>
              <div class="quiz-options">
                ${q.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option fq-option" data-fq="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <div class="quiz-feedback" id="fqFeedback${i}" style="font-size:13px;"></div>
            </div>
          `).join("")}
        </div>
      </div>`;
  };

  const renderSummary = () => {
    const types = ["Noun Clauses", "Adjective Clauses", "Adverb Clauses"];
    const getSummaryRow = t => {
      const d = CLAUSES_THEORY[t];
      if (!d) return null;
      const examples = d.examples20 ? d.examples20.slice(0, 1) : null;
      const label = t.replace(" Clauses", "");
      const func = t === "Noun Clauses" ? "Acts as a noun (subject/object/complement)" : t === "Adjective Clauses" ? "Modifies a noun" : "Modifies a verb / adjective / clause";
      const example = examples ? examples[0].text : "";
      return { label, func, example };
    };
    const rows = types.map(getSummaryRow).filter(Boolean);
    return `
      <div class="theory-card" style="margin-bottom:28px;">
        <h2 class="theory-title" style="border-bottom:2px solid var(--color-accent);padding-bottom:8px;">📊 Summary — Clause Comparison</h2>
        <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Tabla comparativa de los tres tipos de cláusulas</p>
        <div style="overflow-x:auto;">
          <table class="theory-table">
            <thead><tr><th>Type</th><th>Function</th><th>Example</th></tr></thead>
            <tbody>
              ${rows.map(r => `<tr>
                <td><span class="theory-badge badge-time">${esc(r.label)}</span></td>
                <td style="font-size:13px;">${esc(r.func)}</td>
                <td style="font-size:13px;">${r.example}</td>
              </tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>`;
  };

  const renderConceptMap = () => `
    <div class="theory-card" style="margin-bottom:28px;">
      <h2 class="theory-title" style="border-bottom:2px solid var(--color-accent);padding-bottom:8px;">🧠 Concept Map</h2>
      <p style="font-size:13px;color:var(--color-text-muted);margin-bottom:12px;">Mapa conceptual de las cláusulas en inglés</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;text-align:center;">
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;border-top:4px solid var(--color-primary);">
          <p style="font-size:13px;font-weight:700;color:var(--color-primary);margin:0 0 4px;">NOUN CLAUSE</p>
          <p style="font-size:12px;color:var(--color-text-muted);">Functions as a noun</p>
          <p style="font-size:11px;margin:4px 0;">Subject / Object / Complement</p>
          <p style="font-size:11px;color:var(--color-text-muted);">that / what / whether / if / whoever</p>
        </div>
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;border-top:4px solid var(--color-success);">
          <p style="font-size:13px;font-weight:700;color:var(--color-success);margin:0 0 4px;">ADJECTIVE CLAUSE</p>
          <p style="font-size:12px;color:var(--color-text-muted);">Modifies a noun</p>
          <p style="font-size:11px;margin:4px 0;">who / whom / which / that / whose</p>
          <p style="font-size:11px;color:var(--color-text-muted);">Defining vs Non-defining</p>
        </div>
        <div style="background:var(--color-bg-secondary);border-radius:8px;padding:16px;border-top:4px solid var(--color-accent);">
          <p style="font-size:13px;font-weight:700;color:var(--color-accent);margin:0 0 4px;">ADVERB CLAUSE</p>
          <p style="font-size:12px;color:var(--color-text-muted);">Modifies a verb/adjective</p>
          <p style="font-size:11px;margin:4px 0;">Time / Cause / Condition / Contrast</p>
          <p style="font-size:11px;color:var(--color-text-muted);">when / because / if / although</p>
        </div>
      </div>
    </div>`;

  return `
    <div class="full-lesson">
      ${renderSummary()}
      ${renderConceptMap()}
      ${renderIntro()}
      ${renderSubtopics()}
      ${renderMistakes()}
      ${renderNativeSpeaker()}
      ${renderFinalQuiz()}
    </div>`;
}

function renderClauseTheory(clauseType) {
  const t = CLAUSES_THEORY[clauseType];
  if (!t) return "";
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = CLAUSE_EXERCISES[clauseType] || [];
  return `
    <div class="theory-card">
      <h2 class="theory-title">${esc(clauseType)}</h2>
      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Is a ${esc(clauseType)}?</h3>
        <p class="theory-description">${t.description}</p>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🎯 How to Use</h3>
        <div class="usage-grid">
          ${t.usage.map(u => `
            <div class="usage-card">
              <span class="usage-card-title">${esc(u.title)}</span>
              <p class="usage-card-text">${u.text}</p>
              ${u.example ? `<pre class="usage-card-example" style="margin:8px 0 0;font-size:13px;background:var(--color-bg-secondary);padding:8px;border-radius:6px;white-space:pre-wrap;">${u.example}</pre>` : ""}
            </div>
          `).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">📐 Structure</h3>
        <table class="theory-table">
          <thead><tr><th>Type</th><th>Formula</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td><span class="theory-badge badge-time">Affirmative</span></td><td><code>${esc(t.structure.affirmative)}</code></td><td style="font-size:13px;">${t.details.affirmative}</td></tr>
            <tr><td><span class="theory-badge badge-place">Negative</span></td><td><code>${esc(t.structure.negative)}</code></td><td style="font-size:13px;">${t.details.negative}</td></tr>
            <tr><td><span class="theory-badge badge-movement">Questions</span></td><td><code>${esc(t.structure.questions)}</code></td><td style="font-size:13px;">${t.details.questions}</td></tr>
          </tbody>
        </table>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🏷️ Signal Words</h3>
        <p class="theory-description">These words introduce ${clauseType.toLowerCase()}:</p>
        <div class="badge-group">
          ${t.signalWords.map(w => `<span class="theory-badge badge-time">${esc(w)}</span>`).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${t.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(m.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(m.fix || m.mistake)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🔁 Comparison with Other Clauses</h3>
        ${t.comparison.map(c => `
          <div class="comparison-card" style="background:var(--color-bg-secondary);border-left:4px solid var(--color-primary);padding:12px 16px;border-radius:8px;margin-bottom:10px;">
            <strong>${esc(c.tense)}:</strong> ${c.text}
          </div>
        `).join("")}
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">📚 20 Comprehensive Examples</h3>
        <p class="theory-description">Study these 20 examples to understand how ${clauseType.toLowerCase()} work in real sentences.</p>
        <table class="theory-table">
          <thead><tr><th>#</th><th>Example</th>${t.examples20[0].category ? '<th>Category</th>' : '<th>Type / Function</th>'}<th>Explanation</th></tr></thead>
          <tbody>
            ${t.examples20.map((ex, i) => `
              <tr>
                <td style="text-align:center;font-weight:700;color:var(--color-primary);">${i + 1}</td>
                <td>${ex.text}</td>
                <td><span class="theory-badge badge-${ex.category === 'Time' ? 'time' : ex.category === 'Cause' ? 'place' : ex.category === 'Condition' ? 'movement' : ex.type === 'Defining' ? 'time' : ex.type === 'Non-defining' ? 'place' : 'movement'}">${esc(ex.category || ex.type || ex.function)}</span></td>
                <td style="font-size:12.5px;">${esc(ex.note)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ${t.extraSections ? t.extraSections.map(s => `
        <section class="theory-section">
          <h3 class="theory-section-title">${s.title}</h3>
          ${s.description ? `<p class="theory-description">${s.description}</p>` : ""}
          ${s.type === "table" ? `
            <div style="overflow-x:auto;">
              <table class="theory-table">
                <thead><tr>${s.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
                <tbody>
                  ${s.rows.map(r => `<tr>${r.map(c => `<td style="font-size:13px;">${c}</td>`).join("")}</tr>`).join("")}
                </tbody>
              </table>
            </div>
          ` : s.type === "cards" ? `
            <div class="usage-grid">
              ${s.items.map(item => `
                <div class="usage-card">
                  <span class="usage-card-title">${esc(item.title)}</span>
                  <p class="usage-card-text">${item.text}</p>
                  ${item.example ? `<pre class="usage-card-example" style="margin:8px 0 0;font-size:13px;background:var(--color-bg-secondary);padding:8px;border-radius:6px;white-space:pre-wrap;">${item.example}</pre>` : ""}
                </div>
              `).join("")}
            </div>
          ` : ""}
        </section>
      `).join("") : ""}
      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes" style="background:var(--color-bg-secondary);padding:14px 18px;border-radius:8px;border-left:4px solid var(--color-accent);">${t.notes}</p>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="quizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="quizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">
            Score: <span id="quizScore">0</span> / ${exercises.length}
          </div>
        </div>
      </section>
    </div>`;
}

function renderAdjectivePositionTheory() {
  const t = ADJECTIVE_POSITIONS;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = ADJECTIVE_POSITION_EXERCISES;
  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">📝</span> Adjective Positions</h2>
        <p class="theory-subtitle">Where to place adjectives in a sentence — attributive, predicative, postpositive, and the OSASCOMP order.</p>
      </div>
      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Adjective Positions?</h3>
        <p class="theory-description">${esc(t.description)}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🎯 Types of Adjective Positions</h3>
        ${t.usage.map(u => `
          <div class="position-card">
            <div class="position-header">
              <span class="position-icon">${u.title.includes("Attributive") ? "🔹" : u.title.includes("Predicative") ? "🔸" : u.title.includes("Postpositive") ? "🟣" : "🌟"}</span>
              <h4 class="position-title">${esc(u.title)}</h4>
            </div>
            <p class="position-text">${u.text}</p>
            ${u.details ? `<p class="position-details">${u.details}</p>` : ""}
            ${u.example ? `<pre class="position-example">${u.example}</pre>` : ""}
          </div>
        `).join("")}
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📊 OSASCOMP — Adjective Order</h3>
        <p class="theory-description">When multiple adjectives modify the same noun, they must follow this order:</p>
        <table class="theory-table osascomp-table">
          <thead><tr><th>#</th><th>Category</th><th>Description</th><th>Examples</th></tr></thead>
          <tbody>
            ${t.osascomp.categories.map(c => `
              <tr class="osascomp-row osascomp-${c.letter.toLowerCase()}">
                <td class="osascomp-letter"><span class="theory-badge badge-osascomp">${c.letter}</span></td>
                <td><strong>${esc(c.name)}</strong></td>
                <td>${esc(c.description)}</td>
                <td><em>${esc(c.examples.replace(/<\/?strong>/g, ''))}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure Summary</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Attributive</span><code class="structure-formula">${esc(t.structure.attributive)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Predicative</span><code class="structure-formula">${esc(t.structure.predicative)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Postpositive</span><code class="structure-formula">${esc(t.structure.postpositive)}</code></div>
          <div class="structure-card question"><span class="structure-label">Adjective Order (OSASCOMP)</span><code class="structure-formula">${esc(t.structure.order)}</code></div>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🚫 ${esc(t.attributiveOnly.title)}</h3>
        <div class="word-list-card">
          <div class="word-tags">
            ${t.attributiveOnly.list.map(w => `<span class="word-tag tag-attributive">${esc(w)}</span>`).join("")}
          </div>
          <p class="word-list-note">${esc(t.attributiveOnly.note)}</p>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🚫 ${esc(t.predicativeOnly.title)}</h3>
        <div class="word-list-card">
          <div class="word-tags">
            ${t.predicativeOnly.list.map(w => `<span class="word-tag tag-predicative">${esc(w)}</span>`).join("")}
          </div>
          <p class="word-list-note">${esc(t.predicativeOnly.note)}</p>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔄 Adjectives That Change Meaning by Position</h3>
        <table class="theory-table">
          <thead><tr><th>Adjective</th><th>Attributive Meaning</th><th>Postpositive / Predicative Meaning</th></tr></thead>
          <tbody>
            ${t.meaningChange.items.map(m => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(m.adjective)}</span></td>
                <td>${esc(m.attributive)}</td>
                <td>${esc(m.postpositive || m.predicative)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      ${t.edVsIng ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🎭 -ed vs -ing (Participial Adjectives)</h3>
        <p class="theory-description">${t.edVsIng.text}</p>
        <table class="theory-table">
          <thead><tr><th>-ed (how you feel)</th><th>-ing (what causes it)</th><th>Example (-ed)</th><th>Example (-ing)</th></tr></thead>
          <tbody>
            ${t.edVsIng.pairs.map(p => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(p.ed)}</span></td>
                <td><span class="theory-badge badge-time">${esc(p.ing)}</span></td>
                <td><em>${esc(p.edEx)}</em></td>
                <td><em>${esc(p.ingEx)}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ` : ""}

      ${t.cumulativeCoordinate ? `
      <section class="theory-section">
        <h3 class="theory-section-title">📐 Cumulative vs Coordinate Adjectives (Comma Usage)</h3>
        <p class="theory-description">${esc(t.cumulativeCoordinate.text)}</p>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Coordinate (comma + 'and')</span><code class="structure-formula">${esc(t.cumulativeCoordinate.examples.coordinate)}</code></div>
          <div class="structure-card question"><span class="structure-label">Cumulative (no comma)</span><code class="structure-formula">${esc(t.cumulativeCoordinate.examples.cumulative)}</code></div>
        </div>
      </section>
      ` : ""}

      ${t.substantiveAdjectives ? `
      <section class="theory-section">
        <h3 class="theory-section-title">👥 Substantive Adjectives (The + Adjective)</h3>
        <p class="theory-description">${esc(t.substantiveAdjectives.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Expression</th><th>Meaning</th><th>Example</th></tr></thead>
          <tbody>
            ${t.substantiveAdjectives.list.map(s => `
              <tr>
                <td><span class="theory-badge badge-osascomp">${esc(s.phrase)}</span></td>
                <td>${esc(s.meaning)}</td>
                <td><em>${esc(s.example)}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ` : ""}

      ${t.examples20 ? `
      <section class="theory-section">
        <h3 class="theory-section-title">📚 20 Comprehensive Examples</h3>
        <p class="theory-description">Study these 20 examples to see how adjective positions work in real sentences. Each example includes the position type and a brief explanation.</p>
        <table class="theory-table">
          <thead><tr><th>#</th><th>Example</th><th>Position</th><th>Explanation</th></tr></thead>
          <tbody>
            ${t.examples20.map((ex, i) => `
              <tr>
                <td style="text-align:center;font-weight:700;color:var(--color-primary);">${i + 1}</td>
                <td>${ex.text.replace(/<\/?strong>/g, '')}</td>
                <td><span class="theory-badge ${ex.position.includes('attributive') ? 'badge-left' : ex.position.includes('predicative') ? 'badge-right' : 'badge-movement'}">${esc(ex.position)}</span></td>
                <td style="font-size:12.5px;">${esc(ex.note)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
      ` : ""}

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
        <p class="theory-notes">${t.notes}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="adjQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="adjQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="adjQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>
    </div>`;
}

function renderAdverbPositionTheory() {
  const t = ADVERB_POSITIONS;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = ADVERB_POSITION_EXERCISES;
  return `
    <div class="theory-card">
      <h2 class="theory-title">Adverb Positions</h2>
      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Adverb Positions?</h3>
        <p class="theory-description">${esc(t.description)}</p>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🎯 Types of Positions</h3>
        <div class="usage-grid">
          ${t.usage.map(u => `
            <div class="usage-card">
              <span class="usage-card-title">${esc(u.title)}</span>
              <p class="usage-card-text">${u.text}</p>
              ${u.example ? `<code class="usage-card-example">${u.example}</code>` : ""}
            </div>
          `).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure Summary</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Front Position</span><code class="structure-formula">${esc(t.structure.front)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Mid Position</span><code class="structure-formula">${esc(t.structure.mid)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">End Position</span><code class="structure-formula">${esc(t.structure.end)}</code></div>
          <div class="structure-card question"><span class="structure-label">Adverb Order</span><code class="structure-formula">${esc(t.structure.order)}</code></div>
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${t.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">${esc(m.mistake)}</p>
              <p class="mistake-correct">${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${t.notes}</p>
      </section>
      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="advQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-ghost quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="advQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="advQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>
    </div>`;
}

function renderConjunctionTheory() {
  const c = CONJUNCTIONS_DATA;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = CONJUNCTION_EXERCISES;
  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">🔗</span> Conjunctions</h2>
        <p class="theory-subtitle">Coordinating, Subordinating, Correlative & Conjunctive Adverbs — the glue that connects words, phrases, and clauses.</p>
      </div>

      <!-- WHAT ARE CONJUNCTIONS -->
      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Conjunctions?</h3>
        <p class="theory-description">${esc(c.description)}</p>
      </section>

      <!-- ═══════════════════════════════════════════ -->
      <!-- COORDINATING CONJUNCTIONS (FANBOYS) -->
      <!-- ═══════════════════════════════════════════ -->
      <section class="theory-section">
        <h3 class="theory-section-title">🔗 Coordinating Conjunctions (FANBOYS)</h3>
        <p class="theory-description">${esc(c.coordinating.text)}</p>

        <!-- FANBOYS Table -->
        <table class="theory-table">
          <thead><tr><th>Conjunction</th><th>Meaning</th><th>Example</th></tr></thead>
          <tbody>
            ${c.coordinating.items.map(co => `
              <tr>
                <td><span class="theory-badge badge-time">${esc(co.word)}</span></td>
                <td>${esc(co.meaning)}</td>
                <td><em>${co.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <!-- Detailed breakdown of each FANBOYS -->
        <div style="margin-top:20px;">
          <h4 style="color:var(--color-accent);margin-bottom:12px;font-size:15px;">📋 Detailed Breakdown</h4>
          ${c.coordinating.items.map(co => `
            <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:16px;margin-bottom:12px;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <span class="theory-badge badge-time" style="font-size:15px;font-weight:700;">${esc(co.word)}</span>
                <span style="color:var(--color-text-secondary);font-size:13px;">— ${esc(co.meaning)}</span>
              </div>
              <p style="margin:8px 0;font-size:14px;color:var(--color-text-secondary);">${esc(co.details || "")}</p>
              <div style="margin:8px 0;">
                ${(co.moreExamples || []).map(ex => `<p style="font-size:13px;margin:4px 0;padding-left:12px;border-left:2px solid var(--color-accent);">• <em>${ex}</em></p>`).join("")}
              </div>
              ${co.note ? `<p style="font-size:12px;color:var(--color-text-muted);margin-top:8px;font-style:italic;">💡 ${esc(co.note)}</p>` : ""}
            </div>
          `).join("")}
        </div>

        <!-- Rules -->
        ${c.coordinating.rules ? `
        <div style="margin-top:16px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:16px;">
          <h4 style="color:var(--color-accent);margin-bottom:8px;font-size:14px;">📏 Rules for Coordinating Conjunctions</h4>
          <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--color-text-secondary);">
            ${c.coordinating.rules.map(r => `<li style="margin:6px 0;">${r}</li>`).join("")}
          </ul>
        </div>
        ` : ""}
      </section>

      <!-- ═══════════════════════════════════════════ -->
      <!-- SUBORDINATING CONJUNCTIONS -->
      <!-- ═══════════════════════════════════════════ -->
      <section class="theory-section">
        <h3 class="theory-section-title">🔀 Subordinating Conjunctions</h3>
        <p class="theory-description">${esc(c.subordinating.text)}</p>

        <!-- Position Rules -->
        ${c.subordinating.positionRules ? `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:16px;margin-bottom:16px;">
          <h4 style="color:var(--color-accent);margin-bottom:8px;font-size:14px;">📐 Comma Rules (Position Matters!)</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:12px;">
              <p style="font-size:13px;font-weight:600;color:#22c55e;margin-bottom:4px;">✅ Clause First</p>
              <p style="font-size:12px;color:var(--color-text-secondary);">${c.subordinating.positionRules.before}</p>
            </div>
            <div style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:8px;padding:12px;">
              <p style="font-size:13px;font-weight:600;color:#3b82f6;margin-bottom:4px;">✅ Clause Last</p>
              <p style="font-size:12px;color:var(--color-text-secondary);">${c.subordinating.positionRules.after}</p>
            </div>
          </div>
          <p style="font-size:12px;color:var(--color-text-muted);margin-top:8px;font-style:italic;">💡 ${c.subordinating.positionRules.note}</p>
        </div>
        ` : ""}

        <!-- Categories - detailed cards -->
        ${c.subordinating.categories.map(cat => `
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span class="theory-badge badge-movement">${esc(cat.name)}</span>
              <span style="font-size:12px;color:var(--color-text-muted);">Conjunctions: ${esc(cat.conjunctions)}</span>
            </div>
            ${cat.description ? `<p style="font-size:13px;color:var(--color-text-secondary);margin:8px 0;">${esc(cat.description)}</p>` : ""}
            <div style="margin:8px 0;">
              ${(cat.examples || [cat.example]).map(ex => `<p style="font-size:13px;margin:4px 0;padding-left:12px;border-left:2px solid var(--color-accent);">• <em>${ex}</em></p>`).join("")}
            </div>
            ${cat.tip ? `<p style="font-size:12px;color:var(--color-text-muted);margin-top:8px;font-style:italic;">💡 ${esc(cat.tip)}</p>` : ""}
          </div>
        `).join("")}
      </section>

      <!-- ═══════════════════════════════════════════ -->
      <!-- CORRELATIVE CONJUNCTIONS -->
      <!-- ═══════════════════════════════════════════ -->
      <section class="theory-section">
        <h3 class="theory-section-title">🤝 Correlative Conjunctions (Paired)</h3>
        <p class="theory-description">${esc(c.correlative.text)}</p>

        ${c.correlative.pairs.map(cr => `
          <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span class="theory-badge badge-change" style="font-size:14px;">${esc(cr.pair)}</span>
              <span style="font-size:13px;color:var(--color-text-secondary);">${esc(cr.meaning)}</span>
            </div>
            <div style="margin:8px 0;">
              ${(cr.examples || [cr.example]).map(ex => `<p style="font-size:13px;margin:4px 0;padding-left:12px;border-left:2px solid var(--color-accent);">• <em>${ex}</em></p>`).join("")}
            </div>
            ${cr.parallelStructure ? `<p style="font-size:12px;margin:8px 0;color:var(--color-text-muted);">📐 <strong>Structure:</strong> ${esc(cr.parallelStructure)}</p>` : ""}
            ${cr.note ? `<p style="font-size:12px;color:var(--color-text-muted);font-style:italic;">💡 ${esc(cr.note)}</p>` : ""}
          </div>
        `).join("")}

        <!-- Correlative Rules -->
        ${c.correlative.rules ? `
        <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:16px;margin-top:8px;">
          <h4 style="color:var(--color-accent);margin-bottom:8px;font-size:14px;">📏 Rules for Correlative Conjunctions</h4>
          <ul style="margin:0;padding-left:20px;font-size:13px;color:var(--color-text-secondary);">
            ${c.correlative.rules.map(r => `<li style="margin:6px 0;">${r}</li>`).join("")}
          </ul>
        </div>
        ` : ""}
      </section>

      <!-- ═══════════════════════════════════════════ -->
      <!-- CONJUNCTIVE ADVERBS -->
      <!-- ═══════════════════════════════════════════ -->
      ${c.conjunctiveAdverbs ? `
      <section class="theory-section">
        <h3 class="theory-section-title">🔗 Conjunctive Adverbs (However, Therefore, Moreover...)</h3>
        <p class="theory-description">${esc(c.conjunctiveAdverbs.text)}</p>

        <table class="theory-table">
          <thead><tr><th>Sentence</th><th>Relationship</th></tr></thead>
          <tbody>
            ${c.conjunctiveAdverbs.examples.map(ex => `
              <tr>
                <td><em>${ex.sentence}</em></td>
                <td><span class="theory-badge badge-movement">${esc(ex.meaning)}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        ${c.conjunctiveAdverbs.commonList ? `
        <div style="margin-top:12px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:16px;">
          <h4 style="color:var(--color-accent);margin-bottom:8px;font-size:14px;">📋 Common Conjunctive Adverbs</h4>
          <p style="font-size:13px;color:var(--color-text-secondary);">${esc(c.conjunctiveAdverbs.commonList)}</p>
        </div>
        ` : ""}

        <div style="margin-top:12px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:10px;padding:16px;">
          <h4 style="color:#ef4444;margin-bottom:8px;font-size:14px;">⚠️ Punctuation Rule</h4>
          <p style="font-size:13px;color:var(--color-text-secondary);">${c.conjunctiveAdverbs.punctuation}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin-top:8px;font-style:italic;">💡 ${esc(c.conjunctiveAdverbs.note)}</p>
        </div>
      </section>
      ` : ""}

      <!-- ═══════════════════════════════════════════ -->
      <!-- STRUCTURE SUMMARY -->
      <!-- ═══════════════════════════════════════════ -->
      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure & Punctuation Summary</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Coordinating</span><code class="structure-formula">${esc(c.structure.coordinating)}</code></div>
          <div class="structure-card question"><span class="structure-label">Subordinating (clause first)</span><code class="structure-formula">${esc(c.structure.subordinating_before)}</code></div>
          <div class="structure-card question"><span class="structure-label">Subordinating (clause last)</span><code class="structure-formula">${esc(c.structure.subordinating_after)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Correlative</span><code class="structure-formula">${esc(c.structure.correlative)}</code></div>
          ${c.structure.conjunctiveAdverb ? `<div class="structure-card question"><span class="structure-label">Conjunctive Adverb</span><code class="structure-formula">${esc(c.structure.conjunctiveAdverb)}</code></div>` : ""}
        </div>

        ${c.structure.punctuationSummary ? `
        <div style="margin-top:16px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:10px;padding:16px;">
          <h4 style="color:var(--color-accent);margin-bottom:8px;font-size:14px;">📐 Punctuation Quick Reference</h4>
          <table class="theory-table" style="margin:0;">
            <thead><tr><th>Type</th><th>Rule</th><th>Example</th></tr></thead>
            <tbody>
              ${c.structure.punctuationSummary.map(ps => `
                <tr>
                  <td><span class="theory-badge badge-time" style="font-size:11px;">${esc(ps.type)}</span></td>
                  <td style="font-size:12px;">${esc(ps.rule)}</td>
                  <td style="font-size:12px;"><em>${ps.example}</em></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        ` : ""}
      </section>

      <!-- ═══════════════════════════════════════════ -->
      <!-- COMMON MISTAKES -->
      <!-- ═══════════════════════════════════════════ -->
      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${c.commonMistakes.map(m => `
            <div class="mistake-card">
              <p class="mistake-incorrect">✗ ${esc(m.mistake)}</p>
              <p class="mistake-correct">✓ ${esc(m.fix)}</p>
              <p class="mistake-explain">${m.explanation}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <!-- ═══════════════════════════════════════════ -->
      <!-- 20 EXAMPLE SENTENCES -->
      <!-- ═══════════════════════════════════════════ -->
      ${c.examples20 ? `
      <section class="theory-section">
        <h3 class="theory-section-title">📝 20 Example Sentences</h3>
        <div style="display:grid;gap:8px;">
          ${c.examples20.map((ex, i) => `
            <div style="background:var(--color-surface);border:1px solid var(--color-border);border-radius:8px;padding:12px;display:flex;gap:12px;align-items:flex-start;">
              <span style="background:var(--color-accent);color:#fff;border-radius:50%;min-width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;">${i + 1}</span>
              <div style="flex:1;">
                <p style="font-size:13px;margin:0 0 4px 0;"><em>${ex.text}</em></p>
                <p style="font-size:11px;color:var(--color-text-muted);margin:0;">${esc(ex.note)} <span class="theory-badge badge-${ex.type === 'coordinating' ? 'time' : ex.type === 'subordinating' ? 'movement' : 'change'}" style="font-size:10px;padding:2px 6px;">${ex.type}</span></p>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
      ` : ""}

      <!-- ═══════════════════════════════════════════ -->
      <!-- IMPORTANT NOTES -->
      <!-- ═══════════════════════════════════════════ -->
      <section class="theory-section">
        <h3 class="theory-section-title">📌 Important Notes</h3>
        <p class="theory-notes">${c.notes}</p>
      </section>

      <!-- ═══════════════════════════════════════════ -->
      <!-- PRACTICE QUIZ -->
      <!-- ═══════════════════════════════════════════ -->
      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="conjQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="conjQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="conjQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>
    </div>`;
}

function renderPhrasalVerbTheory() {
  const p = PHRASAL_VERBS_DATA;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = PHRASAL_VERB_EXERCISES;
  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">💬</span> Phrasal Verbs</h2>
        <p class="theory-subtitle">Verb + Particle combinations that native speakers use every day — separable, inseparable, intransitive & three-word.</p>
      </div>

      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Phrasal Verbs?</h3>
        <p class="theory-description">${esc(p.description)}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Separable Phrasal Verbs</h3>
        <p><strong>${esc(p.separable.title)}:</strong> ${esc(p.separable.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Phrasal Verb</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${p.separable.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(item.phrasal)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔒 Inseparable Phrasal Verbs</h3>
        <p><strong>${esc(p.inseparable.title)}:</strong> ${esc(p.inseparable.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Phrasal Verb</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${p.inseparable.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-place">${esc(item.phrasal)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🚫 Intransitive Phrasal Verbs</h3>
        <p><strong>${esc(p.intransitive.title)}:</strong> ${esc(p.intransitive.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Phrasal Verb</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${p.intransitive.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-time">${esc(item.phrasal)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔗 Three-Word Phrasal Verbs</h3>
        <p><strong>${esc(p.threeWord.title)}:</strong> ${esc(p.threeWord.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Phrasal Verb</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${p.threeWord.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-alt">${esc(item.phrasal)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Structure Summary</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Separable</span><code class="structure-formula">${esc(p.structure.separable)}</code></div>
          <div class="structure-card negative"><span class="structure-label">Inseparable</span><code class="structure-formula">${esc(p.structure.inseparable)}</code></div>
          <div class="structure-card question"><span class="structure-label">Intransitive</span><code class="structure-formula">${esc(p.structure.intransitive)}</code></div>
          <div class="structure-card affirmative"><span class="structure-label">Three-Word</span><code class="structure-formula">${esc(p.structure.threeWord)}</code></div>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📝 20 Key Examples</h3>
        <table class="theory-table">
          <thead><tr><th>#</th><th>Example</th><th>Type</th><th>Note</th></tr></thead>
          <tbody>
            ${p.examples20.map((ex, i) => `
              <tr>
                <td>${i + 1}</td>
                <td><em>${ex.text}</em></td>
                <td><span class="theory-badge ${ex.type === 'separable' ? 'badge-change' : ex.type === 'inseparable' ? 'badge-place' : ex.type === 'intransitive' ? 'badge-time' : 'badge-alt'}">${esc(ex.type)}</span></td>
                <td>${esc(ex.note)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${p.commonMistakes.map(m => `
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
        <p class="theory-notes">${p.notes}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="pvQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="pvQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="pvQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>

      <section class="theory-section reference-section">
        <h3 class="theory-section-title">📚 Complete Reference (500 Phrasal Verbs)</h3>
        <input type="text" class="ref-search" id="pvRefSearch" placeholder="🔍 Search phrasal verbs..." oninput="filterRefTable('pvRefTable')">
        <div class="ref-table-wrap">
          <table class="theory-table" id="pvRefTable">
            <thead><tr><th>#</th><th>Phrasal Verb</th><th>Meaning</th><th>Example</th></tr></thead>
            <tbody>
              ${(typeof window.PHRASAL_VERBS_1000 !== 'undefined' ? window.PHRASAL_VERBS_1000 : typeof window.PHRASAL_VERBS_500 !== 'undefined' ? window.PHRASAL_VERBS_500 : []).map((item, i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td><span class="theory-badge badge-change">${esc(item.phrasal)}</span></td>
                  <td>${esc(item.meaning)}</td>
                  <td><em>${item.example}</em></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>`;
}

function renderIdiomaticExpressionTheory() {
  const i = IDIOMATIC_EXPRESSIONS_DATA;
  const esc = s => { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  const exercises = IDIOMATIC_EXPRESSION_EXERCISES;
  return `
    <div class="theory-card">
      <div class="theory-hero">
        <h2 class="theory-title"><span class="theory-icon">🎭</span> Idiomatic Expressions</h2>
        <p class="theory-subtitle">Fixed phrases whose meaning isn't literal — essential for natural, fluent English communication.</p>
      </div>

      <section class="theory-section">
        <h3 class="theory-section-title">📖 What Are Idiomatic Expressions?</h3>
        <p class="theory-description">${esc(i.description)}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⏰ Time Idioms</h3>
        <p><strong>${esc(i.time.title)}:</strong> ${esc(i.time.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.time.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-time">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">😊 Emotions & Feelings</h3>
        <p><strong>${esc(i.emotions.title)}:</strong> ${esc(i.emotions.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.emotions.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-alt">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">💼 Business & Work</h3>
        <p><strong>${esc(i.business.title)}:</strong> ${esc(i.business.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.business.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-change">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🧍 Body Part Idioms</h3>
        <p><strong>${esc(i.bodyParts.title)}:</strong> ${esc(i.bodyParts.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.bodyParts.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-place">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🗣️ Everyday Idioms</h3>
        <p><strong>${esc(i.common.title)}:</strong> ${esc(i.common.text)}</p>
        <table class="theory-table">
          <thead><tr><th>Idiom</th><th>Meaning (Spanish)</th><th>Example</th></tr></thead>
          <tbody>
            ${i.common.items.map(item => `
              <tr>
                <td><span class="theory-badge badge-left">${esc(item.idiom)}</span></td>
                <td>${esc(item.meaning)}</td>
                <td><em>${item.example}</em></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">🔧 Usage Guide</h3>
        <div class="structure-grid">
          <div class="structure-card affirmative"><span class="structure-label">Usage</span><code class="structure-formula">${esc(i.structure.usage)}</code></div>
          <div class="structure-card question"><span class="structure-label">Position</span><code class="structure-formula">${esc(i.structure.position)}</code></div>
          <div class="structure-card negative"><span class="structure-label">Caution</span><code class="structure-formula">${esc(i.structure.caution)}</code></div>
        </div>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">📝 20 Key Examples</h3>
        <table class="theory-table">
          <thead><tr><th>#</th><th>Example</th><th>Category</th><th>Note</th></tr></thead>
          <tbody>
            ${i.examples20.map((ex, i) => `
              <tr>
                <td>${i + 1}</td>
                <td><em>${ex.text}</em></td>
                <td><span class="theory-badge ${ex.type === 'time' ? 'badge-time' : ex.type === 'emotions' ? 'badge-alt' : ex.type === 'business' ? 'badge-change' : ex.type === 'bodyParts' ? 'badge-place' : 'badge-left'}">${esc(ex.type)}</span></td>
                <td>${esc(ex.note)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">⚠️ Common Mistakes</h3>
        <div class="mistakes-grid">
          ${i.commonMistakes.map(m => `
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
        <p class="theory-notes">${i.notes}</p>
      </section>

      <section class="theory-section">
        <h3 class="theory-section-title">✏️ Practice Quiz</h3>
        <div class="quiz-container" id="ieQuizContainer">
          ${exercises.map((ex, i) => `
            <div class="quiz-question" data-qid="${i}">
              <p class="quiz-question-text">${i + 1}. ${esc(ex.question)}</p>
              <div class="quiz-options">
                ${ex.options.map((opt, j) => `
                  <button class="btn btn-game quiz-option" data-qid="${i}" data-opt="${j}">${esc(opt)}</button>
                `).join("")}
              </div>
              <p class="quiz-feedback" id="ieQuizFeedback${i}"></p>
            </div>
          `).join("")}
          <div class="quiz-score">Score: <span id="ieQuizScore">0</span> / ${exercises.length}</div>
        </div>
      </section>

      <section class="theory-section reference-section">
        <h3 class="theory-section-title">📚 Complete Reference (500 Idiomatic Expressions)</h3>
        <input type="text" class="ref-search" id="ieRefSearch" placeholder="🔍 Search idiomatic expressions..." oninput="filterRefTable('ieRefTable')">
        <div class="ref-table-wrap">
          <table class="theory-table" id="ieRefTable">
            <thead><tr><th>#</th><th>Idiom</th><th>Meaning</th><th>Example</th></tr></thead>
            <tbody>
              ${(typeof window.IDIOMS_500 !== 'undefined' ? window.IDIOMS_500 : []).map((item, i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td><span class="theory-badge badge-time">${esc(item.idiom)}</span></td>
                  <td>${esc(item.meaning)}</td>
                  <td><em>${item.example}</em></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>`;
}

// Reference table filter function
window.filterRefTable = function(tableId) {
  const input = document.getElementById(tableId.replace('Table', 'Search'));
  const table = document.getElementById(tableId);
  if (!input || !table) return;
  const filter = input.value.toLowerCase();
  const rows = table.querySelectorAll("tbody tr");
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
};

// Expose to window for main.js dynamic loading
window.__renderConjunctionTheory = renderConjunctionTheory;
window.__renderAdjectivePositionTheory = renderAdjectivePositionTheory;
window.__renderAdverbPositionTheory = renderAdverbPositionTheory;

export { renderTheoryHTML, renderClauseFullLesson, renderClauseTheory, renderAdjectivePositionTheory, renderAdverbPositionTheory, renderConjunctionTheory, renderPhrasalVerbTheory, renderIdiomaticExpressionTheory };
