let bnt1 = document.querySelector('#btn1') 
let bnt2 = document.querySelector('#btn2')
let bnt3 = document.querySelector('#btn3')

btn1.addEventListener('click', getUserChoice)
bnt2.addEventListener('click', getUserChoice)
bnt3.addEventListener('click', getUserChoice)

function getUserChoice(e) {

    playRound(e.target.innerText) 
    
}

function getComputerChoice() {
    let computerChoice = Math.random (); 
        if (computerChoice < 0.34){return 'rock';} 
        else if (computerChoice <= 0.67){return 'paper';}
        else {return 'scissors';}
    
}

let result = [];

function playRound(userChoice) {

    const playerSelection = userChoice;
    const computerSelection = getComputerChoice();

       if (playerSelection === 'rock' && computerSelection === 'scissors') {
            result.put = 'You win! Rock beats Scissors'
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result.put = 'You win! Scissors beats Paper'
        }
        else if(playerSelection === 'paper' && computerSelection === 'rock') {
            result.put = 'You win! Paper beats Rock'
        }
        else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            result.put = 'You lose! Rock beats Scissors'
        }
        else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            result.put = 'You lose! Scissors beats Paper'
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            result.put = 'You lose! Paper beats Rock'
        }
        else if (playerSelection === computerSelection) {
            result.put = 'Tie, Play Again'
        }
        
        document.querySelector('#scoreboard').innerHTML = result.put;
    }
    

    

    
   /*function score() {

        
        for(let i = 1; i <= 5; i++) {
        }

        
    }
*/

    