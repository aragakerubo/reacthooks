import React, { Component } from "react";

export default class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	reset() {
		this.setState(
			{
				count: 0,
			},
			() => {
				console.log(this.state.count);
			}
		);
	}
	increment() {
		this.setState(
			{
				count: this.state.count + 5,
			},
			() => {
				console.log(this.state.count + 5);
			}
		);
	}
	decrement() {
		this.setState(
			{
				count: this.state.count - 5,
			},
			() => {
				console.log(this.state.count - 5);
			}
		);
	}
	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<h1>Count:- {this.state.count}</h1>
				<button onClick={() => this.reset()}>Reset</button>
				<button onClick={() => this.increment()}>Increment</button>
				<button onClick={() => this.decrement()}>decrement</button>
			</div>
		);
	}
}
