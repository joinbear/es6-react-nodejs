import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import Logo from './logo/logo';


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
					<Col md={6}>
					 	<Logo src={this.state.logo}/>
					</Col>
					<Col md={6} style="text-align:center;">
						<Button bsStyle="success">保存</Button>
						<Button bsStyle="success">关闭</Button>
					</Col>
				</Row>
			</Grid>
		)
	}
});


export default HeaderButton;