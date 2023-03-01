import React, { useState } from "react";

export default function HookCounterFour() {
	const [items, setItems] = useState([]);
	const [name, setName] = useState("");

	const handleItems = () => {
		setItems([...items, name]);
	};

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={handleItems}>Add student</button>
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
}
