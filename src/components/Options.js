import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}
	handleRemove() {
		alert('Mai sab uda duga babe 🙋‍♂️');
	}
	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteOption}>Remove All</button>
				<div>
					{this.props.options.map((option, index) => {
						return <Option key={index} optionText={option} />;
					})}
				</div>
			</div>
		);
	}
}

export default Options;
