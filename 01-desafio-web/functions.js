// Get the div element
var div = document.getElementById("myDiv");

// Set an interval to change the color every 1000 milliseconds (1 second)
setInterval(function() {
  var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  var currentColorIndex = colors.indexOf(div.style.backgroundColor);
  var nextColorIndex = (currentColorIndex + 1) % colors.length;
  div.style.backgroundColor = colors[nextColorIndex];
}, 1000);