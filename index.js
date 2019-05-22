var Word = require("./word.js");
var inquirer = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var BallClubs = [

    "Arizona Diamondbacks",
    "Atlanta Braves",
    "Baltimore Orioles", 
    "Boston Red Sox",
    "Chicago White Sox",
    "Chicago Cubs",
    "Cincinnati Reds",
    "Cleveland Indians",
    "Colorado Rockies",
    "Detroit Tigers",
    "Houston Astros",
    "Kansas City Royals",
    "Los Angeles Angels",
    "Los Angeles Dodgers",
    "Miami Marlins",
    "Milwaukee Brewers",
    "Minnesota Twins",
    "New York Yankees",
    "New York Mets",
    "Oakland Athletics",
    "Philadelphia Phillies",
    "Pittsburgh Pirates",
    "San Diego Padres",
    "San Francisco Giants",
    "Seattle Mariners",
    "St. Louis Cardinals",
    "Tampa Bay Rays",
    "Texas Rangers",
    "Toronto Blue Jays",
    "Washington Nationals"

];

var randomIndex = Math.floor(Math.random() * BallClubs.length);

var randomWord = BallClubs[randomIndex];

var computerWord = new Word(randomWord);

var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function theLogic() {
    if(requireNewWord) {
        var randomIndex = Math.floor(Math.random() * BallClubs.length);
        var randomWord = BallClubs[randomIndex];

        computerWord = new Word(randomWord);

        requireNewWord = false;
    }

    var wordComplete = [];

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Choose a letter from A to Z",
                name: "userInput"
            }
        ]).then(function(input) {

        })
    }else {
        console.log("You WIN!\n");
    }
}