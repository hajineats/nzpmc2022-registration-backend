const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    schoolName: {
        required: true,
        type: String
    },
    schoolAddress: {
        required: true,
        type: String
    },
    students:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
})


module.exports = mongoose.model('Teacher', teacherSchema)