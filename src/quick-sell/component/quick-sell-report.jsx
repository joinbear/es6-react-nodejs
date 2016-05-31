import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestRegin , requestSubRegin , requestStore} from '../../common/reducer/action';
import { requestQuickSellInitData } from '../actions/fetch-action';
import { handleQuickSellType , handleQuickSellChooseType } from '../actions/logic-action';
import { Select, Radio, Breadcrumb , Row , Col , Input ,Checkbox, Button, DatePicker, InputNumber, Form, Cascader } from 'antd';
const Option = Select.Option;
const createForm = Form.create;
const FormItem = Form.Item;

class Report extends Component {
	constructor(props){
		super(props);
		this.handleReset   = this.handleReset.bind(this);
		this.handleField   = this.handleField.bind(this);
		this.handleOptions = this.handleOptions.bind(this);
		this.handleSubmit  = this.handleSubmit.bind(this);
	}
	// shouldComponentUpdate(nextProps) {
	// 	const { formNames } = this.props;
	// 	if(nextProps.formNames !== formNames){
	// 		this.props.form.setFieldsValue(nextProps.formNames);
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
 //    return nextProps.formNames !== formNames;
	// }
	componentDidMount() {
	    
	}
  getValidateStatus(field) {
    const { isFieldValidating, getFieldError, getFieldValue } = this.props.form;

    if (isFieldValidating(field)) {
      return 'validating';
    } else if (!!getFieldError(field)) {
      return 'error';
    } else if (getFieldValue(field)) {
      return 'success';
    }
  }
  componentWillMount() {
    const { requestQuickSellInitData , reportType , requestRegin} = this.props;
    requestQuickSellInitData(reportType);
    requestRegin();
  }
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }
  handleField(fieldName,initialValue,selfRules) {
  	const { getFieldProps } = this.props.form;
  	const rule = Object.assign({},{
  		required: true, 
  		message: '该项为必填'
  	},selfRules);
  	const result = getFieldProps(fieldName, {
      rules: [rule],
      trigger: ['onBlur', 'onChange'],
      initialValue : initialValue ? initialValue : undefined
    });
  	return result;	
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
  handlePerson(name) {
  	const { requestQuickSellGetPerson } = this.props;
  	setTimeout(function(){
  		requestQuickSellGetPerson(name);
  	},300);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
    	console.log(values);
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  }

  render() {
		const { 
			title , 
			contractType ,
			inventoryStatus ,
			quicksellType , 
			equityName , 
			creditTypes , 
			dutyType,
			regin,
			subregin,
			stores,
			isShowMoney,
			isShowType,
			isEditPage,
			formNames,
			person,
			reportType,
			handleQuickSellType,
			handleQuickSellChooseType,
			requestSubRegin,
			requestStore,
		} = this.props;
		const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form horizontal form={this.props.form} className="advanced-search-form">
				<p className="title">{title}</p>
      	<Row type="flex" justify="left" align="top">
      		<Col span="6">
      			<FormItem
		          {...formItemLayout}
		          	label="大区：">
		          <Select
		          	{...this.handleField('foldAreaId')}
		          	placeholder="请选择合同类型"
		          	onSelect={(value)=>requestSubRegin(value)}>
		          		{this.handleOptions(regin,{"value":"id","label":"name"})}
		          </Select>
		        </FormItem>
      		</Col>
      		<Col span="6">
      			<FormItem
		          {...formItemLayout}
		          label="商圈：">
		          <Select
		          	{...this.handleField('foldShopId')} 
		          	placeholder="请选择商圈"
		          	onSelect={(value)=>requestStore(value)}>
		          	{this.handleOptions(subregin,{"value":"id","label":"name"})}
		          </Select>
		        </FormItem>
      		</Col>
      		<Col span="6">
		      	<FormItem
		      		{...formItemLayout}
			        label="店组：">
			        <Select
		          	{...this.handleField('foldGroupId')}
		          	placeholder="请选择店组">
		          	{this.handleOptions(stores,{"value":"id","label":"name"})}	
		          </Select>
			      </FormItem>
		      </Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="调入人：">
		          <Select
		          	{...this.handleField('foldUserName')}
		          	combobox
		          	onSearch={(value)=>this.handlePerson(value)} 
		          	searchPlaceholder="输入并选择调入人">
		          	{this.handleOptions(person)}
		          </Select>
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="SE工号：">
		          <Input
		          	{...this.handleField('seNumber')}
		          	disabled={isEditPage}
		          	placeholder="请输入8位SE工号" />
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="本月调入次数：">
		          <Input
		          	{...this.handleField('monthNumber')}
		          	disabled={true}/>
		        </FormItem>
      		</Col>
      		<Col span="6">
      			<FormItem
		          {...formItemLayout}
		          label="合同类型：">
		          <Select
		          	{...this.handleField('contractType')}
		          	placeholder="请选择合同类型">
		          		{this.handleOptions(contractType)}
		          </Select>
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="速销合同号：">
		          <Input
		          	{...this.handleField('contractNo')}
		          	placeholder="请输入速销合同号" />
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="房源编号：">
		          <Input
		          	{...this.handleField('availabilityNo')}
		          	placeholder="请输入房源编号" />
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="楼盘名称：">
		          <Input
		          	{...this.handleField('housesName')}
		          	placeholder="请输入楼盘名称" />
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="业主姓名：">
		          <Input
		          	{...this.handleField('ownerName')}
		          	placeholder="请输入业主姓名" />
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="业主电话：">
		          <Input
		          	{...this.handleField('ownerTel')}
		          	placeholder="请输入业主电话" />
		        </FormItem>
      		</Col>
      		<Col span="6">
      				<FormItem
		          {...formItemLayout}
		          label="速销类型：">
		          	<Select
			          	{...this.handleField('quicksellType')}
			          	placeholder="选择速销类"
			          	onSelect={handleQuickSellType}>
			          	{this.handleOptions(quicksellType)}
			          </Select>
		        </FormItem>
      		</Col>
      		{isShowType && 
    					<Col span="6">
	      				<FormItem
				          {...formItemLayout}
				          label="押证类型：">
				          	<Select
					          	{...this.handleField('equityType')}
					          	placeholder="选择押证类型" 
					          	onSelect={handleQuickSellChooseType}>
					          	{this.handleOptions(creditTypes)}
					          </Select>
				        </FormItem>
	      			</Col>
	      			
    			}
    			{isShowType && 
    				<Col span="6">
	    				<FormItem
			          {...formItemLayout}
			          label="证件类型：">
			          <Select
			          	{...this.handleField('equityName')}
			          	placeholder="选择证件类型">
			          	{this.handleOptions(equityName)}
			          </Select>
			        </FormItem>
	    			</Col>
    			}
      		{isShowMoney &&
      			<Col span="6">
      				<FormItem
			          {...formItemLayout}
			          label="下钱金额：">
			           <Input
			          	{...this.handleField('cashPledge')}
			          	placeholder="请输入下钱金额" />
			        </FormItem>
      			</Col>
      		}
      		<Col span="6">
      			<FormItem
		          {...formItemLayout}
		          label="责任盘类型：">
		          	<Select
			          	{...this.handleField('dutyType')}
			          	placeholder="选择责任盘类型">
			      				{this.handleOptions(dutyType)}
			          </Select>
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="调入时间：">
		          	<DatePicker 
		          		{...this.handleField('foldTime',null,{type:'date'})}
		          		format="yyyy-MM-dd"
		          		style={{ width: '100%' }}
				          placeholder="调入日期"/>
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="商圈经理：">
		          <Input
		          	{...this.handleField('businessManager')}
		          	placeholder="请输入商圈经理姓名" />
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="代卖开始日期：">
		          	<DatePicker 
		          		{...this.handleField('beginDate',null,{type:'date'})}
		          		format="yyyy-MM-dd"
		          		style={{ width: '100%' }}
				          placeholder="代卖开始日期"/>
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          format="yyyy-MM-dd"
		          label="代卖结束时间：">
		          	<DatePicker 
		          		{...this.handleField('endDate',null,{type:'date'})}
		          		style={{ width: '100%' }}
				          placeholder="代卖结束时间"/>
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="联系电话：">
		          <Input
		          	{...this.handleField('businessManagerLink')}
		          	placeholder="请输入联系电话" />
		        </FormItem>
      		</Col>
      		<Col span="6">
      			 <FormItem
		          {...formItemLayout}
		          label="请款卡号：">
		          <Input
		          	{...this.handleField('bankCard')}
		          	placeholder="请输入请款卡号(建设银行)" />
		        </FormItem>
      		</Col>
      		<Col span="6">
    			 	<FormItem
		          {...formItemLayout}
		          label="当前状态：">
		          	<Select
		          	{...this.handleField('inventoryStatus')}
		          	placeholder="选择当前状态">
			          	{this.handleOptions(inventoryStatus)}
			          </Select>
		        </FormItem>
    			</Col>
      	</Row>
        <FormItem
          wrapperCol={{ span: 4, offset: 20 }} >
          {reportType== 'add' && 
          	<div>
          		<Button type="primary" onClick={this.handleSubmit}>发布</Button>
		          &nbsp;&nbsp;&nbsp;
		          <Button type="ghost" onClick={this.handleReset}>重置</Button>
          	</div>
          }
          {reportType== 'edit' && 
          	<Button type="primary" onClick={this.handleSubmit}>修改</Button>
          }
        </FormItem>
      </Form>
    );
  }
};

function mapStateToProps(state) {
	return {
		title           : state.report.title,
		contractType    : state.common.contractType,
		inventoryStatus : state.common.inventoryStatus,
		breadCrumb      : state.report.breadCrumb,
		quicksellType   : state.common.quicksellType,
		isShowType      : state.report.isShowType,
		isShowMoney     : state.report.isShowMoney,
		creditTypes     : state.report.creditTypes,
		equityName      : state.report.equityName,
		dutyType        : state.report.dutyType,
		isEditPage      : state.report.isEditPage,
		formNames       : state.report.formNames,
		regin           : state.commonReducer.regin,
		subregin        : state.commonReducer.subregin,
		stores          : state.commonReducer.stores,
		person          : state.commonReducer.person
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		requestQuickSellInitData,
		handleQuickSellType,
		handleQuickSellChooseType,
		requestSubRegin,
		requestStore,
		requestRegin
	},dispatch)
}

Report = createForm()(Report);
export default connect(mapStateToProps,mapDispatchToProps)(Report);
