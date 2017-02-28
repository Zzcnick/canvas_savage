// Initialization
var s = document.getElementById("world");
var ns = "https://www.w3.org/2000/svg";
var height = $(window).height() * 0.9;
var width = $(window).width();
s.height = height;
s.width = width;
var bg = document.createElementNS(ns, "rect");
bg.setAttribute("width", width);
bg.setAttribute("height", height);
bg.setAttribute("fill", "rgb(0,0,0)");
s.appendChild(bg);

// Backend Functions
var getRandomColor = function() {
    var newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
	Math.floor(Math.random() * 256) + ',' + 
	Math.floor(Math.random() * 256) + ')';
    return newColor;
}
var clear = function(e) {
    return 0;
}

// Adding Event Listeners
var b1 = document.getElementById("clear");
b1.addEventListener("click", clear);

console.log("Loaded js.");
