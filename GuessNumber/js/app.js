'use strict'

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    // When there is no input
    if(!guess) {
        displayMessage('⛔ No Number!');
        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if( guess !== secretNumber) {
        if( score > 1 ) {
            displayMessage( guess > secretNumber ? '📈 Too high!' : '📉 Too low!' );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
    // When guess is too high
    //  else if ( guess > secretNumber) {
    //     if( score > 1 ) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    //     // When guess is too low
    // } else if ( guess < secretNumber) {
    //     if( score > 1 ) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
});

// download multiple images file in zip folder using javascript
function downloadZip() {
    var zip = new JSZip();
    var img = zip.folder("images");
    for(var i=0; i<images.length; i++) {
        img.file(images[i].name, images[i].src, {base64: true});
    }
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "images.zip");
    });
}