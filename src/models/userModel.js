const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    name: {type:String, trim:true},
    phone: {type:Number, trim:true},
    password: {type:String, required:true},
    age:Number,
    address: { type: ObjectId, ref: "address" },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("users", userSchema);
