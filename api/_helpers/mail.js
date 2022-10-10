const nodemailer = require("nodemailer");

module.exports = {
  async sendMail(to, subject, text, html) {
    try {
      const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "mail.tuteloop.ca",
        auth: {
          user: 'teamsupport@tuteloop.ca',
          pass: 'h}Op(}by]mPM',
        },
        secure: true,
      });

      const mailData = {
        from: 'teamsupport@tuteloop.ca',  // sender address
        to: to ,   // list of receivers
        subject: subject,
        text: text,
        html: html,
      };

      await transporter.sendMail(mailData, function (err, info) {
        if (err)
          console.log({status: "failed", error: err})
        else
          console.log( {status: "success", error: info})

      });
    } catch (e) {
      console.log(e)
    }
  }
}
