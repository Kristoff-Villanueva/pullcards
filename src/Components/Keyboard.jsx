import React from "react";
import alphabet from "alphabet";
import { animals } from "../assets/album.js";
import { nanoid } from "nanoid";

function Keyboard(props) {
	const keyboardEl = alphabet.upper.map((letter) => {
		function handleClick(event) {
			const letter = event.target.textContent;
			const letterLower = letter.toLowerCase();
			props.setLetterDisplay(letter);
			props.setImageUrl(animals[letterLower]);
		}

		return (
			<button onClick={handleClick} className="keys" key={nanoid()}>
				{letter}
			</button>
		);
	});

	return <div className="keyboard">{keyboardEl}</div>;
}

export default Keyboard;
