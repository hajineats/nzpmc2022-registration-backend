const studentRouter = require('express').Router()
const Student = require('../models/student')
const Teacher = require('../models/teacher')
const {sendEmail} = require("../mailing");
const {wrapperHtml} = require("../util");
const {getBody} = require("../util");
studentRouter.get('/', async (req, res)=>{
    const teachers = await Student.find({})
    res.json(teachers.map(t=>t.toJSON()))
})

studentRouter.get('/:id', async (req, res)=>{
    const student = await Student.findById(req.params.id)
    if (student) {
        res.json(student.toJSON())
    } else {
        res.status(404).end()
    }
})


studentRouter.post('/', async (req, res)=>{
    const body = req.body

    try{
        //check teacher is registered
        const teacherFound= await Teacher.findById(body.teacher)
        if(!teacherFound){
            res.status(400).json({
                error: "Could not find the teacher. Please double check the code given from your teacher."
            }).end()
        }else{
            const newStudent = new Student({
                firstName: body.firstName,
                middleName: body.middleName,
                surname: body.surname,
                email: body.email,
                yearLevel: body.yearLevel,
                howDidYouHear: body.howDidYouHear,
                whatMotivatedYou: body.whatMotivatedYou,
                teacher: body.teacher
            })
            try{
                console.log('got here')
                const savedStudent = await newStudent.save()
                teacherFound.students = teacherFound.students.concat(savedStudent._id)
                await teacherFound.save()
                console.log('got here too')
                res.json(savedStudent).end()

                const emailBody = getBody("Thanks for your registration",
                    wrapperHtml(savedStudent.toJSON(), savedStudent._id))
                sendEmail({
                    to: body.email,
                    subject: "The NZPMC 2022 Registration",
                    html: emailBody
                })
            }catch(e){
                console.error(e)
                res.status(400).json({
                    error: e.toString()
                })
            }

        }
    }catch(e){
        console.error(e)
        res.status(400).json({
            error: 'teacher code does not exist'
        })
    }

})

studentRouter.delete('/:id', async (req, res)=>{
    await Student.findByIdAndRemove(req.params.id)
    res.status(204).end()
})


studentRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const student = {
        name: body.name,
        email: body.email,
        yearLevel: body.yearLevel,
    }

    Student.findByIdAndUpdate(request.params.id, student, { new: true })
        .then(updatedStudent => {
            if(updatedStudent){
                response.json(updatedStudent.toJSON())
            }
        })
        .catch(error => next(error))
})

module.exports = studentRouter