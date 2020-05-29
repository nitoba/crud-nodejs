const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    }
})

module.exports = model('User', UserSchema);