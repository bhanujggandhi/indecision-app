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
		this.state = {
			option: []
		};
	}
	handleDeleteOption() {
		this.setState(() => {
			return {
				option: []
			};
		});
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
		this.setState((prevValue) => {
			return {
				option: [ ...prevValue.option, option ]
			};
		});
	}
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of computer.';
		return (
			<div className="App">
				<Header title={title} subtitle={subtitle} />
				<Action handlePick={this.handlePick} hasOptions={this.state.option.length > 0} />
				<Options options={this.state.option} handleDeleteOption={this.handleDeleteOption} />
				<AddOptions handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

export default App;
