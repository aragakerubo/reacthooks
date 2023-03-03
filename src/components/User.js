import React, { useState, useReducer } from "react";

const firstUser = {
	id: "039145451",
	firstName: "Henry",
	lastName: "Kavuli",
	country: "Kenya",
	city: "Nairobi",
	email: "henry.kav@gmail.com",
	admin: false,
};

function reducer(currentState, newStateDetails) {
	return { ...currentState, ...newStateDetails };
}

export default function User() {
	const [user, setUser] = useReducer(reducer, firstUser);
	const [country, setCountry] = useState("");
	return (
		<div>
			<p>
				Name: {user.firstName} {user.lastName} <br />
				Location: {user.city}, {user.country} <br />
				Administrator: {user.admin ? "Yes" : "No"}
			</p>
			<button onClick={() => setUser({ admin: true })}>
				Make Administrator
			</button>{" "}
			<br />
			<input
				type="text"
				value={country}
				onChange={(e) => setCountry(e.target.value)}
			/>
			<button onClick={() => setUser({ country })}>Set Country</button>
		</div>
	);
}
