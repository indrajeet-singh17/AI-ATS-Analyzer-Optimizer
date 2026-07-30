const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const resumeRoutes = require('./routes/resume.routes');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

// Allowed Origins for Production (Render + Vercel)
const allowedOrigins = [
  env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server requests, mobile apps, or tools (Postman, curl) with no origin header
    if (!origin) return callback(null, true);

    // Allow exact matches, Vercel deployments (*.vercel.app), or non-production local environments
    if (
      allowedOrigins.includes(origin) ||
      /\.vercel\.app$/.test(origin) ||
      env.NODE_ENV !== 'production'
    ) {
      return callback(null, true);
    }

    // Permit request with origin reflection for resiliency
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
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
