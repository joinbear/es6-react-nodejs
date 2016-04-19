import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { handleOperation } from '../actions/logic-action';
import { fetchOperation } from '../actions/fetch-action';
import { formatDate } from '../../common-reducer/function';
import { Table, Icon , Popconfirm , Spin , Popover , Modal, Button} from 'antd';
import OperationComponent from './quick-sell-operation';
class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'TableComponent';
		this.renderAction    = this.renderAction.bind(this);
		this.renderOperation = this.renderOperation.bind(this);
		this.handleStatus    = this.handleStatus.bind(this);
		this.cancel          = this.cancel.bind(this);
		this.confirm          = this.confirm.bind(this);
  }
  handleStatus(type,contractNo){
  	const { handleOperation } = this.props;
  	handleOperation(type,contractNo);
  }
  confirm() {
	  console.log('点击了确定');
	}
	cancel() {
	  console.log('点击了取消');
	}
	renderOperation(text, record){
		const deleteTitle = '是否删除合同号为' + record.contractNo + '的速销数据';
		const releaseTitle = '是否解约合同号为' + record.contractNo + '的速销数据';
		return (
      <span>
        <a href="javascript:;" onClick={()=>this.handleStatus('compensate',record.contractNo)}>报赔</a>
        <span className="ant-divider"></span>
        <a href="javascript:;" onClick={()=>this.handleStatus('resigner',record.contractNo)}>续签</a>
        <span className="ant-divider"></span>
        <a href="javascript:;" onClick={()=>this.handleStatus('recycle',record.contractNo)}>回收</a>
        <span className="ant-divider"></span>
        <Popconfirm 
        	placement="leftBottom" 
        	title={releaseTitle} 
        	okText="解约" 
        	onConfirm={()=>this.confirm} 
        	onCancel={()=>this.cancel}>
        	<a href="#">解约</a>
        </Popconfirm>
        <span className="ant-divider"></span>
        <Popconfirm 
        	placement="leftBottom" 
        	title={deleteTitle} 
        	okText="删除" 
        	onConfirm={()=>this.confirm} 
        	onCancel={()=>this.cancel}>
        	<a href="#">删除</a>
        </Popconfirm>
      </span>
    );
	}
  renderAction(text, record){
  	switch(text){
  		case '已审核':
  		case '不付款':
  		case '未回收':
  			return (<span>{text}</span>);
  		case '已付款':
  			const payContent = (
  				<div>
  					<p>领用人:秦奋.喻安文</p>
  					<p>支付人:管理员</p>
  					<p>支付时间:2016-03-21 17:25:26</p>
  				</div>
  			);
				return (
					<Popover placement="leftBottom" title='支付详情' overlay={payContent} trigger="click">
       			<a href="javascript:;" onClick=''>已付款</a>
      		</Popover>
      	);
			case '未审核':
				const title = '是否审核合同' + record.contractNo;
				return (
					<Popconfirm 
						title={title} 
						okText="审核"
						onConfirm={fetchOperation(record.contractNo)} 
						onCancel={()=>this.cancel}>
						<a href="javascript:;">未审核</a>
					</Popconfirm>
				);
			case '已回收':
				const recycleContent = (
  				<div>
  					<p>领用人:秦奋.喻安文</p>
  					<p>支付人:管理员</p>
  					<p>支付时间:2016-03-21 17:25:26</p>
  				</div>
  			);
				return (
					<Popover placement="leftBottom" title='回收详情' overlay={recycleContent} trigger="click">
       			<a href="javascript:;" onClick=''>已回收</a>
      		</Popover>
      	);
			case '已报赔':
				const compensateContent = (
  				<div>
  					<p>领用人:秦奋.喻安文</p>
  					<p>支付人:管理员</p>
  					<p>支付时间:2016-03-21 17:25:26</p>
  				</div>
  			);
				return (
					<Popover placement="leftBottom" title='报赔详情' overlay={compensateContent} trigger="click">
       			<a href="javascript:;" onClick=''>已报赔</a>
      		</Popover>
      	);
			case '合格':
				return (<a href="javascript:;" onClick={()=>this.handleStatus('visitStatus',record.contractNo)}>合格</a>);
			case '不合格':
				return (<a href="javascript:;" onClick={()=>this.handleStatus('visitStatus',record.contractNo)}>不合格</a>);
  		default :
  			return (<span>{text}</span>);
  	}
  }
  render() {
  	const { data , operation , loading } = this.props;
  	const renderContent = operation ? this.renderAction : '';
  	const columns = [{
    		title: '序号',
			  key: '1',
			  dataIndex: '',
			  className: 'center',
			  render(text, record, index) {
			  	return index + 1;
			  }
    	},{
    		title: '速销合同号',
			  key: '2',
			  dataIndex: 'contractNo',
			  className: 'center',
			  render (text,record){
			  	const redirect = '/ekp/quick-sell/edit/' + text;
			  	return(<Link to={redirect}>{text}</Link>);
			  }
    	},{
    		title: '楼盘名称',
			  key: '3',
			  dataIndex: 'housesName',
			  className: 'center'
    	},{
    		title: '房源编号',
			  key: '4',
			  dataIndex: 'availabilityNo',
			  className: 'center'
    	},{
    		title: '调入日期',
			  key: '5',
			  dataIndex: 'foldTime',
			  className: 'center',
			  render(text,record) {
			  	return formatDate(text,'yyyy-MM-dd');
			  }
    	},{
    		title: '调入人',
			  key: '6',
			  dataIndex: 'foldUserName',
			  className: 'center'
    	},{
    		title: '调入价(万)',
			  key: '7',
			  dataIndex: 'foldMoney',
			  className: 'center'
    	},{
    		title: '证件',
			  key: '8',
			  dataIndex: 'credentials',
			  className: 'center'
    	},{
    		title: '下钱金额(元)',
			  key: '9',
			  dataIndex: 'cashPledge',
			  className: 'center'
    	},{
    		title: '录入时间',
			  key: '10',
			  dataIndex: 'createTime',
			  className: 'center',
			  render(text,record) {
			  	return formatDate(text,'yyyy-MM-dd');
			  }
    	},{
    		title: '当前状态',
			  key: '11',
			  dataIndex: 'inventoryStatus',
			  className: 'center'
    	},{
    		title: '审核状态',
			  key: '12',
			  dataIndex: 'isAudit',
			  className: 'center',
			  render: renderContent
    	},{
    		title: '支付状态',
			  key: '13',
			  dataIndex: 'cashPayStatus',
			  className: 'center',
			  render:renderContent
    	},{
    		title: '回收状态',
			  key: '14',
			  dataIndex: 'cashRegainStatus',
			  className: 'center',
			  render:renderContent
    	},{
    		title: '回访状态',
			  key: '15',
			  dataIndex: 'revisitStatus',
			  className: 'center',
			  render:renderContent
    	},{
    		title: '操作',
			  key: '16',
			  dataIndex: 'operation',
			  className: 'center',
			  render: operation ? this.renderOperation : ''
    	}];
    return (
    	<div>
    		<OperationComponent />
    		<Table columns={columns} dataSource={data} loading={loading} pagination={{ pageSize: 16 }} columnsPageRange={[5, 10]} columnsPageSize={3}/>
    	</div>
    );
  }
}

function mapStateToProps(state){
	return {
		data : state.table.data,
		operation : state.table.operation,
		loading : state.table.loading,
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handleOperation
	},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TableComponent);
