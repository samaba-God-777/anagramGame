import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import pool from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Root of the project (one level up from server/)
const ROOT = join(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 3001;

// ── CORS for development ──
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.use(express.json());

// ── Static files ──
const distPath = join(ROOT, 'dist');

if (existsSync(distPath)) {
  app.use(express.static(distPath));
} else {
  // Fallback: serve from client/ in development
  app.use(express.static(join(ROOT, 'client')));
}

// ── Health check ──
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT NOW()');
    res.json({ status: 'ok', database: 'connected', timestamp: Date.now() });
  } catch (err) {
    res.json({ status: 'ok', database: 'disconnected', timestamp: Date.now() });
  }
});

// ── GitHub Models Chat Proxy ──
app.post('/api/chat', async (req, res) => {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return res.status(500).json({ error: 'GitHub token not configured on server' });
  }

  const { messages, systemPrompt } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  try {
    const response = await fetch('https://models.github.ai/inference/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${githubToken}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt || 'You are a helpful English tutor.' },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('GitHub Models API error:', response.status, err);
      return res.status(response.status).json({ error: err.error?.message || 'GitHub Models API error' });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('GitHub Models fetch error:', err.message);
    res.status(500).json({ error: 'Failed to connect to GitHub Models API' });
  }
});

// ── Save conversation ──
app.post('/api/conversations', async (req, res) => {
  const { userId, messages } = req.body;
  if (!messages) {
    return res.status(400).json({ error: 'messages is required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO conversations (user_id, messages) VALUES ($1, $2) RETURNING id',
      [userId || 'anonymous', JSON.stringify(messages)]
    );
    res.json({ id: result.rows[0].id });
  } catch (err) {
    console.error('Save conversation error:', err.message);
    res.status(500).json({ error: 'Failed to save conversation' });
  }
});

// ── Get conversations ──
app.get('/api/conversations/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM conversations WHERE user_id = $1 ORDER BY created_at DESC LIMIT 10',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Get conversations error:', err.message);
    res.status(500).json({ error: 'Failed to get conversations' });
  }
});

// ── Save game progress ──
app.post('/api/progress', async (req, res) => {
  const { userId, game, level, score } = req.body;
  if (!game || score === undefined) {
    return res.status(400).json({ error: 'game and score are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO progress (user_id, game, level, score)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (user_id, game, level)
       DO UPDATE SET score = GREATEST(progress.score, $4), updated_at = NOW()
       RETURNING *`,
      [userId || 'anonymous', game, level || 1, score]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Save progress error:', err.message);
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

// ── Get game progress ──
app.get('/api/progress/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM progress WHERE user_id = $1',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Get progress error:', err.message);
    res.status(500).json({ error: 'Failed to get progress' });
  }
});

// ── Save grammar progress ──
app.post('/api/grammar/progress', async (req, res) => {
  const { userId, lessonId, completed, score } = req.body;
  if (!lessonId) {
    return res.status(400).json({ error: 'lessonId is required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO grammar_progress (user_id, lesson_id, completed, score)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (user_id, lesson_id)
       DO UPDATE SET 
         completed = EXCLUDED.completed OR grammar_progress.completed,
         score = GREATEST(grammar_progress.score, EXCLUDED.score),
         updated_at = NOW()
       RETURNING *`,
      [userId || 'anonymous', lessonId, completed || false, score || 0]
    );
    res.json(result.rows[0]);
  } catch (err) {
    // If table doesn't exist, just return ok (local storage fallback)
    console.log('Grammar progress save (local only):', err.message);
    res.json({ lessonId, completed, score, fallback: true });
  }
});

// ── Get grammar progress ──
app.get('/api/grammar/progress/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM grammar_progress WHERE user_id = $1',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.log('Grammar progress fetch (local only):', err.message);
    res.json([]);
  }
});

// ── Save grammar note ──
app.post('/api/grammar/notes', async (req, res) => {
  const { userId, lessonId, note } = req.body;
  if (!lessonId) {
    return res.status(400).json({ error: 'lessonId is required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO grammar_notes (user_id, lesson_id, note)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id, lesson_id)
       DO UPDATE SET note = EXCLUDED.note, updated_at = NOW()
       RETURNING *`,
      [userId || 'anonymous', lessonId, note || '']
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log('Grammar note save (local only):', err.message);
    res.json({ lessonId, note, fallback: true });
  }
});

// ── Get grammar notes ──
app.get('/api/grammar/notes/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM grammar_notes WHERE user_id = $1',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.log('Grammar notes fetch (local only):', err.message);
    res.json([]);
  }
});

// ── Save grammar bookmark ──
app.post('/api/grammar/bookmarks', async (req, res) => {
  const { userId, lessonId } = req.body;
  if (!lessonId) {
    return res.status(400).json({ error: 'lessonId is required' });
  }

  try {
    // Toggle bookmark
    const existing = await pool.query(
      'SELECT id FROM grammar_bookmarks WHERE user_id = $1 AND lesson_id = $2',
      [userId || 'anonymous', lessonId]
    );

    if (existing.rows.length > 0) {
      await pool.query(
        'DELETE FROM grammar_bookmarks WHERE user_id = $1 AND lesson_id = $2',
        [userId || 'anonymous', lessonId]
      );
      res.json({ bookmarked: false });
    } else {
      await pool.query(
        'INSERT INTO grammar_bookmarks (user_id, lesson_id) VALUES ($1, $2)',
        [userId || 'anonymous', lessonId]
      );
      res.json({ bookmarked: true });
    }
  } catch (err) {
    console.log('Grammar bookmark toggle (local only):', err.message);
    res.json({ bookmarked: true, fallback: true });
  }
});

// ── Get grammar bookmarks ──
app.get('/api/grammar/bookmarks/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM grammar_bookmarks WHERE user_id = $1',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.log('Grammar bookmarks fetch (local only):', err.message);
    res.json([]);
  }
});

// ── SPA fallback — serve index.html for unknown routes ──
app.get('*', (req, res) => {
  const indexPath = join(distPath, 'index.html');
  if (existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Not found');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`   Static files: ${existsSync(distPath) ? distPath : '(not built yet)'}`);
  console.log(`   GitHub Models: ${process.env.GITHUB_TOKEN ? 'configured ✓' : 'NOT SET ✗'}`);
  console.log(`   Database: ${process.env.DATABASE_URL ? 'configured ✓' : 'NOT SET ✗'}`);
});
