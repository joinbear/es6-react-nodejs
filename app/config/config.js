'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * 基础配置信息
 */
exports.default = {
	rootPath: process.cwd(), //根目录
	tplPath: '/app/views', //模板路径
	logPath: '/app/runtime/logs/', //日志目录
	cachePath: '/app/runtime/cache/', //缓存目录
	cookieSecret: 'myBlog', //加密cookie配置
	dbName: 'blog', //数据库名字
	host: 'localhost', //地址
	port: 27017, //端口号
	debug: true,
	api: 'http://10.63.0.69:8888/QuickSellAPI/v1/'
};