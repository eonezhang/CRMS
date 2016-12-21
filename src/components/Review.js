import React from 'react';
import { Table } from 'antd';
import { profession, shoptype, averagespend} from 'sources/cominfo'
let moment = require('moment');
const { Column } = Table;
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
	width: 200,
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
export default class Review extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			data: props.data.data,
			pagination: {},
			loading: false
		}
	}
	componentWillMount() {
		
	}
	onChange(selectedRowKeys, selectedRows) {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	}
	onSelect(record, selected, selectedRows) {
		console.log(record, selected, selectedRows);
	}
	onSelectAll(selected, selectedRows, changeRows) {
		console.log(selected, selectedRows, changeRows);
	}
	showDelait(){
		console.log('showDelait')
	}
	getpass(){
		console.log('getpass')
	}
	getredet(){
		console.log('getredet')
	}
	render() {
		let { data } = this.props;
		let { loading } = this.state;
		const rowSelection = {
			onChange: this.onChange,
			onSelect: this.onSelect,
			onSelectAll: this.onSelectAll
		}
		return <Table loading={data.data?false:true} rowSelection={rowSelection} dataSource={data.data} >
			<Column title='手机号' dataIndex='mobile' width={120} key='mobile'/>
			<Column title='姓名' dataIndex='truename' width={120} key='truename'/>
			<Column title='餐厅名称' dataIndex='restaurantname' width={120} key='restaurantname'/>
			<Column title='创建日期' dataIndex='createtime' width={80} key='createtime' 	render={text => <div>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</div>}/>
			<Column title='职位' dataIndex='position' width={120} key='position' 	render={(text) => {
					let label = profession.find(i => i.value === text);
					return <div>{label?label.label:text}</div>
				}}/>
			<Column title='业态' dataIndex='mode' width={120} key='mode' 	render={(text) => {
					let label = shoptype.find(i => i.value === text);
					return <div>{label.label}</div>
				}}/>
			<Column title='人均消费' dataIndex='price' width={120} key='price' 	render={(text) => {
					let label = averagespend.find(i => i.value === text);
					return <div>{label?label.label:text}</div>
				}}/>
			<Column title='地址' dataIndex='restaurantaddress' width={200} key='restaurantaddress'/>
			<Column title='状态' dataIndex='state' width={120} key='state' render={(text) => {
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
				}}/>
			<Column title='操作' width={120} key='operation' render={(text, record, index) =>
					<div><a onClick={this.showDelait(index)}>查看</a> | <a onClick={this.getpass(index)}>通过</a> | <a onClick={this.getredet(index)}>拒接</a></div>}/>
		</Table>
	}
}
