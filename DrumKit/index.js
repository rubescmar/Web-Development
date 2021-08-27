//Detecting when we click a button
var drumButton = document.querySelectorAll(".drum");

for (i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    animateButton(this.innerHTML);
  });
}

//Detecting when we press a key on the keyboard
document.addEventListener("keydown", function(/*event*/) { //that's a callback
  makeSound(event.key)
  animateButton(event.key);
});

//Audioplaying an specific audio for an specific keyword
function makeSound(key) {
  switch (key) {
    case "w":
      var audioW = new Audio("sounds/tom-1.mp3");
      audioW.play();
      break;
    case "a":
      var audioA = new Audio("sounds/tom-2.mp3");
      audioA.play();
      break;
    case "s":
      var audioS = new Audio("sounds/tom-3.mp3");
      audioS.play();
      break;
    case "d":
      var audioD = new Audio("sounds/tom-4.mp3");
      audioD.play();
      break;
    case "j":
      var audioJ = new Audio("sounds/snare.mp3");
      audioJ.play();
      break;
    case "k":
      var audioK = new Audio("sounds/crash.mp3");
      audioK.play();
      break;
    case "l":
      var audioL = new Audio("sounds/kick-bass.mp3");
      audioL.play();
      break;
    default:
  }
}

//Animating buttons pressed
function animateButton (currentKey) {
  for (i = 0; i < drumButton.length; i++) {
    drumButton[i].classList.remove("pressed");
  }
  document.querySelector('.' + currentKey).classList.add("pressed");
  setTimeout(function() {
    document.querySelector('.' + currentKey).classList.remove("pressed");
  }, 100);
}
