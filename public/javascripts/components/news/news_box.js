import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NewItem from './news_item';
import NewsContent from './news_content';

const NewsBox = React.createClass({

	
	getInitialState() {
		let data = this.props.data ? this.props.data : {};
		let navName = this.props.active ? this.props.active : '';
		let showData = data[navName];
		return {
			initData : data,
			currentNavName : navName,
			currentData : showData
		}
	},


	handleSelect(selectedKey) {

    let data = this.state.initData[selectedKey];
  	this.setState({
  		currentData : data,
  		currentNavName : selectedKey
  	});

  },


	render() {
		let navNodes = [],data = this.state.initData,i = 0;
		for(var key in data){
			navNodes.push(<NavItem eventKey={key} key={i}>{data[key]['name']}</NavItem>);
			i++;
		}
		return(
			<div>
				<Nav bsStyle="tabs" justified activeKey={this.state.currentNavName} onSelect={this.handleSelect}>
	        {navNodes}
	      </Nav>
	      <div className="news-content">
	      	<NewsContent data={this.state.currentData.data} />
	      	<div className="mt10 text-right" style={{paddingRight:"25px"}}><a href={this.state.currentData.more} target="_blank">更多&raquo;</a></div>
	      </div>
			</div>
		);
	}
});

export default NewsBox;