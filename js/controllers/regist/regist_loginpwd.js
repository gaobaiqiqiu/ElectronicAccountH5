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
	var professionalIdJson; //对象
	var addressTypeId; //地址类型
	var addressTypeIdJson; //对象
	var addressD; //详细地址
	var useId; //用途
	var useIdJson; //对象


	// var mobileVerifyCode;  
	// var verifyCodeSequence; //验证码序列号
	var srandNum; //随机因子
	var inputCheck; //复选框
	var uuID;
	var kehuzhao; //开户成功返回的账号
	var em;  //开户失败的提示

	var dizhleix; //地址类型的value值
	var zhiyeeee; //职业的value值
	var zhhuyotu; //用途的value值

	var userName; //用户名
	var certNo; //证件号
	var accountNo; //账号
	var shjihaom; //手机号
	var compareResult;  //相似度的对比
	var yanzhema;  //手机验证码
	var yanzmals;  //手机验证码流水
	var jiaoymma;  //校验密码


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

		// 复选框
		inputCheck = document.querySelector('#clickInp');

		// 获取验证码
		vertifyBtn = document.getElementById("vertifyBtn");

		// 职业
		professionalId = document.querySelector('.professional input')
		professionalIdJson = {
			"国家机关、党群组织、企业、事业单位负责人": '000',
			"专业技术人员": '100',
			"办事人员和有关人员": '300',
			"商业、服务业人员": '400',
			"农、林、牧、渔、水利业生产人员": '500',
			"生产、运输设备操作人员及有关人员": '600',
			"军人": 'X00',
			"不便分类的其他从业人员": 'Y00',
			"自由职业": 'Y01',
			"家庭主妇": 'Y02',
			"学生": 'Y03',
			"退休": 'Y04'
		}
		//地址类型
		addressTypeId = document.querySelector('.addressType input')
		addressTypeIdJson = {
			"住宅地址": '10',
			"单位地址（外汇专用）": '20',
			"联系（通讯）地址": '30',
			"综合账单地址": '40',
			"信用卡账单地址": '50',
			"英文地址": '60',
			"住宅地址（信用卡专用）": '70',
			"单位地址（信用卡专用）": '80',
			"单位全称（信用卡专用）": '90',
			"营业地址": 'A0',
			"注册地址": 'B0'
		}
		// 详细地址
		addressD = document.getElementById("addressD");
		// 用途
		useId = document.querySelector('.use input')
		useIdJson = {
			"代发工资": '4001',
			"储蓄": '4002',
			"社保医疗": '4003',
			"投资理财": '4004',
			"偿还贷款": '4005',
			"处理日常开支": '4006'
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


		//获取验证码
		vertifyBtn.addEventListener("click", function () {
			var shoujihm = shjihaom + "";
			console.log(shoujihm)
			var shjihaomLeft = shoujihm.Substring(0, 3);
			var shjihaomRight = shoujihm.Substring(shoujihm.length - 4);
			console.log(shjihaomLeft, shjihaomRight)
			//已发送短信--提示信息显示
			verificationP.children[0].innerHTML = shjihaomLeft + "****" + shjihaomRight;
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
			// 职业类型
			for (var item in professionalIdJson) {
				if (item == professionalId.value) {
					zhiyeeee = professionalIdJson[item];
					return true;
				} else {
					plus.nativeUI.toast("请选择职业类型");
					return false;
				}
			}
			//地址类型
			for (var item in addressTypeIdJson) {
				if (item == addressTypeId.value) {
					dizhleix = addressTypeIdJson[item];
					return true;
				} else {
					plus.nativeUI.toast("请选择地址类型");
					return false;
				}
			}
			//用途
			for (var item in useIdJson) {
				if (item == useId.value) {
					zhhuyotu = useIdJson[item];
					return true;
				} else {
					plus.nativeUI.toast("请选择用途");
					return false;
				}
			}
			// 详细地址
			if (addressD.value == '') {
				plus.nativeUI.toast("详细地址不能为空");
				return false;
			}
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

			if (checknull(loginPwd.value, "登录密码")) {
				if (checknull(confirmPwd.value, "确认密码")) {
					if (checkupdpsd(loginPwd.value, confirmPwd.value)) {
						if (checkphone(shjihaom)) {  //mobileNo需要动态获取
							if (!tFlag) {
								plus.nativeUI.toast("请先点击按钮获取验证码");
								return false;
							} else {
								if (checknull(yanzhema, "验证码")) {
									// 复选框是否被点击
									if (inputCheck.checked != true) {
										plus.nativeUI.toast("未同意协议");
										return false;
									}
									if (sb(passGuard1, passGuard2)) {
										//只能调一次，再次调用passGuard1.getLength()的值为0，会弹出提示：密码不能为空！
										jiaoymma = passGuard1.getOutput();

										// 开户
										var reqData = {
											"zhjnzlei": "10",
											"zhjhaoma": certNo,
											"kehuzhwm": userName,
											"kehuhaoo": "",
											"jiaoymma": jiaoymma,
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
											"zhhuyotu": zhhuyotu
										}
										apiSend('post', 'eleAccOpneAccForMobile.do', reqData, loginsucFun, loginfailFun, true);
									}
								}
							}
						}
					}
				}
			}
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