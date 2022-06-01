const mongoose = require('mongoose');

const AllSlots = new mongoose.Schema({
    slots : [{type : mongoose.Schema.Types.ObjectId, ref : "timeSlot"}]
})

module.exports = mongoose.model('allSlots', AllSlots);