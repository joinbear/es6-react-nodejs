'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _redis = require('redis');

var _redis2 = _interopRequireDefault(_redis);

var _commonLib = require('../../../lib/common-lib');

var _commonLib2 = _interopRequireDefault(_commonLib);

var _pagelist = require('../model/pagelist');

var _pagelist2 = _interopRequireDefault(_pagelist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import RedisConnect from '../../../config/redis';


const router = _express2.default.Router();
const pageList = new _pagelist2.default();
const comLib = new _commonLib2.default();
const filename = process.cwd() + '/src/quick-sell/index.html';

const client = _redis2.default.createClient(6379, '127.0.0.1');
//
router.get('/', (req, res) => {
	console.log('i am in quick-sell' + req.url);

	// client.on("error", function (err) { 
	//     console.log("Error " + err); 
	// }); 

	// client.set("test", "string val", redis.print);//set "string key" "string val"
	// client.get('test',function(err, reply) {
	//    console.log(reply.toString());
	//  })
	res.sendFile(filename);
});
router.get('/dept-tree', (req, res) => {
	console.log('i am in quick-sell' + req.url);
	res.sendFile(filename);
});
router.get('/add', (req, res) => {
	console.log('i am in quick-sell' + req.url);
	res.sendFile(filename);
});

router.get('/edit/:id', (req, res) => {
	console.log('i am in quick-sell' + req.url);
	res.sendFile(filename);
});

router.delete('/operate/:fdid', (req, res) => {
	const type = req.params.fdid;
	console.log(type);
	res.end('test');
});

router.post('/operate/:type', (req, res) => {
	const type = req.params.type;
	console.log(type);
	console.log(req.body);
	pageList.postList(type, 'data=' + JSON.stringify(req.body)).then(function (result) {
		const resData = JSON.parse(decodeURIComponent(result.text));
		if (resData.state == 200) {
			//todo 修改数据，读取当独数据，覆盖更新缓存，从缓存中获取数据
			res.json({
				data: [],
				operation: true
			});
		} else {
			res.json({
				data: [],
				operation: true
			});
		}
		console.log(result.text);
	}, function (err) {
		res.json({
			data: [],
			operation: true
		});
		console.error(err);
	});
});

router.put('/operate/:type', (req, res) => {
	const type = req.params.type;
	console.log(type);
	console.log(req.body);
	pageList.putList(type, 'data=' + JSON.stringify(req.body)).then(function (result) {
		const resData = JSON.parse(decodeURIComponent(result.text));
		if (resData.state == 200) {
			//todo 修改数据，读取当独数据，覆盖更新缓存，从缓存中获取数据
			res.json({
				data: [],
				operation: true
			});
		} else {
			res.json({
				data: [],
				operation: true
			});
		}
		console.log(result.text);
	}, function (err) {
		res.json({
			data: [],
			operation: true
		});
		console.error(err);
	});
});

router.post('/pagelist', (req, res) => {
	console.log(req.body);
	const body = req.body;
	const conditions = {
		"beginPubDate": comLib.dateToSecond(body.beginPubDate),
		"endPubDate": comLib.dateToSecond(body.endPubDate)
	};
	pageList.getList(encodeURIComponent(JSON.stringify(conditions)), req.body.page).then(function (result) {
		const resData = JSON.parse(decodeURIComponent(result.text));
		if (resData.state == 200) {
			res.json({
				data: resData.data,
				total: 150,
				operation: true
			});
		} else {
			res.json(resData);
		}
		// console.log( JSON.parse(result.text) );
	}, function (err) {
		res.json({
			data: [],
			total: 0,
			operation: false
		});
		// res.json();
		console.error(err);
	});
});

const QuickSellRouter = router;
exports.default = QuickSellRouter;