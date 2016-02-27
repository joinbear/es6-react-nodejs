var 
	path           = require('path'),
	express        = require('express'),
	favicon        = require('serve-favicon'),
	cookieParser   = require('cookie-parser'),
	bodyParser     = require('body-parser'),
	logger         = require('morgan'),
	// session     = require('express-session'),
	multer         = require('multer'),
	fs             = require('fs'),
	config         = require('./config'),//引入基础配置
	accessLog      = fs.createWriteStream(path.join(config.rootPath,config.logPath) + 'access.log',{flags : 'a'}),
	exphbs         = require('express-handlebars'),//handlerbar模板引擎
	laydir         = config.tplPath.substr(1),
	partialdir     = config.tplPath.substr(1) + '/partials',
	registerHelper = require('../lib/registerHelper');//模板解析扩展

module.exports = function(app){

	// 设置视图路径
	app.set('views', path.join(config.rootPath,config.tplPath));

	//配置handlerbar为模板引擎
	app.engine('html', exphbs({
	  layoutsDir: laydir,//模板路径
	  partialsDir: partialdir,//特殊模板
	  defaultLayout: 'layouts/layout',//主体
	  extname: '.html',//后缀
	  helpers: registerHelper//模板解析扩展
	}));

	//设置handlerbar为模板解析引擎
	app.set('view engine', 'html');

	// 指定ico图标路径
	//app.use(favicon(path.join(config.rootPath, 'public', 'favicon.ico')));

	// 静态资源的路径
	app.use(express.static(path.join(config.rootPath, 'public')));


	//日志设置
	app.use(logger('dev'));
	app.use(logger({stream : accessLog}));

	//解析内容主体
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	
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