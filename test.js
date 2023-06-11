console.log("this is a test");

let myName = "Jessica";

console.log(myName);
// data types

let myPet = "Dog"; // this data is a string
let myPetsAge = 7; // this data is a number

let petDetails = "My pet is " + myPetsAge; // this will print as a string

console.log(petDetails);

console.log(typeof petDetails); // will tell us what type the data is

let likesWalkies = true // this data type is a boolean true/false statement

console.log(typeof likesWalkies);

// other types are arrays and objects

// arethemetic operators

let addition = 7 + 7 // + is for addition

console.log(addition)

let subtraction = 5 - 2 // - is for subtraction
console.log(subtraction)

let multiplication = 2 * 3 // * is for multiplication 
console.log(multiplication)

let division = 15 / 3 // / this is for division
console.log(division)

let myNum = 5
let thisNum = ++myNum //++ is to increment (will look different if ++ is put at the end)

console.log(thisNum)

let thatNum = --myNum // -- this will decrement by one
console.log(thatNum)


//  Comparison operators

// == equal to
// === equal value and equal type "7" === 7
// != not equal
// !== not equal value and not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// conditional statement
// A conditional statement controls behaviour in js
// and determiners wheather or not a piece of code should run or not.

// this is true
if(myNum === 5) {
    console.log("Bingo")
}

// this is false

if(myNum === 4) {
    console.log("flamingo")
}

// this is false

if(myNum === "5") {
    console.log("flamingo")
}

// this is true

if(myNum == "5") {
    console.log("flamingo")
}


// else statement if is false then it will do else
// can have multiple else statements such as else if when code finds a TRUE statement code will ignore rest
if(myNum === 6){
    console.log("You will win!")
} else {
    console.log("You loose")
}


if (myNum === 10){
    console.log("i am on this course to win")
 } 
 else if (myNum === 3)[console.log("omg")]
 else [console.log("you loose again")]


// Methods
// consol.log()
// prompt()
// document.write() !!! DO NOT USE THIS AS IT WILL OVERWRITE HTML
// alert() will show a message to the user
// 

let userName = prompt("Hi user :) please tell me your prefered name!")
console.log(userName)
// if (userName == "Je"){
// } else (alert("Please enter your name"))

const welcomeMsg = alert("Welcome to my page " + userName)

document.write()
