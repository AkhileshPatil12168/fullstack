const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  address: Object,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("users", userSchema);
