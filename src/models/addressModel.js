const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String,
  state: String,
  pincode: Number,
});

module.exports = mongoose.model("address", addressSchema)