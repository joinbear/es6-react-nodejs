import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import multer from 'multer';
import fs from 'fs';
import config from './config';
import exphbs from 'express-handlebars';
import compression from 'compression';
import HandlerbarsHelper from '../lib/tmp-helper';

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
		const { app } = this;
		//set compress filter
		app.use(compression({filter: (req, res)=>{
			if (req.headers['x-no-compression']) {
		    // don't compress responses with this request header
		    return false
		  }
		  // fallback to standard filter function
		  return compression.filter(req, res)
		}}));
	}
	setView() {
		const { app } = this;
		const laydir     = config.tplPath.substr(1);
		const partialdir = config.tplPath.substr(1) + '/partials';
		// 设置视图路径
		app.set('views', path.join(config.rootPath,config.tplPath));

		//配置handlerbar为模板引擎
		app.engine('html', exphbs({
		  layoutsDir: laydir,//模板路径
		  partialsDir: partialdir,//特殊模板
		  defaultLayout: 'layouts/layout',//主体
		  extname: '.html',//后缀
		  helpers: HandlerbarsHelper//模板解析扩展
		}));

		//设置handlerbar为模板解析引擎
		app.set('view engine', 'html');
	}

	setStatic() {
		const { app } = this;
		// 静态资源的路径
		app.use(express.static(path.join(config.rootPath, 'public')));
		app.use(express.static(path.join(config.rootPath, 'upload')));
		app.use(express.static(path.join(config.rootPath, 'src')));
	}

	setUpload() {
		const { app } = this;
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
		const { app } = this;
		//日志设置
		app.use(logger('dev'));
		const accessLog = fs.createWriteStream(path.join(config.rootPath,config.logPath) + 'access.log',{flags : 'a'});
		app.use(logger({stream : accessLog}));
	}
	setParser() {
		const { app } = this;
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

	}
}


export default ParamHandler;
