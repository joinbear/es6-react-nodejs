import React , { Component }from 'react';
import { connect } from 'react-redux';
import BreadCrumb from './bread-crumb';
import Report from './quick-sell-report';

class EditReport extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'EditReport';
  }
  render() {
  	const { breadcrumb } = this.props;
    return (
     	<div className="padding">
				<BreadCrumb breadcrumb={breadcrumb}/>
				<Report reportType="edit"/>
     	</div>
    );
  }
}
function mapStateToProps(state){
	return {
		breadcrumb : state.report.editBreadCrumb
	};
}

export default connect(mapStateToProps)(EditReport);


