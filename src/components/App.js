import React, { PropTypes } from 'react';
import Nav from './Nav';

const App = ({ children, location }) =>
	<div className="App">
		<Nav location={location}/>
		{children}
	</div>

App.PropTypes = {
	children: PropTypes.object
};

export default App;