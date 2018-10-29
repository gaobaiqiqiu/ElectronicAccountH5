/**
 * 开户失败
 * @param {Object} $
 * @param {Object} workList
 */
(function ($, regist_fail) {
	mui.init();
	var self;

	//初始化页面
	regist_fail.init = function () {
		console.log("regist_fail 加载成功！");
		regist_fail.initData();
		regist_fail.initController();
	};

	//初始化数据
	regist_fail.initData = function () {
		self = plus.webview.currentWebview();
	};

	//页面控件事件绑定
	regist_fail.initController = function () {
		//关闭
		document.getElementById("closeBtn").addEventListener("tap", function () {
			mui.openWindow({
				id: 'login',
				url: '../login/login.html',
				waiting: {
					autoShow: false
				}
			});
			plus.navigator.setStatusBarStyle('light'); //状态栏
		});

		document.getElementById("knowOk").addEventListener("tap", function () {
			mui.openWindow({
				id: 'login',
				url: '../login/login.html',
				waiting: {
					autoShow: false
				}
			});
			plus.navigator.setStatusBarStyle('light'); //状态栏
		});
	}
}(mui, window.regist_fail = {}));