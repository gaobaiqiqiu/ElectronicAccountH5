//var serverPath = "http://176.16.55.33:9083/eleapp/";
//var serverPath = "http://176.16.55.33:9084/eleapp/";
var serverPath = "http://60.10.20.25:86/elapp/"; //SIT地址
//var serverPath = "http://60.10.20.15:86/eleapp/"; //UAT地址
//var serverPath = "https://60.10.20.15:88/eleapp/"; //准生产地址
//var serverPath = "http://60.10.20.25:86/eleappZSC/";//内侧准生产
//var serverPath = "https://wxtest.lccb.com.cn"//测试域名环境
//var serverPath = "https://cofinanceapp.lccb.com.cn:88/eleapp/"; //生产地址
//var serverPath = "http://176.16.55.119:8090/perbank/";
//var serverPath = "http://176.16.55.34:8090/perbank/";
var isDemo = false;
var virtualHostPath = "../../../virtualHost/";
var check = true;
var mbank = {
	util: {},
	widget: {},
	data: {},
	field: {},
	type: {}
};
var sid = "";
var scl = "";
var scm = "";
/*var imgDiv = '<div class="loadingDiv"><img src="../../images/loading.gif"/></div>';
document.write(imgDiv);*/
if(!mbank.util.tools) {
	getApiURL = function() {
		if(isDemo) {
			return virtualHostPath;
		} else {
			return serverPath;
		}
	};

	apiSend = function(method, action, params, successCallback, errorCallback, wait) {
		var url = getApiURL() + action;
		//判断是不是登录接口
		if(action == "signIn.do"){
			sid = "";
			scl = "";
			scm = "";
		}else{
			sid = plus.storage.getItem("sessionId");
			scl = plus.storage.getItem("session_channel");
			scm = plus.storage.getItem("session_customerId");
		}
		if(isDemo) {
			console.log('读取本地虚拟报文' + url);
			if(wait === undefined) {
				wait = true;
			}
			if(wait) {
				var waitTitle = '加载中...';
				plus.nativeUI.showWaiting(waitTitle);
			}
			mui.ajax(url, {
				dataType: 'json',
				type: 'get',
				timeout: 100000,
				success: function(data) {
					if(wait) {
						plus.nativeUI.closeWaiting();
					}
					console.log('data:' + JSON.stringify(data));
					successCallback(data);
				}
			});
		} else {
			if(!this.checkNetwork) {
				var network = plus.networkinfo.getCurrentType();
				if(network < 2) {
					plus.nativeUI.toast('您的网络未连接,建议在wifi情况下浏览。');
				} else {
					this._apiSend(method, url, params, successCallback, errorCallback, wait);
				}
			} else {
				this._apiSend(method, url, params, successCallback, errorCallback, wait);
			}
		}
	};
	_apiSend = function(method, url, params, successCallback, errorCallback, wait) {
		if(wait) {
			var waitTitle = '加载中...';
			if('waitTitle' in params) {
				waitTitle = params.waitTitle;
				delete params.waitTitle;
			}
			plus.nativeUI.showWaiting(waitTitle, {
				/*padlock: true*/
			});
			//jQuery(".loadingDiv").show();
		}
		var self = this;
		params = params || {};
		
		var param = {
			"EMP_SID": sid,
			"session_channel": scl,
			"session_customerId": scm,
			"channel": "1501",
			"responseFormat": "JSON"
		};
		params = jQuery.extend(params, param);
		console.log(url + JSON.stringify(params));
		console.log('请求连接' + url);
		mui.ajax(url, {
			headers: {
				'APP_UUID': plus ? plus.device.uuid : '',
				'PLATFORM': plus ? plus.os.name : ''
			},
			data: params,
			dataType: 'json',
			type: method,
			timeout: 50000,
			crossDomain: true,
			success: function(data) {
				console.log('返回信息:' + JSON.stringify(data));
				if(wait) {
					//jQuery(".loadingDiv").hide();
					plus.nativeUI.closeWaiting();
				}
				if(url == getApiURL() + "userSignOff.do"){ //退出接口
					successCallback(data);
					return;
				}
				if(data == null || data == '') {
					plus.nativeUI.alert('后台数据错误', null, '提示', '确定');
					return false;
				}
				if(data.ec == "0" || data.ec == "0000" || data.ec == "00000") {
					if(typeof successCallback == 'function') {
						successCallback(data);
					} else {
						plus.nativeUI.toast('缺少回调函数');
					}
				} else {
					if(data.ec == '20000') {
						mui.alert('会话超时，请重新登录','温馨提示',function(){
							clearSession();
							mui.openWindow({
								url:"_www/views/login/login.html",
								id:"login",
								createNew : true
							});
							setTimeout(function(){
								var wvs = plus.webview.all();
								for(var i=0; i<=wvs.length; i++){
									if(wvs[i].id == "login"){
										console.log("no fresh");
									}else if(wvs[i].id == "loan"){
										console.log("no fresh");
									}else if(wvs[i].id == "account"){
										plus.webview.getWebviewById("account").reload("none");
									}else{
										wvs[i].close("none");
									}
								}
							},1000)
						})
					}else if(typeof errorCallback == 'function') {
						errorCallback(data);
					} else {
						plus.nativeUI.alert(data.em, null, '提示', '确定');
					}
				}
			},
			error: function(xhr, type, errorThrown) {
				console.log(type + '_' + method + '_' + url);
				if(wait) {
					plus.nativeUI.closeWaiting();
				}
				if(errorCallback && errorCallback['error'] && typeof errorCallback['error'] == 'function') {
					console.log('callback');
					errorCallback['error']();
				} else {
					mui.openWindow({
						id : 'error',
						url : '_www/views/error/error.html',
						createNew : true
					})
				}
			}
		});
	};
}

//清除session
function clearSession() {
	plus.storage.setItem("eleCstNo","");
	plus.storage.setItem("session_fileFlowNo","");
	plus.storage.setItem("sessionId","");
	plus.storage.setItem("session_customerId","");
	plus.storage.setItem("session_channel","");
	plus.storage.setItem("session_mobileNo","");
	plus.storage.setItem("session_customerNameCN","");
	plus.storage.setItem("session_certNo","");
	plus.storage.setItem("session_signCertNo","");
	plus.storage.setItem("session_certType","");
	plus.storage.setItem("session_customerLastLogon","");
	plus.storage.setItem("loginState","");
	plus.storage.setItem("session_kehuzhao","");
	plus.storage.setItem("session_lyzhzhao","");
	plus.storage.setItem("session_accState","");
	plus.storage.setItem("keyongye","");
	plus.storage.setItem("zhhuyuee", "");
	plus.storage.setItem("session_openAcctBank", "");
	plus.storage.setItem("temp_lyzhzhao","");
	plus.storage.setItem("session_registFaceRet","");
	plus.storage.setItem("session_openAccFaceRet","");
    plus.storage.setItem("session_bindAccValue","");
    plus.storage.setItem("OCRflag", "");
}

//base64格式
function getBase64Image(img) {
	var canvas = document.createElement("canvas");
	var curwidth = img.width;
	var curheight = img.height;

	if(curwidth > curheight) {
		if(curwidth > 270) {
			curheight = Math.round(curheight *= 270 / curwidth);
			curwidth = 270;
		}
	} else {
		if(curheight > 270) {
			curwidth = Math.round(curwidth *= 270 / curheight);
		}
		curheight = 270;
	}
	canvas.width = curwidth;
	canvas.height = curheight;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, curwidth, curheight);
	var ext = img.src.substring(img.src.lastIndexOf(".") + 1, img.src.lastIndexOf(".") + 4).toLowerCase();
	var dataURL = canvas.toDataURL("image/" + ext, 0.8);
	return dataURL.replace("data:image/png;base64,", "");
}


function exit() {
	var btnArray = ['是', '否'];
	mui.confirm('是否确认退出？', '温馨提示', btnArray, function(e) {
		if(e.index == 0) {
			plus.storage.clear();
			plus.webview.getLaunchWebview().reload();
		} else {

		}
	})
};
