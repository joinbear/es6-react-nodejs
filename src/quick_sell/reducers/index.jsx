import { combineReducers } from 'redux';
import report from './report';
import form from './form';
import types from './types';
import regins from './regin';

const rootReducer = combineReducers({
  report,
  types,
  regins,
  form
})

export default rootReducer;
