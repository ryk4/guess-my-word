'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function (msg) {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMsg('❌ No number');
    } else if (guess === secretNumber) {
        displayMsg('✅ Correct Number');
        document.querySelector('.number').textContent = secretNumber;

        //change background to  bright green
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

    } else if (guess !== secretNumber) {
        if (guess > secretNumber) {
            displayMsg('😅 Too high');
            score--;
        } else if (guess < secretNumber) {
            displayMsg('😅 Too low');
            score--;
        } else {
            displayMsg('You lost.');
        }
    }

    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';

    displayMsg('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    score = 20;

    //reset secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';

});




