<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
	<meta charset="UTF-8">
	<title>注册</title>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no ,viewport-fit=cover" />
	<link href="../../css/mui.css" rel="stylesheet" />
	<link href="../../css/home.css" rel="stylesheet" />
	<link rel="stylesheet" href="../../css/microdone-h5.css" />
	<link rel="stylesheet" href="../../css/demo.css" />
	<link rel="stylesheet" href="http://at.alicdn.com/t/font_889368_kzv7sb7gih.css">
	<style type="text/css">
		.form_item {
			margin-top: 0.1rem;
			padding: 0.3rem 1rem 0 1rem;
		}

		.form_item_botton {
			padding: 0 25px;
		}
		.form_list_right {
			width: 67%;
			display: table;
		}
		.mui-input-row label {
			width: 33%;
			padding: 0.6rem 0 0 0;
			font-size: 0.7rem;
		}

		.mui-input-row label~input {
			width: 67%;
			padding: 0rem;
			height: 1.6rem;
			font-size: 0.7rem;
		}
		.form_list_right input {
			width: 100%;
			padding: 10px 0 !important;
			height: 1.6rem;
			font-size: 0.7rem;
			caret-color: #070708;
		}
		.form_list{
			height: 1.6rem !important;
		}
		.form_list input::-webkit-input-placeholder {
			color: #aab2bd;
			font-size: 0.6rem !important;
		}
		.form_list textarea {
			width: 67% !important;
			padding: 0.5rem 0 !important;
			height: 100%;
			font-size: 0.7rem;
			caret-color: #070708;
			overflow-y:hidden;
		}
		.form_list textarea::-webkit-input-placeholder {
			color: #aab2bd;
			font-size: 0.6rem !important;
		}
		.upload_tip {
			font-weight: normal;
		}

		.upload_img {
			width: 100%;
			height: 3.7rem;
			background: #FBFBFB url(../../images/card1.png) no-repeat center center;
			background-size: 50%;
			border-radius: 5px;
			text-align: center;
			border: 1px solid #E3E3E3;
		}

		.upload_img2 {
			background: #FBFBFB url(../../images/card2.png) no-repeat center center;
			background-size: 50%;
		}

		.upload_img3 {
			background: #FBFBFB url(../../images/card3.png) no-repeat center center;
			background-size: 50%;
		}

		.upload_img4 {
			background: #FBFBFB url(../../images/card4.png) no-repeat center center;
			background-size: 50%;
		}

		.img_tip {
			display: none;
			width: 100%;
			height: 100%;
		}

		.upload_list label {
			display: block;
			margin: 8px 0;
		}

		/* 验证码 */
		.verificationP {
			padding-left: 20px;
			margin-top: 0.4rem;
			margin-bottom: 0;
			font-size: 15px;
		}

		.verificationP span {
			color: red;
		}

		/* 协议*/
		.agreementLa {
			padding-left: 20px;
			padding-top: 7px;
			font-size: 15px;
		}

		.agreementLa input {
			height: 15px;
			width: 15px;
		}

		.agreementLa span {
			color: red;
		}
	</style>
</head>

<body>
	
	<header class="mui-bar mui-bar-nav statusbar">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">注册</h1>
	</header>
	<div class="mui-content">
		<div class="upload_list form_item">
			<div class="upload_tip">请上传您的身份证及银行卡</div>
			<div class="upload_con">
				<div class="upload_left">
					<div id="authorY" class="upload_img">
						<img class="img_tip" src="" />
					</div>
					<label>身份证正面</label>
				</div>
				<div class="upload_right">
					<div id="authorN" class="upload_img upload_img2">
						<img class="img_tip" src="" />
					</div>
					<label>身份证反面</label>
				</div>
				<div class="upload_left">
					<div id="authorH" class="upload_img upload_img3">
						<img class="img_tip" src="" />
					</div>
					<label>正面照</label>
				</div>
				<div class="upload_right">
					<div id="bankY" class="upload_img upload_img4">
						<img class="img_tip" src="" />
					</div>
					<label>银行卡正面</label>
				</div>
			</div>
		</div>
		<div class="mui-input-group form_item form_item_botton">
			<div class="mui-input-row form_list">
				<label>姓名</label>
				<!-- <input id="userName" oninput="if(value.length>50)value=value.slice(0,50)" type="text" class="w30" placeholder="请输入您的真实姓名"> -->
				<textarea id="userName" oninput="if(value.length>50)value=value.slice(0,50)" wrap="hard" placeholder="请输入您的真实姓名"></textarea>
				<!--<span class="mui-icon mui-icon-camera scanicon" id="scanUserName"></span>-->
			</div>
			<div class="mui-input-row form_list">
				<label>身份证号</label>
				<div class="form_list_right">
					<input id="certNo" oninput="if(value.length>18)value=value.slice(0,18)" type="number" class="w30" placeholder="请输入您的身份证号码">
					<!--<span class="mui-icon mui-icon-camera scanicon" id="scanCertNo"></span>-->
				</div>
			</div>
			<div class="mui-input-row form_list">
				<label>证件起始日</label>
				<div class="form_list_right">
					<input id="startDate" oninput="if(value.length>8)value=value.slice(0,8)" type="number" class="w30" placeholder="例:20201020">
					<!--<span class="mui-icon mui-icon-camera scanicon" id="scanStartDate"></span>-->
				</div>
			</div>
			<div class="mui-input-row form_list">
				<label>证件到期日</label>
				<div class="form_list_right">
					<input id="endDate" oninput="if(value.length>8)value=value.slice(0,8)" type="number" class="w30" placeholder="例:20201020">
					<!--<span class="mui-icon mui-icon-camera scanicon" id="scanEndDate"></span>-->
				</div>
			</div>
			<div class="mui-input-row form_list">
				<label>绑定卡号</label>
				<div class="form_list_right">
					<input id="accountNo" type="tel" pattern="[0-9]*" oninput="if(value.length>32)value=value.slice(0,32)" class="w30" placeholder="请输入您的储蓄卡号">
					<!--<span class="mui-icon mui-icon-camera scanicon" id="scanAccountNo"></span>-->
				</div>
			</div>
			<div class="mui-input-row form_list">
				<label>手机号</label>
				<input id="mobileNo" oninput="if(value.length>11)value=value.slice(0,11)" type="tel" class="w30" placeholder="请输入储蓄卡预留手机号">
			</div>
		</div>
	</div>

	<div class="bottom_btn">
		<button id="nextPage" type="button" class="mui-btn mui-btn-red mui-btn-block" style="font-size: 0.6rem;">下一步</button>
	</div>
	<script src="../../js/common/immersed.js" type="text/javascript" charset="utf-8"></script>
	<script src="../../js/common/jquery.js" type="text/javascript" charset="utf-8"></script>
	<script src="../../js/common/mbank.core.js" type="text/javascript" charset="utf-8"></script>
	<script src="../../js/mui.min.js"></script>
	<script src="../../js/common/check.js" type="text/javascript" charset="utf-8"></script>
	<script src="../../js/plugin/plugin-idcard.js" type="text/javascript" charset="utf-8"></script>
	<script src="../../js/controllers/regist/regist.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		/*控制页面的高度*/
		document.documentElement.style.fontSize = innerWidth / 16 + 'px';
		onresize = function () {
			document.documentElement.style.fontSize = innerWidth / 16 + 'px';
		};
		mui.plusReady(function () {
			regist.init();
			//状态栏参数：true - 全屏;false - 不全屏
			// plus.navigator.setFullscreen(true);
			plus.webview.currentWebview().setStyle({ scrollIndicator: 'none' });

			//证件日期
			$('#startDate').blur(function () {
				checkLength(this, '证件起始日:', 8)
			});
			$('#endDate').blur(function () {
				var startVal = $('#startDate')[0];
				checkLengthEnd(startVal,this,"证件到期日",8);
			});
		});


		// 检测姓名
		$('#userName').blur(function () {
			var reg = /^[\u4e00-\u9fa5]{0,}$/;
			if (this.value != "") {
				if (reg.test(this.value)) {
					this.style.color = "#000";
					return true
				} else {
					console.log("姓名格式不正确");
					this.style.color = "red";
				}
			} else {
				console.log("姓名不能为空");
			}
		});


		//验证身份证合法性
		var aCity = {
			11: "北京",
			12: "天津",
			13: "河北",
			14: "山西",
			15: "内蒙古",
			21: "辽宁",
			22: "吉林",
			23: "黑龙江",
			31: "上海",
			32: "江苏",
			33: "浙江",
			34: "安徽",
			35: "福建",
			36: "江西",
			37: "山东",
			41: "河南",
			42: "湖北",
			43: "湖南",
			44: "广东",
			45: "广西",
			46: "海南",
			50: "重庆",
			51: "四川",
			52: "贵州",
			53: "云南",
			54: "西藏",
			61: "陕西",
			62: "甘肃",
			63: "青海",
			64: "宁夏",
			65: "新疆",
			71: "台湾",
			81: "香港",
			82: "澳门",
			91: "国外"
		}
		//检测身份证
		$('#certNo').blur(function isCardID() {
			var iSum = 0;
			var info = "";
			var sId = this.value;
			if (!/^\d{17}(\d|x)$/i.test(sId)) {
				console.log('身份证长度或格式错误');
				this.style.color = "red";
				return false;
			}
			sId = sId.replace(/x$/i, "a");
			if (aCity[parseInt(sId.substr(0, 2))] == null) {
				console.log('身份证地区非法');
				this.style.color = "red";
				return false;
			}
			sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" +
				Number(sId.substr(12, 2));
			var d = new Date(sBirthday.replace(/-/g, "/"));
			if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d
				.getDate())) {
				console.log('身份证上的出生日期非法');
				this.style.color = "red";
				return false;
			}
			for (var i = 17; i >= 0; i--)
				iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
			if (iSum % 11 != 1) {
				console.log('身份证号码非法');
				this.style.color = "red";
				return false;
			} else {
				this.style.color = "#000";
				return true;
			}
		})

		//银行卡
		$('#accountNo').blur(function () {
			accountNoLength(this, '银行卡号', 15, 18)
		})
		
		//手机号校验
		$('#mobileNo').blur(function () {
			checkphoneSi(this);
		})

	</script>
</body>

</html>