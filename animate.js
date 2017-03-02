// Initialization
var s = document.getElementById("world");
var ns = "http://www.w3.org/2000/svg";
var height = $(window).height() * 0.9;
var width = $(window).width();
s.height = height;
s.width = width;

var bg = document.createElementNS(ns, "rect");
bg.setAttribute("width", width);
bg.setAttribute("height", height);
bg.setAttribute("style", "fill:rgb(0,0,0)");
s.appendChild(bg);
console.log(bg);    

var count = 0;
var x, y;
var lastCircle;

// EventListener Functions
var connect = function(e) {
    if (count == 0) {
	addCircle(e);
    } else {
	if (removeLast())
	    addLine(e);
	addLastCircle();
	addCircle(e);
    }
    console.log(count);
}

var addCircle = function(e) {
    var c = document.createElementNS(ns, "circle");
    x = e.clientX;
    y = e.clientY;
    c.setAttribute("r", 15);
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("fill", getRandomColor());
    c.setAttribute("stroke", "white");
    c.setAttribute("stroke-width", "1");
    s.appendChild(c);
    count++;
    lastCircle = c;
}
var addLastCircle = function() {
    s.appendChild(lastCircle);
    count++;
}

var addLine = function(e) {
    var l = document.createElementNS(ns, "line");
    var newX = e.clientX;
    var newY = e.clientY;
    l.setAttribute("x1", x);
    l.setAttribute("y1", y);
    l.setAttribute("x2", newX);
    l.setAttribute("y2", newY);
    l.setAttribute("stroke", "white");
    l.setAttribute("stroke-width", "1");
    s.appendChild(l);
    count++;
}

// Backend Functions
var getRandomColor = function() {
    var newColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
	Math.floor(Math.random() * 256) + ',' + 
	Math.floor(Math.random() * 256) + ')';
    return newColor;
}
var clear = function(e) {
    lastCircle = null;
    while (count) {
	removeLast();
    }
}
var removeLast = function(e) {
    s.removeChild(s.lastChild);
    return count--;
}

// Adding Event Listeners
var b1 = document.getElementById("clear");
b1.addEventListener("click", clear);
s.addEventListener("click", connect);

console.log("Loaded js.");
