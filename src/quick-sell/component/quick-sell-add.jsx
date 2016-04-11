import React , { Component }from 'react';
import { connect } from 'react-redux';
import BreadCrumb from './bread-crumb';
import Report from './quick-sell-report';

class AddReport extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'AddReport';
  }
  render() {
  	const { breadcrumb } = this.props;
    return (
     	<div className="padding">
				<BreadCrumb breadcrumb={breadcrumb} />
        <Report reportType="add"/>
     	</div>
    );
  }
}
function mapStateToProps(state){
	return {
		breadcrumb : state.report.addBreadCrumb
	};
}

export default connect(mapStateToProps)(AddReport);