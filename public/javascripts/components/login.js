import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/lib/Image';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FormLogin from './login_form';
import HeaderSimple from './header_simple';
import NavBox from './portal/nav_box';
import ToolBox from './portal/tool_box';
import Title from './portal/title_bar';
require('./portal/login.css');

const LoginContainer = React.createClass({
	getInitialState() {
		return {

		}
	},
	render() {
		return (
			<Grid>
				<Row>
					<Col md={4} className="border">
						<FormLogin />
					</Col>
					<Col md={8}>
						<div className="border">
							<Title className="title" title="常用导航" />
							<NavBox />
							<Title className="title" title="常用工具" />
							<ToolBox />
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
});

// ReactDOM.render(<HeaderSimple />, document.getElementById('nav'));
ReactDOM.render(<LoginContainer />, document.getElementById('container'));