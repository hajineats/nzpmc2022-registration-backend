// https://myaccount.google.com/lesssecureapps
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contact.nzpmc@gmail.com',
        pass: 'earl.2017'
    }
});


const sendEmail = function({to, subject, html}){
    console.log('this is html', html)
    const mailOptions = {
        from: 'contact.nzpmc@gmail.com',
        to: to,
        subject: subject,
        html: html,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
const sendEmailWithCSV = function({to, subject, html, csv, fileName}){
    const mailOptions = {
        from: 'contact.nzpmc@gmail.com',
        to: to,
        subject: subject,
        html: html,
        attachments: [
            {
                filename: fileName,
                path: csv
            }
        ]
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendEmail,
    sendEmailWithCSV,
}
