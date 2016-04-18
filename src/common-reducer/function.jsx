import fetch from 'isomorphic-fetch';
/**
 * [fetchUrl http request method]
 * @param  {[type]} dispatch [dispatch对象]
 * @param  {[type]} 置够对象 [dispatch对象]
 * @return {[type]}          [description]
 */
export function fetchUrl(dispatch,{ 
  body = '', 
  method = 'GET', 
  url = '', 
  headers = { 'Accept' : 'application/json'},
  callback = function(){} 
}){
  //set default value
  const params = {
    method : method,
    headers : headers
  };
  //handle data
  if(method !== 'GET' && body){
    params.body = JSON.stringify(body);
  }
  //build a request
  const request = new Request(url,params);
  console.log(request);
  //return value
  return fetch(request)
  .then(resp => resp.json())
  .then(json => dispatch(callback(json)))
  .catch(function(err) {
    console.log(err);
  });
}