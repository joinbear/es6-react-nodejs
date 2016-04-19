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

class QuickSellPageList {

	contructor() {
		this.host = _config2.default.api;
	}

	getList(conditions) {
		return comLib.getData(_config2.default.pagelist + '?page=1&rows=15&data=' + conditions);
	}

}

exports.default = QuickSellPageList;