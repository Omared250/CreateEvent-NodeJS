const { response } = require("express");


const createEvent = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Your first Event!!!',
        note: req.body
    });
};

module.exports = {
    createEvent,
}