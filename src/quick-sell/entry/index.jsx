import '../common/lib';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link , browserHistory } from 'react-router';
import AddReport from '../component/quick-sell-add';
import EditReport from '../component/quick-sell-edit';
import App from '../component/app';
import DeptTree from '../../common/component/dept-tree';
import configureStore from '../store/configure-store';

const store = configureStore();

render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path="/">
        <Route path="/ekp/quick-sell" component={App} />
  			<Route path="/ekp/quick-sell/dept-tree" component={DeptTree} />
  			<Route path="/ekp/quick-sell/add" component={AddReport} />
      	<Route path="/ekp/quick-sell/edit/:id" component={EditReport} />
  		</Route>
  	</Router>
  </Provider>,
  document.getElementById('react-content')
)

