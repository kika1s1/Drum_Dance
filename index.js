var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var tome_1 = new Audio("sounds/tom-1.mp3");
        tome_1.play();
        break;
      case "a":
        var tome_2 = new Audio("sounds/tom-2.mp3");
        tome_2.play();
        break;
      case "s":
        var tome_3 = new Audio("sounds/tom-3.mp3");
        tome_3.play();
        break;
      case "d":
        var tome_4 = new Audio("sounds/tom-4.mp3");
        tome_4.play();
        break;
      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "k":
        var kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;
      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
  });
}
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    
  });
}
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    
});
function makeSound(key) {
    switch (key) {
      case "w":
        var tome_1 = new Audio("sounds/tom-1.mp3");
        tome_1.play();
        break;
      case "a":
        var tome_2 = new Audio("sounds/tom-2.mp3");
        tome_2.play();
        break;
      case "s":
        var tome_3 = new Audio("sounds/tom-3.mp3");
        tome_3.play();
        break;
      case "d":
        var tome_4 = new Audio("sounds/tom-4.mp3");
        tome_4.play();
        break;
      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "k":
        var kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;
      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
    
}