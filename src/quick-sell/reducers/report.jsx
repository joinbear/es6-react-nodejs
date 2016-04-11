import Constant from 'react-constant';
const constants = Constant('quickSell');

const initialState = {
  title:'速销调入',
  creditTypes: [],
  docTypes: [],
  equityName: [],
  isShowType : false,
  isShowMoney : false,
  dutyType : [],
  regin : [],
  subregin : [],
  person : [],
  isEditPage : false,
  addBreadCrumb :[{
    "text" : "首页",
    "link" : "http://oa.ecen.com.cn/"
  },{
    "text" : "限时代卖",
    "link" : "/"
  },{
    "text" : "调入发布",
    "link" : ""
  }],
  editBreadCrumb :[{
    "text" : "首页",
    "link" : "http://oa.ecen.com.cn/"
  },{
    "text" : "限时代卖",
    "link" : "/"
  },{
    "text" : "调入修改",
    "link" : ""
  }],
  formNames:{}
}

export default function report(state = initialState, action) {

  switch (action.type) {
    case constants.of('QUICKSELL_EQUITYTYPE'):
      return Object.assign({}, state , {
        isShowType : action.equity.isShowType,
        isShowMoney : action.equity.isShowMoney
      });
    //初始化相关内容
    case constants.of('RECEIVED_QUICKSELL_INITDATA'):
      return Object.assign({}, state, {
        creditTypes: action.creditTypes,
        docTypes: action.docTypes,
        dutyType: action.dutyType,
        regin : action.regin,
        formNames : action.formNames
      });
    case constants.of('QUICKSELL_EQUITYNAME'):
      return Object.assign({}, state , {
        equityName : state.docTypes[action.typeName]
      });
    case constants.of('RECEIVED_SUBREGIN'):
      return Object.assign({}, state, {
        subregin : action.subregin
      });
    case constants.of('RECEIVED_PERSON'):
      return Object.assign({}, state, {
        person : action.person
      });
    default:
      return state;
  }
}
