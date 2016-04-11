import React , { Component } from 'react';
import { Breadcrumb } from 'antd';

class BreadCrumb extends Component {
  render() {
  	const { breadcrumb } = this.props;
  	const breadcrumbs = breadcrumb.map(e=>{
  		if(e.link){
  			return <Breadcrumb.Item key={e.link} href={e.link}>{e.text}</Breadcrumb.Item>
  		}else{
  			return <Breadcrumb.Item key={e.link}>{e.text}</Breadcrumb.Item>
  		}
  	});
    return (
    	<Breadcrumb>
			 {breadcrumbs}
			</Breadcrumb>
    );
  }
}
export default BreadCrumb;
