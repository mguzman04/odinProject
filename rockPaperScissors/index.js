const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return Math.floor(Math.random() * 3);
};

function playRound(player, computerChoice, score) {
    let playerChoice = choices.indexOf(player.toLowerCase());
    let playerScore = document.getElementById('player');
    let computerScore = document.getElementById('computer');
    // tie
    if (playerChoice === computerChoice){
        return "It's a tie";
    }
    // player wins
    else if ((playerChoice === 0 && computerChoice === 2) || 
                (playerChoice === 1 && computerChoice === 0) ||
                (playerChoice === 2 && computerChoice === 1)) {
        score.player++;
        playerScore.textContent = score.player;
        return `You win! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
    }
    else {
        score.computer++;
        computerScore.textContent = score.computer;
        return `You lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`;
    }
};

function game() {
    let score = { player: 0, computer: 0};
    let result;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id, computerChoice(), score);
        });
    });
    
    // for(let i = 0; i < 5; i++){
    //     const playerChoice = prompt("Rock, Paper, or Scissors");
    //     console.log(playRound(playerChoice, computerChoice(), score));
    //     console.log(`Computer ${score.computer}, You: ${score.player}`);
    // }
} 

game();