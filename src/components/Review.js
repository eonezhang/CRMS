import React from 'react';
import { Table } from 'antd';
import { profession, shoptype, averagespend} from 'sources/cominfo'
import Detailtag from 'components/Detailtag'
let moment = require('moment');
const { Column } = Table;

export default class Review extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			data: props.data.data,
			pagination: {},
			showDetail: false,
			cur: {}
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
	showDetail(index, record){
		this.setState({
			showDetail: true,
			cur: record
		})
	}
	render() {
		let { data, pass, reject } = this.props;
		let { showDetail, cur } = this.state;
		const rowSelection = {
			onChange: this.onChange,
			onSelect: this.onSelect,
			onSelectAll: this.onSelectAll
		}
		return (
		<div>
			<Table loading={data.data?false:true} rowSelection={rowSelection} dataSource={data.data} scroll={{ x: 1200 }} >
				<Column title='手机号' dataIndex='mobile' width={120} key='mobile'/>
				<Column title='姓名' dataIndex='truename' width={120} key='truename'/>
				<Column title='餐厅名称' dataIndex='restaurantname' width={120} key='restaurantname'/>
				<Column title='创建日期' dataIndex='createtime' width={75} key='createtime' 	render={text => <div>{`${moment(text).format('YYYY-MM-DD')}\r\n${moment(text).format('HH:mm:ss')}`}</div>}/>
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
						<div><a onClick={()=>this.showDetail(index, record)}>查看</a> | <a onClick={()=>pass(index, record)}>通过</a> | <a onClick={()=>reject(index, record)}>拒接</a></div>}/>
			</Table>
			<Detailtag show={showDetail} change={()=>this.setState({showDetail:!this.state.showDetail})} data={cur}/>
		</div>
		)
	}
}
