'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _config = require('../config/');

var _config2 = _interopRequireDefault(_config);

var _commonLib = require('../../../lib/common-lib');

var _commonLib2 = _interopRequireDefault(_commonLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const comLib = new _commonLib2.default();

/**
 * 速销列表Model
 */
class QuickSellPageList {

	contructor() {}
	/**
  * [getList 获取列表页面]
  * @param  {[type]} conditions [条件]
  * @conditions demo "{"beginDate" : "2016-01-04" }" 
  * @return {[type]}            [返回一个promise对象]
  */
	getList(conditions, page) {
		return comLib.getData(_config2.default.pagelist + '?page=' + page + '&rows=15&data=' + conditions);
	}
	/**
  * [putList update各种数据]
  * @param  {[type]} type       [类型]
  * @param  {[type]} conditions [更新条件，默认只有id]
  * @return {[type]}            [返回一个promise对象]
  */
	putList(type, conditions) {
		console.log(_config2.default[type]);
		return comLib.postData(_config2.default[type], conditions);
	}
	/**
  * [postList 提交数据(回访状态，报赔，续签，回收)]
  * @param  {[type]} type       [类型]
  * @param  {[type]} conditions [post的数据]
  * @return {[type]}            [返回一个promise对象]
  */
	postList(type, conditions) {
		return comLib.postData(_config2.default[type], conditions);
	}
	/**
  * [deleteList 删除速销合同]
  * @param  {[type]} conditions [删除id]
  * @conditions demo "{"id" : "12343434343" }" 
  * @return {[type]}            [description]
  */
	deleteList(conditions) {
		return comLib.postData(_config2.default['delete'], conditions);
	}

}

exports.default = QuickSellPageList;