import React from 'react';
import ReactDOM from 'react-dom';
import SelectComponent from './select.js';

const VerticalSelect = React.createClass({

	getInitialState() {
		return {
			selectText : this.props.selectText ? this.props.selectText : '==请选择==',
			id : this.props.id ? this.props.id : '',
			labelName : this.props.labelName ? this.props.labelName : '请选择',
			selectValue : null,
			name : this.props.name ? this.props.name : '',
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
		return(
		  <div className="form-group group-class">
		    <label className="control-label label-class">{this.state.labelName}</label>
		    <div className="">
		    	<SelectComponent 
		    		options={this.state.options} 
		    		id={this.state.id} 
		    		name={this.state.name}
	    			selectValue={this.state.selectValue}
	    			selectText={this.state.selectText}/>
		    </div>
		  </div>
		);
	}
});

export default VerticalSelect;