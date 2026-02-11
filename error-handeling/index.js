const e = require("express");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("hello");
});

let data = [
  {
    name: "abc",
    age: 22,
    createdAt: 1770779380181,
  },
  {
    name: "abc",
    age: 22,
    createdAt: 1770779398592,
  },
  {
    name: "abc",
    age: 23,
    createdAt: 1770779409258,
  },
  {
    name: "xyz",
    age: 20,
    createdAt: 1770779418673,
  },
];

app.post("/post-data", (req, res) => {
  if (req.headers["content-type"] != "application/json")
    res.status(400).send({ statusCode: 400, mess: "data should be in json" });

  console.log(req.headers["test"])
//   let { name, age } = req.body;

//   if (!name)
    // res.status(400).send({ statusCode: 400, mess: "name is requried" });
  //   throw new Error(
  //     JSON.stringify({ statusCode: 400, mess: "name is requried" }),
  //   );

  // if (!age)
  //   throw new Error(
  //     JSON.stringify({ statusCode: 400, mess: "age is requried" }),
  //   );

//   let userData = { ...body, createdAt: Date.now() };
//   data.push(userData);

  return res.status(201).send({
    status: true,
    data,
  });
});

app.get("/get-data", (req, res) => {
  try {
    return res.send(req.headers);

    return res.status(200).send({
      status: true,
      data,
    });
  } catch (error) {
    return res.status(500).send({
      status: false,
      message: error?.message,
    });
  }
});

app.use("/abc", (req, res) => {
  return res.status(200).send({ status: true, message: " found" });
});

app.use("/", (req, res) => {
  return res.status(404).send({ status: false, message: "not found" });
});

/**
 * headers
 * data about data
 * security credentials
 * cookies send/get from headers
 *
 *
 */

app.listen(3000, () => console.log("runnting on 3000"));
