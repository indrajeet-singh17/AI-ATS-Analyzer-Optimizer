const { parseResumeBuffer } = require('../services/parser.service');
const { analyzeResumeText } = require('../services/ai.service');
const logger = require('../utils/logger');

async function analyzeResume(req, res, next) {
  const startTime = Date.now();

  try {
    const file = req.file;
    const jobDescription = req.body.jobDescription || '';

    // 1. Extract raw text from resume buffer (PDF or DOCX)
    const resumeText = await parseResumeBuffer(file.buffer, file.originalname, file.mimetype);

    // 2. Perform AI Analysis via OpenRouter multi-model fallback chain
    const { data: analysisResult, modelUsed } = await analyzeResumeText(resumeText, jobDescription);

    const processingTimeMs = Date.now() - startTime;

    logger.info(`Resume analysis completed successfully in ${processingTimeMs}ms using model [${modelUsed}]`);

    // 3. Return normalized ATS analysis response
    res.status(200).json({
      success: true,
      data: analysisResult,
      meta: {
        modelUsed: modelUsed,
        processingTimeMs: processingTimeMs,
        extractedLength: resumeText.length
      }
    });

  } catch (error) {
    next(error);
  }
}

module.exports = {
  analyzeResume
};
