const express = require('express');


// create express server
const app = express();


// routes
app.get('/', (req, res) => {
    console.log('/ needed');
    res.json({
        ok: true
    })
});


// Listening
app.listen( 4001, () => {
    console.log(`Server running on port ${ 4001 }`);
} )