import React from "react";
import alphabet from "alphabet";
import { nanoid } from "nanoid";

function Keyboard(props) {
	const keyboardEl = alphabet.upper.map((letter) => {
		function handleClick(event) {
			props.setLetterDisplay(event.target.textContent);
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