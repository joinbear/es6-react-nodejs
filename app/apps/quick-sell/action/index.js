'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _commonLib = require('../../../lib/common-lib');

var _commonLib2 = _interopRequireDefault(_commonLib);

var _pagelist = require('../model/pagelist');

var _pagelist2 = _interopRequireDefault(_pagelist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();
const pageList = new _pagelist2.default();
const comLib = new _commonLib2.default();
//
router.get('/*', (req, res) => {
	console.log('i am in quick-sell' + req.url);
	const filename = process.cwd() + '/src/quick-sell/index.html';
	res.sendFile(filename);
});

router.post('/pagelist', (req, res) => {
	//console.log(req.body);
	const body = req.body;
	const conditions = {
		"beginPubDate": comLib.dateToSecond(body.beginPubDate),
		"endPubDate": comLib.dateToSecond(body.endPubDate)
	};
	pageList.getList(encodeURIComponent(JSON.stringify(conditions))).then(function (result) {
		const resData = JSON.parse(decodeURIComponent(result.text));
		if (resData.state == 200) {
			res.json({
				data: resData.data,
				operation: true
			});
		} else {
			res.json(resData);
		}
		//console.log( JSON.parse(result.text) );
	}, function (err) {
		console.error(err);
	});
});

const QuickSellRouter = router;
exports.default = QuickSellRouter;