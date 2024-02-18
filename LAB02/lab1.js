// Importing the prompt package
const prompt = require('prompt');

// Function to generate computer's selection
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

// Start the prompt
prompt.start();

// Prompt user to choose ROCK, PAPER, or SCISSORS
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    
    // Get user's selection
    const userSelection = result.userSelection.toUpperCase();
    
    // Generate computer's selection
    const computerSelection = generateComputerSelection();

    // Display user's and computer's selection
    console.log('User Selection:', userSelection);
    console.log('Computer Selection:', computerSelection);

    // Determine the outcome of the game
    if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        console.log('User Wins');
    } else if (
        (computerSelection === 'ROCK' && userSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && userSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && userSelection === 'PAPER')
    ) {
        console.log('Computer Wins');
    } else {
        console.log("It's a tie");
    }
});

// Error handling function
function onErr(err) {
    console.error(err);
    return 1;
}
