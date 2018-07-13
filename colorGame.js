const BODY_BG_COLOR = "#232323";
const H1_BG_COLOR = "steelblue";

var squaresQty = 6;
var colors; //it's gonna be an array of colors when the page loads
var pickedColor; //it will be a string rgb color
	
var $squares = document.querySelectorAll(".square");
var $colorDisplay = document.querySelector("#colorDisplay");
var $messageDisplay = document.querySelector("#message");
var $h1 = document.querySelector("h1");
var $resetButton = document.querySelector("#reset");
var $modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < $modeButtons.length; i++) {
		$modeButtons[i].addEventListener("click", function(){
			//loop through all buttons to remove the class from all of them
			for(var j = 0; j < $modeButtons.length; j++) {
				$modeButtons[j].classList.remove("selected");
			}
			//only the button that was clicked receives the class back
			this.classList.add("selected");
			//if easy btn was clicked, generate 3 colors / if it was hard btn, generate 6 colors
			this.textContent === "Easy" ? squaresQty = 3 : squaresQty = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < $squares.length; i++) {
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
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(squaresQty);
	//pick a new random color from the array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	$colorDisplay.textContent = pickedColor;
	//reset background color for h1
	$h1.style.backgroundColor = H1_BG_COLOR;
	$messageDisplay.textContent = "";
	$resetButton.textContent = "New Colors";
	//change colors of squares
	for(var i = 0; i < $squares.length; i++) {
		if(colors[i]) {
			$squares[i].style.display = "block";
 			$squares[i].style.backgroundColor = colors[i];
 		} else {
 			$squares[i].style.display = "none";
 		}
	}
}

$resetButton.addEventListener("click", function() {
	reset();
});

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
