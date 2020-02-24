import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './../App.css';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const Survey = () => <h2>Survey</h2>;
const Landing = () => <h2>Landing</h2>;

function App (){
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

export default App;
