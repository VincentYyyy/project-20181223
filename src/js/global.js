exports.install = function(Vue, options) {
	//服务器地址
	Vue.prototype.$domain = 'http://www.baidu.com'
	Vue.prototype.$check = function(str, type) {
			var reg = {
				//身份证
				id: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
				//手机号码
				phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
				//email
				email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
				//包含有中文就返回true
				cn: /[\u4e00-\u9fa5]/,
				numen: /^[A-Za-z0-9]+$/,
				code: /[1-9]\d{5}/
			}
			//正确返回true
			return reg[type].test(str) ? true : false
	}
	Vue.prototype.$onlyNumber = function(str) {
		//只能输入数字
		return str.replace(/\D/g, '')
	}
	Vue.prototype.$isAndroid = function() {
		//判断是否android客户端，返回boolean
		var u = navigator.userAgent;
		return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	}
	Vue.prototype.$isIOS = function() {
		//判断是否isIOS客户端，返回boolean
		var u = navigator.userAgent;
		return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	}
	Vue.prototype.$backTop = function() {
		//滚动条置顶
		document.documentElement.scrollTop = 0
		window.pageYOffset = 0
		document.body.scrollTop = 0
	}
	Vue.prototype.$gotoPages = function(path, params) {
		//跳转页面
		if(params == '' || params == null) {
			this.$router.push(path)
		} else {
			this.$router.push({
				path: path,
				query: params
			})
		}
	},
	Vue.prototype.$cookie = {
		//cookie设置，取值，删除
	    set:function(key,val,time){//设置cookie方法
	        var date=new Date(); //获取当前时间
	        var expiresDays=time;  //将date设置为n天以后的时间
	        date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
	        document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
	    },
	    get:function(key){//获取cookie方法
	        /*获取cookie参数*/
	        var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
	        var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
	        var tips;  //声明变量tips
	        for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
	            var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
	            if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
	                tips=arr[1];   //将cookie的值赋给变量tips
	                break;   //终止for循环遍历
	            }
	        }
	        return tips;
	       },
	      delete:function(key){ //删除cookie方法
	         var date = new Date(); //获取当前时间
	         date.setTime(date.getTime()-10000); //将date设置为过去的时间
	         document.cookie = key + "=v; expires =" +date.toGMTString();//设置cookie
	       }
	}
}