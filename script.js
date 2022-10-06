"use strict";

//
// Variables
//
const body = document.querySelector(`body`);
const againBtn = document.querySelector(`.again`);
const number = document.querySelector(`.number`);
const guess = document.querySelector(`.guess`);
const checkBtn = document.querySelector(`.check`);
const infoMessage = document.querySelector(`.message`);
const scoreOutputText = document.querySelector(`.score`);
const highscoreOutputText = document.querySelector(`.highscore`);
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//
// Functions
//
const displayMessage = function (message) {
    infoMessage.textContent = message;
};

const changeBackgroundColor = function (color) {
    body.style.backgroundColor = color;
};

//
// Event Listeners
//
checkBtn.addEventListener(`click`, function () {
    const guessValue = Number(document.querySelector(`.guess`).value);

    // When there is no input
    if (!guessValue) {
        displayMessage(`🛑 No number!`);
        // When player wins
    } else if (guessValue === secretNumber) {
        displayMessage(`🎉 Correct number!`);
        changeBackgroundColor(`#60b347`);
        number.style.width = `30rem`;
        number.textContent = secretNumber;
        if (highscore < score) {
            highscore = score;
            highscoreOutputText.textContent = highscore;
        }
        // When guess is wrong
    } else if (guessValue !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guessValue > secretNumber
                    ? `📈 Guess too high!`
                    : `📉 Guess too low!`
            );
            score--;
            scoreOutputText.textContent = score;
        } else {
            displayMessage(`☹️ You lost the game!`);
            changeBackgroundColor(`darkred`);
            scoreOutputText.textContent = 0;
        }
    }
});

againBtn.addEventListener("click", function () {
    changeBackgroundColor(`#222`);
    displayMessage(`<- Start guessing...`);
    number.textContent = `?`;
    number.style.width = `15rem`;
    guess.value = ``;
    score = 20;
    scoreOutputText.textContent = score;
    secretNumber = Math.floor(Math.random() * 20) + 1;
});
