import React from 'react';
import { Modal, Button, Menu, Row, Col } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Detailtag extends React.Component {
	constructor(props) {
		super(props);
		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}
	handleOk() {
		console.log('Clicked OK');
		this.props.change()
	}
	handleCancel(e) {
		console.log(e);
		this.props.change()
	}
	render() {
		let { data, style } = this.props;
		console.log(data);
		let shopnamepic,kitchenpic,cookbookpic,pics = data.picture?data.picture.split(';'):'';
		if(pics){
			pics.length -= 1;
			shopnamepic = pics.filter(val=>val.search(/shopname/g)>0?true:false)
			kitchenpic = pics.filter(val=>val.search(/kitchen/g)>0?true:false)
			cookbookpic = pics.filter(val=>val.search(/cookbook/g)>0?true:false)
			console.log(shopnamepic,kitchenpic,cookbookpic)
		}
		return (
			<div className='detailwrap'>
				<Modal wrapClassName='detailcontent' title="查看详情" visible={this.props.show}
					onOk={this.handleOk} onCancel={this.handleCancel}
					width={800}
					style={style}
					footer={[
						<Button key="back" onClick={this.handleCancel}>返回</Button>,
						<Button key="pass" onClick={this.handleCancel}>通过</Button>,
						<Button key="submit" /*loading={this.state.loading}*/ onClick={this.handleOk}>拒绝</Button>
					]}
				>
					<p>申请内容</p>
					<Row className='detaiItem'>
						<Col span={12}>申请人: {data.truename}</Col>
						<Col span={12}>手机号码: {data.mobile}</Col>
					</Row>
					<p  className='detaiItem'>申请类型:</p>
					<p  className='detaiItem'>申请理由: {data.reason}</p>
					<p  className='detaiItem'>申请时间: {data.createtime}</p>

					<Menu defaultOpenKeys={['1','2','3','4']} mode="inline">
						<SubMenu key='1' title="餐饮信息">
						<Row>
							<Col span={12}>餐厅名称: {data.restaurantname}</Col>
							<Col span={12}>职位: {data.position}</Col>
						</Row>
						<Row>
							<Col span={12}>业态: {data.mode}</Col>
							<Col span={12}>人均: {data.price}</Col>
						</Row>
						<Row>地址: {data.restaurantaddress}</Row>
						</SubMenu>
						<SubMenu key='2' title="餐厅招牌照片">
							<Row className='detailPic' type='flex'>
								{shopnamepic&&shopnamepic.map((item,index)=><Col key={index} span={6}><img src={item} alt="店招"/></Col>)}
							</Row>
						</SubMenu>
						<SubMenu key='3' title="餐厅后厨照片">
							<Row className='detailPic' type='flex'>
								{kitchenpic&&kitchenpic.map((item,index)=><Col  key={index} span={6}><img src={item} alt="后厨"/></Col>)}
							</Row>
						</SubMenu>
						<SubMenu key='4' title="餐厅菜单照片">
							<Row className='detailPic' type='flex'>
								{cookbookpic&&cookbookpic.map((item,index)=><Col key={index} span={6}><img src={item} alt="菜单"/></Col>)}
							</Row>
						</SubMenu>
					</Menu>
				</Modal>
			</div>
		);
	}
}
