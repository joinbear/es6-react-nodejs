
var http = require("http");
var tool = require('./toolUtil');
//默认配置参数
var opt = {
	hostname: '10.63.0.156',
	port: 8080,
	path: '',
	method: 'GET',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': '',
		'cookies': ''
	},
	postData : ''//post传递的数据
}
function httpUtil(){};
//设置参数
httpUtil.prototype.setOptions = function(options){
	this.options = tool.extend(opt,options || {});
	return this;
}
/**
 * [request 请求数据]
 * @param  {[type]} success [成功回调函数]
 * @param  {[type]} fail    [失败回调函数]
 * @return {[type]}         [返回对象本身实现链式调用]
 */
httpUtil.prototype.request = function(success,fail){
	var req = http.request(this.options, function(res) {
	  //设置字符编码
	  res.setEncoding('utf8');
	  //成功回调函数
	  if(typeof success === 'function') {
	  	success(res);	
	  }else {
	  	console.log('please ensure success is a function');
	  }
	  //请求结束
	  res.on('end', function() {
	    console.log('No more data in response.')
	  })
	});
	//错误回调函数
	req.on('error', function(e) {
	  if(typeof fail === 'function') {
	  	console.log('problem with request: ' + e.message);
	  	fail(e.message);	
	  }else {
	  	console.log('please ensure fail is a function');
	  }
	});
	// write data to request body
	if(this.options.postData != ''){
		req.write(this.options.postData);
	}
	req.end();
	return this;
}

module.exports = httpUtil;

