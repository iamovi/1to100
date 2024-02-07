let targetNumber;
let attempts;
const maxAttempts = 10;

function startGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  setMessage('');
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    setMessage('Please enter a valid number between 1 and 100.');
    return;
  }

  if (attempts === maxAttempts) {
    setMessage(`Sorry, you've run out of attempts. The correct number was ${targetNumber}.`);
    return;
  }

  attempts++;

  if (guess === targetNumber) {
    setMessage(`Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempt(s)!`);
  } else {
    const difference = Math.abs(guess - targetNumber);
    let hint = '';

    if (difference <= 5) {
      hint = 'You\'re very close!';
    } else if (difference <= 10) {
      hint = 'You\'re getting warmer.';
    } else if (difference <= 20) {
      hint = 'You\'re getting warmer but still a bit far.';
    } else {
      hint = 'You\'re cold.';
    }

    const funnyPhrases = [
      'Better luck next time!',
      'Oops, wrong number!',
      'The number seems to be playing hide and seek with you!',
      'Keep trying, you\'re getting closer to laughter!',
      'Looks like the number is shy, try again!',
      'You\'re as close to the number as a cat to water!',
      'Don\'t worry, even the best mathematicians miss sometimes!',
      'You\'re searching for the needle in a haystack, keep searching!',
      'The number is enjoying the suspense, keep it up!',
      'That number is a real trickster, isn\'t it?'
    ];

    const randomIndex = Math.floor(Math.random() * funnyPhrases.length);
    const funnyPhrase = funnyPhrases[randomIndex];

    setMessage(`Incorrect guess. ${hint} Attempts left: ${maxAttempts - attempts}. ${funnyPhrase}`);
  }
}

function setMessage(message) {
  document.getElementById('message').textContent = message;
}

function newGame() {
  startGame();
  document.getElementById('guessInput').value = '';
  setMessage('');
}

startGame(); // Start the game when the page loads
