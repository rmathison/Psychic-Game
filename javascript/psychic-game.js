var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
 "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var remaining = 9;

var letters = [];

var userGuess = null;

var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " remaining: " + remaining + 
" Guesses so far: " + letters + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {

var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

if (letters.indexOf(userGuess) < 
		0 && alphabetLetters.indexOf(userGuess) >= 0) {
		letters[letters.length]=userGuess;
		
		remaining--;
	}

if (letterToBeGuessed == userGuess) {
	wins++;
	console.log("You win!");
	remaining = 9;
	letters = [];
	letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * 
		alphabetLetters.length)];
	console.log("Wins: " + wins + " Losses: " + losses + " remaining: " + 
		remaining + 
		" Guesses so far: " + letters + " Computer picked: " + 
		letterToBeGuessed);
	}

if (remaining == 0) {
	losses++; console.log("You lost!");
	remaining = 9;
	letters = [];
	letterToBeGuessed = alphabetLetters[Math.floor(Math.random() 
	* alphabetLetters.length)];
	console.log("Wins: " + wins + " Losses: "
	 + losses + " remaining: " + remaining + " Guesses so far: " + 
	letters + " Computer picked: " + letterToBeGuessed);
	}

	var page = "<p><h1>The Psychic Game</h1></p>" + 
	"<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
	"<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + 
	losses + "</h4></p>" + "<p><h4>Guesses Left: " + remaining +
	 "</h4></p>" 
	+ "<p><h4>Your guesses so far: " + letters + "</h4></p>";
	
	document.querySelector("#psychic-game").innerHTML = page;

}