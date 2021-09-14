function rollDice() {
  var n = Math.random();
  n = Math.floor(n * 4);
  return n;
}

var simonSecuence = [];
var simonButtons = $("div.btn");
var level = 0;

function nextSecuence() {
  var n = rollDice()
  simonSecuence.push(n);
  console.log(simonSecuence);
  level++;
  console.log(level);
  for (var i = 0; i < simonSecuence.length; i++) {
    simonButtons[simonSecuence[i]].classList.add("pressed");
    setTimeout(function() {console.log("Waiting 1000")}, 1000);
    simonButtons[simonSecuence[i]].classList.remove("pressed");
  }
}

$(document).keypress(function() {
  if (event.key == "a") {
    nextSecuence();
  } else {
    return 0;
  };
});

$("div.btn").click(function() {
  addSimonSecuence();
});
