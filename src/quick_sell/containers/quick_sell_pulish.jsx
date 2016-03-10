import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import InputBox from '../../../public/javascripts/components/input';
import SelectBox from '../../../public/javascripts/components/select';
import BreadCrumb from '../../../public/javascripts/components/bread_crumb';
import Input from '../../../public/javascripts/components/input/input';
import Select from '../../../public/javascripts/components/select/select';
import DatePicker from '../../../public/javascripts/components/date/date';


const ContainerComponent = React.createClass({
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
		const { title } = this.props
		return(
			<Grid className="container-fluid container-self">
				<BreadCrumb data={this.state.bread_crumb}/>
				<p>{title}</p>
				<Row>
					<Col md={2}>
						<Select 
							id="regin" 
							labelName="大区"
							name="foldAreaId" 
							selectType="vertical" 
							labelName="大区" 
							required="true" />
					</Col>
					<Col md={2}>
						<Select 
							id="subregin" 
							name="foldShopId" 
							selectType="vertical" 
							labelName="门店" 
							required="true" />
					</Col>
					<Col md={3}>
						<Input 
							name="foldUserName" 
							selectType="vertical" 
							labelName="调入人" 
							required="true" 
							value=""
							placeholder="请输入并选择调入人"/>
						<input name="foldUser" value="1" type="hidden" />
					</Col>
					<Col md={5}>
						<Col md={6} className="row">
							<Input 
							name="seNumber" 
							selectType="vertical" 
							labelName="SE工号" 
							required="true" 
							value=""
							reg="\d{8}"
							tipText="SE系统号为8位数字"
							placeholder="8位SE系统号" />
						</Col>
						<Col md={6}>
							<Col md={3}>
								<div className="row mt-label">本月第</div>
							</Col>
							<Col md={6}>
								<Input
								inputType="normal" 
								ref="regintest"
								name="monthNumber"
								labelName=""
								required="true"
								value="14"
								readonly="readonly" />
							</Col>
							<Col md={3}>
								<div className="row mt-label">次调入</div>
							</Col>
						</Col>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<Select 
							name="contractType" 
							selectType="vertical" 
							labelName="调入合同类型" 
							required="true"
							options="" />
					</Col>
					<Col md={2}>
						<Input
							inputType="vertical" 
							name="contractNo"
							required="true"
							reg="\w+"
							tipText="合同号只能是数字或者字母"
							labelName="速销合同号" />
					</Col>
					<Col md={3}>
						<Input
							inputType="vertical" 
							name="availabilityNo"
							required="true"
							reg="\w+"
							tipText="房源编号只能是数字或者字母"
							labelName="房源编号" />
					</Col>
					<Col md={3}>
						<Input
							inputType="vertical" 
							name="housesName"
							required="true"
							labelName="楼盘名称" />
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<Input
							inputType="vertical" 
							name="ownerName"
							required="true"
							labelName="业主姓名" />
					</Col>
					<Col md={2}>
						<Input
							inputType="vertical" 
							name="ownerTel"
							required="true"
							reg="((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)"
							tipText="输入正确的手机格式"
							labelName="业主电话" />
					</Col>
					<Col md={8}>
						<Col md={3} className="row">
							<Select 
								name="quicksellType" 
								selectType="vertical" 
								labelName="速销类型" 
								required="true"
								options="" />
						</Col>
						<Col md={3}>
							<Select 
								name="equityType" 
								selectType="normal" 
								labelName="押证类型" 
								required="true"
								options="" />
						</Col>
						<Col md={3}>
							<Select 
								name="equityName" 
								selectType="normal" 
								labelName="证件名称" 
								required="true"
								options="" />
						</Col>
						<Col md={3}>
							<Input
							inputType="vertical" 
							name="cashPledge"
							required="true"
							reg="^(\d{1,5})$"
							tipText="金额不能大于10000"
							labelName="下钱金额" />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<Select 
							name="dutyType" 
							selectType="normal" 
							labelName="责任盘类型" 
							required="true"
							options="" />
					</Col>
					<Col md={2}>
						<Input
							inputType="vertical" 
							name="foldMoney"
							required="true"
							labelName="调入价(万元) " />
					</Col>
					<Col md={3}>
						<DatePicker
				   		value=""
				   		name="foldTime"
				   		required="true"
				   		placeholder="请选择调入时间"
				   		labelName="调入时间"
				   		dateType="vertical" />
					</Col>
					<Col md={5}>
						<Col md={6} className="row">
							<DatePicker
				   		value=""
				   		name="beginDate"
				   		required="true"
				   		placeholder="请选择开始时间"
				   		labelName="代卖开始时间"
				   		dateType="vertical" />
						</Col>
						<Col md={6}>
							<DatePicker
				   		value=""
				   		name="endDate"
				   		required="true"
				   		placeholder="请选择结束时间"
				   		labelName="代卖结束时间"
				   		dateType="vertical" />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col md={2}>
						<Input
							inputType="vertical" 
							name="businessManager"
							required="true"
							labelName="商圈经理" />
					</Col>
					<Col md={2}>
						<Input
							inputType="vertical" 
							name="businessManagerLink"
							required="true"
							reg="^1[34578]\d{9}$"
							tipText="手机号有误"
							labelName="联系电话" />
					</Col>
					<Col md={3}>
						<Input
							inputType="vertical" 
							name="bankCard"
							required="true"
							reg="^(\d{16}|\d{19})$"
							tipText="银行卡号为16位或者19位"
							labelName="请款卡号(建设银行)" />
					</Col>
					<Col md={2}>
						<Select 
							name="inventoryStatus" 
							selectType="normal" 
							labelName="当前状态" 
							required="true"
							options="" />
					</Col>
				</Row>
			</Grid>
		)
	}
});

//state数据接收函数
function mapStateToProps(state) {
  return {
    title: state.report.title
  }
}
//将数据组件链接
export default  connect(mapStateToProps)(ContainerComponent);
