// loops - break and continue statements

//continue

// for (let i = 1; i <= 6; i++) {
//   if (i == 5) continue;
//   console.log(i);
// }
// console.log("loop completed")

//break

// let i = 0;

// while (i <= 10) {
//   if (i == 5) break;
//   console.log(i);
//   i++;
// }

// console.log("loop completed")

//pre and post increment/decrement

// i++
// i--
// ++i
// --i

// let a = 10;
// console.log(a);
// console.log(++a);

// let b = 5;
// console.log(b);
// console.log(b++);
// console.log(b)

//-----------------------------------------------------
//function
// function firstFun(a=5) {
//   let sum = a + 10;
//   return sum;
// }
// let result = firstFun();
// console.log(result);

//callback backfunctions

// function mainFun(a) {
//   return a();
// }

// console.log(
//   mainFun(function () {
//     return "hello im call back fun";
//   }),
// );

//anonymous functions = function (){}

//first class funtions
/* 
function as a variable
pass as a argument 
return from another function

 
*/
// let a = function (){
//   console.log("heloo")
// }
// a= function (){
//   return "10"
// }
// console.log(a())

// ---------------------------------------

// comments= single line // and multi line /**/

// let a = 10; // this a contain value of 10

/*
hello
asdf
function
*/

// ---------------------------------------------

//scops in js
//global
//functional
//block

// let b = 50
// var c =20

// function abc(value){
//   let a = 10
//   return b
// }
// console.log(b)

// console.log(abc())

// {
//   let a = "hello"
// }
// if(true){
//   let value = "asdf"
// }

// console.log(value)

// ------------------------------
// hoisting
// console.log(abc);

// var abc = function(){
//   return "hello"
// }

// console.log(a());
