'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * error hanlder middleware object
 */
class ErrorHandler {
	constructor(app) {
		this.app = app;
	}
	// initialization the middleware
	init() {
		this.handleNotFound();
		this.writeLogs();
		this.handleError();
		console.log('end');
	}
	// catch 404 and forward to error handler
	handleNotFound() {
		const app = this.app;

		app.use(function (req, res, next) {
			const err = new Error('Not Found');
			err.status = 404;
			next(err);
		});
	}
	// write error logs to file
	writeLogs() {
		const app = this.app;

		app.use(function (err, req, res, next) {
			const meta = '[' + new Date() + '] ' + req.url + '\n';
			const errorLog = _fs2.default.createWriteStream(_path2.default.join(_config2.default.rootPath, _config2.default.logPath, 'error.log'), { flags: 'a' });
			errorLog.write(meta + err.stack + '\n');
			next();
		});
	}
	// catch error and render to view
	handleError() {
		const app = this.app;

		app.use(function (err, req, res, next) {
			res.status(err.status || 500);
			res.render('error', {
				message: err.message,
				error: {}
			});
		});
	}
}

exports.default = ErrorHandler;