import React from "react";

export default function Display(props) {
	return (
		<div className="display">
			<h1 className="letterDisplay">{props.letterDisplay}</h1>
		</div>
	);
}
