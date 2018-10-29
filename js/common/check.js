//手机号校验
function checkphone(phone) {
	var regu = /^[1][3,5,7,8][0-9]{9}$/;
	var re = new RegExp(regu);
	if(phone == "" || phone == null) {
		plus.nativeUI.toast("手机号不能为空");
		return false;
	} else if(re.test(phone)) {
		return true;
	} else {
		plus.nativeUI.toast("手机号格式有误");
		return false;
	}
}
//非空校验
function checknull(val, tit) {
	if(val != "") {
		return true;
	} else {
		plus.nativeUI.toast(tit + "不允许为空");
		return false;
	}
}

//检查姓名
function checkUserName(val) {
	var reg = /^[\u4e00-\u9fa5]{0,}$/;
	if(val != "") {
		if(reg.test(val)) {
			return true
		} else {
			plus.nativeUI.toast("姓名格式不正确");
		}
	} else {
		plus.nativeUI.toast("姓名不能为空");
	}
}

//校验邮箱
function checkemail(email) {
	var myReg = /^[-_A-Za-z0-9]+@([A-Za-z0-9]+\.)+[A-Za-z-9]{2,3}/;
	if(myReg.test(email)) {
		return true;
	} else {
		plus.nativeUI.toast("邮箱格式不正确");
		return false;
	}
}
//校验是否为数字
function checkNumber(num, tit) {
	if(!Number(num)) {
		plus.nativeUI.toast(tit + "只能为数字");
		return false;
	} else {
		return true;
	}
}
//校验长度
function checkLength(psd, tit) {
	if(psd.length != 6) {
		plus.nativeUI.toast(tit + "长度必须为6位纯数字");
		return false;
	} else {
		return true;
	}
}

//校验密码是否为数字和字母，并且长度等于6！
function checkpsd(psd) {
	if(psd == "" || psd == null) {
		console.log("111");
		plus.nativeUI.toast("密码不允许为空");
		return false;
	} else if(psd.length < 6 || psd.length > 12) {
		plus.nativeUI.toast("请输入位数为6-12的密码字符");
		return false;
	} else if(!psd.match(/([0-9])+/) && !psd.match(/([a-z])+/)) {
		plus.nativeUI.toast("密码格式只能为数字和英文");
		return false;
	} else {
		return true;
	}
}
//校验两次密码输入是否一致
function checkupdpsd(psd, psds) {
	if(psd !== psds) {
		plus.nativeUI.toast("两次密码输入不一致，请重新输入");
		return false;
	} else {
		return true;
	}
}

//证件到期日
function checkDate(val, tit) {
	var myReg = new RegExp(/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))0229)/);
	if(val != "") {
		if(tit == "证件起始日") {
			if(myReg.test(val)) {
				return true;
			} else {
				plus.nativeUI.toast(tit + "格式有误,请重新扫描或拍照");
			}
		} else {
			if(myReg.test(val) || val == "长期") {
				return true;
			} else {
				plus.nativeUI.toast(tit + "格式有误,请重新扫描或拍照");
			}
		}
	} else {
		plus.nativeUI.toast(tit + "不允许为空");
		return false;
	}
}
//计算N天前后的日期
function getDateStr(nowDate, AddDayCount) {
	var tDate;
	if(!nowDate) {
		tDate = new Date();
	} else {
		tDate = new Date(nowDate);
	}
	tDate.setDate(tDate.getDate() + AddDayCount); //获取AddDayCount天后的日期    
	var y = tDate.getFullYear();
	var m = (tDate.getMonth() + 1) < 10 ? "0" + (tDate.getMonth() + 1) : (tDate.getMonth() + 1); //获取当前月份的日期，不足10补0    
	var d = tDate.getDate() < 10 ? "0" + tDate.getDate() : tDate.getDate(); //获取当前几号，不足10补0    
	return y + "-" + m + "-" + d;
}
//计算两个时间相差天数
function dateDifference(sDate1, sDate2) { //sDate1和sDate2是YY-MMMM-DD格式  
	var dateSpan,
		tempDate,
		iDays;
	sDate1 = Date.parse(sDate1);
	sDate2 = Date.parse(sDate2);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	return iDays
}

//比较日期与当前日期大小，大于当前日期返回 true  反之 false
function compareDateWithToday(time) {
	if(time == "长期") {
		return true;
	}
	var date = new Date();
	time = time.replace(/(\d{4})(\d{2})(\d{2})/g, '$1/$2/$3');
	var date2 = new Date(time);
	return date2 > date;
}

function time1GreaterThanTime2(time1, time2) {
	if(time2 == "长期") {
		return false;
	}
	time1 = time1.replace(/(\d{4})(\d{2})(\d{2})/g, '$1/$2/$3');
	var date1 = new Date(time1);

	time2 = time2.replace(/(\d{4})(\d{2})(\d{2})/g, '$1/$2/$3');
	var date2 = new Date(time2);

	return date1 >= date2;
}

//校验密码是否为数字和字母的组合，不区分大小写
//校验密码是否为数字和字母，并且长度等于6
function checkupdpsds(psd, tit) {
	if(psd == "" || psd == null) {
		plus.nativeUI.toast(tit + "不允许为空");
		psd.focus();
		return false;
	} else if(psd.length < 6 || psd.length > 10) {
		plus.nativeUI.toast("请输入位数为6-10的密码字符");
		psd.focus();
		return false;
	} else if(checkPass(psd) >= 2) {
		return true;
	} else if(checkPass(psd) < 2) {
		alert("新登录密码复杂度不够，请重新设置！");
		psd.focus();
		return false;
	} else {
		plus.nativeUI.toast("必须是数字和密码组合");
		psd.focus();
		return false;
	}
}

//密码校验必须是数字大小写字母组合
function checkPass(psd) {
	if(psd.length < 6 || psd.length > 10) {
		return 0;
	}
	var ls = 0;
	if(psd.match(/([A-Za-z])+/)) {
		ls++;
	}
	if(psd.match(/([0-9])+/)) {
		ls++;
	}
	/*if(psd.match(/([A-Z])+/)) {
		ls++;
	}*/
	if(psd.match(/[^a-zA-Z0-9]+/)) {
		ls++;
	}
	return ls;
}

// 时间格式化
Date.prototype.Format = function(fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

// 检测textarea输入的字数
function addEventLength(IptObj, num) {
	IptObj.addEventListener("input", function() {
		textnum.innerHTML = IptObj.value.length;
		if(IptObj.value.length > num) {
			return false;
		}
	})
}

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

function checkLogin(sId) {
	var iSum = 0;
	var info = "";
	if(!/^\d{17}(\d|x)$/i.test(sId)) {
		plus.nativeUI.toast('用户名或密码错误');
		return false;
	}

	sId = sId.replace(/x$/i, "a");
	if(aCity[parseInt(sId.substr(0, 2))] == null) {
		plus.nativeUI.toast('用户名或密码错误');
		return false;
	}

	sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" +
		Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"));
	if(sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d
			.getDate())) {
		plus.nativeUI.toast('用户名或密码错误');
		return false;
	}

	for(var i = 17; i >= 0; i--)
		iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
	if(iSum % 11 != 1) {
		plus.nativeUI.toast('用户名或密码错误');
		return false;
	} else {
		return true;
	}

}

function isCardID(sId) {
	var iSum = 0;
	var info = "";
	if(!/^\d{17}(\d|x)$/i.test(sId)) {
		plus.nativeUI.toast('身份证长度或格式错误');
		return false;
	}

	sId = sId.replace(/x$/i, "a");
	if(aCity[parseInt(sId.substr(0, 2))] == null) {
		plus.nativeUI.toast('身份证地区非法');
		return false;
	}

	sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" +
		Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"));
	if(sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d
			.getDate())) {
		plus.nativeUI.toast('身份证上的出生日期非法');
		return false;
	}

	for(var i = 17; i >= 0; i--)
		iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
	if(iSum % 11 != 1) {
		plus.nativeUI.toast('身份证号码非法');
		return false;
	} else {
		return true;
	}

}

//验证邮箱格式  
function CheckEmail(eMail) {
	var emails = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(eMail.value != "" && emails.test(eMail.value)) {
		return true;
	} else {
		plus.nativeUI.toast("您的电子邮箱地址格式错误...");
		return false;
	}
}

//小写转大写
function DX(numberValue) {
	var numberValue = new String(Math.round(numberValue * 100)); // 数字金额
	var chineseValue = ""; // 转换后的汉字金额
	var String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
	var String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
	var len = numberValue.length; // numberValue 的字符串长度
	var Ch1; // 数字的汉语读法
	var Ch2; // 数字位的汉字读法
	var nZero = 0; // 用来计算连续的零值的个数
	var String3; // 指定位置的数值
	if(len > 15) {
		//		alert("超出计算范围");
		return "";
	}
	if(numberValue == 0) {
		chineseValue = "零元整";
		return chineseValue;
	}
	String2 = String2.substr(String2.length - len, len); // 取出对应位数的STRING2的值
	for(var i = 0; i < len; i++) {
		String3 = parseInt(numberValue.substr(i, 1), 10); // 取出需转换的某一位的值
		if(i != (len - 3) && i != (len - 7) && i != (len - 11) && i != (len - 15)) {
			if(String3 == 0) {
				Ch1 = "";
				Ch2 = "";
				nZero = nZero + 1;
			} else if(String3 != 0 && nZero != 0) {
				Ch1 = "零" + String1.substr(String3, 1);
				Ch2 = String2.substr(i, 1);
				nZero = 0;
			} else {
				Ch1 = String1.substr(String3, 1);
				Ch2 = String2.substr(i, 1);
				nZero = 0;
			}
		} else { // 该位是万亿，亿，万，元位等关键位
			if(String3 != 0 && nZero != 0) {
				Ch1 = "零" + String1.substr(String3, 1);
				Ch2 = String2.substr(i, 1);
				nZero = 0;
			} else if(String3 != 0 && nZero == 0) {
				Ch1 = String1.substr(String3, 1);
				Ch2 = String2.substr(i, 1);
				nZero = 0;
			} else if(String3 == 0 && nZero >= 3) {
				Ch1 = "";
				Ch2 = "";
				nZero = nZero + 1;
			} else {
				Ch1 = "";
				Ch2 = String2.substr(i, 1);
				nZero = nZero + 1;
			}
			if(i == (len - 11) || i == (len - 3)) { // 如果该位是亿位或元位，则必须写上
				Ch2 = String2.substr(i, 1);
			}
		}
		chineseValue = chineseValue + Ch1 + Ch2;
	}
	if(String3 == 0) { // 最后一位（分）为0时，加上“整”
		chineseValue = chineseValue + "整";
	}
	return chineseValue;
}

//自动获取焦点
/*var nativeWebview, imm, InputMethodManager;
var initNativeObjects = function() {
    if (mui.os.android) {
        var main = plus.android.runtimeMainActivity();
        var Context = plus.android.importClass("android.content.Context");
        InputMethodManager = plus.android.importClass("android.view.inputmethod.InputMethodManager");
        imm = main.getSystemService(Context.INPUT_METHOD_SERVICE);
    } else {
        nativeWebview = plus.webview.currentWebview().nativeInstanceObject();
    }
};
var showSoftInput = function() {
    if (mui.os.android) {
        imm.toggleSoftInput(0, InputMethodManager.SHOW_FORCED);
    } else {
        nativeWebview.plusCallMethod({
            "setKeyboardDisplayRequiresUserAction": false
        });
    }
    setTimeout(function() {
       //此处可写具体逻辑设置获取焦点的input
       var inputElem = document.querySelector('input');
              inputElem.focus(); 
    }, 200);
};
mui.plusReady(function() {
    initNativeObjects();
    showSoftInput();
});*/
//自动弹出键盘
/*var openSoftKeyboard = function() {
    if(mui.os.ios){
        var webView = plus.webview.currentWebview().nativeInstanceObject();
        webView.plusCallMethod({
            "setKeyboardDisplayRequiresUserAction": false 
        });
    }else{
        var webview = plus.android.currentWebview();
        plus.android.importClass(webview);
        webview.requestFocus();
        var Context = plus.android.importClass("android.content.Context");
        var InputMethodManager = plus.android.importClass("android.view.inputmethod.InputMethodManager");
        var main = plus.android.runtimeMainActivity();
        var imm = main.getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.toggleSoftInput(0, InputMethodManager.SHOW_FORCED);
    }
}*/