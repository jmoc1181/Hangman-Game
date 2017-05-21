//These are the street names for the game
var randomWordArray = ["ashland", "addison", "clark", "lincoln", "california", "foster", "roscoe"];


//Alphabet 
/*var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];*/

   // global variables
    var blank;
    // empty array to store guesses
    var answerArray = [];
	var lettersGuessed = [];
    var numGuesses = []; 
    var countdown; 


    // choose a random word from the array

	var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

    var spaces = randomWord.length; 
    console.log(spaces);


    // fill the answer array with underscores
    function go()
    {

        for (var i = 0; i < randomWord.length; i++)
        {
            answerArray[i] = "_";
        }

        // put them in a string
        blank = answerArray.join(" ");
        document.getElementById("answer").innerHTML = blank;

        numGuesses = 15;
		document.getElementById("guessesLeft").innerHTML = numGuesses;

		document.getElementById('guessed').innerHTML = ' '; 
 		
		spaces = randomWord.length; 
	    randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];


    };





    // player's typed letter
   // var userText = document.getElementById("user-text");


    // Next, we give JavaScript a function to execute when onkeyup event fires.
  	document.onkeyup = function(event)
    {

     letter(event.key);
  	 document.getElementById('guessed').innerHTML +=  event.key; 
  	
  	numGuesses--;
	document.getElementById("guessesLeft").innerHTML = numGuesses;


		if (numGuesses === 0){
				alert("You Lose. You must NOT be from Chicago!");
				
				go(); 
			}
		else if (spaces === 0 ) { 
				alert(randomWord + "  - YOU KNOW YOUR CHICAGO STREETS! ");
			
				go(); 
	 } 
		
    };



    function letter(letter)
    {
        // here we get the letter that the user types in the bo

        for (var i = 0; i < randomWord.length; i++)
        {
          // now if the random word contains a letter that the user typed
          if (randomWord[i] === letter)
          {
            // assign it to a letter
            answerArray[i] = letter;
            console.log(letter);
            document.getElementById("answer").innerHTML = answerArray.join(" ");

            spaces -= 1;
			console.log(spaces); 
          }
       
        }
   
    }


    

