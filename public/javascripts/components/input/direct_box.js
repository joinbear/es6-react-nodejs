import React from 'react';
import ReactDOM from 'react-dom';

const DirectComponent = React.createClass({

	render() {

		let parentClass = this.props.direct == 'horizontal' ? 'form-inline': '';
		let validateClass = this.props.validateClass ? this.props.validateClass : 'form-group';
		return(
			<div className={parentClass} style={this.props.style}>
				<div className={validateClass}>{this.props.children}</div>
			</div>
		);
	}

});


export default DirectComponent;