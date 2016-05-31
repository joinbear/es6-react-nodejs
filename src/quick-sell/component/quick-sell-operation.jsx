import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestQuickSellGetPerson , requestOperation} from '../actions/fetch-action';
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
/**
 * 操作界面组件类
 */
class OperationComponent extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'OperationComponent';
    this.state = {
    	radioValue : '1',//回访合格默认radio值
      visible : false,//界面显示
      loading : false//提交数据loading效果
    }
    // 窗口确定事件
    this.handleOk      = this.handleOk.bind(this);
    // 窗口取消事件
    this.handleCancel  = this.handleCancel.bind(this);
    // 人员获取事件
    this.handlePerson  = this.handlePerson.bind(this);
    // select选项处理事件
    this.handleOptions = this.handleOptions.bind(this);
    // 表单验证事件
    this.handleField   = this.handleField.bind(this);
    // 回访radio的change事件
    this.handleRadio   = this.handleRadio.bind(this);
  }
  //接收属性，触发变化
  componentWillReceiveProps(nextProps) {
    this.setState({ visible: nextProps.currentModal.visible });
  }
  /**
   * [handleField 表单验证规则]
   * @param  {[type]} fieldName    [表单名字]
   * @param  {[type]} initialValue [初始值，默认为空]
   * @param  {[type]} selfRules    [表单验证自定义规则]
   * @return {[type]}              [返回一个表单验证对象]
   */
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
  /**
   * [handleOptions 构建select选项]
   * @param  {[type]} data      [构建数据，默认使用value和label]
   * @param  {[type]} keyObject [自定义构建对象{ value : 'fdId' , label : 'fdName'}]
   * @return {[type]}           [返回一个option数组]
   */
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
  /**
   * [handleRadio 回访合格选择事件]
   * @param  {[type]} event [event事件对象]
   * @return {[type]}       [description]
   */
  handleRadio(event) {
    console.log(event);
    this.setState({ radioValue: event.target.value });
    this.handleField('revisitStatus',event.target.value);
  }
  /**
   * [handlePerson 人员获取模拟事件，后续会撤销]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  handlePerson(name) {
    const { requestQuickSellGetPerson } = this.props;
    setTimeout(function(){
      requestQuickSellGetPerson(name);
    },300);
  }
  /**
   * [handleOk 弹窗确定事件]
   * @param  {[type]} e    [event对象]
   * @param  {[type]} type [弹窗对应的事件类型（revisit，regain，compensate，renew）]
   * @return {[type]}      [description]
   */
  handleOk(e,type) {
    const { requestOperation } = this.props;
    e.preventDefault();
    //表单验证
    this.props.form.validateFieldsAndScroll((errors, values) => {
      console.log(errors);
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
       console.log('======'+type);
      //提交数据
      requestOperation({type:type,data:values,method : 'POST'});
      //事件模拟，开发完撤销
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 3000);
    });
  }
  //取消事件
  handleCancel() {
    this.setState({ visible: false });
  }
  //页面渲染
  render() {
    const { currentModal , handleOperation , person} = this.props;
    const { visible , loading , radioValue} = this.state;
    return(
    	<div>
	    	<Modal ref="modal"
	        visible={visible}
	        title={currentModal.title}
          onOk={(e)=>this.handleOk(e,currentModal.type)} 
          onCancel={(e)=>this.handleCancel(e)}
	        footer={[
	          <Button key="back" type="ghost" size="large" onClick={(e)=>this.handleCancel(e)}>取消</Button>,
	          <Button 
              key="submit" 
              type="primary" 
              size="large" 
              loading={loading} 
              onClick={(e)=>this.handleOk(e,currentModal.type)}>
              {currentModal.okText}
            </Button>
	        ]}>
	        <Form horizontal form={this.props.form} className="advanced-search-form">
            <input type="hidden" {...this.handleField('id',currentModal.id)}/>
            {currentModal.compensate &&
            <div>
              <FormItem
                {...formItemLayout}
                label="报赔人：">
                  <Select
                    {...this.handleField('applyUserName')}
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
                    {...this.handleField('dutyUserName')}
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
            {currentModal.revisit &&
            <div>
              <FormItem
                {...formItemLayout}
                label="回访状态：">
                  <RadioGroup
                     {...this.handleField('revisitStatus',radioValue)} 
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
            {currentModal.regain &&
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
            {currentModal.renew &&
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
                    {...this.handleField('renewFoldUserName')}
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
    requestOperation
  },dispatch);
}

OperationComponent = createForm()(OperationComponent);
export default connect(mapStateToProps,mapDispatchToProps)(OperationComponent);
