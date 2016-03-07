import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'react-bootstrap/lib/Input';
import $ from 'jquery';
import WdatePicker from 'wdate-picker';


const DatePicker = React.createClass({
  //初始化数据
  getInitialState() {
    let dateId = 'dateInput' + new Date().getTime();
    return {
      value: this.props.value ? this.props.value : null,//默认值
      width: this.props.width ? this.props.width : '140px',//默认宽度
      name : this.props.name ? this.props.name : '',//name
      id : this.props.id ? this.props.id : dateId,//id，若未定义，则随机生成
      relativeId : this.props.relativeId ? this.props.relativeId : '',//关联id，用于2个日期控件联动
      labelName : this.props.labelName ? this.props.labelName : '',//标签名称
      dateFmt: this.props.dateFmt ? this.props.dateFmt : 'yyyy-MM-dd',//日期格式
      minDate : this.props.minDate ? this.props.minDate : '' ,//最小日期
      maxDate: this.props.maxDate ? this.props.maxDate : '',//最大日期
      inputType : this.props.inputType ? this.props.inputType : 'vertical',//日期控件类型
    };
  },

  handleChange(){

  },

  componentDidMount() {
    let 
      id         = this.state.id,
      relativeId = this.state.relativeId,
      min        = this.state.minDate,
      max        = this.state.maxDate;
      min = min.indexOf('{') > -1 ? '#F{$dp.$D(\''+relativeId+'\','+min+')}' : min;
      max = max.indexOf('{') > -1 ? '#F{$dp.$D(\''+relativeId+'\','+max+')}' : max;
    $("#"+id).on('click',function(){
      WdatePicker({
        dateFmt:'yyyy-MM-dd',
        el : id,
        onpicked:function(){
        },
        minDate : min,
        maxDate : max
      });
    });
  },

  render() {
    //垂直日期控件
    let VerticalDate = (
      <div className="form-group">
        <label className="control-label label-class" >
          <span>{this.state.labelName}</span>
        </label>
        <Input
          type="text"
          placeholder={this.state.placeholder}
          id={this.state.id}
          name={this.state.name}
          style={{width:this.state.width}}
          onChange={this.handleChange} 
          rel={this.state.name}
          readOnly="readOnly"
          value={this.state.value}
          groupClassName="group-class"
          labelClassName="label-class" />
      </div>
    );
    //水平日期控件
    let HorizontalDate = (
      <div className="form-horizontal">
        <label className="col-sm-5 control-label">{this.state.labelName}</label>
        <div className="col-sm-7">
           <Input
              type="text"
              placeholder={this.state.placeholder}
              id={this.state.id}
              name={this.state.name}
              style={{width:this.state.width}}
              onChange={this.handleChange} 
              rel={this.state.name}
              readOnly="readOnly"
              value={this.state.value}/>
        </div>
      </div>
    );
    //发回控件
    let ReturnDate = this.state.inputType == 'vertical' ? VerticalDate : HorizontalDate;
    return (
      <div>
        {ReturnDate}
      </div>
    );
  },
});


export default DatePicker;