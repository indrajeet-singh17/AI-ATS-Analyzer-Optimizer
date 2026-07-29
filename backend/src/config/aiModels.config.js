/**
 * Configurable Model Priority List for OpenRouter
 * The AI service will sequentially try models in this list if prior models fail.
 */
module.exports = {
  MODEL_PRIORITY_LIST: [
    'deepseek/deepseek-chat-v3:free',
    'deepseek/deepseek-r1:free',
    'qwen/qwen3-235b-a22b:free',
    'qwen/qwen3-coder:free',
    'meta-llama/llama-4-scout:free',
    'meta-llama/llama-3.3-70b-instruct:free',
    'meta-llama/llama-3.2-3b-instruct:free',
    'mistralai/mistral-small:free',
    'google/gemma-3-27b-it:free',
    'google/gemma-3-12b-it:free',
    'anthropic/claude-3.5-sonnet'
  ],
  MODEL_TIMEOUT_MS: 30000, // 30 seconds per attempt
  MAX_RETRIES_PER_MODEL: 1
};
