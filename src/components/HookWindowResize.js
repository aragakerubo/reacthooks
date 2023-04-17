import React, { useState, useEffect } from "react";

export default function HookWindowResize() {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerWidth);

	const logWidthHeight = () => {
		console.log("Logging width and height...");
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		console.log("Adding event listener...");

		window.addEventListener("resize", logWidthHeight);

		return () => {
			console.log("Unmounting component & cleaning up side effects...");
			window.removeEventListener("resize", logWidthHeight);
		};
	}, []);

	return (
		<div>
			<h3>Width: {width}</h3>
			<h3>Height: {height}</h3>
		</div>
	);
}
