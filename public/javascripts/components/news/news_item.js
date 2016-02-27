import React from 'react';
import ReactDOM from 'react-dom';

const NewItem = React.createClass({
	render() {
		return (
			<div className="row mt10">
        <div className="col-md-2 text-center ellipsis"><a href="" className="color-gray ">[{this.props.category}]</a></div>
        <div className="col-md-6 row"><a href="" className="link-title ellipsis">{this.props.title}</a></div>
        <div className="col-md-2 row color-gray text-right ellipsis">{this.props.autor}</div>
        <div className="col-md-2 color-gray ellipsis text-right">{this.props.time}</div>
      </div>
		);
	}
});

export default NewItem;