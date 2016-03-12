import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import ContainerComponent from './quick-sell-pulish';
import HeaderButton from '../../../public/javascripts/components/header/header_button';

class App extends React.Component {

	handleSubmit(e) {
		e.preventDefault();
		ReactDOM.findDOMNode(this.refs.form).submit();
		console.log(this.refs.length);
		return false;
	}
  render() {
    return (
      <form ref="form" action="/ekp/form" method="post" name="quickSell" onSubmit={this.handleSubmit.bind(this)}>
      	<HeaderButton />
        <ContainerComponent />
      </form>
    )
  }

}

//state数据接收函数
function mapStateToProps(state) {
  return state
}
//将数据组件链接
export default connect(mapStateToProps)(App);