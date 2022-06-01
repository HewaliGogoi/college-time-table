const express = require('express');
const router = express.Router();

const crudController = require('./crud.controller');
const TimeSlot = require('../models/timeSlot.model');
const AllSlots = require('../models/allSlots.model');

router.post('/slot', crudController(TimeSlot).timeSlot);

router.get('/allslots', crudController(AllSlots).allSlots);

module.exports = router;