import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Content from './containers/Content'
export default (
	<Route path="/" component={App}>
		<IndexRoute component={Content}/>
	</Route>
);
