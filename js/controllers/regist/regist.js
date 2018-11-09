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
	var imgWidth;  //身份证、银行卡的照片
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
		console.log(imgWidth)
		jQuery(".upload_img").height(imgWidth / 1.6);
	};


	//页面控件事件绑定
	regist.initController = function () {
		bitmap = new plus.nativeObj.Bitmap("test");
		userName = document.getElementById("userName");
		certNo = document.getElementById("certNo");
		startDate = document.getElementById("startDate");
		endDate = document.getElementById("endDate");
		accountNo = document.getElementById("accountNo");
		shjihaom = document.getElementById('mobileNo');
		if (plus.os.name == "iOS") {
			uuID = plus.device.uuid;
		} else {
			uuID = plus.device.imei;
		}
		// console.log(userName.value)
		//监听侧滑
		self.addEventListener('popGesture', function (e) {
			if (e.type == "end" && !e.result) {
				plus.navigator.setStatusBarStyle('dark');
			} else {
				plus.navigator.setStatusBarStyle('light');
			}
		})
		// console.log(shjihaom.value)
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
					picZip(s, "authorY", "filePathName1")
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
					picZip(s, "authorN ", "filePathName2")
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
					picZip(s, "bankY", "filePathName4")
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

			// 正面照的base64值
			var checkFace3 = jQuery("#authorH").find(".img_tip").attr("src");
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
					if (checkLength(startDate, '证件起始日:', 8)) {
						if (checkLengthEnd(startDate, endDate, "证件到期日", 8)) {
							if (checknull(accountNo, "绑定卡号")) {
								if (checkphoneSi(shjihaom)) {
									accountNo.value = accountNo.value.replace(/\s+/g, "");
									shjihaom.value = shjihaom.value.replace(/\s+/g, "");
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
										if (data.ec != 0000) {
											plus.nativeUI.toast(data.errorMsg);
										} else {
											returnFlag = data.returnFlag;
											// 下一页
											var reqData = {
												"pictureFlowNo1": pictureFlowNo1,
												"pictureFlowNo2": pictureFlowNo1,
												"pictureFlowNo3": pictureFlowNo1,
												"baseStr": checkFace3,
												"tranType": "0",
												"currentBusinessCode": '99000006',
												"accountNo": accountNo.value,
												"fileFlowNo": '',
												"channelCode": '030',
												"certNo": certNo.value,
												"userName": userName.value,
												"beginDate": startDate.value,
												"endDate": endDate.value,
												"mobileNo": shjihaom.value
											}
											apiSend('post', 'eleAccAppOnlineCheck.do', reqData, faceFun, null, true);
										}

									}
									function returnFail() {
										plus.nativeUI.toast("鉴权失败");
									}
								}

							}

						}
					}
					// if (checkDate(startDate.value, "证件起始日")) {
					// 	if (checkDate(endDate.value, "证件到期日")) {
					// 		if (compareDateWithToday(endDate.value)) {
					// 			if (time1GreaterThanTime2(startDate.value, endDate.value)) {
					// 				plus.nativeUI.toast("证件起始日不能大于或等于证件到期日");
					// 			} else {

					// 			}
					// 		} else {
					// 			plus.nativeUI.toast("证件已过期！");
					// 		}

					// 	}
					// }
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