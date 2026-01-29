//for of loop

let arr = ["a", 10, "b", 20, "c", "30"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }
//  0:   1:   2            5
// ["a", 10, "b", 20, "c", "30"];

// console.log(typeof arr)

// let obj = {
//     0: "abc"
// }

// console.log(obj[0])

// for (let element  of arr) {
//     if(element == "c") break
//   console.log(element);
// }
arr = ["a", 10, "b", 20, "c", 30];

//forEach
// let result = arr.forEach(ele => console.log(ele));

// console.log(result);

//map()
// ["a",..."30"]

// "a"+10 == a10
// "a"-10 == NaN

arr = ["a", 10, "b", 20, "c", 30];

// let result = arr.map((ele) => {
//   console.log(ele);
//   return typeof ele == "string";
// });

// console.log(result);

//filter
// arr = ["a", 10, "b", 20, "c", 30];

// let filterResult = arr.filter(ele => typeof ele == "string");

// console.log(filterResult);

arr = [5000, -100, -1000, 2000, -300];
// 4900
// 3900
// 5900
// 5600
//reduce      .reduce((accumulator, currentValue) => {}, initialValue)
// let reduceResult = arr.reduce((accumulator, currentValue) => {
//   if (typeof currentValue == "number") return accumulator + currentValue;
//   else return 0 + accumulator
// }, 0)

let reduceResult = arr
  .filter((value) => value < 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(reduceResult);

// 0  0+a 0a > 0a + 10 > 0a10

// arrow function  ()=>{} / ()=>

// function abc(){}
// does not have function keyword
//hoisting not allowed
//always assign name in variable
//treated as variable
//does not requried return keyword

// let abc = (value,value2) => value+" "+value2;

// console.log(abc("abcdef", "ghijk"));
