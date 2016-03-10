import React from 'react';
import ReactDOM from 'react-dom';

const OptionsItem = React.createClass({

	handleClick(event) {
		let 
			selectText = event.target.innerText,
			selectValue = event.target.getAttribute('value');
			
		this.props.handleOption(selectValue,selectText);
	},

	render() {
		var items = [],_self = this;
		this.props.options.forEach(function(option, i) {
      items.push(<li key={i}><a href="javascript:;" onClick={_self.handleClick} value={option.value} className="select-item">{option.text}</a></li>);
    });
		return (
			<ul className="dropdown-menu">{items}</ul>
		);
	}
});


export default OptionsItem;