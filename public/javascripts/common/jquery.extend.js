define(['jquery','layer'],function($,layer){
	/**
	 * [基于jquery的扩张函数]
	 * @param  {[type]} $ [jquery对象]
	 * @return {[type]}   [description]
	 */
	(function($){
		$.extend({
			/**
			 * [getChildIframeObj 获取子iframe中的childrenIframeObj对象]
			 * @param  {[type]} parentIframe   [父iframe的id]
			 * @param  {[type]} childrenIframeObj [子iframe中的元素的id]
			 * @return {[type]}                [DOM 对象]
			 */
			getChildIframeObj:function(parentIframe,childrenIframeObj){
				var childrenFrame = $.getChildIframe(parentIframe);
				var Obj           = childrenFrame.document.getElementById(childrenIframeObj);
				return Obj;
			},
			/**
			 * [getChildIframe 获取父级控件]
			 * @param  {[type]} parentIframe [父iframe的id]
			 * @return {[type]}              [description]
			 */
			getChildIframe:function(parentIframe){
				return document.getElementById(parentIframe).contentWindow;
			},
			/**
			 * [setIframeHeight 当一名加载完毕后给iframe设置高度]
			 * @param  {[type]} id [iframe的id]
			 * @return {[type]}    [description]
			 */
			setIframeHeight:function(id) {   
				var iframe = document.getElementById(id);   
				var subWeb = document.frames ? document.frames[id].document : iframe.contentDocument;   
				if(iframe != null && subWeb != null) {
					iframe.height = subWeb.body.scrollHeight;
					iframe.width  = subWeb.body.scrollWidth;
				}   
			},  
			/**
			 * [iframeLoad iframe加载完成事件]
			 * @param  {[type]}   url      [iframeurl地址]
			 * @param  {[type]}   iframeContainerId  [放iframe的容器]
			 * @param  {[type]}   cssText  [iframe的样式]
			 * @param  {Function} callback [回调函数]
			 * @return {[type]}            [description]
			 */
			iframeLoad:function(url,iframeContainerId,className,callback){
				var 
				iframe           = document.createElement("iframe");
				iframe.scrolling = "no";
				iframe.src       = url ;
				if(className){
					iframe.className = className;
				}else {
					iframe.width = "100%";
				}
				//IE
				if (iframe.attachEvent){    
				    iframe.attachEvent("onload", function(){        
				        if(callback){
				        	callback(iframe);
				        } 
				    });
				//非IE
				} else {    
				    iframe.onload = function(){  
				        if(callback){
				        	callback(iframe);
				        }
				    };
				}
				document.getElementById(iframeContainerId).appendChild(iframe);
			},
			/**
			 * [check 全选,如果checkbox上有data-id,则返回data-id数组	]
			 * @return {[type]} [description]
			 * prop 使用attr在jquery 1.9会有兼容性问题
			 */
			check: function(inputObj) {  
				var dataArr = [],
						dataId;
				$(inputObj).each(function() { 
					$(this).prop('checked',true);
					dataId = $(this).attr('data-id');
					if(dataId){
						dataArr.push(dataId);
					}
				}); 
				return dataArr; 
			},
			/**
			 * [uncheck 全部不选]
			 * @return {[type]} [description]
			 * prop 使用attr在jquery 1.9会有兼容性问题
			 */
			uncheck: function(inputObj) {  
				$(inputObj).each(function() { 
					$(this).prop('checked',false);
				}); 
				return []; 
			},
			/**
			 * [inverseCheck 反选选]
			 * @return {[type]} [description]
			 * prop 使用attr在jquery 1.9会有兼容性问题
			 */
			inverseCheck:function(inputObj){
				return $(inputObj).each(function(){
					 $(this).prop("checked", !this.checked);
				});
			},
			/**
			 * [oddCheck 选取偶数项]
			 * @return {[type]} [description]
			 */
			oddCheck:function(inputObj){
				return $(inputObj).each(function(i){
					if(i%2 == 0 ){
						$(this).prop('checked',true);
					}
				});
			},
			/**
			 * [evenCheck 选取奇数项]
			 * @return {[type]} [description]
			 */
			evenCheck:function(inputObj){
				return $(inputObj).each(function(i){
					if(i%2 != 0 ){
						$(this).prop('checked',true);
					}
				});
			},
			/**
			 * [countCharLength 获得字符串实际长度,中文2，英文1]
			 * @param  {[type]} str [要获得长度的字符串]
			 * @return {[type]}     [description]
			 */
			countCharLength:function(str){
		    var realLength = 0, len = str.length, charCode = -1;
		    for (var i = 0; i < len; i++) {
		        charCode = str.charCodeAt(i);
		        if (charCode >= 0 && charCode <= 128) realLength += 1;
		        else realLength += 2;
		    }
		    return realLength;
			},
			/**
			 * [getCheckedId 全选事件]
			 * @param  {[type]} selectObj [选择按钮]
			 * @param  {[type]} checkObj  [被选择的input]
			 * @return {[type]}           [description]
			 */
			getCheckedId:function(selectObj,checkObj){
				$(selectObj).on('click',function(){
					var dataIds,
							isCheckAll = $(this).attr('isCheckAll');
					if(isCheckAll){
						dataIds = $.uncheck(checkObj);
						$(this).removeAttr('isCheckAll');
					}else{
						dataIds = $.check(checkObj);
						$(this).attr('isCheckAll',true);
					}
					$.dataCheckedIds =  dataIds;
					//console.log($.dataCheckedIds);
				});
			},
			//全选事件的id集合
			dataCheckedIds : [],
			/**
			 * [operateAllData 批量操作事件]
			 * @param  {[type]}   doneBtn  [事件按钮]
			 * @param  {Function} callback [回调函数]
			 * @return {[type]}            [description]
			 */
			operateAllData : function(doneBtn,callback){
				$(doneBtn).on('click',function(){
					if($.dataCheckedIds.length > 0){
						//TODO 批量操作执行的事件
						if($.isFunction){
							callback($.dataCheckedIds);
						}else {
							layer.msg('第二个参数必须是函数');
						}
						//console.log($.dataCheckedIds);
					}else {
						layer.msg('操作选项不能为空');
					}
				});
			}
		});
	})(jQuery);
	//菜单收起展开事件
	$(function(){
		$("#menu-bar").on('click',function () {
			var contentOpen = "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2",
					contentClose = "col-md-12",
					contentObj = $("#content")[0];
			if($(this).hasClass('menubar-open')){
				$(this).removeClass('menubar-open');
				$(this).html('展开菜单<i class="glyphicon glyphicon-menu-down"></i>');
				setTimeout(function(){
					contentObj.className = contentClose;
				}, 700);
			}else{
				contentObj.className = contentOpen;
				$(this).addClass('menubar-open');
				$(this).html('收起菜单<i class="glyphicon glyphicon-menu-up"></i>');
			}
	    $(this).prev(".panel").animate({ height: 'toggle', opacity: 'toggle' }, "slow");
	  });
	});
});