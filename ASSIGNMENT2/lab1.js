
const prompt = require('prompt');


function generateComputerSelection() {
    const randomNumber = Math.random();

    if (randomNumber <= 0.34) {
        return 'PAPER';
    } else if (randomNumber <= 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}


prompt.start();


prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    
    
    const userSelection = result.userSelection.toUpperCase();
    
    
    const computerSelection = generateComputerSelection();

    
    console.log('\nUser Selection:', '\x1b[36m' + userSelection + '\x1b[0m'); // Cyan color
    console.log('Computer Selection:', '\x1b[35m' + computerSelection + '\x1b[0m'); // Magenta color

    if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        console.log('\x1b[32m', 'User Wins', '\x1b[0m'); // Green color
    } else if (
        (computerSelection === 'ROCK' && userSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && userSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && userSelection === 'PAPER')
    ) {
        console.log('\x1b[31m', 'Computer Wins', '\x1b[0m'); // Red color
    } else {
        console.log('\x1b[33m', "It's a tie", '\x1b[0m'); // Yellow color
    }
});


function onErr(err) {
    console.error(err);
    return 1;
}
