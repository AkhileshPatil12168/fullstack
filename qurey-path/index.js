const express = require("express");

const app = express();

app.use(express.json());

let data = [
  {
    name: "a",
    age: 22,
    createdAt: 1770779380181,
  },
  {
    name: "b",
    age: 22,
    createdAt: 1770779398592,
  },
  {
    name: "c",
    age: 23,
    createdAt: 1770779409258,
  },
  {
    name: "c",
    age: 20,
    createdAt: 1770779418673,
  },
];

// query and path parameters
//query parameters
//  "/users?age=19"
app.get("/test", (req, res) => {
  try {
    let query = req.query;

    let filteredData = [...data];
    if (query.age) {
      for (let obj of data) {
        // console.log(obj);
        if (obj?.age == query?.age) filteredData.push(obj);
      }
      //   return res.status(200).send(filteredData)
    }

    if (query.name) {
      filteredData = filteredData.filter((obj) => obj?.name == query?.name);
    }

    return res.status(200).send(filteredData);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//path parameter
// "/users/:name"

//https://api.vspireinnovations.com/course/6902fde4e122ea4b07e2baa1
//https://api.vspireinnovations.com/course/6902fde4e122ea4b07e2baba

app.get("/users/:name/:age", (req, res) => {
  try {
    let pathParms = req.params;
    let query = req.query;

    let filterData = data?.filter((obj) => obj?.name == pathParms?.name);
    return res.status(200).send({ pathParms, filterData });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.use("/", (req, res) => {
  try {
    return res.status(404).send("404 not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(3000, () => console.log("runnting on 3000"));
