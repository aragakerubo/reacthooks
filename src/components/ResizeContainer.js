import React, { useState } from "react";
import HookWindowResize from "./HookWindowResize";

export default function ResizeContainer() {
	const [toggle, setToggle] = useState(true);
	return (
		<div>
			<h4>Toogle component</h4>
			<button onClick={() => setToggle((toggle) => !toggle)}>
				Toggle
			</button>
			{toggle && <HookWindowResize />}
		</div>
	);
}
