/**
 * 开户失败
 * @param {Object} $
 * @param {Object} workList
 */
(function ($, regist_fail) {
	mui.init();
	var self;
	var ulList;  //ul列表
	var liList;  //显示成功或失败的信息
	var kehuzhao;  //上一个页面传过来的成功的值
	var em;  //上一个页面传过来的失败的值

	//初始化页面
	regist_fail.init = function () {
		console.log("regist_fail 加载成功！");
		regist_fail.initData();
		regist_fail.initController();
	};

	//初始化数据
	regist_fail.initData = function () {
		self = plus.webview.currentWebview();
		kehuzhao = self.kehuzhao;
		em = self.em;
	};

	//页面控件事件绑定
	regist_fail.initController = function () {
		ulList = document.querySelector('.result_list');
		liList = ulList.children[1];
		if(kehuzhao != undefined){
			alert(1);
			liList.innerHTML = "账户："+kehuzhao;
		}else{
			alert(2);
			liList.innerHTML = em;
		}
		
		//关闭
		document.getElementById("closeBtn").addEventListener("tap", function () {
			// mui.openWindow({
			// 	id: 'login',
			// 	url: '../login/login.html',
			// 	waiting: {
			// 		autoShow: false
			// 	}
			// });
			plus.navigator.setStatusBarStyle('light'); //状态栏
		});

		// 失败页面的点击
		document.getElementById("knowOk").addEventListener("tap", function () {
			// mui.openWindow({
			// 	id: 'login',
			// 	url: '../login/login.html',
			// 	waiting: {
			// 		autoShow: false
			// 	}
			// });
			plus.navigator.setStatusBarStyle('light'); //状态栏
		});
	}
}(mui, window.regist_fail = {}));