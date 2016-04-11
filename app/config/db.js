'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * db connect,use different type can connect different database
 */
class DBConnect {
  constructor(type) {
    this.type = type;
    this.debug = _config2.default.debug;
    //初始化执行函数
    this.init(type);
  }
  init(type) {
    this.mongooseConnect();
  }
  // mongoose connect function
  mongooseConnect() {
    const host = 'mongodb://' + _config2.default.host + '/' + _config2.default.dbName;
    const options = {
      server: {
        auto_reconnect: true, //自动连接
        poolSize: 5 //连接池数量
      }
    };
    //开启调试
    _mongoose2.default.set('debug', this.debug);
    _mongoose2.default.connect(options, function () {
      if (err) {
        console.log('[mongoose log] Error connecting to: ' + host + '. ' + err);
      } else {
        console.log('[mongoose log] Successfully connected to: ' + host);
      }
    });
    const db = _mongoose2.default.connection;
    db.on('error', console.error.bind(console, 'mongoose connection error:'));
    db.once('open', function callback() {
      console.log('mongoose open success');
    });
  }
}

exports.default = DBConnect;