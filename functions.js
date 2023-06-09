"use strict"

// syntax - function keyword / function name / parameters / curly braces for te body
// try and not have the same name for veraibles

// function declaration

// () = pramaters can be seaperated by ,
// {} = body of code where you put js

// x is the varerable

// function call can be placed here as well mySum(); (!but vareables cannot!)

function mySum(){
   let x = 2 + 2
   console.log(x)
}

 mySum();

 // function expression the x veraible is within the function
 //  myFunc() wont run here as verables cannot be read even if they have been 'hoisted' to the top

 const myFunc = function(){
    let x = 3 * 3
    console.log(x)
 }
 myFunc()


 // other way but dont learn it now "()<>{}"

 // prameters and arguments
function bestSum(param1, param2){
    let x = param1 + param2
    console.log(x)
}
bestSum(10, 20); // the arguments in () will give their values to the pramaters eg 10 == param1)
bestSum("My Name is ", "Jessica")
bestSum("I am only ", 23) // cause there are two different data types this will be created as a string
// Error message NaN == Not a Number

function theReturningSum(num1, num2, num3){
    let sum = num1 + num2
    let sumDivided = sum / num3
    return sumDivided; // make sure to close a function by return at the end. code written in the function after return will do nothing.
    //can use it within an if statement eg if x === 2; return sumDivided, else
}
console.log(theReturningSum(30, 20, 10))
console.log(theReturningSum(5, 120, 10))

// myPets = [] this is a list
let myPets = ["dog", "cat", "fish", "parrot", "mouse", "horse", "chicken"]

// && == AND this must be true
// ||== OR this is true


// for loop
//  initialization ( i is common practice for initialization) / condition / after thought (doing something after the loop)
// remember code starts at 0 not 1
// you can create infinate loops by mistake

for (let i = 0; i < myPets.length; i++){
    console.log("I love my pet " + myPets[i])
}

// white loop
// white(condition){
    // statement
// }

let n = 0
let x = 0

while(n < 3){
    n++
    x += n
    console.log(n)
    console.log(x);

    if (x >= 3){
        break
    }
}

let answer

while(answer !=7){
    answer = prompt("Guess what my lucky number is between 0 and 10. Hint it is a full number")
    if (answer != 7){
        alert("Wrong number. Try again")
    } else{
        alert("Correct! You can now access my Contact Page")
    }
}