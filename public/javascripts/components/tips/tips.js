import React from 'react';
import ReactDOM from 'react-dom';


const Tips = React.createClass({
	render() {
		let className = 'in tooltip ' + this.props.position; 
		return (
			<div className={className}>
				<div className="tooltip-arrow"></div>
				<div className="tooltip-inner">{this.props.tipText}</div>
			</div>
		);
	}
});

export default Tips;