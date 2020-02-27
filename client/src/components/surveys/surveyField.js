// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	console.log(label);
	// ...input exposes the input to all the callback finctions that are with the input tag from redux-form
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: '5px' }} />
			<div className='red-text' style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
