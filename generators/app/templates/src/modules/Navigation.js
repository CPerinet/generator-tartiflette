import React from 'react';
import {Link} from 'react-router'

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
				<Link to="/"><p>Home</p></Link>

				<ul>
					<li><Link activeClassName="active" to="/tab1">Tab1</Link></li>
					<li><Link activeClassName="active" to="/tab2">Tab2</Link></li>
				</ul>
			</div>
		)
	}
}

export default Navigation
