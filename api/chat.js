export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, systemPrompt, provider } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  // Groq (primary - fast & free)
  const GROQ_KEY = process.env.GROQ_API_KEY;
  // OpenRouter (fallback)
  const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;

  const useProvider = provider === 'openrouter' && OPENROUTER_KEY ? 'openrouter' : 'groq';

  try {
    let response;

    if (useProvider === 'groq' && GROQ_KEY) {
      response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: systemPrompt || 'You are a helpful English tutor.' },
            ...messages,
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });
    } else if (OPENROUTER_KEY) {
      response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_KEY}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o-mini',
          messages: [
            { role: 'system', content: systemPrompt || 'You are a helpful English tutor.' },
            ...messages,
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });
    } else {
      return res.status(500).json({ error: 'No AI API key configured. Set GROQ_API_KEY or OPENROUTER_API_KEY.' });
    }

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('AI API error:', response.status, err);
      return res.status(response.status).json({
        error: err.error?.message || err.message || `AI API error: ${response.status}`
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('AI fetch error:', err.message);
    return res.status(500).json({ error: 'Failed to connect to AI service: ' + err.message });
  }
}
