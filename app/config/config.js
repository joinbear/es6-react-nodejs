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
	//微信企业好信息配置
	wxConfig: {
		token: 'FUPTsMEAOx7vDcNzxXCTKGCn7MJlYN',
		encodingAESKey: 'Bi9VlDLFaDZYacyIl6FU0RF2FsOBrjyQE8oNx9FAalK',
		corpId: 'wx356b2bdaf950ccc4'
	},
	//微信helper助手配置
	helper: {
		secret: 'Cl8ttjrhNbbe6dF2eKamtl-JLdjNvc6RjpKcFxj9HsLis-bDmdIGS95NIr54FxUQ',
		agentid: '0'
	}
};