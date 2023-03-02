var nodemailer = require('nodemailer');

var transporter = nodemailer. createTransport({
    service: 'gmail',
    auth: {
        user: "shawntez299@gmail.com",
        pass: "ydcyukbbxmkjoajx"
    }
});

var mailOptions = {
    from:"shawntez.malone1@gmail.com",
    to: "ttjohns56@gmail.com",
    subject:"Hi",
    text: "Nother 1 baby I could spam yo shit!"
};

transporter.sendMail(mailOptions, function(err,info) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent ' + info.response);
    }
})