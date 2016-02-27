import React from 'react';
import ReactDOM from 'react-dom';
import PanelItem from './panel_item';

const PanelBody = React.createClass({
	render() {
		let liNodes = [];
		this.props.data.forEach(function(item,index){
			liNodes.push(<PanelItem key={index} text={item.text} url={item.url}/>);
		});
		return (
			<ul className="panel-body row" style={{height : this.props.height,overflow:"hidden",borderLeft:"1px solid #ddd",borderRight:"1px solid #ddd"}}>
				{liNodes}
			</ul>
		);
	}
});

export default PanelBody;