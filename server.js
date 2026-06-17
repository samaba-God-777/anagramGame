import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
// In production, serve from dist/ (built files)
// In development, serve from project root
const distPath = join(__dirname, 'dist');
const rootPath = __dirname;

if (existsSync(distPath)) {
  app.use(express.static(distPath));
}
app.use(express.static(rootPath));

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// ── OpenAI Chat Proxy ──
app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not configured on server' });
  }

  const { messages, systemPrompt } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
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
      console.error('OpenAI API error:', response.status, err);
      return res.status(response.status).json({ error: err.error?.message || 'OpenAI API error' });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('OpenAI fetch error:', err.message);
    res.status(500).json({ error: 'Failed to connect to OpenAI API' });
  }
});

// ── SPA fallback — serve index.html for unknown routes ──
app.get('*', (req, res) => {
  const indexPath = existsSync(distPath)
    ? join(distPath, 'index.html')
    : join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`   Static files: ${existsSync(distPath) ? distPath : rootPath}`);
  console.log(`   OpenAI API: ${process.env.OPENAI_API_KEY ? 'configured ✓' : 'NOT SET ✗'}`);
});
