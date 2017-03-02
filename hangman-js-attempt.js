

var wordChoices = [ 

    "GROWN WOMAN", "BOOTYLICIOUS", "HOLD UP", "BLUE FT BLUE IVY", "FLAWLESS", "ALL NIGHT"



		// ["G", "R", "O", "W", "N", "W", "O", "M", "A", "N"],
  // 		["B", "O", "O", "T", "Y", "L", "I", "C", "I", "O", "U", "S"],
 	// 	["H", "O", "L", "D", "U", "P"],
 	// 	["B", "L", "U", "E", "F", "T", "B", "L", "U", "E", "I", "V", "Y"],
  // 		["F", "L", "A", "W", "L", "E", "S", "S"],
  // 		["A", "L", "L", "N", "I", "G", "H", "T"]
	]
	
var random = Math.floor((Math.random()*(wordChoices.length))); 

var word = wordChoices[random]; 

console.log(word);


