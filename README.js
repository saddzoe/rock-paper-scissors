# rock-paper-scissors
// This is the javascript version of rock paper scissors from codecademy

//rock paper scissors project
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("Error! Invalid input.");
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      console.log("Invalid Input");
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "BOOM! IT'S OVA WITH!"
  }

  if (userChoice === computerChoice) {
    return "This game ends in a tie!";
  };

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "Congrats you won!";
    }
  }

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
};

// console.log(determineWinner("paper", "scissors"));
// console.log(determineWinner("paper", "paper"));
// console.log(determineWinner("paper", "rock"));

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You choose: " + userChoice);
  console.log("The computer choose: " + computerChoice)

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
