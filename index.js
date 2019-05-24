var Word = require("./word.js");
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var BaseballTerms = [ //array holding words to be guessed.

    "pitch",
    "out",
    "tag", 
    "slider",
    "base",
    "changeup",
    "umpire",
    "plate",
    "dugout",
    "bullpen",
    "warmup",
    "toss",
    "routine",
    "ball",
    "steal",
    "homerun",
    "triple",
    "double",
    "single",
    "inning",
    "delay",
    "bat",
    "swing",
    "foul",
    "catch",
    "field",
    "diamond",
    "run",
    "foul",
    "strike"

];

var randomIndex = Math.floor(Math.random() * BaseballTerms.length); //random loop

var randomWord = BaseballTerms[randomIndex]; //random word variable

var computerWord = new Word(randomWord); //generate a random word.

var requireNewWord = false; //set a new word.
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function theLogic() {
    if(requireNewWord) { //generate a new word.
        var randomIndex = Math.floor(Math.random() * BaseballTerms.length);
        var randomWord = BaseballTerms[randomIndex];

        computerWord = new Word(randomWord);

        requireNewWord = false;
    }

    var wordComplete = []; //completed word

    if (wordComplete.includes(false)) { 
        inquirer.prompt([
            {
                type: "input",
                message: "Choose a letter from A to Z",
                name: "userInput"
            }
        ]).then(function(input) {
            if(letterArray.includes(inut.userInput) || input.userInput.length > 1) {
                console.log("\nPlease try again!\n");
                theLogic();
            }else {
                if(
                    incorrectLetters.includes(input.userInput) || correctLetters.includes(input.userinput) || input.userinput ===""
                ) {
                    console.log("\nAlready Guessed or Nothing was Entered\n");
                    theLogic();
                } else {
                    var wordCheckArray = [];

                    computerWord.userGuess(input.userinput);

                    computerWord.objectArray.forEach(wordCheck);
                    if(wordCheckArray.join("") === wordComplete.join("")) {
                        console.log("\nIncorrect|n");

                        incorrectLetters.push(input.userinput);
                        guessesLeft --;
                    } else {
                        console.log("\nCorrect|n");

                        correctLetters.push(input.userinput);
                    }
                    computerWord();

                    console.log("Guesses Left: " + guessesLeft + "\n");

                    console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                    if(guessesLeft > 0) {
                        theLogic();
                    } else {
                        console.log("You've Lost!\n")
                    }
                    function wordCheck(key) {
                        wordCheckArray.push(key.guessed);
                    }
                }
            }

        });
    } else {
        console.log("You WIN!\n");
    }
    function completeCheck (key) {
        wordComplete
    }
}

function restartGame () {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to", //completed game message.
            choices: ["Play Again", "Leave"], //completed game message options.
            name: "restart"
        }
    ]).then(function(input){
        if (input.restart === "Play Again") { //restart game message.
            requireNewWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft = 10;
            theLogic();


        } else {
            return;
        }
    });
}
theLogic();