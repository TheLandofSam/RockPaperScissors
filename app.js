var userChoice;
var computerChoice;
var winner;

function gameManager(){
  compChoice()    
  
  compareChoices()
  displayWinner()
}

function userSelection(choice) {
  
  userChoice = choice
  gameManager()
}

function compChoice(){

  var pickOne = Math.floor(Math.random()*10)
  if (pickOne <4) {
    computerChoice = "rock"
  } else if (pickOne <7) {
    computerChoice ="scissors"
  }else {
    computerChoice = "paper"
    
  }

}


function compareChoices(){
if(computerChoice === userChoice){
  winner = 'TIE'
  return;
}else if(computerChoice === 'rock'){
    if(userChoice === 'paper'){
     winner = 'You papered them! :-)'
    }else if (userChoice === 'scissors'){
      winner = 'You were rocked. :-('
    }
}else if(computerChoice === 'paper'){
    if(userChoice === 'rock'){
     winner = 'You were papered. :-('
    }else if (userChoice === 'scissors'){
      winner = 'You CUT THEM! :-)'
    }
}else if(computerChoice === 'scissors'){
    if(userChoice === 'rock'){
     winner = 'You ROCKED them! :-)'
    }else if (userChoice === 'paper'){
      winner = 'You were cut. :-('
    }

}
console.log("winner")
}

function displayWinner(){
  
  document.getElementById('test').innerText = winner
}

function Reset(){
  userChioce = ''
  compChoice = ''
  winner = ''
  document.getElementById('winner-div').innterText = ''
}
