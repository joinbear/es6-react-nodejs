import { 
  QUICKSELL_EQUITYTYPE,
  QUICKSELL_EQUITYNAME
} from '../actions';

const initialState = {
  title:'速销调入',
  contractType:[{
    "value" : 0,
    "text":"租单"
  },{
    "value" : 1,
    "text":"售单"
  }],
  inventoryStatus:[{
    "value" : 0,
    "text":"库存"
  },{
    "value" : 1,
    "text":"超时"
  },{
    "value" : 2,
    "text":"解约"
  },{
    "value" : 3,
    "text":"调出"
  }],
  breadCrumb :[{
    "text" : "首页",
    "url" : "http://oa.ecen.com.cn/"
  },{
    "text" : "限时代卖",
    "url" : "/"
  },{
    "text" : "调入发布",
    "url" : "#"
  }]
}

export default function report(state = initialState, action) {

  switch (action.type) {
    case QUICKSELL_EQUITYTYPE:
      return Object.assign({}, state , {
        isShowType : action.equity.isShowType,
        isShowMoney : action.equity.isShowMoney
      });
    default:
      return state;
  }
}
