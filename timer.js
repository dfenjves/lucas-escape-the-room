var timeleft = 3600
var timer = document.getElementById("timer")

var downloadTimer = setInterval(function(){
  timeleft = timeleft - 1
  var minutes = Math.floor(timeleft/60);
  var seconds = Math.round(timeleft%60)
  timer.setAttribute('text',`value: ${minutes}:${seconds}; color: red; width: 2;`)
  if(minutes == 0 && seconds == 0){
       timer.innerHTML = "Game Over!"
  }
  if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);
