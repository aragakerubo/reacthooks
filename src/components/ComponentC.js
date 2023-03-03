import React, { useContext } from "react";
import ComponentE from "./ComponentE";
import { UserContext } from "../App";

const users = ["George", "Sara", "Moha", "Linda"];

export default function ComponentC() {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<div>ComponentC: Hi {user}</div>
			<select onChange={(e) => setUser(e.target.value)}>
				{users.map((user, index) => (
					<option key={index}>{user}</option>
				))}
			</select>
			<ComponentE />
		</div>
	);
}
