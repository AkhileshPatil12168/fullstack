const userModel = require("../../models/userModel");

const getUsers = async (req, res) => {
  try {
    const userData = await userModel.find({ isDeleted: false });
    return res
      .status(200)
      .send({ status: true, message: "users found", userData });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const pathParams = req.params;
    const userData = await userModel.findOne({
      _id: pathParams?.userId,
      isDeleted: false,
    });

    if(!userData)  return res
      .status(400)
      .send({ status: false, message: "user not found" });
    return res
      .status(200)
      .send({ status: true, message: "user found", userData });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { getUsers, getUser };
