'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

//
router.get('/*', (req, res) => {
	console.log(req.url);
	const filename = process.cwd() + '/src/quick-sell/index.html';
	res.sendFile(filename);
});

const quickSellRouter = router;
exports.default = quickSellRouter;