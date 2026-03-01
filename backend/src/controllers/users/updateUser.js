const userModel = require("../../models/userModel");

const updateUser = async (req, res) => {
  try {
    const pathParams = req.params;
    const body = req.body;

    const updatedData = await userModel
      .findByIdAndUpdate(pathParams.userId, body, { returnDocument: "after" })
      .select({ password: 0, updatedAt: 0, createdAt: 0 });

    return res
      .status(200)
      .send({ status: true, message: "user updated", updatedData });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = updateUser;
