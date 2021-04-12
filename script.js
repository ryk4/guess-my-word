'use strict';

/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = 'New content...';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 99;

document.querySelector('.guess').value = 32;

console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '❌ No number'
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '✅ Correct Number'
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '😅 Too high'
        score--;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '😅 Too low'
        score--
    }

    document.querySelector('.score').textContent = score;
});


