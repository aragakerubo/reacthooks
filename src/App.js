import "./App.css";
import React from "react";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseCountainer from "./components/MouseCountainer";
import DataFetching from "./components/DataFetching";

function App() {
	return (
		<div className="App">
			<DataFetching />
		</div>
	);
}

export default App;
