const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/routes");

const app = express();

app.use(express.json());

app.use("/api", Router);

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("running on 3000"));
