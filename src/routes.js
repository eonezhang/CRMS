import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Content from './components/Content';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Content}/>
		<Route path='trial' component={Content}/>
		<Route path='menber' component={Content}/>
		<Route path='order' component={Content}/>
		<Route path='tag' component={Content}/>
	</Route>
);
