import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
//import { Spin } from 'antd';
import Review from 'components/Review';
import All from 'components/Allmenber';
import { getMemberReview, getMemberAll } from 'actions/data'

function mapStateToProps(state) {
	return {
		url: state.base.ajax,
		data: state.member,
		cur: state.nav.current.swiper
	};
}

export class Member extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let { url, cur, getMemberReview, getMemberAll } = this.props;
		console.log(cur)
		request.post(`${url}/youzan/member/query`)
		.send({
			'querytype': 1
		})
		.end((err, res)=>{
			if(err){
				console.log(err);
			}else{
				let data = res.body;
				if(data.code === '1000'){
					console.log(data);
					getMemberReview({data:data.data,total:data.total});
				}else{
					console.log(data.msg)
				}
			}
		});
		request.post(`${url}/youzan/member/query`)
		.send({
			'currentpage': 0,
			'pagesize': 20,
			'querytype': 10
		})
		.end((err, res)=>{
			if(err){
				console.log(err);
			}else{
				let data = res.body;
				if(data.code === '1000'){
					console.log(data);
					getMemberAll({data:data.data,total:data.total});
				}else{
					console.log(data.msg)
				}
			}
		})
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}
	render() {
		let { data, cur, url } = this.props;
		return (
		<div className='contentwrap'>
			{cur==='0'?<Review data={data.review} ajax={url} />:<All data={data.all} ajax={url} />}
		</div>
		);
	}
}

export default connect(
	mapStateToProps,{
		getMemberReview,
		getMemberAll
	}
)(Member)
