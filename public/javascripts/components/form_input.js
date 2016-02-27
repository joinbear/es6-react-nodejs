import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'react-bootstrap/lib/Input';

const FormInput = React.createClass({

  getInitialState() {
    return {
      value: '',
      isChange : false,
      validate : this.props.type == 'hidden' ? true : false,
      name : this.props.name,
      type : this.props.type ? this.props.type : 'text',
      help : this.props.help ? this.props.help : '',
      label : this.props.label ? this.props.label : '',
      placeholder : this.props.placeholder ? this.props.placeholder : '',
      reg : this.props.reg ? this.props.reg : '' ,
      required : this.props.reg ? true : ( this.props.required ?  this.props.required : false )
    };
  },

  validationState() {
  	let value = this.state.value;
    let length = value.length;
    let required = this.state.required;
    let reg = this.state.reg;
    if(this.state.isChange){
    	if(reg){
	    	let matchReg = new RegExp(reg);
	    	let result = matchReg.test(value)
	    	this.state.validate = result ? true : false;
	    	return result ? 'success' : 'error';
	    }else {
	    	if(required && length > 0){
	    		this.state.validate = true;
	    		return 'success'
	    	}else if(required && length == 0){
	    		this.state.validate = false;
	    		return 'error';
	    	}else {
	    		this.state.validate = true;
	    		return 'success';
	    	}
	    }
    }
  },

  handleChange() {
  	let name = this.state.name;
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs[name].getValue(),
      isChange : true
    });
  },

  render() {
    return (
      <div className="form-horizontal">
          <label className="col-sm-4 control-label">{this.state.labelName}</label>
          <div className="col-sm-8">
             <Input 
                type="text"
                value={this.state.value}
                placeholder={this.state.placeholder}
                help={this.state.help}
                bsStyle={this.validationState()}
                hasFeedback
                ref={this.state.name}
                onChange={this.handleChange}/>
          </div>
      </div>
    );
  }
});

export default FormInput;