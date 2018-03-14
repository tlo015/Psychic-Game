// starting variables
var letters= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins= 0;
var losses= 0;
var guesses= 9;
var userGuess = [];

var computer = letters [Math.floor(Math.random()*letters.length)];
console.log(computer);


//id variables to print to div
var winPoint = document.getElementById ("wins");
var losePoint = document.getElementById ("losses");
var guessesLeft = document.getElementById ("guesses-left");
var userGuessesSoFar = document.getElementById ("userGuesses");

//starting stats
winPoint.textContent = wins;
losePoint.textContent = losses;
guessesLeft.textContent = guesses;

//function runs when user presses a key
//grab the key that is pushed variable and
//store user key
//and displaying guess variable in array
document.onkeyup = function (event){
    var userInput= event.key;
    userGuess.push(userInput);
    console.log("user:", userInput);
    console.log("comp", computer);
    
    userGuessesSoFar.textContent = userGuess;

    if (userInput === computer){
        wins++;
        console.log("wins:", wins)
        guesses= 9;
        userGuess= [];
        computer = letters [Math.floor(Math.random()*letters.length)];
        console.log(computer)

        } else {
            guesses--;
            console.log("losses:", losses);

            if (guesses === 0) {
                losses++;
                guesses= 9;
                userGuess= [];
            }

        }

//re-runs the new stroed stats
winPoint.textContent = wins;
losePoint.textContent = losses;
guessesLeft.textContent = guesses;
userGuessesSoFar.textContent = userGuess;

};

