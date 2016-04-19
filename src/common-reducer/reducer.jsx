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
      break;
    case constants.of('RECEIVED_SUBREGIN'):
      return Object.assign({}, state, {
        subregin : action.subregin
      });
      break;
    case constants.of('RECEIVED_STORE'):
      return Object.assign({}, state, {
        stores : action.stores
      });
      break;
    case constants.of('RECEIVED_PERSON'):
      return Object.assign({}, state, {
        person : action.person
      });
      break;
    case constants.of('DATA_LOADING'):
      return Object.assign({}, state, {
        loading : true
      });
      break;
		default:
			return state;
	}
}