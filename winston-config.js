// Import libraries
const { createLogger, format, transports } = require('winston');

// Setup log levels
const customLevels = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
};

// Setup log format
const customFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.json(),
//   format.printf(({ timestamp, level, message }) => {
//     return `${timestamp} [${level}]: ${message}`;
//   })
);

// Create winston logger with custom levels and formats, and add as much transports as you want
const logger = createLogger({
  levels: customLevels,
  format: customFormat,
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

// Export logger to use it within the app
module.exports = logger;