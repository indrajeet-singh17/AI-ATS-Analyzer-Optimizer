const OpenAI = require('openai');
const env = require('../config/env');
const logger = require('../utils/logger');

// Initialize OpenAI client configured for OpenRouter
const openaiClient = new OpenAI({
  baseURL: env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
  apiKey: env.OPENROUTER_API_KEY || 'dummy_key',
  defaultHeaders: {
    'HTTP-Referer': env.FRONTEND_URL || 'http://localhost:5173',
    'X-Title': 'AI Resume Analyzer & ATS Optimizer'
  }
});

/**
 * Executes a completion request against OpenRouter for a specific model
 * @param {string} modelName 
 * @param {string} systemPrompt 
 * @param {string} userPrompt 
 * @param {number} timeoutMs 
 * @returns {Promise<string>} Raw text output from model
 */
async function callOpenRouterModel(modelName, systemPrompt, userPrompt, timeoutMs = 35000) {
  logger.info(`Sending completion request to OpenRouter model: [${modelName}]`);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await openaiClient.chat.completions.create({
      model: modelName,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.2, // Low temperature for consistent JSON structure
      max_tokens: 3000
    }, {
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const content = response.choices?.[0]?.message?.content;
    if (!content || !content.trim()) {
      throw new Error(`Empty response returned from model [${modelName}]`);
    }

    return content.trim();

  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error(`Request to model [${modelName}] timed out after ${timeoutMs}ms`);
    }
    throw err;
  }
}

module.exports = {
  callOpenRouterModel
};
