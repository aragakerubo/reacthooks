import React, { useReducer } from "react";

const initialCount = 0;
const initHund = 100;

function reducer(currentState, action) {
	switch (action.type) {
		case "AddNumber":
			return currentState + action.payload;
		case "SubNumber":
			return currentState - action.payload;
		case "ResetNumber":
			return action.payload;
		default:
			return currentState;
	}
}

export default function CounterOne() {
	const [count, setCount] = useReducer(reducer, initialCount);
	return (
		<div>
			<p>Count - {count}</p>
			<button onClick={() => setCount({ type: "AddNumber", payload: 1 })}>
				Add One
			</button>
			<button onClick={() => setCount({ type: "SubNumber", payload: 1 })}>
				Minus One
			</button>
			<button
				onClick={() =>
					setCount({
						type: "ResetNumber",
						payload: initialCount,
					})
				}
			>
				Reset to Zero
			</button>
			<button
				onClick={() =>
					setCount({ type: "ResetNumber", payload: initHund })
				}
			>
				Reset to Hundred
			</button>
			<button
				onClick={() => setCount({ type: "AddNumber", payload: 16 })}
			>
				Add by 16
			</button>
			<button onClick={() => setCount({ type: "SubNumber", payload: 5 })}>
				Subtract by 5
			</button>
		</div>
	);
}
