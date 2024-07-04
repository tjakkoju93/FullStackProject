const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // helps in hasing password

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
userSchema.statics.signup = async (email, password) => {
    console.log("ababbaba")
  const exists = await User.findOne({ email });
  if (exists) {
    throw Error("Email already Exists");
  }
  console.log("object")
//   const salt = await bcrypt.genSalt(10); //10 level security is standard added and salt will add aditional hashing to the password
//   const hash = await bcrypt.hash(password, salt);
  const user = await User.create(email, password);
  console.log("object")
  return user;
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
