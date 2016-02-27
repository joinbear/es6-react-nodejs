/**
 * [exports 工具方法]
 * @return {[type]} [description]
 */
var fs = require('fs-extra');
	
module.exports = {
	/**
	 * [extend 简单的拷贝]
	 * @param  {[type]} destination [description]
	 * @param  {[type]} source      [description]
	 * @return {[type]}             [返回新生成的对象]
	 */
	extend : function(destination,source){
		var i,
			objectStr   = Object.prototype.toString,
			arrayStr    = "[object Array]",
			dest        = (objectStr.call(source) === arrayStr) ? [] : {},
			destination = destination || dest;
	    for (i in source) {
	        if (source.hasOwnProperty(i)) {
	            if (typeof source[i] === "object") {
	                arguments.callee(destination[i],source[i]);
	            } else {
	                destination[i] = source[i];
	            }
	        }
	    }
	    return destination;
	},
	/**
	 * [dateFormat 日期各种格式]
	 * @return {[type]} [description]
	 */
	time :function() {
		var 
			date = new Date(),
			time = {
			date                : date,
			year                : date.getFullYear(),
			month               : date.getFullYear() + "-" + (date.getMonth() + 1),
			day                 : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
			minute              : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + 
			date.getHours() + " :" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) 
		};
		return time;
	},
	/**
	 * [commentTpl 注释模板]
	 * @param  {[type]} projectInfo [项目信息对象]
	 * @return {[type]}             [description]
	 */
	commentTpl : function(projectInfo){
		var comment = 
				'/**\n'
				+' * autor '+projectInfo.nickName+'\n'
				+' * createTime '+this.dateUtil().day+'\n'
				+' * version 1.0\n'
				+' * qq '+projectInfo.qqName+'\n'
				+' * @copy 链家成都分公司\n'
				+' */\n';
		return comment;
	},
	/**
	 * [createStyle 创建引入css和javascript样式]
	 * @param  {[type]}   filePath    [文件路径]
	 * @param  {[type]}   projectInfo [项目信息对象]
	 * @param  {Function} callback    [回调函数]
	 * @return {[type]}               [description]
	 */
	createStyle : function(filePath,projectInfo,callback){
		var styleTxt = {
			header : '<!-- 这个ejs主要是引入自己私有的css文件和javascript文件 -->\n',
			css    : '<!-- css文件 -->\n<link rel="stylesheet" href="/sheetstyles/'+projectInfo.projectName + '/' + projectInfo.projectName + '.css'+'">\n',
			js     : '<!-- javascript文件 -->\n<script src="/javascripts/'+projectInfo.projectName + '/' + projectInfo.projectName + '.js'+'"></script>\n'
		},fileText = styleTxt.header;
		//生成css文件
		if(projectInfo.projectName && projectInfo.cssName == 0){
			fileText += styleTxt.css;
		};
		//生成js文件
		if(projectInfo.projectName && projectInfo.jsName == 0){
			fileText += styleTxt.js;
		};
		fs.outputFile(filePath,fileText,function (err){
			if (err) throw err;
			callback(filePath,projectInfo);
		});
	},
	/**
	 * [addComment 创建作者相关信息]
	 * @param  {[type]} filePath [文件路径]
	 * @param  {[type]} project  [项目相关信息对象]
	 * @return {[type]}          [description]
	 */
	addComment : function(filePath,projectInfo,isHtml){
		var 
			_fileTxt,
			isSpecial = isHtml,
			comment   = this.commentTpl(projectInfo);
			comment   = isSpecial ? '<!--' + comment +'-->\n' : comment;
			//读取文本中已经有的内容
			fs.readFile(filePath,'utf8',function (err ,data){
				_fileTxt = data ? data : '';
				//添加comment信息
				fs.outputFile(filePath,comment,function (err){
					if (err) throw err;
					//将已经有的内容追加进去
					fs.appendFile(filePath,_fileTxt,'utf8',function(err){
						if (err) throw err;
					});
				});		
			});
	}

}; 