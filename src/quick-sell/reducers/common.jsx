import Constant from 'react-constant';
const constants = Constant('quickSell');

const initialState = {
	inventoryStatus:[{
    "value" : 0,
    "label":"库存"
  },{
    "value" : 1,
    "label":"超时"
  },{
    "value" : 2,
    "label":"解约"
  },{
    "value" : 3,
    "label":"调出"
  }],
	quicksellType:[{
    "value" : 0,
    "label":"押证"
  },{
    "value" : 1,
    "label":"下钱"
  },{
    "value" : 2,
    "label":"押证且下钱"
  }],
	contractType:[{
    "value" : 0,
    "label":"租单"
  },{
    "value" : 1,
    "label":"售单"
  }],
  regin:[],
	subregin:[],
	stores:[],
  person:[]
};

export default function common(state = initialState, action){
	switch(action.type){
		//初始化相关内容
    case constants.of('RECEIVED_QUICKSELL_INITDATA'):
      return Object.assign({}, state, {
        regin : action.regin
      });
    case constants.of('RECEIVED_SUBREGIN'):
      return Object.assign({}, state, {
        subregin : action.subregin
      });
    case constants.of('RECEIVED_STORES'):
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