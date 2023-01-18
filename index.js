for (var i = 0; i <document.querySelectorAll("button").length; i++) {
document.querySelectorAll("button")[i].addEventListener("click",function plays() {
var inht=this.innerHTML;
sounder(inht);

});
}
document.addEventListener("keypress",function presses(event) {
var cat=event.key;
sounder(cat);
});
function sounder(ku) {
  switch (ku) {
    case "w":
    var sound=new Audio('sounds/tom-1.mp3');
    sound.play();
      break;
      case "a":
      var sound=new Audio('sounds/tom-2.mp3');
      sound.play();
        break;
        case "s":
        var sound=new Audio('sounds/tom-3.mp3');
        sound.play();
          break;
          case "d":
          var sound=new Audio('sounds/tom-3.mp3');
          sound.play();
            break;
            case "j":
            var sound=new Audio('sounds/snare.mp3');
            sound.play();
              break;
              case "k":
              var sound=new Audio('sounds/crash.mp3');
              sound.play();
                break;
                case "l":
                var sound=new Audio('sounds/kick-bass.mp3');
                sound.play();
                  break;


  }
}
