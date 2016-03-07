import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/lib/Image';

//logo 控件
let Logo = React.createClass({
	getInitialState() {
		return {
			src : this.props.src ?  this.props.src : '/images/logo.png'
		}
	},
	render() {
		return <Image src={this.state.src} className="navbar-left img-logo"/>
	}
});


export default Logo;