const Register = require('../../schemas/register')

module.exports = async (req, res) => {
  let Registration = new Register(req.body)
  Registration.save()
    .then(Registration => {
      res.status(200).json({ Registration: 'user profile added successfully' })
    })
    .catch(err => {
      res.status(400).send('adding new Registration failed')
    })
}
