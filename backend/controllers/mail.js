const mailRouter = require('express').Router()
const Teacher = require('../models/teacher')
const {sendEmailWithCSV} = require('../mailing')
const fs = require('fs')


const generateCSV = (teacher) => {
    const {students, name, email, schoolName, schoolAddress} = teacher

    let csv = "data:text/csv;charset=utf-8,"
    csv += 'StudentName,StudentEmail,StudentYearLevel,TeacherName,TeacherEmail,SchoolName,SchoolAddress\n';
    students.forEach(s => {
        const row = [s.name, s.email, s.yearLevel, name, email, schoolName, schoolAddress]
        csv += row.join(',')
        csv += '\n'
    })

    return encodeURI(csv)
}

mailRouter.get('/:id', async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id).populate('students')

        if (teacher) {
            const csvFile = generateCSV(teacher)
            const today = new Date()
            const date = today.getUTCDay()+" "+today.getUTCMonth()
            const emailBody = {
                to: teacher.email,
                subject: `Update ${date}: Registration CSV for ${teacher.name} from ${teacher.schoolName}`,
                html: "You can find the details of all the students registered under you. Inform us of any changes to be made to the details.",
                csv: csvFile,
                fileName: teacher.schoolName+"_"+teacher.name+"_registrations.csv"
            }
            sendEmailWithCSV(emailBody)
            res.status(200).end()
        } else {
            res.status(404).end()
        }

    } catch (e) {
        console.log(e)
        res.status(400).json(
            {
                error: "Make sure that you have input a valid teacher code"
            }
        ).end()
    }

})

module.exports = mailRouter



// const generateCSV = (teacher) => {
//     const {students, name, email, schoolName, schoolAddress} = teacher
//     let tableData = ``
//     students.forEach(s => {
//         const row = [s.name, s.email, s.yearLevel, name, email, schoolName, schoolAddress]
//         tableData+='<tr>'
//         row.map(e=>{
//             let rowHtml = `<td>${e}</td>`
//             tableData+= rowHtml
//         })
//         tableData+='</tr>'
//     })
//
//
//     let table = `<table>
// <tr>
//     <th>StudentName</th>
//     <th>StudentEmail</th>
//     <th>StudentYearLevel</th>
//     <th>TeacherName</th>
//     <th>TeacherEmail</th>
//     <th>SchoolName</th>
//     <th>SchoolAddress</th>
// </tr>
// ${tableData}
// </table>`
//
//     return table
//
//     // return {
//     //     href: 'data:text/csv;charset=utf-8,' + encodeURI(csv),
//     //     target: '_blank',
//     //     download: `${schoolName}_${name}_registration.csv`
//     // }
// }