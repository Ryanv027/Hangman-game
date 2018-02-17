var board = {
    updateLetters: function(letter) {
        this.answerWord.forEach(function(element, index) {
            if (letter === element) this.hangmanWord[index] = letter;
        });
    },
    //Explain what the updateLetters function is doing.






    updateGuesses: function(letter) {
        //Write the code needed to 
        //add this letter to the wrong guesses array 
        wrongGuesses(letter)
            //subtract 1 from the guesses left number
        guessesLeft -= 1
    },
    setProp: function(prop, val) {
        this[prop] = val
    },
    winCounter: 0,
    lossCounter: 0
}

//Add how many names you want to this word bank. All names need to be lowercase.
var wordBank = ['peahi', 'pipeline', 'mavericks', 'sunset', 'teahupoo', 'cloudbreak', 'trestles', 'superbank', 'rincon']

//I wouldn't recommend changing these names. These id names match the layout if you change these names here make sure you change it on your html page as well.
var ids = ['hangmanWord', 'wrongGuesses', 'guessesLeft', 'winCounter', 'lossCounter']

function randomize(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function hideWord(arr) {
    //Please fill in what we want our array to be full of. You can add any symbol you want right now we have it full of *. This should be what the user sees when it is a brand new fresh game.
    return Array(arr.length).fill('_ ')
}

function validateInput(key) {
    if (!/^[a-z]$/.test(key)) return false; // Makes sure an a-z key is pressed
    if (board.wrongGuesses.indexOf(key) >= 0) return false; // Makes sure key isnt already Guessed
    if (board.hangmanWord.indexOf(key) >= 0) return false; // Makes sure hangman keys cant be pressed again
    return true;
}

function takeTurn(letter) {
    //Add an if/else statement here.
    //if the letter is in the answerWord i should see a call to the updateLetters function
    if (answerWord.indexOf(letter) >= 0) {
        updateLetters(letter)
    }
    //otherwise i should see a call to the the updateGuesses function
    else {
        updateGuesses(letter)

    }
    // keep this line here
    print(ids);
}

function updateScore() {
    //Add an if/else statement here.
    //if the user wins i should see a call to updateWin
    if (answerWord === hangmanWord) {

    }
    //or if the user loses i should see a call to the updateLoss
    else if (guessesLeft == 0) {
        updateLoss()

    }
}

function updateWin() {
    //add what happens if the user wins code here
    winCounter += 1
    startGame()
        //Make a call to the startGame function here. 
        //This call is here to start the game once a player wins.

}

function updateLoss() {
    //add what happens if the user loses code here
    lossCounter -= 1
    startGame()
        //Make a call to the startGame function here.
        //This call is here to start the game once a player losses.

}

function print(arr) {
    arr.forEach(function(idName) {
        document.getElementById(idName).textContent = splitString(board[idName]);
    });
}

function splitString(gameProp) {
    if (Array.isArray(gameProp)) return gameProp.toString('').replace(/,/g, ' ');
    return arr;
}
//explain what the print function is doing.







function startGame() {
    /* 
    Add your board setup functions and or code here
    You can use the setProp function declared on the board object inside the game object (line 13)
    The property names on the board object need to match the names found in the ids array.
    The wrongGuesses Property needs to be an array
    The hangmanWord Property needs to be an array
    The guessesLeft Property needs to be an Integer
    The winCounter Property needs to be an Integer
    The lossCounter Property needs to be an Integer
    */
    wrongGuesses = []
    answerWord = randomize(wordBank)
    hangmanWord = hideWord(answerWord)
    guessesLeft = 8


    print(ids)
}

//keyup event
//This is how our player is interacting with our game.
//This drives all the game mechanics.
document.addEventListener('keyup', function(event) {
    if (validateInput(event.key)) {
        //make a call to the takeTurn Function
        takeTurn(event.key)
            //make a call to the updateScore function
        updateScore()
    };
});

//This makes the first call (initial) call to start the game.
startGame();