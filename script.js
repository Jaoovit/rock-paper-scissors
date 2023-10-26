function getUserChoice() {
    return window.prompt('rock, paper or scissors?').toLowerCase()
}

           
function getComputerChoice() {
    let computerChoice = Math.random (); 
        if (computerChoice < 0.34){return 'rock';} 
        else if (computerChoice <= 0.67){return 'paper';}
        else {return 'scissors';}
    
}
                

function playRound() {

    

    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice();

        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log('You win! Rock beats Scissors')
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log('You win! Scissors beats Paper')
        }
        else if(playerSelection === 'paper' && computerSelection === 'rock') {
            console.log('You win! Paper beats Rock')
        }
        
        else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log('You lose! Rock beats Scissors')
        }
        
        else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log('You lose! Scissors beats Paper')
        }
        
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log('You lose! Paper beats Rock')
        }
        
        else if (playerSelection === computerSelection) {
            console.log('Tie')
        }

        else {
            console.log('Unavalible valeu, try again')
        }
    }
    
    playRound();