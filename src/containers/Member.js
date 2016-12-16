import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {

	};
}

export class Member extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div className='contentwrap'>
			
		</div>
		);
	}
}

export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(Member)
