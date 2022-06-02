const express = require('express');
const router = express.Router();

const crudController = require('./crud.controller');
const TimeSlot = require('../models/timeSlot.model');
const AllSlots = require('../models/allSlots.model');
const Instructor = require('../models/instructor.model');

router.post('/slot', crudController(TimeSlot, AllSlots).timeSlot);

router.get('/allslots', crudController(AllSlots).allSlots);

router.post('/instructorSlot', crudController(Instructor).instructor);

module.exports = router;