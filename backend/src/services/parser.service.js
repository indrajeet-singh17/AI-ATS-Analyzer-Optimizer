const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const logger = require('../utils/logger');

/**
 * Cleans raw extracted text from PDF/DOCX files
 * @param {string} text 
 * @returns {string} Cleaned text
 */
function cleanExtractedText(text) {
  if (!text) return '';
  return text
    .replace(/[\r\n]+/g, '\n') // Normalize multiple line breaks
    .replace(/[ \t]+/g, ' ')   // Normalize spaces/tabs
    .replace(/[^\x20-\x7E\n]/g, '') // Remove non-printable ASCII/control characters
    .trim();
}

/**
 * Parses resume buffer and extracts text
 * @param {Buffer} buffer 
 * @param {string} originalName 
 * @param {string} mimeType 
 * @returns {Promise<string>} Cleaned extracted resume text
 */
async function parseResumeBuffer(buffer, originalName, mimeType) {
  const ext = originalName.split('.').pop().toLowerCase();
  let rawText = '';

  logger.info(`Parsing document: ${originalName} (${ext}, ${mimeType}, ${buffer.length} bytes)`);

  try {
    if (ext === 'pdf' || mimeType === 'application/pdf') {
      const parsedPdf = await pdfParse(buffer);
      rawText = parsedPdf.text || '';
    } else if (['docx', 'doc'].includes(ext) || mimeType.includes('word')) {
      const result = await mammoth.extractRawText({ buffer });
      rawText = result.value || '';
    } else {
      const error = new Error('Unsupported file extension');
      error.code = 'UNSUPPORTED_FILE_TYPE';
      error.statusCode = 400;
      throw error;
    }
  } catch (err) {
    if (err.code === 'UNSUPPORTED_FILE_TYPE') throw err;

    logger.error(`Document parsing failed for ${originalName}: ${err.message}`);
    const error = new Error(`Failed to parse resume document: ${err.message}`);
    error.code = 'PARSE_FAILED';
    error.statusCode = 422;
    throw error;
  }

  const cleanedText = cleanExtractedText(rawText);

  // Minimum text length validation (detect image-only / scanned PDFs)
  if (!cleanedText || cleanedText.length < 50) {
    const error = new Error(
      "This looks like a scanned or image-based resume, which isn't supported yet. Please provide a text-based PDF or DOCX file."
    );
    error.code = 'PARSE_FAILED';
    error.statusCode = 422;
    throw error;
  }

  logger.info(`Extracted ${cleanedText.length} characters of clean text from ${originalName}`);
  return cleanedText;
}

module.exports = {
  parseResumeBuffer,
  cleanExtractedText
};
