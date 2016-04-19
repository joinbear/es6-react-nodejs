import Constant from 'react-constant';
import { fetchUrl } from './function';
const constants = Constant('commonAction');
//============fetch data and pass the data to the reducer=======

const requestObject = {
  regin : '/ekp/dept/regin',
  subregin : '/ekp/dept/subregin/',
  stores : '/ekp/dept/store/',
  person : '/quick-sell/examples/data2.json'
}
//============common action all the project use=================
/**
 * [requestRegin get the company regin data]
 * @return {[type]} [description]
 */
export function requestRegin() {
  const { regin } = requestObject;
  return (dispatch) => {
    fetchUrl(dispatch,{ url : regin , callback : receiveRegin });
  }
}
/**
 * [receiveRegin receive the regin data]
 * @param  {[type]} regin [response regin data | json]
 * @return {[type]}       [description]
 */
function receiveRegin(reginData) {
  const { regin } = reginData;
  return {
    type: constants.RECEIVED_REGIN,
    regin : regin
  }
}
/**
 * [requestSubRegin get the subregin by regin id]
 * @param  {[type]} reginId [regin id the use choose]
 * @return {[type]}         [description]
 */
export function requestSubRegin(reginId) {
  const { subregin } = requestObject;
  return (dispatch) => {
    fetchUrl(dispatch,{ url : subregin + reginId, callback : receiveSubRegin });
  }
}
/**
 * [receiveSubRegin receive the subregin data]
 * @param  {[type]} subregin [response subregin data | json ]
 * @return {[type]}          [description]
 */
function receiveSubRegin(subreginData) {
  const { subregin } = subreginData;
  return {
    type: constants.RECEIVED_SUBREGIN,
    subregin : subregin
  }
}
/**
 * [requestStore get the stores by subregin id]
 * @param  {[type]} subreginId [subregin id]
 * @return {[type]}            [description]
 */
export function requestStore(subreginId) {
  const { stores } = requestObject;
  return (dispatch) => {
    fetchUrl(dispatch,{ url : stores + subreginId, callback : receiveStore });
  }
}
/**
 * [receiveStore receive stores ]
 * @param  {[type]} subregin [response stores data | json]
 * @return {[type]}          [description]
 */
function receiveStore(storeData) {
  const { stores } = storeData;
  return {
    type: constants.RECEIVED_STORE,
    stores : stores
  }
}
/**
 * [requestPerson search user by username]
 * @param  {[type]} username [the likely username]
 * @return {[type]}          [description]
 */
export function requestPerson(username) {
  const { person } = requestObject;
  return (dispatch) => {
    fetchUrl(dispatch,{ url : person , callback : receivePerson });
  }
}
/**
 * [receivePerson get the user from result]
 * @param  {[type]} person [person object]
 * @return {[type]}        [description]
 */
function receivePerson(personData) {
  const { person } = personData;
  return {
    type: constants.RECEIVED_PERSON,
    person : person
  }
}