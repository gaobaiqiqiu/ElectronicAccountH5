/**
 * 身份证扫描识别；
 * 
 * <p>插件名称：</p>
 * 
 * <b>PluginManger</b>
 * 
 * <p>API>/p>
 * 
 * 参数说明：
 * @param authId  身份证  0-正反面 1-正面 2-背面
 * @param bankId  银行卡  0-正反面 1-正面 2-背面
 */
document.addEventListener("plusready", function() {
	var _BARCODE = 'PluginManger',
		B = window.plus.bridge;
	var PluginManger = {
		openFaceID: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "openFaceID", [callbackID]);
		},
		scanIdCard: function(authId, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(args) {
					errorCallback(args);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "scanIdCard", [callbackID, authId]);
		},
		scanBankCard: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(args) {
					errorCallback(args);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "scanBankCard", [callbackID]);
		},
		keyboardShow: function(bId, random, isNumber, confuse, maxLenth, isRegex, type, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "keyboardShow", [callbackID, bId, random, isNumber, confuse, maxLenth, isRegex, type]);
		},
		keyboardHidden: function(successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "keyboardHidden", [callbackID]);
		},
		getHKERandom: function(userName, idNumber, idType, phoneNumber, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "getHKERandom", [callbackID, userName, idNumber, idType, phoneNumber]);
		},
		downloadHKECer: function(random, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "downloadHKECer", [callbackID, random]);
		},
		SignMessageWithMessage: function(sourceString, signString, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "SignMessageWithMessage", [callbackID, sourceString, signString]);
		},
		getUserInfo: function(userId, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "getUserInfo", [callbackID, userId]);
		},
		// 声明同步返回方法
		getUserInfoSync: function(userInfo) {
			// 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果
			return B.execSync(_BARCODE, "getUserInfoSync", [userInfo]);
		},
		touchID: function(userId, setOrNot, successCallback, errorCallback) {
			var success = typeof successCallback !== 'function' ? null :
				function(args) {
					successCallback(args);
				},
				fail = typeof errorCallback !== 'function' ? null :
				function(code) {
					errorCallback(code);
				};
			callbackID = B.callbackId(success, fail);
			return B.exec(_BARCODE, "touchID", [callbackID, userId, setOrNot]);
		},
		closeTouchID: function(userInfo) {
			// 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果
			return B.execSync(_BARCODE, "closeTouchID", [userInfo]);
		},
		touchIDDataChangeOrNot: function(userInfo) {
			// 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果
			return B.execSync(_BARCODE, "touchIDDataChangeOrNot", [userInfo]);
		},
		touchIDEnable: function() {
			// 通知Native层plugintest扩展插件运行“PluginTestFunctionSync”方法并同步返回结果
			return B.execSync(_BARCODE, "touchIDEnable", null);
		}
	};
	window.plus.PluginManger = PluginManger;
}, true);

function stringSrand() {
	var arr = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
	var brr = [];
	var num = arr.length;
	for(var i = 0; i < num; i++) {
		var temp = parseInt(Math.random() * (num - i));
		brr.push(arr[temp]);
		arr.splice(temp, 1);
	}
	return brr.join("").substring(0, 32)
}

function getWifiName() {
    if(mui.os.android) {
        var wifiManager, wifiInfo;
        var Context = plus.android.importClass("android.content.Context");
        var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");
        var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");
        wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
        wifiInfo = wifiManager.getConnectionInfo();
        var ssid = wifiInfo.getSSID() || '';
        if(ssid.length == 0) {
            return null;
        }
        //一些手机上获取SSID是有值的，但是实际IP为空，真实为未连接
        var i = parseInt(wifiInfo.getIpAddress());
        var ipStr = (i & 0xFF) + "." +
            ((i >> 8) & 0xFF) + "." +
            ((i >> 16) & 0xFF) + "." +
            (i >> 24 & 0xFF);
        if(ipStr == "0.0.0.0") {
            return null;
        }

        if(ssid != "<unknown ssid>" && ssid.toUpperCase() != "0X") {
            return ssid.replace(/\"/g, "");
        }
        return null;
    }
    return null;
};