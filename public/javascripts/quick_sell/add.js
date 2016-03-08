import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import HeaderButton from '../components/header/header_button';
import InputBox from '../components/input';
import SelectBox from '../components/select';
import BreadCrumb from '../components/bread_crumb';
import DatePicker from '../components/date';
import Input from '../components/input/input';
import Select from '../components/select/select';
import Editor from '../components/editor/editor';


const Container = React.createClass({
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
	render() {
		return(
			<Grid className="container-fluid container-self">
				<BreadCrumb data={this.state.bread_crumb}/>
				<p>调入公告</p>
				<Row>
					<Col md={3}>
						<Input
							inputType="vertical" 
							ref="regintest"
							name="regintest"
							placeholder="请输入大区口号"
							labelName="大区"
							required="true"
							tipText="输入长度为11位数字"
							reg='\d{1,11}' />
					</Col>
					<Col md={3}>
						<Input
							inputType="vertical" 
							ref="regintest1"
							name="regintest1"
							placeholder="请输入小区口号"
							labelName="小区"
							required="true"
							reg='\w+' />
					</Col>
					<Col md={3}>
						<Input
							inputType="vertical" 
							ref="area"
							name="area"
							placeholder="面积"
							labelName="小区" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="调入人"
							required="true" />
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Select id="selectTest" name="TradeContract" selectType="normal" labelName="速销类型"/>
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="速销（调入）合同号" />
					</Col>
					<Col md={3}>
						<SelectBox id="select1" name="TradeContract" selectType="vertical" labelName="调入合同类型"/>
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="房源编号" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="楼盘名称" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="楼层" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="户型" />
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="面积(m2)" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="报价(万元)" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="调入价(万元)" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="业主姓名" />
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="业主电话" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="佣金比例" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="税费(元)" />
					</Col>
					<Col md={3}>
						<DatePicker
				   		value="2016-01-22"
				   		id="startTime"
				   		labelName="调入时间"
				   		inputType="vertical" />
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<DatePicker
				   		value="2016-01-22"
				   		id="endTime"
				   		labelName="出房时间"
				   		inputType="vertical" />
					</Col>
					<Col md={3}>
						<DatePicker
				   		value="2016-01-22"
				   		id="beginTime"
				   		labelName="代卖开始日期"
				   		inputType="vertical" />
					</Col>
					<Col md={3}>
						<DatePicker
				   		value="2016-01-22"
				   		id="overTime"
				   		labelName="代卖结束日期"
				   		inputType="vertical" />
					</Col>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="钥匙 " />
					</Col>
				</Row>
				<Row>
					<Col md={3}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="责任盘类型" />
					</Col>
					<Col md={9}>
						<InputBox
							inputType="vertical" 
							ref="reginSlogan"
							name="reginSlogan"
							labelName="备注" />
					</Col>
				</Row>
				<Editor />
			</Grid>
		)
	}
});
const AddContainer = React.createClass({
	getInitialState() {
    return {
     
    };
	},
	render() {
		return (
			<div>
				<HeaderButton />
				<Container />
			</div>
		);
	}
});

ReactDOM.render(<AddContainer />, document.getElementById('container'));
