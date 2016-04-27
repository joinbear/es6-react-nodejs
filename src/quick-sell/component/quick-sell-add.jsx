import React , { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import BreadCrumb from '../../common/component/bread-crumb';
import DeptTree from '../../common/component/dept-tree';
import Report from './quick-sell-report';
import { showTreeModal , hideTreeModal } from '../../common/reducer/action';

class AddReport extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'AddReport';
  }
  handleValues(values) {
    const { hideTreeModal } = this.props;
    console.log(values);
    setTimeout(function(){
      hideTreeModal();
    },500);
  }
  render() {
  	const { breadcrumb , showTreeModal } = this.props;
    return (
     	<div className="padding">
        <Button onClick={ showTreeModal }>显示组织树</Button>
				<BreadCrumb breadcrumb={breadcrumb} />
        <Report reportType="add"/>
        <DeptTree handleOk={ (values)=>this.handleValues(values)} />
     	</div>
    );
  }
}
function mapStateToProps(state){
	return {
		breadcrumb : state.report.addBreadCrumb
	};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    showTreeModal,
    hideTreeModal
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AddReport);