'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _config = require('../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class QuickSellConditions {

	contructor() {
		this.host = _config2.default.api;
	}

	getList(conditions, type) {
		const host = this.host;

		_superagent2.default.get().end(function (err, res) {});
	}

}

exports.default = QuickSellConditions;