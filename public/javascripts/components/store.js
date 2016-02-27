import Reflux from 'reflux';
import actions from './actions';

export default Reflux.createStore({
  listenables: actions,

  init() {
  	console.log(this);
    this.todos = [];
  },
  fetch() {
  	console.log(0);
  },
  update(items) {
    this.todos = items;
    this.trigger(this.todos);
  }
})