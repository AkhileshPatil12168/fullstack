//async - call back, promises, async/await
// try catch
//settimeout setinterval

//call back
//map((e,i,a)=>{})

// passing as argument and calling it inside of the function
// function abc(a = false) {
//   console.log("hello");
//   if (a) return a();
//   else console.log("no replay");
// }

// abc(() => console.log("bye"));

//promises
// pending, fulfilled, rejected

// new Promise

// let a = false;

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     a ? resolve("true") : reject("false");
//   }, 2 * 1000);
// });

// console.log(
//   promise1.then((value) => {
//     console.log(value);
//   }).catch((value)=>{
//     console.log(value)
//   }),
// );

// console.log(promise1);

// let a = false;
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (a) resolve("0sec");
//     else reject("faild");
//   }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   resolve("0sec");
// });
// const promise3 = new Promise((resolve, reject) => {
//   if (a)
//     setTimeout(() => {
//       a = true;
//       resolve("2sec");
//     }, 5000);
// }); //2

// promise1.then((value) => console.log(value)).catch((v) => console.log(v));
// promise2.then((value) => console.log(value))
// promise3.then((value) => console.log(value)).catch((v) => console.log(v));

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((v) => console.log(v));

//asyc-await

// function abc() {
// //   let res;
//  return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json()) // convert to JSON
//     .then((data) => {
//       res = data;
//       return res // API data here
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//     });
// //   return res;
// }

// console.log(abc().then(res=>console.log(res)));

// async function xyz() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response)
//     const data = await response.json();
//     console.log(data)
//     return data;
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// using it
// xyz()
// .then(result => {
//   console.log(result);
// });

//settimeout setinterval

// let a = 0;
// let timeOut = setTimeout(() => {
//   console.log("hello");
// }, 3000);

// let interval = setInterval(() => {
//   a++;
//   if (a == 2) clearTimeout(timeOut);
//   console.log(a);
//   if (a == 5) clearInterval(interval);
// }, 1000);

console.log("hellow")
