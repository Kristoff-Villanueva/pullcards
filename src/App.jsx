import { useState } from "react";
import "./App.css";
import Keyboard from "./Components/Keyboard";
import Display from "./Components/Display";

function App() {
	const [letterDisplay, setLetterDisplay] = useState("A");
	const [imageUrl, setImageUrl] = useState("ant");
	const [animalCategory, setAnimalCategory] = useState(true);

	return (
		<div className="container">
			<Display
				imageUrl={imageUrl}
				letterDisplay={letterDisplay}
				animalCategory={animalCategory}
			/>
			<Keyboard
				setImageUrl={setImageUrl}
				setLetterDisplay={setLetterDisplay}
				setAnimalCategory={setAnimalCategory}
				animalCategory={animalCategory}
			/>
		</div>
	);
}

export default App;
