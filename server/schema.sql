-- Run this in Supabase SQL Editor to create tables

-- Conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  messages JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Game progress table
CREATE TABLE IF NOT EXISTS progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  game TEXT NOT NULL,
  level INTEGER DEFAULT 1,
  score INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, game, level)
);

-- Grammar progress table
CREATE TABLE IF NOT EXISTS grammar_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  lesson_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  score INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Grammar notes table
CREATE TABLE IF NOT EXISTS grammar_notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  lesson_id TEXT NOT NULL,
  note TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Grammar bookmarks table
CREATE TABLE IF NOT EXISTS grammar_bookmarks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL DEFAULT 'anonymous',
  lesson_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_conversations_user ON conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_grammar_progress_user ON grammar_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_grammar_notes_user ON grammar_notes(user_id);
CREATE INDEX IF NOT EXISTS idx_grammar_bookmarks_user ON grammar_bookmarks(user_id);

-- Enable Row Level Security (optional, for production)
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE grammar_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE grammar_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE grammar_bookmarks ENABLE ROW LEVEL SECURITY;

-- Allow all operations (simplified for demo)
CREATE POLICY "Allow all" ON conversations FOR ALL USING (true);
CREATE POLICY "Allow all" ON progress FOR ALL USING (true);
CREATE POLICY "Allow all" ON grammar_progress FOR ALL USING (true);
CREATE POLICY "Allow all" ON grammar_notes FOR ALL USING (true);
CREATE POLICY "Allow all" ON grammar_bookmarks FOR ALL USING (true);
