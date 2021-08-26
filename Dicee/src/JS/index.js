var player1Number = 0;
var player2Number = 0;

function rollDice() {
  var n = Math.random();
  n = Math.floor(n * 6) + 1;
  return n;
}

function lanzarDado1() {
  player1Number = rollDice();
  if (player1Number === 1) {
    document.querySelector("#dice1").setAttribute("src", "src/Images/Dices/Dice1.png");
  } else if (player1Number === 2) {
    document.querySelector("#dice1").setAttribute("src", "src/Images/Dices/Dice2.png");
  } else if (player1Number === 3) {
    document.querySelector("#dice1").setAttribute("src", "src/Images/Dices/Dice3.png");
  } else if (player1Number === 4) {
    document.querySelector("#dice1").setAttribute("src", "src/Images/Dices/Dice4.png");
  } else if (player1Number === 5) {
    document.querySelector("#dice1").setAttribute("src", "src/Images/Dices/Dice5.png");
  } else {
    document.querySelector("#dice1").setAttribute("src", "src/Images/Dices/Dice6.png");
  }
  return player1Number;
}

function lanzarDado2() {
  player2Number = rollDice();
  if (player2Number === 1) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice1.png");
  } else if (player2Number === 2) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice2.png");
  } else if (player2Number === 3) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice3.png");
  } else if (player2Number === 4) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice4.png");
  } else if (player2Number === 5) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice5.png");
  } else {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice6.png");
  }
  return player2Number;
}

function lanzarDados() {
  lanzarDado1();
  lanzarDado2();
  if (player1Number > player2Number) {
    document.querySelector("h1").innerHTML = "<strong>Player 1 Wins!</strong>";
  } else if (player1Number === player2Number) {
    document.querySelector("h1").innerHTML = "<strong>It's a draw!</strong>";
  } else {
    document.querySelector("h1").innerHTML = "<strong>Player 2 Wins!</strong>";
  }
}
