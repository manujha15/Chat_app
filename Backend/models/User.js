const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    about: String,
    profilePicture: String
});

module.exports = mongoose.model("User", UserSchema);
