import React, { Component } from 'react';
import SurveyForm from './surveyForm';

class SurveyNew extends Component {
	render () {
		return (
			<div>
				<h2 style={{ margin: '10px 0', color: '#EE6E73' }}>Create A Campaign</h2>
				<SurveyForm />
			</div>
		);
	}
}

export default SurveyNew;
