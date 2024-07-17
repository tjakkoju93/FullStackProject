const User = require("../models/userModel");
const createToken = require("../utils/token");

//Login user

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.userLogin(email, password);
    //crerate token
    const token = await createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//Signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body; 


  try {
    const user = await User.userSignup(email, password);

    //crerate token
    const token = await createToken(user._id);
    res.status(200).json({ email, password, token });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
