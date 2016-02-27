var 
  fs             = require('fs'),
  path           = require('path'),
  config         = require('./config'),
  errorLog      = fs.createWriteStream(path.join(config.rootPath,config.logPath,'error.log'),{flags : 'a'});

module.exports = function(app){

	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});


	//写入错误日志
	app.use(function (err, req, res, next) {
	  var meta = '[' + new Date() + '] ' + req.url + '\n';
	  errorLog.write(meta + err.stack + '\n');
	  next();
	});

	// error handlers
	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	  app.use(function(err, req, res, next) {
	    res.status(err.status || 500);
	    res.render('error', {
	      message: err.message,
	      error: err
	    });
	  });
	}


	// production error handler
	// no stacktraces leaked to user
	app.use(function(err, req, res, next) {
	  res.status(err.status || 500);
	  res.render('error', {
	    message: err.message,
	    error: {}
	  });
	});
};