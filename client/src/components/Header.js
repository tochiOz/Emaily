import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';

class Header extends Component {
	//function used to showcase values from the store
	renderContent () {
		switch (this.props.auth) {
			case null:
				return (
					<div style={{ marginTop: '5px' }} className='preloader-wrapper small active'>
						<div className='spinner-layer spinner-red-only'>
							<div className='circle-clipper left'>
								<div className='circle' />
							</div>
							<div className='gap-patch'>
								<div className='circle' />
							</div>
							<div className='circle-clipper right'>
								<div className='circle' />
							</div>
						</div>
					</div>
				);
			case false:
				return (
					<li>
						<a href='/api/auth/google'>Login With Google</a>
					</li>
				);
			default:
				return [
					<li key='1'>
						<Payment />
					</li>,
					<li key='3' style={{ margin: ' 0 10px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key='2'>
						<a href='/api/logout'>Logout</a>
					</li>
				];
		}
	}

	render () {
		return (
			<div className='navbar-fixed'>
				<nav style={{ padding: ' 0px 60px' }}>
					<div className='nav-wrapper'>
						<Link
							to={

									this.props.auth ? '/surveys' :
									'/'
							}
							className='left brand-logo'
						>
							Emaily
						</Link>
						<ul className='right'>{this.renderContent()}</ul>
					</div>
				</nav>
			</div>
		);
	}
}

//connecting header component to the store
function mapStateToProps ({ auth }){
	return { auth };
}

export default connect(mapStateToProps)(Header);
