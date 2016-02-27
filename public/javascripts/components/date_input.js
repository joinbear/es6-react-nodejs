import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'react-bootstrap/lib/Input';
import $ from 'jquery';
import WdatePicker from 'wdate-picker';


const DatePicker = React.createClass({

  getInitialState() {
  	let dateId = 'dateInput' + new Date().getTime();
    return {
      value: this.props.value ? this.props.value : null,
      width: this.props.width ? this.props.width : '186px',
      name : this.props.name ? this.props.name : '',
      id : this.props.id ? this.props.id : dateId,
      relativeId : this.props.relativeId ? this.props.relativeId : '',
      labelName : this.props.labelName ? this.props.labelName : '',
      dateFmt: this.props.dateFmt ? this.props.dateFmt : 'yyyy-MM-dd',
      minDate : this.props.minDate ? this.props.minDate : '' ,
      maxDate: this.props.maxDate ? this.props.maxDate : '',
      inputType : this.props.inputType ? this.props.inputType : 'vertical',
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
			min = min.indexOf('{') > -1 ? '#F{$dp.$D('+relativeId+','+min+')}' : min;
			max = max.indexOf('{') > -1 ? '#F{$dp.$D('+relativeId+','+max+')}' : max;
  	$("#"+id).on('click',function(){
  		console.log(id);
  		WdatePicker({
  			dateFmt:'yyyy-MM-dd',
  			el : id,
  			onpicked:function(){
  				// if(relativeId){
  				// 	relativeId.focus();
  				// }
  			},
  			minDate : min,
  			maxDate : max
  		});

  	});
  },

  render() {
  	let VerticalDate = (
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
  	);
  	let HorizontalDate = (
  		<div className="form-horizontal">
		    <label className="col-sm-4 control-label">{this.state.labelName}</label>
		    <div className="col-sm-8">
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
  	let ReturnDate = this.state.inputType == 'vertical' ? VerticalDate : HorizontalDate;
    return (
      <div>
      	{ReturnDate}
      </div>
    );
  },
});
export default DatePicker;


