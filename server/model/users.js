const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  phonenumber: String,
  address: String,
  password: String,
  confirmpassword: String,
});

module.exports = User = mongoose.model("users", userSchema);
