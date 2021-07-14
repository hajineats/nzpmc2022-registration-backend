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
    return (
        `
Here is your registration detail.
<br/>
<br/>
${objectToHtml(data)}
<br/>
Your payment has to be made under this code and reference:<br/><br/>
<strong>Code: </strong>${code.toString().substring(0, 12)}<br/>
<strong>Reference: </strong>${code.toString().substring(12)}<br/><br/>

<br/><br/>
Send your payment to 31-4123-1234-1234
    `

    )
}

const wrapperTeacherHtml = (data) => {
    return (
        `
Here is your registration detail.
<br/>
<br/>
${objectToHtml(data)}
<br/>
Give your code (_id) to your students so that they can register (${data["_id"]}). <br/><br/>
<br/><br/>
    `

    )
}

const getBody = (content_title, content_content) => {
    return (
        `
            <h1>${content_title}</h1>
            <p>
                ${content_content}
            </p>
            <p>
            If you have any questions, send an email to contact.nzpmc@gmail.com
</p>
        `

    )
}


module.exports = {
    objectToHtml,
    wrapperHtml,
    wrapperTeacherHtml,
    getBody
}