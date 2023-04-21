import React, { useState, useReducer } from "react";

const initVal = 0;
const initTwo = 2;
// action -> 1. type 2. value
const reducer = (currentState, action) => {
	switch (action.type) {
		case "add":
			return currentState + action.value;
		case "sub":
			return currentState - action.value;
		case "reset":
			return action.value;
		default:
			return currentState;
	}
};
// USESTATE: setCount (newState) -> state
// USEREDUCER: setCount (action)-> reducer (newState)-> state
export default function CounterOnev2() {
	// const [count, setCount] = useState(initVal);
	const [count, setCount] = useReducer(reducer, initVal);
	return (
		<div>
			<h3>Count: {count}</h3>
			<button onClick={() => setCount({ type: "add", value: 1 })}>
				Add One
			</button>
			<br />
			<button onClick={() => setCount({ type: "sub", value: 1 })}>
				Subtract One
			</button>
			<br />
			<button onClick={() => setCount({ type: "reset", value: initVal })}>
				Reset to 0
			</button>
			<br />
			<button onClick={() => setCount({ type: "add", value: initTwo })}>
				Add 2
			</button>
			<br />
			<button onClick={() => setCount({ type: "sub", value: initTwo })}>
				Subtract 2
			</button>
			<br />
			<button onClick={() => setCount({ type: "reset", value: initTwo })}>
				Reset to 2
			</button>
		</div>
	);
}
