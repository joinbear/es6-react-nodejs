import React from 'react';
import ReactDOM from 'react-dom';
import OptionItems from './options';

const SelectComponent = React.createClass({
	getInitialState() {
    return {
      expanded : false,
      parentClassName : 'btn-group',
      selectValue : this.props.selectValue,
      selectText : this.props.selectText,

    };
	},
	handleClick() {
		let 
			expanded = !this.state.expanded,
			className  = expanded ? 'btn-group open' : 'btn-group';
		this.setState({
			expanded : expanded,
			parentClassName : className
		});
	},
	handleOptionClick(selectValue,selectText) {

		this.setState({
			selectValue : selectValue,
			selectText : selectText,
			parentClassName : 'btn-group',
			expanded : false
		});


	},

	render() {
		return (
			<div className={this.state.parentClassName}>
			  <button 
			  	type="button" 
			  	className="btn btn-default btn-block dropdown-toggle"
			  	onClick={this.handleClick}
			  	selectValue={this.state.selectValue}>
			    {this.state.selectText}
			    <span className="caret"></span>
			  </button>
			  <input type="hidden" value={this.state.selectValue} rel={this.props.name} name={this.props.name} />
			 	<OptionItems 
			 		options={this.props.options}
			 		handleOption={this.handleOptionClick}/>
			</div>
		);
	}

});

export default SelectComponent;