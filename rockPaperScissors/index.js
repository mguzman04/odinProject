const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return Math.floor(Math.random() * 3);
};

function playRound(player, computerChoice, score) {
    let playerChoice = choices.indexOf(player.toLowerCase());
    let playerScore = document.getElementById('player');
    let computerScore = document.getElementById('computer');
    let messageContainer = document.getElementById('result');
    // tie
    if (playerChoice === computerChoice){
        score.result = "It's a tie";
    }
    // player wins
    else if ((playerChoice === 0 && computerChoice === 2) || 
                (playerChoice === 1 && computerChoice === 0) ||
                (playerChoice === 2 && computerChoice === 1)) {
        score.player++;
        playerScore.textContent = score.player;
        score.result = `You win! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
    }
    else {
        score.computer++;
        computerScore.textContent = score.computer;
        score.result = `You lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`;
    }
    messageContainer.textContent = score.result;
};

function game() {
    let score = { player: 0, computer: 0, result: ""};
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id, computerChoice(), score);
        });
    });
} 

game();