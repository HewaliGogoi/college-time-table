const mongoose = require('mongoose');
const AllSlots = require('./allSlots.model');

const Classroom = new mongoose.Schema({
    name : {type : String, required: true},
    capacity : {type : Number, required: false},
    slots : {type : mongoose.Schema.Types.ObjectId, ref : AllSlots}
})

module.exports = mongoose.model('classroom', Classroom);