import express from 'express';

const filterRouter = express.Router();

class Filter {
	constructor(app) {
		this.app = app;
		this.reg = /styleSheets|images|iconfonts|javascripts|filter|department/;
		this.init();
	}
	/**
	 * [init 过滤无效拦截地址]
	 * @return {[type]} [description]
	 */
	init() {
		const { app , reg } = this;
		const that = this;
		app.use(function(req, res, next){
			const allow = reg.test(req.url);
			if(allow){
				next();
			}else{
				next();
				//that.filter(req, res, next);
			}
		});
	}
	/**
	 * [filter 拦截]
	 * @return {[type]} [description]
	 */
	filter(req, res, next) {
		console.log(req.url);
		api.getUserIdByCode(req.query.code,function(err,result){
			console.log(result);
	  	if(result.UserId){
				next();
			}else{
				res.redirect('/filter');
			}
	  });
	}
}

filterRouter.get('/',function(req,res){
	console.log(req.url);
	res.render('filter/index',{
		title : '身份验证',
		content : '您的身份验证失败了，请联系信息中心(86139898(8666))'
	});
});

export { filterRouter , Filter };