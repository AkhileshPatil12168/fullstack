const userModel = require("../../models/userModel");

const loginUser = async (req, res) => {
  try {
    let { phone, password } = req.body;

    if (!phone) return res.status(400).send("please enter the phone");
    if (!password) return res.status(400).send("please enter the password");

    const userData = await userModel
      .findOne({ phone, isDeleted: false })
      .select("name phone password");

    if (!userData) return res.status(400).send("account not found");

    if (userData?.password != password)
      return res.status(400).send("phone or password is wrong");

    return res
      .status(200)
      .send({ userData, message: "login successfull", status: true });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = loginUser;
