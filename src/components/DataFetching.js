import React, { useState, useEffect } from "react";

export default function DataFetching() {
	const [post, setPost] = useState([]);
	const [id, setId] = useState(1);
	const [idFromButton, setIdFromButton] = useState(1);

	useEffect(() => {
		// fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
		// 	.then((res) => res.json())
		// 	.then((data) => setPost(data))
		// 	.catch((err) => console.error(err));

		async function getPost() {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${idFromButton}`
			).catch((err) => console.error(err));
			const data = await res.json();
			setPost(data);
		}
		getPost();
	}, [idFromButton]);

	return (
		<div>
			<input
				type="text"
				value={id}
				onChange={(e) => setId(e.target.value)}
			/>
			<button onClick={() => setIdFromButton(id)}>Fetch Post</button>
			<p>{post.title}</p>
		</div>
	);
}
