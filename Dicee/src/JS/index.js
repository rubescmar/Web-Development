function rollDice() {
  var n = Math.random();
  n = Math.floor(n * 6) + 1;
  return n;
}

function lanzarDado1() {
  var player1Number = rollDice();
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
}

function lanzarDado2() {
  var player1Number = rollDice();
  if (player1Number === 1) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice1.png");
  } else if (player1Number === 2) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice2.png");
  } else if (player1Number === 3) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice3.png");
  } else if (player1Number === 4) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice4.png");
  } else if (player1Number === 5) {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice5.png");
  } else {
    document.querySelector("#dice2").setAttribute("src", "src/Images/Dices/Dice6.png");
  }
}

function lanzarDados() {
  lanzarDado1();
  lanzarDado2();
}
