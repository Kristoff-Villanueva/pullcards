import { useState } from "react";
import "./App.css";
import Keyboard from "./Components/Keyboard";
import Display from "./Components/Display";

function App() {
	const [letterDisplay, setLetterDisplay] = useState("");

	return (
		<div className="container">
			<Display letterDisplay={letterDisplay} />
			<Keyboard setLetterDisplay={setLetterDisplay} />
		</div>
	);
}

export default App;
