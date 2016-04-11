import fetch from 'isomorphic-fetch';
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
    return fetch('/quick-sell/examples/'+type+'.json')
      .then(resp => resp.json())
      .then(json => dispatch(receivedQuickSellInitData(json)))
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
 * [requestSubreginById get the subregin json info by subregin id]
 * @param  {[type]} subreginId []
 * @return {[type]}            [description]
 */
export function requestQuickSellSubreginData(reginId) {
  return (dispatch) => {
    return fetch('/quick-sell/examples/data1.json')
      .then(resp => resp.json())
      .then(json => dispatch(receivedQuickSellSubreginData(json)))
  }
}


/**
 * [receivedQuickSellSubreginData get the subregin data and handle the logic]
 * @param  {[type]} quicksellSubreginData [subregin json data]
 * @return {[type]}                       [description]
 */
function receivedQuickSellSubreginData(quicksellSubreginData) {
  const { subregin } = quicksellSubreginData;
  return {
    type: constants.RECEIVED_SUBREGIN,
    subregin : subregin
  }
}


export function requestStores(subreginId) {
  console.log(subreginId);
  return (dispatch) => {
    console.log('-------');
    return fetch('/quick-sell/examples/data1.json')
      .then(resp => resp.json())
      .then(json => dispatch(receivedStoreData(json)))
  }
}

function receivedStoreData(storeData) {
  const { subregin } = storeData;
  return {
    type: constants.RECEIVED_STORES,
    stores : subregin
  }
}


/**
 * [requestSubreginById get the subregin json info by subregin id]
 * @param  {[type]} subreginId []
 * @return {[type]}            [description]
 */
export function requestQuickSellGetPerson(keyword) {
  return (dispatch) => {
    console.log('-------');
    return fetch('/quick-sell/examples/data2.json')
      .then(resp => resp.json())
      .then(json => dispatch(receivedQuickSellPerson(json)))
  }
}


/**
 * [receivedQuickSellSubreginData get the subregin data and handle the logic]
 * @param  {[type]} quicksellSubreginData [subregin json data]
 * @return {[type]}                       [description]
 */
function receivedQuickSellPerson(quicksellPerson) {
  const { person } = quicksellPerson;
  return {
    type: constants.RECEIVED_PERSON,
    person : person
  }
}

