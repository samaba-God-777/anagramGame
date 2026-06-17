-- ═══════════════════════════════════════════════════════════════
-- EXAMPLE DATA FOR ENGLISH LEARNING HUB
-- Run this AFTER supabase-run-me.sql
-- ═══════════════════════════════════════════════════════════════

-- ═══════════════════════════════════════════════════════════════
-- ACHIEVEMENTS DEFINITIONS
-- ═══════════════════════════════════════════════════════════════
-- These are achievement definitions (not user-specific)
-- The app will check these and award them as users progress

-- Sample user progress for demo (optional - remove in production)
INSERT INTO user_progress (user_id, lesson_id, lesson_type, completed, score, attempts) VALUES
  ('demo_user', 'present-simple.affirmative', 'tense', true, 85, 5),
  ('demo_user', 'present-simple.negative', 'tense', true, 90, 3),
  ('demo_user', 'present-simple.questions', 'tense', false, 60, 2),
  ('demo_user', 'present-continuous.affirmative', 'tense', true, 75, 4),
  ('demo_user', 'past-simple.affirmative', 'tense', true, 80, 6),
  ('demo_user', 'grammar_present-simple', 'grammar', true, 85, 1),
  ('demo_user', 'grammar_present-continuous', 'grammar', true, 70, 1)
ON CONFLICT (user_id, lesson_id) DO NOTHING;

-- Sample bookmarks for demo
INSERT INTO bookmarks (user_id, lesson_id, bookmark_type, notes) VALUES
  ('demo_user', 'present-simple', 'lesson', 'Need to practice more'),
  ('demo_user', 'past-simple', 'lesson', 'Irregular verbs are tricky')
ON CONFLICT (user_id, lesson_id) DO NOTHING;

-- Sample notes for demo
INSERT INTO notes (user_id, lesson_id, note_text) VALUES
  ('demo_user', 'present-simple', 'Present Simple: Subject + Verb(s/es) + Object
Use for habits, routines, general truths
Examples: I play, She works, They live'),
  ('demo_user', 'past-simple', 'Past Simple: Subject + Verb(past) + Object
Regular verbs: +ed (played, worked)
Irregular verbs: go→went, see→saw, eat→ate')
ON CONFLICT (user_id, lesson_id) DO NOTHING;

-- Sample vocabulary for demo
INSERT INTO vocabulary (user_id, word, translation, language_pair, part_of_speech, example_sentence, familiarity_level) VALUES
  ('demo_user', 'ubiquitous', 'ubicuo', 'en-es', 'adjective', 'Smartphones are ubiquitous in modern life.', 3),
  ('demo_user', 'serendipity', 'serendipia', 'en-es', 'noun', 'Finding that book was pure serendipity.', 2),
  ('demo_user', 'ephemeral', 'efímero', 'en-es', 'adjective', 'The beauty of cherry blossoms is ephemeral.', 4),
  ('demo_user', 'resilience', 'resiliencia', 'en-es', 'noun', 'She showed great resilience during difficult times.', 3),
  ('demo_user', 'ambiguous', 'ambiguo', 'en-es', 'adjective', 'The instructions were ambiguous and confusing.', 1)
ON CONFLICT (user_id, word, language_pair) DO NOTHING;

-- Sample game scores for demo
INSERT INTO game_scores (user_id, game_id, score, level, time_taken_seconds, completed) VALUES
  ('demo_user', 'anagram', 150, 'easy', 45, true),
  ('demo_user', 'anagram', 200, 'medium', 60, true),
  ('demo_user', 'word-order', 180, 'normal', 55, true),
  ('demo_user', 'verb-tense', 120, 'A1', 40, true),
  ('demo_user', 'error-correction', 90, 'normal', 30, true);

-- Sample quiz scores for demo
INSERT INTO quiz_scores (user_id, lesson_id, quiz_type, score, total_questions, correct_answers, time_taken_seconds) VALUES
  ('demo_user', 'present-simple', 'grammar', 4, 5, 4, 60),
  ('demo_user', 'present-continuous', 'grammar', 3, 5, 3, 45),
  ('demo_user', 'past-simple', 'grammar', 5, 5, 5, 50);

-- Initialize streak for demo user
INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_active_date, total_days_active) VALUES
  ('demo_user', 3, 7, CURRENT_DATE, 15)
ON CONFLICT (user_id) DO NOTHING;

-- Sample achievements for demo
INSERT INTO achievements (user_id, achievement_id, achievement_name, achievement_description, icon) VALUES
  ('demo_user', 'first-lesson', 'First Steps', 'Completed your first lesson', '🎯'),
  ('demo_user', 'streak-3', 'On Fire!', 'Maintained a 3-day streak', '🔥'),
  ('demo_user', 'quiz-master', 'Quiz Master', 'Scored 100% on a quiz', '⭐'),
  ('demo_user', 'word-collector', 'Word Collector', 'Learned 5 vocabulary words', '📚')
ON CONFLICT (user_id, achievement_id) DO NOTHING;

-- ═══════════════════════════════════════════════════════════════
-- VERIFICATION QUERIES
-- Run these to verify the data was inserted correctly
-- ═══════════════════════════════════════════════════════════════

-- Check tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;

-- Count rows in each table
SELECT 'user_progress' as table_name, COUNT(*) as rows FROM user_progress
UNION ALL
SELECT 'quiz_scores', COUNT(*) FROM quiz_scores
UNION ALL
SELECT 'game_scores', COUNT(*) FROM game_scores
UNION ALL
SELECT 'bookmarks', COUNT(*) FROM bookmarks
UNION ALL
SELECT 'notes', COUNT(*) FROM notes
UNION ALL
SELECT 'vocabulary', COUNT(*) FROM vocabulary
UNION ALL
SELECT 'conversations', COUNT(*) FROM conversations
UNION ALL
SELECT 'user_streaks', COUNT(*) FROM user_streaks
UNION ALL
SELECT 'achievements', COUNT(*) FROM achievements
UNION ALL
SELECT 'daily_challenges', COUNT(*) FROM daily_challenges;
