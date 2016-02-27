import React from 'react';
import ReactDOM from 'react-dom';
import HeaderSimple from './header_simple.js';


const Header = React.createClass({
	getInitialState() {
		return {
			isLogin : true
		}
	},
	render() {
		return (
			<div>
				<HeaderSimple />
			</div>
		)
	}
});

ReactDOM.render(<Header />, document.getElementById('nav'));

