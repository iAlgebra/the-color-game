const BODY_BG_COLOR = "#232323";

var squaresQty = 6;
var colors = generateRandomColors(squaresQty); //returns an array of 6 colors
var $squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //returns a string color
var $colorDisplay = document.querySelector("#colorDisplay");
var $messageDisplay = document.querySelector("#message");
var $h1 = document.querySelector("h1");
var $resetButton = document.querySelector("#reset");
var $easyButton = document.querySelector("#easyBtn");
var $hardButton = document.querySelector("#hardBtn");

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
			//display Play Again message
			$resetButton.textContent = "Play Again?";
			//change all squares color to clicked color
			changeColors(clickedColor);
			//change h1 background color
			$h1.style.backgroundColor = clickedColor;
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
	//repeat three times
	for(var i = 0; i < 3; i++) {
		//generates a number from 0 to 255 and push into arr
		arr.push(Math.floor(Math.random() * 256));
	}
	return "rgb(" + arr[0] + ", " + arr[1] + ", " + arr[2] + ")";
}

$resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(squaresQty);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	$colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < $squares.length; i++) {
		$squares[i].style.backgroundColor = colors[i];
	}
	//reset background color for h1
	$h1.style.backgroundColor = BODY_BG_COLOR;
});

$easyButton.addEventListener("click", function() {
	$hardButton.classList.remove("selected");
	this.classList.add("selected");
	squaresQty = 3;
	colors = generateRandomColors(squaresQty);
	pickedColor = pickColor();
	$colorDisplay.textContent = pickedColor;
	for(var i = 0; i < $squares.length; i++) {
		if(colors[i]) {
			$squares[i].style.backgroundColor = colors[i];
		} else {
			$squares[i].style.display = "none";
		}
	}
});

$hardButton.addEventListener("click", function() {
	$easyButton.classList.remove("selected");
	this.classList.add("selected");
	squaresQty = 6;
	colors = generateRandomColors(squaresQty);
	pickedColor = pickColor();
	$colorDisplay.textContent = pickedColor;
	for(var i = 0; i < $squares.length; i++) {
		$squares[i].style.backgroundColor = colors[i];
		if (i >= 3) {
			$squares[i].style.display = "block";
		}
	}
});
