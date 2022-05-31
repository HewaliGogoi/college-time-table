const mongoose = require('mongoose');
const TimeSlot = require('./timeSlot.model');

const AllSlots = new mongoose.Schema({
    slots : [{type : mongoose.Schema.Types.ObjectId, ref : TimeSlot}]
})

module.exports = mongoose.model('allSlots', AllSlots);