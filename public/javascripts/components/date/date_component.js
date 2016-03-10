import React from 'react';
import ReactDOM from 'react-dom';
import WdatePicker from 'wdate-picker';

const DateComponent = React.createClass({
	//初始化数据
  getInitialState() {
  	let dateId = 'dateInput' + new Date().getTime();
    return {
    	id : this.props.id ? this.props.id : dateId,//id，若未定义，则随机生成
      value: this.props.value ? this.props.value : '',//默认值
      name : this.props.name ? this.props.name : '',//name
      className : this.props.className ? this.props.className : 'form-control',
      placeholder : this.props.placeholder ? this.props.placeholder : '',//name
      relativeId : this.props.relativeId ? this.props.relativeId : '',//关联id，用于2个日期控件联动
      dateFmt: this.props.dateFmt ? this.props.dateFmt : 'yyyy-MM-dd',//日期格式
      minDate : this.props.minDate ? this.props.minDate : '' ,//最小日期
      maxDate: this.props.maxDate ? this.props.maxDate : '',//最大日期
      handleChange : this.props.handleChange ? this.props.handleChange : ''
    };
  },

  handleChange() {
  	console.log('======('+this.state.value+')=====');
  	this.state.handleChange(this.state.value);
  },

  handleClick() {
  	
  	let 
      relativeId = this.state.relativeId,
      dateFmt = this.state.dateFmt,
      _self = this,
      id  = this.state.id,
      min = this.state.minDate,
      max = this.state.maxDate;
      min = min.indexOf('{') > -1 ? '#F{$dp.$D(\''+relativeId+'\','+min+')}' : min;
      max = max.indexOf('{') > -1 ? '#F{$dp.$D(\''+relativeId+'\','+max+')}' : max;
  	WdatePicker({
      dateFmt:dateFmt,
      el : id,
      onpicked:function(){
      	_self.state.value = this.value;
      	_self.handleChange();
      },
      minDate : min,
      maxDate : max
    });
    this.handleChange();
  },
  componentDidMount() {
  	console.log('------>');
  },

  render() {
  	return (
			<input 
				type="text"
        placeholder={this.state.placeholder}
        name={this.state.name}
        onChange={this.handleChange}
        rel={this.state.name}
        readOnly="readOnly"
        className={this.state.className}
        value={this.state.value}
        onClick={this.handleClick} 
        id={this.state.id}/>
		);
  }
});

export default DateComponent;