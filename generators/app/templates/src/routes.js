import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './modules/Layout';
import Home from './modules/Home';
import Tab1 from './modules/Tab1';
import Tab2 from './modules/Tab2';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home} />

			<Route path="tab1" component={Tab1} />
			<Route path="tab2" component={Tab2} />
		</Route>
	</Router>
);

export default Routes;
