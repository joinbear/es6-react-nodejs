/**
 * [exports 返回基础配置信息]
 * @return {[type]} [description]
 */
module.exports = {
	rootPath  : process.cwd(),//根目录
	tplPath   : '/app/views',//模板路径
	logPath   : '/app/runtime/logs/',//日志目录
	cachePath : '/app/runtime/cache/',//缓存目录
	cookieSecret : 'myBlog',//加密cookie配置
	db : 'blog',//数据库名字
	host: 'localhost',//地址
	port: 27017//端口号
};