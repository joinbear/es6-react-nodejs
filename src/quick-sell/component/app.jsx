import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumb from '../../common/component/bread-crumb';
import SearchForm from './quick-sell-search';
import TableComponent from './quick-sell-table';


class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { breadcrumb } = this.props;
		return (
			<div className="padding">
				<BreadCrumb breadcrumb={breadcrumb}/>
				<SearchForm />
				<TableComponent />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		breadcrumb : state.list.breadcrumb
	};
}

export default connect(mapStateToProps)(App);