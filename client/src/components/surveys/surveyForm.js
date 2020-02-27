import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import surveyField from './surveyField';
import _ from 'lodash';
import formFields from './formFields';
import { Link } from 'react-router-dom';

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
					<Link to='/surveys' className='red btn-flat white-text'>
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

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm);
