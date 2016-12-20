import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Content from './components/Content';
import Trail from 'containers/Trail';
import Member from 'containers/Member';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Content}/>
		<Route path='trial' component={Trail}/>
		<Route path='member' component={Member}>
		</Route>
		<Route path='order' component={Content}/>
		<Route path='tag' component={Content}/>
	</Route>
);
