const userModel = require("../../models/userModel");

const deleteUser = async (req, res) => {
  try {
    const pathParams = req.params;

    await userModel.findByIdAndUpdate(pathParams?.userId, { isDeleted: true });

    return res.status(200).send({ status: true, message: "user deleted" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = deleteUser;
