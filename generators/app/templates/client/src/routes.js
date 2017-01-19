import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from './modules/Home';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home} />

			<Route path="home" component={Home} />
		</Route>
	</Router>
);

export default Routes;
