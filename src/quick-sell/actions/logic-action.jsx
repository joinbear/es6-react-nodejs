import Constant from 'react-constant';
const constants = Constant('quickSell');

/**
 * [cacheConditions 缓存搜索条件用于分页]
 * @param  {[type]} conditions [搜索条件]
 * @return {[type]}            [description]
 */
export function cacheConditions(conditions){
  return {
    type: constants.CACHE_DATA,
    cacheConditions : conditions
  }
}

/**
 * [handleLoading 处理load的逻辑以及按钮的可用与否]
 * @return {[type]} [description]
 */
export function handleLoading() {
  return {
    type: constants.DATA_LOADING,
    loading : true,
    SearchBtn : 'disabled'
  }
}
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

/**
 * [handleOperation 处理操作弹窗逻辑]
 * @param  {[type]} handleType [弹窗类型]
 * @param  {[type]} id         [战报id]
 * @return {[type]}            [description]
 */
export function handleOperation(handleType,id){
  var data={};
  switch(handleType){
    case 'compensate':
      data = {
        compensate : true,
        id : id,
        title : '速销报赔',
        okText : '报赔',
        visible : true,
        type : 'compensate'
      }
      break;
    case 'revisit':
      data = {
        revisit : true,
        id : id,
        title : '回访信息',
        okText : '修改',
        visible : true,
        type : 'revisit'
      };
      break;
    case 'renew':
      data = {
        renew : true,
        id : id,
        title : '速销续签',
        okText : '续签',
        visible : true,
        type : 'renew'
      }
      break;
    case 'regain':
      data = {
        regain : true,
        id : id,
        title : '速销回收',
        okText : '回收',
        visible : true,
        type : 'regain'
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