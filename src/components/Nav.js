import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Menu, Breadcrumb, Icon } from 'antd';

const mapStateToProps = state => {
	return {
		nav: state.nav
	};
}
const mapDispatchToProps = dispatch => {
	return {
		//changeSwaper:bindActionCreators(changeSwaper,dispatch)
	}
}
class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
	change = ({ key }) => {
		console.log(key)
		this.setState({
			current: key
		})
	}
	render() {
		let { nav: { navigator: navigator}, nav: { current: current } } = this.props;
		let	ttlist = navigator.title.map((item, index)=><Menu.Item key={index}>{item}</Menu.Item>);
		let swlist = navigator.swaper[current]?navigator.swaper[current].map((item, index)=><Menu.Item key={index}>{item}</Menu.Item>):null;
		console.log(current)
		return (
		<div className="ant-layout-topaside">
			<div className="ant-layout-header">
			<div className="ant-layout-wrapper">
				<div className="ant-layout-logo">有点火会员管理系统</div>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} style={{lineHeight: '64px'}} onSelect={this.change}>
				{ttlist}
					{/*<Icon type="question-circle-o" />*/}
				</Menu>
			</div>
			</div>
			<div className="ant-layout-subheader">
			<div className="ant-layout-wrapper">
				<Menu mode="horizontal"
				defaultSelectedKeys={['1']} style={{marginLeft: 400}}>
				{swlist}
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);