import express from 'express';

const FilterRouter = express.Router();

class Filter {
	constructor(app) {
		this.app = app;
		this.staticReg = /\/ekp\//;
		this.init();
	}
	/**
	 * [init 过滤无效拦截地址]
	 * @return {[type]} [description]
	 */
	init() {
		const { app , staticReg } = this;
		const that = this;
		app.use(function(req, res, next){
			const allow = staticReg.test(req.url);
			if(allow){
				console.log('i come in filter=======>'+req.url);
				that.filter(req, res, next);
			}else{
				next();
			}
		});
	}
	/**
	 * [filter 拦截 如果有令牌，则让方法进入next，否则将其重定向到OA登录界面]
	 * @return {[type]} [description]
	 */
	filter(req, res, next) {
		//console.log(req.headers);
		//if(req.headers.token){
		//	next();
		//}else{
		//	res.redirect('http://oa.ecen.com.cn/');
		//}
		next();
	}
}

FilterRouter.get('/',function(req,res){
	console.log(req.url);
	res.render('filter/index',{
		title : '身份验证',
		content : '您的身份验证失败了，请联系信息中心(86139898(8666))'
	});
});

export { FilterRouter , Filter };