/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { createEvent } = require('../controller/createEvent');
const router = Router();

router.post('/', createEvent )

module.exports = router;