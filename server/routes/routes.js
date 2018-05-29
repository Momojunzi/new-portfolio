const express = require('express'),
      router = express.Router(),
      axios = require('axios');
const nodemailer = require('nodemailer');
const creds = require('../config/mailconfig.js')

const transport = {
  service: "Gmail",
  auth: {
    user: "momojunzi@gmail.com",
    pass: "Samuel525"
  }
}

let transporter = nodemailer.createTransport(transport);
transporter.verify((error, success)=> {
  if(error) console.log(error)
  else console.log("server is ready to take messages")
})

router.post("/email", (req,res) => {
  const data = req.body;
  const email = req.body.emailInput;
  const subject = req.body.subjectInput;
  const message = req.body.messageInput;
  const mail = {
    from: email,
    to: 'momojunzi@gmail.com',
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, (err, data)=>{
    if(err) {
      res.json({
        msg:'fail'
      })
    }
    else{
      res.json({
        msg: 'success'
      })
    }
  })
})



module.exports = router;
