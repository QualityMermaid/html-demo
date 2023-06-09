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
