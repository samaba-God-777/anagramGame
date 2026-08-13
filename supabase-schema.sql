-- ═══════════════════════════════════════════════════════════════
-- ENGLISH LEARNING HUB - DATABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════

-- 1. USER PROGRESS TABLE
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  lesson_id TEXT NOT NULL,
  lesson_type TEXT NOT NULL DEFAULT 'grammar',
  completed BOOLEAN DEFAULT FALSE,
  score INTEGER DEFAULT 0,
  max_score INTEGER DEFAULT 100,
  time_spent_seconds INTEGER DEFAULT 0,
  attempts INTEGER DEFAULT 0,
  last_practiced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- 2. QUIZ SCORES TABLE
CREATE TABLE IF NOT EXISTS quiz_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  lesson_id TEXT NOT NULL,
  quiz_type TEXT NOT NULL DEFAULT 'multiple_choice',
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  correct_answers INTEGER NOT NULL,
  time_taken_seconds INTEGER DEFAULT 0,
  answers JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. GAME SCORES TABLE
CREATE TABLE IF NOT EXISTS game_scores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  game_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  level TEXT,
  time_taken_seconds INTEGER DEFAULT 0,
  moves INTEGER,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. BOOKMARKS TABLE
CREATE TABLE IF NOT EXISTS bookmarks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  lesson_id TEXT NOT NULL,
  bookmark_type TEXT DEFAULT 'lesson',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- 5. NOTES TABLE
CREATE TABLE IF NOT EXISTS notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  lesson_id TEXT NOT NULL,
  note_text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- 6. VOCABULARY TABLE
CREATE TABLE IF NOT EXISTS vocabulary (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  word TEXT NOT NULL,
  translation TEXT,
  language_pair TEXT DEFAULT 'en-es',
  part_of_speech TEXT,
  example_sentence TEXT,
  familiarity_level INTEGER DEFAULT 0,
  next_review_at TIMESTAMPTZ,
  last_reviewed_at TIMESTAMPTZ,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, word, language_pair)
);

-- 7. CONVERSATIONS TABLE
CREATE TABLE IF NOT EXISTS conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  title TEXT DEFAULT 'New Conversation',
  messages JSONB NOT NULL DEFAULT '[]',
  topic TEXT,
  message_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. USER STREAKS TABLE
CREATE TABLE IF NOT EXISTS user_streaks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_active_date DATE DEFAULT CURRENT_DATE,
  total_days_active INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 9. ACHIEVEMENTS TABLE
CREATE TABLE IF NOT EXISTS achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  achievement_id TEXT NOT NULL,
  achievement_name TEXT NOT NULL,
  achievement_description TEXT,
  icon TEXT,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- 10. DAILY CHALLENGES TABLE
CREATE TABLE IF NOT EXISTS daily_challenges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  challenge_date DATE NOT NULL DEFAULT CURRENT_DATE,
  completed BOOLEAN DEFAULT FALSE,
  score INTEGER DEFAULT 0,
  challenges_completed JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, challenge_date)
);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_lesson ON user_progress(lesson_id);
CREATE INDEX IF NOT EXISTS idx_quiz_user ON quiz_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_lesson ON quiz_scores(lesson_id);
CREATE INDEX IF NOT EXISTS idx_game_user ON game_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_game_id ON game_scores(game_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_user ON bookmarks(user_id);
CREATE INDEX IF NOT EXISTS idx_notes_user ON notes(user_id);
CREATE INDEX IF NOT EXISTS idx_vocab_user ON vocabulary(user_id);
CREATE INDEX IF NOT EXISTS idx_vocab_word ON vocabulary(word);
CREATE INDEX IF NOT EXISTS idx_conv_user ON conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_streaks_user ON user_streaks(user_id);
CREATE INDEX IF NOT EXISTS idx_achievements_user ON achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_user ON daily_challenges(user_id);
CREATE INDEX IF NOT EXISTS idx_daily_date ON daily_challenges(challenge_date);

-- ROW LEVEL SECURITY
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_challenges ENABLE ROW LEVEL SECURITY;

-- POLICIES
CREATE POLICY "Allow all" ON user_progress FOR ALL USING (true);
CREATE POLICY "Allow all" ON quiz_scores FOR ALL USING (true);
CREATE POLICY "Allow all" ON game_scores FOR ALL USING (true);
CREATE POLICY "Allow all" ON bookmarks FOR ALL USING (true);
CREATE POLICY "Allow all" ON notes FOR ALL USING (true);
CREATE POLICY "Allow all" ON vocabulary FOR ALL USING (true);
CREATE POLICY "Allow all" ON conversations FOR ALL USING (true);
CREATE POLICY "Allow all" ON user_streaks FOR ALL USING (true);
CREATE POLICY "Allow all" ON achievements FOR ALL USING (true);
CREATE POLICY "Allow all" ON daily_challenges FOR ALL USING (true);
