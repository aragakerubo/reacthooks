import React, { useState } from "react";
import useFetch from "../utils/useFetch";

export default function DataFetchv2() {
	const [postId, setPostId] = useState(1);
	const [enterPostId, setEnterPostId] = useState(1);
	const [todoId, setTodoId] = useState(1);
	const [enterTodoId, setEnterTodoId] = useState(1);

	const [post] = useFetch(
		`https://jsonplaceholder.typicode.com/posts/${enterPostId}`
	);
	const [todo] = useFetch(
		`https://jsonplaceholder.typicode.com/todos/${enterTodoId}`
	);

	// useEffect(() => {
	// 	console.log("Fetching posts...");
	// 	fetch(`https://jsonplaceholder.typicode.com/posts/${enterPostId}`)
	// 		.then((response) => response.json())
	// 		.then((data) => setPost(data))
	// 		.catch((error) => console.error(error));
	// }, [enterPostId]);

	// useEffect(() => {
	// 	console.log("Fetching todos...");
	// 	fetch(`https://jsonplaceholder.typicode.com/todos/${enterTodoId}`)
	// 		.then((response) => response.json())
	// 		.then((data) => setTodo(data))
	// 		.catch((error) => console.error(error));
	// }, [enterTodoId]);

	return (
		<div>
			<label htmlFor="post-id">Set post id</label>
			<input
				name="post-id"
				value={postId}
				onChange={(e) => setPostId(e.target.value)}
			/>
			<button onClick={() => setEnterPostId(postId)}>Fetch Post</button>
			<br />
			<label htmlFor="todo-id">Set todo id</label>
			<input
				name="todo-id"
				value={todoId}
				onChange={(e) => setTodoId(e.target.value)}
			/>
			<button onClick={() => setEnterTodoId(todoId)}>Fetch Todo</button>
			<h3>
				{post.title} by user {post.userId}
			</h3>
			<h3>
				{todo.title} by user {todo.userId}
			</h3>
		</div>
	);
}
