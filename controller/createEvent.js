const { response } = require("express");
const Event = require('../models/Event');


const createEvent = async( req, res = response ) => {

    const event = new Event( req.body.requestBody );

    try {

        event.user = req.body.requestUser;

        const eventSaved = await event.save();

        console.log(eventSaved);

        res.json({
            ok: true,
            event: eventSaved
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Talk to the administrator!'
        })
    }
};

module.exports = {
    createEvent,
}