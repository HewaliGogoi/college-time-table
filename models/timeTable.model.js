const mongoose = require('mongoose');

const TimeTableManagement = new mongoose.Schema({
    course : {type : String, required : true},
    dept : {type : String, required : true},
    instructor : {type : String, required : true},
})