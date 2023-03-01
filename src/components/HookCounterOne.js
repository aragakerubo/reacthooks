import React, { useState, useEffect } from "react";

export default function HookCounterOne() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("Use effect ran...");
		document.title = `Hook Click ${count} times`;
	}, [count]);

	return (
		<div>
			<p>Count - {count}</p>
			<button onClick={() => setCount((prevState) => prevState + 1)}>
				Hook Add Count
			</button>
			<br />
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
}
