const userModel = require("../../models/userModel");
require("dotenv").config();

const createUser = async (req, res) => {
  try {
    let body = req.body;

    body.password = await bcrypt.hash(body?.password, process.env.SALT_ROUND);

    let data = await userModel.insertOne(body);

    return res
      .status(200)
      .send({ status: true, message: "user created", data: "" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = createUser;
