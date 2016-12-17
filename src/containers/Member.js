import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { Spin } from 'antd';

function mapStateToProps(state) {
	return {
		url: state.base.ajax
	};
}

export class Member extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('in')
		let { url } = this.props;
		request.post(`${url}/youzan/member/query`)
		.send({
			'currentpage': 0,
			'pagesize': 20,
			'querytype': 1
		})
		.end((err, res)=>{
			if(err){
				console.log(err);
			}else{
				let data = res.body;
				if(data.code === '1000'){
					console.log(data);
				}else{
					console.log(data.msg)
				}
			}
		})
	}
	render() {
		return (
		<div className='contentwrap'>
		<div className='laodingmask'>
			<Spin size="large" tip='刷新中...' />
		</div>
		</div>
		);
	}
}

export default connect(
	mapStateToProps,
// Implement map dispatch to props
)(Member)
