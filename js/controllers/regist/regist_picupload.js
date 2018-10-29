/**
 * 影像上传
 * @param {Object} $
 * @param {Object} workList
 */
(function($, regist_picupload) {
	mui.init();
	var self;
	//初始化页面
	regist_picupload.init = function() {
		console.log("regist_picupload 加载成功！");
		regist_picupload.initData();
		regist_picupload.initController();
	};
	//初始化数据
	regist_picupload.initData = function() {
		self = plus.webview.currentWebview();
		var imgWidth = jQuery(".img_item").innerWidth();
		jQuery(".img_item").height(imgWidth / 1.6);
		
		setTimeout(function(){
			plus.webview.getWebviewById("regist").close("none");
		    plus.webview.getWebviewById("loginpwd_setting").close("none");
		},500)
	};

	//页面控件事件绑定
	regist_picupload.initController = function() {
		if(plus.storage.getItem("loginState")) {
			if(self.download != "no") {
				setTimeout(function() {
					checkSign();
				}, 500)
			} else {
				self.setStyle({
					popGesture: "none"
				})
			}
		}

		//重置返回
		var old_back = mui.back;
		mui.back = function() {
			if(self.download == "no") {
				mui.toast("请先完善证件资料");
			} else {
				plus.navigator.setStatusBarStyle('light');
				old_back();
			}
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
						var reqdata = {
							"currentBusinessCode": "91100000",
							"certEncode": re.certEncode,
							"serialNumber": re.serialNumber,
							"subjectDN": re.subjectDN,
							"subjectCN": re.subjectCN,
							"notBefore": re.notBefore,
							"notAfter": re.notAfter
						};
						apiSend("post", "modifySignData.do", reqdata, function() {}, function() {}, false);
					}, function(err) {
						console.log(JSON.stringify(err))
					});
				}, function() {}, false);
			}, function(error) {});
		}

		var pictureFlowNo1 = "";
		var fileInputName; //第几张
		//影像上传
		mui(".upload_list").on("tap", ".img_item", function() {
			var imgId = this.id;
			switch(imgId) {
				case "authorY":
					fileInputName = "filePathName1";
					break;
				case "authorN":
					fileInputName = "filePathName2";
					break;
				case "authorH":
					fileInputName = "filePathName3";
					break;
				default:
					break
			};
			if(mui.os.plus) {
				var btn = [{
					title: "拍照"
				}, {
					title: "从手机相册选择"
				}];
				plus.nativeUI.actionSheet({
					title: "证件上传",
					cancel: "取消",
					buttons: btn
				}, function(b) {
					switch(b.index) {
						case 0:
							break;
						case 1:
							mui.toast('建议横向拍摄');
							getImage(imgId, fileInputName);
							break;
						case 2:
							galleryImg(imgId, fileInputName);
							break;
						default:
							break
					}
				})
			}
		})

		//拍照
		function getImage(id, fileInputName) {
			var c = plus.camera.getCamera();
			c.captureImage(function(e) {
				plus.io.resolveLocalFileSystemURL(e, function(entry) {
					var s = entry.toLocalURL() + "?version=" + new Date().getTime();
					console.log(s);
					plus.zip.compressImage({
							src: s,
							dst: '_doc/sauthor.jpg',
							overwrite: true,
							width: '270px', //这里指定了宽度，同样可以修改
							format: 'jpg',
							quality: 100 //图片质量不再修改，以免失真
						},
						function(e) {
							var dUrl = e.target + "?version=" + new Date().getTime();
							var image = new Image();
							image.crossOrigin = '';
							image.src = dUrl;
							image.onload = function() {
								var base64 = getBase64Image(image);
								var reqData = {
									"tranType": "0",
									"currentBusinessCode": "91000200",
									"eleCstNo": plus.storage.getItem("eleCstNo"),
									"baseStr": base64,
									"fileInputName": fileInputName,
									"pictureFlowNo1": pictureFlowNo1
								};

								//图片上传
								picUpload(reqData, id);
							};
						},
						function(err) {
							plus.nativeUI.alert('未知错误！', function() {
								mui.back();
							});
						}
					);

				}, function(e) {
					console.log("读取拍照文件错误：" + e.message);
				});
			}, function(s) {
				console.log("error" + s);
			}, {
				filename: "_doc/author.jpg"
			})
		}

		//相册
		function galleryImg(id, fileInputName) {
			plus.gallery.pick(function(path) {
				plus.io.resolveLocalFileSystemURL(path, function(entry) {
					var s = entry.toLocalURL() + "?version=" + new Date().getTime();
					console.log(s);
					plus.zip.compressImage({
							src: s,
							dst: '_doc/sauthor.jpg',
							overwrite: true,
							width: '270px', //这里指定了宽度，同样可以修改
							format: 'jpg',
							quality: 100 //图片质量不再修改，以免失真
						},
						function(e) {
							var dUrl = e.target + "?version=" + new Date().getTime();
							var image = new Image();
							image.crossOrigin = '';
							image.src = dUrl;
							image.onload = function() {
								var base64 = getBase64Image(image);
								var reqData = {
									"tranType": "0",
									"currentBusinessCode": "91000200",
									"eleCstNo": plus.storage.getItem("eleCstNo"),
									"baseStr": base64,
									"fileInputName": fileInputName,
									"pictureFlowNo1": pictureFlowNo1
								};
								//图片上传
								picUpload(reqData, id);
							};
						},
						function(err) {
							plus.nativeUI.alert('未知错误！', function() {
								mui.back();
							});
						}
					);
				}, function(e) {
					console.log("读取相册文件失败：" + e.message);
				});
			}, function(a) {}, {
				filter: "image"
			})
		};

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

		//上传
		function picUpload(res, id) {
			console.log("请求图片上传开始");

			//上传base64
			apiSend('post', 'eleAccAppUpImageForReg.do', res,
				function(result) { //上传成功
					pictureFlowNo1 = result.pictureFlowNo1;
					jQuery("#" + id).attr("src", "data:image/png;base64," + res.baseStr);
				}, null, true);
		}

		//下一步
		document.getElementById("nextPage").addEventListener('tap', function() {
			var reqData = {
				"tranType": "0", //交易类型  ---注册
				"pictureFlowNo1": pictureFlowNo1,
				"eleCstNo": plus.storage.getItem("eleCstNo"), //客户号
				"currentBusinessCode": "91000200",
				"accountNo": plus.storage.getItem("session_lyzhzhao") //账号
			};

			var picHref = document.getElementsByClassName("img_item");
			var picLength = picHref.length;
			for(var i = 0; i < picLength; i++) {
				var picLast = picHref[i].src.lastIndexOf("/");
				var picImg = picHref[i].src.substring(picLast + 1);
				if(picImg == "" || picImg == "upload.png") {
					if(i == "0") {
						mui.toast("请先上传您的身份证正面照");
					} else if(i == "1") {
						mui.toast("请先上传您的身份证反面照");
					} else {
						mui.toast("请先上传您的手持身份证照");
					}
					return
				}
			}

			//ajax
			apiSend('post', 'eleAccAppCheckFace.do', reqData, faceFun, null, true);

		})

		//人脸成功
		function faceFun(result) {
			plus.storage.setItem("session_registFaceRet", result.similarityValue);

			var similar = result.similarityValue; //result.similarityValue
			if(similar == "99") {
				mui.toast("人脸检测不成功，请重新上传");
				return false;
			} else if(similar == "90") {
				//审核表流水号
				plus.storage.setItem("session_fileFlowNo", result.orderFlowNo);
				mui.openWindow({
					id: "regist_success",
					url: "regist_success.html",
					waiting: {
						autoShow: false
					}
				});
			}
		}
	}

}(mui, window.regist_picupload = {}));