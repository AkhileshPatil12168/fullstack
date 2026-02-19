const JWT = require("jsonwebtoken");
const authorization = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    let token = authorization?.split(" ")[1];
    let decodedToken;
    JWT.verify(token, process.env.JWT_SECRETE, (err, decodedToken) => {
      if (err) {
        return res.status(401).send({
          status: false,
          message: "token might be expried or not valid",
        });
      } else {
        decodedToken = decodedToken;
        next();
      }
    });

    console.log(decodedToken);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = authorization