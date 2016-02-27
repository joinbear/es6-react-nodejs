import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/lib/Image';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import InputBox from './input';


let PItem = React.createClass({
	render() {
		return(
			<p className="tip-p purp">{this.props.text}</p>
		);
	}
});

const FormLogin = React.createClass({
	
	getInitialState() {
    return {
      disabled: false,
      style: 'success'
    };
  },

  handleSubmit(event) {
  	event.stopPropagation();
		event.preventDefault();
  	let 
			data          = {},
			countVolidate = 0,
			countFormData = 0,
			forData       = this.refs;
  	for( var key in forData ){
  		let value = forData[key];
  		data[key] = value.state.value;
  		countFormData += 1;
  		if(value.state.validate) countVolidate += 1;
  	}
  	if(countVolidate == countFormData){
  		console.log("可以提交数据");
  		document.getElementById('loginForm').submit();
  	}else {
  		alert("账号或者密码有误！");
  		return false;
  	}
  },
	render() {
		return(
			<form id="loginForm">
				<div className="login text-center">
					<Image src="/images/person.jpg" />
				</div>
				<PItem text="温馨提示：" />
				<PItem text="1、新员工登陆OA系统默认密码为1;" />
				<PItem text="2、如果未设置密码的用户,现在请使用密码1登陆,并立即修改;其他用户请使用原密码登陆;" />
				<PItem text="3、成都OA服务电话:86139898（8666）" />
				<PItem text="4、重庆OA服务电话:15923205089 朱微微" />
				<InputBox 
					type="text" 
					placeholder="请输入8位系统号"
					ref = "username"
					name = "username"
					reg="^\d{8}$"
					size="large"/>
				<InputBox 
					type="password" 
					ref="passowrd"
					name="passowrd"
					placeholder="请输入密码"
					required="true"
					size="large"/>
				<ButtonInput 
					type="submit" 
					value="登录"
					bsStyle={this.state.style} 
					bsSize="large"
					onClick={this.handleSubmit} 
					disabled={this.state.disabled}
					block />
			</form>
		)
	}
});

export default FormLogin;
