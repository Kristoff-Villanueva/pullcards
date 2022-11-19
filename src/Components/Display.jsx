import React from "react";

export default function Display(props) {
	console.log(props.imageUrl);
	return (
		<div className="display">
			<h1 className="letterDisplay">{props.letterDisplay}</h1>
			<div>
				<img
					className="display-image"
					src={`../src/assets/animalPhoto/${props.imageUrl}.png`}
				/>
			</div>
		</div>
	);
}
