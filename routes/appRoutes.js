const express = require("express");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const router = express.Router();

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}));

router.post("/api/contact-message", (req, res) => {
   const name = req.body.name;
   const email = req.body.email;
   const phone = req.body.phone;
   const company = req.body.company;
   const message = req.body.message;
   const emailMessage = {
       to: 'marvistechnologies@gmail.com',
       from: 'marvistechnologies@gmail.com',
       subject: `Message From Contact Form - ${name}`,
       text: `Message: ${message}, Company: ${company}, Phone Number: ${phone}, email: ${email}`,
       html: `<ul style="list-style: none; padding: 1rem 1.5rem">
                <li>Message: ${message}</li>
                <li>Company: ${company}</li>
                <li>Phone Number: ${phone}</li>
                <li>email: ${email}</li>
              </ul>`,
   }
   transporter.sendMail(emailMessage).then(sent => {
     console.log("email sent");
     res.status(200).json({ message: "Message sent successfully" });
   }).catch(err => {
      console.log(err);
     res.status(500).json({ message: "Error. Message could not be sent, try again later" });
   })
})

module.exports = router;
