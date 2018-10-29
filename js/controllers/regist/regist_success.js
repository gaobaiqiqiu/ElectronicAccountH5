/**
 * 注册成功
 * @param {Object} $
 * @param {Object} workList
 */
(function($, regist_success) {
	mui.init();
	var self;
	var kehuzhao;
	var srandNum; //随机因子
	//初始化页面
	regist_success.init = function() {
		console.log("regist_success 加载成功！");
		regist_success.initData();
		regist_success.initController();
	};

	//初始化数据
	regist_success.initData = function() {
		self = plus.webview.currentWebview();
		self.setStyle({
			popGesture: 'none'
		});

		//判断入口
		if(self.state == "open") {
			jQuery(".regist_ok").hide();
		} else {
			setTimeout(function() {
				plus.webview.getWebviewById("regist").close("none");
				plus.webview.getWebviewById("regist_loginpwd").close("none");
				checkSign();
			}, 500)
		}
	};

	//页面控件事件绑定
	regist_success.initController = function() {
		//重置返回
		mui.back = function() {
			mui.openWindow({
				id: 'index',
				url: '../index/index.html',
				createNew: true
			})
		}

		//cfc
		function checkSign() {
			var userName = plus.storage.getItem("session_customerNameCN").replace("*", "");
			var idNumber = self.certNo;
			var idType = "0";
			var phoneNumber = plus.storage.getItem("session_mobileNo");
			phoneNumber = phoneNumber.replace("****", "0000");
			plus.PluginManger.getHKERandom(userName, idNumber, idType, phoneNumber, function(result) {
				var reqData = {
					"random": result,
					"currentBusinessCode": "91100000"
				};
				apiSend("post", "getCFCASignValue.do", reqData, function(res) {
					plus.PluginManger.downloadHKECer(res.p1SignValue, function(re) {
						if(re.resultCode == "0") {
							var reqdata = {
								"currentBusinessCode": "91100000",
								"certEncode": re.resultMsg.certEncode,
								"serialNumber": re.resultMsg.serialNumber,
								"subjectDN": re.resultMsg.subjectDN,
								"subjectCN": re.resultMsg.subjectCN,
								"notBefore": re.resultMsg.notBefore,
								"notAfter": re.resultMsg.notAfter
							};
							apiSend("post", "modifySignData.do", reqdata, function() {}, function() {}, false);
						} else {

						}
					}, function(err) {
						console.log(JSON.stringify(err))
					});
				}, function() {}, false);
			}, function(error) {});
		}

		//添加账户
		document.getElementById("knowOk").addEventListener("tap", function() {
			if(!jQuery("#chk").prop("checked")) {
				mui.alert("请您阅读并勾选同意《开户协议》");
			} else {
				var radioId = jQuery(".regist_pep_radio input:checked").attr("id");
				if(radioId == "no"){
					mui.alert("根据国税总局《非居民金融账户涉税信息尽职调查管理办法》的要求，我行现对非居民新开客户进行涉税值息收集，暂不支持“仅为中国内地税居民”以外的其他国家(地区)税收居民进行开户，请至廊坊银行网点办理。")
					return false
				}
				if(jQuery(".regist_cardlist_num").length >= "4") {
					mui.alert("您的电子账户数量已达到允许开立的最大数量,请点击绑卡按钮进行绑定!");
				} else {
					mui.openWindow({
						id: 'addaccount_facedect',
						url: '../account/addaccount/addaccount_facedect.html',
						createNew: true
					});
				}
			}
		});

		//协议
		document.getElementById("agreeMent").addEventListener("tap", function() {
			mui.openWindow({
				id: 'addaccount_agreement',
				url: '../account/addaccount/addaccount_agreement.html',
				waiting: {
					autoShow: false
				}
			});
		})
		
		//税收居民
		document.getElementById("registAgree").addEventListener("tap", function() {
			mui.openWindow({
				id: 'regist_agree',
				url: 'regist_agree.html',
				waiting: {
					autoShow: false
				}
			})
		});

		//查询下挂
		queryAccount()

		function queryAccount() {
			var reqData = {
				"currentBusinessCode": "91000500"
			};
			//ajax
			apiSend('post', 'eleAccQuery.do', reqData, queryFun, null, true);
		}

		//查询下挂成功
		function queryFun(result) {
			jQuery(".form_item").show();
			var accountList = result.eleAccountList;
			var accountLength = accountList.length;
			var temp = '';
			var tmcard = '';
			if(accountLength == "0") {
				jQuery(".resigt_ok_tip").text("您已注册成功，请进行电子账户开户操作");
				return;
			}
			jQuery(".resigt_ok_tip").text("您已注册成功，请选择想要添加的卡");
			for(var i = 0; i < accountLength; i++) {
				tmcard = accountList[i].kehuzhao.replace(/\s/g,'').replace(/(.{4})/g,"$1 ");
				temp += '<ul class="regist_card_item">';
				temp += '<li class="regist_cardlist_num">' + tmcard + '</li>';
				if(accountList[i].zhhuztai == "A") {
					temp += '<li class="regist_cardlist_name">正常</li>';
				} else if(accountList[i].zhhuztai == "D") {
					temp += '<li class="regist_cardlist_name">久悬户</li>';
				} else if(accountList[i].zhhuztai == "E") {
					temp += '<li class="regist_cardlist_name">封闭冻结</li>';
				} else if(accountList[i].zhhuztai == "F") {
					temp += '<li class="regist_cardlist_name">金额冻结</li>';
				} else if(accountList[i].zhhuztai == "I") {
					temp += '<li class="regist_cardlist_name">转营业外收入</li>';
				}
				temp += '<li class="regist_cardlist_add">绑定</li>';
				temp += '</ul>';
			}
			jQuery(".regist_card_list").append(temp);

			//continue
			continued()
		}

		function continued() {
			var pwd;

			//弹出键盘
			function openKeyBoard() {
				srandNum = stringSrand();
				var bId = "realInput";
				var random = srandNum;
				var isNumber = true;
				var confuse = 0;
				var maxLenth = 6;
				var isRegex = false;
				var type = "AES";
				plus.PluginManger.keyboardShow(bId, random, isNumber, confuse, maxLenth, isRegex, type, function(result) {
					if(result) {
						document.getElementById(bId).value = result.text;
						pwd = result.aes;

						var real_str = document.getElementById(bId).value;
						for(var i = 0; i < maxLenth; i++) {
							jQuery(".bogusInput input").eq(i).val(real_str[i] ? real_str[i] : "");
						}
						if(real_str.length == maxLenth) {
							plus.PluginManger.keyboardHidden();
							jQuery(".password_container").fadeOut();
							setTimeout(function() {
								eleCheck()
							}, 500)
						}
					} else {
						mui.alert(result.message);
					}
				}, function(result) {
					mui.alert("调用插件时发生异常");
				});
			};

			var iptHeight;
			//添加下挂账户
			mui(".regist_card_item").on("tap", ".regist_cardlist_add", function() {
				var cardNum = jQuery(this).siblings(".regist_cardlist_num").text();
				kehuzhao = cardNum.replace(/\s/g, '');
				//自动打开软键盘，搜索框获取焦点
				setTimeout(function() {
					jQuery(".password_container").fadeIn();
					//弹出密码框自适应宽高
					iptHeight = jQuery(".inputBoxContainer .bogusInput input").width();
					jQuery(".inputBoxContainer .bogusInput input").height(iptHeight);
					jQuery(".realInput").height(iptHeight);
					jQuery(".under_card_num").text(cardNum);
					openKeyBoard();
				}, 200);
			});

			//输入框调键盘
			document.getElementById("realInput").addEventListener("click", function() {
				if(openKeyBoard()) {
					plus.PluginManger.keyboardHidden();
				} else {
					jQuery(".realInput").val("");
					jQuery(".inputBoxContainer .bogusInput input").val("");
					openKeyBoard()
				}
			})

			//核算交易密码
			function eleCheck() {
				var reqData = {
					"currentBusinessCode": "91001000",
					"kehuzhao": plus.PluginManger.getUserInfoSync(kehuzhao),
					"srandNum": srandNum,
					"transactionPwd": pwd
				};
				//ajax
				apiSend('post', 'checkEleAccPwd.do', reqData, checkFun, checkErr, true);
			}
			//成功回调
			function checkFun(result) {
				plus.PluginManger.keyboardHidden();
				mui.toast("添加账户成功");
				//执行查询账户
				plus.storage.setItem("session_openAccFaceRet", "90");
				plus.webview.getWebviewById("account").evalJS("account.initController.query()");
				plus.webview.getWebviewById("account").show();
				plus.navigator.setStatusBarStyle('light');
			}

			//失败回调
			function checkErr(err) {
				if(err.ec == "Comm.E0023") {
					plus.PluginManger.keyboardHidden();
					mui.alert(err.em, function() {
						jQuery(".realInput").val("");
						jQuery(".inputBoxContainer .bogusInput input").val("");
						setTimeout(function() {
							openKeyBoard();
							jQuery(".password_container").fadeIn();
						}, 500)
					});
				} else {
					plus.PluginManger.keyboardHidden();
					mui.alert(err.em, function() {
						jQuery(".realInput").blur().val("");
						jQuery(".inputBoxContainer .bogusInput input").val("");
					})
				}
			}

			//关闭密码层
			document.getElementById("closeTrade").addEventListener("click", function() {
				plus.PluginManger.keyboardHidden();
				jQuery(".realInput").blur().val("");
				jQuery(".inputBoxContainer .bogusInput input").val("");
				jQuery(".password_container").fadeOut();
			})

			//交易密码找回
			document.getElementById("forgetPwd").addEventListener("click", function() {
				mui.openWindow({
					id: 'tradepwd_found',
					url: '../account/actmanage/tradepwd_found.html',
					waiting: {
						autoShow: false
					},
					extras: {
						kehuzhao: kehuzhao,
						isBindCard: false
					}
				});
				plus.PluginManger.keyboardHidden();
				jQuery(".realInput").blur().val("");
				jQuery(".inputBoxContainer .bogusInput input").val("");
				jQuery(".password_container").fadeOut();
			})
		}
	}
}(mui, window.regist_success = {}));