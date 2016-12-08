import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
	let { nav: { current, navigator } } = state;
	console.log(current,navigator)
	return {
		name: navigator.swiper[current.tt]?navigator.swiper[current.tt][current.swiper]:navigator.title[current.tt]
	};
}
const mapDispatchToProps = dispatch => {
	return {
		//changeTitle: bindActionCreators(changeTitle, dispatch)
	}
}

class Content extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { name } = this.props;
		return (
			<div className='contentwrap'>
				<h2>{name}</h2>
				<div>{}</div>
			</div>
		);
	}
}

Content.PropTypes = {
	name: PropTypes.string
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content);