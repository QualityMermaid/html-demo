function yourName(){
    let user = prompt("What is your name?")
    return document.write(user)
}

function timeOfDay(){
    let time = prompt("What hour is it? (0 - 23)")
    let location = prompt("What country are you in? (please type in lower case)")
    let message = ""
// && == AND this must be true
// ||== OR this is true
    if (time <= 11 && location === "england"){
        message = "Good Morning "
    } else if(time <= 18 && location === "england"){
        message = "Good Afternoon "
    } else if(time <= 23 && location === "england"){
        message = "Good Evening "
        } 
        // else {
        //     message = "ERROR" 
        // }

    else if (time >=24 && location !== "england"){
        message = "Please make sure to enter your country in lower case and enter a valid whole number between 0 and 23"
    } else if(time <=23 && location !== "england"){
        message = "Sorry we do not support your closen country or you have typed it in wrong. Please make sure its LOWER case"
    } else if(time >=24 && location == "england"){
        message = "Please enter a valid number whole number between 0 and 23. 0 for midnight and 22 for 10pm"
    } else ( message = "ERROR please reload the page")

    return document.write(message)
}