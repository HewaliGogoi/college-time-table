const mongoose = require('mongoose');

const Department = new mongoose.Schema({
    dept_name : {type : String, required : true},
    course : {type : String, required : true},
    instructor : {type : mongoose.Schema.Types.ObjectId, ref : 'instructor'},
    slots : {type : mongoose.Schema.Types.ObjectId, ref : 'allSlots'}
})

module.exports = mongoose.model('department', Department);