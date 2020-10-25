const Register= require("../../schemas/register");

module.exports = async (req, res) => {
  try {
    let RegisteredUser = await Register.find();
    res.json(RegisteredUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};
