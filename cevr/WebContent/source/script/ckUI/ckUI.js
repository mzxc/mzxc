/**
 * ckUI
 * author:h_yang
 * version:1.9.0
 * support-QQ:474798383
 * beforeVersion:1.8.4
 * 
 * API(属性级): 
 * --------------------------------------------------------------------------------------------------------
 * $.ckTrim(str), 返回值为去掉前后空格  str: jquery对象||元素ID||字符串
 * --------------------------------------------------------------------------------------------------------
 * $.ckIsEmail(str, ifAlert), 返回是否为正确邮箱格式 str: jquery对象||元素ID||字符串 ifAlert: 是否弹出错误信息
 * --------------------------------------------------------------------------------------------------------
 * $.ckIsUrl(str, ifAlert), 返回是否是正确的URL格式地址 str: jquery对象||元素ID||字符串 ifAlert: 是否弹出错误信息
 * --------------------------------------------------------------------------------------------------------
 * $.ckIsMobile(str, ifAlert), 返回是否是正确格式电话号 str: jquery对象||元素ID||字符串 ifAlert: 是否弹出错误信息
 * --------------------------------------------------------------------------------------------------------
 * $.ckSetCookie(name, value, path, time), 设置cookie name: key value: 值 path: 域 time: 存活时间(s)
 * --------------------------------------------------------------------------------------------------------
 * $.ckGetCookie(name), 获取cookie, name: key值
 * --------------------------------------------------------------------------------------------------------
 * $.ckDelCookie(name), 删除cookie, name: key值
 * --------------------------------------------------------------------------------------------------------
 * $.ckObjToJsonStr(obj), obj对象转json字符串,如果出现异常,则返回""
 * --------------------------------------------------------------------------------------------------------
 * $.ckObjToJson(obj), obj对象转json对象, 如果出现异常则返回new Object()
 * --------------------------------------------------------------------------------------------------------
 * $.ckIsEmpty(str, ifAlert), 返回是否为空值, str: jquery对象||元素ID||字符串 ifAlert: 是否弹出错误信息
 * --------------------------------------------------------------------------------------------------------
 * $.ckMul(arg1, arg2), 乘法
 * --------------------------------------------------------------------------------------------------------
 * $.ckAdd(arg1, arg2), 加法
 * --------------------------------------------------------------------------------------------------------
 * $.ckSub(arg1, arg2), 减法
 * --------------------------------------------------------------------------------------------------------
 * $.ckDiv(arg1, arg2), 除法
 * --------------------------------------------------------------------------------------------------------
 * $.ckMustNumber(e, obj), 只能输入数字, 属性级函数, 绑定在元素事件中  如果需要直接绑定元素则使用$("selecter").ckMustNumber()
 * --------------------------------------------------------------------------------------------------------
 * $.ckFmtMoney(s, n), 格式化金额，s: 金额, n: 保留的小数位数
 * --------------------------------------------------------------------------------------------------------
 * $.ckRbkMoney(s), 还原金额，如果没有小数，则返回整数, s: 格式化之后的金额
 * --------------------------------------------------------------------------------------------------------
 * $.ckGoto(url), 跳转url地址
 * --------------------------------------------------------------------------------------------------------
 * $.ckShade(flag, time), 页面遮罩, flag: boolean类型,true为开启,false关闭,在开启时,重复点击则中断线程, time为持续时间,默认为4秒
 * --------------------------------------------------------------------------------------------------------
 * $.ckGetContext(), 返回应用程序上下文全路径
 * --------------------------------------------------------------------------------------------------------
 * $.ckGotoView(uri), 跳转带上下文的地址, uri: 请求地址（资源路径）,如果uri第一位不是/ 则自动加/
 * --------------------------------------------------------------------------------------------------------
 * $.ckCheckCard(str, ifAlert), 返回是否是正确身份证号, str: jquery对象||元素ID||字符串 ifAlert: 是否弹出错误信息
 * --------------------------------------------------------------------------------------------------------
 * $.ckPostToNewView(url, args), post形式跳转页面，避免参数暴露在地址栏中, args为参数列表（数组类型）
 * --------------------------------------------------------------------------------------------------------
 * $.ckWhatFrameWork(), 当前浏览器运行平台，0为andriod 1为iphone 2为winphone 3为其他
 * --------------------------------------------------------------------------------------------------------
 * $.ckGetSomeThing(obj), 获取jquery对象的一些值, 返回为array  0:jquery对象，1:元素内的值， 2:是否可以获取焦点
 * --------------------------------------------------------------------------------------------------------
 * $.ckLoadJS(option), 动态加载js  option常用参数： url: js地址 timeout: js超时时间 onReady: 加载完成触发事件
 * --------------------------------------------------------------------------------------------------------
 * --------------------------------------------------------------------------------------------------------
 * API(方法级)
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckCache.addCache(key, value), 添加页面级缓存
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckCache.getCache(key), 获得缓存内容
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckCombox(option), 下拉框插件, 属性如下： 
 *		url         : "testUrl",//地址
 *		data        : null,//数据
 *		width       : "100px",//宽度
 *		height      : "30px",//高度
 *		autoSel     : false,//是否自动选择
 *		dataType    : "json",//数据类型
 *		defaultSel  : true,//默认选择
 *		requestType : "GET",//请求方法
 *		formatter   : { //格式化
 *			root    : "ckUIRoot",
 *			id      : "id",
 *			value   : "value",
 *			select  : "select"
 *		},
 *		onSuccess : function(resultJson) {
 *			// do somthing
 *		},
 *		onSelect : function(obj) {
 *			// do somthing
 *		}
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckMustNumber(), 元素必须输入数字
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckMustEnAndNumberAndCn(), 元素只可以输入汉字英文和数字
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckMustEnAndNumber(), 元素只可以输入英文和数字
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckMustEnAndCN(), 元素只可以输入英文和汉字
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckMustMoney(), 元素智能输入钱币规则的值
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckNumLimit(min, max), 限制元素输入的最大值和最小值
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckMaxLength(length), 限制输入的最大长度
 * --------------------------------------------------------------------------------------------------------
 * $("selecter").ckRegular(expression), 元素绑定正则表达式
 * 
 * 
 * 更新日志: 
 * 2017-01-10更新日志: $.ckShade(true)           遮罩功能,一次调起为开启,在遮罩参数为true的时候再次调起会终止线程, $.ckShade(false) 为关闭遮罩
 * 2017-01-16更新日志: 遮罩加入显示图片
 * 2017-01-18更新日志: $.ckGetContext()          返回为不带/的根项目路径
 * 2017-01-20更新日志: $.ckShade(boolean, time), boolean 是否显示遮罩 time: 显示时间为毫秒, 遮罩默认显示5秒
 * 2017-02-08更新日志: $.ckMaxLength(length)     加入最大输入长度限制函数 length: 最大长度数
 * 2017-02-10更新日志: $.ckWhatFrameWork()       0: 安卓 1: 苹果 2: winphone 3 other
 * 2017-02-15更新日志: $.ckAlert(option)     	   弹出组件
 * 2017-02-18更新日志: $.ckSetCookie(),      	   新增参数time 单位:秒  为cookie过期时间
 * 2017-02-25更新日志: $.ckAnchor(),             页面锚点,返回上个页面自动定位到上次浏览的位置
 * 2017-03-07更新日志: $.ckIsUrl(),              是否是URL地址 
 * 2017-03-09更新日志: $.ckGotoView(uri),        带项目根路径的跳转
 * 2017-03-09更新日志: $.ckCheckCard(card, ifAlert), 检测身份证号 card: 身份证号||元素ID||jquery对象  ifAlert: 是否打印错误信息
 * 2017-03-13更新日志: 修复$.ckIsEmpty对入参的校验规则
 * 2017-04-05更新日志: 加入两种限制函数，$.ckMustEnAndNumber(适配 . -) & $.ckMustEnAndCN & $.ckMustEnAndNumberAndCn
 * 2017-04-07更新日志: 加入自定义过滤，$.ckRegular(expression)  expression 为正则表达式
 * 2017-04-07更新日志: 改进了must相关函数的触发条件，现在可以兼容移动端了
 * 2017-04-21更新日志: 修复了isUrl的正则
 * 2017-05-11更新日志: 修复了ckNumLimit 在文本框数字不可以全部删除的bug
 * 2017-05-23更新日志: 更新了一些方法的逻辑
 * 
 */
;(function($){
/**
 * 缓存
 */
$.ckCache = {
	cc : new Object(),
	addCache : function(key, value){
		$.ckCache.cc[key] = value;
	},
	getCache : function(key){
		return $.ckCache.cc[key];
	},
	clearCache : function(){
		$.ckCache.cc = null;
		$.ckCache.cc = new Object();
	}
};
/**
 * 对象绑定属性添加
 */
$.fn.extend({
	/**
	 * 下拉框插件
	 * 
	 * @param option 配置参数
	 * @returns 下拉框对象
	 */
	ckCombox : function(option) {
		var ck = $(this);
		ck.empty();
		ck.off();
		var tempOption = {
			url         : "testUrl",//地址
			data        : null,//数据
			width       : "100px",//宽度
			height      : "30px",//高度
			autoSel     : false,//是否自动选择
			dataType    : "json",//数据类型
			defaultSel  : true,//默认选择
			requestType : "GET",//请求方法
			formatter   : {//格式化
				root    : "ckUIRoot",
				id      : "id",
				value   : "value",
				select  : "select"
			},
			onSuccess : function(resultJson) {
				// do somthing
			},
			onSelect : function(obj) {
				// do somthing
			}
		};
		var ckOption = $.extend(true, {}, tempOption, option);
		var root     = ckOption.formatter.root;
		var ckId     = ckOption.formatter.id;
		var ckValue  = ckOption.formatter.value;
		var ckSelect = ckOption.formatter.select;
		ck.css("width" , ckOption.width);
		ck.css("height", ckOption.height);
		var resultArray = [];
		$.ajax({
			url      : ckOption.url,
			type     : ckOption.requestType,
			data     : ckOption.data,
			dataType : ckOption.dataType,
			success  : function(result) {
				if(root != "ckUIRoot"){
					result = result[root];
				}
				if(ckOption.defaultSel == true || ckOption.defaultSel == 'true'){
					ck.append('<option value="-1" selected="selected">全部</option>');
				}
				for ( var i in result) {
					var tempId    = result[i][ckId];
					var tempValue = result[i][ckValue];
					var tempJson  = "{" + ckId + " : \"" + tempId + "\" ," + ckValue + " : \"" + tempValue + "\"}";
					resultArray.push(tempJson);
					if (ckOption.autoSel == true && result[i][ckSelect] == 'true') {
						ck.append("<option selected=\"selected\" value=" + tempId + ">" + tempValue + "</option>");
						continue;
					}
					ck.append("<option value=" + tempId + ">" + tempValue + "</option>");
				}
				ck.change(function() {
					ckOption.onSelect(ck);
				});
				if (ckOption.onSuccess) {
					return ckOption.onSuccess(eval("([" + resultArray + "])"));
				}
			},
			error : function(XMLHttpRequest, errorMSG, Exception) {
				alert("500");
				console.log("与服务器通讯出现错误!");
			}
		});
		return ck;
	},
	/**
	 * 合并jqgrid单元格插件(必须和  cellattr:$.insertAttr  配合使用)
	 * 
	 * @param option
	 * 
	 * 说明 : 需要在jqgrid上添加两个属性: 
	 * 		 judgeId : "id",根据该属性来判断上下行是否属于同类型的数据
	 * 		 mergeCellFild : ["xx","xx"] 如果是同类型的数据,那么合并哪个ID的单元格,数组
	 */
	jqCellMerge : function(option){
		var ck = $(this);
		var tempOption = {
			judgeId       : "id",
			mergeCellFild : ["id","name"]
		};
		if(!option){
			tempOption.judgeId = ck.getGridParam("judgeId");
			tempOption.mergeCellFild = ck.getGridParam("mergeCellFild");
		}else{
			tempOption.judgeId = option.judgeId;
			tempOption.mergeCellFild = option.mergeCellFild;
		}
		var ids = ck.getDataIDs();
		var spanNum = 1;
		for(var i = 0; i < ids.length; i = i + 1){
			var id = ids[i];
			var thisRow = ck.getRowData(id);
			for(var j = i + 1; j < ids.length; j = j + 1){
				var nextId  = ids[j];
				var nextRow = ck.getRowData(nextId);
				if(thisRow[tempOption.judgeId] == nextRow[tempOption.judgeId]){
					spanNum = spanNum + 1;
					for(var fildId = 0;fildId < tempOption.mergeCellFild.length;fildId = fildId + 1){
						var fildName = tempOption.mergeCellFild[fildId];
						$("#row_" + id + "_" + thisRow[fildName].trim()).attr("rowspan",spanNum);
					}
					for(var fildId = 0;fildId < tempOption.mergeCellFild.length;fildId = fildId + 1){
						var fildName = tempOption.mergeCellFild[fildId];
						$("#row_" + nextId + "_" + nextRow[fildName].trim()).css("display","none");
					}
					continue;
				}else{
					i = j - 1;
					spanNum = 1;
					break;
				}
			}
		}
	},
	/**
	 * 必须输入0-9之间的数字,jquery方法级函数
	 */
	ckMustNumber : function(){
		var _press = "change";
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/\D/g,''));
        });
		if($.ckWhatFrameWork() == 0 || $.ckWhatFrameWork() == 2){
			_press = "input";
		}else{
			_press = "keyup";
		}
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/\D/g,''));
        });
	},
	/**
	 * 必须输入汉字,英文,数字
	 */
	ckMustEnAndNumberAndCn : function(){
		var _press = "change";
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,''));
        });
		if($.ckWhatFrameWork() == 0 || $.ckWhatFrameWork() == 2){
			_press = "input";
		}else{
			_press = "keyup";
		}
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,''));
        });
	},
	/**
	 * 只能输入英文和数字
	 */
	ckMustEnAndNumber: function(){
		var _press = "change";
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/[^\w\.\/\-]/ig,''));
        });
		if($.ckWhatFrameWork() == 0 || $.ckWhatFrameWork() == 2){
			_press = "input";
		}else{
			_press = "keyup";
		}
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/[^\w\.\/\-]/ig,''));
        });
	},
	/**
	 * 只能输入英文和汉字
	 */
	ckMustEnAndCN: function(){
		var _press = "change";
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/[\d]/g,''));
        });
		if($.ckWhatFrameWork() == 0 || $.ckWhatFrameWork() == 2){
			_press = "input";
		}else{
			_press = "keyup";
		}
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/[\d]/g,''));
        });
	},
	/**
	 * 必须输入钱币规则的数字
	 */
	ckMustMoney : function(e){
		var _press = "change";
		$(this).on(_press, function(e) {
			var str = $(this).val();
			if(e.keyCode == 190){
				if(str.indexOf(".")!=str.lastIndexOf(".")){
					var firstStr = str.substring(0,str.lastIndexOf('.'));
					firstStr = firstStr.substring(0,(firstStr.indexOf(".")+3));
					$(this).val(firstStr);
					return;
				}
			}
			if(str.indexOf(".")!=-1){
				str = str.substring(0,(str.indexOf(".")+3));
			}
			$(this).val(str.replace(/[^\-?\d.]/g,''));
		});
		if($.ckWhatFrameWork() == 0 || $.ckWhatFrameWork() == 2){
			_press = "input";
		}else{
			_press = "keyup";
		}
		$(this).on(_press, function(e) {
			var str = $(this).val();
			if(e.keyCode == 190){
				if(str.indexOf(".")!=str.lastIndexOf(".")){
					var firstStr = str.substring(0,str.lastIndexOf('.'));
					firstStr = firstStr.substring(0,(firstStr.indexOf(".")+3));
					$(this).val(firstStr);
					return;
				}
			}
			if(str.indexOf(".")!=-1){
				str = str.substring(0,(str.indexOf(".")+3));
			}
			$(this).val(str.replace(/[^\-?\d.]/g,''));
		});
	},
	/**
	 * 限制输入数字最大值和最小值
	 * 
	 * @param min 最小值
	 * @param max 最大值
	 */
	ckNumLimit : function(min, max){
		var _press = "change";
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/\D/g,''));
			var thisVal = $(this).val();
			var thisValStr = thisVal + "";
			if(Number(thisVal) > Number(max) && thisVal.length > 0){
				$(this).val(max);
			}
			if(Number(thisVal) < Number(min)  && thisVal.length > 0){
				$(this).val(min);
			}
		});
		if($.ckWhatFrameWork() == 0 || $.ckWhatFrameWork() == 2){
			_press = "input";
		}else{
			_press = "keyup";
		}
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(/\D/g,''));
			var thisVal = $(this).val();
			var thisValStr = thisVal + "";
			if(Number(thisVal) > Number(max) && thisVal.length > 0){
				$(this).val(max);
			}
			if(Number(thisVal) < Number(min)  && thisVal.length > 0){
				$(this).val(min);
			}
		});
	},
	/**
	 * 限制输入的最大长度
	 *  
	 * @param _length 长度
	 */
	ckMaxLength : function(_length){
		var _press = "change";
		$(this).on(_press, function() {
			if($(this).val().length > _length){
				$(this).val($(this).val().slice(0, _length));
			}
		});
		if($.ckWhatFrameWork() == 0 || $.ckWhatFrameWork() == 2){
			_press = "input";
		}else{
			_press = "keyup";
		}
		$(this).on(_press, function() {
			if($(this).val().length > _length){
				$(this).val($(this).val().slice(0, _length));
			}
		});
	},
	/**
	 * 正则过滤
	 */
	ckRegular: function(expression){
		if($.ckIsEmpty(expression)) console.log("expression is null");
		var _press = "change";
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(expression,''));
		});
		if($.ckWhatFrameWork() == 0 || $.ckWhatFrameWork() == 2){
			_press = "input";
		}else{
			_press = "keyup";
		}
		$(this).on(_press, function() {
			$(this).val($(this).val().replace(expression,''));
		});
	}
});
/**
 * Jquery属性添加
 */
$.extend({
	ckLoadJS: function(option){
		if(typeof option == "string"){
			option = {url: option};
		}
		var tempOption = {
			url: "",
			timeout: (60 * 60 * 10000),
			onReady: function(){
				//console.log("JS [" + option.url + "] LOAD OK");
			}
		};
		var ckOption = $.extend(true, {}, tempOption, option);
		var lastTime = $.ckGetCookie("timeout_ckLoadJS");
		var date = new Date();
		var now = date.getTime();
		var version = now;
		var tips = "JS LOAD OK : ";
		if(!$.ckIsEmpty(lastTime) && (Number(now) - Number(lastTime)) < Number(ckOption.timeout)){
			version = lastTime;
		}else{
			version = now;
			tips = "JS RELOAD OK : ";
		}
		var jsUrl = ckOption.url;
		var script = document.createElement("script");
		script.type = "text/javascript";
		if (script.readyState) {
			script.onreadystatechange = function () {
		        if (script.readyState == "loaded" || script.readyState == "complete") {
		          script.onreadystatechange = null;
		          ckOption.onReady();
		          $.ckSetCookie("timeout_ckLoadJS", version);
		          console.log(tips + "[" + ckOption.url + "]");
		        }
			};
		}
		else {
	    	script.onload = function () {
	    		ckOption.onReady();
	    		$.ckSetCookie("timeout_ckLoadJS", version);
	    		console.log(tips + "[" + ckOption.url + "]");
	    	};
		}
		script.src = jsUrl + "?ver=" + version;
		document.body.appendChild(script);
	},
	/**
	 * jqgrid单元格添加属性插件,参数默认jqgrid传入
	 * 
	 * @param rowId 当前行ID
	 * @param val 标识符值
	 * @param rawObject 行数据(自动注入)
	 * @param cm 	(自动注入)
	 * @param rdata (自动注入)
	 * @returns 插入的字符串
	 */
	insertAttr : function(rowId,val,rawObject,cm,rdata){
		return "id = \"row_" + rowId + "_" + $.ckTrim(val) + "\"";
	},
	/**
	 * layer插件扩展功能
	 * 
	 * @param tips 提示信息
	 * @param icon 图标种类
	 * @param time 显示时间
	 * @param func 回调函数
	 */
	showMsg : function(tips, icon, func, time){
		if($.ckIsEmpty(time)){time = 2500;}
		layer.msg(tips, {title:"提示:", icon : icon, time : time, area: ['275px', '140px'], offset: 'rb', shift :2}, func);
	},
	/**
	 * 当前运行平台
	 * 
	 * @returns {Number}
	 */
	ckWhatFrameWork : function(){
		var u = navigator.userAgent;
		if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
			//andriod
			return 0;
		} 
		else if (u.indexOf('iPhone') > -1) {
			//iphone
			return 1;
		} 
		else if (u.indexOf('Windows Phone') > -1) {
			//winphone
			return 2;
		}else{
			//other
			return 3;
		}
	},
	/**
	 * 去前后空格插件
	 * 
	 * @param param 字符串
	 * @returns 去掉前后空格后的字符串,参数为空则返回"";
	 */
	ckTrim : function(paramObj){
		var param = $.ckGetSomeThing(paramObj)[1];
		if($.ckIsEmpty(param)){
			return "";
		}
		if(typeof param === "string"){
			return param.replace(/(^\s*)|(\s*$)/g,'').replace("&#160;","");
		}else{
			return "";
		}
		
	},
	/**
	 * 邮箱校验
	 *
	 * @param mailContext 邮箱地址
	 * @returns 是则为true,否则为false
	 */
	ckIsEmail : function(mailContextObj, ifAlert){
		var jqObj   = $.ckGetSomeThing(mailContextObj)[0];
		var mailContext = $.ckGetSomeThing(mailContextObj)[1];
		var ifCanFocus  = $.ckGetSomeThing(mailContextObj)[2];
		var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		if(!reg.test(mailContext) || $.ckIsEmpty(mailContext)){
			if(ifAlert === true) alert("请输入有效的邮箱地址");
			if(ifCanFocus === true) jqObj.focus();
			return false;
		}
		return true;
	},
	/**
	 * 是否是URI
	 */
	ckIsUrl : function(urlObj, ifAlert){
		var jqObj = $.ckGetSomeThing(urlObj)[0];
		var url = $.ckGetSomeThing(urlObj)[1];
		var ifCanFocus = $.ckGetSomeThing(urlObj)[2];
		if($.ckIsEmpty(url)) {
			if(ifAlert === true) alert("请输入正确格式的URL");
			if(ifCanFocus === true) jqObj.focus();
			return false;
		}
		var strRegex = "^(((ht|f)tp(s?))\://)?(www.|[a-zA-Z].)[a-zA-Z0-9\-\.]+\.(com|edu|gov|mil|net|org|biz|info|name|museum|us|ca|uk)(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\;\?\'\\\+&%\$#\=~_\-]+))*$";
		var re = new RegExp(strRegex);
		if(re.test(url)){
			return true;
		}else{
			if(ifAlert === true) alert("请输入正确格式的URL");
			if(ifCanFocus === true) jqObj.focus();
			return false;
		}
	},
	/**
	 * 是否是电话号
	 * 
	 * @param name cookieName
	 * @returns 是电话号则返回true,否则为false
	 */
	ckIsMobile : function(telObj, ifAlert){
		var jqObj  = $.ckGetSomeThing(telObj)[0];
		var tel    = $.ckGetSomeThing(telObj)[1];
		var ifCanFocus = $.ckGetSomeThing(telObj)[2];
		var reg = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
		if(!reg.test(tel)){
			if(ifAlert === true) alert("请输入正确的电话号");
			if(ifCanFocus === true) jqObj.focus();
			return false;
		}
		return true;
	},
	/**
	 * 存储Cookie path默认为/ time默认为24小时
	 * 
	 * @param name cookieName
	 * @param value 值
	 * @param path 可以不传,默认为/
	 * @param value 值
	 */
	ckSetCookie : function(name, value, path, time){
	    if($.ckIsEmpty(time)){
	    	time = 86400;
		}
	    if($.ckIsEmpty(path)){
			path = "/";
		}
	    var exp = new Date();  
	    exp.setTime(exp.getTime() + time * 1000);
		document.cookie = name + "=" + escape(value) + ";path=" + path + ";expires=" + exp.toGMTString();
	},
	/**
	 * 获得Cookie
	 * 
	 * @param name cookieName
	 * @returns 为空则返回null,否则返回对应值
	 */
	ckGetCookie : function(name){
		var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)){
			return unescape(arr[2]).replace("\"","").replace("\"","");
		}else{
			return null;
		}
	},
	/**
	 * 删除Cookie
	 * 
	 * @param name cookieName
	 */
	ckDelCookie : function(name){
		var exp = new Date();
	    exp.setTime(exp.getTime() - 1);
	    var cval= $.ckGetCookie(name);
	    if(cval!=null){
	    	$.ckSetCookie(name, "");
	    	document.cookie = name + "=" + cval+";expires=" + exp.toGMTString();
	    }
	},
	/**
	 * 对象转Json字符串
	 * 
	 * @param obj 对象
	 * @returns 转换失败返回null,否则返回json字符串
	 */
	ckObjToJsonStr : function(obj){
		try{return JSON.stringify(obj);}catch(e){return "";};
	},
	/**
	 * 对象转Json对象
	 * 
	 * @param obj 对象
	 * @returns 转换失败返回null,否则返回json对象
	 */
	ckObjToJson : function(obj){
		try{return JSON.parse(obj);}catch(e){}
		try{return obj.parseJSON();}catch(e){}
		try{return eval('(' + obj + ')');}catch(e){}
		return new Object();
	},
	/**
	 * 是否是空的字段
	 * 
	 * @param s 字符串
	 * @returns 为空则返回true, 否则返回false;
	 */
	ckIsEmpty : function(str, ifAlert){
		if(str == undefined || str == 'undefined' || str == null || str == 'null' || (typeof str == "string" && str.replace(/(^\s*)|(\s*$)/g,'').replace("&#160;","") == '')) {
			if(ifAlert === true) alert("请输入有效字符");
			return true;
		}
		return false;
	},
	/**
	 * 乘法
	 * 
	 * arg1 相乘数
	 * arg2 相乘数
	 * @returns 乘法结果
	 */
	ckMul : function(arg1, arg2) 
	{ 
	    var m = 0,s1 = arg1.toString(),s2 = arg2.toString(); 
	    try{m+=s1.split(".")[1].length;}catch(e){} 
	    try{m+=s2.split(".")[1].length;}catch(e){} 
	    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
	},
	/**
	 * 加法
	 * 
	 * arg1 相加数
	 * arg2 相加数
	 * @returns 加法结果
	 */
	ckAdd : function(arg1, arg2){ 
	    var r1,r2,m; 
	    try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;} 
	    try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;} 
	    m=Math.pow(10,Math.max(r1,r2));
	    var result = (arg1 * m + arg2 * m) / m;
	    return result;
	},
	/**
	 * 减法
	 * 
	 * arg1 减数
	 * arg2 被减数
	 * @returns 减法结果
	 */
	ckSub : function(arg1, arg2){   
		var result = $.ckAdd(arg1, -arg2);
	    return result;
	},
	/**
	 * 除法
	 * 
	 * arg1 除数
	 * arg2 被除数
	 * @returns 商
	 */
	ckDiv : function(arg1, arg2){
		if(arg2 == 0){
			console.log("非法运算式..");
			return;
		}
	    var t1 = 0,t2 = 0,r1,r2; 
	    try{t1=arg1.toString().split(".")[1].length;}catch(e){} 
	    try{t2=arg2.toString().split(".")[1].length;}catch(e){} 
	    with(Math){ 
	        r1=Number(arg1.toString().replace(".","")); 
	        r2=Number(arg2.toString().replace(".","")); 
	        return (r1 / r2) * pow(10, t2 - t1); 
	    } 
	},
	/**
	 * 限制只能输入数字带小数点,jquery属性级函数
	 * 
	 * @param e event
	 * @param obj 当前对象
	 */
	ckMustNumber : function (e, obj) {
		var k = window.event ? e.keyCode : e.which;
		if (((k >= 48) && (k <= 57)) || k == 8 || k == 0 || k == 45 || k == 46) {
			var tempVal = obj.val();
			if(tempVal.indexOf(".") != -1 && tempVal.substring(tempVal.indexOf(".")).length > 2)
			{
				obj.val(tempVal.substring(0,tempVal.indexOf(".") + 2));
			} else{
				obj.val(tempVal);
			}
			window.event.returnValue = true;
		} else {
			if (window.event) {
				window.event.returnValue = false;
			} else {
				e.preventDefault();
			}
		}
	},
	/**
	 * 格式化金额
	 * 
	 * @param s 金额
	 * @param n 保留的小数点位数
	 * @returns 格式化好的金额
	 */
	ckFmtMoney : function(s, n){
		var rep= /^-?[1-9]\d*.?\d*$/g;
		if($.ckIsEmpty(s) == "" || rep.test(s) == false || s == 0) return "";
		n = n > 0 && n <= 20 ? n : 2;
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
		t = "";
		var thisLength = l.length;
		for (i = 0; i < thisLength; i++) {
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		}
		return (t.split("").reverse().join("") + "." + r).replace("-,", "-");
	},
	/**
	 * 还原金额
	 * 
	 * @param s 金额
	 * @returns 如果没有小数则返回整数,否则返回浮点数
	 */
	ckRbkMoney : function (s){
		if(ckIsEmpty(s) == "" || s == 0) return "";
		return parseFloat((s + "").replace(/[^\d\.-]/g, "")); 
	},
	/**
	 * 跳转页面
	 * @param url 跳转地址
	 */
	ckGoto : function(url){
		if($.ckIsEmpty(url)) return;
		window.location.href = url;
	},
	/**
	 * 遮罩标识
	 */
	ckShadeFlag : false,
	/**
	 * 开启遮罩,防止重复提交
	 * 
	 * flag为false为关闭遮罩,不传则不处理
	 */
	ckShade : function(flag, time){
		if(time){
			setTimeout("$(\"#shade_article\").remove();",time);  
		}else{
			setTimeout("$(\"#shade_article\").remove();",4000);  
		}
		if(flag == false && typeof flag == "boolean"){
			$.ckShadeFlag = flag;
			$("#shade_style").remove();
			$("#shade_article").hide();
			$("#shade_article").remove();
			return;
		}
		if($.ckShadeFlag){
			throw "重复提交";
		}else{
			var url = $.ckGetContext();
			var style = 
				'<style id="shade_style">'
					+ '@-webkit-keyframes circle{0%{ transform:rotate(0deg); }100%{ transform:rotate(-360deg);}'
					+ '@-ms-keyframes circle{0%{ transform:rotate(0deg); }100%{ transform:rotate(-360deg);}'
					+ '@--moz--keyframes circle{0%{ transform:rotate(0deg); }100%{ transform:rotate(-360deg);}'
					+ '@-o-keyframes circle{0%{ transform:rotate(0deg); }100%{ transform:rotate(-360deg);}'
				+ '</style>';
			var showDiv =  
				'<article id="shade_article" style="width:100%;height:100%;position:fixed;background: rgba(0,0,0,0.3);top:0;z-index:1000">'
					+ '<div style="position:absolute;text-align: center;left:0;right:0;color:#fff;margin-top:20%;">'
						+ '<img id="ck_shade_showImg" style="-webkit-animation:circle 0.8s infinite linear;-ms-animation:circle 0.8s infinite linear;-moz-animation:circle 0.8s infinite linear;-o-animation:circle 0.8s infinite linear;" src="' + url + '/source/script/ckUI/image/wait.png" alt="" width="3%"/> <br/><br/>'
						+ '<span style="font-size: 15px;">正在处理，请稍后...</span>'
					+ '</div>'
			    + '</article>';
			$("html").prepend(style + showDiv);
			$.ckShadeFlag = true;
		}
	},
	/**
	 * 获取项目上下文
	 */
	ckGetContext : function(){
		try{
			var urlArr = window.location.href.split("/");
			var url = urlArr[0] + "//" + urlArr[1] + urlArr[2] + "/" + urlArr[3];
			return url;
		}catch(e){
			return "/";
		}
	},
	/**
	 * 锚点
	 */
	ckAnchor : function(){
		if($.ckIsEmpty($('ckAnchor'))){
			return;
		}
		var urlArr = window.location.href.split("/");
		var url = urlArr[urlArr.length - 1].replace("=","");
		url = url.replace("?","");
		console.log("锚点已启用: " + $.ckGetCookie(url));
		if($.ckGetCookie(url) != null){
			var gotoAnchor = setInterval(function(){
				$('html').animate({scrollTop: $.ckGetCookie(url) + "px"}, 800);
				var anchor = 0;
				if(window.pageYOffset != null && window.pageYOffset != 0){    
			        anchor = window.pageYOffset;
			    }else if(document.body != null && document.body.scrollTop != 0) {     
					anchor = document.body.scrollTop;    
				}else if(document.documentElement.scrollTop != null && document.documentElement.scrollTop != 0) { 
					anchor = document.documentElement.scrollTop; 
			    }
				console.log("当前坐标: " + anchor);
				if(anchor == $.ckGetCookie(url)){
					clearTimeout(gotoAnchor);
				}
			}, 500);
		}else{
			$.ckSetCookie(url, 0);
		}
		$(document).click(function(){
			var anchor = 0;
			if(window.pageYOffset != null && window.pageYOffset != 0){    
		        anchor = window.pageYOffset;
		    }else if(document.body != null && document.body.scrollTop != 0) {     
				anchor = document.body.scrollTop;    
			}else if(document.documentElement.scrollTop != null && document.documentElement.scrollTop != 0) { 
				anchor = document.documentElement.scrollTop; 
		    } 
			$.ckSetCookie(url, anchor);
			console.log("锚点已启用: " + $.ckGetCookie(url));
		});
	},
	/**
	 * 跳转视图
	 */
	ckGotoView : function(uri){
		if($.ckIsEmpty(uri)){
			return;
		}
		if(uri.substr(0, 1) != "/"){
			uri = "/" + uri;
		}
		$.ckGoto($.ckGetContext() + uri);
	},
	/**
	 * 身份证校验
	 */
	ckCheckCard : function(cardObj, ifAlert){
		var jqObj  = $.ckGetSomeThing(cardObj)[0];
		var card   = $.ckGetSomeThing(cardObj)[1];
		var ifCanFocus = $.ckGetSomeThing(cardObj)[2];
		var vcity={
			11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",
			21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",
			33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",
			42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",
			51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",
			63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"
		};
	    //是否为空
	    if($.ckIsEmpty(card)) {
	    	if(ifAlert === true) alert("请输入有效的身份证号");
			if(ifCanFocus === true) jqObj.focus();
			return false;
	    }
	    //校验长度，类型
	    var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
		if(reg.test(card) === false) {
			if(ifAlert === true) alert("请输入有效的身份证号");
			if(ifCanFocus === true) jqObj.focus();
			return false;
		}
	    //检查省份
		var province = card.substr(0,2);
	    if($.ckIsEmpty(vcity[province])) {
	    	if(ifAlert === true) alert("请输入有效的身份证号");
			if(ifCanFocus === true) jqObj.focus();
			return false;
	    }
	    //检查生日
	    var len = card.length;
	    //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
	    if(len == '15'){
	        var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
	        var arr_data = card.match(re_fifteen);
	        var year = arr_data[2];
	        var month = arr_data[3];
	        var day = arr_data[4];
	        var birthday = new Date('19'+year+'/'+month+'/'+day);
	        var now = new Date();
	        var now_year = now.getFullYear();
	        //年月日是否合理
	        if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day){
	            //判断年份的范围（3岁到100岁之间)
	            var time = now_year - year;
	            if(time < 3 || time > 100){
	            	if(ifAlert === true) alert("请输入有效的身份证号");
	    			if(ifCanFocus === true) jqObj.focus();
	    			return false;
	            }
	        }
	    }
	    //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
	    if(len == '18'){
	        var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
	        var arr_data = card.match(re_eighteen);
	        var year = arr_data[2];
	        var month = arr_data[3];
	        var day = arr_data[4];
	        var birthday = new Date(year+'/'+month+'/'+day);
	        var now = new Date();
	        var now_year = now.getFullYear();
	        //年月日是否合理
	        if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day){
	            //判断年份的范围（3岁到100岁之间)
	            var time = now_year - year;
	            if(time < 3 || time > 100){
	            	if(ifAlert === true) alert("请输入有效的身份证号");
	    			if(ifCanFocus === true) jqObj.focus();
	    			return false;
	            }
	        }
	    }
	    //15位转18位
	    if(card.length == '15'){
	        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
	        var cardTemp = 0, i;  
	        card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
	        for(i = 0; i < 17; i ++){
	            cardTemp += card.substr(i, 1) * arrInt[i];
	        }
	        card += arrCh[cardTemp % 11];
	    }
	    var len = card.length;
	    if(len == '18'){
	        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
	        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
	        var cardTemp = 0, i, valnum;
	        for(i = 0; i < 17; i ++){
	            cardTemp += card.substr(i, 1) * arrInt[i];
	        }
	        valnum = arrCh[cardTemp % 11];
	        if (valnum == card.substr(17, 1)){
	            return true;
	        }
	        if(ifAlert === true) alert("请输入有效的身份证号");
			if(ifCanFocus === true) jqObj.focus();
			return false;
	    }
	    return true;
	},
	/**
	 * 获取id制定的jquery对象和一些数据
	 */
	ckGetSomeThing : function(obj){
		var result = [];
		if(obj instanceof jQuery){
			result.push(obj);
			if($.ckIsEmpty(obj.val())){
				result.push(obj.text());
			}else{
				result.push(obj.val());
			}
			if(obj.prop("tagName") == "input"){
				result.push(true);
			}else{
				result.push(false);
			}
			return result;
		}
		try{
			if(!$.ckIsEmpty(obj)) {
				if(typeof obj === "string" && $("#" + obj) instanceof jQuery && $("#" + obj) != null && $("#" + obj)[0] != undefined && $("#" + obj)[0] != "undefined"){
					result.push($("#" + obj));
					if($.ckIsEmpty($("#" + obj).val())){
						result.push($("#" + obj).text());
					}else{
						result.push($("#" + obj).val());
					}
					if($("#" + obj).prop("tagName") == "input"){
						result.push(true);
					}else{
						result.push(false);
					}
					return result;
				}
			}
		}catch(e){
			console.log("error getSomthing");
		}
		result.push(obj);
		result.push(obj);
		result.push(false);
		return result;
	},
	/**
	 * 使用Post方式提交并跳转页面
	 */
	ckPostToNewView: function(url,args){
		$('body').append("<form id='ckForm' style='display: none;' method='post'></form>");
        $("#ckForm").attr({"action":url});
        for (arg in args)
        {
            var input = '<input name="' + arg + '" value="' + args[arg] + '" type="hidden">';
            $("#ckForm").append(input);
        }
        $("#ckForm").submit();
    },
    ckValidate : function(option){
		if(!option.self){
			console.log("请在option中传入this对象,引用为self..");
			return false;
		}
		var _this = option.self;
		var ck = $(_this);
		var tempOption = {
			type : 1,//验证类型,用于方便后台判断
			url : "",//校验地址
			async : true,//同步校验,防止返回值因异步请求有误差,需要方法有返回值的时候必须为false
			sameValidate : true,//输入的值无变化时需要检验否   true是需要 false是不需要
			operatorFlag : "defaultValue",//对比原值,在input中定义的元素key值
			callBackFlag : "result",//校验结果key
			callBackMsg : "msg",//校验失败提示信息key
			notBeNull : {//空值校验
				flag : false,//true开启  false关闭
				checkEmpty : function(){
					if($.ckTrim(_this.value) == ""){
						layer.tips("不能为空", _this, {tips : 1});
						return false;
					}
				}
			},
			onSuccess : function(msg, _this){//校验通过回调函数
				layer.tips(msg, _this, {tips : 2});
			},
			onFail : function(msg){//校验失败回调函数
				layer.tips(msg, _this, {tips : 1});
			}
		};
		var ckOption = $.extend(true, {}, tempOption, option);
		if(ckOption.notBeNull.flag){
			if(ckOption.notBeNull.checkEmpty() == false){
				return false;
			}
		}
		if(_this[ckOption.operatorFlag] == _this.value && ckOption.sameValidate == false){
			return false;
		}else{
			_this[ckOption.operatorFlag] = _this.value;
		}
		var validateResult = true;
		$.ajax({
			async : ckOption.async,
			type : "post",
			data : {"type" : ckOption.type, "value" : _this.value},
			dataType : "json",
			url : ckOption.url,
			success : function(data){
				if(data[ckOption.callBackFlag]){
					ckOption.onSuccess(data[ckOption.callBackMsg], _this);
				}else{
					validateResult = false;
					ckOption.onFail(data[ckOption.callBackMsg], _this);
				}
			},
			error : function(){
				alert("与服务器通讯出现错误!");
			}
		});
		return validateResult;
	},
	/**
	 * 是否相等
	 */
	ckEquals :function(_idOne, _idTwo){
		if(($('#' + _idOne).val() + "") == ($('#' + _idTwo).val() + "")){
			return true;
		}
		return false;
	},
	/**
	 * 是否符合密码规则
	 */
	isPassword :function(pwd){
		var reg = /^(\w){6,16}$/;
		if(reg.test(pwd)){
			return true;
		}
		return false;
	}
});
//$.ckAnchor();
})(jQuery);