//find() includes() join() sort(), fill() , .concat(), flat(), indexOf(), slice(), splice()

// let arr = [
//   { fname: "Sagar", lname: "Vedpathak" },
//   { fname: "Sakshi", lname: "Vhargar" },
//   { fname: "Vaibhav", lname: "Bhoi" },
//   { fname: "Yash", lname: "Holkar" },
// ];

// let arr = [10, "a", "b", "c", 10, "c", 20];

//find
// let result = arr.find((element)=> typeof element == "string")
// console.log(result)

// findIndex()
// let result = arr.findIndex((element)=> typeof element == "string")
// console.log(result)

//indexOf(),
// let result = arr.indexOf("c")
// console.log(result)

//includes
// let result = arr.findIndex((element)=> typeof element == "string")
// console.log(typeof (new Int16Array([15, 33])))
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals == animals.slice());
// Expected output: Array ["camel", "duck"]

// -------------------------------------String-------------------------------------------------

let str = "abecdefg";

console.log(str.length)

// str[4] = "a"
// console.log(str)
let arr = str.split("e")
console.log(arr.join("-"))

// task
// animals == animals.slice() check if its a shallow or deep copy
