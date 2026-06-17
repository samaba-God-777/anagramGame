// ═══════════════════════════════════════════════════════════════
// HYBRID STORAGE ADAPTER
// Bridges localStorage (fast/offline) + Supabase (persistent/sync)
// ═══════════════════════════════════════════════════════════════

import { supabase, getUserId } from './supabase.js';

// ═══════════════════════════════════════════════════════════════
// LOCAL STORAGE HELPERS (fast, offline-first)
// ═══════════════════════════════════════════════════════════════

function loadLocal(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveLocal(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('localStorage save failed:', e);
  }
}

// ═══════════════════════════════════════════════════════════════
// PROGRESS TRACKING (tenses & grammar)
// ═══════════════════════════════════════════════════════════════

/**
 * Load progress for a tense (affirmative/negative/questions)
 * @param {string} tense - e.g., "Present Simple"
 * @param {string} form - e.g., "affirmative"
 * @returns {object} Progress data
 */
export function loadTenseProgress(tense, form) {
  const key = `anagramGame_progress`;
  const all = loadLocal(key) || {};
  const lessonId = `${tense}.${form}`;
  return all[lessonId] || { score: 0, attempts: 0, streak: 0, bestStreak: 0, completed: false, usedSentences: [] };
}

/**
 * Save progress for a tense
 * @param {string} tense - e.g., "Present Simple"
 * @param {string} form - e.g., "affirmative"
 * @param {object} data - Progress data
 */
export async function saveTenseProgress(tense, form, data) {
  const key = `anagramGame_progress`;
  const all = loadLocal(key) || {};
  const lessonId = `${tense}.${form}`;
  
  // Save locally
  all[lessonId] = { ...all[lessonId], ...data };
  saveLocal(key, all);
  
  // Sync to Supabase
  try {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: getUserId(),
        lesson_id: lessonId,
        lesson_type: 'tense',
        completed: data.completed || false,
        score: data.score || 0,
        max_score: 100,
        time_spent_seconds: data.time_spent_seconds || 0,
        attempts: data.attempts || 0,
        last_practiced_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,lesson_id' });
    
    if (error) console.warn('Supabase sync failed:', error);
  } catch (e) {
    console.warn('Supabase sync error:', e);
  }
}

/**
 * Load all tense progress
 * @returns {object} All tense progress keyed by lessonId
 */
export function loadAllTenseProgress() {
  return loadLocal('anagramGame_progress') || {};
}

/**
 * Save game score (anagram, word-order, etc.)
 * @param {string} gameName - e.g., "anagram", "word-order"
 * @param {object} scoreData - Score data
 */
export async function saveGameScore(gameName, scoreData) {
  const key = `englishGames_progress`;
  const all = loadLocal(key) || {};
  
  // Update local
  if (!all[gameName]) {
    all[gameName] = { bestScore: 0, totalScore: 0, gamesPlayed: 0 };
  }
  all[gameName].gamesPlayed++;
  all[gameName].totalScore += scoreData.score || 0;
  if ((scoreData.score || 0) > all[gameName].bestScore) {
    all[gameName].bestScore = scoreData.score;
  }
  saveLocal(key, all);
  
  // Sync to Supabase
  try {
    const { error } = await supabase
      .from('game_scores')
      .insert({
        user_id: getUserId(),
        game_id: gameName,
        score: scoreData.score || 0,
        level: scoreData.level || 'normal',
        time_taken_seconds: scoreData.time_taken_seconds || 0,
        moves: scoreData.moves || null,
        completed: scoreData.completed || false
      });
    
    if (error) console.warn('Supabase game score sync failed:', error);
  } catch (e) {
    console.warn('Supabase game score error:', e);
  }
}

/**
 * Load game scores
 * @returns {object} Game scores keyed by game name
 */
export function loadGameScores() {
  return loadLocal('englishGames_progress') || {};
}

// ═══════════════════════════════════════════════════════════════
// GRAMMAR FEATURES (progress, bookmarks, notes, quizzes)
// ═══════════════════════════════════════════════════════════════

/**
 * Load grammar progress
 * @returns {object} Grammar progress
 */
export function loadGrammarProgress() {
  return loadLocal('grammar_progress') || {};
}

/**
 * Save grammar lesson progress
 * @param {string} lessonId - Lesson ID
 * @param {object} data - Progress data
 */
export async function saveGrammarProgress(lessonId, data) {
  const all = loadLocal('grammar_progress') || {};
  all[lessonId] = { ...all[lessonId], ...data };
  saveLocal('grammar_progress', all);
  
  // Sync to Supabase
  try {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: getUserId(),
        lesson_id: `grammar_${lessonId}`,
        lesson_type: 'grammar',
        completed: data.completed || false,
        score: data.score || 0,
        max_score: data.max_score || 100,
        time_spent_seconds: data.time_spent_seconds || 0,
        attempts: data.attempts || 0,
        last_practiced_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,lesson_id' });
    
    if (error) console.warn('Supabase grammar sync failed:', error);
  } catch (e) {
    console.warn('Supabase grammar sync error:', e);
  }
}

/**
 * Load bookmarks
 * @returns {Array} Bookmarked lesson IDs
 */
export function loadBookmarks() {
  return loadLocal('grammar_bookmarks') || [];
}

/**
 * Toggle bookmark
 * @param {string} lessonId - Lesson ID
 * @returns {boolean} New bookmark state
 */
export async function toggleBookmark(lessonId) {
  const bookmarks = loadLocal('grammar_bookmarks') || [];
  const index = bookmarks.indexOf(lessonId);
  let newState;
  
  if (index === -1) {
    bookmarks.push(lessonId);
    newState = true;
  } else {
    bookmarks.splice(index, 1);
    newState = false;
  }
  
  saveLocal('grammar_bookmarks', bookmarks);
  
  // Sync to Supabase
  try {
    if (newState) {
      // Add bookmark
      const { error } = await supabase
        .from('bookmarks')
        .upsert({
          user_id: getUserId(),
          lesson_id: lessonId,
          bookmark_type: 'lesson'
        }, { onConflict: 'user_id,lesson_id' });
      
      if (error) console.warn('Supabase bookmark sync failed:', error);
    } else {
      // Remove bookmark
      const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('user_id', getUserId())
        .eq('lesson_id', lessonId);
      
      if (error) console.warn('Supabase bookmark sync failed:', error);
    }
  } catch (e) {
    console.warn('Supabase bookmark sync error:', e);
  }
  
  return newState;
}

/**
 * Check if a lesson is bookmarked
 * @param {string} lessonId - Lesson ID
 * @returns {boolean}
 */
export function isBookmarked(lessonId) {
  const bookmarks = loadLocal('grammar_bookmarks') || [];
  return bookmarks.includes(lessonId);
}

/**
 * Load note for a lesson
 * @param {string} lessonId - Lesson ID
 * @returns {string|null} Note text
 */
export function loadNote(lessonId) {
  return loadLocal(`grammar_note_${lessonId}`);
}

/**
 * Save note for a lesson
 * @param {string} lessonId - Lesson ID
 * @param {string} noteText - Note content
 */
export async function saveNote(lessonId, noteText) {
  saveLocal(`grammar_note_${lessonId}`, noteText);
  
  // Sync to Supabase
  try {
    const { error } = await supabase
      .from('notes')
      .upsert({
        user_id: getUserId(),
        lesson_id: lessonId,
        note_text: noteText,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id,lesson_id' });
    
    if (error) console.warn('Supabase note sync failed:', error);
  } catch (e) {
    console.warn('Supabase note sync error:', e);
  }
}

/**
 * Load quiz score for a lesson
 * @param {string} lessonId - Lesson ID
 * @returns {object|null} Quiz score
 */
export function loadQuizScore(lessonId) {
  return loadLocal(`grammar_quiz_${lessonId}`);
}

/**
 * Save quiz score for a lesson
 * @param {string} lessonId - Lesson ID
 * @param {object} scoreData - Quiz score data
 */
export async function saveQuizScore(lessonId, scoreData) {
  saveLocal(`grammar_quiz_${lessonId}`, scoreData);
  
  // Sync to Supabase
  try {
    const { error } = await supabase
      .from('quiz_scores')
      .insert({
        user_id: getUserId(),
        lesson_id: lessonId,
        quiz_type: 'grammar',
        score: scoreData.score || 0,
        total_questions: scoreData.total_questions || 10,
        correct_answers: scoreData.correct_answers || 0,
        time_taken_seconds: scoreData.time_taken_seconds || 0,
        answers: scoreData.answers || []
      });
    
    if (error) console.warn('Supabase quiz sync failed:', error);
  } catch (e) {
    console.warn('Supabase quiz sync error:', e);
  }
}

// ═══════════════════════════════════════════════════════════════
// VOCABULARY (spaced repetition)
// ═══════════════════════════════════════════════════════════════

/**
 * Load spaced repetition data
 * @returns {object} SR data
 */
export function loadSpacedRepetition() {
  return loadLocal('spacedRepetition') || {};
}

/**
 * Save spaced repetition data for a word
 * @param {string} word - The word
 * @param {object} data - SR data (correctCount, wrongCount, streak, etc.)
 */
export async function saveSpacedRepetition(word, data) {
  const all = loadLocal('spacedRepetition') || {};
  all[word] = data;
  saveLocal('spacedRepetition', all);
  
  // Sync to Supabase
  try {
    const { error } = await supabase
      .from('vocabulary')
      .upsert({
        user_id: getUserId(),
        word: word,
        familiarity_level: Math.min(5, Math.floor(data.correctCount / 3)),
        review_count: (data.correctCount || 0) + (data.wrongCount || 0),
        last_reviewed_at: new Date().toISOString(),
        next_review_at: data.nextReview ? new Date(data.nextReview).toISOString() : null
      }, { onConflict: 'user_id,word' });
    
    if (error) console.warn('Supabase SR sync failed:', error);
  } catch (e) {
    console.warn('Supabase SR sync error:', e);
  }
}

// ═══════════════════════════════════════════════════════════════
// USER STATS & STREAKS
// ═══════════════════════════════════════════════════════════════

/**
 * Update user streak (call on each visit)
 */
export async function updateUserStreak() {
  try {
    const { error } = await supabase.rpc('update_streak', { p_user_id: getUserId() });
    if (error) console.warn('Streak update failed:', error);
  } catch (e) {
    console.warn('Streak update error:', e);
  }
}

/**
 * Get user statistics
 * @returns {object|null} User stats
 */
export async function getUserStats() {
  try {
    const { data, error } = await supabase.rpc('get_user_stats', { p_user_id: getUserId() });
    if (error) {
      console.warn('Stats fetch failed:', error);
      return null;
    }
    return data;
  } catch (e) {
    console.warn('Stats fetch error:', e);
    return null;
  }
}

// ═══════════════════════════════════════════════════════════════
// CONVERSATIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Save conversation to Supabase
 * @param {object} conversationData - Conversation data
 */
export async function saveConversation(conversationData) {
  try {
    const { error } = await supabase
      .from('conversations')
      .insert({
        user_id: getUserId(),
        title: conversationData.title || 'New Conversation',
        messages: conversationData.messages || [],
        topic: conversationData.topic || 'general',
        message_count: conversationData.messages?.length || 0
      });
    
    if (error) console.warn('Conversation save failed:', error);
  } catch (e) {
    console.warn('Conversation save error:', e);
  }
}

/**
 * Load conversations from Supabase
 * @param {number} limit - Max conversations to load
 * @returns {Array} Conversations
 */
export async function loadConversations(limit = 50) {
  try {
    const { data, error } = await supabase
      .from('conversations')
      .select('*')
      .eq('user_id', getUserId())
      .order('created_at', { ascending: false })
      .limit(limit);
    
    if (error) {
      console.warn('Conversations load failed:', error);
      return [];
    }
    return data || [];
  } catch (e) {
    console.warn('Conversations load error:', e);
    return [];
  }
}

// ═══════════════════════════════════════════════════════════════
// DICTIONARY HISTORY
// ═══════════════════════════════════════════════════════════════

/**
 * Load dictionary search history
 * @returns {Array} Search history
 */
export function loadDictionaryHistory() {
  return loadLocal('dict_history') || [];
}

/**
 * Save to dictionary search history
 * @param {string} term - Search term
 */
export function saveDictionaryHistory(term) {
  const history = loadLocal('dict_history') || [];
  // Remove duplicate
  const filtered = history.filter(h => h !== term);
  filtered.unshift(term);
  // Keep last 20
  saveLocal('dict_history', filtered.slice(0, 20));
}

// ═══════════════════════════════════════════════════════════════
// SYNC ALL DATA FROM SUPABASE (on login/first visit)
// ═══════════════════════════════════════════════════════════════

/**
 * Pull all data from Supabase and merge with localStorage
 * This runs once on first visit to restore data from cloud
 */
export async function syncFromSupabase() {
  const userId = getUserId();
  
  try {
    // Sync progress
    const { data: progress } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId);
    
    if (progress && progress.length > 0) {
      const all = loadLocal('anagramGame_progress') || {};
      progress.forEach(p => {
        if (!all[p.lesson_id]) {
          all[p.lesson_id] = {
            score: p.score,
            attempts: p.attempts,
            streak: 0,
            bestStreak: 0,
            completed: p.completed,
            usedSentences: []
          };
        }
      });
      saveLocal('anagramGame_progress', all);
    }
    
    // Sync bookmarks
    const { data: bookmarks } = await supabase
      .from('bookmarks')
      .select('lesson_id')
      .eq('user_id', userId);
    
    if (bookmarks && bookmarks.length > 0) {
      const localBookmarks = loadLocal('grammar_bookmarks') || [];
      const merged = [...new Set([...localBookmarks, ...bookmarks.map(b => b.lesson_id)])];
      saveLocal('grammar_bookmarks', merged);
    }
    
    // Sync notes
    const { data: notes } = await supabase
      .from('notes')
      .select('*')
      .eq('user_id', userId);
    
    if (notes && notes.length > 0) {
      notes.forEach(n => {
        if (n.note_text) {
          saveLocal(`grammar_note_${n.lesson_id}`, n.note_text);
        }
      });
    }
    
    console.log('✅ Supabase sync complete');
  } catch (e) {
    console.warn('Supabase sync failed:', e);
  }
}
