//let keyword
let s="VHARGAR SAKSHI DHANANJAY";
console.log(s);
/*-----------------------------------------*/
//const keyword
const PI=3.14;
console.log(PI);
console.log("\n");
/*-----------------------------------------*/
//fuction to return value
function sum()
{
    let a=10,b=15;
    let c=a+b;
    return c;
}
let result=sum();
console.log(result);
console.log("\n");
/*-----------------------------------------*/
//use break keyword
let i;
for(i=1;i<10;i++)
{
  if(i==5)
    break;
console.log(i);
}
console.log("\n");
/******************************************************/
//display
console.log(age);
var age=20;
console.log(age);
console.log("\n");
/*-----------------------------------------*/
let city="Pune";
console.log(city);
city="Mumbai";
console.log(city);
console.log("\n");
/*-----------------------------------------*/
const country="India";
console.log(country);
//country="America";
//console.log(country);
console.log("\n");
/*-----------------------------------------*/
//object
const user=
{
    name:"abc"
};
console.log(user);
user.name="xyz"
console.log(user);
console.log("\n");
/******************************************************/
//datatype
let str="hellow world";
let n=12345;
let b=true;
let arr=[1,"abc",["100"]];
let obj={};
console.log(typeof str);
console.log(typeof n);
console.log(typeof b);
console.log(typeof arr);
console.log(typeof obj);
console.log("\n");
/******************************************************/
//arithmetic operator,comparative operator
   let p=10;
   let q=5;
console.log(p+q);
console.log(p-q);
console.log(p*q);
console.log(p/q);
console.log(p%q);
console.log("\n");
if(10=="10")
{
    console.log("values are same");
}
else{
    console.log("values are different");
}
if(10==="10")
{
    console.log("value and datatype are same");
}
else{
    console.log("value are same but datatype are different");
}
console.log("\n");
/******************************************************/
//conversion
let x=parseInt("10");
//let c=x+5;
console.log(x+5);
console.log("\n");
let y=(100).toString();
console.log(y);
console.log(typeof y);
console.log("\n");
let str1="true";
let z=(str1==="true");
console.log(z);
console.log("\n");
/******************************************************/
//conditional 
age=18;
if(age>=18){
    console.log("Adult");
}
else
{
    console.log("Child");
}
console.log("\n");
/*-----------------------------------------*/
no=5;
if(no%2==0){
    console.log("Even");
}
else
{
    console.log("Odd");
}
console.log("\n");
/*-----------------------------------------*/
marks=98;
if(marks>=35){
    console.log("Pass");
}
else
{
    console.log("Fail");
}
console.log("\n");
/******************************************************/
//for,while loop,continue,break keyword
for(i=1;i<=10;i++)
{
    console.log(i);
}
console.log("\n");
/*-----------------------------------------*/
i=10;
while(i>=1)
{
    console.log(i);
    i--;
}
console.log("\n");
/*-----------------------------------------*/
for(i=1;i<=10;i++)
{
    if(i==6) break;
    console.log(i);
}
console.log("\n");
/*-----------------------------------------*/
for(i=1;i<=10;i++)
{
    if(i==5) continue;
    console.log(i);
}
console.log("\n");
/******************************************************/
//increment,decrement oprator
x=5;
console.log(x);
x++;
console.log(x);
console.log("\n");
/*-----------------------------------------*/

y=10;
console.log(y);
y--;
console.log(y);
console.log("\n");
/*-----------------------------------------*/
a=5;
console.log(a++);
console.log(a);
console.log("\n");
/******************************************************/
//function-add 2 numbers
function sum(a,b)
{
    return a+b;
}
result=sum(10,20);
console.log(result);
console.log("\n");
/*-----------------------------------------*/
//function-to check even/odd
function check(a)
{
    if(a%2===0)
        return "even";
    else
        return "odd";
}
console.log(check(9));
console.log(check(8));
console.log("\n");
/*-----------------------------------------*/
//function- to return square
function square(i)
{
    let s=i*i;
    return s;
}
console.log(square(9));
console.log(square(8));
console.log("\n");
/*-----------------------------------------*/
//function- to return square
function greet(name)
{
    return "Hello"+name;   
}
console.log(greet(" Sakshi"));
console.log("\n");
/******************************************************/
//object
const user1=
{
    name:"ABC",
    age:20,
    city:"Pune"
};
console.log(user1.name);
console.log("\n");

user1.city="Mumbai";
console.log(user1.city);
console.log("\n");

user1.role="Developer";
console.log(user1);
console.log("\n");

delete user1.age;
console.log(user1);
console.log("\n");


/*##############################################################################*/
