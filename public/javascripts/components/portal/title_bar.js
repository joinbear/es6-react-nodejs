import React from 'react';
import ReactDOM from 'react-dom';

const Title = React.createClass({
	render() {
		return(
			<h2 className={this.props.className}>
				{this.props.title}
			</h2>
		);
	}
});


export default Title;