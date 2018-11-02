/**
 * 注册
 * @param {Object} $
 * @param {Object} workList
 */
(function ($, regist) {
	mui.init();
	var self;
	var userName; //用户名
	var certNo; //证件号
	var startDate; //证件起始日
	var endDate; //证件到期日
	var accountNo; //卡号
	var shjihaom; //手机号
	var uuID;
	var fileInputName;
	var baseStr;
	var imgWidth;
	var bitmap = null;
	var OCRflag;

	var pictureFlowNo1;
	// var pictureFlowNo2;
	// var pictureFlowNo3;
	var compareResult;  //相似度的对比
	var returnFlag;  // 鉴权返回

	//初始化页面
	regist.init = function () {
		console.log("regist 加载成功！");
		regist.initData();
		regist.initController();
	};

	//初始化数据
	regist.initData = function () {
		self = plus.webview.currentWebview();

		plus.navigator.setStatusBarStyle('dark'); //状态栏
		imgWidth = jQuery(".upload_img").innerWidth();
		jQuery(".upload_img").height(imgWidth / 1.6);
	};


	//页面控件事件绑定
	regist.initController = function () {
		bitmap = new plus.nativeObj.Bitmap("test");
		userName = document.getElementById("userName");
		certNo = document.getElementById("certNo");
		endDate = document.getElementById("endDate");
		startDate = document.getElementById("startDate");
		accountNo = document.getElementById("accountNo");
		shjihaom = document.getElementById('mobileNo');
		if (plus.os.name == "iOS") {
			uuID = plus.device.uuid;
		} else {
			uuID = plus.device.imei;
		}
		console.log(userName.value)
		//监听侧滑
		self.addEventListener('popGesture', function (e) {
			if (e.type == "end" && !e.result) {
				plus.navigator.setStatusBarStyle('dark');
			} else {
				plus.navigator.setStatusBarStyle('light');
			}
		})

		//重置返回
		var old_back = mui.back;
		mui.back = function () {
			plus.navigator.setStatusBarStyle('light');
			old_back();
		}

		//图片上传
		mui(".upload_con").on("tap", ".upload_img", function () {
			var imgId = this.id;
			switch (imgId) {
				case "authorY":
					fileInputName = "filePathName1";
					break;
				case "authorN":
					fileInputName = "filePathName2";
					break;
				case "authorH":
					fileInputName = "filePathName3";
					getImage(imgId, fileInputName);
					return;
					break;
				case "bankY":
					fileInputName = "filePathName4";
					break;
				default:
					break
			};
			if (mui.os.plus) {
				var btn = [{
					title: "从相册选择"
				}, {
					title: "拍照"
				}];

				plus.nativeUI.actionSheet({
					title: "资料上传",
					cancel: "取消",
					buttons: btn
				}, function (b) {
					switch (b.index) {
						case 0:
							break;
						case 1:
							switch (fileInputName) {
								case "filePathName1":
									scanAuthY();
									break;
								case "filePathName2":
									scanAuthN();
									break;
								case "filePathName4":
									scanBankY();
									break;
								default:
									break
							};
							break;
						case 2:
							mui.toast('建议横向拍摄');
							getImage(imgId, fileInputName);
							break;
						default:
							break
					}
				})
			}
		})

		//身份证正面扫描
		function scanAuthY() {
			plus.gallery.pick(function (e) {
				var c = plus.camera.getCamera();
				console.log()
				plus.io.resolveLocalFileSystemURL(e, function (entry) {
					var s = entry.toLocalURL() + "?version=" + new Date().getTime();
					picZip(s, "authorY", "fileInputName1")
				}, {
						filter: "image",
						multiple: true
					});
			})

		}
		//身份证反面扫描
		function scanAuthN() {
			plus.gallery.pick(function (e) {
				var c = plus.camera.getCamera();
				console.log()
				plus.io.resolveLocalFileSystemURL(e, function (entry) {
					var s = entry.toLocalURL() + "?version=" + new Date().getTime();
					picZip(s, "authorN ", "fileInputName2")
				}, {
						filter: "image",
						multiple: true
					});
			})
		}

		//银行卡正面
		function scanBankY() {
			plus.gallery.pick(function (e) {
				var c = plus.camera.getCamera();
				console.log()
				plus.io.resolveLocalFileSystemURL(e, function (entry) {
					var s = entry.toLocalURL() + "?version=" + new Date().getTime();
					picZip(s, "bankY", "fileInputName4")
				}, {
						filter: "image",
						multiple: true
					});
			})
		}

		//拍照
		function getImage(id, fileInputName) {
			var cmr = plus.navigator.checkPermission('CAMERA');
			if (cmr == "denied") {
				mui.alert("请先开启系统拍照权限", function () {
					if (mui.os.ios) {
						plus.runtime.launchApplication({
							action: 'App-Prefs:root'
						}, function (e) {
							console.log(JSON.stringify(e));
						})
					} else {
						var main = plus.android.runtimeMainActivity();
						var Intent = plus.android.importClass("android.content.Intent");
						var mIntent = new Intent('android.settings.SETTINGS');
						main.startActivity(mIntent);
					}
				})
			} else {
				mui.toast('建议横向拍摄');
				var c = plus.camera.getCamera();
				c.captureImage(function (e) {

					plus.io.resolveLocalFileSystemURL(e, function (entry) {
						var s = entry.toLocalURL() + "?version=" + new Date().getTime();
						picZip(s, id, fileInputName);
					}, function (e) {
						console.log("读取拍照文件错误：" + e.message);
					});
				}, function (s) {
					console.log("error" + s);
				}, {
						filename: "_doc/author.jpg"
					})
			}
		}

		//压缩
		function picZip(img, id, fileInputName) {
			plus.zip.compressImage({
				src: img,
				dst: '_doc/sauthor.jpg',
				width: '908px',
				overwrite: true,
				format: 'jpg',
				quality: 100
			},
				function (e) {
					var dUrl = e.target + "?version=" + new Date().getTime();
					bitmap.load(dUrl, function () {
						var image = new Image();
						image.crossOrigin = '';
						console.log(bitmap.toBase64Data() + '111')
						image.src = bitmap.toBase64Data();
						image.onload = function () {
							baseStr = bitmap.toBase64Data().substring(bitmap.toBase64Data().indexOf(",") + 1);
							bitmap.recycle(); //回收内存
							if (image.height > image.width) {
								image.height = 2520;
								image.width = 1890;
							} else {
								image.width = 2520;
								image.height = 1890;
							}
							getBase64Image(image, id, fileInputName, baseStr);
							console.log(id)
							console.log(fileInputName)
							console.log(baseStr)
						}
					})
				},
				function (err) {
					plus.nativeUI.alert('未知错误！', function () {
						mui.back();
					});
				})
		}

		//base64格式
		function getBase64Image(img, id, fileInputName, baseStr) {
			var canvas = document.createElement("canvas");
			var scale = img.height / img.width;
			canvas.width = imgWidth;
			canvas.height = imgWidth / 1.6;
			var x = (canvas.width - (canvas.height / scale)) / 2;
			var ext = img.src.substring(img.src.lastIndexOf(".") + 1, img.src.lastIndexOf(".") + 4).toLowerCase();
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, x, 0, canvas.height / scale, canvas.height);
			var base64 = canvas.toDataURL("image/" + ext, 1);


			//上传图片--->联网核查
			var reqData = {
				"fileInputName": fileInputName,
				"baseStr": baseStr,
				"tranType": "0",
				"certNo": "410101197801010074",
				"pictureFlowNo1": '',
				"pictureFlowNo2": ''
			}
			apiSend('post', 'eleAccAppUpLoadImage.do', reqData, function (result) {
				jQuery("#" + id).find(".img_tip").css("display", "block").attr("src", base64);
				pictureFlowNo1 = result.pictureFlowNo1;
				// pictureFlowNo2 = result.pictureFlowNo2;
				// pictureFlowNo3 = result.pictureFlowNo3;
			}, null, true);
		}

		//下一步
		document.getElementById("nextPage").addEventListener('tap', function () {
			// 鉴权
			// var reqData = {
			// 	"zhjnzlei": "10",
			// 	"zhjhaoma": '410101197801010074',
			// 	"lyzhzhao": '6230730027394221',
			// 	"jiyijigo": '601108',
			// 	"jiyiguiy": 'DZ0012',
			// 	"yanzhenma": '',
			// 	"yanzmals": '',
			// 	"actionFlag": "00",
			// 	"channelCode": '030',
			// 	"currentBusinessCode": "",
			// 	"kehuzhwm": '欧阳于一',
			// 	"shjihaom": '18710563021'
			// };


			var checkFace3 = jQuery("#authorH").find(".img_tip").attr("src");
			// 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
			console.log(checkFace3)
			//校验照片
			var imgEl = jQuery(".img_tip");
			for (var i = 0; i < imgEl.length; i++) {
				var imgSrc = imgEl.eq(i).attr("src");
				if (imgSrc == "") {
					if (i == "0") {
						mui.toast("请先上传您的身份证正面照");
					} else if (i == "1") {
						mui.toast("请先上传您的身份证反面照");
					} else if (i == "2") {
						mui.toast("请先上传您的正面照");
					} else {
						mui.toast("请先上传您的银行卡正面照");
					}
					return
				}
			}

			//校验身份证
			if (checkUserName(userName.value)) {
				if (isCardID(certNo.value)) {
					if (checkDate(startDate.value, "证件起始日")) {
						if (checkDate(endDate.value, "证件到期日")) {
							if (checknull(accountNo.value, "绑定卡号")) {
								if (compareDateWithToday(endDate.value)) {
									if (time1GreaterThanTime2(startDate.value, endDate.value)) {
										plus.nativeUI.toast("证件起始日不能大于或等于证件到期日");
									} else {
										//鉴权								
										var reqData = {
											"zhjnzlei": "10",
											"zhjhaoma": certNo.value,
											"lyzhzhao": accountNo.value,
											"jiyijigo": '601108',
											"jiyiguiy": 'DZ0012',
											"yanzhenma": '',
											"yanzmals": '',
											"actionFlag": "00",
											"channelCode": '030',
											"currentBusinessCode": "",
											"kehuzhwm": userName.value,
											"shjihaom": shjihaom.value
										};
										apiSend('post', 'eleAccCheckUserInfoForMobile.do', reqData, returnFl, returnFail, true);
										function returnFl(data) {
											returnFlag = data.returnFlag;
											// 下一页
											var reqData = {
												"pictureFlowNo1": pictureFlowNo1,
												"pictureFlowNo2": pictureFlowNo1,
												"pictureFlowNo3": pictureFlowNo1,
												"baseStr": checkFace3,
												"tranType": "0",
												"currentBusinessCode": '',
												"accountNo": '',
												"fileFlowNo": '',
												"channelCode": '030',
												"certNo": certNo.value,
												"userName": userName.value
											}
											apiSend('post', 'eleAccAppOnlineCheck.do', reqData, faceFun, null, true);
										}
										function returnFail() {
											plus.nativeUI.toast("鉴权失败");
										}
									}
								} else {
									plus.nativeUI.toast("证件已过期！");
								}
							}
						}
					}
				}
			}


		})

		function faceFun(result) {
			console.log(result.compareResult)
			compareResult = result.compareResult;
			mui.openWindow({
				id: 'regist_loginpwd',
				url: 'regist_loginpwd.html',
				waiting: {
					autoShow: false
				},
				extras: {
					userName: userName.value,
					certNo: certNo.value,
					accountNo: accountNo.value,
					shjihaom: shjihaom.value,
					startTime: startDate.value,
					endTime: endDate.value,
					compareResult: compareResult,
					returnFlag: returnFlag
				}
			});
		}
	}

}(mui, window.regist = {}));