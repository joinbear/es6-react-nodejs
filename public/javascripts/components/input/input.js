import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InputBase from './input_base';
import Label from './label';
import Feedback from './feedback';
import DirectComponent from './direct_box.js';
import Tips from '../tips/tips';


const Input = React.createClass({

	getInitialState() {
		let classStatus = {
			normal : 'form-group',
			error : 'has-error',
			success : 'has-success',
			feedback : 'has-feedback'
		};
    return {
    	validateClass : '',
    	iconType : '',
    	success : classStatus.normal +' '+ classStatus.success  +' '+ classStatus.feedback,
    	error : classStatus.normal  +' '+ classStatus.error  +' '+ classStatus.feedback,
      handleEvent: this.props.handleEvent ? this.props.handleEvent : false,
      value: this.props.value ? this.props.value : '',
      type: this.props.type ? this.props.type : 'text',
      tipText: this.props.tipText ? this.props.tipText : '',
      isChange : false,
      validate : this.props.type == 'hidden' ? true : false,
      name : this.props.name,
      inputType : this.props.inputType ? this.props.inputType : 'vertical',
      labelName : this.props.labelName ? this.props.labelName : '',
      placeholder : this.props.placeholder ? this.props.placeholder : '',
      reg : this.props.reg ? this.props.reg : '' ,
      style : this.props.style ? JSON.parse(this.props.style) : {},
      readonly : this.props.readonly ? this.props.readonly : false,
      disabled : this.props.disabled ? this.props.disabled : '',
      required : this.props.reg ? true : ( this.props.required ?  this.props.required : false )  
    };
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

  handleValue() {
  	let name = this.state.name;
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    console.log(this);
  },

  handleChange(passValue) {
  	console.log(passValue);
  	this.state.value = passValue;
  	this.state.isChange = true;
  	//使用该方式，验证值不对，无法正确验证
  	// this.setState({
   //    value: passValue,
   //    isChange : true
   //  });
    //执行验证
    this.validationState();
  	
  },

	componentDidMount() {
		
	},
  render() {
  	console.log(this.state.required);
  	let Input = (
  		<InputBase
  			type={this.state.type}
  			value={this.state.value}
  			placeholder={this.state.placeholder}
  			name={this.state.name}
        ref={this.state.name}
        disabled={this.state.disabled}
        style={this.state.style}
        readonly={this.state.readonly}
        handleChange={this.handleChange}
        labelName={this.state.labelName}
        elementId={this.props.elementId} />
  	);
  	switch(this.state.inputType){
  		case 'vertical':
  			return (
  				<DirectComponent validateClass={this.state.validateClass} style={this.state.style}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label
		  				required={this.state.required}  
		  				text={this.state.labelName}/>
		  			{Input}
		  			<Feedback iconType={this.state.iconType}/>
		  		</DirectComponent>
  			);
  		break;
  		case 'horizontal':
  			return (
  				<DirectComponent className="form-horizontal" validateClass={this.state.validateClass}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label 
		  				className="control-label col-sm-5"
		  				required={this.state.required} 
		  				text={this.state.labelName} />
		  			<div className="col-sm-7">
		  				{Input}
		  				<Feedback iconType={this.state.iconType}/>
		  			</div>
		  		</DirectComponent>
  			);
  		break;
  		default:
  			return (
  				<DirectComponent validateClass={this.state.validateClass} style={this.state.style}>
  					<Tips 
							position="top"
							tipText={this.state.tipText} />
		  			<Label 
		  				className="control-label hold-only"
		  				required={this.state.required} 
		  				text={this.state.labelName}/>
		  			{Input}
		  			<Feedback iconType={this.state.iconType}/>
		  		</DirectComponent>
  			);
  		break;
  	}
  }
});

export default Input;