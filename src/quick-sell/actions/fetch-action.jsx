import { fetchUrl } from '../../common-reducer/function';
import Constant from 'react-constant';
const constants = Constant('quickSell');
//============fetch data and pass the data to the reducer=======

/**
 * [requestQuickSellInitData load the init data]
 * @return {[type]} [pass the data to the receivedQuickSellInitData]
 */
export function requestQuickSellInitData(type) {
  console.log(type);
  return (dispatch) => {
    fetchUrl(dispatch,{ url : '/quick-sell/examples/'+type+'.json' , callback : receivedQuickSellInitData });
  }
}

/**
 * [receivedQuickSellInitData get the fetch json data and handle the logic]
 * @param  {[type]} quicksellInitData [json data]
 * @return {[type]}                   [description]
 */
function receivedQuickSellInitData(quicksellInitData) {
  const { sellType, creditType, documentType , regin , dutyType , formNames } = quicksellInitData;
  return {
    type: constants.RECEIVED_QUICKSELL_INITDATA,
    sellTypes: sellType,
    creditTypes: creditType,
    docTypes: documentType,
    dutyType : dutyType,
    regin: regin,
    formNames : formNames
  }
}

/**
 * [requestQuickSellInitData load the init data]
 * @return {[type]} [pass the data to the receivedQuickSellInitData]
 */
export function requestQuickSellList(conditions) {
  console.log(conditions);
  return (dispatch) => {
    fetchUrl(dispatch,{ 
      url : '/ekp/quick-sell/pagelist' , 
      body : conditions,
      method : 'POST',
      callback : receivedQuickSellList 
    });
  }
}

/**
 * [receivedQuickSellInitData get the fetch json data and handle the logic]
 * @param  {[type]} quicksellInitData [json data]
 * @return {[type]}                   [description]
 */
function receivedQuickSellList(listData) {
  console.log(listData);
  const { data , operation } = listData;
  return {
    type : constants.RECEIVED_QUICKSELL_LISTDATA,
    data : data , 
    operation : operation ,
    loading : false,
    SearchBtn : ''
  }
}

export function requestOperation(type,id){
  const data = { "id" : id };
  console.log('---------------');
  return (dispatch) => {
    fetchUrl(dispatch,{ url : '/ekp/quick-sell/operate/' + type , body : data ,method : 'PUT',callback : receivedQuickSellList });
  }
}

function receivedOperateResult(result){
  const { data } = result;
  return {
    type : constants.RECEIVED_QUICKSELL_HANDLE,
    data : data , 
    loading : false
  }
}
