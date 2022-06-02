const mongoose = require('mongoose');

const Instructor = new mongoose.Schema({
    first_name : {type : String, required: true},
    last_name : {type : String, required: false},
    id : {type : Number, required: true},
    department : [{type : mongoose.Schema.Types.ObjectId, ref : 'department'}],
    slots : {type : mongoose.Schema.Types.ObjectId, ref : "allSlots"}
})

module.exports = mongoose.model('instructor', Instructor);