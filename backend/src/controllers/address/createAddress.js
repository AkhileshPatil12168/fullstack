const addressModel = require("../../models/addressModel");
const userModel = require("../../models/userModel");

const createAddress = async (req, res) => {
  try {
    const { userId } = req.params;

    const body = req.body;

    let data = await addressModel.create(body);

    await userModel.findByIdAndUpdate(userId, { address: data._id });

    return res.status(200).send({ status: true, message: "address added", data });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = createAddress;
