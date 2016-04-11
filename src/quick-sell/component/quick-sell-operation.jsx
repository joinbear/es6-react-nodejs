import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestQuickSellGetPerson } from '../actions/fetch-action';
import { handleOperation } from '../actions/logic-action';
import { Modal, Button , Form , Select , DatePicker , Col , Row , Input , Radio} from 'antd';
const Option = Select.Option;
const createForm = Form.create;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
class OperationComponent extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'OperationComponent';
    this.state = {
    	radioValue : '1',
      visible : false,
      loading : false
    }
    this.handleOk      = this.handleOk.bind(this);
    this.handleCancel  = this.handleCancel.bind(this);
    this.handlePerson  = this.handlePerson.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.handleField   = this.handleField.bind(this);
    this.handleRadio   = this.handleRadio.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ visible: nextProps.currentModal.visible });
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
      initialValue : initialValue
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
  handleRadio(event) {
    console.log(event);
    this.setState({ radioValue: event.target.value });
    this.handleField('revisitStatus',event.target.value);
  }
  handlePerson(name) {
    const { requestQuickSellGetPerson } = this.props;
    setTimeout(function(){
      requestQuickSellGetPerson(name);
    },300);
  }
  handleOk(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      console.log(errors);
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
    });
  }
  handleCancel() {
    this.setState({ visible: false });
  }
  render() {
    const { currentModal , handleOperation , person} = this.props;
    const { visible , loading , radioValue} = this.state;
    return(
    	<div>
	    	<Modal ref="modal"
	        visible={visible}
	        title={currentModal.title}
	        footer={[
	          <Button key="back" type="ghost" size="large" onClick={(e)=>this.handleCancel(e)}>取消</Button>,
	          <Button 
              key="submit" 
              type="primary" 
              size="large" 
              loading={loading} 
              onClick={this.handleOk}>
              {currentModal.okText}
            </Button>
	        ]}>
	        <Form horizontal form={this.props.form} className="advanced-search-form">
            {currentModal.compensate &&
            <div>
              <FormItem
                {...formItemLayout}
                label="报赔人：">
                  <Select
                    {...this.handleField('applyUserName',)}
                    combobox
                    onSearch={(value)=>this.handlePerson(value)} 
                    searchPlaceholder="输入并选择报赔人">
                    {this.handleOptions(person)}
                  </Select>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="责任人：">
                  <Select
                    {...this.handleField('dutyUserName',)}
                    combobox
                    onSearch={(value)=>this.handlePerson(value)} 
                    searchPlaceholder="输入并选择责任人">
                    {this.handleOptions(person)}
                  </Select>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="报赔日期：">
                <DatePicker
                  {...this.handleField('compensateDate',null,{type:'date'})} 
                  placeholder="请选择报赔日期"
                  style={{ width: '100%' }} />
              </FormItem>
            </div>
            }
            {currentModal.visitStatus &&
            <div>
              <FormItem
                {...formItemLayout}
                label="回访状态：">
                  <RadioGroup 
                    value={radioValue} 
                    onChange={this.handleRadio}>
                    <Radio value="0">合格</Radio>
                    <Radio value="1">不合格</Radio>
                  </RadioGroup>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="回访备注：">
                <Input 
                  {...this.handleField('revisitRemark')}
                  type="textarea"
                  rows="3" />
              </FormItem>
            </div>
            }
            {currentModal.recycle &&
            <div>
              <FormItem
              {...formItemLayout}
              label="回收金额(元)：">
                <Input 
                  {...this.handleField('regainMoney')}
                  placeholder="请输入回收金额" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="回收人：">
                  <Select
                    {...this.handleField('regainUserName')}
                    combobox
                    onSearch={(value)=>this.handlePerson(value)} 
                    searchPlaceholder="输入并选择回收人">
                    {this.handleOptions(person)}
                  </Select>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="回收日期：">
                <DatePicker
                  {...this.handleField('regainTime',null,{type:'date'})} 
                  placeholder="请选择回收日期"
                  style={{ width: '100%' }} />
              </FormItem>
            </div>
            }
            {currentModal.resigner &&
            <div>
              <FormItem
              {...formItemLayout}
              label="续签合同号：">
                <Input 
                  {...this.handleField('renewContractNo')}
                  placeholder="请输入合同号" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="续签代卖时间：">
                <Row>
                  <Col span='11'>
                    <DatePicker
                      {...this.handleField('beginRenewDate',null,{type:'date'})} 
                      placeholder="请选择开始日期"
                      style={{ width: '100%' }} />
                  </Col>
                  <Col span='2'>——</Col>
                  <Col span='11'>
                    <DatePicker
                      {...this.handleField('endRenewDate',null,{type:'date'})} 
                      placeholder="请选择结束日期"
                      style={{ width: '100%' }} />
                  </Col>
                </Row>
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="续签调入人：">
                  <Select
                    {...this.handleField('renewFoldUserName',)}
                    combobox
                    onSearch={(value)=>this.handlePerson(value)} 
                    searchPlaceholder="输入并选择续签调入人">
                    {this.handleOptions(person)}
                  </Select>
              </FormItem>
              <p>小提示：1、若重新支付保证金，请另发战报；</p>
              <p>2、点击确认后，续签合同信息将覆盖原合同信息。</p>
            </div>
            }
          </Form>
	      </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentModal : state.operate.currentModal,
    person : state.common.person
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    requestQuickSellGetPerson,
    handleOperation,
  },dispatch);
}

OperationComponent = createForm()(OperationComponent);
export default connect(mapStateToProps,mapDispatchToProps)(OperationComponent);
