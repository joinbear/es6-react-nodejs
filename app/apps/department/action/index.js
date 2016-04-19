'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _model = require('../model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

const department = new _model2.default();
//获取区域
router.get('/regin', (req, res) => {
	res.json({
		"regin": [{
			"id": "0802291715143DBDAF5254D0DB8FAF44",
			"name": "万年场区"
		}, {
			"id": "0802291715575BF678706D795EA0FB88",
			"name": "金沙区"
		}, {
			"id": "0912021732103100B9B279252FD34745",
			"name": "金融城区"
		}, {
			"id": "1101031006415E9E319FDF47B521AB48",
			"name": "少城区"
		}, {
			"id": "11010310073150F786824A6DCDCDB88A",
			"name": "双楠区"
		}, {
			"id": "1101031008460C4722C8AE4076F5A47C",
			"name": "川师区"
		}, {
			"id": "1312021136571324FBAF1B8141F3DCF0",
			"name": "升仙湖区"
		}, {
			"id": "131202133210384D8602F744F0C92D28",
			"name": "天府区"
		}, {
			"id": "1312021334452DB719C84DC7BFC0DB37",
			"name": "郫县区"
		}, {
			"id": "131202133645A34122C661A8CC582175",
			"name": "光华区"
		}, {
			"id": "E140092",
			"name": "分销西北区"
		}, {
			"id": "E150021",
			"name": "人员待分配中心"
		}, {
			"id": "E140103",
			"name": "大源区"
		}, {
			"id": "E140099",
			"name": "龙泉区"
		}, {
			"id": "E140093",
			"name": "分销东区"
		}, {
			"id": "E190012",
			"name": "人员待分配中心"
		}, {
			"id": "E140094",
			"name": "分销南区"
		}, {
			"id": "E140111",
			"name": "商业地产分销部"
		}, {
			"id": "E140112",
			"name": "商业地产直销部"
		}, {
			"id": "E140104",
			"name": "房江湖"
		}, {
			"id": "150302121611CEB90B377ACEA3ADA6A3",
			"name": "顺城区"
		}, {
			"id": "150302121808B6C7FBEE67CD839B9359",
			"name": "红牌楼区"
		}, {
			"id": "15030212132984D91832AE7FED78F375",
			"name": "东湖区"
		}, {
			"id": "150302121533DBFB8A45FBA5FC5EDA5E",
			"name": "交大区"
		}, {
			"id": "150302121717310476D47A21BD2E3CFE",
			"name": "温江区"
		}, {
			"id": "150302121959A10DC7D942ACCCB108CC",
			"name": "桐梓林区"
		}, {
			"id": "E140109",
			"name": "直销南二区"
		}, {
			"id": "E140108",
			"name": "分销西南区"
		}, {
			"id": "E140110",
			"name": "直销西区"
		}, {
			"id": "E140102",
			"name": "直销南一区"
		}, {
			"id": "E140101",
			"name": "直销东区"
		}, {
			"id": "E140107",
			"name": "新房事业部"
		}, {
			"id": "E140100",
			"name": "商业地产部"
		}, {
			"id": "E140114",
			"name": "双流区"
		}],
		"subregin": [{
			"id": "E140109",
			"name": "直销南二区"
		}, {
			"id": "E140108",
			"name": "分销西南区"
		}, {
			"id": "E140110",
			"name": "直销西区"
		}, {
			"id": "E140102",
			"name": "直销南一区"
		}, {
			"id": "E140101",
			"name": "直销东区"
		}, {
			"id": "E140107",
			"name": "新房事业部"
		}, {
			"id": "E140100",
			"name": "商业地产部"
		}, {
			"id": "E140114",
			"name": "双流区"
		}],
		"stores": [{
			"id": "E140109",
			"name": "直销南二区"
		}, {
			"id": "E140108",
			"name": "分销西南区"
		}, {
			"id": "E140110",
			"name": "直销西区"
		}, {
			"id": "E140102",
			"name": "直销南一区"
		}, {
			"id": "E140101",
			"name": "直销东区"
		}, {
			"id": "E140107",
			"name": "新房事业部"
		}, {
			"id": "E140100",
			"name": "商业地产部"
		}, {
			"id": "E140114",
			"name": "双流区"
		}]
	});
});

//获取商圈
router.get('/subregin/:reginid', (req, res) => {
	res.json({
		"subregin": [{
			"id": "0802291715143DBDAF5254D0DB8FAF44",
			"name": "万年场区"
		}, {
			"id": "0802291715575BF678706D795EA0FB88",
			"name": "金沙区"
		}, {
			"id": "0912021732103100B9B279252FD34745",
			"name": "金融城区"
		}]
	});
});

//获取店组
router.get('/store/:subreginid', (req, res) => {
	department.getRegin().then(function (value) {
		res.end(value.text);
	}, function (err) {});
});

const DeptRouter = router;
exports.default = DeptRouter;