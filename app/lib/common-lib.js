'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CommonLibrary {
	constructor() {}
	/**
  * [promise 使用promise包裹请求，返回promise]
  * @param  {Function} fn [description]
  * @return {[type]}      [description]
  */
	promise(fn) {
		// yield any promise
		const result = new Promise(function (resolve, reject) {
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
		console.log('--------' + url);
		return this.promise(function (resolve, reject) {
			_superagent2.default.get(url).end(function (err, result) {
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
	buildConfig(host, object) {
		for (let key in object) {
			object[key] = host + object[key];
		}
		return object;
	}
	dateToSecond(date) {
		return Date.parse(new Date(date).getTime()) / 1000;
	}
}
exports.default = CommonLibrary;