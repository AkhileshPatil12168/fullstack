
let controller = (req, res) => {
  try {
    return res.send("hello...");
  } catch (error) {
    return res.status(500).send(error?.message);
  }
}




module.exports = controller