import React from 'react';
import Navigation from './Navigation';

class Layout extends React.Component {
	render() {
		return (
			<div>
				<Navigation />
				{this.props.children}
			</div>
		)
	}
}

export default Layout;
