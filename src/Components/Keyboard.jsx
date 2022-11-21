import React from "react";
import alphabet from "alphabet";
import { animals, objects } from "../assets/album.js";
import { nanoid } from "nanoid";

function Keyboard(props) {
	function handleClick(event) {
		const letter = event.target.textContent;
		const letterLower = letter.toLowerCase();
		props.setLetterDisplay(letter);
		props.animalCategory
			? props.setImageUrl(animals[letterLower])
			: props.setImageUrl(objects[letterLower]);
	}

	const keyboardEl = alphabet.upper.map((letter) => {
		return (
			<button onClick={handleClick} className="keys" key={nanoid()}>
				{letter}
			</button>
		);
	});

	function handleAnimalClick() {
		props.setAnimalCategory(true);
		props.setImageUrl("ant");
		props.setLetterDisplay("A");
	}

	function handleObjectClick() {
		props.setAnimalCategory(false);
		props.setImageUrl("airplane");
		props.setLetterDisplay("A");
	}

	return (
		<div className="keyboard">
			<div className="categories">
				<button onClick={handleAnimalClick} className="category-btn">
					🦁Animals
				</button>
				<button onClick={handleObjectClick} className="category-btn">
					🚀Objects
				</button>
			</div>
			<div className="keys-div">{keyboardEl}</div>
		</div>
	);
}

export default Keyboard;
