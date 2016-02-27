import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/lib/Image';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Panel from 'react-bootstrap/lib/Panel';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import HeaderSimple from './header_simple';
import NavBox from './portal/nav_box';
import ToolBox from './portal/tool_box';
import Title from './portal/title_bar';
import PanelBox from './panel/panel_box';
import NewsBox from './news/news_box';
require('./portal/login.css');



const PortalContainer = React.createClass({
	getInitialState() {
		return {
			panelData:[{
				name : "交易系统",
				data : [{
					text : '我的签到',
					url : '#'
				},{
					text : '我的签到',
					url : '#'
				},
				{
					text : '我的签到',
					url : '#'
				},{
					text : '我的签到',
					url : '#'
				},{
					text : '我的签到',
					url : '#'
				},{
					text : '我的签到',
					url : '#'
				}]
			},
			{
				name : "签到系统",
				data : [{
					text : '我的签到',
					url : '#'
				},{
					text : '我的签到',
					url : '#'
				},
				{
					text : '我的签到',
					url : '#'
				},{
					text : '我的签到',
					url : '#'
				},{
					text : '我的签到',
					url : '#'
				},{
					text : '我的签到',
					url : '#'
				}]
			}],
			newsInfomation : {
				news : {
					name : "新闻公告",
					data : [{
						category : '新闻公告',
						title : '测试内容测试内容测试内容测试内容测试内容',
						autor : '乔尼·周敏',
						time : '2016-01-14'
					},{
						category : '新闻公告',
						title : '测试内容测试内容测试内容测试内容测试内容',
						autor : '乔尼·周敏',
						time : '2016-01-14'
					},{
						category : '新闻公告',
						title : '测试内容测试内容测试内容测试内容测试内容',
						autor : '乔尼·周敏',
						time : '2016-01-14'
					},{
						category : '新闻公告',
						title : '测试内容测试内容测试内容测试内容测试内容',
						autor : '乔尼·周敏',
						time : '2016-01-14'
					}],
					more : "http://baidu.com"
				},
				info : {
					name : '交易信息',
					data : [{
						category : '交易信息',
						title : '测试内容测试内容测试内容测试内容测试内容',
						autor : '乔尼·周敏',
						time : '2016-01-14'
					},{
						category : '交易信息',
						title : '测试内容测试内容测试内容测试内容测试内容',
						autor : '乔尼·周敏',
						time : '2016-01-14'
					},{
						category : '交易信息',
						title : '测试内容测试内容测试内容测试内容测试内容',
						autor : '乔尼·周敏',
						time : '2016-01-14'
					},{
						category : '交易信息',
						title : '测试内容测试内容测试内容测试内容测试内容',
						autor : '乔尼·周敏',
						time : '2016-01-14'
					}],
					more : "http://baidu.com"
					},
					trade : {
						name : '培训信息',
						data : [{
							category : '培训信息',
							title : '测试内容测试内容测试内容测试内容测试内容',
							autor : '乔尼·周敏',
							time : '2016-01-14'
						},{
							category : '培训信息',
							title : '测试内容测试内容测试内容测试内容测试内容',
							autor : '乔尼·周敏',
							time : '2016-01-14'
						},{
							category : '培训信息',
							title : '测试内容测试内容测试内容测试内容测试内容',
							autor : '乔尼·周敏',
							time : '2016-01-14'
						},{
							category : '培训信息',
							title : '测试内容测试内容测试内容测试内容测试内容',
							autor : '乔尼·周敏',
							time : '2016-01-14'
						}],
						more : "http://baidu.com"
				}
			}
		}
	},

	render() {
		let panelArr = [];
		this.state.panelData.forEach(function(panel,index){
			panelArr.push(<PanelBox data={panel.data} title={panel.name} key={index}/>);
		});
		return (
			<Grid>
				<Row>
					<Col md={2}>
						<div className="person">
							<div className="text-center">
								<img width="120" height="120" src="/images/person.jpg"/>
							</div>
							<p className="user-dept mt10">乔尼·周敏</p>
							<p className="user-dept">web前端工程师</p>
							<p className="user-dept">信息中心-软件开发一部</p>
						</div>
						<div className="mt10">{panelArr}</div>
					</Col>
					<Col md={7}>
						<div className="border">
							<Title className="title" title="常用导航" />
							<NavBox />
							<Title className="title" title="常用工具" />
							<ToolBox />
							<NewsBox data={this.state.newsInfomation} active="news" />
						</div>
					</Col>
					<Col md={3} className="border">
						<div className="mt10">
							<button type="button" className="btn btn-success btn-lg btn-block">马上签到</button>
						</div>
						<div className="row mt10">
							<Col md={6}>
								<a type="button" className="btn btn-success btn-lg btn-block" href="">登录OA</a>
							</Col>
							<Col md={6}>
								<button type="button" className="btn btn-success btn-lg btn-block">注销OA</button>
							</Col>
						</div>
						<div className="mt10">
							
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
});

ReactDOM.render(<PortalContainer />, document.getElementById('container'));