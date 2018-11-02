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
	// var professionalId; //职业
	var professionalUl;
	var professionalUlCh;
	var professionalInp;
	var professionalSpan;

	// var addressTypeId; //地址类型
	var addressTypeUl;
	var addressTypeUlCh;
	var addressTypeInp;
	var addressTypeSpan;


	var addressD; //详细地址

	// var useId; //用途
	var useIdUl;
	var useIdUlCh;
	var useIdInp;
	var useIdSpan;

	var agreementCo; //协议
	var mobileVerifyCode;
	// var verifyCodeSequence; //验证码序列号
	var srandNum; //随机因子
	var inputCheck; //复选框
	var uuID;
	var kehuzhao; //开户成功返回的账号
	var em;  //开户失败的提示

	var dizhleix; //地址类型的value值
	var zhiyeeee; //职业的value值

	var userName; //用户名
	var certNo; //证件号
	var accountNo; //账号
	var shjihaom; //手机号
	var compareResult;  //相似度的对比
	var yanzhema;  //手机验证码
	var yanzmals;  //手机验证码流水


	//初始化页面
	regist_loginpwd.init = function () {
		console.log("regist_loginpwd 加载成功！");
		regist_loginpwd.initData();
		regist_loginpwd.initController();
	};
	//初始化数据
	regist_loginpwd.initData = function () {
		self = plus.webview.currentWebview();
		userName = self.userName; //用户名
		certNo = self.certNo; //证件号
		accountNo = self.accountNo; //账号
		shjihaom = self.shjihaom; //手机号
		console.log(shjihaom)
		compareResult = self.compareResult; //相似度的对比

		srandNum = stringSrand();
	};

	//页面控件事件绑定
	regist_loginpwd.initController = function () {
		loginPwd = document.getElementById("loginPwd");
		confirmPwd = document.getElementById("confirmPwd");
		verificationP = document.getElementById("verificationP");
		// mobileNo = document.getElementById("mobileNo");
		//职业
		// professionalId = document.getElementById("professionalId");
		professionalUl = document.querySelector('.professional .professional_ul');
		professionalUlCh = professionalUl.children;
		professionalInp = document.querySelector('.professional .professional_inp');
		professionalSpan = professionalInp.children[0];
		//地址类型
		// addressTypeId = document.getElementById("addressTypeId");
		addressTypeUl = document.querySelector('.addressType .professional_ul');
		addressTypeUlCh = addressTypeUl.children;
		addressTypeInp = document.querySelector('.addressType .professional_inp');
		addressTypeSpan = addressTypeInp.children[0];

		// 复选框
		inputCheck = document.querySelector('.agreementLa input');


		addressD = document.getElementById("addressD");
		//用途
		// useId = document.getElementById("useId");
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
		professionalInp.onclick = function () {
			professionalUl.style.display = "block";
			addressTypeUl.style.display = "none";
			useIdUl.style.display = "none";
		}
		for (var i = 0; i < professionalUlCh.length; i++) {
			professionalUlCh[i].onclick = function () {
				zhiyeeee = this.attributes[0].nodeValue; 
				console.log(this.attributes[0].nodeValue)
				professionalSpan.innerHTML = this.innerHTML;
				professionalUl.style.display = "none";
			}
		}

		//地址类型
		addressTypeInp.onclick = function () {
			professionalUl.style.display = "none";
			addressTypeUl.style.display = "block";
			useIdUl.style.display = "none";
		}
		for (var i = 0; i < addressTypeUlCh.length; i++) {
			addressTypeUlCh[i].onclick = function () {
				dizhleix = this.attributes[0].nodeValue;
				console.log(this.attributes[0].nodeValue)
				addressTypeSpan.innerHTML = this.innerHTML;
				addressTypeUl.style.display = "none";
			}
		}

		//用途
		useIdInp.onclick = function () {
			professionalUl.style.display = "none";
			addressTypeUl.style.display = "none";
			useIdUl.style.display = "block";
		}
		for (var i = 0; i < useIdUlCh.length; i++) {
			useIdUlCh[i].onclick = function () {
				useIdSpan.innerHTML = this.innerHTML;
				useIdUl.style.display = "none";
			}
		}

		//协议
		agreementCo.onclick = function () {
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
			//已发送短信--提示信息显示
			verificationP.children[0].innerHTML = shjihaom;
			verificationP.style.display = 'block';

			// 验证码
			var reqData = {
				"shjihaom": shjihaom, //手机号
				"currentBusinessCode": ''
			};
			apiSend('post', 'elesGetMobileCode.do', reqData, vertifyFun, vertifyerrFun, true);
			// 验证码
			//验证码成功
			function vertifyFun(result) {
				plus.nativeUI.toast("验证码发送成功");
				// verifyCodeSequence = result.verifyCodeSequence;
				// console.log(verifyCodeSequence)
				yanzhema = result.yanzhema;
				yanzmals = result.yanzmals;
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
				plus.nativeUI.toast('获取验证码失败');
				tFlag = false;
			}
		})



		//下一步
		document.getElementById("nextPage").addEventListener('tap', function () {
			//校验
			function timer() {
				var date = new Date();
				var year = date.getFullYear(); //获取当前年份
				var mon = date.getMonth() + 1; //获取当前月份
				var da = date.getDate(); //获取当前日
				var h = date.getHours(); //获取小时
				var m = date.getMinutes(); //获取分钟
				var s = date.getSeconds(); //获取秒
				mon < 10 ? mon = "0" + mon : mon;
				da < 10 ? da = "0" + da : da;
				h < 10 ? h = "0" + h : h;
				m < 10 ? m = "0" + m : m;
				s < 10 ? s = "0" + s : s;
				return year.toString() + mon + da.toString() + h + m.toString() + s;
			}


			// var reqData = {
			// 	"zhjnzlei": "10",
			// 	"zhjhaoma": "542626198001019994",
			// 	"kehuzhwm": "个网十",
			// 	"kehuhaoo": "",
			// 	"jiaoymma": "UYAutuI2bnj3uEEAbGBk0Q==",
			// 	"zhshuxin": "002",
			// 	"lyzhzhao": "6230730028402676",
			// 	"lyzhumcc": "",
			// 	"fkzhzftj": "",
			// 	"shjihaom": "13900000010",
			// 	"shifoubz": "1",
			// 	"zhahuhmc": "",
			// 	"kaihjigo": "",
			// 	"yanzhema": yanzhema,
			// 	"channelCode": "030",
			// 	"jiyijigo": "601108",
			// 	"jiyiguiy": "DZ0007",
			// 	"currentBusinessCode": "12000043",
			// 	"batchNo": "20181029_652_558_1438EB4D-E764-504E-8072-23DFD4959B2F-1",
			// 	"transferTime": timer(),
			// 	"picturePath1": "",
			// 	"picturePath2": "",
			// 	"picturePath3": "",
			// 	"picturePath4": "",
			// 	"picturePath5": "",
			// 	"Descrip": "00",
			// 	"fileState": compareResult,
			// 	"fileFlowNo": "SYSLOG201810290043312204",
			// 	"yanzmals": "",
			// 	"dizhleix": "30",
			// 	"dizhneir": addressD.value,
			// 	"zhiyeeee": "300",
			// 	"srandNum": "sz5sbgcipdg85vvlcxnm6cq59yzg34f8",
			// 	"lancreny": "",
			// 	"lancrymc": "",
			// 	"shouyren": "个网十",
			// 	"zhhuyotu": "代发工资"
			// }

			//校验

			// 详细地址
			if (addressD.value == '') {
				plus.nativeUI.toast("详细地址不能为空");
				return false;
			}

			if (checknull(loginPwd.value, "登录密码")) {
				if (checknull(confirmPwd.value, "确认密码")) {
					if (checkupdpsd(pwd, pwd1)) {
						if (checkphone(shjihaom)) {  //mobileNo需要动态获取
							if (!tFlag) {
								plus.nativeUI.toast("请先点击按钮获取验证码");
								return false;
							} else {
								if (checknull(mobileVerifyCode.value, "验证码")) {
									// 复选框是否被点击
									if (inputCheck.checked != true) {
										plus.nativeUI.toast("未同意协议");
										return false;
									}
									//ajax
									//apiSend('post', 'eleAccAppUserRegister.do', reqData, pwdsucFun, null, true);
									// 开户
									var reqData = {
										"zhjnzlei": "10",
										"zhjhaoma": certNo,
										"kehuzhwm": userName,
										"kehuhaoo": "",
										"jiaoymma": "UYAutuI2bnj3uEEAbGBk0Q==",
										"zhshuxin": "002",
										"lyzhzhao": accountNo,
										"lyzhumcc": "",
										"fkzhzftj": "",
										"shjihaom": shjihaom,
										"shifoubz": "1",
										"zhahuhmc": "",
										"kaihjigo": "",
										"yanzhema": yanzhema,
										"channelCode": "030",
										"jiyijigo": "601108",
										"jiyiguiy": "DZ0007",
										"currentBusinessCode": "12000043",
										"batchNo": "20181029_652_558_1438EB4D-E764-504E-8072-23DFD4959B2F-1",
										"transferTime": timer(),
										"picturePath1": "",
										"picturePath2": "",
										"picturePath3": "",
										"picturePath4": "",
										"picturePath5": "",
										"Descrip": "00",
										"fileState": compareResult,
										"fileFlowNo": "SYSLOG201810290043312204",
										"yanzmals": yanzmals,
										"dizhleix": dizhleix,
										"dizhneir": addressD.value,
										"zhiyeeee": zhiyeeee,
										"srandNum": "sz5sbgcipdg85vvlcxnm6cq59yzg34f8",
										"lancreny": "",
										"lancrymc": "",
										"shouyren": userName,
										"zhhuyotu": "代发工资"
									}
									apiSend('post', 'eleAccOpneAccForMobile.do', reqData, loginsucFun, loginfailFun, true);

								}
							}
						}
					}
				}
			};
		});

		//设置密码成功
		// function pwdsucFun(result) {
		// 	//鉴权一类卡
		// 	plus.storage.setItem("temp_lyzhzhao", self.accountNo);
		// 	console.log('成功')
		// 	//默认登录
		// 	var reqData = {
		// 		"loginId": self.certNo,
		// 		"loginPwd": pwd,
		// 		"srandNum": srandNum,
		// 		"currentBusinessCode": "91000100",
		// 		"deviceName": deviceName,
		// 		"uuID": uuID,
		// 		"deviceType": deviceModel,
		// 		"OSVersion": deviceOS,
		// 		"netWorking": types[netWorking],
		// 		"ip": "",
		// 		"checkCode": ""
		// 	};
		// 	//apiSend('post', 'signIn.do', reqData, loginsucFun, null, false);
		// }

		//登录成功回调
		function loginsucFun(result) {
			kehuzhao = result.kehuzhao
			// plus.storage.setItem("eleCstNo", result.eleCstNo);
			// plus.storage.setItem("session_fileFlowNo", result.session_fileFlowNo);
			// plus.storage.setItem("sessionId", result.sessionId);
			// plus.storage.setItem("session_customerId", result.session_customerId);
			// plus.storage.setItem("session_channel", result.session_channel);
			// // plus.storage.setItem("session_mobileNo", result.mobileNoshow);
			// plus.storage.setItem("session_customerNameCN", result.customerNameCNshow);
			// plus.storage.setItem("session_certNo", result.certNoshow);
			// plus.storage.setItem("session_signCertNo", self.certNo);
			// plus.storage.setItem("session_certType", result.session_certType);
			// plus.storage.setItem("session_customerLastLogon", result.session_customerLastLogon);
			// plus.storage.setItem("session_kehuzhao", result.kehuzhaoshow);
			// plus.storage.setItem("session_lyzhzhao", result.lyzhzhaoshow);
			// plus.storage.setItem("session_accState", result.accState);
			// plus.storage.setItem("session_registFaceRet", result.registFaceRet);
			// plus.storage.setItem("session_openAccFaceRet", result.openAccFaceRet);
			// // plus.storage.setItem("OCRflag", result.OCRflag);
			// plus.storage.setItem("loginState", "true");

			mui.openWindow({
				id: 'regist_success',
				url: 'regist_success.html',
				waiting: {
					autoShow: false
				},
				extras: {
					kehuzhao: kehuzhao
				}
			});
		}
		//登录失败回调
		function loginfailFun(result) {
			em = result.em;
			mui.openWindow({
				id: 'regist_fail',
				url: 'regist_fail.html',
				waiting: {
					autoShow: false
				},
				extras: {
					em: em
				}
			});
		}
	}
}(mui, window.regist_loginpwd = {}));