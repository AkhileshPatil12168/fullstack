// const data = require("./data")
// const {filterData, nameCombiner} = require("./utils")

// for, for of, while, dowhile, map, filter, reduce, forEach,

// for(let obj of data){
//     console.log(obj)
// }

// let filteredData = filterData(data);
// console.log(filteredData);

// let final = nameCombiner(filteredData);
// console.log(final);

// -------------------------------------------------------------

// express

// const http = require("http");

// const server = http.createServer((req, res) => {
//   // Set response header
// //   res.writeHead(200, { "Content-Type": "application/json" });

//   if (req.url === "/" && req.method === "GET") {
//     res.end(JSON.stringify({ message: "Home route working!" }));
//   }

//   else if (req.url === "/users" && req.method === "GET") {
//     const users = [
//       { id: 1, name: "Akhil" },
//       { id: 2, name: "Rahul" },
//     ];

//     res.end(JSON.stringify(users));
//   }

//   else {
//     res.writeHead(404);
//     res.end("Route not found");
//   }
// });

// const PORT = 3000;

// server.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

//-------------------------express---------------------------

const express = require("express");
const data = require("./data");
const {filterData, nameCombiner} = require("./utils")


const app = express();
console.log(app)
app.get("/", (req, res) => {
  return res.send({ message: "Home route working! ........" });
});



let filteredData = filterData(data);
console.log(filteredData);

let final = nameCombiner(filteredData);
console.log(final);

app.get("/users", (req, res) => {
  return res.send({ data: final, filteredData });
});

//create two more get apis that send following data.
// 1. sum of two numbers
// 2. [20,-10, 60, 100, -100, 80, 60, 40] . 
// send sum of all numbers,
//  send only positive numbres, 
//  send only negative numbres, 

app.listen(3000, () => console.log("server is running on port 3000"));
