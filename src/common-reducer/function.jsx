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
  headers = { 'Accept' : 'application/json' , "Content-Type": "application/json"},
  callback = function(){} 
}){
  //set default value
  const params = {
    method : method,
    headers : headers
  };
  console.log('----->');
  console.log(body);
  //handle data
  if(method != 'GET' && body){
    console.log('+++++>');
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

/**
 * [formatDate 将时间戳数据转化为日期格式]
 * @param  {[type]} dateString [description]
 * @param  {[type]} fmtReg     [description]
 * @return {[type]}            [description]
 */
export function formatDate(dateString,fmtReg){
  Date.prototype.Format = function (fmt) { 
    const o = {
       // "Y+": this.getFullYear() , //年
       "M+": this.getMonth() + 1, //月份 
       "d+": this.getDate(), //日 
       "h+": this.getHours(), //小时 
       "m+": this.getMinutes(), //分 
       "s+": this.getSeconds(), //秒 
       "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
       "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
     fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
     if (new RegExp("(" + k + ")").test(fmt)) {
       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
     }
    } 
    return fmt;
  }
  const fmt = fmtReg || 'yyyy-MM-dd';
  return new Date(dateString).Format(fmt);
}