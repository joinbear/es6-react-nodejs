import React from 'react';

class Feedback extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      icons : {
      	success : 'glyphicon-ok',
      	error : 'glyphicon-remove'
      }  
    };
  }

	render() {
		let 
			iconType = this.props.iconType ? this.props.iconType : '',
			className = "glyphicon form-control-feedback "+ this.state.icons[iconType];
		return (
			<span className={className}></span>
		);
	}
}

export default Feedback;