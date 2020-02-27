import React, { Component } from 'react';
import SurveyForm from './surveyForm';
import SurveyReview from './surveyFormReview';

class SurveyNew extends Component {
	//define general state
	state = { showFormReview: false };

	//define a helper function
	renderContent () {
		if (this.state.showFormReview) {
			return <SurveyReview onCancel={() => this.setState({ showFormReview: false })} />;
		}

		return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />;
	}
	render () {
		return (
			<div>
				<h2 style={{ margin: '10px 0', color: '#EE6E73' }}>Create A Campaign</h2>
				{this.renderContent()}
			</div>
		);
	}
}

export default SurveyNew;
