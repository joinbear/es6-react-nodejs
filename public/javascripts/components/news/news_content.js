import React from 'react';
import ReactDOM from 'react-dom';
import NewItem from './news_item';

const NewsContent = React.createClass({
	render() {
		var itemNodes = [];
		this.props.data.forEach(function(news,index){
			itemNodes.push(
				<NewItem 
					key={index} 
					category={news.category} 
					title={news.title} 
					autor={news.autor} 
					time={news.time} />
			);
		});
		return (
			<div className="publish-list">
				{itemNodes}
			</div>
		);
	}
});

export default NewsContent;