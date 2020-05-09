import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOptions from './components/AddOption';
// import { render } from '@testing-library/react';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handleRemoveOption = this.handleRemoveOption.bind(this);
		this.state = {
			option: []
		};
	}
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const option = JSON.parse(json);
			if (option) {
				this.setState(() => ({ option }));
			}
		} catch (error) {
			//do nothing
		}
	}
	componentDidUpdate(prevState) {
		if (prevState.option.length !== this.state.option.length) {
			const json = JSON.stringify(this.state.option);
			localStorage.setItem('options', json);
		}
	}
	handleDeleteOption() {
		this.setState(() => ({ option: [] }));
	}
	handlePick() {
		let randomNum = Math.floor(Math.random() * this.state.option.length);
		alert(this.state.option[randomNum]);
	}
	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.option.indexOf(option) > -1) {
			return 'This option already exists';
		}
		this.setState((prevValue) => ({ option: [ ...prevValue.option, option ] }));
	}
	handleRemoveOption(optionToRemove) {
		this.setState((prevValue) => ({
			option: prevValue.option.filter((option) => optionToRemove !== option)
		}));
	}
	render() {
		const subtitle = 'Put your life in the hands of computer.';
		return (
			<div className="App">
				<Header subtitle={subtitle} />
				<Action handlePick={this.handlePick} hasOptions={this.state.option.length > 0} />
				<Options
					options={this.state.option}
					handleRemoveOption={this.handleRemoveOption}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOptions handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

export default App;
