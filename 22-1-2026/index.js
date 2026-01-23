//object array string

//object -----------------------------------------------------

let user = {
  //  key        value
  name: "yash",
  age: 19,
  email: "yash@gmail.com",
  isMale: true,
  address: {
    country: "India",
    state: "MH",
  },
  phone: [9875868597, 4758659857],
};

// let a = "email"
// console.log(user.a)
// console.log(user[a])

//lastname = lName

// user.lName = "holkar"
// user["dob"] = "1-1-2001"

// console.log(user)

// delete user.age
// delete user["address"]

// console.log(user)

//this
// let user = {
//   //  key        value
//   name: "yash",
//   age: 19,
//   email: "yash@gmail.com",
//   isMale: true,
//     address: {
//       // country: "India",
//       state: "MH",
//     },
//   phone: [9875868597, 4758659857],
//   fun: function (a) {
//     console.log(this);
//     return "user age is " + this[a];
//   },
// };

// console.log(user.fun("address"))

//destructuring
// let {name : fname, age} = user
// age = 10
// console.log(fname)

//optional chaining

// console.log(user?.address?.country);
// console.log(user?.["address"]);

// console.log("hello");

//JSON
// let user = {
//   //  key        value
//   name: "yash",
//   age: 19,
//   email: "yash@gmail.com",
//   isMale: true,
//   address: {
//     // country: "India",
//     state: "MH",
//   },
//   phone: [9875868597, 4758659857],
//   fun: function (a) {
//     console.log(this);
//     return "user age is " + this[a];
//   },
// };
// let keys = Object.keys(user)
// let values = Object.values(user)
// console.log(keys)
// console.log(values)

//for in loop
// for (let key in user) {
//     if(key == "age") delete user[key]
// //   console.log(key, user[key]);
// }


//shawllo copy and deepcopy
// stringify and parse

