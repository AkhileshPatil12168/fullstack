const userModel = require("../../models/userModel");

const createUser = async (req, res) => {
  try {
    const body = req.body;

    let data = await userModel.insertOne(body);

    return res
      .status(200)
      .send({ status: true, message: "user created", data });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = createUser;
