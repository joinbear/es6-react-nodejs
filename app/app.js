'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _params = require('./config/params');

var _params2 = _interopRequireDefault(_params);

var _error = require('./config/error');

var _error2 = _interopRequireDefault(_error);

var _quickSellController = require('./controllers/quick-sell-controller');

var _quickSellController2 = _interopRequireDefault(_quickSellController);

var _apiController = require('./controllers/api-controller');

var _apiController2 = _interopRequireDefault(_apiController);

var _filterController = require('./controllers/filter-controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express2.default();
const param = new _params2.default(app);
const error = new _error2.default(app);
const filter = new _filterController.Filter(app);

//---------params config -----------

param.init();

//---------- filter -------------------
filter.init();

//---------- 拦截路由 ----------------
app.use('/filter', _filterController.filterRouter);

//---------- 速销入口 ----------------
app.use('/ekp/quick-sell', _quickSellController2.default);

//---------- 接口文档 -----------------
app.use('/api', _apiController2.default);

//--------- handle error ---------------
error.init();

exports.default = app;