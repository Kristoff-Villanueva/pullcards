import React from "react";

export default function Display(props) {
	const item = props.imageUrl.charAt(0).toUpperCase() + props.imageUrl.slice(1);

	return (
		<div className="display">
			<h1 className="letterDisplay">{props.letterDisplay}</h1>
			<p className="item-name">{item}</p>
			<div>
				{props.animalCategory ? (
					<img
						className="display-image"
						src={`animalPhoto/${props.imageUrl}.png`}
					/>
				) : (
					<img
						className="display-image"
						src={`objectPhoto/${props.imageUrl}.png`}
					/>
				)}
			</div>
		</div>
	);
}
