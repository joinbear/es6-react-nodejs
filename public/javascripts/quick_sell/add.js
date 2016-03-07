import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import Logo from '../component/logo/logo';
import InputBox from '../component/input';
import SelectBox from '../component/select';
import BreadCrumb from '../component/bread_crumb';

//header
const Header = React.createClass({
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
					<Col md={6} style="text-align:right;">
						<Button bsStyle="success">提交</Button>
						<Button bsStyle="success">修改</Button>
						<Button bsStyle="success">删除</Button>
						<Button bsStyle="success">关闭</Button>
					</Col>
				</Row>
			</Grid>
		)
	}
});

const Container = React.createClass({
	getInitialState() {
    return {
          
    };
	},
	render() {
		return(
			<Grid>
				<h2>调入公告</h2>
				<Row>
					<Col md={4}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="大区" />
					</Col>
					<Col md={4}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="门店" />
					</Col>
					<Col md={4}>
						本月第<input type="text" value="1"/>次调入
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="调入人" />
					</Col>
					<Col md={4}>
						<SelectBox id="select1" name="TradeContract" selectType="horizontal"/>
					</Col>
					<Col md={4}>
					</Col>
				</Row>
			</Grid>
		)
	}
});
const AddContainer = React.createClass(
	render() {
		getInitialState() {
		    return {
		      bread_crumb :[{
		      	text : '首页',
		      	url : '/'
		      },{
		      	text : '限时代卖',
		      	url : '/'
		      },{
		      	text : '调入发布',
		      	url : '#'
		      }]
		    };
		},
		return (
			<div>
				<Header />
				<BreadCrumb data={this.state.bread_crumb}/>
				<Container />
			</div>
		);
	}
)

ReactDOM.render(<AddContainer />, document.getElementById('contentForm'));
