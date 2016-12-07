import React, { PropTypes } from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
	change = ({ key }) => {
		console.log(key)
	}
	render() {
		return (
		<div className="ant-layout-topaside">
			<div className="ant-layout-header">
			<div className="ant-layout-wrapper">
				<div className="ant-layout-logo">有点火会员管理系统</div>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} style={{lineHeight: '64px'}} onSelect={this.change}>
					<Menu.Item key="0">首页</Menu.Item>
					<Menu.Item key="1">试用管理</Menu.Item>
					<Menu.Item key="2">会员管理</Menu.Item>
					<Menu.Item key="3">订单管理</Menu.Item>
					<Menu.Item key="4">标签管理</Menu.Item>
					<Icon type="question-circle-o" />
				</Menu>
			</div>
			</div>
			<div className="ant-layout-subheader">
			<div className="ant-layout-wrapper">
				<Menu mode="horizontal"
				defaultSelectedKeys={['1']} style={{marginLeft: 400}}>
					<Menu.Item key="1">餐厅审核</Menu.Item>
					<Menu.Item key="2">已认证会员</Menu.Item>
					<Menu.Item key="3">全部会员</Menu.Item>
				</Menu>
			</div>
			</div>
			<div className="ant-layout-wrapper">
				<div className="ant-layout-breadcrumb">
				<Breadcrumb>
					<Breadcrumb.Item>首页</Breadcrumb.Item>
					<Breadcrumb.Item>应用列表</Breadcrumb.Item>
					<Breadcrumb.Item>某应用</Breadcrumb.Item>
				</Breadcrumb>
				</div>
			</div>
		</div>
		);
	}
}
Nav.PropTypes = {

}