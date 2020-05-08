import React from 'react';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOptions from './components/AddOption';
// import { render } from '@testing-library/react';

function App() {
	const title = 'Indecision';
	const subtitle = 'Put your life in the hands of computer.';
	const option = [ 'Thing one', 'Thing two', 'This four' ];

	return (
		<div className="App">
			<Header title={title} subtitle={subtitle} />
			<Action />
			<Options options={option} />
			<AddOptions />
		</div>
	);
}

export default App;
