import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import Logo from '../logo/logo';



const ButtonBox = React.createClass({
	render() {
		var itemNodes =  [],buttonLength = this.props.buttonList.length , className = '';
		if( buttonLength > 0 ){
			this.props.buttonList.forEach(function (button,index){
				itemNodes.push(<ButtonItem key={index} >{button}</ButtonItem>)
			}); 
		}
		return(
			<ul className="nav navbar-nav navbar-right">
				{itemNodes}
			</ul>
		);
	}
});

const ButtonItem = React.createClass({
	getInitialState() {
		return {
			bsStyle : this.props.bsStyle ?  this.props.bsStyle : 'success'
		}
	},
	render() {
		return(
			<li><Button bsStyle="success" type="submit">{this.props.children}</Button></li>
		)
	}
});
const HeaderButton = React.createClass({
	getInitialState() {
		return {
			logo : '/images/logo.png',
			buttonList : ['提交','修改','删除','关闭']
		}
	},
	render() {
		return(
			<nav className="navbar navbar-fixed-top navbar-self" id="nav">
				<Grid fluid>
					<Row>
					 	<Col md={4}><Logo src={this.state.logo}/></Col>
					 	<Col md={8}><ButtonBox buttonList={this.state.buttonList} /></Col>
					</Row>
				</Grid>
			</nav>
		)
	}
});


export default HeaderButton;