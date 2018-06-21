var colors = [
	"rgb(255, 0, 0)", //red
	"rgb(255, 255, 0)", //yellow
	"rgb(0, 255, 0)", //green
	"rgb(0, 255, 255)", //cyan
	"rgb(0, 0, 255)", //blue
	"rgb(255, 0, 255)" //magenta
];

const SELECTED_COLOR = 3;
const BODY_BG_COLOR = "#232323";

var $squares = document.querySelectorAll(".square");
var pickedColor = colors[SELECTED_COLOR];
var $colorDisplay = document.querySelector("#colorDisplay");
var $messageDisplay = document.querySelector("#message");

$colorDisplay.textContent = pickedColor;

for (var i = 0; i < $squares.length; i++) {
	//add initial colors to squares
	$squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	$squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) { //correct guess
			//display correct message
			$messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		} else { //wrong guess
			//square disappears
			this.style.backgroundColor = BODY_BG_COLOR;
			//display try again message
			$messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(winningColor) {
	for(var i = 0; i < $squares.length; i++) {
		$squares[i].style.backgroundColor = winningColor;
	}
}
