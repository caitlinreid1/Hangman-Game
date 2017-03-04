var wins = document.getElementById("wins");
var guessesRemaining = 6;
// var currentWord = 

// log the user input
document.onkeyup = function () {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

	console.log(userGuess);

	var wordChoices = [
		["g", "r", "o", "w", "n", "w", "o", "m", "a", "n"],
 		["h", "o", "l", "d", "u", "p"],
 		["b", "l", "u", "e", "f", "t", "b", "l", "u", "e", "i", "v", "y"],
 		["f", "l", "a", "w", "l", "e", "s", "s"],
  		["a", "l", "l", "n", "i", "g", "h", "t"]
	]
	
	var random = wordChoices[Math.floor(Math.random()*wordChoices.length)];
	// var random = Math.floor((Math.random()*(wordChoices.length-1))); 
	console.log(random); // chooses one of the words in the array

	// // every letter in the word is symbolized by an underscore in the guessfield
	for (var i = 0; i < random.length; i++){
		
		console.log(random.length);
		random[i] = "_ ";	
	}

	// // function printCurrentWord(){
	function printCurrentWord(){
		


		for (var i = 0; i < random.length; i++){
			var field = document.getElementById("field"); //create new variable called 'field'
			var letter = document.createTextNode(random[i]); // create new variable called 'letter' 
			field.appendChild(letter);
		}
	}

	printCurrentWord();
}






	// print the Current Word to the console
	// function printCurrentWord(){
	// 	for (var i = 0; i < ratewort.length; i++){
	// 		var currentWord = document.getElementById("currentWord");
	// 		var letters = document.createTextNode(currentWord[i]);
	// 	underscore.appendChild(buchstabe);
	// }
	// }

	// if ((computerChoice == "grown woman") && (userGuess === "G" || userGuess === "R" || userGuess === "O" || 
	// 	userGuess === "W" || userGuess === "N" || userGuess === "M" || userGuess === "A"   )) {
	// 	console.log("userGuess");	
	// }

	// var foo = document.getElementById("wins")
	// foo.innerHTML = 'Wins: ' + wins;

	// console.log(currentWord);

	// Take user guess, and loop through array and see if it matches any letter in the word
	
	//str.split(""), str.join("")

	// Iterate over string/array, if user choice matches letter, replace _ with letter on page


// GET ELEMENT BY ID 


// var currentWord = wordChoices[random]; 


