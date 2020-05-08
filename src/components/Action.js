import React, { Component } from 'react';

class Action extends Component {
	handleClick() {
		alert('Mai Handle click hu!!🙋‍♂️');
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>What should I do?</button>
			</div>
		);
	}
}

export default Action;
