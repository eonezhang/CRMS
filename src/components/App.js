import React, { PropTypes } from 'react';
import logo from 'images/logo.svg';

const App = ({ children }) =>
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Welcome to React</h2>
		</div>
		<p className="App-intro">
		To get started, edit <code>src/containers/Main.js</code> and save to reload.
		</p>
		{children}
	</div>

App.PropTypes = {
	children: PropTypes.object
};

export default App;