// var React = require('react');
// var ReactDOM = require('react-dom');
// import configureStore from '../actions/common/configureStore';
// import fetchPosts from '../actions/common/actions';
// import { Provider } from 'react-redux'
// const store = configureStore();

// var NavLogo = React.createClass({
// 	render : function(){
// 		return(
// 			<img src={this.props.url} alt="" className="navbar-left img-logo" />
// 		)
// 	}
// });

// var NavLiItem = React.createClass({
// 	getInitialState : function(){
// 		return {
// 			active : this.props.active ? 'nav-active' : ''
// 		}
// 	},
// 	render : function(){
// 		console.log(this.props);
// 		return(
// 			<li><a href={this.props.href} className={this.state.active}>{this.props.children}</a></li>
// 		)
// 	}
// });

// var NavMenu = React.createClass({
// 	render : function(){
// 		var liNodes =  [];
// 		this.props.data.forEach(function (memu,index){
// 			liNodes.push(<NavLiItem href={memu.url} key={index} active={memu.active}>{memu.text}</NavLiItem>)
// 		}); 
// 		return(
// 			<ul className={this.props.className}>
// 				{liNodes}
//       </ul>
// 		)
// 	}
// });
// var NavMenuBox = React.createClass({
// 	render : function(){
// 		return(
// 			<div className="col-md-8">
// 				<NavLogo url={this.props.data.logo} />
// 				<NavMenu data={this.props.data.list} className={this.props.className} />
// 	    </div>
// 		);
// 	}
// });

// var NavBox = React.createClass({
// 	getInitialState :function(){
// 		return {
// 			menu : {
// 				logo : '/images/logo.png',
// 				list : [{
// 					url : '',
// 					text : '调出数据',
// 					active : true
// 				},{
// 					url : '',
// 					text : '调入数据',
// 					active : false
// 				},{
// 					url : '',
// 					text : '调入证件类型',
// 					active : false
// 				},{
// 					url : '',
// 					text : '调入证件类型',
// 					active : false
// 				},{
// 					url : '',
// 					text : '责任盘类型',
// 					active : false
// 				}]
// 			},
// 			user : [
// 				{
// 					text : '首页',
// 					url : '',
// 					active : false
// 				},{
// 					text : '欢迎您，乔尼·周敏',
// 					url : '',
// 					active : false
// 				},{
// 					text : '退出系统',
// 					url : '',
// 					active : false
// 				}
// 			]
// 		}
// 	},
// 	componentDidMount() {
//     // const { dispatch, selectedSubreddit } = this.props
//     dispatch(fetchPostsIfNeeded(selectedSubreddit))
//   },
// 	render : function(){
// 		return(
// 			<div className="container-fluid">
// 				<div className="row">
// 					<NavMenuBox data={this.state.menu} className="nav navbar-nav navbar-left nav-self" />
// 					<NavMenu data={this.state.user} className="nav navbar-nav navbar-right"/>
// 				</div>
// 			</div>
// 		);
// 	}
// });
// connect(mapStateToProps)(NavBox);
// ReactDOM.render(
// 	  <Provider store={store}>
//       <NavBox />
//     </Provider>,
// 	document.getElementById('nav')
// )