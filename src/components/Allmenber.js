import React from 'react';
import { Table, DatePicker, Row, Col, Button, Select } from 'antd';
import { profession, shoptype, averagespend} from 'sources/cominfo'
import Detailtag from 'components/Detailtag'
const Option = Select.Option;
const { Column } = Table;
let moment = require('moment');
const { RangePicker } = DatePicker;

export default class Allmenber extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data.data,
			pagination: {},
			showDetail: false,
			cur: {}
		}
	}
	showDetail(index, record){
		console.log('showDetail',index)
		this.setState({
			showDetail: true,
			cur: record
		})
	}
	render() {
		let { data } = this.props;
		let { showDetail, cur } = this.state;
		//console.log(this.props);
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
				<Table loading={data.data?false:true} dataSource={data.data} scroll={{ x: 1200 }} >
					<Column title='序号' dataIndex='id' width={50} key='id' render={(text, record, index)=>index}/>
					<Column title='手机号' dataIndex='mobile' width={120} key='mobile'/>
					<Column title='姓名' dataIndex='truename' width={120} key='truename'/>
					<Column title='餐厅名称' dataIndex='restaurantname' width={120} key='restaurantname'/>
					<Column title='创建日期' dataIndex='createtime' width={90} key='createtime' render={text => <div>{moment(text).format('YYYY-MM-DD')}<br />{moment(text).format('HH:mm:ss')}</div>}/>
					<Column title='职位' dataIndex='position' width={120} key='position' render={(text) => {
							let label = profession.find(i => i.value === text);
							return <div>{label?label.label:text}</div>
						}}/>
					<Column title='业态' dataIndex='mode' width={120} key='mode' render={(text) => {
							let label = shoptype.find(i => i.value === text);
							return <div>{label?label.label:text}</div>
						}}/>
					<Column title='人均消费' dataIndex='price' width={120} key='price' render={(text) => {
							let label = averagespend.find(i => i.value === text);
							return <div>{label?label.label:text}</div>
						}}/>
					<Column title='地址' dataIndex='restaurantaddress' width={200} key='restaurantaddress'/>
					<Column title='状态' dataIndex='state' width={120} key='state' render={(text) => {
							let label = '';
							switch(text){
								case 0:
								label = '未提交';break;
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
							<div><a onClick={()=>this.showDetail(index, record)}>查看</a></div>}/>
				</Table>
				<Detailtag show={showDetail} change={()=>this.setState({showDetail:!this.state.showDetail})} data={cur} style={{ top: 20 }}/>
			</div>
		)
	}
}
