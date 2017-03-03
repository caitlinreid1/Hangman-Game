var wins = 0;
var guessesRemaining = 6;
// var currentWord = 

// log the user input
document.onkeyup = function () {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	console.log(userGuess);

	var wordChoices = [
		["grown woman"],
	 	// 	["holdup"],
	 	// 	["blue ft blue ivy"],
	 	// 	["flawless"],
	  	// 	["all night"]
	]
	var computerChoice = wordChoices[Math.floor(Math.random()*wordChoices.length)];

	console.log(computerChoice)

	function myFunction {
		var str = computerChoice;
		var res = str.replace(" _ ")
	}

	
	console.log(currentWord);

	if ((computerChoice == "grown woman") && (userGuess === "G" || userGuess === "R" || userGuess === "O" || 
		userGuess === "W" || userGuess === "N" || userGuess === "M" || userGuess === "A"   )) {
		console.log("userGuess");	
	}
}

// GET ELEMENT BY ID 


// var currentWord = wordChoices[random]; 