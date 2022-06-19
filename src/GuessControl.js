import React, { useState } from "react";
import Button from "./Button";

function GuessControl({onGuess}){

	//new state variable named currentGuess with setter setCurrentGuess and default value of an empty string
	const [currentGuess, setCurrentGuess] = useState("");

	/*Create a handleInputChange function within the component that updates 
	the currentGuess state value when the user changes the value in the input.
	Set the onChange property for the input element to refer to this function.
	*/
	function handleInputChange(event){
		setCurrentGuess(event.target.value);
	}

	function onSubmitGuess(){
		onGuess(Number(currentGuess));
		setCurrentGuess("");
	}

	// Copy return value and removed all references to "this"
	return(
		<div>
			<input
				type="number"
				value={currentGuess}
				onChange={handleInputChange}
			/>
			<Button onClick={onSubmitGuess}>Submit Guess</Button>
		</div>
	)
}

export default GuessControl;
