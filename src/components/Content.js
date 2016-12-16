import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	let { nav: { current, navigator }, routing:{locationBeforeTransitions} } = state;
	return {
		name: navigator.swiper[current.tt]?navigator.swiper[current.tt][current.swiper]:navigator.title[current.tt],
		localpath:locationBeforeTransitions.pathname
	};
}

class Content extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { name, localpath } = this.props;
		console.log(localpath)
		return (
			<div className='contentwrap'>
				<h2>{name}</h2>
			</div>
		);
	}
}

Content.PropTypes = {
	name: PropTypes.string
}
export default connect(
	mapStateToProps
)(Content);