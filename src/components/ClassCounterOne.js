import React, { Component } from "react";

export default class ClassCounterOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			name: "",
		};
	}

	componentDidMount() {
		console.log("Component mounted... Doc title set.");
		document.title = `Clicked ${this.state.count} times`;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log("Component updated... Doc title set.");
			document.title = `Updated ${this.state.count} times`;
		}
	}

	render() {
		return (
			<div>
				<p>Count - {this.state.count}</p>
				<button
					onClick={() =>
						this.setState((prevState) => ({
							count: prevState.count + 1,
						}))
					}
				>
					Add Count
				</button>
				<br />
				<input
					type="text"
					value={this.state.name}
					onChange={(e) => {
						console.log(e);
						this.setState({ name: e.target.value });
					}}
				/>
			</div>
		);
	}
}
