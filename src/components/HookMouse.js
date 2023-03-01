import React, { useState, useEffect } from "react";

export default function HookMouse() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	function logMousePositon(e) {
		console.log("Mouse is moving");
		setY(e.clientY);
		setX(e.clientX);
	}

	useEffect(() => {
		console.log("Use effect still running...");
		window.addEventListener("mousemove", logMousePositon);

		return () => {
			console.log("Unmounting component...");
			window.removeEventListener("mousemove", logMousePositon);
		};
	}, []);

	return (
		<div>
			X - {x} <br /> Y - {y}
		</div>
	);
}
