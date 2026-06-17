/* ═══════════════════════════════════════════
   WIKIPEDIA API MODULE
   Fetch definitions, examples, and context
   ═══════════════════════════════════════════ */

const WIKI_API = "https://en.wikipedia.org/api/rest_v1/page/summary";
const WIKI_CACHE = {};

/**
 * Fetch Wikipedia summary for a term
 * @param {string} term - The term to look up
 * @returns {Promise<object|null>} - Wikipedia summary or null
 */
export async function fetchWikiSummary(term) {
  const cacheKey = term.toLowerCase().trim();
  if (WIKI_CACHE[cacheKey]) return WIKI_CACHE[cacheKey];

  try {
    const resp = await fetch(`${WIKI_API}/${encodeURIComponent(cacheKey)}`);
    if (!resp.ok) return null;
    const data = await resp.json();
    WIKI_CACHE[cacheKey] = data;
    return data;
  } catch {
    return null;
  }
}

/**
 * Get plain text extract (first paragraph)
 */
export function getWikiExtract(data) {
  if (!data || !data.extract) return null;
  return data.extract;
}

/**
 * Get the thumbnail image URL
 */
export function getWikiThumbnail(data) {
  if (!data || !data.thumbnail || !data.thumbnail.source) return null;
  return data.thumbnail.source;
}

/**
 * Get the full Wikipedia page URL
 */
export function getWikiPageUrl(data) {
  if (!data || !data.content_urls || !data.content_urls.desktop) return null;
  return data.content_urls.desktop.page;
}

/**
 * Create a Wikipedia info card element with thumbnail and link
 */
export function createWikiCard(data, term) {
  if (!data) return null;

  const extract = getWikiExtract(data);
  const thumbnail = getWikiThumbnail(data);
  const pageUrl = getWikiPageUrl(data);

  if (!extract) return null;

  const card = document.createElement("div");
  card.className = "wiki-card";
  card.innerHTML = `
    <div class="wiki-header">
      <span class="wiki-icon">📖</span>
      <span class="wiki-title">Wikipedia: ${term}</span>
    </div>
    <div class="wiki-content">
      ${thumbnail ? `<img src="${thumbnail}" alt="${term}" class="wiki-thumb" loading="lazy" />` : ''}
      <p class="wiki-extract">${extract}</p>
    </div>
    ${pageUrl ? `<a href="${pageUrl}" target="_blank" rel="noopener" class="wiki-link">Read more on Wikipedia →</a>` : ''}
  `;

  return card;
}

/**
 * Render Wikipedia info inline in a container
 */
export async function renderWikiInfo(container, term) {
  if (!container || !term) return;

  const loading = document.createElement("div");
  loading.className = "wiki-loading";
  loading.textContent = "Loading Wikipedia info...";
  container.appendChild(loading);

  const data = await fetchWikiSummary(term);
  loading.remove();

  if (data) {
    const card = createWikiCard(data, term);
    if (card) container.appendChild(card);
  }
}
