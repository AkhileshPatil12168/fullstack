const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUser = async (req, res) => {
  try {
    let { phone, password } = req.body;

    if (!phone) return res.status(400).send("please enter the phone");
    if (!password) return res.status(400).send("please enter the password");

    if (!(typeof phone != "number") && String(phone).length != 10)
      return res.status(400).send("please enter valid the phone");

    const userData = await userModel
      .findOne({ phone, isDeleted: false })
      .select("name phone password");

    if (!userData) return res.status(400).send("account not found");

    let passwordResult = await bcrypt.compare(password, userData.password);
    // console.log(passwordResult)
    if (!passwordResult)
      return res.status(400).send("phone or password is wrong");

    let token = jwt.sign({ name: userData?.name }, process.env.JWT_SECRETE, {
      expiresIn: 60*5,
    });

    return res.status(200).send({
      data: { name: userData?.name, phone: userData?.phone },
      message: "login successfull",
      status: true,
      token,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = loginUser;
