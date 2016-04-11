import Constant from 'react-constant';
const constants = Constant('quickSell');

/**
 * [handleQuickSellType 押证和压钱的逻辑函数]
 * @param  {[type]} sellType [number]
 * @return {[type]}          [description]
 */
export function handleQuickSellType(sellType) {
  var equity;
  if(sellType == 0){
    equity = {
      isShowType : true,
      isShowMoney : false,
      name : ['cashPledge']
    };
  }else if(sellType == 1){
    equity = {
      isShowType : false,
      isShowMoney : true,
      name : ['equityType','equityName']
    };
  }else if(sellType == 2){
    equity = {
      isShowType : true,
      isShowMoney : true,
    };
  }
  return {
    type : constants.QUICKSELL_EQUITYTYPE,
    equity : equity
  }
};

/**
 * [handleQuickSellChooseType 押证类型选择函数]
 * @param  {[type]} selectType [number]
 * @return {[type]}            [description]
 */
export function handleQuickSellChooseType(selectType){

  var typeName = '';

  if(selectType == 0){
    typeName = '';
  }else if(selectType == 1){
    typeName = 'contract';
  }else if(selectType == 2){
    typeName = 'credit';
  }else if(selectType == 3){
    typeName = 'placement';
  }
  return {
    type : constants.QUICKSELL_EQUITYNAME,
    typeName : typeName
  }

}

export function handleFormAction(validate,name){
  console.log(name);
  return {
    type : constants.QUICKSELL_PUBLISHFORM,
    data : {
      name : name,
      validate : validate
    }
  }
}


export function handleOperation(handleType,fdId){
  var data={};
  switch(handleType){
    case 'compensate':
      data = {
        compensate : true,
        fdId : fdId,
        title : '速销报赔',
        okText : '报赔',
        visible : true
      }
      break;
    case 'visitStatus':
      data = {
        visitStatus : true,
        fdId : fdId,
        title : '回访信息',
        okText : '修改',
        visible : true
      };
      break;
    case 'resigner':
      data = {
        resigner : true,
        fdId : fdId,
        title : '速销续签',
        okText : '续签',
        visible : true
      }
      break;
    case 'recycle':
      data = {
        recycle : true,
        fdId : fdId,
        title : '速销回收',
        okText : '回收',
        visible : true
      };
      break;
    default :
     data = {};
     break;
  }
  return {
    type : constants.QUICKSELL_HANDLEOPERATION,
    data : data
  }
}