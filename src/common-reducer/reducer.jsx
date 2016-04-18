import Constant from 'react-constant';
const constants = Constant('commonAction');

const initialState = {
  regin:[],
	subregin:[],
	stores:[],
  person:[]
};

export default function commonReducer(state = initialState, action){
	switch(action.type){
		//初始化相关内容
    case constants.of('RECEIVED_REGIN'):
      return Object.assign({}, state, {
        regin : action.regin
      });
    case constants.of('RECEIVED_SUBREGIN'):
      return Object.assign({}, state, {
        subregin : action.subregin
      });
    case constants.of('RECEIVED_STORE'):
      return Object.assign({}, state, {
        stores : action.stores
      });
    case constants.of('RECEIVED_PERSON'):
      return Object.assign({}, state, {
        person : action.person
      });
		default:
			return state;
	}
}