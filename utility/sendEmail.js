var nodemailer = require('nodemailer');
async function sendEmail(option) {
    try {
      // email configuration=> transport
      const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: "namantaneja0770@gmail.com",
          pass: "dqdwvtihkvydayxi"
        }
      })
      // email options
      const emailOptions = {
        from: "namantaneja0770@gmail.com",
        to: option.to,
        subject: option.subject,
        text: "I am testing email",
        html: option.link
      }
      console.log(option.link);
      // send mail
      await transport.sendMail(emailOptions);
    } catch (err) {
      console.log(err);
    }
}

module.exports.sendEmail = sendEmail;
