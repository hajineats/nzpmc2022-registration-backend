const teacherRouter = require('express').Router()
const Teacher = require('../models/teacher')
const {wrapperTeacherHtml} = require("../util");
const {getBody} = require("../util");
const {sendEmail} = require('../mailing')

teacherRouter.get('/', async (req, res)=>{
    const teachers = await Teacher.find({})
        .populate('students')

    res.json(teachers.map(t=>t.toJSON()))

})
teacherRouter.post('/gotHere', (req,res)=>res.send("hello"))

teacherRouter.post('/csv',
    async (
        req,
        res)=>{
    const body = req.body
    const teacher = await Teacher.findById(body.teacherCode)
        .populate('students')
    if(!teacher) {
        res.status(400).json(
            {
                error: "teacher does not exist"
            }
        ).end()
        return
    }
    console.log(teacher)
    // send teacher
    res.json(teacher)
})


teacherRouter.post('/', async (req, res, next)=>{
    const body = req.body
    //check teacher doesn't already exist, based on email
    const findByEmail = await Teacher.findOne({email:body.email})
    if(findByEmail){
        res.status(400).json(
            {
                error: "teacher already exists"
            }
        ).end()
    }else{
        const newTeacher = new Teacher({
            name: body.name,
            email: body.email,
            schoolName: body.schoolName,
            schoolAddress: body.schoolAddress,
        })

        try{
            const savedTeacher = await newTeacher.save()
            res.json(savedTeacher)
            const emailBody = getBody("Thanks for your registration",
                wrapperTeacherHtml(savedTeacher.toJSON()))

            sendEmail({
                to: body.email,
                subject: "Thank you for registering into The NZPMC 2020",
                html: emailBody
            })
        }catch{
            res.status(400).json(
                {
                    error: "Make sure to fill out all textfields"
                }
            ).end()
        }

    }
})

teacherRouter.delete('/:id', async (req, res)=>{
    await Teacher.findByIdAndRemove(req.params.id)
    res.status(204).end()
})


module.exports = teacherRouter