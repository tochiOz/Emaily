import React, { Component } from 'react';

class Header extends Component {
	render () {
		return (
			<div className='navbar-fixed'>
				<nav>
					<div className='nav-wrapper'>
						<a className='left brand-logo'>Emailly</a>
						<ul className='right'>
							<li>
								<a href='/auth/google'>Login With Google</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
