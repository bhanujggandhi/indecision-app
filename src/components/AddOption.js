import React, { Component } from 'react';

class AddOption extends Component {
	handleAddOption(event) {
		event.preventDefault();
		const newValue = event.target.elements.option.value.trim();
		if (newValue) {
			alert('aa gyi hai');
			event.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

export default AddOption;
