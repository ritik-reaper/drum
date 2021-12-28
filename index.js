var no = document.querySelectorAll(".drum").length;
for(var i=0;i<no;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click" , function()
  {
       var keypress= this.innerHTML;
       sound(keypress);  
       animation(keypress);          
  });
}
function sound(key)
{
  switch (key) {
    case "w":
            var x=new Audio("tom-1.mp3");
            x.play();
      break;
    case "a":
      var x=new Audio("tom-2.mp3");
      x.play();
      break;
    case "s":
      var x=new Audio("tom-3.mp3");
      x.play();
      break;
      case "d":
        var x=new Audio("tom-4.mp3");
        x.play();
        break;
        case "j":
          var x=new Audio("crash.mp3");
          x.play();
          break;

          case "k":
            var x=new Audio("kick-bass.mp3");
            x.play();
            break;
      case "l":
      var x=new Audio("snare.mp3");
      x.play();
      break;
    default:
      break;
  }
}
document.addEventListener("keypress", function(event)
{
    sound(event.key);
    animation(event.key);
});
function animation(currentkey)
{
      var xyz=document.querySelector("."+currentkey);
      xyz.classList.add("pressed");
      setTimeout(function()
      {
        xyz.classList.remove("pressed");
      },100);
}