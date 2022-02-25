const objectToHtml = (data) => {
    return Object
        .entries(data)
        .filter(e => {
            return (e[0] !== "__v" && e[0] !== 'students')
        })
        .map(entry =>
            (`<b>${entry[0]}:</b> ${entry[1]}<br/>`))
        .join('')
}

const wrapperHtml = (data, code) => {
    return (`
Here is your registration detail.<br/><br/>${objectToHtml(data)}<br/>
Payment will be collected through your school/teacher to confirm your registration. 
`)
}

const wrapperTeacherHtml = (data) => {
    return (`
Here is your registration detail.<br/><br/>${objectToHtml(data)}<br/>
Give your teacher code to your students so that they can register (${data["_id"]}). <br/><br/>
We will send you all the registered students' details once the registration closes to confirm the details. 
Once that's done, We will send an invoice to you with payment due date.<br/><br/>
Best regards, 
NZPMC Team

`)
}

const getBody = (content_title, content_content) => {
    return (
        `
<h1>${content_title}</h1>
<p>${content_content}</p>
<p>If you have any questions, send an email to contact.nzpmc@gmail.com</p>
        `
    )
}


module.exports = {
    objectToHtml,
    wrapperHtml,
    wrapperTeacherHtml,
    getBody
}