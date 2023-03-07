class Play {
  constructor(rounds = 10, user_choice = " ") {
    // Initialize the game with user's choice, rounds and other variables
    this.user = user_choice;
    this.computer;
    this.userScore = 0;
    this.computerScore = 0;
    this.rounds = rounds;
    this.friend;
    this.round = 0;
    this.multy = false;
    this.choices = ["rock", "paper", "scissors"];
  }

  // Function to convert user choice to an integer value
  RPS_switch(choice) {
    return this.choices.indexOf(choice) + 1;
  }

  // Function to randomly choose a move for the computer
  Compute() {
    const randomIndex = Math.floor(this.choices.length * Math.random());
    this.computer = this.choices[randomIndex];
    return this.computer;
  }

  // Function to handle a single round of the game
  Roll(choice) {
    this.multy = false;
    const userChoice = this.getUserChoice(choice.toLowerCase());
    const computerChoice = this.getComputerChoice();
    this.round += 1;
    if (this.checkEndPlay()) {
      return this.getGameSummary();
    }
    return this.getGameResult(userChoice, computerChoice);
  }

  // Function to update the score based on the winner of a round
  increment(won) {
    won ? (this.userScore += 1) : (this.computerScore += 1);
  }

  // get scores
  Scores() {
    return { user: this.userScore, opponent: this.computerScore };
  }

  //
  Choices(arr) {
    if (arr.length == 2) {
      this.choices = arr;
    }
  }
  // Function to check if the game has ended based on the number of rounds played
  checkEndPlay() {
    return this.round >= this.rounds;
  }

  Clear() {
    // Helper function to clear the game data and start a new game
    this.round = 0;
    this.userScore = 0;
    this.computerScore = 0;
  }
  // Function to get user choice and optionally update friend's choice
  getUserChoice(choice, friend = false) {
    if (
      this.choices.find((a) => {
        return a == choice;
      })
    ) {
      return friend ? this.updateUser(choice, true) : this.updateUser(choice);
    } else {
      throw new Error(`Invalid input. Please enter ${this.choices}`);
    }
  }

  // Function to update user choice and optionally friend's choice
  updateUser(choice, friend = false) {
    return friend ? (this.friend = choice) : (this.user = choice);
  }

  // Function to get computer's choice
  getComputerChoice() {
    return this.Compute();
  }

  // Function to handle multiplayer game mode
  Multiplayer(player1 = this.user, player2 = this.friend) {
    this.multy = true;
    const userChoice = this.getUserChoice(player1.toLowerCase());
    const friendChoice = this.getUserChoice(player2.toLowerCase(), true);
    return this.getGameResult(userChoice, friendChoice, true);
  }

  // assemble and finalize result's to return to roll
  getGameResult(userChoice, computerChoice, friend = false) {
    let opponent = friend ? "friend" : "computer";
    return {
      user: userChoice,
      [opponent]: computerChoice,
      won: this.Won(
        this.RPS_switch(userChoice),
        this.RPS_switch(computerChoice)
      ),
      uscore: this.userScore,
      cscore: this.computerScore
    };
  }

  // compute the winner
  Won(user, computer) {
    const difference = (user - computer + 3) % 3;
    if (difference === 1) {
      this.increment(true);
      return true;
    } else if (difference === 2) {
      this.increment();
      return false;
    } else {
      return "draw";
    }
  }

  getGameSummary() {
    // Compute the final result of the game
    let opponent = this.multy ? "friend" : "computer";
    let gameResult;
    if (this.userScore > this.computerScore) {
      gameResult = "You win!";
    } else if (this.computerScore > this.userScore) {
      gameResult = `${opponent} wins!`;
    } else {
      gameResult = "It's a tie!";
    }

    // Return an object with the final score and result of the game
    return {
      userScore: this.userScore,
      computerScore: this.computerScore,
      result: gameResult
    };
  }
}
if (typeof module !== "undefined" && module.exports) {
  // Export the Play class for use in Node.js
  module.exports = Play;
}