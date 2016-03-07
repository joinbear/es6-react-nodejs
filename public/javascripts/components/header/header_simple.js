import React from 'react';
import ReactDOM from 'react-dom';
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


export default HeaderSimple;