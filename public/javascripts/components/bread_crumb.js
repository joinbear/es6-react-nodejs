import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/lib/BreadcrumbItem';
// import Row from 'react-bootstrap/lib/Row';

let BreadCrumb = React.createClass({
	getInitialState() {
		return {
			data : this.props.data ? this.props.data : []
		}
	},
	render() {
		let breadNodes = [];
		this.state.data.forEach(function (item , index){
			item.active ?
				breadNodes.push(<BreadcrumbItem key={index} active >{item.text}</BreadcrumbItem>) :
				breadNodes.push(<BreadcrumbItem key={index} href={item.url}>{item.text}</BreadcrumbItem>);
		});
		return(
			<Breadcrumb data={this.state.data}>
		    {breadNodes}
		  </Breadcrumb>
		);
	}
});

export default BreadCrumb;

