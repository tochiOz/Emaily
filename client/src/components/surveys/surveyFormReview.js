import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from './../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div style={{ color: 'black' }}>{formValues[name]}</div>
			</div>
		);
	});
	return (
		<div>
			<h5>Survey Form Review</h5>
			{reviewFields}
			<button className='yellow darken-2 btn-flat white-text' onClick={onCancel}>
				<i className='left material-icons'>arrow_back</i>
				Back
			</button>

			<button onClick={() => submitSurvey(formValues)} className='green btn-flat right white-text'>
				Send Survey
				<i className='material-icons right'>email</i>
			</button>
		</div>
	);
};

//redux helper to get redux state down to this component
function mapStateToProps (state){
	// console.log(state);
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyReview);
