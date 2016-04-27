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
 * 部门组织架构方法类
 */
class Department {

	contructor() {
		this.config = _config2.default;
	}
	/**
  * [getRegin 获取区域]
  * @return {[type]} [返回json数据]
  */
	getRegin() {
		return comLib.getData(_config2.default.regin);
	}
	/**
  * [getSubregin 根据大区id获取商圈]
  * @param  {[type]} reginId [大区id]
  * @return {[type]}         [返回json数据]
  */
	getSubregin(reginId) {
		return comLib.getData(_config2.default.subregin + reginId);
	}
	/**
  * [getStore 根据商圈id获取店组]
  * @param  {[type]} subreginId [商圈id]
  * @return {[type]}            [返回json数据]
  */
	getStore(subreginId) {
		return comLib.getData(_config2.default.store + subreginId);
	}
	/**
  * [getUser 根据关键词获取用户列表]
  * @param  {[type]} keyword [用户关键词，姓名或者花名]
  * @return {[type]}         [返回json数据]
  */
	getUser(keyword) {
		return comLib.getData(_config2.default.user + keyword);
	}
	/**
  * [getTree 获取组织树]
  * @return {[type]} [description]
  */
	getTree() {
		return comLib.getData(_config2.default.tree);
	}
	/**
  * [getPost 根据关键词获取岗位]
  * @param  {[type]} keyword [岗位关键词]
  * @return {[type]}         [description]
  */
	getPost(keyword) {
		return comLib.getData(_config2.default.post + keyword);
	}
}

exports.default = Department;