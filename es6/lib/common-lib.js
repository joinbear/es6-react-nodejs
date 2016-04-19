import superagent from 'superagent';

class CommonLibrary {
	constructor() {

	}
	/**
	 * [promise 使用promise包裹请求，返回promise]
	 * @param  {Function} fn [description]
	 * @return {[type]}      [description]
	 */
	promise(fn) {
		// yield any promise
  	const result = new Promise(function(resolve, reject) {
  		fn(resolve, reject);
  	});
  	return result;
	}
	/**
	 * [getData 使用superagent的get方式获取promise类型数据]
	 * @param  {[type]} url [数据接口]
	 * @return {[type]}     [description]
	 */
	getData(url) {
		console.log('--------'+ url);
		return this.promise(function(resolve,reject){
			superagent
			.get(url)
			.end(function(err,result) {
				if (err) {
			    reject(err);
			  }
			  resolve(result);
			});
		});
	}
	/**
	 * [buildConfig 构建本地测试应用的url地址]
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	buildConfig(host,object) {
		for(let key in object){
			object[key] = host + object[key];
		}
		return object;
	}
	dateToSecond(date) {
		return Date.parse( new Date(date).getTime() )/1000;
	}
}
export default CommonLibrary;