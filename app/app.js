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

var _action = require('./apps/quick-sell/action');

var _action2 = _interopRequireDefault(_action);

var _action3 = require('./apps/api-doc/action');

var _action4 = _interopRequireDefault(_action3);

var _action5 = require('./apps/department/action');

var _action6 = _interopRequireDefault(_action5);

var _action7 = require('./apps/filter/action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express2.default();
const param = new _params2.default(app);
const error = new _error2.default(app);
const filter = new _action7.Filter(app);

//---------params config -----------

param.init();

//---------- filter -------------------
filter.init();

//---------- 拦截路由 ----------------
app.use('/filter', _action7.FilterRouter);

//---------- 速销入口 ----------------
app.use('/ekp/quick-sell', _action2.default);

//---------- 部门接口 ----------------
app.use('/ekp/dept', _action6.default);

//---------- 接口文档 -----------------
app.use('/api', _action4.default);

//--------- handle error ---------------
error.init();

exports.default = app;