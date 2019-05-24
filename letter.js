function letter(value) {
    this.letter = value;
    this.guessed = false;

    this.toString = function () {//determine spaces and blanks in terminal.
        if (this.letter === " ") {
            this.guessed = true;//determine the guessed, true or false
            return " ";
        } else {
            if (this.guessed === false) {
                return "_"; //determine the blanks/underline
            } else {
                return this.letter;
            }
        }
    };

    this.guess = function(guess) {
        if(guess === this.letter) {
            this.guessed = true;
        }
    };
}

module.exports = letter;//export for use in word.js