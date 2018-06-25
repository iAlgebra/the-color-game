var colors = generateRandomColors(6); //returns an array of 6 colors

const BODY_BG_COLOR = "#232323";

var $squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //returns a string color
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
	//loop through all sqaures
	for(var i = 0; i < $squares.length; i++) {
		//change each color to match given color
		$squares[i].style.backgroundColor = winningColor;
	}
}

function pickColor() {
	//generates a random int between 0 and the max index of the colors array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an arr
	var arr = [];
	//repeat num times 
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return arr
	return arr;
}

function randomColor() {//creates one random color
	//creating the string for the color
	var arr = [];
	var str = "rgb(";
	var str2 = ")";
	//repeat three times
	for(var i = 0; i < 3; i++) {
		//generates a number from 0 to 255 and push into arr
		arr.push(Math.floor(Math.random() * 256));
	}
	var stringColor = str + arr + str2;
	return stringColor;
}
