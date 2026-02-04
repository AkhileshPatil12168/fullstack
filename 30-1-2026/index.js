// map filter rduce

let arr = ["Sagar Vedpathak", "Sakshi Vhargar", "Vaibhav Bhoi", "Yash Holkar"];

// {
//     fname:"",
//     lname:""
// }

// return new array, itrate on evey element of array, requrid a return

let modifiedArr = arr.map((element, inedx, array) => {
  let fLName = element.split(" ");
  return {
    fname: fLName[0],
    lname: fLName[1],
  };

  // console.log(element)
});
console.log(modifiedArr);

// arr = [
//   "Sagar Vedpathak",
//   " ",
//   "Sakshi Vhargar",
//   " ",
//   " ",
//   9,
//   "Vaibhav Bhoi",
//   "Yash Holkar",
// ];

//return new array,
// itrate on evey element of array,
// requrid a return,
// requrid a condition with true value to return or it will gives empty array

// let filteredData = arr
//   .filter((value) => {
//     if (typeof value == "string" && value.length >= 4) return true;
//   })
//   .map((element) => {
//     let fLName = element.split(" ");
//     return {
//       fname: fLName[0],
//       lname: fLName[1],
//     };
//   });

// console.log(filteredData);

// arr = ["Sagar Vedpathak", "Sakshi Vhargar", "Vaibhav Bhoi", "Yash Holkar"];

// student avalibel in class name, name, name and name

//itrate on evey element of array,
// requrid a return,
//return a combined / singel vlaue
// req acc and default

// let result = arr
//   .filter((value) => {
//     if (typeof value == "string" && value.length >= 4) return true;
//   })

//   .reduce((acc, cru, i) => {
//     //  console.log(i)
//     let setValue;
//     if (i == 0) setValue = "";
//     else if (i == arr.length - 1) setValue = " and ";
//     else setValue = ", ";

//     return acc + setValue + cru;
//   }, "student avalibel in class ");

// console.log(result);

//shallow and deep copy
//find() includes() join() sort(), fill() , .concat(), flat(), indexOf(), slice(), splice()

// a,b , c, d ..., z

// let arr = ["abc", [1, 2], 10, { name: "yash" }];
// ref / addre
// spread oprator
// let newArr = [...arr];
// newArr[1].push(3)
// newArr[2] = 100;
// newArr[3].name = "Sakshi";

// console.log(newArr);

// console.log(arr);

// arr = ["abc", [1, 2], 10, { name: "yash" }];
//strigify and parse
// console.log(typeof arr)
// let newArr = arr
// console.log(arr == newArr)

// let newArr = JSON.parse(JSON.stringify(arr))


// newArr[1].push(30)
// newArr[3].name = "Sakshi"

// console.log(newArr)
// console.log(arr)







