const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const resumeRoutes = require('./routes/resume.routes');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

// Middleware
app.use(cors({
  origin: [env.FRONTEND_URL, 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'AI Resume Analyzer API',
    timestamp: new Date().toISOString()
  });
});

// Resume API Routes
app.use('/api/resume', resumeRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
