const express = require('express');
require('dotenv').config();


// create express server
const app = express();

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