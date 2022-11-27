const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    return Math.floor(Math.random() * 3);
};

function playRound(player, computerChoice, score) {
    let playerChoice = choices.indexOf(player.toLowerCase());
    // tie
    if (playerChoice === computerChoice){
        return "It's a tie";
    }
    // player wins
    else if ((playerChoice === 0 && computerChoice === 2) || 
                (playerChoice === 1 && computerChoice === 0) ||
                (playerChoice === 2 && computerChoice === 1)) {
        score.player++;
        return `You win! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
    }
    else {
        score.computer++;
        return `You lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`;
    }
};

function game() {
    console.log("Rock, Paper, Scissors!");
    let score = { player: 0, computer: 0};
    for(let i = 0; i < 5; i++){
        const playerChoice = prompt("Rock, Paper, or Scissors");
        console.log(playRound(playerChoice, computerChoice(), score));
        console.log(`Computer ${score.computer}, You: ${score.player}`);
    }
} 

game();