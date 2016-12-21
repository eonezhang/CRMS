import React from 'react';
import { Modal, Button, Menu } from 'antd';
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
		let { data } = this.props;
		console.log(data);
		return (
			<div>
				<Modal title="查看详情" visible={this.props.show}
					onOk={this.handleOk} onCancel={this.handleCancel}
					footer={[
						<Button key="back" onClick={this.handleCancel}>返回</Button>,
						<Button key="pass" onClick={this.handleCancel}>通过</Button>,
						<Button key="submit" /*loading={this.state.loading}*/ onClick={this.handleOk}>拒绝</Button>
					]}
				>
					<p>申请内容</p>
					<p>申请人:{data.truename}</p>
					<Menu defaultActiveKey={['1']} mode="inline">
						<SubMenu title="餐饮信息">
							<p>餐饮信息</p>
						</SubMenu>
						<SubMenu title="餐厅招牌照片">
							<p>餐厅照片照片</p>
						</SubMenu>
						<SubMenu title="餐厅后厨照片">
							<p>餐厅后厨照片</p>
						</SubMenu>
						<SubMenu title="餐厅菜单照片">
							<p>餐厅菜单照片</p>
						</SubMenu>
					</Menu>
				</Modal>
			</div>
		);
	}
}
