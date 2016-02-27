import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PanelItem from './panel_item';
import PanelBody from './panel_body';

const PanelBox = React.createClass({

	getInitialState() {
		let panelId = 'panel' + new Date().getTime();
		return {
			id : this.props.id ? this.props.id : panelId,
			panelOpen : this.props.panelOpen ? this.props.panelOpen : true,
			arrowClassName : this.props.panelOpen ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down',
			height : 0
		}
	},

	handlePanelClick(event){
		event.stopPropagation();
		event.preventDefault();
		let isOpen = !this.state.panelOpen;
		let arrowClass = this.state.panelOpen ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-menu-down';
		let newHeight = this.state.panelOpen ? 'auto' : '0';
		this.setState({
			panelOpen : isOpen,
			arrowClassName : arrowClass,
			height : newHeight
		});
	},

	//完成dom渲染后,用jquery绑定事件在该阶段绑定
	componentDidMount() {

		// let panelId = this.state.id,panelOpen = this.state.panelOpen;
		// $("#"+panelId).find('.panel-heading').on('click',function(){
		// 	console.log($(this).find('.glyphicon'));
		// 	let icon = $(this).find('.glyphicon');
		// 	if(isOpen){
		// 		isOpen = !isOpen;
		// 		icon.removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
		// 	}else{
		// 		isOpen = !isOpen;
		// 		icon.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
		// 	}
		// });

	},

	render() {

		return (
			<div className="panel panel-default" id={this.state.id} style={{marginBottom:"0"}}>
				<div className="panel-heading row border" onClick={this.handlePanelClick} style={{borderRadius:"0"}}>
			  	<span className="col-md-10 self-link">{this.props.title}</span>
					<div className="col-md-2"><i className={this.state.arrowClassName}></i></div>
			  </div>
			  <PanelBody data={this.props.data} height={this.state.height}/>
			</div>
		);
	}
});

export default PanelBox;