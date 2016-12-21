import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { changeTitle, changeSwiper } from 'actions'
import { Menu, Breadcrumb, Icon, Row, Col } from 'antd';
import request from 'superagent';

const mapStateToProps = state => {
	return {
		nav: state.nav
	};
}
const mapDispatchToProps = dispatch => {
	return {
		changeTitle: bindActionCreators(changeTitle, dispatch),
		changeSwiper: bindActionCreators(changeSwiper, dispatch)
	}
}
class Nav extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		let { location, changeTitle, changeSwiper } = this.props;
		if(location.pathname){
			switch(location.pathname){
				case '/trial':
				changeTitle('1');changeSwiper('0');
				break;
				case '/member':
				changeTitle('2');changeSwiper('0');
				break;
				case '/order':
				changeTitle('3');changeSwiper(null);
				break;
				case '/tag':
				changeTitle('4');changeSwiper(null);
				break;
			}
		}
	}
	componentWillReceiveProps(nextProps) {
		console.log('in')
	}
	titleSelect = ({ key }) => {
		let { changeTitle, changeSwiper, nav: { navigator: navigator} } = this.props;
		changeTitle(key);
		changeSwiper(navigator.swiper[key]?'0':null);

	}
	swiperSelect = ({ key }) => {
		let { changeSwiper } = this.props;
		changeSwiper(key)
	}
	render() {
		let { nav: { navigator: navigator, current: current} } = this.props;
		let tt = current.tt,link = current.swiper;
		let swlist = navigator.swiper[tt]?navigator.swiper[tt].map((item, index)=><Menu.Item key={index}>{item}</Menu.Item>):null;
		let linklist = tt==='0'?<Breadcrumb><Breadcrumb.Item>首页</Breadcrumb.Item></Breadcrumb>:
			<Breadcrumb>
				<Breadcrumb.Item>首页</Breadcrumb.Item>
				<Breadcrumb.Item>{navigator.title[tt]}</Breadcrumb.Item>
				<Breadcrumb.Item>{link?navigator.swiper[tt][link]:null}</Breadcrumb.Item>
			</Breadcrumb>
		return (
		<div className="ant-layout-topaside">
			<div className="ant-layout-header">
			<div className="ant-layout-wrapper">
				<div className="ant-layout-logo">有点火会员管理系统</div>
				<Row>
				<Col span={12}>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} style={{lineHeight: '64px'}} onSelect={this.titleSelect} selectedKeys={[tt]}>
						<Menu.Item key='0'><Link to='/'>首页</Link></Menu.Item>
						<Menu.Item key='1'><Link to='trial'>试用管理</Link></Menu.Item>
						<Menu.Item key='2'><Link to='member'>会员管理</Link></Menu.Item>
						<Menu.Item key='3'><Link to='order'>订单管理</Link></Menu.Item>
						<Menu.Item key='4'><Link to='tag'>标签管理</Link></Menu.Item>
					</Menu>
				</Col>
				<Col span={4}>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} style={{lineHeight: '64px'}} onSelect={this.titleSelect} selectedKeys={[tt]}>
						<Menu.Item key='9'><Icon type="question-circle-o" />帮助</Menu.Item>
					</Menu>
				</Col>
				</Row>
			</div>
			</div>
			<div className="ant-layout-subheader">
			<div className="ant-layout-wrapper">
				<Menu mode="horizontal" selectedKeys={[link]} style={{marginLeft: 312}} onSelect={this.swiperSelect}>
				{ swlist }
				</Menu>
			</div>
			</div>
			<div className="ant-layout-wrapper">
				<div className="ant-layout-breadcrumb">
				{ linklist }
				</div>
			</div>
		</div>
		);
	}
}
Nav.PropTypes = {
	nav: PropTypes.object
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);