

//These are the street names for the game
var words = ['ashland', 'addison', 'clark', 'lincoln', 'california', 'foster', 'roscoe'];

//Alphabet 
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


//This choose word from list 
var word = words[Math.floor(Math.random() * words.length)];


//Empty array called answerArray and fill it with underscores (_) to match the number of letters in the word.
var answerArray = [];
	for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

//Length of the secret word.
var remainingLetters = word.length;

//Blanks 
var blanks = answerArray.join(" ");
document.getElementById("blanks").innerHTML=blanks;


//when user types letter it looks up to see if its the chosen word 


function guessLetter(){


}






//when user types letter it looks up to see if its the chosen word 


//if it is in the word the letter pops up in the hidded word - if not the user loses a life and the letter is checked off the list 

//if the user runs out of 5 lives, they lose 

//if user guesses the word with anuy lives left they win 

//if user gets up to 5 wins they win it all 

//press a key to play again and start over 

