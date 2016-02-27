import React from 'react';
import ReactDOM from 'react-dom';
import Input from 'react-bootstrap/lib/Input';

const HorizontalInput = React.createClass({

  getInitialState() {
    return {
      value: this.props.value ? this.props.value : null,
      width: this.props.width ? this.props.width : '',
      name : this.props.name ? this.props.name : '',
      id : this.props.id ? this.props.id : '',
      labelName : this.props.labelName ? this.props.labelName : '',
      placeholder : this.props.placeholder ? this.props.placeholder : ''
    };
  },

  handleChange(){

  },

  render() {
    return (
    	<div className="form-horizontal">
			  <div className="form-group">
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
				      	value={this.state.value}/>
			    </div>
			  </div>
			</div>
    );
  },
});


export default HorizontalInput;