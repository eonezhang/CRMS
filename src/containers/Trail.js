import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	let { nav: { current: { swiper } }, routing: {locationBeforeTransitions} } = state;
	return {
		localpath: locationBeforeTransitions.pathname,
		cur: swiper
	};
}

export class Trail extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
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
)(Trail)
