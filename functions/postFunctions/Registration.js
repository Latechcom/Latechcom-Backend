const nodemailer = require("nodemailer");
const axios = require('axios');
const endpoint="http://localhost:5005/leaner/registration"

// async..await is not allowed in global scope, must use a wrapper
async function condirmationText(email, name) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
   
    service: 'gmail',
    
    secure: false, // true for 465, false for other ports
  auth: {
    user: 'latechcom.confirm@gmail.com',
    pass: 'Covid2020'
  }
  });


  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Latecom  Tech 👨‍💻 👩‍💻" <latechcom.confirm@gmail.com>', // sender address
    // to: "bar@example.com, baz@example.com", // list of receivers
    to:email,
    subject: `Hello ${name}`, // Subject line
    text: "Hello world", // plain text body
    html: `<b>Hello ${name}</b> <br><br>` + "<p>Thank you for registering</p>" + "<p>This is just a quick email from <b>Latechcom</b> to say we acknowledge your registration</p>"+"<p>We will get back to you via a mail as soon as we begin</p>"+"<p>In the meantime, if you have any question, you can reach out through <b>latechcom.confirm@gmail.com</b> and we will be happy to respond</p>"+"<br><hr><p><b>Stay Safe</b> <br>Latechcom Tech</p>" , // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


async function uniqueEmail() {

  axios.get(endpoint).then(resp => {
let data = resp.data
  // data.map(user=>user.email.find("oshiesam@gmail.com"));
  console.log(data)
});
}


const Register = require('../../schemas/register')

module.exports = async (req, res) => {
  let Registration = new Register(req.body)
  
  Registration.save()
    .then(Registration => {
      res.status(200).json({ Registration: 'Registration was successfully' })
      console.log(Registration)
      uniqueEmail()
      condirmationText(Registration.email, Registration.name).catch(console.error);

    })
    .catch(err => {
      res.status(400).send('adding new Registration failed')
    })
}
