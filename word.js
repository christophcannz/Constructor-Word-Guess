var letter = require("./letter.js");

function Word(answer) { //constructor/object array for answers
    this.objectArray = [];

    for(var i = 0; i < answer.length; i++) { // for loop will create a letter variable from our letter conrtsuctor which will push a letter to object array.
        var letter = new Letter(answer[i]);
        this.objectArray.push(letter);
    }

    this.log = function() { //display data to terminal.
        var answerLog = "";
        for(var i = 0; i < this.objectArray.length; i++) { //loop through opject array.length.
            answerLog += this.objectArray[i] + " ";
        }
        console.log(answerLog + "\n========================\n"); //line break
    };

    this.userGuess = function(input) { //function that will use the input parameter.
        for(var i = 0; i < this.objectArray.length; i++) {
            this.objectArray[i].guess(input);
        }
    };
}
module.exports = Word;