import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Select, Breadcrumb , Row , Col , Input , Button, DatePicker, Form } from 'antd';
import { requestQuickSellInitData , requestQuickSellSubreginData , requestStores } from '../actions/fetch-action';
const Option = Select.Option;
const createForm = Form.create;
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class SearchForm extends Component {
  constructor(props) {
    super(props);
		this.displayName     = 'SearchForm';
		this.handleOptions   = this.handleOptions.bind(this);
		this.handleField     = this.handleField.bind(this);
		this.handleSubmit    = this.handleSubmit.bind(this);
		this.handleReset     = this.handleReset.bind(this);
		this.handleRangeDate = this.handleRangeDate.bind(this);
  }
  componentWillMount() {
    const { requestQuickSellInitData } = this.props;
    requestQuickSellInitData('add');
  }
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  }
  handleField(fieldName,initialValue,selfRules) {
  	const { getFieldProps } = this.props.form;
  	const rule = Object.assign({},{
  		required: false, 
  		message: '该项为必填'
  	},selfRules);
  	const result = getFieldProps(fieldName, {
      rules: [rule],
      trigger: ['onBlur', 'onChange'],
      initialValue : initialValue ? initialValue : undefined
    });
  	return result;	
  }
  handleRangeDate(date1,date2,value){
  	this.handleField(date1,value[0]);
  	this.handleField(date2,value[1]);
  }
  handleOptions(data,keyObject){
  	var options;
  	if(keyObject){
  		options = data.map(e=> {
				return <Option key={e[keyObject.value]} value={String(e[keyObject.value])} >{e[keyObject.label]}</Option>;
			});
  	}else{
  		options = data.map(e=> {
				return <Option key={e.value} value={String(e.value)}>{e.label}</Option>;
			});
  	}
  	return options;
  }
  render() {
  	const {
  		conditions ,
  	 	inventoryStatus , 
  	 	quicksellType ,
  	 	contractType ,
  	 	isAudit ,
  	 	regin ,
  	 	subregin,
  	 	stores
  	} = this.props;
  	const { requestQuickSellSubreginData , requestStores } = this.props;
  	const beginDate = [];
  	this.handleField('beginCreateDate',conditions.beginCreateDate);
  	this.handleField('endCreateDate',conditions.endCreateDate);
  	beginDate.push(conditions.beginCreateDate);
  	beginDate.push(conditions.endCreateDate);
    return (
    	<Form horizontal form={this.props.form} className="advanced-search-form">
    		<Row type="flex" justify="left" align="top">
    			<Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="关键词：">
			        <Input 
				        {...this.handleField('searchkey',conditions.searchkey)}
				        placeholder="合同号/房源编号" />
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="录入日期：">
			        <RangePicker 
			        	defaultValue={beginDate}
			        	onChange={(value)=>this.handleRangeDate('beginCreateDate','endCreateDate',value)}/>
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="速销日期：">
			        <RangePicker 
			        	defaultValue={beginDate}
			        	onChange={(value)=>this.handleRangeDate('beginQuicksellDate','endQuicksellDate',value)}/>
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="当前状态：">
			        <Select
		          	{...this.handleField('inventoryStatus',conditions.inventoryStatus)}
		          	placeholder="请选择当前状态">
		          	{this.handleOptions(inventoryStatus)}
		          </Select>
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="速销类型：">
			        <Select
		          	{...this.handleField('quicksellType',conditions.quicksellType)}
		          	placeholder="请选择速销类型">
		          	{this.handleOptions(quicksellType)}
		          </Select>
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="合同类型：">
			        <Select
		          	{...this.handleField('contractType',conditions.contractType)}
		          	placeholder="请选择合同类型">
		          	{this.handleOptions(contractType)}
		          </Select>
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="审核状态：">
			        <Select
		          	{...this.handleField('isAudit',conditions.isAudit)}
		          	placeholder="请选择审核状态">
		          	{this.handleOptions(isAudit)}
		          </Select>
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="大区：">
			        <Select
		          	{...this.handleField('foldArea',conditions.foldArea)}
		          	placeholder="请选择大区"
		          	onSelect={(value)=>requestQuickSellSubreginData(value)}>
		          		{this.handleOptions(regin,{"value":"id","label":"name"})}
		          </Select>
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="商圈：">
			        <Select
		          	{...this.handleField('foldShop',conditions.foldShop)}
		          	placeholder="请选择大区"
		          	onSelect={(value)=>requestStores(value)}>
		          		{this.handleOptions(subregin,{"value":"id","label":"name"})}
		          </Select>
			      </FormItem>
		      </Col>
		      <Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="店组：">
			        <Select
		          	{...this.handleField('foldGroup',conditions.foldGroup)}
		          	placeholder="请选择店组">
		          	{this.handleOptions(stores,{"value":"id","label":"name"})}	
		          </Select>
			      </FormItem>
		      </Col>
		      <Col span="10" offset="1" style={{ textAlign: 'right' }}>
			      <Button onClick={this.handleSubmit}>查询</Button>&nbsp;&nbsp;&nbsp;
			      <Button><Link to={'/ekp/quick-sell/add/'}>发布调入</Link></Button>&nbsp;&nbsp;&nbsp;
			      <Button>报赔申请</Button>&nbsp;&nbsp;&nbsp;
			      <Button>导出EXCEL</Button>
			    </Col>
    		</Row>
    	</Form>
    );
  }
}

function mapStateToProps(state){
	return {
		conditions : state.list.conditions,
		isAudit : state.list.isAudit,
		inventoryStatus : state.common.inventoryStatus,
		quicksellType : state.common.quicksellType,
		contractType : state.common.contractType,
		regin : state.common.regin,
		subregin : state.common.subregin,
		stores : state.common.stores,
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		requestQuickSellInitData,
		requestQuickSellSubreginData,
		requestStores
	},dispatch);
}

SearchForm = createForm()(SearchForm);
export default connect(mapStateToProps,mapDispatchToProps)(SearchForm);
