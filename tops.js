function yourName(){
    let user = prompt("What is your name?")
    return document.write(user)
}

function timeOfDay(){
    let time
    let minTime = 0
    let maxTime = 23
    let country = ""
    let message = ""

while (isNaN(time)){
    time = prompt("What hour is it? Please enter in 24h clock, eg. 2 for 2am")
    } if (time <= 11){
    message = "Good Morning "
    } else if(time <= 18){
        message = "Good Afternoon "
    } else if(time <= 23 ){
        message = "Good Evening "
    } else {
            
        }

while (country.toLowerCase() != "england"){
    country = prompt("What country are you in? (please type in lower case)")
    if (country != "england"){
        alert("Sorry we do not support this country")
    } 
}


    // if (time <= 11 && location === "england"){
    //     message = "Good Morning "
    // } else if(time <= 18 && location === "england"){
    //     message = "Good Afternoon "
    // } else if(time <= 23 && location === "england"){
    //     message = "Good Evening "
    //     } 
    //     // else {
    //     //     message = "ERROR" 
    //     // }

    // else if (time >=24 && location !== "england"){
    //     alert( "Please make sure to enter your country in lower case and enter a valid whole number between 0 and 23")
    // } else if(time <=23 && location !== "england"){
    //     alert ("Sorry we do not support your closen country or you have typed it in wrong. Please make sure its LOWER case (HINT: only 'england' will work")
    // } else if(time >=24 && location == "england"){
    //     alert ("Please enter a valid number whole number between 0 and 23. 0 for midnight and 22 for 10pm")
    // } else (message  = "Sorry I don't know what time your in to give you a custom message")

    return document.write(message)
}
