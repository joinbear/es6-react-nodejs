import React from 'react';

let ImgTag = React.createClass({
	getInitialState() {
		return {
			className : this.props.className ? this.props.className : '',
			imagUrl : this.props.url ?  this.props.url : '',
			altText : this.altText ?  this.altText : ''
		}
	},
	render() {
		return(
			<img src={this.state.imagUrl} alt={this.state.altText} className={this.state.className} />
		)
	}
});

let LiTag = React.createClass({
	getInitialState() {
		return {
			href : this.props.href ? this.props.href : '',
			title : this.props.title ? this.props.title : '',
			text : this.props.text ? this.props.text : '',
			className : this.props.className ? this.props.className : ''
		}
	},
	render() {
		return(
			<li><LinkTag href={this.props.href} className={this.props.className} text={this.props.text}/></li>
		)
	}
});

let LinkTag = React.createClass({
	getInitialState() {
		return {
			href : this.props.href ? this.props.href : '',
			title : this.props.title ? this.props.title : '',
			text : this.props.text ? this.props.text : '',
			className : this.props.className ? this.props.className : '',
			target : this.props.target ? this.props.target : '_self'
		}
	},
	render() {
		return(
			<a href={this.props.href} title={this.state.title} target={this.state.target} className={this.state.className}>{this.state.text}</a>
		)
	}
});

export default { ImgTag , LinkTag , LiTag }


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { NavItem , Nav , NavDropdown , MenuItem , Image , Grid , Row ,Col } from 'react-bootstrap';

// const navbarInstance = (
// 	<Grid fluid>
// 		<Row>
// 			<Col md={8}>
// 			 	<Image src="/images/logo.png" className="navbar-left img-logo"/>
// 			 	<Nav className="navbar-nav navbar-left nav-self">
// 	        <NavItem eventKey={1} href="#" className="nav-active">签到功能</NavItem>
// 	        <NavItem eventKey={2} href="#">考勤系统</NavItem>
// 	        <NavItem eventKey={2} href="#">业务系统</NavItem>
// 	      </Nav>
// 			</Col>
// 			<Col md={4}>
// 				<Nav className="navbar-nav navbar-right">
// 					<NavDropdown eventKey={3} title="欢迎您，乔尼·周敏" id="basic-nav-dropdown">
// 	          <MenuItem eventKey={3.1}>个人设置</MenuItem>
// 	          <MenuItem eventKey={3.2}>修改密码</MenuItem>
// 	          <MenuItem eventKey={3.3}>退出系统</MenuItem>
// 	        </NavDropdown>
// 	      </Nav>
// 			</Col>
// 		</Row>
// 	</Grid>
// );
// 