// A function that returns a random computer choice

function getComputerChoice() {

    const choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random() * 3)]
   
}


// A function that compares player's Selection and computer's Selection 
function playRound(playerSelection, computerSelection) {

    // converting player's selection to Lower Case
    playerSelection = playerSelection.toLowerCase()

    // combining player'value and Computers value
    let resultCombined = playerSelection + computerSelection


 //   condition to determine who wins
 // condition for draw
    if (resultCombined == 'rockrock' || resultCombined == "paperpaper" || resultCombined == 'scissorsscissors') {
        return "You Tie"

        // condition for player to win
    } else if(resultCombined == 'rockscissors' || resultCombined == "paperrock" || resultCombined == 'scissorspaper'){
        if (resultCombined == 'rockscissors') {
            return `You Win! Rock breaks scissors`
        } else if (resultCombined == "paperrock"){
            return `You Win! Paper folds Rock`
        } else{
            return `You Win! Scissors cuts paper`
        }
        // condition for computer to win
    } else if(resultCombined == 'scissorsrock' || resultCombined == "rockpaper" || resultCombined == 'paperscissors'){
       if (resultCombined == 'scissorsrock') {
            return `Computer Win! Rock breaks scissors`
        } else if (resultCombined == "rockpaper"){
            return `Computer Win! Paper folds Rock`
        } else{
            return `You Win! Scissors cuts paper`
        } 

        //output if wrong value is entered
    } else{
        return `Enter The Required Value (rock/paper/scissors)`
    }
}

const playerSelection = prompt(`Enter rock/paper/scissors`)

console.log(playRound(playerSelection, getComputerChoice()));