import React from 'react';
import Option from './Option';

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOption}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started</p>}
			{props.options.map((option, index) => {
				return <Option key={index} optionText={option} handleRemoveOption={props.handleRemoveOption} />;
			})}
		</div>
	);
};

export default Options;
