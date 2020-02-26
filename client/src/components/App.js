import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions';
import './../App.css';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Survey from './surveys/surveyNew';

class App extends Component {
	componentDidMount () {
		//calling the action
		this.props.fetchUser();
	}
	render () {
		return (
			<div className='App'>
				<div className='App-header'>
					<BrowserRouter>
						<div>
							<Header />
							<div className='container'>
								<Route exact path='/' component={Landing} />
								<Route path='/surveys' component={Dashboard} />
								<Route path='/survey/new' component={Survey} />
							</div>
						</div>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(App);
