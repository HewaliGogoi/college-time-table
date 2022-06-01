const mongoose = require('mongoose');

const Classroom = new mongoose.Schema({
    name : {type : String, required: true},
    capacity : {type : Number, required: false},
    slots : {type : mongoose.Schema.Types.ObjectId, ref : "allSlots"}
})

module.exports = mongoose.model('classroom', Classroom);