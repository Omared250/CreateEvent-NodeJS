require('newrelic');
const express = require('express');
const { dbConnection } = require('./dataBase/config');
require('dotenv').config();


// create express server
const app = express();

// DataBase
dbConnection();

// Public Directory
app.use( express.static('public') );

// read and parse body
app.use( express.json() );

// routes
app.use('/api/events', require('./routes/events'));


// Listening
app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`);
} )

// This is a test regardig CI/CD