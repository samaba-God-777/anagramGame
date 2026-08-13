// ═══════════════════════════════════════════════════════════════
// SUPABASE AUTH MODULE
// English Learning Hub - Login / Signup / Session
// ═══════════════════════════════════════════════════════════════

import { supabase } from './supabase.js';

// ═══════════════════════════════════════════════════════════════
// AUTH STATE
// ═══════════════════════════════════════════════════════════════
let currentSession = null;
let authListeners = [];

/**
 * Get current session
 * @returns {Promise<object|null>}
 */
export async function getSession() {
  if (currentSession) return currentSession;
  const { data: { session } } = await supabase.auth.getSession();
  currentSession = session;
  return session;
}

/**
 * Get current user
 * @returns {Promise<object|null>}
 */
export async function getUser() {
  const session = await getSession();
  return session?.user || null;
}

/**
 * Sign up with email and password
 * @param {string} email
 * @param {string} password
 * @param {string} role - 'teacher' or 'student'
 * @param {string} displayName
 * @returns {Promise<{data: object|null, error: string|null}>}
 */
export async function signUp(email, password, role = 'student', displayName = '') {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName || email.split('@')[0],
        role: role
      }
    }
  });

  if (error) return { data: null, error: error.message };
  currentSession = data.session;
  notifyListeners('SIGNED_IN', data.session);
  return { data, error: null };
}

/**
 * Sign in with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{data: object|null, error: string|null}>}
 */
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) return { data: null, error: error.message };
  currentSession = data.session;
  notifyListeners('SIGNED_IN', data.session);
  return { data, error: null };
}

/**
 * Sign out
 * @returns {Promise<{error: string|null}>}
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  currentSession = null;
  notifyListeners('SIGNED_OUT', null);
  return { error: error?.message || null };
}

/**
 * Get the user ID for database operations
 * Returns auth user ID if logged in, otherwise anonymous ID
 * @returns {string}
 */
export function getAuthUserId() {
  if (currentSession?.user?.id) {
    return currentSession.user.id;
  }
  // Fallback to anonymous ID
  let userId = localStorage.getItem('englishHub_userId');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('englishHub_userId', userId);
  }
  return userId;
}

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export function isAuthenticated() {
  return !!currentSession?.user;
}

/**
 * Get user display name or email
 * @returns {string}
 */
export function getDisplayName() {
  if (!currentSession?.user) return 'Guest';
  return currentSession.user.user_metadata?.display_name
    || currentSession.user.email?.split('@')[0]
    || 'User';
}

/**
 * Get user email
 * @returns {string}
 */
export function getEmail() {
  return currentSession?.user?.email || '';
}

/**
 * Get user role (teacher or student)
 * @returns {string}
 */
export function getRole() {
  return currentSession?.user?.user_metadata?.role || 'student';
}

/**
 * Check if user is a teacher
 * @returns {boolean}
 */
export function isTeacher() {
  return getRole() === 'teacher';
}

// ═══════════════════════════════════════════════════════════════
// AUTH STATE LISTENERS
// ═══════════════════════════════════════════════════════════════

/**
 * Subscribe to auth state changes
 * @param {function} callback
 * @returns {function} unsubscribe function
 */
export function onAuthStateChange(callback) {
  authListeners.push(callback);
  return () => {
    authListeners = authListeners.filter(l => l !== callback);
  };
}

function notifyListeners(event, session) {
  authListeners.forEach(cb => {
    try { cb(event, session); } catch (e) { console.warn('Auth listener error:', e); }
  });
}

// ═══════════════════════════════════════════════════════════════
// INIT - Listen to Supabase auth changes
// ═══════════════════════════════════════════════════════════════
supabase.auth.onAuthStateChange((event, session) => {
  currentSession = session;
  notifyListeners(event, session);
});
