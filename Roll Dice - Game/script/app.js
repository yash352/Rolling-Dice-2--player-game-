//First who collect 100 points is the winner

let result = 0;
let score = [0, 0];
let activePlayer = 0;
let gamePlaying = true;

function rollDice() {
  if (gamePlaying) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice").style.display = "block";
    document.getElementById("dice").src = "assets/dice-" + randomNumber + ".png";

    currentScore(randomNumber);
  }
}

function currentScore(randomNumber) {
  if (randomNumber !== 1) {
    result += randomNumber;
    document.getElementById("current-" + activePlayer).innerHTML = result;
  } else {
    result = 0;
    document.getElementById("current-" + activePlayer).innerHTML = result;

    changePlayer();
  }
}

function hold() {
  score[activePlayer] += result;
  result = 0;
  document.getElementById("current-" + activePlayer).innerHTML = result;
  document.getElementById("score-" + activePlayer).innerHTML = score[activePlayer];
  document.getElementById("dice").style.display = "none";

  if (score[activePlayer] >= 100) {
    document.getElementById("name-" + activePlayer).innerHTML = "winner!";
    document.getElementById("player-" + activePlayer + "-panel").classList.add("winner");
    document.getElementById("player-" + activePlayer + "-panel").classList.remove("active");
    gamePlaying = false;
  } else {
    changePlayer();
  }
}

function changePlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
    document.getElementById("player-0-panel").classList.remove("active");
    document.getElementById("player-1-panel").classList.add("active");
  } else {
    activePlayer = 0;
    document.getElementById("player-1-panel").classList.remove("active");
    document.getElementById("player-0-panel").classList.add("active");
  }
}

function newGame() {
  document.getElementById("current-" + activePlayer).innerHTML = 0; //set current score display to 0
  document.getElementById("score-0").innerHTML = 0; //set score display to 0
  document.getElementById("score-1").innerHTML = 0; //set score display to 0

  /*change active player to player 0*/
  document.getElementById("player-1-panel").classList.remove("active");
  document.getElementById("player-0-panel").classList.add("active");

  /*change player name to player 1 and player 2*/
  document.getElementById("name-0").innerHTML = "Player 1";
  document.getElementById("name-1").innerHTML = "Player 2";

  /*remove winner classes*/
  document.getElementById("player-" + activePlayer + "-panel").classList.remove("winner");

  gamePlaying = true;

  activePlayer = 0;
  result = 0; //reset result
  score = [0, 0]; //reset score
}
