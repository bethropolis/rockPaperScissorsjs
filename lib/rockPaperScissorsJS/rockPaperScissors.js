/*
/*   RPSjs V 1.0.1
/*   copyright 2020 bethropolis
/*   license MIT
*/

class Play {
  constructor(user_choice) {
    if (user_choice) {
      this.user = user_choice;
    }
  }


  RPS_switch(arg) {
    if (arg == 'rock') {
      return 1;
    }
    if (arg == 'paper') {
      return 2;
    }
    if (arg == 'scissors') {
      return 3;
    }
  }

  Compute() {
    let c = Math.round(Math.random() * 11) + 1;
    let choice_returned;
    if (c == 1 || c == 4 || c == 7 || c == 10) {
      choice_returned = 'rock'
    }
    if (c == 2 || c == 5 || c == 8 || c == 11) {
      choice_returned = 'paper'
    }
    if (c == 3 || c == 6 || c == 9 || c == 12) {
      choice_returned = 'scissors'
    }

    return choice_returned;
  }

  Roll(arg) {
    if (arg) {
      var user = this.RPS_switch(arg);

    } else {
      var user = this.RPS_switch(this.user);
      var arg = this.user;
    }

    let c = this.Compute();
    let computer = this.RPS_switch(c)
    const result = { user: arg, computer: c, won: this.Won(user, computer) };

    return result;
  }


  Won(user, computer) {
    if (user.length > 1) {
      user = this.RPS_switch(user)
    }
    if (computer.length > 1) {
      computer = this.RPS_switch(computer);
    }

    let won;
    if (user - computer === 1) {
      won = true;
    }
    if (user - computer === -1) {
      won = false;
    }
    if (user - computer > 1) {
      won = false;
    }
    if (user - computer < -1) {
      won = true;
    }
    if (user === computer) {
      won = "draw";
    }

    return won;
  }
} 