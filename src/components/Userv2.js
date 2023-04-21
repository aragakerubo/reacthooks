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

// const newUserDetails = {
//     admin: true,
//     online: true
// }

// const newUpdatedUser = {
//     ...firstUser, ...newUserDetails
// }

const reducer = (currentState, action) => {
	return { ...currentState, ...action };
};

// USESTATE: setUser (...prevState, newState) -> state
// USEREDUCER: setUser ({newDetails})-> reducer {current}+{newDetails}(newState)-> state
export default function Userv2() {
	// const [user, setUser] = useState(firstUser);
	const [user, setUser] = useReducer(reducer, firstUser);
	const [email, setEmail] = useState(user.email);

	return (
		<div>
			<h4>Welcome {user.firstName}!</h4>
			<p>
				Location: {user.city}, {user.country}
			</p>
			<p>Email: {user.email}</p>
			<p>Administrator: {user.admin ? "Yes" : "No"}</p>

			<label htmlFor="email">New Email:</label>
			<input
				name="email"
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button onClick={() => setUser({ email })}>Update</button>
			<br />

			<button onClick={() => setUser({ admin: true })}>
				Set to Administrator
			</button>
		</div>
	);
}
