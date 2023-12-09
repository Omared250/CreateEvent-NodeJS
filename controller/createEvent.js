const { response } = require("express");
const Event = require('../models/Event');
const logger = require("../winston-config");


const createEvent = async( req, res = response ) => {

    const event = new Event( req.body.requestBody );

    try {

        event.user = req.body.requestUser;

        const eventSaved = await event.save();

        res.json({
            ok: true,
            event: eventSaved
        })

        logger.info('Event saved', { eventSaved })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Error Saving the event, Talk to the administrator!',
            event: event
        })

        logger.error({ message: 'Error saving event', event: event });
    }
};

module.exports = {
    createEvent,
}