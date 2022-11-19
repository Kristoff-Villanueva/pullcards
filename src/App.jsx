import { useState } from "react";
import "./App.css";
import Keyboard from "./Components/Keyboard";
import Display from "./Components/Display";

function App() {
	const [letterDisplay, setLetterDisplay] = useState("A");
	const [imageUrl, setImageUrl] = useState("ant");

	// console.log(imageUrl);

	return (
		<div className="container">
			<Display imageUrl={imageUrl} letterDisplay={letterDisplay} />
			<Keyboard setImageUrl={setImageUrl} setLetterDisplay={setLetterDisplay} />
		</div>
	);
}

export default App;
