function validateUploadRequest(req, res, next) {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'INVALID_REQUEST',
        message: 'No resume file attached. Please select a PDF or DOCX resume.'
      }
    });
  }

  // Sanitize job description if present
  if (req.body.jobDescription && typeof req.body.jobDescription === 'string') {
    req.body.jobDescription = req.body.jobDescription.trim().substring(0, 5000);
  } else {
    req.body.jobDescription = '';
  }

  next();
}

module.exports = {
  validateUploadRequest
};
