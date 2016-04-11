import fs from 'fs';
import path from 'path';
import config from './config';

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
		const { app } = this;
		app.use(function(req, res, next){
			const err = new Error('Not Found');
		  err.status = 404;
		  next(err);
		})
	}
	// write error logs to file
	writeLogs() {
		const { app } = this;
		app.use(function(err, req, res, next){
			const meta = '[' + new Date() + '] ' + req.url + '\n';
			const errorLog = fs.createWriteStream(path.join(config.rootPath,config.logPath,'error.log'),{flags : 'a'});
		  errorLog.write(meta + err.stack + '\n');
		  next();
		});
	}
	// catch error and render to view
	handleError() {
		const { app } = this;
		app.use(function(err, req, res, next) {
		  res.status(err.status || 500);
		  res.render('error', {
		    message: err.message,
		    error: {}
		  });
		});
	}
}

export default ErrorHandler;