const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return Math.floor(Math.random() * 3);
};

function playRound(player, computerChoice) {
    let playerChoice = choices.indexOf(player.toLowerCase());
    // tie
    if (playerChoice === computerChoice){
        return "It's a tie";
    }
    // player wins
    else if ((playerChoice === 0 && computerChoice === 2) || 
                (playerChoice === 1 && computerChoice === 0) ||
                (playerChoice === 2 && computerChoice === 1)) {
        return `You win! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
    }
    else {
        return `You lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`;
    }
};

const playerChoice = prompt("Rock, Paper, or Scissors");
console.log(playRound(playerChoice, computerChoice()));