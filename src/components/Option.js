import React from 'react';

const Option = (props) => (
	<div>
		{props.optionText}
		<button
			onClick={() => {
				props.handleRemoveOption(props.optionText);
			}}
		>
			Remove
		</button>
	</div>
);

export default Option;
