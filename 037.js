// Let's play! You have to return which player won! In case of a draw return Draw!.


// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if(p1 === p2 ) return "Draw!"
    return p1 === "scissors" && p2 === "paper" ? "Player 1 won!" : p1 === "paper" && p2 === "rock" ? "Player 1 won!" : p1 === "rock" && p2 === "scissors" ? "Player 1 won!" : "Player 2 won"
};

console.log(rps("scissors", "paper"))