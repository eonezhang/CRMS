import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import { Modal } from 'antd';
const confirm = Modal.confirm;
import Review from 'components/Review';
import All from 'components/Allmenber';
import { getMemberReview, getMemberAll, delData } from 'actions/data'

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
	reviewPass = (index, data) => {
		console.log(index, data)
		let { url, delData } = this.props;
		confirm({
			content: '你是否确认通过此用户的申请',
			onOk() {
				return new Promise((resolve, reject) => {
					request.post(`${url}/youzan/uploadresult`)
					.send({
						'type': 1,
						'resultlist': [
							{
								'mobile': data.mobile,
								'openid': data.openid,
								'result': '1'
							}
						]
					})
					.end((err, res)=>{
						if(err){
							console.log(err);
							reject()
						}else{
							let data = res.body;
							if(data.code === '1000'){
								console.log(data);
								delData(1,index);
								resolve()
							}else{
								console.log(data.msg)
								reject()
							}
						}
					})
				}).catch(() => console.log('Oops errors!'));
			},
			onCancel() {}
		});

	}
	reviewReject = (index, data) => {
		console.log(index, data)
		let { url, delData } = this.props;
		confirm({
			content: '你是否确认拒绝此用户的申请',
			onOk() {
				return new Promise((resolve, reject) => {
					request.post(`${url}/youzan/uploadresult`)
					.send({
						'type': 1,
						'resultlist': [
							{
								'mobile': data.mobile,
								'openid': data.openid,
								'result': '0'
							}
						]
					})
					.end((err, res)=>{
						if(err){
							console.log(err);
							reject()
						}else{
							let data = res.body;
							if(data.code === '1000'){
								console.log(data);
								delData(1,index);
								resolve()
							}else{
								console.log(data.msg)
								reject()
							}
						}
					})
				}).catch(() => console.log('Oops errors!'));
			},
			onCancel() {}
		});
	}
	render() {
		let { data, cur, url } = this.props;
		return (
		<div className='contentwrap'>
			{cur==='0'?<Review data={data.review} ajax={url} pass={this.reviewPass} reject={this.reviewReject} />:<All data={data.all} ajax={url} />}
		</div>
		);
	}
}

export default connect(
	mapStateToProps,{
		getMemberReview,
		getMemberAll,
		delData
	}
)(Member)
