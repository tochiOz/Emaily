import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import surveyField from './surveyField';
import _ from 'lodash';
import formFields from './formFields';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {
	renderFields () {
		return _.map(formFields, ({ label, name }) => {
			return <Field key={name} label={label} type='text' name={name} component={surveyField} />;
		});
	}
	render () {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
					{this.renderFields()}
					<Link to='/surveys' className='red left btn-flat white-text'>
						<i className='material-icons right'>arrow_back</i>
						Cancel
					</Link>
					<button type='submit' className='teal btn-flat right white-text'>
						Next
						<i className='material-icons right'>done</i>
					</button>
				</form>
			</div>
		);
	}
}

// validators
function validate (values){
	const errors = {};

	// validate emails
	errors.recipients = validateEmails(values.recipients || '');

	// looping through all name attributes of the input tag
	_.each(formFields, ({ name, noValueError }) => {
		if (!values[name]) {
			errors[name] = noValueError;
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm'
})(SurveyForm);
