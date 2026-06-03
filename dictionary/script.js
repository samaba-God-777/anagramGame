/* ── Dictionary: English ↔ Spanish ── */

const DICT_STORAGE_KEY = "dict_history";
const DICT_HISTORY_MAX = 50;
const RESULTS_PER_PAGE = 20;
const DEBOUNCE_MS = 200;

let dictionary = null;
let dictState = {
  sourceLang: "en",
  targetLang: "es",
  currentQuery: "",
  page: 1,
  results: [],
  history: [],
};

/* ── DOM refs ── */
const $dict = (id) => document.getElementById(id);
const dictInput = $dict("dictInput");
const dictClear = $dict("dictClear");
const dictSuggestions = $dict("dictSuggestions");
const dictResults = $dict("dictResults");
const dictEmpty = $dict("dictEmpty");
const dictNoResults = $dict("dictNoResults");
const dictLoading = $dict("dictLoading");
const dictError = $dict("dictError");
const dictErrorMsg = $dict("dictErrorMsg");
const resultsList = $dict("resultsList");
const resultCount = $dict("resultCount");
const sourceInfo = $dict("sourceInfo");
const dictPagination = $dict("dictPagination");
const swapBtn = $dict("swapBtn");
const sourceLang = $dict("sourceLang");
const targetLang = $dict("targetLang");
const historyList = $dict("historyList");
const clearHistory = $dict("clearHistory");
const dictLoadStatus = $dict("dictLoadStatus");
const dictWordCount = $dict("dictWordCount");

/* ── Language detection ── */
const SPANISH_RE = /^[a-záéíóúüñ]+$/i;

function detectLang(word) {
  if (!word) return dictState.sourceLang;
  const cleaned = word.trim().toLowerCase();
  if (!cleaned) return dictState.sourceLang;
  if (/[áéíóúüñ]/i.test(cleaned)) return "es";
  const esWords = ["el","la","los","las","un","una","y","que","de","en","por","con","no","es","se","su","lo","como","más","pero","sus","le","ya","este","entre","desde","todo","eso","esta","era","son","dos","también","había","muy","sin","sobre","tener","tiene","cada","ser","hay","del","para","al","han","ella","ellas","ellos","nos","les","ese","esa","como","qué","porque","está","están","fue","sido","bien","dice","nuestro","nuestra","vuestro","vuestra","poco","mucho","mucha","muchos","muchas","gran","grande","pequeño","bueno","malo","nuevo","viejo"];
  if (esWords.includes(cleaned)) return "es";
  const enWords = ["the","a","an","is","are","was","were","be","been","have","has","had","do","does","did","will","would","could","should","may","might","shall","can","not","this","that","these","those","there","here","where","what","which","who","whom","why","how","all","each","every","some","any","no","none","both","few","many","much","more","most","other","such","only","own","same","so","than","too","very","just","also","well","now","then","here","there","about","above","after","again","against","below","between","through","during","before","behind","below","beneath","beside","between","beyond","inside","into","outside","over","under","upon","within","without"];
  if (enWords.includes(cleaned)) return "en";
  return dictState.sourceLang;
}

function updateLangBadges() {
  sourceLang.textContent = dictState.sourceLang.toUpperCase();
  targetLang.textContent = dictState.targetLang.toUpperCase();
}

function swapLangs() {
  [dictState.sourceLang, dictState.targetLang] = [dictState.targetLang, dictState.sourceLang];
  updateLangBadges();
  const val = dictInput.value.trim();
  if (val) performSearch(val);
}

/* ── Load dictionary ── */
async function loadDictionary() {
  dictLoading.hidden = false;
  dictEmpty.hidden = true;
  dictError.hidden = true;
  dictResults.hidden = true;
  try {
    const resp = await fetch("dictionary.json");
    if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${resp.statusText}`);
    const data = await resp.json();
    dictionary = data;
    const count = Object.keys(data).length;
    dictLoadStatus.textContent = `Dictionary loaded: ${count.toLocaleString()} words`;
    if (dictWordCount) {
      dictWordCount.querySelector("span").textContent = count.toLocaleString();
    }
    dictLoading.hidden = true;
    dictEmpty.hidden = false;
    return data;
  } catch (err) {
    dictLoading.hidden = true;
    dictError.hidden = false;
    dictErrorMsg.textContent = err.message || "Could not load dictionary.json";
    dictLoadStatus.textContent = "Dictionary failed to load";
    return null;
  }
}

/* ── Search ── */
function performSearch(query) {
  if (!dictionary) return;
  dictState.currentQuery = query.trim();
  dictState.page = 1;

  if (!dictState.currentQuery) {
    dictResults.hidden = true;
    dictNoResults.hidden = true;
    dictEmpty.hidden = false;
    dictSuggestions.hidden = true;
    return;
  }

  const q = dictState.currentQuery.toLowerCase();
  const src = dictState.sourceLang;
  const tgt = dictState.targetLang;

  let results = [];
  const isEnSearch = src === "en";

  for (const [word, trans] of Object.entries(dictionary)) {
    if (isEnSearch) {
      if (word.toLowerCase().includes(q)) {
        results.push({ word, translation: trans, source: "en", target: "es" });
      }
    } else {
      if (trans.toLowerCase().includes(q)) {
        results.push({ word, translation: trans, source: "es", target: "en", searchMatched: trans });
      }
    }
  }

  dictState.results = results;
  dictEmpty.hidden = true;
  dictNoResults.hidden = results.length > 0;
  dictSuggestions.hidden = true;

  if (results.length > 0) {
    renderResults();
    addToHistory(q, src);
  } else {
    dictResults.hidden = true;
  }
}

/* ── Autocomplete suggestions ── */
function getSuggestions(query) {
  if (!dictionary || !query.trim()) return [];
  const q = query.trim().toLowerCase();
  const src = dictState.sourceLang;
  const isEnSearch = src === "en";
  const results = [];

  for (const [word, trans] of Object.entries(dictionary)) {
    if (isEnSearch) {
      if (word.toLowerCase().startsWith(q)) {
        results.push({ word, translation: trans, lang: "en" });
        if (results.length >= 8) break;
      }
    } else {
      if (trans.toLowerCase().startsWith(q)) {
        results.push({ word: trans, translation: word, lang: "es" });
        if (results.length >= 8) break;
      }
    }
  }
  return results;
}

function renderSuggestions(suggestions) {
  if (!suggestions.length) {
    dictSuggestions.hidden = true;
    return;
  }
  dictSuggestions.hidden = false;
  dictSuggestions.innerHTML = suggestions.map((s, i) =>
    `<div class="dict-suggestion-item" data-index="${i}">
      <div>
        <div class="dict-suggestion-word">${escapeHtml(s.word)}</div>
        <div class="dict-suggestion-trans">${escapeHtml(s.translation)}</div>
      </div>
      <span class="dict-suggestion-lang">${s.lang.toUpperCase()}</span>
    </div>`
  ).join("");

  dictSuggestions.querySelectorAll(".dict-suggestion-item").forEach((el) => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.dataset.index);
      const s = suggestions[idx];
      dictInput.value = s.word;
      dictSuggestions.hidden = true;
      performSearch(s.word);
    });
  });
}

/* ── Render results ── */
function renderResults() {
  const total = dictState.results.length;
  const totalPages = Math.ceil(total / RESULTS_PER_PAGE);
  const page = Math.min(dictState.page, totalPages) || 1;
  dictState.page = page;
  const start = (page - 1) * RESULTS_PER_PAGE;
  const end = start + RESULTS_PER_PAGE;
  const pageResults = dictState.results.slice(start, end);

  resultCount.textContent = `${total} result${total !== 1 ? "s" : ""}`;
  sourceInfo.textContent = `${dictState.sourceLang.toUpperCase()} → ${dictState.targetLang.toUpperCase()}`;

  if (pageResults.length === 0) {
    dictResults.hidden = true;
    dictNoResults.hidden = false;
    return;
  }

  dictResults.hidden = false;
  resultsList.innerHTML = pageResults.map(r =>
    `<div class="dict-result-item">
      <div class="dict-result-detail">
        <span class="dict-result-word">${escapeHtml(r.word)}</span>
        <div class="dict-result-meta">
          <span class="dict-result-dir">${r.source.toUpperCase()} → ${r.target.toUpperCase()}</span>
        </div>
      </div>
      <span class="dict-result-trans">${escapeHtml(r.translation)}</span>
    </div>`
  ).join("");

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    dictPagination.innerHTML = "";
    return;
  }

  const page = dictState.page;
  let html = "";

  html += `<button class="dict-page-btn" data-page="${page - 1}" ${page <= 1 ? "disabled" : ""}>‹ Prev</button>`;

  const range = 2;
  const startPage = Math.max(1, page - range);
  const endPage = Math.min(totalPages, page + range);

  if (startPage > 1) {
    html += `<button class="dict-page-btn" data-page="1">1</button>`;
    if (startPage > 2) html += `<button class="dict-page-btn" disabled>…</button>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="dict-page-btn${i === page ? " active" : ""}" data-page="${i}">${i}</button>`;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) html += `<button class="dict-page-btn" disabled>…</button>`;
    html += `<button class="dict-page-btn" data-page="${totalPages}">${totalPages}</button>`;
  }

  html += `<button class="dict-page-btn" data-page="${page + 1}" ${page >= totalPages ? "disabled" : ""}>Next ›</button>`;

  dictPagination.innerHTML = html;

  dictPagination.querySelectorAll(".dict-page-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = parseInt(btn.dataset.page);
      if (p && p !== dictState.page) {
        dictState.page = p;
        renderResults();
        dictResults.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ── History ── */
function loadHistory() {
  try {
    const raw = localStorage.getItem(DICT_STORAGE_KEY);
    dictState.history = raw ? JSON.parse(raw) : [];
  } catch {
    dictState.history = [];
  }
}

function saveHistory() {
  try {
    localStorage.setItem(DICT_STORAGE_KEY, JSON.stringify(dictState.history));
  } catch {}
}

function addToHistory(query, lang) {
  dictState.history = dictState.history.filter(h => h.query !== query);
  dictState.history.unshift({ query, lang, time: Date.now() });
  if (dictState.history.length > DICT_HISTORY_MAX) {
    dictState.history = dictState.history.slice(0, DICT_HISTORY_MAX);
  }
  saveHistory();
  renderHistory();
}

function removeFromHistory(query) {
  dictState.history = dictState.history.filter(h => h.query !== query);
  saveHistory();
  renderHistory();
}

function clearAllHistory() {
  dictState.history = [];
  saveHistory();
  renderHistory();
}

function renderHistory() {
  if (!dictState.history.length) {
    historyList.innerHTML = '<p class="dict-panel-empty">No searches yet</p>';
    return;
  }
  historyList.innerHTML = dictState.history.map(h =>
    `<div class="dict-history-item" data-query="${escapeHtml(h.query)}">
      <span class="dict-history-word">${escapeHtml(h.query)}</span>
      <span class="dict-history-lang">${h.lang.toUpperCase()}</span>
      <button class="dict-history-del" title="Remove">✕</button>
    </div>`
  ).join("");

  historyList.querySelectorAll(".dict-history-item").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("dict-history-del")) {
        removeFromHistory(el.dataset.query);
        return;
      }
      dictInput.value = el.dataset.query;
      dictSuggestions.hidden = true;
      performSearch(el.dataset.query);
      dictInput.focus();
    });
  });
}

/* ── Utilities ── */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ── Debounce ── */
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

/* ── Init ── */
async function initDictionary() {
  loadHistory();
  renderHistory();

  const data = await loadDictionary();
  if (!data) return;

  /* Detect language on input */
  dictInput.addEventListener("input", debounce(() => {
    const val = dictInput.value.trim();
    dictClear.hidden = !val;

    if (!val) {
      dictResults.hidden = true;
      dictNoResults.hidden = true;
      dictEmpty.hidden = false;
      dictSuggestions.hidden = true;
      return;
    }

    const detected = detectLang(val);
    if (detected !== dictState.sourceLang) {
      dictState.sourceLang = detected;
      dictState.targetLang = detected === "en" ? "es" : "en";
      updateLangBadges();
    }

    /* Show suggestions */
    const suggestions = getSuggestions(val);
    renderSuggestions(suggestions);

    /* Search (full results) */
    performSearch(val);
  }, DEBOUNCE_MS));

  dictInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      dictSuggestions.hidden = true;
      performSearch(dictInput.value.trim());
    }
    if (e.key === "Escape") {
      dictSuggestions.hidden = true;
    }
  });

  dictClear.addEventListener("click", () => {
    dictInput.value = "";
    dictInput.focus();
    dictClear.hidden = true;
    dictSuggestions.hidden = true;
    dictResults.hidden = true;
    dictNoResults.hidden = true;
    dictEmpty.hidden = false;
    dictState.currentQuery = "";
  });

  swapBtn.addEventListener("click", swapLangs);

  clearHistory.addEventListener("click", clearAllHistory);

  /* Close suggestions on outside click */
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dict-input-group")) {
      dictSuggestions.hidden = true;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof initTheme === "function" && typeof buildGlobalSidebar === "function") {
    initDictionary();
  } else {
    setTimeout(initDictionary, 500);
  }
});
