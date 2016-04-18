import { combineReducers } from 'redux';
import report from './report';
import list from './list';
import common from './common';
import commonReducer from '../../common-reducer/reducer';
import table from './table';
import operate from './operate';

const rootReducer = combineReducers({
  report,
  list,
  common,
  table,
  operate,
  commonReducer
})

export default rootReducer;