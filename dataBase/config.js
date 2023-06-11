const mongoose = require('mongoose');

const dbConnection = () =>  {

    try {
        mongoose.connect( process.env.DB_CNN );
        console.log('DB online');
    } catch (err) {
        console.log(err);
        throw new Error('Error trying to initialice Data Base!')
    }

};

module.exports = {
    dbConnection,
}