import React from 'react';
import ReactDOM from 'react-dom';

let ToolItem = React.createClass({

	render() {
		return (
			<li className="self-tool-item" key={this.props.key}><a href={this.props.link} className="" target="_blank">{this.props.text}</a></li>
		);
	}

});

const ToolBox = React.createClass({

	getInitialState() {
		let 
			itemArr = [{
				link : "http://user.anjuke.com/my/login",
				text : "安居客"	
			},{
				link : "http://cd.fangtan007.com/chushou/",
				text : "房探007"	
			},{
				link : "https://mail.qq.com/",
				text : "QQ邮箱"	
			},{
				link : "http://www.baidu.com/",
				text : "百度知道"	
			},{
				link : "http://vip.esf.focus.cn/login.php?type=1",
				text : "搜狐焦点"	
			},{
				link : "http://cd.esf.sina.com.cn/login/?url=http%3A%2F%2Fcd.esf.sina.com.cn%2F",
				text : "新浪房产"	
			},{
				link : "http://chengdu.haozu.com/login/?tab=zft",
				text : "好租"	
			},{
				link : "http://www.baixing.com/auth/denglu/",
				text : "百姓网"	
			},{
				link : "http://email.163.com/",
				text : "163邮箱"	
			},{
				link : "http://cd.58.com/",
				text : "58同城"	
			},{
				link : "http://esf.cd.qq.com/",
				text : "大成二手房"	
			},{
				link : "http://my.anjuke.com/my/login?history=aHR0cDovL2NoZW5nZHUuYW5qdWtlLmNvbS9hc2s/ZnJvbT1OYXZpZ2F0aW9uJl9yPTE2ODc2MTQyMA==&from=HeaderTop",
				text : "安居客问答"	
			},{
				link : "http://cd.ganji.com/fang5/a1/",
				text : "赶集个人二手房"	
			},{
				link : "http://cd.tuitui99.com/",
				text : "推推99"	
			},{
				link : "http://www.todgo.com/",
				text : "土地公"	
			},{
				link : "http://j1.esf.sina.com.cn/center/",
				text : "新浪二手房"	
			},{
				link : "http://qq.tfol.com/",
				text : "超级信使"	
			},{
				link : "http://www.cdlocaltax.chengdu.gov.cn/CMS/template.go?_template=1473",
				text : "地税发票真伪"	
			},{
				link : "http://wsbs.sc-n-tax.gov.cn/sscx/fpxx.action",
				text : "国税发票真伪"	
			},{
				link : "http://map.baidu.com/",
				text : "百度地图"	
			},{
				link : "https://wx.qq.com/",
				text : "微信"	
			},{
				link : "http://soufun.com/house/tools.htm",
				text : "房贷计算"	
			},{
				link : "http://chengdu.edushi.com/",
				text : "E都市"	
			},{
				link : "http://www.8684.cn/",
				text : "公交查询"	
			},{
				link : "http://www.chsi.com.cn/xlcx/",
				text : "学历查询"	
			},{
				link : "//www.hao123.com/sjhmcx",
				text : "手机归属地"	
			},{
				link : "//www.cdzfgjj.gov.cn/",
				text : "市公积金查询"	
			},{
				link : "//cdxiongzhai.homelink.com.cn",
				text : "凶宅采集系统"	
			}];
		return {
			toolItems: this.props.data ? this.props.data : itemArr
		}
	},

	render() {
		let liNodes = [];
		this.state.toolItems.forEach(function(item,index){
			liNodes.push(<ToolItem key={index} text={item.text} link={item.link} />);
		});
	
		return (
			<ul className="clearfix">
				{liNodes}
			</ul>
		);
	}

});

export default ToolBox;