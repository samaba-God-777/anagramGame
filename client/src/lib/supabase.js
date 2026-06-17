// ═══════════════════════════════════════════════════════════════
// SUPABASE CLIENT CONFIGURATION
// English Learning Hub
// ═══════════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

// ═══════════════════════════════════════════════════════════════
// CONFIGURATION
// Replace these with your Supabase project credentials
// ═══════════════════════════════════════════════════════════════
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://yranrsiympeterfowwco.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYW5yc2l5bXBldGVyZm93d2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NjIxOTksImV4cCI6MjA5NzIzODE5OX0.If0al4kcqhxzT8EsEd3BBsdK__-2Gb0V6neomvSh5z8';

// ═══════════════════════════════════════════════════════════════
// CREATE CLIENT
// ═══════════════════════════════════════════════════════════════
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Get or create anonymous user ID
 * @returns {string} User ID
 */
export function getUserId() {
  let userId = localStorage.getItem('englishHub_userId');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('englishHub_userId', userId);
  }
  return userId;
}

/**
 * Generic function to fetch data from a table
 * @param {string} table - Table name
 * @param {object} filters - Filter conditions
 * @param {number} limit - Limit results
 * @returns {Promise<{data: any[], error: any}>}
 */
export async function fetchData(table, filters = {}, limit = 100) {
  try {
    let query = supabase.from(table).select('*');
    
    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
    
    // Apply limit
    if (limit) {
      query = query.limit(limit);
    }
    
    const { data, error } = await query;
    return { data, error };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

/**
 * Insert data into a table
 * @param {string} table - Table name
 * @param {object|object[]} data - Data to insert
 * @returns {Promise<{data: any, error: any}>}
 */
export async function insertData(table, data) {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .insert(data)
      .select();
    
    return { data: result, error };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

/**
 * Update data in a table
 * @param {string} table - Table name
 * @param {object} filters - Filter conditions
 * @param {object} updates - Data to update
 * @returns {Promise<{data: any, error: any}>}
 */
export async function updateData(table, filters, updates) {
  try {
    let query = supabase.from(table).update(updates);
    
    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
    
    const { data, error } = await query;
    return { data, error };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

/**
 * Upsert data (insert or update)
 * @param {string} table - Table name
 * @param {object|object[]} data - Data to upsert
 * @param {string[]} conflictColumns - Columns to check for conflicts
 * @returns {Promise<{data: any, error: any}>}
 */
export async function upsertData(table, data, conflictColumns = ['id']) {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .upsert(data, { onConflict: conflictColumns.join(',') })
      .select();
    
    return { data: result, error };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

/**
 * Delete data from a table
 * @param {string} table - Table name
 * @param {object} filters - Filter conditions
 * @returns {Promise<{data: any, error: any}>}
 */
export async function deleteData(table, filters) {
  try {
    let query = supabase.from(table).delete();
    
    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
    
    const { data, error } = await query;
    return { data, error };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

// ═══════════════════════════════════════════════════════════════
// SPECIFIC FUNCTIONS FOR ENGLISH LEARNING HUB
// ═══════════════════════════════════════════════════════════════

/**
 * Get user's progress for all lessons
 * @returns {Promise<{data: any[], error: any}>}
 */
export async function getUserProgress() {
  const userId = getUserId();
  return fetchData('user_progress', { user_id: userId });
}

/**
 * Update lesson progress
 * @param {string} lessonId - Lesson ID
 * @param {object} progress - Progress data
 * @returns {Promise<{data: any, error: any}>}
 */
export async function updateLessonProgress(lessonId, progress) {
  const userId = getUserId();
  const data = {
    user_id: userId,
    lesson_id: lessonId,
    ...progress,
    updated_at: new Date().toISOString()
  };
  
  return upsertData('user_progress', data, ['user_id', 'lesson_id']);
}

/**
 * Save quiz score
 * @param {string} lessonId - Lesson ID
 * @param {object} scoreData - Score data
 * @returns {Promise<{data: any, error: any}>}
 */
export async function saveQuizScore(lessonId, scoreData) {
  const userId = getUserId();
  const data = {
    user_id: userId,
    lesson_id: lessonId,
    ...scoreData
  };
  
  return insertData('quiz_scores', data);
}

/**
 * Save game score
 * @param {string} gameId - Game ID
 * @param {object} scoreData - Score data
 * @returns {Promise<{data: any, error: any}>}
 */
export async function saveGameScore(gameId, scoreData) {
  const userId = getUserId();
  const data = {
    user_id: userId,
    game_id: gameId,
    ...scoreData
  };
  
  return insertData('game_scores', data);
}

/**
 * Get bookmarks
 * @returns {Promise<{data: any[], error: any}>}
 */
export async function getBookmarks() {
  const userId = getUserId();
  return fetchData('bookmarks', { user_id: userId });
}

/**
 * Toggle bookmark
 * @param {string} lessonId - Lesson ID
 * @param {object} bookmarkData - Additional bookmark data
 * @returns {Promise<{data: any, error: any}>}
 */
export async function toggleBookmark(lessonId, bookmarkData = {}) {
  const userId = getUserId();
  
  // Check if bookmark exists
  const { data: existing } = await fetchData('bookmarks', { 
    user_id: userId, 
    lesson_id: lessonId 
  });
  
  if (existing && existing.length > 0) {
    // Remove bookmark
    return deleteData('bookmarks', { 
      user_id: userId, 
      lesson_id: lessonId 
    });
  } else {
    // Add bookmark
    return insertData('bookmarks', {
      user_id: userId,
      lesson_id: lessonId,
      ...bookmarkData
    });
  }
}

/**
 * Save or update note
 * @param {string} lessonId - Lesson ID
 * @param {string} noteText - Note content
 * @returns {Promise<{data: any, error: any}>}
 */
export async function saveNote(lessonId, noteText) {
  const userId = getUserId();
  const data = {
    user_id: userId,
    lesson_id: lessonId,
    note_text: noteText,
    updated_at: new Date().toISOString()
  };
  
  return upsertData('notes', data, ['user_id', 'lesson_id']);
}

/**
 * Get notes
 * @returns {Promise<{data: any[], error: any}>}
 */
export async function getNotes() {
  const userId = getUserId();
  return fetchData('notes', { user_id: userId });
}

/**
 * Save vocabulary word
 * @param {object} wordData - Word data (word, translation, etc.)
 * @returns {Promise<{data: any, error: any}>}
 */
export async function saveVocabulary(wordData) {
  const userId = getUserId();
  const data = {
    user_id: userId,
    ...wordData
  };
  
  return upsertData('vocabulary', data, ['user_id', 'word']);
}

/**
 * Get vocabulary
 * @param {number} limit - Limit results
 * @returns {Promise<{data: any[], error: any}>}
 */
export async function getVocabulary(limit = 100) {
  const userId = getUserId();
  return fetchData('vocabulary', { user_id: userId }, limit);
}

/**
 * Update vocabulary familiarity (for Spaced Repetition)
 * @param {string} wordId - Word ID
 * @param {number} familiarity - New familiarity level (0-5)
 * @returns {Promise<{data: any, error: any}>}
 */
export async function updateVocabularyFamiliarity(wordId, familiarity) {
  return updateData('vocabulary', { id: wordId }, {
    familiarity_level: familiarity,
    last_reviewed_at: new Date().toISOString(),
    review_count: supabase.raw('review_count + 1')
  });
}

/**
 * Get user statistics
 * @returns {Promise<{data: any, error: any}>}
 */
export async function getUserStats() {
  const userId = getUserId();
  const { data, error } = await supabase
    .rpc('get_user_stats', { p_user_id: userId });
  
  return { data, error };
}

/**
 * Update user streak
 * @returns {Promise<{data: any, error: any}>}
 */
export async function updateUserStreak() {
  const userId = getUserId();
  const { data, error } = await supabase
    .rpc('update_streak', { p_user_id: userId });
  
  return { data, error };
}

/**
 * Save conversation
 * @param {object} conversationData - Conversation data
 * @returns {Promise<{data: any, error: any}>}
 */
export async function saveConversation(conversationData) {
  const userId = getUserId();
  const data = {
    user_id: userId,
    ...conversationData
  };
  
  return insertData('conversations', data);
}

/**
 * Get conversations
 * @param {number} limit - Limit results
 * @returns {Promise<{data: any[], error: any}>}
 */
export async function getConversations(limit = 50) {
  const userId = getUserId();
  return fetchData('conversations', { user_id: userId }, limit);
}

/**
 * Check connection to Supabase
 * @returns {Promise<boolean>}
 */
export async function checkConnection() {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('id')
      .limit(1);
    
    return !error;
  } catch {
    return false;
  }
}
