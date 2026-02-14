const express = require("express");
const Router = require("./routes/routes");

const app = express();

app.use(express.json());

app.use("/api", Router)

app.listen(3000, () => console.log("runnting on 3000"));
