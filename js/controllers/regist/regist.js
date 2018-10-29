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
	var accountNo; //账号
	var shjihaom; //手机号
	var uuID;
	var fileInputName;
	var baseStr;
	var imgWidth;
	var bitmap = null;
	var OCRflag;

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
			// var reqData = {
			// 	"uuID": uuID,
			// 	"fileInputName": fileInputName,
			// 	"baseStr": baseStr
			// }

			// var reqData = {
			// 	"certNo": certNo.value,
			// 	"userName": userName.value,
			// 	"baseStr": baseStr,
			// 	"currentBusinessCode": "12000043"
			// }

			// var reqData = {
			// 	"IMG_1": "",
			// 	"IMG_1_YXPC": "",
			// 	"IMG_1_YXUPTIME": "",
			// 	"IMG_2": "",
			// 	"IMG_2_YXPC": "",
			// 	"IMG_3": "",
			// 	"YWID": "",
			// 	"BISDATE": "",
			// 	"BISTIME": "",
			// 	"OPERID": "",
			// 	"OPERNAME": "",
			// 	"CSTIDCARD": "",
			// 	"CSTNAME": "",
			// 	"ZHANGHAO": "",
			// 	"BEIZHU": "",
			// 	"currentBusinessCode": "12000043"
			// }


			//apiSend('post', 'eleRegisterUploadImg.do', reqData, function(result) {
				jQuery("#" + id).find(".img_tip").css("display", "block").attr("src", base64);
			//}, null, true);

			// 正面照
			// var reqData = {
			// 	"baseStr": baseStr,
			// 	"certNo": "410101197801010074",
			// 	"userName": '欧阳于一',
			// 	"currentBusinessCode": ""
			// }
			// apiSend('post', 'eleAccOnlineCheckForMobile.do', reqData, checkInp, null, true);

			//银行卡
			// var reqData = {
			// 	"fileInputName": 'filePathName1',
			// 	"baseStr": baseStr,
			// 	"tranType": "0",
			// 	"certNo": "410101197801010074",
			// 	"pictureFlowNo1": '',
			// 	"pictureFlowNo2": ''
			// }
			// apiSend('post', 'eleAccAppUpLoadImage.do', reqData, checkInp, null, true);


			
		}

		// certNo.onblur = function(){
		// 	if (isCardID(certNo.value)) {

		// 	}
		// }


		//下一步
		document.getElementById("nextPage").addEventListener('tap', function () {

			var reqData = {
				"pictureFlowNo1": '201912251432061003499',
				"pictureFlowNo2": '201912251432061003499',
				"pictureFlowNo3": '201912251432061003499',
				"baseStr": baseStr,
				"tranType": "0",
				"currentBusinessCode": '',
				"accountNo":'',
				"fileFlowNo":'',
				"channelCode":'030',
				"certNo": '410101197801010074',
				"userName":'欧阳于一',
			}
			// apiSend('post', 'eleAccAppCheckFace.do', reqData, checkInp, null, true);
			apiSend('post', 'eleAccAppOnlineCheck.do', reqData, checkInp, null, true);

			function checkInp(data) {
				console.log('成功');
			}





			// var checkFace1 = jQuery("#authorY").find(".img_tip").attr("src");
			// var checkFace2 = jQuery("#authorN").find(".img_tip").attr("src");
			// var checkFace3 = jQuery("#authorH").find(".img_tip").attr("src");
			// var checkFace4 = jQuery("#bankY").find(".img_tip").attr("src");
			// console.log("正面：" + checkFace1);
			// console.log("反面：" + checkFace2);
			// console.log("手持：" + checkFace3);
			// console.log("卡正：" + checkFace4);
			console.log("accountNo：" + accountNo.value);
			console.log("startDate：" + startDate.value);
			console.log("endDate：" + endDate.value);
			console.log("userName：" + userName.value);
			console.log("certNo：" + certNo.value);
			console.log("shjihaom:" + shjihaom.value)
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
										alert(123);
										// //ajax
										// // apiSend('post', 'eleAccAppCheckFace.do', reqData, faceFun, null, true);
										faceFun();
									}
								} else {
									plus.nativeUI.toast("证件已过期！");
								}
							}
						}
					}
				}
			}

			var reqData = {
				"zhjnzlei": "10",
				"kehuzhwm": '全渠道',
				"zhjhaoma": '341126197709218366',
				"lyzhzhao": '6216261000000000018',
				"jiyijigo": '601108',
				"jiyiguiy": 'DZ0012',
				"shjihaom": shjihaom.value,
				"actionFlag": "00",
				"channelCode": '030',
				"currentBusinessCode": "12000043"
			};


			// var reqData = {
			// 	"zhjnzlei": "10",
			// 	"kehuzhwm": userName.value,
			// 	"zhjhaoma": certNo.value,
			// 	"lyzhzhao": accountNo.value,
			// 	"jiyijigo": '',
			// 	"jiyiguiy": '',
			// 	"shjihaom": shjihaom.value,
			// 	"actionFlag": "00",
			// 	"channelCode": '0001',
			// 	"currentBusinessCode": "12000043"
			// };
			// apiSend('post', 'eleAccCheckUserInfoForMobile.do', reqData, faceFun, null, true);

			// =======================================================================
			// var reqDatas = {
			// 	"zhjhaoma": '410101197801010074',
			// 	"kehuzhwm": '欧阳于一',
			// 	"lyzhzhao": "6230730027394221",
			// 	"zhjnzlei": '10',
			// 	"chaxlxin": '02'
			// };
			//ajax
			// alert(1)
			// apiSend('post', 'eleAccOpenCardNum.do', reqDatas, faceFun, null, true);
			// alert(2)
			// =======================================================================
		})

		function faceFun(result) {
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
					OCRflag: OCRflag
				}
			});
		}

		//注册成功回调
		// function registsucFun(result) {
		// 	//下一步
		// 	mui.openWindow({
		// 		id: 'regist_loginpwd',
		// 		url: 'regist_loginpwd.html',
		// 		waiting: {
		// 			autoShow: false
		// 		},
		// 		extras: {
		// 			userName: userName.value,
		// 			certNo: certNo.value,
		// 			shjihaom: shjihaom.value,
		// 			accountNo: accountNo.value,
		// 			startTime: startDate.value,
		// 			endTime: endDate.value,
		// 			OCRflag: OCRflag
		// 		}
		// 	})
		// }
	}

}(mui, window.regist = {}));