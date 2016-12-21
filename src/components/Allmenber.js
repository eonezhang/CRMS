import React from 'react';
import { Table, DatePicker, Row, Col, Button, Select } from 'antd';
import { profession, shoptype, averagespend} from 'sources/cominfo'
const Option = Select.Option;
let moment = require('moment');
const { RangePicker } = DatePicker;
const columns = [{
	title: '手机号',
	dataIndex: 'mobile',
	width: 120,
	key: 'mobile'
}, {
	title: '姓名',
	dataIndex: 'truename',
	width: 120,
	key: 'truename'
}, {
	title: '餐厅名称',
	dataIndex: 'restaurantname',
	width: 120,
	key: 'restaurantname'
}, {
	title: '创建日期',
	dataIndex: 'createtime',
	width: 80,
	key: 'createtime',
	render: (text) => {
		let label = moment(text).format('YYYY-MM-DD HH:mm:ss');
		return <div>{label}</div>
	}
}, {
	title: '职位',
	dataIndex: 'position',
	width: 120,
	key: 'position',
	render: (text) => {
		let label = profession.find(i => i.value === text);
		return <div>{label?label.label:text}</div>
	}
}, {
	title: '业态',
	dataIndex: 'mode',
	width: 120,
	key: 'mode',
	render: (text) => {
		let label = shoptype.find(i => i.value === text);
		return <div>{label.label}</div>
	}
}, {
	title: '人均消费',
	dataIndex: 'price',
	width: 120,
	key: 'price',
	render: (text) => {
		let label = averagespend.find(i => i.value === text);
		return <div>{label?label.label:text}</div>
	}
}, {
	title: '地址',
	dataIndex: 'restaurantaddress',
	width: 120,
	key: 'restaurantaddress'
}, {
	title: '状态',
	dataIndex: 'state',
	width: 120,
	key: 'state',
	render: (text) => {
		let label = '';
		switch(text){
			case 1:
			label = '待审核';break;
			case 2:
			label = '已认证';break;
			case 3:
			label = '认证失败';break;
		}
		return <div>{label}</div>
	}
}, {
	title: '操作',
	key: 'operation',
	//fixed: 'right',
	width: 120,
	render: () =>
		<div>
				<a>查看</a> |
				<a>通过</a> |
				<a>拒接</a>
			</div>
}];
export default class Allmenber extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			data: props.data.data,
			pagination: {},
			loading: false
		}
	}

	render() {
		let { data } = this.props;
		let { loading } = this.state;
		console.log(this.props);
		const rowSelection = {
			onChange: this.onChange,
			onSelect: this.onSelect,
			onSelectAll: this.onSelectAll
		}
		return (
			<div>
				<h2>全部会员</h2>
				<Row>
					<Col span={6} offset={2}><RangePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder={['开始时间', '结束时间']} /></Col>
					<Col span={2} offset={1}><Button>导出会员</Button></Col>
					<Col span={2} offset={1}>
						<Select size="large" defaultValue="10" style={{ width: 200 }}>
							<Option value="10">全部会员</Option>
							<Option value="2">已认证会员</Option>
							<Option value="1">未认证会员</Option>
						</Select>
					</Col>
				</Row>
				<Table loading={data.data?false:true} columns={columns} rowSelection={rowSelection} dataSource={data.data} />			
			</div>
		)
	}
}
