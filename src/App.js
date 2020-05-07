import React from 'react';
import './App.css';

function App() {
	const app = {
		title: 'Indecision App',
		subtitle: 'Put your life in the hands of computer. hihiahaha',
		options: [ 'one', 'two', 5, 'lallu' ]
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const newOption = event.target.elements.option.value;

		if (newOption) {
			app.options.push(newOption);

			event.target.elements.option.value = '';
		}
		console.log(app.options);
	};

	const wipeOut = () => {
		app.options = [];
		console.log(app.options);
	};

	const onRandomEvent = () => {
		const randomNum = Math.floor(Math.random() * app.options.length);
		const option = app.options[randomNum];
		alert(option);
		console.log(randomNum);
	};

	return (
		<div className="App">
			<h1>{app.title}</h1>
			{app.subtitle && <h2>{app.subtitle}</h2>}
			<p>Location: Panipat</p>
			{app.options.length > 0 ? <p>Here are your option</p> : <p>Oops no option</p>}
			<button disabled={app.options.length === 0} onClick={onRandomEvent}>
				What should I do?
			</button>
			<button onClick={wipeOut}>Remove All</button>
			<ol>
				{app.options.map((option, index) => {
					return <li key={index}>Item: {option}</li>;
				})}
			</ol>
			<form onSubmit={handleSubmit}>
				<input type="text" name="option" />
				<button>Add option</button>
			</form>
		</div>
	);
}

export default App;
