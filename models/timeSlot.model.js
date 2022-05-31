const mongoose = require('mongoose');

const TimeSlot = new mongoose.Schema({
    start : {type : Number, required: true},
    end : {type : Number, required: true},
})

module.exports = mongoose.model('timeSlot', TimeSlot);