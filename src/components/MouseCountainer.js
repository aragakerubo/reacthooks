import React, { useState } from "react";
import HookMouse from "./HookMouse";

export default function MouseCountainer() {
	const [display, setDisplay] = useState(true);
	return (
		<div>
			<button onClick={() => setDisplay((prevState) => !prevState)}>
				Toggle
			</button>

			{display && <HookMouse />}
		</div>
	);
}
