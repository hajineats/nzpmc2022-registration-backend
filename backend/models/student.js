const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    middleName: {
        required: false,
        type: String
    },
    surname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    yearLevel: {
        required: true,
        type: String
    },
    howDidYouHear: {
        required: true,
        type: String
    },
    whatMotivatedYou: {
        required: true,
        type: String
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }
})


module.exports = mongoose.model('Student', studentSchema)