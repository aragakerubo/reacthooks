import React, { useState } from "react";

export default function HookCounterThree() {
	const [name, setName] = useState({ firstName: "", lastName: "" });
	return (
		<div>
			<form>
				<input
					type="text"
					name="firstname"
					value={name.firstName}
					onChange={(e) =>
						setName({ ...name, firstName: e.target.value })
					}
				/>
				<input
					type="text"
					name="lastname"
					value={name.lastName}
					onChange={(e) =>
						setName({ ...name, lastName: e.target.value })
					}
				/>
			</form>
			<h3>First Name - {name.firstName}</h3>
			<h3>Last Name - {name.lastName}</h3>
		</div>
	);
}
