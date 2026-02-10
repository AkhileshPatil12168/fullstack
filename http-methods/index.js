const express = require("express");

const app = express();

app.use(express.json());

let data = [];

app.get("/", (req, res) => {
  return res.send("hello");
});

//http methods
// get, > send data to user/client side.
// post, > send data from user/client side.
// put, > to update data/resource from server/traget
// patch, > to updata only single file or minal data from server/target
// delete > to delete resource from server
app.get("/userdata", (req, res) => {
  return res.status(200).send(data);
});

app.post("/userdata", (req, res) => {
  let body = req.body;

  if (!body?.lastName) return res.status(400).send("last name required");

  //   setTimeout(() => {
  // }, 3000);
  data.push(body);

  return res.status(202).send(data);
});

app.put("/userdata", (req, res) => {
  let body = req.body;

  data.push(body);

  return res.send(data);
});

app.delete("/userdata", (req, res) => {
  let body = req.body;

  data.push(body);

  return res.send(data);
});

//status codes
// Successful responses (200 – 299)
// 200, 201,202, 203, 204, 205

// Redirection messages (300 – 399)
// 300, 301,302, 303, 304

app.get("/move", (req, res) => {
  return res.redirect("https://www.google.com/");
});

// Client error responses (400 – 499)
// 400,...,413,414

// Server error responses (500 – 599)
// 500, 501, 502,503,504

//error handeling





app.listen(3000, () => console.log("runnting on 3000"));
