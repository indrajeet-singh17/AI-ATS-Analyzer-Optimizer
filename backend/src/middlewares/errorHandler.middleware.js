const logger = require('../utils/logger');

function errorHandler(err, req, res, next) {
  logger.error('Unhandled Error:', {
    message: err.message,
    stack: err.stack,
    code: err.code
  });

  const statusCode = err.statusCode || err.status || 500;
  const errorCode = err.code || 'INTERNAL_SERVER_ERROR';

  res.status(statusCode).json({
    success: false,
    error: {
      code: errorCode,
      message: err.message || 'An unexpected error occurred. Please try again.'
    }
  });
}

module.exports = errorHandler;
