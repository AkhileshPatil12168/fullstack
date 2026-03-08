const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/routes");
require("dotenv").config();
const cors = require("cors")

const app = express();

app.use(express.json());

app.use(cors())

app.use("/api", Router);

console.log(process.env.MONGODB_URL);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 4000, () =>
  console.log("running on " + process.env.PORT || 4000),
);
