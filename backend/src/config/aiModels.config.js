/**
 * Configurable Model Priority List for OpenRouter
 * Uses verified OpenRouter free-tier model identifiers.
 */
module.exports = {
  MODEL_PRIORITY_LIST: [
    'deepseek/deepseek-chat:free',
    'deepseek/deepseek-r1:free',
    'google/gemini-2.0-flash-exp:free',
    'meta-llama/llama-3.3-70b-instruct:free',
    'meta-llama/llama-3.2-3b-instruct:free',
    'qwen/qwen-2.5-72b-instruct:free',
    'mistralai/mistral-7b-instruct:free',
    'google/gemma-2-9b-it:free'
  ],
  MODEL_TIMEOUT_MS: 25000, // 25 seconds per attempt
  MAX_RETRIES_PER_MODEL: 1
};
