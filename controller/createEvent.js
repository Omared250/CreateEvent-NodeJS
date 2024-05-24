const { response } = require("express");
const Event = require('../models/Event');
const logger = require("../winston-config");


const createEvent = async( req, res = response ) => {
    const event = new Event( req.body.requestBody );
    try {
        event.user = req.body.requestUser;
        const eventSaved = await event.save();
        res.status(201).json({
            ok: true,
            event: eventSaved
        });
        logger.info('Event created successfully', { event: eventSaved });
    } catch (err) {
        const statusCode = err.statusCode || 500;
        const errorMessage = err.message || 'Error Saving the event, Talk to the administrator!';

        res.status(statusCode).json({
            ok: false,
            msg: 'Error Saving the event, Talk to the administrator!',
            event: event
        })

        logger.error('Error creating event', {
            message: errorMessage,
            stack: err.stack,
            statusCode: statusCode
        });
    }
};

module.exports = {
    createEvent,
}