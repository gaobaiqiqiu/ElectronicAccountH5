/**
 * 设置登录密码
 * @param {Object} $
 * @param {Object} workList
 */
(function ($, regist_loginpwd) {
	mui.init();
	var self;
	var tFlag;
	var vertifyBtn;
	var countdown = 60;
	var loginPwd;
	var confirmPwd;
	var verificationP;  //获取验证码
	// var mobileNo;
	var professionalId; //职业
	var professionalUl;
	var professionalUlCh;
	var professionalInp;
	var professionalSpan;
	
	var addressTypeId; //地址类型
	var addressTypeUl;
	var addressTypeUlCh;
	var addressTypeInp;
	var addressTypeSpan;


	var addressD; //详细地址

	var useId; //用途
	var useIdUl;
	var useIdUlCh;
	var useIdInp;
	var useIdSpan;

	var agreementCo; //协议
	var mobileVerifyCode;
	var verifyCodeSequence; //验证码序列号
	var srandNum; //随机因子
	var uuID;
	//初始化页面
	regist_loginpwd.init = function () {
		console.log("regist_loginpwd 加载成功！");
		regist_loginpwd.initData();
		regist_loginpwd.initController();
	};
	//初始化数据
	regist_loginpwd.initData = function () {
		self = plus.webview.currentWebview();
		srandNum = stringSrand();
	};

	//页面控件事件绑定
	regist_loginpwd.initController = function () {
		loginPwd = document.getElementById("loginPwd");
		confirmPwd = document.getElementById("confirmPwd");
		verificationP = document.getElementById("verificationP");
		// mobileNo = document.getElementById("mobileNo");
		//职业
		professionalId = document.getElementById("professionalId");
		professionalUl = document.querySelector('.professional .professional_ul');
		professionalUlCh = professionalUl.children;
		professionalInp = document.querySelector('.professional .professional_inp');
		professionalSpan = professionalInp.children[0];
		//地址类型
		addressTypeId = document.getElementById("addressTypeId");
		addressTypeUl = document.querySelector('.addressType .professional_ul');
		addressTypeUlCh = addressTypeUl.children;
		addressTypeInp = document.querySelector('.addressType .professional_inp');
		addressTypeSpan = addressTypeInp.children[0];


		addressD = document.getElementById("addressD");
		//用途
		useId = document.getElementById("useId");
		useIdUl = document.querySelector('.use .professional_ul');
		useIdUlCh = useIdUl.children;
		useIdInp = document.querySelector('.use .professional_inp');
		useIdSpan = useIdInp.children[0];

		//协议
		agreementCo = document.querySelector(".agreementCo");
		console.log(agreementCo)

		mobileVerifyCode = document.getElementById("mobileVerifyCode");
		vertifyBtn = document.getElementById("vertifyBtn");


		//光标移出
		document.addEventListener("tap", function () {
			loginPwd.value = loginPwd.value.replace("|", "");
			confirmPwd.value = confirmPwd.value.replace("|", "");
		})


		// 职业
		professionalInp.onclick = function(){
			professionalUl.style.display = "block";
			addressTypeUl.style.display = "none";
			useIdUl.style.display = "none";
		}
		for(var i=0;i<professionalUlCh.length;i++){
			professionalUlCh[i].onclick = function(){
				professionalSpan.innerHTML = this.innerHTML;
				professionalUl.style.display = "none";
			}
		}

		//地址类型
		addressTypeInp.onclick = function(){
			professionalUl.style.display = "none";
			addressTypeUl.style.display = "block";
			useIdUl.style.display = "none";
		}
		for(var i=0;i<addressTypeUlCh.length;i++){
			addressTypeUlCh[i].onclick = function(){
				addressTypeSpan.innerHTML = this.innerHTML;
				addressTypeUl.style.display = "none";
			}
		}

		//用途
		useIdInp.onclick = function(){
			professionalUl.style.display = "none";
			addressTypeUl.style.display = "none";
			useIdUl.style.display = "block";
		}
		for(var i=0;i<useIdUlCh.length;i++){
			useIdUlCh[i].onclick = function(){
				useIdSpan.innerHTML = this.innerHTML;
				useIdUl.style.display = "none";
			}
		}

		//协议
		agreementCo.onclick = function(){
			window.location.href = 'regist_agree.html';
		}

		var types = {}
		types[plus.networkinfo.CONNECTION_UNKNOW] = "未知";
		types[plus.networkinfo.CONNECTION_NONE] = "未联网";
		types[plus.networkinfo.CONNECTION_ETHERNET] = "有线网络";
		types[plus.networkinfo.CONNECTION_WIFI] = "Wifi连接";
		types[plus.networkinfo.CONNECTION_CELL2G] = "蜂窝移动2G";
		types[plus.networkinfo.CONNECTION_CELL3G] = "蜂窝移动3G";
		types[plus.networkinfo.CONNECTION_CELL4G] = "蜂窝移动4G";
		var deviceModel = plus.os.name;
		var deviceOS = plus.os.version;
		var netWorking = plus.networkinfo.getCurrentType();
		var deviceName = plus.device.model;
		//设备id
		if (deviceModel == "iOS") {
			uuID = plus.device.uuid;
		} else {
			uuID = plus.device.imei;
		};

		var pwd;
		var pwd1;

		//密码键盘
		loginPwd.addEventListener("click", function () {
			this.value = "|";
			var pwdId = this.id;
			console.log('交易密码')
			// openKeyBoard(pwdId);
		});

		confirmPwd.addEventListener("click", function () {
			this.value = "|";
			var pwdId = this.id;
			//openKeyBoard(pwdId);
		});

		//弹出键盘
		// function openKeyBoard(id) {
		// 	var bId = id;
		// 	var random = srandNum;
		// 	var isNumber = false;
		// 	var confuse = 0;
		// 	var maxLenth = 20;
		// 	var isRegex = false;
		// 	var type = "AES";
		// 	plus.key.showSoftKeybord(bId, random, isNumber, confuse, maxLenth, isRegex, type, function (result) {
		// 		if (result) {
		// 			document.getElementById(bId).value = result.text + "|";
		// 			if (bId == "loginPwd") {
		// 				pwd = result.aes;
		// 			} else if (bId == "confirmPwd") {
		// 				pwd1 = result.aes;
		// 			}
		// 		} else {
		// 			mui.alert(result.message);
		// 		}
		// 	}, function (result) {
		// 		mui.alert("调用插件时发生异常");
		// 	});
		// };

		//获取验证码
		vertifyBtn.addEventListener("click", function () {
			// var reqData = {
			// 	"mobileNo": mobileNo.value, //手机号
			// 	"currentBusinessCode": "91000300"
			// };

			//已发送短信--提示信息显示
			verificationP.style.display = 'block';


			//校验
			//if(checknull(loginPwd.value, "登录密码")) {
			//if(checknull(confirmPwd.value, "确认密码")) {
			//if(checkupdpsd(pwd, pwd1)) {
			if (checkphone(mobileNo.value)) {  //mobileNo需要动态获取
				//ajax
				//apiSend('post', 'getMobileValueCodeNoSession.do', reqData, vertifyFun, vertifyerrFun, true);
				//}
				//}
				//}
			};
		})

		//验证码成功
		function vertifyFun(result) {
			plus.nativeUI.toast("验证码发送成功");
			verifyCodeSequence = result.verifyCodeSequence;
			tFlag = true;
			jQuery("#vertifyBtn").attr("disabled", true);
			//定时器
			var setTime = setInterval(function () {
				if (countdown == 0) {
					clearInterval(setTime);
					jQuery("#vertifyBtn").attr("disabled", false);
					jQuery("#vertifyBtn").text("重新发送");
					countdown = 60;
					return;
				} else {
					jQuery("#vertifyBtn").attr("disabled", true);
					jQuery("#vertifyBtn").text("重新发送(" + countdown + "s)");
					countdown--;
				}
			}, 1000)
		}

		//验证码获取失败
		function vertifyerrFun(result) {
			plus.nativeUI.toast(result.em);
			tFlag = false;
		}

		//下一步
		document.getElementById("nextPage").addEventListener('tap', function () {
			var reqData = {
				"userName": self.userName,
				"certNo": self.certNo,
				"accountNo": self.accountNo,
				"certType": "10",
				"tranType": "1", //交易类型  ---设置
				"loginPwd": pwd,
				"confirmpassword": pwd1,
				// "mobileNo": mobileNo.value,
				"mobileVerifyCode": mobileVerifyCode.value,
				"state": "02",
				"queryType": "dlmm",
				"currentBusinessCode": "91000200",
				"srandNum": srandNum,
				"beginDate": self.startTime,
				"endDate": self.endTime,
				"uuID": uuID,
				"verifyCodeSequence": verifyCodeSequence,
				"OCRflag": self.OCRflag
			};

			//校验
			//if
			// 复选框是否被点击
			// var inputCheck = document.querySelector('.agreementLa input');
			// inputCheck.onclick = function () {
			// 	if (inputCheck.checked != true) {
			// 		console.log(123)
			// 		return;
			// 	}
			// }
			
			//if(checknull(loginPwd.value, "登录密码")) {
			//if(checknull(confirmPwd.value, "确认密码")) {
			//if(checkupdpsd(pwd, pwd1)) {
			if (checkphone(mobileNo.value)) {  //mobileNo需要动态获取
				if (!tFlag) {
					plus.nativeUI.toast("请先点击按钮获取验证码");
					return false;
				} else {
					if (checknull(mobileVerifyCode.value, "验证码")) {
						//ajax
						//apiSend('post', 'eleAccAppUserRegister.do', reqData, pwdsucFun, null, true);
					
					}
					//}
					//}
					//}
				}
			};
		});

		//设置密码成功
		function pwdsucFun(result) {
			//鉴权一类卡
			plus.storage.setItem("temp_lyzhzhao", self.accountNo);
			//默认登录
			var reqData = {
				"loginId": self.certNo,
				"loginPwd": pwd,
				"srandNum": srandNum,
				"currentBusinessCode": "91000100",
				"deviceName": deviceName,
				"uuID": uuID,
				"deviceType": deviceModel,
				"OSVersion": deviceOS,
				"netWorking": types[netWorking],
				"ip": "",
				"checkCode": ""
			};
			//apiSend('post', 'signIn.do', reqData, loginsucFun, null, false);
		}

		//登录成功回调
		function loginsucFun(result) {
			plus.storage.setItem("eleCstNo", result.eleCstNo);
			plus.storage.setItem("session_fileFlowNo", result.session_fileFlowNo);
			plus.storage.setItem("sessionId", result.sessionId);
			plus.storage.setItem("session_customerId", result.session_customerId);
			plus.storage.setItem("session_channel", result.session_channel);
			// plus.storage.setItem("session_mobileNo", result.mobileNoshow);
			plus.storage.setItem("session_customerNameCN", result.customerNameCNshow);
			plus.storage.setItem("session_certNo", result.certNoshow);
			plus.storage.setItem("session_signCertNo", self.certNo);
			plus.storage.setItem("session_certType", result.session_certType);
			plus.storage.setItem("session_customerLastLogon", result.session_customerLastLogon);
			plus.storage.setItem("session_kehuzhao", result.kehuzhaoshow);
			plus.storage.setItem("session_lyzhzhao", result.lyzhzhaoshow);
			plus.storage.setItem("session_accState", result.accState);
			plus.storage.setItem("session_registFaceRet", result.registFaceRet);
			plus.storage.setItem("session_openAccFaceRet", result.openAccFaceRet);
			plus.storage.setItem("OCRflag", result.OCRflag);
			plus.storage.setItem("loginState", "true");
			mui.openWindow({
				id: 'regist_success',
				url: 'regist_success.html',
				waiting: {
					autoShow: false
				},
				extras: {
					certNo: self.certNo
				}
			});
		}
	}
}(mui, window.regist_loginpwd = {}));