import React from 'react';
import ReactDOM from 'react-dom';
import OptionItems from './options';
import Tips from '../tips/tips';
import SelectComponent from './select_base';
import DirectComponent from '../input/direct_box';
import Label from '../input/label';


const Select = React.createClass({
	
	getInitialState() {

		let seletId = "select" + new Date();

		return {
			validateClass: '',
			selectText : this.props.selectText ? this.props.selectText : '==请选择==',
			expanded : this.props.expanded ? this.props.expanded : false,
			parentClassName : 'btn-group',
			id : this.props.id ? this.props.id : seletId,
			name : this.props.name ? this.props.name : '',
			tipText: this.props.tipText ? this.props.tipText : '',
			isChange : false,
      validate : this.props.type == 'hidden' ? true : false,
			selectType : this.props.selectType ? this.props.selectType : 'vertical',
			labelName : this.props.labelName ? this.props.labelName : '请选择',
			required : this.props.required ?  this.props.required : false ,
			selectValue : this.props.selectValue ? this.props.selectValue : null,
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
	componentDidMount() {
		
	},
	validationState() {
  	let 
  		value = this.state.value,
     	length = value.length,
     	required = this.state.required,
     	reg = this.state.reg,
     	validate = true,
     	iconType = '',
     	tipText = '内容不能为空',
     	validateClass = '';

    if(this.state.isChange){
    	if(reg){
	    	let 
	    		matchReg = new RegExp(reg),
	    		result = matchReg.test(value);
	    	// console.log(matchReg);
	    	// console.log(result);
	    	validate = result ? true : false;
	    	validateClass =  result ? this.state.success : this.state.error;
	    	iconType = result ? 'success' : 'error';
	    	tipText = value == '' ? tipText : this.props.tipText;
	    }else {
	    	if(required && length > 0){
	    		validate = true;
	    		validateClass = this.state.success;
	    		iconType = 'success';
	    	}else if(required && length == 0){
	    		validate = false;
	    		validateClass = this.state.error;
	    		iconType = 'error';
	    	}else {
	    		validate = true;
	    		validateClass = '';
	    		iconType = '';
	    	}
	    }

	    this.setState({
	      validate: validate,
	      validateClass : validateClass,
	      iconType : iconType,
	      tipText : tipText
	    });
    }
  },
	handleOnBlur(selectValue,selectText) {
		console.log(selectValue);
		if(this.props.onBlur){
			this.props.onBlur(selectValue);
		}
		this.state.value = selectValue;
		if(this.props.onChange){
			this.props.onChange(true,this.state.name);
		}
		
	},
	componentWillReceiveProps(nextProps){
		this.setState({
			options : nextProps.options
		});
		return true;
	},

	render () {
		let DefaultSelect = (
			<SelectComponent 
				parentClassName={this.state.parentClassName}
				expanded={this.state.expanded}
				rel={this.state.name}
				name={this.state.name}
				selectText={this.state.selectText}
				selectValue={this.state.selectValue}
				options={this.state.options} 
				handleOnBlur={this.handleOnBlur}/>
		);
		switch(this.state.selectType){
  		case 'vertical':
  			return (
  				<DirectComponent validateClass={this.state.validateClass}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label
		  				required={this.state.required}  
		  				text={this.state.labelName} />
		  			<div className="">
		  				{DefaultSelect}
		  			</div>
		  		</DirectComponent>
  			);
  		break;
  		case 'horizontal':
  			return (
  				<DirectComponent className="form-inline" direct="horizontal" validateClass={this.state.validateClass}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label 
		  				className="control-label"
		  				required={this.state.required} 
		  				text={this.state.labelName} />
		  			{DefaultSelect}
		  		</DirectComponent>
  			);
  		break;
  		default:
  			return (
  				<DirectComponent validateClass={this.state.validateClass}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label 
		  				className="control-label hold-only"
		  				required={this.state.required} 
		  				text={this.state.labelName}/>
		  			<div className="">
		  				{DefaultSelect}
		  			</div>
		  		</DirectComponent>
  			);
  		break;
  	}
	}
});


export default Select;