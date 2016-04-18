'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _tmpHelper = require('../lib/tmp-helper');

var _tmpHelper2 = _interopRequireDefault(_tmpHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * set view , static source , parser 
 */
class ParamHandler {
	constructor(app) {
		this.app = app;
	}
	init() {
		//this.setCompress();
		this.setView();
		this.setStatic();
		this.setUpload();
		this.setParser();
		this.setLogs();
		console.log('finish config');
	}
	setCompress() {
		const app = this.app;
		//set compress filter

		app.use((0, _compression2.default)({ filter: (req, res) => {
				if (req.headers['x-no-compression']) {
					// don't compress responses with this request header
					return false;
				}
				// fallback to standard filter function
				return _compression2.default.filter(req, res);
			} }));
	}
	setView() {
		const app = this.app;

		const laydir = _config2.default.tplPath.substr(1);
		const partialdir = _config2.default.tplPath.substr(1) + '/partials';
		// 设置视图路径
		app.set('views', _path2.default.join(_config2.default.rootPath, _config2.default.tplPath));

		//配置handlerbar为模板引擎
		app.engine('html', (0, _expressHandlebars2.default)({
			layoutsDir: laydir, //模板路径
			partialsDir: partialdir, //特殊模板
			defaultLayout: 'layouts/layout', //主体
			extname: '.html', //后缀
			helpers: _tmpHelper2.default //模板解析扩展
		}));

		//设置handlerbar为模板解析引擎
		app.set('view engine', 'html');
	}

	setStatic() {
		const app = this.app;
		// 静态资源的路径

		app.use(_express2.default.static(_path2.default.join(_config2.default.rootPath, 'public')));
		app.use(_express2.default.static(_path2.default.join(_config2.default.rootPath, 'upload')));
		app.use(_express2.default.static(_path2.default.join(_config2.default.rootPath, 'src')));
	}

	setUpload() {
		const app = this.app;
		//图片上传工具
		// app.use(multer({
		//   //存放图片位置
		//   dest: './public/upload',
		//   //rename 函数用来修改上传后的文件名
		//   rename: function (fileoldname, filename) {
		//     return filename;
		//   }
		// }));
	}

	setLogs() {
		const app = this.app;
		//日志设置

		app.use((0, _morgan2.default)('dev'));
		const accessLog = _fs2.default.createWriteStream(_path2.default.join(_config2.default.rootPath, _config2.default.logPath) + 'access.log', { flags: 'a' });
		app.use((0, _morgan2.default)({ stream: accessLog }));
	}
	setParser() {
		const app = this.app;
		//解析内容主体

		app.use(_bodyParser2.default.json());
		app.use(_bodyParser2.default.urlencoded({ extended: false }));
		app.use((0, _cookieParser2.default)());

		//session工具
		// app.use(session({
		//   secret: config.cookieSecret,
		//   key: config.db,//cookie name
		//   cookie: {maxAge: 1000 * 60 * 60 * 8 * 1},//8小时
		//   store: new MongoStore({
		//     db: config.db,
		//     host: config.host,
		//     port: config.port
		//   })
		// }));
	}
}

exports.default = ParamHandler;