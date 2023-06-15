"use strict"
console.log("App script working")

let userName = prompt("Hi user :) please tell me your prefered name!")
console.log(userName)
// if (userName == "Je"){
// } else (alert("Please enter your name"))

if (userName == "Jessica Bane") {
    alert("Welcome " + userName + "to your site")
} else ( alert("Welcome to my page " + userName))

// var linkClicked()[
//     if (confirm("Are you sure?") == true)
// ]

let testMe;
if (confirm("Press a button!") == true) {
  alert = "You pressed OK!";
} else {
  alert = "You canceled!";
}

// Function
// Function declaration - how 
// function call / invoke - what we do to make a function run
// Scope:


// - Functions declared outside the function are known to be glodally scoped
// 


function sayHello(){
  console.log("Hello")
}

sayHello()

// when you declare a function you have parmaters that give names to the functions inputs

function sayGoodbye(name){
  console.log("Goodbye " + name);
}

sayGoodbye("Rachel") // this will say "Goodbye Rachel" in console


function getFullName(firstName, secondName){
  return firstName + " " + secondName
}

let ada = getFullName("ada","lovelace")
console.log("ada " + ada)

console.log(getFullName("Jessica", "bane"));

function yesOrNoPrompt(promtInfo){
  let userInput = prompt(promtInfo);
  if(userInput === "yess"){
    console.log("hurray");
  } else if (userInput === "no"){
    console.log("nope");
  } else if (userInput === "mabe"){
    console.log("make up your mind");
  } else {
    console.log("Error")
  }
}

yesOrNoPrompt("how about yes or no")
yesOrNoPrompt("how about yess or no")

myName("jez"); // function has not been run or created here so it wont work!
// warning in console 
  // app.js:74 Uncaught ReferenceError: Cannot access 'myName' before initialization
  // at app.js:74:1
  // (anonymous) @ app.js:74

const myName = function(name){ // this is a function expression
  console.log(name)
}

myName("sarah"); // function has been used now so code will work


// The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
// declarations get put to the top of the script