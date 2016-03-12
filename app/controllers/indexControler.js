
module.exports = function(app){
	//列表页面
	app.get('/ekp/list',function (req, res){
		//获取模板的目录
		var template = req.path.replace(/\/ekp\//,'');
		console.log(req.path);
		res.render('quick_sell/index', { 
			title: 'Express',
			scriptPath: 'ui-design',
			cssPath: 'template',
			showLeft : false
		});
	});
	app.post('/ekp/form/',function (req, res){
		console.log(req.body);
	});
	//新增页面
	app.all('*/add',function (req, res){
		//获取模板的目录
		var template = req.path.replace(/\/ekp\//,'');
		res.render(template, { 
			title: 'Express',
			scriptPath: 'ui-design',
			cssPath: 'template',
			showLeft : false
		});
	});

	//编辑页面
	app.all('*/edit',function (req, res){
		//获取模板的目录
		var template = req.path.replace(/\/ekp\//,'');
		res.render(template, { 
			title: 'Express',
			scriptPath: 'ui-design',
			cssPath: 'template',
			showLeft : false
		});
	});

}