function FindWinner(P1) {
  const Options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

  const Winning = {
    Rock: ["Scissors", "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Lizard", "Paper"],
    Lizard: ["Paper", "Spock"],
    Spock: ["Rock", "Scissors"],
  };

  let P2 = Options[Math.floor(Math.random() * 5)];

  console.log(`You: ${P1}, Opponent: ${P2}`);

  if (P1 === P2) {
    console.log("It's a Tie!");
  } else if (Winning[P1].includes(P2)) {
    console.log("You Win!");
  } else {
    console.log("You Lose...");
  }
}

FindWinner("Spock");
