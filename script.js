let bnt1 = document.querySelector('#btn1') 
let bnt2 = document.querySelector('#btn2')
let bnt3 = document.querySelector('#btn3')
let player = document.querySelector('#player')
let computer = document.querySelector('#computer')

btn1.addEventListener('click', getUserChoice)
bnt2.addEventListener('click', getUserChoice)
bnt3.addEventListener('click', getUserChoice)

function getUserChoice(e) {

    playRound(e.target.name || e.target.alt)
    
}

function getComputerChoice() {
    let computerChoice = Math.random (); 
        if (computerChoice < 0.34){return 'rock';} 
        else if (computerChoice <= 0.67){return 'paper';}
        else {return 'scissors';}
    
}

let result = [];

let playerScore = 0
let computerScore = 0


function playRound(userChoice) {

    const playerSelection = userChoice;
    const computerSelection = getComputerChoice();

       if (playerSelection == 'rock' && computerSelection == 'scissors') {
            result.put = 'You win! Rock beats Scissors'
            playerScore += 1
        }
        else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            result.put = 'You win! Scissors beats Paper'
            playerScore += 1
        }
        else if(playerSelection == 'paper' && computerSelection == 'rock') {
            result.put = 'You win! Paper beats Rock'
            playerScore += 1
        }
        else if(playerSelection == 'scissors' && computerSelection == 'rock') {
            result.put = 'You lose! Rock beats Scissors'
            computerScore += 1
        }
        else if(playerSelection == 'paper' && computerSelection == 'scissors') {
            result.put = 'You lose! Scissors beats Paper'
            computerScore += 1
        }
        else if (playerSelection == 'rock' && computerSelection == 'paper') {
            result.put = 'You lose! Paper beats Rock'
            computerScore += 1
        }
        else if (playerSelection == computerSelection) {
            result.put = 'Tie, Play Again'
        }
        

        player.innerText = playerScore
        computer.innerText = computerScore
        scoreboard.style.color = 'rgb(49, 49, 49)'

        if(playerScore == 5) {
            result.put = 'Congratulations, you win the game'
            scoreboard.style.color = 'green'
            playerScore = 0
            computerScore = 0
        }if(computerScore == 5) {
            result.put = 'Sorry, you lost the game'
            scoreboard.style.color = 'brown'
            computerScore = 0
            playerScore = 0
        }

        
        document.querySelector('#scoreboard').innerHTML = result.put

       
        
    }
    
   