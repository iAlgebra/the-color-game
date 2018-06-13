var colors = [
	"rgb(255, 0, 0)", //red
	"rgb(255, 255, 0)", //yellow
	"rgb(0, 255, 0)", //green
	"rgb(0, 255, 255)", //cyan
	"rgb(0, 0, 255)", //blue
	"rgb(255, 0, 255)" //magenta
];

const SELECTED_COLOR = 3;

var $squares = document.querySelectorAll(".square");
var pickedColor = colors[SELECTED_COLOR];
var $colorDisplay = document.querySelector("#colorDisplay");

$colorDisplay.textContent = pickedColor;

for (var i = 0; i < $squares.length; i++) {
	$squares[i].style.backgroundColor = colors[i];
}
