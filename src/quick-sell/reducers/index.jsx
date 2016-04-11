import { combineReducers } from 'redux';
import report from './report';
import list from './list';
import common from './common';
import table from './table';
import operate from './operate';

const rootReducer = combineReducers({
  report,
  list,
  common,
  table,
  operate
})

export default rootReducer;