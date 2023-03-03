import React, { useContext } from "react";
import { UserContext } from "../App";

export default function ComponentF() {
	const { user } = useContext(UserContext);
	return <div>ComponentF: Hi {user}</div>;
}
