import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { Spin } from 'antd';
import Review from 'components/Review';
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
		let { url, cur, getMemberReview } = this.props;
		console.log(cur)
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
					getMemberReview({data:data.data,total:data.total});
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
		let { data, cur } = this.props;
		return (
		<div className='contentwrap'>
		{/*<div className='laodingmask'>
			<Spin size="large" tip='刷新中...' />
		</div>*/}			
			{cur==='0'?<Review data={data.review} />:<div>all</div>}
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
