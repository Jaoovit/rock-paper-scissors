let bnt1 = document.querySelector('#btn1') 
let bnt2 = document.querySelector('#btn2')
let bnt3 = document.querySelector('#btn3')

btn1.addEventListener('click', getUserChoice)
bnt2.addEventListener('click', getUserChoice)
bnt3.addEventListener('click', getUserChoice)

function getUserChoice() {

    /*return window.prompt('rock, paper or scissors?').toLowerCase()*/
    
    
 
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
        /*else if (playerSelection === computerSelection) {
            window.alert('Tie, play again')
            playRound()
        }
        else {
            window.alert('Unavalible valeu, try again')
            playRound()
        }*/
    }

    
    function score() {

        
        for(let i = 1; i <= 5; i++) {
            playRound();
        }

        
    }

    score();