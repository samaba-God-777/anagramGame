# Supabase Configuration Guide

## Step 1: Get Your Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and log in
2. Select your project (or create one)
3. Go to **Settings** → **API**
4. Copy these two values:
   - **Project URL** (e.g., `https://xxxxxx.supabase.co`)
   - **anon public key** (starts with `eyJ...`)

## Step 2: Update the Configuration

Open `client/src/lib/supabase.js` and replace:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

With your actual values:

```javascript
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

## Step 3: Run the Database Schema

1. In your Supabase project, go to **SQL Editor**
2. Copy the contents of `server/supabase-schema.sql`
3. Paste and click **Run**

## Step 4: Test the Connection

Run this in your browser console:

```javascript
import { checkConnection } from './src/lib/supabase.js';

const isConnected = await checkConnection();
console.log('Connected:', isConnected);
```

## API Functions Available

### Progress Tracking
```javascript
import { getUserProgress, updateLessonProgress } from './src/lib/supabase.js';

// Get all progress
const { data } = await getUserProgress();

// Update lesson progress
await updateLessonProgress('lesson-123', {
  completed: true,
  score: 85,
  time_spent_seconds: 300
});
```

### Quiz Scores
```javascript
import { saveQuizScore } from './src/lib/supabase.js';

await saveQuizScore('lesson-123', {
  quiz_type: 'multiple_choice',
  score: 8,
  total_questions: 10,
  correct_answers: 8,
  time_taken_seconds: 120
});
```

### Bookmarks
```javascript
import { getBookmarks, toggleBookmark } from './src/lib/supabase.js';

// Get all bookmarks
const { data } = await getBookmarks();

// Toggle bookmark (adds if not exists, removes if exists)
await toggleBookmark('lesson-123', { notes: 'Important lesson' });
```

### Notes
```javascript
import { saveNote, getNotes } from './src/lib/supabase.js';

// Save note
await saveNote('lesson-123', 'This is my note about the lesson');

// Get all notes
const { data } = await getNotes();
```

### Vocabulary
```javascript
import { saveVocabulary, getVocabulary } from './src/lib/supabase.js';

// Save word
await saveVocabulary({
  word: 'ubiquitous',
  translation: 'ubicuo',
  part_of_speech: 'adjective',
  example_sentence: 'Smartphones are ubiquitous in modern life.'
});

// Get vocabulary
const { data } = await getVocabulary(50);
```

### User Stats
```javascript
import { getUserStats, updateUserStreak } from './src/lib/supabase.js';

// Get stats
const { data } = await getUserStats();
console.log(data); // { total_lessons_completed, average_score, etc. }

// Update streak
await updateUserStreak();
```

### Game Scores
```javascript
import { saveGameScore } from './src/lib/supabase.js';

await saveGameScore('anagram', {
  score: 500,
  level: 'hard',
  time_taken_seconds: 60,
  completed: true
});
```

### Conversations
```javascript
import { saveConversation, getConversations } from './src/lib/supabase.js';

// Save conversation
await saveConversation({
  title: 'Chat about tenses',
  messages: [...],
  topic: 'grammar',
  message_count: 10
});

// Get conversations
const { data } = await getConversations();
```

## Environment Variables (Optional)

For production, you can use environment variables:

1. Create `.env` file in project root:
```
VITE_SUPABASE_URL=https://xxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

2. Update `supabase.js`:
```javascript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

## Security Notes

- The `anon` key is safe to use in the browser
- Row Level Security (RLS) is enabled on all tables
- For production, consider adding user authentication
- Never expose your `service_role` key in client-side code
