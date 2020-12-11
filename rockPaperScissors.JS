class Play{     
 constructor(user_choice){ 
   if (user_choice) {
       this.user = user_choice;
   } 
 }


RPS_switch(arg){ 
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

Compute(){
 let ComputerChoice = Math.round(Math.random()*5)+1;  
 let choice_returned;
 switch (ComputerChoice) { 
    case 1:   
        choice_returned = 'rock';
         break;
    case 2:
        choice_returned = 'paper';
         break;
    case 3: 
        choice_returned = 'scissors';
         break;
    case 4:   
         choice_returned = 'rock';
          break;
    case 5:
         choice_returned = 'paper';
          break;
    case 6: 
         choice_returned = 'scissors';
          break;
    default:
        choice_returned = "there was an error";
         break;
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
let computer = this.RPS_switch(c);
console.log(user,computer) 
const result = {user: arg ,computer: c,won: this.Won(user, computer)};  

return result; 
}


Won(user, computer){  
  let won; 
  if (user - computer === 1) {
    won = true; 
  }
  if (user - computer === -1){
    won = false;
  }
  if (user - computer > 1){
    won = false;
  }
  if (user - computer < -1){
    won = true;
  }
  if (user === computer){
    won = "draw";
  } 

  return won; 
  }
}
