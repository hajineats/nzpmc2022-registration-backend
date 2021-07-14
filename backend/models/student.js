const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    name: {
        required: true,
        type: String
    },
    yearLevel: {
        required: true,
        type: String
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }
})


module.exports = mongoose.model('Student', studentSchema)