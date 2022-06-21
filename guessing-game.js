function guessingGame() {
	const ANSWER = Math.floor(Math.random() * 100);
	let isOver = false;
	let guessCount = 0;

	return function guessRandomWholeNum(num) {
		if (isOver) {
			return "The game is over, you already won!";
		}

		guessCount++;

		if (num < ANSWER) {
			return `${num} is too low!`;
		} else if (num > ANSWER) {
			return `${num} is too high!`;
		} else {
			isOver = true;
			return `You win! You found ${ANSWER} in ${guessCount} guesses.`;
		}
	};
}

module.exports = { guessingGame };
