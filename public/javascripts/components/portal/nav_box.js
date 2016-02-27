import React from 'react';
import ReactDOM from 'react-dom';


let NavItem = React.createClass({

	render() {
		return (
			<li className="self-item" key={this.props.key}><a href={this.props.link} className="self-item-link" target="_blank">{this.props.text}</a></li>
		);
	}

});

const NavBox = React.createClass({

	getInitialState() {
		return {
			navItems: [{
				link : "https://mail.homelink.com.cn/owa/auth/logon.aspx",
				text : "链家SE系统"	
			},
			{
				link : "http://passport.homelink.com.cn/cas/login?service=http://se.homelink.com.cn/index.php?r=public/casbridge",
				text : "链家邮箱"	
			},
			{
				link : "http://cd.lianjia.com/",
				text : "链家网"	
			},
			{
				link : "http://bjxwgl.homelink.com.cn/login.jsp",
				text : "链家加油站"	
			},
			{
				link : "http://zjjg.ecen.com.cn",
				text : "理房通"	
			},
			{
				link : "http://esf.funi.com",
				text : "存量房平台"	
			},
			{
				link : "ecen/tm/ps/tm_ps_log/tmPsLog.do?method=externalLink&amp;siteId=ecen_mail",
				text : "伊诚邮箱"	
			},
			{
				link : "http://www.cdfgj.gov.cn/BusinessQuery/BusSearch.aspx?action=ucSencondCX&amp;Class=11",
				text : "产权查档"	
			}]
		}
	},

	render() {
		let liNodes = [];
		this.state.navItems.forEach(function(item,index){
			liNodes.push(<NavItem key={index} text={item.text} link={item.link} />);
		});
	
		return (
			<ul className="clearfix">
				{liNodes}
			</ul>
			
		);
	}

});

export default NavBox;