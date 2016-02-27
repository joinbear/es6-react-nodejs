import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Image from 'react-bootstrap/lib/Image';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

let Logo = React.createClass({
	getInitialState() {
		return {
			src : this.props.src ?  this.props.src : ''
		}
	},
	render() {
		return <Image src={this.state.src} className="navbar-left img-logo" />
	}
});

let NavMenu = React.createClass({
	getInitialState() {
		return {
			menuList : this.props.menuList ?  this.props.menuList : [],
			className : this.props.className ? this.props.className : ''
		}
	},
	render() {
		var itemNodes =  [],menuLength = this.state.menuList.length , className = '';
		if( menuLength > 0 ){
			this.state.menuList.forEach(function (menu,index){
				className = menu.active ? 'nav-active' : '';
				itemNodes.push(<NavItem key={index} href={menu.href} className={className}>{menu.text}</NavItem>)
			}); 
		}
		return (
			<Nav className={this.state.className}>
				{itemNodes}
			</Nav>
		)
	}
});

let NavUser = React.createClass({
	getInitialState() {
		return {
			title : this.props.title,
			menuList : this.props.menuList ?  this.props.menuList : [],
			className : this.props.className ? this.props.className : ''
		}
	},
	render() {
		var itemNodes =  [],menuLength = this.state.menuList.length;
		if( menuLength > 0 ){
			this.state.menuList.forEach(function (menu,index){
				itemNodes.push(<MenuItem key={index} href={menu.href}>{menu.text}</MenuItem>)
			}); 
		}
		return (
			<Nav className={this.state.className}>
				<NavDropdown title={this.state.title} id="basic-nav-dropdown">
					{itemNodes}
				</NavDropdown>
			</Nav>
		)
	}
});

const HeaderWithNav = React.createClass({
	getInitialState() {
		return {
			userInfo : "欢迎您，乔尼·周敏",
			logo : '/images/logo.png',
			navList : [
				{
					url : '',
					text : '签到功能',
					active : true
				},{
					url : '',
					text : '考勤系统',
					active : false
				},{
					url : '',
					text : '业务系统',
					active : false
				}
			],
			userList : [
				{
					text : '修改密码',
					url : ''
				},{
					text : '个人设置',
					url : ''
				},{
					text : '退出系统',
					url : ''
				}
			]
		}
	},
	render() {
		return(
			<Grid fluid>
				<Row>
					<Col md={8}>
					 	<Logo src={this.state.logo}/>
					 	<NavMenu className="navbar-nav navbar-left nav-self" menuList={this.state.navList}/>
					</Col>
					<Col md={4}>
						<NavUser className="navbar-nav navbar-right" title={this.state.userInfo} id="basic-nav-dropdown" menuList={this.state.userList}/>
					</Col>
				</Row>
			</Grid>
		)
	}
});

const HeaderSimple = React.createClass({
	getInitialState() {
		return {
			logo : '/images/logo.png'
		}
	},
	render() {
		return(
			<Grid fluid>
				<Row>
					<Col md={8}>
					 	<Logo src={this.state.logo}/>
					</Col>
					<Col md={4}>
					</Col>
				</Row>
			</Grid>
		)
	}
});
export default { HeaderSimple , HeaderWithNav };