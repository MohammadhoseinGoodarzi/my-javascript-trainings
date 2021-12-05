// section1
// document.getElementById("test").innerHTML = "This is my training ground!";

//section2
// function textChange() {
//   document.getElementById("test").innerHTML = "chage text in section2";
// }

//section3
// document.getElementById("test").innerHTML =
//   "this is third section with document.getElementById()";
// document.write("section3 with document.write()");
// alert("section3 with window.alert() or alert()");
// console.log("section3 with console.log()");
// window.print()

//section4 statement
// let c, a, b;
// a = 5;
// b = 95;
// c = b / a;
// console.log(c); //19

// const z = 400;
// const y = 600;
// let x = (z * y) / 10000; //24
// console.log(x);
// console.log(x - c); //5

//section5 syntax
// let a, title, c, d;
// a = "this is";
// title = " my javaScript trainings";
// c = ", section";
// d = 2 + 3;
// console.log(a + title + c + d); //this is my javaScript trainings, section5

//section6 comments
/* multi line 
comments
is like this
*/

//and this is single line comments

//section7 variables
//var
// var a = 30,
//   b = 7;
// var myName = "Mohammad hosein",
//   age = a - b;

// document.getElementById("test").innerHTML =
//   myName + " " + "is " + age + " " + "year old";

//let
// let name = "mohammad";

// name = "ali";
// let name = "hosein"; //this is wrong
// console.log(name);
// document.getElementById("test").innerHTML = name;

//const
// const myAge = 23;
// myAge = 99; // wrong
// console.log(myAge);

//section8 operators
// const x = 5;
// let y = 4;
// console.log(x * y); //20
// y = 5;
// console.log(x - y); //0
// const z = 10;
// console.log((z ** y) / x);

//section9
// let x = 20;
// let y = 20;
// let z = "MHG";
// console.log(typeof (x == y));
// console.log(typeof x, typeof z);
// x = true;
// console.log(typeof x);

//section10 function
// function shopping(price1, price2) {
//   return price1 + price2;
// }
// console.log(shopping(25, 75));
// let x = shopping(250, 750);
// let y = "i buy 2 thing and it cost " + x + "$";
// console.log(y);

//section11 objects

// const my = {
//   firstName: "mohammad hosein",
//   lastName: "goodarzi",
//   age: 23,
//   job: "learning react",
// };
// console.log(my.firstName, my.lastName, my.age, my.job);

// section12
// function change() {
//   document.getElementById("testb").innerHTML = Date();
// }

//section13
// const food = ["kebab", "pizza", "kalepache"];
// console.log(food[2]);

// console.log(food.length);
// food.push("ghorme");
// document.getElementById("test").innerHTML = food;
// console.log(food.sort());

// const numbers1 = [12, 56, 33, 64, 59, 10, 96];
// const numbers2 = numbers1.map(myFunction);
// function myFunction(value, index, array) {
//   return value * 2;
// }
// console.log(numbers2);
// const numbers3 = numbers1.filter(myFunction1);
// function myFunction1(value) {
//   return value > 50;
// }
// console.log(numbers3);

//section14
console.log(Math.round(4.5))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.trunc(4.7))
console.log(Math.floor(-4.9))
console.log(Math.pow(2,10))
console.log(Math.sqrt(1024))
console.log(Math.abs(-666))
console.log(Math.max(-2,200,66,26,54,321,400))
console.log(Math.random())
console.log(Math.floor(Math.random()*10))
