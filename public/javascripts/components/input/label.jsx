import React from 'react';


class Label extends React.Component {

	render() {

		let { className , required } = this.props;
		let requiredMsg =  required ? '*' : '';
		className = className  ? className : 'control-label';

		return (
			<label className={className}>{this.props.text}<span className="required-span">{requiredMsg}</span></label>
		);

	}

}

export default Label;
