import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

// Create a new functional component
function NumberGuessingGame(){

	const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
	const [numberOfGuesses, setNumberOfGuesses] = useState(0);

	// initial state should be null instead of 0, because if we use 0,
	// we can't tell the different if user guessed 0 or it was the initial value
	// also, the UI will display a 0 upon start, if initial state is 0
	//const [latestGuess, setLatestGuess] = useState(0);		
	const [latestGuess, setLatestGuess] = useState(null);		

	function handleGuess(guess){
		setLatestGuess(Number(guess));
		setNumberOfGuesses(numberOfGuesses + 1);

		console.log("numberToGuess: " + numberToGuess);
		console.log("numberOfGuesses: " + numberOfGuesses);
		console.log("latestGuess: " + latestGuess);
	}

	function handleReset(){
		setNumberToGuess(getRandomNumber());
		setNumberOfGuesses(0);

		// look above for why reset initial state to null instead of 0
		setLatestGuess(null);
	}

  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

	// numbertToGuess jumps around when console.log is outside of functions.
	/*
	console.log("numberToGuess: " + numberToGuess);

	console.log("numberOfGuesses: " + numberOfGuesses);
	console.log("latestGuess: " + latestGuess);
	*/

	return (
		<div>
			<h2>Im thinking of a number from 1 to 100.</h2>
			<h2>
				Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
			</h2>
			<GuessControl onGuess={handleGuess} />
			{isGameOver && (
				<GameOver hasWon={isCorrectGuess} onReset={handleReset} />
			)}
			{!isGameOver && (
				<GuessMessage
					guess={latestGuess}
					numberToGuess={numberToGuess}
					numberOfGuesses={numberOfGuesses}
				/>
			)}
		</div>
	);
}

export default NumberGuessingGame;
