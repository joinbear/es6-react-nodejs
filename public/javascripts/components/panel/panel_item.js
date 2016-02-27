import React from 'react';
import ReactDOM from 'react-dom';

const PanelItem = React.createClass({
	render() {
		return (
			<li className="panel-item row">
				<a className="col-md-10 self-link" href={this.props.url}>{this.props.text}</a>
				<div className="col-md-2"><i className="glyphicon glyphicon-menu-right"></i></div>
			</li>
		);
	}
});

export default PanelItem;