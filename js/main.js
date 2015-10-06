// var currentTime= new Date();
// var currentHours=currentTime.getHours();
// var currentMinutes=currentTime.getMinutes();
// var currentSeconds=currentTime.getSeconds();


  // var timeOfDay = (currentHours <12) ? "am" : "pm";
  // currentHours=(currentHours> 12) ? currentHours -12: currentHours;
  // currentHours=(currentHours === 0) ? 12: currentHours;

// var currentTimeString= currentHours +':' + currentMinutes + ':' + currentSeconds +' ' + timeOfDay;

// document.getElementById('clock').firstChild.nodeValue=currentTimeString;

// var hexClock;
(function (){


  setInterval (function(){
  var currentTime= new Date();
  var currentHours=currentTime.getHours();
  var currentMinutes=currentTime.getMinutes();
  var currentSeconds=currentTime.getSeconds();
  // var getSeconds= getSeconds.toFixed(2);

  // var getSeconds=(getSeconds <11) ?  :  ;

  // am or pm NOT NEEDED FOR HEX COLOR 
  

  var displayHours=(currentHours < 10) ? ('0' + currentHours) : currentHours;
  var displayMinutes= (currentMinutes < 10) ? ('0' + currentMinutes) : currentMinutes;
  var displaySeconds = (currentSeconds< 10) ? ('0' + currentSeconds) : currentSeconds;

  var currentTimeString= '#' + displayHours + displayMinutes + displaySeconds;

  // $.clock=currentTimeString;
  $('#clock').text(currentTimeString).css('background-color', currentTimeString);
}, 1000);
})();
  // document.getElementById('clock').firstChild.nodeValue=currentTimeString;
// };
// $.clock=hexClock;
// var everySecond;
// function hexColor(){
//   everySecond=setInterval(change, 1000);
// }

// function change(){
//   clearInterval(everySecond);

// }


// $.clock
// for (var i =1; i < 61; i ++) {
//   console.log(i);
// }

// var changeColor;
// function changeColor(){
//   changeColor=setInterval(hexColor ,1000);
// };

// var newTime=();
// window.setInterval(newTime, 1000);














































