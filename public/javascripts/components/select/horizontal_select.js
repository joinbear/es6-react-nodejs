import React from 'react';
import ReactDOM from 'react-dom';
import SelectComponent from './select.js';

const SelectBox = React.createClass({

	getInitialState() {
		return {
			selectText : this.props.selectText ? this.props.selectText : '==请选择==',
			id : this.props.id ? this.props.id : '',
			labelName : this.props.labelName ? this.props.labelName : '请选择',
			selectValue : null,
			name : this.props.name ? this.props.name : '',
			selectType : this.props.selectType ? this.props.selectType : 'vertical',
			options : this.props.options ? this.props.options : [{
				value : 1,
				text : "测试1"
			},{
				value : 2,
				text : "测试2"
			},{
				value : 3,
				text : "测试3"
			}]
		};
	},

	render() {
		let DefaultSelect = (
			<SelectComponent 
    		options={this.state.options} 
    		id={this.state.id}
    		name={this.state.name} 
  			selectValue={this.state.selectValue}
  			selectText={this.state.selectText} />
	  );
		let HorizontalSelect = (
			<div className="form-horizontal">
			  <div className="form-group">
			    <label className="col-sm-4 control-label">{this.state.labelName}</label>
			    <div className="col-sm-8">
			    	{DefaultSelect}
			    </div>
			  </div>
			</div>
		);
		let VerticalSelect = (
			<div className="form-group group-class">
		    <label className="control-label label-class">{this.state.labelName}</label>
		    <div className="">
		    	{DefaultSelect}
		    </div>
		  </div>
		);
		let ReturnSelect = this.state.selectType == 'vertical' ? VerticalSelect : HorizontalSelect ;
		return(
			<div>
			  {ReturnSelect}
			</div>
		);
	}
});

export default SelectBox;