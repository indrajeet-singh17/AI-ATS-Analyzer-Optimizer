const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload.middleware');
const { validateUploadRequest } = require('../middlewares/validate.middleware');
const { analyzeResume } = require('../controllers/resume.controller');

// POST /api/resume/analyze
router.post('/analyze', upload.single('resume'), validateUploadRequest, analyzeResume);

module.exports = router;
