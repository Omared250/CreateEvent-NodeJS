const mongoose = require('mongoose');
const logger = require('../winston-config');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('DB Online');
  } catch (error) {
    logger.error('Error initializing DB', {
        message: error.message,
        stack: error.stack,
        name: error.name
    });
  }
};

// Testing CI/CD

module.exports = { dbConnection };