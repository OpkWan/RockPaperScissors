// A function that returns a random computer choice

function getComputerChoice() {

    // creating the random number
    let randomNumber = Math.random()

    // creating the condition to select a random value based on the output of the random numder

    if (randomNumber <= 0.33) {
        console.log("Rock");
    } else if(randomNumber <= 0.66 ){
        console.log("Paper");
    } else{
        console.log("Scissors");
    }
    
}

getComputerChoice()