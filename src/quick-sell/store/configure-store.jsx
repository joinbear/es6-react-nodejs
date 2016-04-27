import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import callAPIMiddleware from '../../common/reducer/fetch-middleware';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f    // only in development env
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}