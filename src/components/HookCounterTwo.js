import React, { useState } from "react";

export default function HookCounterTwo() {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);

	const incrementByFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevState) => prevState + 1);
		}
	};

	return (
		<div>
			<p>Count - {count}</p>
			<button onClick={() => setCount(count + 1)}>Add</button>
			<button onClick={() => setCount(count - 1)}>Subtract</button>
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={incrementByFive}>Add Five</button>
		</div>
	);
}
