import React, { Component } from "react";

export default class ClassCounter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
		this.justAValue = {
			count: 0,
		};
	}
	render() {
		return (
			<div>
				<p>Count - {this.state.count}</p>
				<button
					onClick={() =>
						this.setState({ count: this.state.count + 1 })
					}
				>
					State Count
				</button>
				<p>Count - {this.justAValue.count}</p>
				<button
					onClick={() =>
						(this.justAValue.count = this.justAValue.count + 1)
					}
				>
					State Count
				</button>
			</div>
		);
	}
}
