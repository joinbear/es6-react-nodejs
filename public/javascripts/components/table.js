import React from 'react';
import ReactDOM from 'react-dom';


let Td = React.createClass({
	getInitialState (){
		return {
			data : this.props.data,
			className : this.props.className ? this.props.className : ''
		}
	},
	render (){
		let tdNodes = [],data = this.state.data,className = this.state.className;
		for(let key in data){
			tdNodes.push(<td className={className} key={key}>{data[key]}</td>);
		}
		return (
			<tr>
				{tdNodes}
			</tr>
		);
	}
});

let Theader = React.createClass({
	getInitialState (){
		return {
			data : this.props.data,
			className : this.props.className ? this.props.className : ''
		}
	},
	render (){
		let tdNodes = [],data = this.state.data,className = this.state.className;
		this.state.data.forEach(function (data,key){
			tdNodes.push(<th className={className} key={key}>{data}</th>);
		});
		return (
			<thead>
				<tr>
					{tdNodes}
				</tr>
			</thead>
		);
	}
});

let TBody = React.createClass({
	getInitialState() {
		return {
			data : this.props.data ? this.props.data : []
		}
	},
	render() {
		var trNodes = [];
		this.state.data.forEach(function (item,index){
			trNodes.push(<Td key={index} data={item} />)
		});
		return(
			<tbody>
				{trNodes}
			</tbody>
		);
	}
});

let Table = React.createClass({
	getInitialState() {
		return {
			className : this.props.className ? this.props.className : 'table',
			theader   : this.props.data.theader ? this.props.data.theader : [],
			tbody     : this.props.data.tbody ? this.props.data.tbody : []
		};
	},
	render() {
		return (
			<table className={this.state.className}>
				<Theader data={this.state.theader}/>
				<TBody data={this.state.tbody} />
			</table>
		);
	}
});

export default Table;
