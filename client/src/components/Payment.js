import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

//connecting payment component to the store
import { connect } from 'react-redux';
import * as actions from './../actions';

class Payment extends Component {
	render () {
		return (
			<StripeCheckout
				name='Emailly'
				description='$5 for 5 Email Credits'
				amount={500}
				token={(token) => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_APP}
			>
				<button className='waves-effect waves-light btn'>Add Credits</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions)(Payment);
