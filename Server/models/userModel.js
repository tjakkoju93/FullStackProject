const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // helps in hasing password
// const { decrypt } = require("dotenv");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

//static signup function
userSchema.statics.userSignup = async (email, password) => {
  const exists = await User.findOne({ email: email });
  // console.log(exists)
  // console.log("email  exists")
  if (exists) {
    throw new Error("Email already Exists");
  }
  const salt = await bcrypt.genSalt(10); //10 level security is standard added and salt will add aditional hashing to the password
  const hash = await bcrypt.hash(password, salt);
  const user = await User.create({ email, password: hash });
  return user;
};

//static login function
userSchema.statics.userLogin = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw Error("Incorrect email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
