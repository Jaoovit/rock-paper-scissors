let bnt1 = document.querySelector('#btn1') 
let bnt2 = document.querySelector('#btn2')
let bnt3 = document.querySelector('#btn3')

btn1.addEventListener('click', getUserChoice)
bnt2.addEventListener('click', getUserChoice)
bnt3.addEventListener('click', getUserChoice)

function getUserChoice(e) {

    playRound(e.target.innerText) 
    
}



/*function getUserChoice() {

    return window.prompt('rock, paper or scissors?').toLowerCase()
 
}
*/


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

       console.log('string ' + playerSelection + ' computer ' + computerSelection) 
       if (playerSelection === 'rock' && computerSelection === 'scissors') {
            result.put('You win! Rock beats Scissors')
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result = 'You win! Scissors beats Paper'
        }
        else if(playerSelection === 'paper' && computerSelection === 'rock') {
            result = 'You win! Paper beats Rock'
        }
        else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            result = 'You lose! Rock beats Scissors'
        }
        else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            result = 'You lose! Scissors beats Paper'
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            result = 'You lose! Paper beats Rock'
        }
        console.log(result)
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


    