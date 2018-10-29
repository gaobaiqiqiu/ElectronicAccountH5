/********************************************************************/
/*                                                                  */
/*  Copyright (c) 2014 Genesis Mobile                               */
/*                                                                  */
/*  This obfuscated code was created by Jasob 4.1 Trial Version.    */
/*  The code may be used for evaluation purposes only.              */
/*  To obtain full rights to the obfuscated code you have to        */
/*  purchase the license key (http://www.jasob.com/Purchase.html).  */
/*                                                                  */
/********************************************************************/

var AM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var iI = new Array( - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
var aE, eW, kM;
var justic3, Tim = 0,
M = [],
MM = [],
T = [],
miss = null,
M3,
Hid,
Show = 0,
Show2;
var BL = {
	"SV": "",
	"ad": "",
	"KK": "",
	"lol": "0",
	"olo": "0",
	"sh": "0",
	"T": "",
	"passGuard": "",
	"kb": "",
	"FD": "",
	"WH": "",
	"double": "0",
	"key2": "",
	"once": "0",
	"Mov": "0",
	"fixed": ""
};
var PH = {
	"Id": "",
	"s_n": "",
	"pm": "",
	"cs": "0",
	"add": "1",
	"arrPlace": new Array(),
	"L": [],
	"arrId": [],
	"arrPGD": []
};
function aB(bS) {
	var jj, hF, fG, eR;
	var i, aG, out;
	aG = bS.length;
	i = 0;
	out = "";
	while (i < aG) {
		do {
			jj = iI[bS.charCodeAt(i++) & 0xff];
		} while ( i < aG && jj == - 1 );
		if (jj == -1) break;
		do {
			hF = iI[bS.charCodeAt(i++) & 0xff];
		} while ( i < aG && hF == - 1 );
		if (hF == -1) break;
		out += String.fromCharCode((jj << 2) | ((hF & 0x30) >> 4));
		do {
			fG = bS.charCodeAt(i++) & 0xff;
			if (fG == 61) return out;
			fG = iI[fG];
		} while ( i < aG && fG == - 1 );
		if (fG == -1) break;
		out += String.fromCharCode(((hF & 0XF) << 4) | ((fG & 0x3C) >> 2));
		do {
			eR = bS.charCodeAt(i++) & 0xff;
			if (eR == 61) return out;
			eR = iI[eR];
		} while ( i < aG && eR == - 1 );
		if (eR == -1) break;
		out += String.fromCharCode(((fG & 0x03) << 6) | eR);
	}
	return out;
};
var u = navigator.userAgent;
var lA = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
var nD = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var hM = function() {
	var r = true;
	if (/MediaPad/i.test(u)) return false;
	r = (/Mobile/i.test(u) && !/ipad/i.test(u));
	return r;
};
function keyBoard(options) {
	this.settings = {
		"id": "",
		"chaosMode": 0,
		"pressStatus": 1,
		"kbType": 0,
		"aQ": {},
		"odd": 1,
		"reset": 0,
		"svg": ""
	};
	this.gg = undefined;
	if (options != undefined) {
		this.settings = options;
	};
	this.caps = false;
	this.shift = false;
	this.dt = false;
	this.aV = false;
	BL.SV = this.settings.svg;
	var bA = this;
	this.cf = function() {
		var aY = "#" + bA.settings.id;
		$(aY).hide();
		document.querySelector(aY).removeEventListener("webkitAnimationEnd", bA.cf, false);
		document.querySelector(aY).removeEventListener("animationEnd", bA.cf, false);
	};
	this.orientation = function() {
		var b = u.indexOf('SM-T800') > -1;
		if (!b) {
			return window.orientation;
		}
		var bk = 0;
		switch (window.orientation) {
		case 0:
			bk = 90;
			break;
		case 90:
			bk = 180;
			break;
		case 180:
			bk = -90;
			break;
		case - 90 : bk = 180;
			break;
		}
		return bk;
	};
	this.ma = function() {
		var r = 0;
		if ((this.orientation() == 90) || (this.orientation() == -90)) {
			if (nD) {
				if (hM()) r = 0.50;
				else r = 0.40;
			} else if (lA) {
				if (hM()) r = 0.50;
				else r = 0.40;
			} else {
				r = 0.50;
			}
		} else {
			if (nD) {
				if (hM()) r = 0.40;
				else r = 0.35;
			} else if (lA) {
				if (hM()) r = 0.40;
				else r = 0.35;
			} else {
				r = 0.40;
			}
		}
		return r;
	};
	this.ht = function() {
		var aY = "#" + bA.settings.id;
		if ((bA.orientation() == 90) || (bA.orientation() == -90)) {
			if (bA.caps) {
				$("#kb_c_CAP").css({
					background: "url(" + BL.SV + "/shift_DS_H.svg) ",
					backgroundSize: "100% 100%"
				});
			} else if (bA.shift) {
				$("#kb_c_CAP").css({
					background: "url(" + BL.SV + "/shift_D_H.svg) ",
					backgroundSize: "100% 100%"
				});
			} else {
				$("#kb_c_CAP").css({
					background: "url(" + BL.SV + "/shift_H.svg) ",
					backgroundSize: "100% 100%"
				});
			}
		} else {
			if (bA.caps) {
				$("#kb_c_CAP").css({
					background: "url(" + BL.SV + "/shift_DS.svg) ",
					backgroundSize: "100% 100%"
				});
			} else if (bA.shift) {
				$("#kb_c_CAP").css({
					background: "url(" + BL.SV + "/shift_D.svg) ",
					backgroundSize: "100% 100%"
				});
			} else {
				$("#kb_c_CAP").css({
					background: "url(" + BL.SV + "/shift.svg) ",
					backgroundSize: "100% 100%"
				});
			}
		}
		$(".row1pwd,.row2pwd,.row3pwdb").css({
			background: "url(" + BL.SV + "/anjian.svg)",
			backgroundSize: "100% 100%"
		});
		$(".row123").css({
			background: "url(" + BL.SV + "/123.svg) ",
			backgroundSize: "100% 100%"
		});
		$(".rowdelet,#kb_s_N,#kb_n_S").css({
			background: "url(" + BL.SV + "/quanDEL.svg) ",
			backgroundSize: "100% 100%"
		});
		$(".row3pwdd").css({
			background: "url(" + BL.SV + "/quanDEL_2.svg) ",
			backgroundSize: "100% 100%"
		});
		$(".rowspace").css({
			background: "url(" + BL.SV + "/space.svg) ",
			backgroundSize: "100% 100%"
		});
		$(".rowclose").css({
			background: "url(" + BL.SV + "/123.svg) ",
			backgroundSize: "100% 100%"
		});
		$(".pwd").css({
			background: "url(" + BL.SV + "/shuzi_1.svg) ",
			backgroundSize: "100% 100%"
		});
		$("#kb_p_D,#kb_p_CLOSE").css({
			background: "url(" + BL.SV + "/shuzi_2.svg) ",
			backgroundSize: "100% 100%"
		});
		$("#kb_p_D>div").css({
			background: "url(" + BL.SV + "/shuzi_delete1.svg) ",
			backgroundSize: "100% 100%"
		});
		$(".rowdelet>div").css({
			background: "url(" + BL.SV + "/DEL.svg) ",
			backgroundSize: "100% 100%"
		});
		$("#kb_p_CLOSE>div,.rowclose>div").css({
			background: "url(" + BL.SV + "/done_1.svg) ",
			backgroundSize: "100% 100%"
		});
		document.querySelector(aY).removeEventListener("webkitAnimationEnd", bA.ht, false);
		document.querySelector(aY).removeEventListener("animationEnd", bA.ht, false);
	}
};
keyBoard.prototype.generate = function() {
	this.settings.id = "testkbid";
	var wO = '<div id=' + this.settings.id,
	wb = 'IGNsYXNzPSJwd2RrZXlib2FyZG91dCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7IGJvdHRvbTogMHB4OyBtYXJnaW4tbGVmdDogMHB4OyIgPjxkaXYgaWQ9ImNoYXJfa2V5Ym9hcmQiIHN0eWxlPSJ3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJSA7IGRpc3BsYXk6bm9uZTsiPjxkaXYgY2xhc3M9InJvdzEiPg==',
	wo = "PGRpdiBpZD0ia2JfY18wIiBjbGFzcz0icm93MXB3ZCByb3dsZWZ0IiBkYXRhLW5hbWU9ImNfMCI+cTwvZGl2Pg==",
	vL = "PGRpdiBpZD0ia2JfY18xIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzEiPnc8L2Rpdj4=",
	wk = "PGRpdiBpZD0ia2JfY18yIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzIiPmU8L2Rpdj4=",
	vU = "PGRpdiBpZD0ia2JfY18zIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzMiPnI8L2Rpdj4=",
	vl = "PGRpdiBpZD0ia2JfY180IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzQiPnQ8L2Rpdj4=",
	vI = "PGRpdiBpZD0ia2JfY181IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzUiPnk8L2Rpdj4=",
	xc = "PGRpdiBpZD0ia2JfY182IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzYiPnU8L2Rpdj4=",
	wI = "PGRpdiBpZD0ia2JfY183IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzciPmk8L2Rpdj4=",
	wj = "PGRpdiBpZD0ia2JfY184IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJjXzgiPm88L2Rpdj4=",
	vZ = "PGRpdiBpZD0ia2JfY185IiBjbGFzcz0icm93MXB3ZCByb3dyaWdodCIgZGF0YS1uYW1lPSJjXzkiPnA8L2Rpdj4=",
	vT = "PC9kaXY+PGRpdiBjbGFzcz0icm93MiI+PGRpdiBpZD0ia2JfY18xMCIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xMCI+YTwvZGl2Pg==",
	wE = "PGRpdiBpZD0ia2JfY18xMSIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xMSI+czwvZGl2Pg==",
	uj = "PGRpdiBpZD0ia2JfY18xMiIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xMiI+ZDwvZGl2Pg==",
	tY = "PGRpdiBpZD0ia2JfY18xMyIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xMyI+ZjwvZGl2Pg==",
	ut = "PGRpdiBpZD0ia2JfY18xNCIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xNCI+ZzwvZGl2Pg==",
	tq = "PGRpdiBpZD0ia2JfY18xNSIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xNSI+aDwvZGl2Pg==",
	tF = "PGRpdiBpZD0ia2JfY18xNiIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xNiI+ajwvZGl2Pg==",
	uw = "PGRpdiBpZD0ia2JfY18xNyIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xNyI+azwvZGl2Pg==",
	tQ = "PGRpdiBpZD0ia2JfY18xOCIgY2xhc3M9InJvdzJwd2QiIGRhdGEtbmFtZT0iY18xOCI+bDwvZGl2Pg==",
	tu = "PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+PGRpdiBpZD0ia2JfY19DQVAiIGNsYXNzPSJyb3czcHdkYSIgZGF0YS1uYW1lPSJjX0NBUCI+PC9kaXY+",
	uB = "PGRpdiBpZD0ia2JfY18yMCIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjAiPno8L2Rpdj4=",
	vd = "PGRpdiBpZD0ia2JfY18yMSIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjEiPng8L2Rpdj4=",
	vh = "PGRpdiBpZD0ia2JfY18yMiIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjIiPmM8L2Rpdj4=",
	tU = "PGRpdiBpZD0ia2JfY18yMyIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjMiPnY8L2Rpdj4=",
	tP = "PGRpdiBpZD0ia2JfY18yNCIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjQiPmI8L2Rpdj4=",
	ud = "PGRpdiBpZD0ia2JfY18yNSIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjUiPm48L2Rpdj4=",
	tN = "PGRpdiBpZD0ia2JfY18yNiIgY2xhc3M9InJvdzNwd2RiIiBkYXRhLW5hbWU9ImNfMjYiPm08L2Rpdj4=",
	uW = "PGRpdiBpZD0ia2JfY19EIiBjbGFzcz0icm93M3B3ZGMgcm93ZGVsZXQiIGRhdGEtbmFtZT0iY19EIj48ZGl2PjwvZGl2PjwvZGl2Pg==",
	tJ = "PC9kaXY+PGRpdiBjbGFzcz0icm93NCI+PGRpdiBpZD0ia2JfY19OIiBjbGFzcz0icm93NHB3ZGEgcm93MTIzIiBkYXRhLW5hbWU9ImNfTiI+Lj8xMjM8L2Rpdj4=",
	ub = "PGRpdiBpZD0ia2JfY19TUEFDRSIgY2xhc3M9InJvdzRwd2RiIHJvd3NwYWNlIiBkYXRhLW5hbWU9ImNfU1BBQ0UiPnNwYWNlPC9kaXY+",
	uh = "PGRpdiBpZD0ia2JfY19DTE9TRSIgY2xhc3M9InJvdzRwd2RhIHJvd2Nsb3NlIiBkYXRhLW5hbWU9ImNfQ0xPU0UiPjxkaXY+PC9kaXY+PC9kaXY+",
	ur = "PC9kaXY+PC9kaXY+PGRpdiBpZD0ibnVtYmVyX2tleWJvYXJkIj4=",
	tn = "PGRpdiBjbGFzcz0icm93MSI+PGRpdiBpZD0ia2Jfbl8wIiBjbGFzcz0icm93MXB3ZCByb3dsZWZ0IGNoZyIgZGF0YS1uYW1lPSJuXzAiPjE8L2Rpdj4=",
	uH = "PGRpdiBpZD0ia2Jfbl8xIiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl8xIj4yPC9kaXY+",
	vf = "PGRpdiBpZD0ia2Jfbl8yIiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl8yIj4zPC9kaXY+",
	tL = "PGRpdiBpZD0ia2Jfbl8zIiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl8zIj40PC9kaXY+",
	uN = "PGRpdiBpZD0ia2Jfbl80IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl80Ij41PC9kaXY+",
	uF = "PGRpdiBpZD0ia2Jfbl81IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl81Ij42PC9kaXY+",
	uG = "PGRpdiBpZD0ia2Jfbl82IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl82Ij43PC9kaXY+",
	tx = "PGRpdiBpZD0ia2Jfbl83IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl83Ij44PC9kaXY+",
	tZ = "PGRpdiBpZD0ia2Jfbl84IiBjbGFzcz0icm93MXB3ZCBjaGciIGRhdGEtbmFtZT0ibl84Ij45PC9kaXY+",
	uC = "PGRpdiBpZD0ia2Jfbl85IiBjbGFzcz0icm93MXB3ZCByb3dyaWdodCBjaGciIGRhdGEtbmFtZT0ibl85Ij4wPC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+",
	uY = "PGRpdiBpZD0ia2Jfbl8xMCIgY2xhc3M9InJvdzFwd2Qgcm93bGVmdCIgZGF0YS1uYW1lPSJuXzEwIj4tPC9kaXY+",
	tK = "PGRpdiBpZD0ia2Jfbl8xMSIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xMSI+LzwvZGl2Pg==",
	ug = "PGRpdiBpZD0ia2Jfbl8xMiIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xMiI+OjwvZGl2Pg==",
	uD = "PGRpdiBpZD0ia2Jfbl8xMyIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xMyI+OzwvZGl2Pg==",
	vg = "PGRpdiBpZD0ia2Jfbl8xNCIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xNCI+KDwvZGl2Pg==",
	vc = "PGRpdiBpZD0ia2Jfbl8xNSIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xNSI+KTwvZGl2Pg==",
	uU = "PGRpdiBpZD0ia2Jfbl8xNiIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xNiI+JDwvZGl2Pg==",
	tm = "PGRpdiBpZD0ia2Jfbl8xNyIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xNyI+JjwvZGl2Pg==",
	tw = "PGRpdiBpZD0ia2Jfbl8xOCIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ibl8xOCI+QDwvZGl2Pg==",
	ty = "PGRpdiBpZD0ia2Jfbl8xOSIgY2xhc3M9InJvdzFwd2Qgcm93cmlnaHQgcm93YWxvbmUiIGRhdGEtbmFtZT0ibl8xOSI+IjwvZGl2Pg==",
	uR = "PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+PGRpdiBpZD0ia2Jfbl9TIiBjbGFzcz0icm93M3B3ZGEiIGRhdGEtbmFtZT0ibl9TIj4jKz08L2Rpdj4=",
	tM = "PGRpdiBpZD0ia2Jfbl8yMSIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9Im5fMjEiPi48L2Rpdj4=",
	uV = "PGRpdiBpZD0ia2Jfbl8yMiIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9Im5fMjIiPiw8L2Rpdj4=",
	tC = "PGRpdiBpZD0ia2Jfbl8yMyIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9Im5fMjMiPj88L2Rpdj4=",
	tE = "PGRpdiBpZD0ia2Jfbl8yNCIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9Im5fMjQiPiE8L2Rpdj4=",
	uQ = "PGRpdiBpZD0na2Jfbl8yNScgY2xhc3M9J3JvdzNwd2RkJyBkYXRhLW5hbWU9J25fMjUnPic8L2Rpdj4=",
	uk = "PGRpdiBpZD0ia2Jfbl9EIiBjbGFzcz0icm93M3B3ZGMgcm93ZGVsZXQiIGRhdGEtbmFtZT0ibl9EIj48ZGl2PjwvZGl2PjwvZGl2Pg==",
	uz = "PC9kaXY+PGRpdiBjbGFzcz0icm93NCI+PGRpdiBpZD0ia2Jfbl9DIiBjbGFzcz0icm93NHB3ZGEgcm93MTIzIiBkYXRhLW5hbWU9Im5fQyI+QUJDPC9kaXY+",
	uE = "PGRpdiBpZD0ia2Jfbl9TUEFDRSIgY2xhc3M9InJvdzRwd2RiIHJvd3NwYWNlIiBkYXRhLW5hbWU9Im5fU1BBQ0UiPnNwYWNlPC9kaXY+",
	uc = "PGRpdiBpZD0ia2Jfbl9DTE9TRSIgY2xhc3M9InJvdzRwd2RhIHJvd2Nsb3NlIiBkYXRhLW5hbWU9Im5fQ0xPU0UiPjxkaXY+PC9kaXY+PC9kaXY+",
	uf = "PC9kaXY+PC9kaXY+PGRpdiBpZD0ic3ltYmxlX2tleWJvYXJkIiAgc3R5bGU9IndpZHRoOjEwMCU7IGhlaWdodDoxMDAlIDsgZGlzcGxheTpub25lOyI+PGRpdiBjbGFzcz0icm93MSI+",
	vb = "PGRpdiBpZD0ia2Jfc18wIiBjbGFzcz0icm93MXB3ZCByb3dsZWZ0IiBkYXRhLW5hbWU9InNfMCI+WzwvZGl2Pg==",
	tW = "PGRpdiBpZD0ia2Jfc18xIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzEiPl08L2Rpdj4=",
	us = "PGRpdiBpZD0ia2Jfc18yIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzIiPns8L2Rpdj4=",
	tG = "PGRpdiBpZD0ia2Jfc18zIiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzMiPn08L2Rpdj4=",
	uo = "PGRpdiBpZD0ia2Jfc180IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzQiPiM8L2Rpdj4=",
	tz = "PGRpdiBpZD0ia2Jfc181IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzUiPiU8L2Rpdj4=",
	tp = "PGRpdiBpZD0ia2Jfc182IiBjbGFzcz0icm93MXB3ZCByb3dhbG9uZSIgZGF0YS1uYW1lPSJzXzYiPl48L2Rpdj4=",
	va = "PGRpdiBpZD0ia2Jfc183IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzciPio8L2Rpdj4=",
	tO = "PGRpdiBpZD0ia2Jfc184IiBjbGFzcz0icm93MXB3ZCIgZGF0YS1uYW1lPSJzXzgiPis8L2Rpdj4=",
	tX = "PGRpdiBpZD0ia2Jfc185IiBjbGFzcz0icm93MXB3ZCByb3dyaWdodCIgZGF0YS1uYW1lPSJzXzkiPj08L2Rpdj4=",
	uK = "PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+PGRpdiBpZD0ia2Jfc18xMCIgY2xhc3M9InJvdzFwd2Qgcm93bGVmdCByb3dsb25lbHkiIGRhdGEtbmFtZT0ic18xMCI+XzwvZGl2Pg==",
	uS = "PGRpdiBpZD0ia2Jfc18xMSIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xMSI+XDwvZGl2Pg==",
	uM = "PGRpdiBpZD0ia2Jfc18xMiIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xMiI+fDwvZGl2Pg==",
	uv = "PGRpdiBpZD0ia2Jfc18xMyIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xMyI+fjwvZGl2Pg==",
	vF = "PGRpdiBpZD0ia2Jfc18xNCIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xNCI+PDwvZGl2Pg==",
	yZ = "PGRpdiBpZD0ia2Jfc18xNSIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xNSI+PjwvZGl2Pg==",
	xj = "PGRpdiBpZD0ia2Jfc18xNiIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xNiI+JDwvZGl2Pg==",
	xM = "PGRpdiBpZD0ia2Jfc18xNyIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xNyI+JjwvZGl2Pg==",
	xV = "PGRpdiBpZD0ia2Jfc18xOCIgY2xhc3M9InJvdzFwd2QiIGRhdGEtbmFtZT0ic18xOCI+QDwvZGl2Pg==",
	xH = "PGRpdiBpZD0ia2Jfc18xOSIgY2xhc3M9InJvdzFwd2Qgcm93cmlnaHQgcm93YWxvbmUiIGRhdGEtbmFtZT0ic18xOSI+YDwvZGl2Pg==",
	xN = "PC9kaXY+PGRpdiBjbGFzcz0icm93MyI+PGRpdiBpZD0ia2Jfc19OIiBjbGFzcz0icm93M3B3ZGEiIGRhdGEtbmFtZT0ic19OIj4xMjM8L2Rpdj4=",
	xK = "PGRpdiBpZD0ia2Jfc18yMSIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9InNfMjEiPi48L2Rpdj4=",
	xE = "PGRpdiBpZD0ia2Jfc18yMiIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9InNfMjIiPiw8L2Rpdj4=",
	xo = "PGRpdiBpZD0ia2Jfc18yMyIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9InNfMjMiPj88L2Rpdj4=",
	yz = "PGRpdiBpZD0ia2Jfc18yNCIgY2xhc3M9InJvdzNwd2RkIiBkYXRhLW5hbWU9InNfMjQiPiE8L2Rpdj4=",
	xw = "PGRpdiBpZD0na2Jfc18yNScgY2xhc3M9J3JvdzNwd2RkJyBkYXRhLW5hbWU9J3NfMjUnPic8L2Rpdj4=",
	yu = "PGRpdiBpZD0ia2Jfc19EIiBjbGFzcz0icm93M3B3ZGMgcm93ZGVsZXQiIGRhdGEtbmFtZT0ic19EIj48ZGl2PjwvZGl2PjwvZGl2Pg==",
	yq = "PC9kaXY+PGRpdiBjbGFzcz0icm93NCI+PGRpdiBpZD0ia2Jfc19DIiBjbGFzcz0icm93NHB3ZGEgcm93MTIzIiBkYXRhLW5hbWU9InNfQyI+QUJDPC9kaXY+",
	xk = "PGRpdiBpZD0ia2Jfc19TUEFDRSIgY2xhc3M9InJvdzRwd2RiIHJvd3NwYWNlIiBkYXRhLW5hbWU9InNfU1BBQ0UiPnNwYWNlPC9kaXY+",
	ym = "PGRpdiBpZD0ia2Jfc19DTE9TRSIgY2xhc3M9InJvdzRwd2RhIHJvd2Nsb3NlIiBkYXRhLW5hbWU9InNfQ0xPU0UiPjxkaXY+PC9kaXY+PC9kaXY+",
	xJ = "PC9kaXY+PC9kaXY+PGRpdiBpZD0icHVyZW51bWJlcl9rZXlib2FyZCIgc3R5bGU9ImRpc3BsYXk6bm9uZTsiPjxkaXYgY2xhc3M9InJvdzYiPg==",
	yQ = "PGRpdiBpZD0ia2JfcF8wIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfMCI+MTwvZGl2Pg==",
	yi = "PGRpdiBpZD0ia2JfcF8xIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfMSI+MjwvZGl2Pg==",
	xf = "PGRpdiBpZD0ia2JfcF8yIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfMiI+MzwvZGl2Pg==",
	yG = "PC9kaXY+PGRpdiBjbGFzcz0icm93NSI+PGRpdiBpZD0ia2JfcF8zIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfMyI+NDwvZGl2Pg==",
	yH = "PGRpdiBpZD0ia2JfcF80IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfNCI+NTwvZGl2Pg==",
	ya = "PGRpdiBpZD0ia2JfcF81IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfNSI+NjwvZGl2Pg==",
	xr = "PC9kaXY+PGRpdiBjbGFzcz0icm93NSI+PGRpdiBpZD0ia2JfcF82IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfNiI+NzwvZGl2Pg==",
	yx = "PGRpdiBpZD0ia2JfcF83IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfNyI+ODwvZGl2Pg==",
	xC = "PGRpdiBpZD0ia2JfcF84IiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfOCI+OTwvZGl2Pg==",
	xY = "PC9kaXY+PGRpdiBjbGFzcz0icm93NSI+PGRpdiBpZD0ia2JfcF9EIiBjbGFzcz0icHdkIiBkYXRhLW5hbWU9InBfRCI+PGRpdj48L2Rpdj48L2Rpdj4=",
	yf = "PGRpdiBpZD0ia2JfcF8xMCIgY2xhc3M9InB3ZCIgZGF0YS1uYW1lPSJwXzEwIj4wPC9kaXY+",
	kj = "PGRpdiBpZD0ia2JfcF9DTE9TRSIgY2xhc3M9InB3ZCIgZGF0YS1uYW1lPSJwX0NMT1NFIj48ZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2Pg==",
	yb = "",
	yS = "",
	xn = "";
	var ce = wO + aB(wb) + aB(wo) + aB(vL) + aB(wk) + aB(vU) + aB(vl) + aB(vI) + aB(xc) + aB(wI) + aB(wj);
	ce += aB(vZ) + aB(vT) + aB(wE) + aB(uj) + aB(tY) + aB(ut) + aB(tq) + aB(tF) + aB(uw) + aB(tQ);
	ce += aB(tu) + aB(uB) + aB(vd) + aB(vh) + aB(tU) + aB(tP) + aB(ud) + aB(tN) + aB(uW) + aB(tJ);
	ce += aB(ub) + aB(uh) + aB(ur) + aB(tn) + aB(uH) + aB(vf) + aB(tL) + aB(uN) + aB(uF) + aB(uG);
	ce += aB(tx) + aB(tZ) + aB(uC) + aB(uY) + aB(tK) + aB(ug) + aB(uD) + aB(vg) + aB(vc) + aB(uU);
	ce += aB(tm) + aB(tw) + aB(ty) + aB(uR) + aB(tM) + aB(uV) + aB(tC) + aB(tE) + aB(uQ) + aB(uk);
	ce += aB(uz) + aB(uE) + aB(uc) + aB(uf) + aB(vb) + aB(tW) + aB(us) + aB(tG) + aB(uo) + aB(tz);
	ce += aB(tp) + aB(va) + aB(tO) + aB(tX) + aB(uK) + aB(uS) + aB(uM) + aB(uv) + aB(vF) + aB(yZ);
	ce += aB(xj) + aB(xM) + aB(xV) + aB(xH) + aB(xN) + aB(xK) + aB(xE) + aB(xo) + aB(yz) + aB(xw);
	ce += aB(yu) + aB(yq) + aB(xk) + aB(ym) + aB(xJ) + aB(yQ) + aB(yi) + aB(xf) + aB(yG) + aB(yH);
	ce += aB(ya) + aB(xr) + aB(yx) + aB(xC) + aB(xY) + aB(yf) + aB(kj) + aB(yb) + aB(yS) + aB(xn);
	$(document.body).append(ce);
	verifyLicense(this.settings.license);
	eW = $(window).height();
	$(".row1pwd,.row2pwd,.row3pwdb").css({
		background: "url(" + BL.SV + "/anjian.svg)",
		backgroundSize: "100% 100%"
	});
	$(".row123").css({
		background: "url(" + BL.SV + "/123.svg) ",
		backgroundSize: "100% 100%"
	});
	$("#kb_c_CAP").css({
		background: "url(" + BL.SV + "/shift.svg) ",
		backgroundSize: "100% 100%"
	});
	$(".rowdelet,#kb_s_N,#kb_n_S").css({
		background: "url(" + BL.SV + "/quanDEL.svg) ",
		backgroundSize: "100% 100%"
	});
	$(".row3pwdd").css({
		background: "url(" + BL.SV + "/quanDEL_2.svg) ",
		backgroundSize: "100% 100%"
	});
	$(".rowspace").css({
		background: "url(" + BL.SV + "/space.svg) ",
		backgroundSize: "100% 100%"
	});
	$(".rowclose").css({
		background: "url(" + BL.SV + "/123.svg) ",
		backgroundSize: "100% 100%"
	});
	$(".pwd").css({
		background: "url(" + BL.SV + "/shuzi_1.svg) ",
		backgroundSize: "100% 100%"
	});
	$("#kb_p_D,#kb_p_CLOSE").css({
		background: "url(" + BL.SV + "/shuzi_2.svg) ",
		backgroundSize: "100% 100%"
	});
	$("#kb_p_D>div").css({
		background: "url(" + BL.SV + "/shuzi_delete1.svg) ",
		backgroundSize: "100% 100%"
	});
	$(".rowdelet>div").css({
		background: "url(" + BL.SV + "/DEL.svg) ",
		backgroundSize: "100% 100%"
	});
	$("#kb_p_CLOSE>div,.rowclose>div").css({
		background: "url(" + BL.SV + "/done_1.svg) ",
		backgroundSize: "100% 100%"
	});
	if ($("body").height() < eW) {
		$("body").css({
			height: "100%"
		});
		$("html").css({
			height: "100%"
		});
	}
	if (this.settings.kbType != 0) {
		$("#purenumber_keyboard").css("display", "block");
		$("#char_keyboard").css("display", "none");
		$("#number_keyboard").css("display", "none");
		$("#symble_keyboard").css("display", "none");
	} else {
		$("#purenumber_keyboard").css("display", "none");
		$("#char_keyboard").css("display", "block");
		$("#number_keyboard").css("display", "none");
		$("#symble_keyboard").css("display", "none");
	}
	var R = this;
	var aY = "#" + this.settings.id;
	aE = 0;
	var ii = parseInt($(aY).css("height"));
	kM = function() {
		if ((R.orientation() == 90) || (R.orientation() == -90)) {
			var jB = Math.max(window.innerHeight, document.documentElement.clientHeight);
			aE = jB * R.ma();
		} else {
			var jB = Math.max(document.documentElement.clientHeight);
			aE = jB * R.ma();
			if (aE < ii) {
				aE = ii;
			};
		}
		$(aY).css("height", aE);
		$("#purenumber_keyboard").css("height", aE);
		$("#char_keyboard").css("height", aE);
		$("#number_keyboard").css("height", aE);
		$("#symble_keyboard").css("height", aE);
		$(".row1,.row6").css({
			marginTop: aE * 0.02 + "px"
		});
		var r1 = new RegExp("row\\d");
		var r2 = new RegExp("_keyboard");
		$(aY).contents("div").filter(function() {
			if (this.id != "purenumber_keyboard") {
				$("#" + this.id).contents("div").filter(function() {
					if (r1.test(this.className)) {
						$(this).contents("div").filter(function() {
							var h = 0.21 * aE;
							$("#" + this.id).css({
								height: h + "px",
								lineHeight: h + "px"
							});
							$(".rowdelet>div").css({
								width: h * 0.51154 + "px"
							});
							$(".rowclose>div").css({
								width: h * 0.76521 + "px"
							});
						});
					}
				});
			} else {
				$("#" + this.id).contents("div").filter(function() {
					if (r1.test(this.className)) {
						$(this).contents("div").filter(function() {
							var h = 0.225 * aE;
							$("#" + this.id).css({
								height: h + "px",
								lineHeight: h + "px"
							});
							$("#kb_p_D>div").css({
								width: h * 0.65263 + "px"
							});
							$("#kb_p_CLOSE>div").css({
								width: h * 0.5625 + "px"
							});
						});
					}
				});
			}
		});
	};
	kM();
	justic3 = function() {
		$(aY).css("height", aE);
		$("#purenumber_keyboard").css("height", aE);
		$("#char_keyboard").css("height", aE);
		$("#number_keyboard").css("height", aE);
		$("#symble_keyboard").css("height", aE);
		$(".row1").css({
			marginTop: aE * 0.02 + "px"
		});
		var r1 = new RegExp("row\\d");
		var r2 = new RegExp("_keyboard");
		$(aY).contents("div").filter(function() {
			if (this.id != "purenumber_keyboard") {
				$("#" + this.id).contents("div").filter(function() {
					if (r1.test(this.className)) {
						$(this).contents("div").filter(function() {
							var h = 0.21 * aE;
							$("#" + this.id).css({
								height: h + "px",
								lineHeight: h + "px"
							});
							$(".rowdelet>div").css({
								width: h * 0.51154 + "px"
							});
							$(".rowclose>div").css({
								width: h * 0.76521 + "px"
							});
						});
					}
				});
			} else {
				$("#" + this.id).contents("div").filter(function() {
					if (r1.test(this.className)) {
						$(this).contents("div").filter(function() {
							var h = 0.225 * aE;
							$("#" + this.id).css({
								height: h + "px",
								lineHeight: h + "px"
							});
							$("#kb_p_D>div").css({
								width: h * 0.65263 + "px"
							});
							$("#kb_p_CLOSE>div").css({
								width: h * 0.5625 + "px"
							});
						});
					}
				});
			}
		});
	};
	if (!this.aV) {
		var pe = new RegExp("_keyboard");
		var sJ = new RegExp("kb_");
		var nQ = new RegExp("row\\d");
		var images = new Array();
		function preload() {
			for (i = 0; i < preload.arguments.length; i++) {
				images[i] = new Image();
				images[i].src = preload.arguments[i];
			}
		};
		preload(BL.SV + "/123.svg", BL.SV + "/123_2.svg", BL.SV + "/anjian.svg", BL.SV + "/anjian_2.svg", BL.SV + "/DEL.svg", BL.SV + "/DEL_2.svg", BL.SV + "/shuzi_delete2.svg", BL.SV + "/shuzi_delete1.svg", BL.SV + "/done_1.svg", BL.SV + "/shuzi_1.svg", BL.SV + "/shuzi_2.svg", BL.SV + "/space.svg", BL.SV + "/space_2.svg", BL.SV + "/dianji_left.svg", BL.SV + "/dianji_right.svg", BL.SV + "/dianji.svg", BL.SV + "/quanDEL.svg", BL.SV + "/quanDEL_2.svg", BL.SV + "/shift.svg", BL.SV + "/shift_D.svg", BL.SV + "/shift_DS.svg");
		var kZ = function(aK) {
			function call(url, color) {
				var img = new Image;
				img.onload = function() {
					if (!color) {
						$("#" + aK).css({
							backgroundImage: 'url(' + img.src + ')',
							backgroundSize: "100% 100%"
						});
					} else {
						$("#" + aK).css({
							backgroundImage: 'url(' + img.src + ')',
							backgroundSize: "100% 100%",
							color: color
						});
					}
				};
				img.src = url;
			};
			function call2(url) {
				var img = new Image;
				img.onload = function() {
					$("#" + aK + ">div").css({
						backgroundImage: 'url(' + img.src + ')',
						backgroundSize: "100% 100%"
					});
				};
				img.src = url;
			};
			var event = 0;
			if (sJ.test(aK)) {
				var nR = /_p_/;
				var oq = /_n_/;
				var pU = /_c_/;
				var nV = /_s_/;
				if (nR.test(aK)) {
					function del() {
						if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
							setTimeout(function() {
								var url = BL.SV + "/shuzi_2.svg";
								var url2 = BL.SV + "/shuzi_delete1.svg";
								var img = new Image;
								img.onload = function() {
									$("#kb_p_D").css({
										backgroundImage: 'url(' + img.src + ')',
										backgroundSize: "100% 100%"
									});
									$("#kb_p_D>div").css({
										backgroundImage: 'url(' + img.src2 + ')',
										backgroundSize: "100% 100%"
									});
								};
								img.src = url;
								img.src2 = url2;
							},
							100);
						}
						clearInterval(dv);
						for (var bG = 0; bG < av.length; bG++) {
							clearInterval(av[bG]);
						}
						av = [];
						var input = document.getElementById(R.settings.aQ.settings.id);
						var dO = "";
						if (R.settings.hasMap == 1) {
							for (var i = 0; i < R.settings.aQ.bu.length; i++) {
								dO += "*";
							};
						} else {
							for (var i = 0; i < R.settings.aQ.bg; i++) {
								dO += "*";
							};
						}
						if (R.settings.aQ.settings.displayMode == 1) {
							var fq = R.settings.aQ;
							if (R.settings.aQ.bg == 0) {
								input.value = "";
							} else {
								input.value = (fq.asm + fq.bsm + fq.csm + fq.dsm + fq.esm + fq.fsm + fq.gsm + fq.hsm + fq.ism + fq.jsm + fq.ksm + fq.lsm + fq.msm + fq.nsm + fq.osm + fq.psm + fq.qsm + fq.rsm + fq.ssm + fq.tsm + fq.usm + fq.vsm + fq.wsm + fq.xsm + fq.ysm + fq.zsm + fq.aasm + fq.bbsm + fq.ccsm + fq.ddsm).substring(0, fq.bg)
							}
						} else {
							input.value = dO;
						};
						BL.double = 0;
					};
					if ((aK != "kb_p_D") && (aK != "kb_p_CLOSE")) {
						$("#" + aK).on("touchstart",
						function(e) {
							if (BL.double == 0) {
								BL.once = 0;
								BL.Mov = 0;
								var key = this.innerText;
								BL.key2 = $(this).attr("data-name");
								BL.double = 1;
								if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
									var url = BL.SV + "/shuzi_2.svg";
									var img = new Image;
									img.src = url;
									img.onload = function() {
										$(".anxia2").css({
											background: 'url(' + BL.SV + '/shuzi_1.svg' + ')',
											backgroundSize: "100% 100%"
										});
										$("#purenumber_keyboard div").removeClass("anxia2");
										$("#" + aK).addClass("anxia2");
										$("#" + aK).css({
											backgroundImage: 'url(' + BL.SV + '/shuzi_2.svg' + ')',
											backgroundSize: "100% 100%",
											color: "#000"
										});
									}
								};
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
							}
							e.preventDefault();
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH + 1) {
								setTimeout(function() {
									call(BL.SV + "/shuzi_1.svg");
								},
								100);
								BL.double = 0;
								e.preventDefault();
								if (R.settings.chaosMode == 2 && event == 0 && BL.once == 0) {
									var aN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
									aN = R.gC(aN);
									var au = $("#purenumber_keyboard")[0].querySelectorAll(".pwd");
									var bY = [];
									for (var j = 0,
									i = 0; j < au.length; j++) {
										if (au[j].id == "kb_p_CLOSE" || au[j].id == "kb_p_D") continue;
										i++;
										bY.push(au[j]);
									}
									for (var j = 0; j < bY.length; j++) {
										bY[j].innerHTML = aN[j];
									}
								};
								BL.once = 1;
								BL.Mov = 1;
							};
						});
						$("#" + aK).on("touchend",
						function(e) {
							if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
								BL.double = 0;
								setTimeout(function() {
									call(BL.SV + "/shuzi_1.svg");
								},
								100);
								e.preventDefault();
								if (R.settings.chaosMode == 2 && event == 0) {
									var aN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
									aN = R.gC(aN);
									var au = $("#purenumber_keyboard")[0].querySelectorAll(".pwd");
									var bY = [];
									for (var j = 0,
									i = 0; j < au.length; j++) {
										if (au[j].id == "kb_p_CLOSE" || au[j].id == "kb_p_D") continue;
										i++;
										bY.push(au[j]);
									}
									for (var j = 0; j < bY.length; j++) {
										bY[j].innerHTML = aN[j];
									}
								}
							}
						});
					} else if (aK == "kb_p_D") {
						var event = 2;
						var dv;
						av = [];
						$("#" + aK).on("touchstart",
						function(e) {
							if (BL.double == 0) {
								BL.double = 1;
								BL.once = 0;
								BL.Mov = 0;
								var key = this.innerText;
								BL.key2 = $(this).attr("data-name");
								$(".anxia2").css({
									background: 'url(' + BL.SV + '/shuzi_1.svg' + ')',
									backgroundSize: "100% 100%"
								});
								$(".pwd").removeClass("anxia2");
								if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
									var url = BL.SV + "/shuzi_1.svg";
									var url2 = BL.SV + "/shuzi_delete2.svg";
									var img = new Image;
									img.onload = function() {
										$("#kb_p_D").css({
											backgroundImage: 'url(' + img.src + ')',
											backgroundSize: "100% 100%"
										});
										$("#kb_p_D>div").css({
											backgroundImage: 'url(' + img.src2 + ')',
											backgroundSize: "100% 100%"
										});
									};
									img.src = url;
									img.src2 = url2;
								}
								fr = new Date().getTime();
								dv = window.setInterval(function() {
									eO = new Date().getTime();
									var x = eO - fr;
									if (x > 500) {
										var input = document.getElementById(R.settings.aQ.settings.id);
										var fK = setInterval(function() {
											if (R.settings.hasMap == 1) {
												R.settings.aQ.bu = R.settings.aQ.bu.substr(0, R.settings.aQ.bu.length - 1);
											}
											R.settings.aQ.bg -= 1;
											if (R.settings.aQ.bg < 0) R.settings.aQ.bg = 0;
											if (R.settings.aQ.bg == 0) R.settings.aQ.asm = [""];
											if (R.settings.aQ.bg == 1) R.settings.aQ.bsm = [""];
											if (R.settings.aQ.bg == 2) R.settings.aQ.csm = [""];
											if (R.settings.aQ.bg == 3) R.settings.aQ.dsm = [""];
											if (R.settings.aQ.bg == 4) R.settings.aQ.esm = [""];
											if (R.settings.aQ.bg == 5) R.settings.aQ.fsm = [""];
											if (R.settings.aQ.bg == 6) R.settings.aQ.gsm = [""];
											if (R.settings.aQ.bg == 7) R.settings.aQ.hsm = [""];
											if (R.settings.aQ.bg == 8) R.settings.aQ.ism = [""];
											if (R.settings.aQ.bg == 9) R.settings.aQ.jsm = [""];
											if (R.settings.aQ.bg == 10) R.settings.aQ.ksm = [""];
											if (R.settings.aQ.bg == 11) R.settings.aQ.lsm = [""];
											if (R.settings.aQ.bg == 12) R.settings.aQ.msm = [""];
											if (R.settings.aQ.bg == 13) R.settings.aQ.nsm = [""];
											if (R.settings.aQ.bg == 14) R.settings.aQ.osm = [""];
											if (R.settings.aQ.bg == 15) R.settings.aQ.psm = [""];
											if (R.settings.aQ.bg == 16) R.settings.aQ.qsm = [""];
											if (R.settings.aQ.bg == 17) R.settings.aQ.rsm = [""];
											if (R.settings.aQ.bg == 18) R.settings.aQ.ssm = [""];
											if (R.settings.aQ.bg == 19) R.settings.aQ.tsm = [""];
											if (R.settings.aQ.bg == 20) R.settings.aQ.usm = [""];
											if (R.settings.aQ.bg == 21) R.settings.aQ.vsm = [""];
											if (R.settings.aQ.bg == 22) R.settings.aQ.wsm = [""];
											if (R.settings.aQ.bg == 23) R.settings.aQ.xsm = [""];
											if (R.settings.aQ.bg == 24) R.settings.aQ.ysm = [""];
											if (R.settings.aQ.bg == 25) R.settings.aQ.zsm = [""];
											if (R.settings.aQ.bg == 26) R.settings.aQ.aasm = [""];
											if (R.settings.aQ.bg == 27) R.settings.aQ.bbsm = [""];
											if (R.settings.aQ.bg == 28) R.settings.aQ.ccsm = [""];
											if (R.settings.aQ.bg == 29) R.settings.aQ.ddsm = [""];
											input.value = input.value.substr(0, input.value.length - 1);
											if (R.settings.aQ.settings.jump == 1) {
												R.settings.aQ.settings.del(R.settings.aQ.bg);
											}
										},
										50);
										av.push(fK);
										clearInterval(dv);
									}
								},
								1);
								e.preventDefault();
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								return false;
							}
						});
						$("#" + aK).on("touchend",
						function(e) {
							if (BL.key2 == $(this).attr("data-name")) {
								del();
								e.preventDefault();
								return false;
							}
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH + 1) {
								del();
								e.preventDefault();
								return false;
							}
						});
					};
					$("#" + aK).on("touchend",
					function(e) {
						if (aK == "kb_p_CLOSE" && (R.settings.pressStatus == 1 || R.settings.pressStatus == 2)) {
							setTimeout(function() {
								call(BL.SV + "/shuzi_2.svg");
							},
							100);
						};
					});
					$("#" + aK).on("touchstart",
					function(e) {
						var key = this.innerText;
						BL.WH = $(window).height();
						if (aK != "kb_p_D") {
							if (aK == "kb_p_CLOSE" && BL.double == 0) {
								if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
									call(BL.SV + "/shuzi_1.svg");
								};
								if (BL.fixed == "") {
									$("body").css({
										position: "relative",
										left: 0,
										top: 0,
										dQ: "all 0.3s"
									});
								} else {
									$("body").css({
										position: "relative",
										left: 0,
										top: 0,
										dQ: "all 0.3s"
									});
									$("#" + BL.fixed).css({
										bottom: 0 + "px",
										dQ: "all 0.3s"
									});
								};
								setTimeout(function() {
									PH.s_n();
									PH.add++;
									PH.cs = 1;
									R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								},
								50);
								$(aY).removeClass("pwdkeyboard").addClass("pwdkeyboardout");
								document.querySelector(aY).addEventListener("webkitAnimationEnd", R.cf, false);
								document.querySelector(aY).addEventListener("animationEnd", R.cf, false);
								event = 1;
								e.preventDefault();
							};
						};
					});
				}
				if (pU.test(aK)) {
					function del2() {
						if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
							setTimeout(function() {
								var url = BL.SV + "/quanDEL.svg";
								var img = new Image;
								img.src = url;
								img.onload = function() {
									$("#kb_c_D").css({
										backgroundImage: 'url(' + BL.SV + '/quanDEL.svg' + ')',
										backgroundSize: "100% 100%"
									});
									$("#kb_c_D>div").css({
										backgroundImage: 'url(' + BL.SV + '/DEL.svg' + ')',
										backgroundSize: "100% 100%"
									});
								}
							},
							100);
						}
						clearInterval(dv);
						for (var bG = 0; bG < av.length; bG++) {
							clearInterval(av[bG]);
						}
						av = [];
						var input = document.getElementById(R.settings.aQ.settings.id);
						var dO = "";
						if (R.settings.hasMap == 1) {
							for (var i = 0; i < R.settings.aQ.bu.length; i++) {
								dO += "*";
							};
						} else {
							for (var i = 0; i < R.settings.aQ.bg; i++) {
								dO += "*";
							};
						}
						if (R.settings.aQ.settings.displayMode == 1) {
							var fq = R.settings.aQ;
							if (R.settings.aQ.bg == 0) {
								input.value = "";
							} else {
								input.value = (fq.asm + fq.bsm + fq.csm + fq.dsm + fq.esm + fq.fsm + fq.gsm + fq.hsm + fq.ism + fq.jsm + fq.ksm + fq.lsm + fq.msm + fq.nsm + fq.osm + fq.psm + fq.qsm + fq.rsm + fq.ssm + fq.tsm + fq.usm + fq.vsm + fq.wsm + fq.xsm + fq.ysm + fq.zsm + fq.aasm + fq.bbsm + fq.ccsm + fq.ddsm).substring(0, fq.bg)
							}
						} else {
							input.value = dO;
						};
						BL.double = 0;
					};
					if ((aK != "kb_c_D") && (aK != "kb_c_CLOSE") && (aK != "kb_c_CAP")) {
						var zJ = 1;
						$("#" + aK).on("touchstart",
						function(e) {
							if (BL.double == 0) {
								var key = this.innerText;
								clearTimeout(BL.FD);
								BL.once = 0;
								BL.Mov = 0;
								BL.key2 = $(this).attr("data-name");
								BL.double = 1;
								$(".fd").eq(0).remove();
								if (/_SPACE/i.test(aK)) {
									event = 7;
									if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
										var url = BL.SV + "/space_2.svg";
										var img = new Image;
										img.src = url;
										img.onload = function() {
											$(".anxia").css({
												background: "url(" + BL.SV + "/anjian.svg) ",
												backgroundSize: "100% 100%"
											});
											$("#char_keyboard div").removeClass("anxia");
											$("#kb_c_SPACE").css({
												backgroundImage: 'url(' + BL.SV + '/space_2.svg' + ')',
												backgroundSize: "100% 100%"
											});
										}
									}
								} else if (/_N/.test(aK) || /_C/.test(aK) || /_S/.test(aK)) {
									event = 7;
									if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
										call(BL.SV + "/123_2.svg");
									}
								} else {
									if (R.settings.pressStatus == 1) {
										var cc = $(this);
										var Html = $(this).html();
										cc.append($("<div class='fd'></div>"));
										cc.css({
											position: "relative"
										});
										if (cc.hasClass("rowleft")) {
											var img = new Image;
											img.src = BL.SV + '/dianji_left.svg';
											img.onload = function() {
												$(".fd").eq(0).html(Html);
												$(".fd").eq(0).css({
													backgroundImage: 'url(' + img.src + ')',
													backgroundSize: "100% 100%",
													position: "absolute",
													width: "140%",
													height: aE * 0.4 + "px",
													left: 0,
													bottom: "0px",
													textAlign: "center",
													fontSize: "1.5em",
													zIndex: "999",
													lineHeight: aE * 0.23 + "px"
												});
											}
										} else if (cc.hasClass("rowright")) {
											var img = new Image;
											img.src = BL.SV + '/dianji_right.svg';
											img.onload = function() {
												$(".fd").eq(0).html(Html);
												$(".fd").eq(0).css({
													backgroundImage: 'url(' + img.src + ')',
													backgroundSize: "100% 100%",
													position: "absolute",
													width: "140%",
													height: aE * 0.4 + "px",
													right: 0,
													bottom: "0px",
													textAlign: "center",
													fontSize: "1.5em",
													zIndex: "999",
													lineHeight: aE * 0.23 + "px"
												});
											}
										} else {
											var img = new Image;
											img.src = BL.SV + '/dianji.svg';
											img.onload = function() {
												$(".fd").eq(0).html(Html);
												$(".fd").eq(0).css({
													backgroundImage: 'url(' + img.src + ')',
													backgroundSize: "100% 100%",
													position: "absolute",
													width: "140%",
													height: aE * 0.4 + "px",
													left: "-20%",
													bottom: "0px",
													textAlign: "center",
													fontSize: "1.5em",
													zIndex: "999",
													lineHeight: aE * 0.23 + "px"
												});
											}
										}
									} else if (R.settings.pressStatus == 2) {
										var url = BL.SV + "/anjian_2.svg";
										var img = new Image;
										img.src = url;
										img.onload = function() {
											$(".anxia").css({
												background: "url(" + BL.SV + "/anjian.svg) ",
												backgroundSize: "100% 100%"
											});
											$("#char_keyboard div").removeClass("anxia");
											$("#" + aK).addClass("anxia");
											$("#" + aK).css({
												backgroundImage: 'url(' + BL.SV + '/anjian_2.svg' + ')',
												backgroundSize: "100% 100%"
											});
										}
									}
								}
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								e.preventDefault();
							}
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH + 1 && BL.Mov == 0) {
								if (/_SPACE/i.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/space.svg");
									},
									100);
								} else if (/_N/.test(aK) || /_C/.test(aK) || /_S/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/123.svg");
									},
									100);
								} else {
									setTimeout(function() {
										$(".fd").eq(0).remove();
									},
									100);
									call(BL.SV + "/anjian.svg");
									if (!R.caps && R.shift) {
										setTimeout(function() {
											$("#char_keyboard").contents("div").filter(function() {
												$(this).contents("div").filter(function() {
													var c = $(this).text();
													if (c.length == 1) {
														this.innerText = c.toLowerCase();
													} else if (2 <= c.length && c.length <= 3) {
														this.innerText = c.substring(0, 1).toLowerCase();
													}
												});
											});
										},
										100);
										if ((R.orientation() == 90) || (R.orientation() == -90)) {
											$("#kb_c_CAP").css({
												background: "url(" + BL.SV + "/shift_H.svg) ",
												backgroundSize: "100% 100%"
											});
										} else {
											$("#kb_c_CAP").css({
												background: "url(" + BL.SV + "/shift.svg) ",
												backgroundSize: "100% 100%"
											});
										}
									};
									R.shift = false;
									if (R.settings.chaosMode == 2 && event == 0 && BL.Mov == 0) {
										var aN = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
										aN = R.gC(aN, R.caps);
										var au = $("#char_keyboard")[0].querySelectorAll(".row1pwd,.row2pwd,.row3pwdb");
										setTimeout(function() {
											for (var j = 0; j < au.length; j++) {
												au[j].innerHTML = aN[j];
											}
										},
										100)
									}
								};
								BL.once = 1;
								BL.Mov = 1;
								BL.double = 0;
								e.preventDefault();
							}
						});
						$("#" + aK).on("touchend",
						function(e) {
							if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
								BL.double = 0;
								if (/_SPACE/i.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/space.svg");
									},
									100);
								} else if (/_N/.test(aK) || /_C/.test(aK) || /_S/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/123.svg");
									},
									100);
								} else {
									BL.FD = setTimeout(function() {
										$(".fd").eq(0).remove();
									},
									100);
									setTimeout(function() {
										call(BL.SV + "/anjian.svg");
									},
									100);
								};
							}
							e.preventDefault();
						});
					} else if (aK == "kb_c_D") {
						var key = this.innerText;
						var dv;
						var av = [];
						var event = 2;
						$("#" + aK).on("touchstart",
						function(e) {
							if (BL.double == 0) {
								BL.double = 1;
								BL.once = 0;
								BL.Mov = 0;
								BL.key2 = $(this).attr("data-name");
								var key = this.innerText;
								if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
									$(".anxia").css({
										background: "url(" + BL.SV + "/anjian.svg) ",
										backgroundSize: "100% 100%"
									});
									$("#char_keyboard div").removeClass("anxia");
									var url = BL.SV + "/quanDEL_2.svg";
									var img = new Image;
									img.src = url;
									img.onload = function() {
										$("#kb_c_D").css({
											backgroundImage: 'url(' + BL.SV + '/quanDEL_2.svg' + ')',
											backgroundSize: "100% 100%"
										});
										$("#kb_c_D>div").css({
											backgroundImage: 'url(' + BL.SV + '/DEL_2.svg' + ')',
											backgroundSize: "100% 100%"
										});
									}
								}
								fr = new Date().getTime();
								dv = window.setInterval(function() {
									eO = new Date().getTime();
									var x = eO - fr;
									if (x > 500) {
										var input = document.getElementById(R.settings.aQ.settings.id);
										var fK = setInterval(function() {
											if (R.settings.hasMap == 1) {
												R.settings.aQ.bu = R.settings.aQ.bu.substr(0, R.settings.aQ.bu.length - 1);
											};
											R.settings.aQ.bg -= 1;
											if (R.settings.aQ.bg < 0) R.settings.aQ.bg = 0;
											if (R.settings.aQ.bg == 0) R.settings.aQ.asm = [""];
											if (R.settings.aQ.bg == 1) R.settings.aQ.bsm = [""];
											if (R.settings.aQ.bg == 2) R.settings.aQ.csm = [""];
											if (R.settings.aQ.bg == 3) R.settings.aQ.dsm = [""];
											if (R.settings.aQ.bg == 4) R.settings.aQ.esm = [""];
											if (R.settings.aQ.bg == 5) R.settings.aQ.fsm = [""];
											if (R.settings.aQ.bg == 6) R.settings.aQ.gsm = [""];
											if (R.settings.aQ.bg == 7) R.settings.aQ.hsm = [""];
											if (R.settings.aQ.bg == 8) R.settings.aQ.ism = [""];
											if (R.settings.aQ.bg == 9) R.settings.aQ.jsm = [""];
											if (R.settings.aQ.bg == 10) R.settings.aQ.ksm = [""];
											if (R.settings.aQ.bg == 11) R.settings.aQ.lsm = [""];
											if (R.settings.aQ.bg == 12) R.settings.aQ.msm = [""];
											if (R.settings.aQ.bg == 13) R.settings.aQ.nsm = [""];
											if (R.settings.aQ.bg == 14) R.settings.aQ.osm = [""];
											if (R.settings.aQ.bg == 15) R.settings.aQ.psm = [""];
											if (R.settings.aQ.bg == 16) R.settings.aQ.qsm = [""];
											if (R.settings.aQ.bg == 17) R.settings.aQ.rsm = [""];
											if (R.settings.aQ.bg == 18) R.settings.aQ.ssm = [""];
											if (R.settings.aQ.bg == 19) R.settings.aQ.tsm = [""];
											if (R.settings.aQ.bg == 20) R.settings.aQ.usm = [""];
											if (R.settings.aQ.bg == 21) R.settings.aQ.vsm = [""];
											if (R.settings.aQ.bg == 22) R.settings.aQ.wsm = [""];
											if (R.settings.aQ.bg == 23) R.settings.aQ.xsm = [""];
											if (R.settings.aQ.bg == 24) R.settings.aQ.ysm = [""];
											if (R.settings.aQ.bg == 25) R.settings.aQ.zsm = [""];
											if (R.settings.aQ.bg == 26) R.settings.aQ.aasm = [""];
											if (R.settings.aQ.bg == 27) R.settings.aQ.bbsm = [""];
											if (R.settings.aQ.bg == 28) R.settings.aQ.ccsm = [""];
											if (R.settings.aQ.bg == 29) R.settings.aQ.ddsm = [""];
											input.value = input.value.substr(0, input.value.length - 1);
											if (R.settings.aQ.settings.jump == 1) {
												R.settings.aQ.settings.del(R.settings.aQ.bg);
											}
										},
										50);
										av.push(fK);
										clearInterval(dv);
									}
								},
								1);
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								e.preventDefault();
								return false;
							}
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH) {
								del2();
							}
							e.preventDefault();
							return false;
						});
						$("#" + aK).on("touchend",
						function(e) {
							if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
								del2();
								BL.Mov = 1;
								e.preventDefault();
								return false;
							}
						});
					}
					if (aK == "kb_c_CAP") {
						function CAPtap() {
							if (!R.dt) {
								if (R.caps) {
									R.caps = false;
									R.shift = false;
									if ((R.orientation() == 90) || (R.orientation() == -90)) {
										call(BL.SV + "/shift_H.svg");
									} else {
										call(BL.SV + "/shift.svg");
									}
								} else {
									if (R.shift) {
										R.shift = false;
										if ((R.orientation() == 90) || (R.orientation() == -90)) {
											call(BL.SV + "/shift_H.svg");
										} else {
											call(BL.SV + "/shift.svg");
										}
									} else {
										R.shift = true;
										if ((R.orientation() == 90) || (R.orientation() == -90)) {
											call(BL.SV + "/shift_D_H.svg");
										} else {
											call(BL.SV + "/shift_D.svg");
										}
									}
									if (R.caps) {
										R.caps = false;
										if ((R.orientation() == 90) || (R.orientation() == -90)) {
											call(BL.SV + "/shift_H.svg");
										} else {
											call(BL.SV + "/shift.svg");
										}
									}
								}
							} else {
								R.dt = false;
							}
							if (R.caps || R.shift) {
								$("#char_keyboard").contents("div").filter(function() {
									$(this).contents("div").filter(function() {
										var c = this.innerText;
										if (c.length == 1) {
											this.innerText = c.toUpperCase();
										} else if (2 <= c.length && c.length <= 3) {
											this.innerText = c.substring(0, 1).toUpperCase();
										}
									});
								});
							} else {
								$("#char_keyboard").contents("div").filter(function() {
									$(this).contents("div").filter(function() {
										var c = this.innerText;
										if (c.length == 1) {
											this.innerText = c.toLowerCase();
										} else if (2 <= c.length && c.length <= 3) {
											this.innerText = c.substring(0, 1).toLowerCase();
										}
									});
								});
							}
							$(".fd").remove();
							var now = new Date().getTime();
							var lv = $(this).data('lastTouch') || now + 1;
							var nr = now - lv;
							if (nr < 600 && nr > 0) {
								R.caps = true;
								if ((R.orientation() == 90) || (R.orientation() == -90)) {
									call(BL.SV + "/shift_DS_H.svg");
								} else {
									call(BL.SV + "/shift_DS.svg");
								}
								$("#char_keyboard").contents("div").filter(function() {
									$(this).contents("div").filter(function() {
										var c = this.innerText;
										if (c.length == 1) {
											this.innerText = c.toUpperCase();
										}
									});
								});
							} else {
								$(this).data('lastTouch', now);
							}
							BL.double = 0;
						};
						$("#" + aK).on('touchstart',
						function(event) {
							if (BL.double == 0) {
								BL.double = 1;
								BL.once = 0;
								BL.Mov = 0;
								var key = this.innerText;
								BL.key2 = $(this).attr("data-name");
							}
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH && BL.Mov == 0) {
								if (!R.dt) {
									if (R.caps) {
										R.caps = false;
										R.shift = false;
										if ((R.orientation() == 90) || (R.orientation() == -90)) {
											call(BL.SV + "/shift_H.svg");
										} else {
											call(BL.SV + "/shift.svg");
										}
									} else {
										if (R.shift) {
											R.shift = false;
											if ((R.orientation() == 90) || (R.orientation() == -90)) {
												call(BL.SV + "/shift_H.svg");
											} else {
												call(BL.SV + "/shift.svg");
											}
										} else {
											R.shift = true;
											if ((R.orientation() == 90) || (R.orientation() == -90)) {
												call(BL.SV + "/shift_D_H.svg");
											} else {
												call(BL.SV + "/shift_D.svg");
											}
										}
										if (R.caps) {
											R.caps = false;
											if ((R.orientation() == 90) || (R.orientation() == -90)) {
												call(BL.SV + "/shift_H.svg");
											} else {
												call(BL.SV + "/shift.svg");
											}
										}
									}
								} else {
									R.dt = false;
								}
								if (R.caps || R.shift) {
									$("#char_keyboard").contents("div").filter(function() {
										$(this).contents("div").filter(function() {
											var c = this.innerText;
											if (c.length == 1) {
												this.innerText = c.toUpperCase();
											} else if (2 <= c.length && c.length <= 3) {
												this.innerText = c.substring(0, 1).toUpperCase();
											}
										});
									});
								} else {
									$("#char_keyboard").contents("div").filter(function() {
										$(this).contents("div").filter(function() {
											var c = this.innerText;
											if (c.length == 1) {
												this.innerText = c.toLowerCase();
											} else if (2 <= c.length && c.length <= 3) {
												this.innerText = c.substring(0, 1).toLowerCase();
											}
										});
									});
								}
								BL.double = 0;
								BL.once = 1;
								BL.Mov = 1;
							}
							e.preventDefault();
							return false;
						});
						$("#" + aK).on('touchend',
						function(event) {
							if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
								CAPtap();
								BL.Mov = 1;
							}
						});
						event = 7;
					}
					$("#" + aK).on("touchend",
					function(e) {
						if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
							if (aK != "kb_c_D" && aK != "kb_c_SPACE" && aK != "kb_c_CLOSE" && aK != "kb_c_CAP" && aK != "kb_c_N") {
								if (!R.caps && R.shift) {
									setTimeout(function() {
										$("#char_keyboard").contents("div").filter(function() {
											$(this).contents("div").filter(function() {
												var c = $(this).text();
												if (c.length == 1) {
													this.innerText = c.toLowerCase();
												} else if (2 <= c.length && c.length <= 3) {
													this.innerText = c.substring(0, 1).toLowerCase();
												}
											});
										});
									},
									100);
									if ((R.orientation() == 90) || (R.orientation() == -90)) {
										$("#kb_c_CAP").css({
											background: "url(" + BL.SV + "/shift_H.svg) ",
											backgroundSize: "100% 100%"
										});
									} else {
										$("#kb_c_CAP").css({
											background: "url(" + BL.SV + "/shift.svg) ",
											backgroundSize: "100% 100%"
										});
									}
								};
								R.shift = false;
							}
							if (aK == "kb_c_N") {
								setTimeout(function() {
									$("#char_keyboard").css("display", "none");
									$("#number_keyboard").css("display", "block");
									$("#symble_keyboard").css("display", "none");
									$("#purenumber_keyboard").css("display", "none");
									justic3();
								},
								80)
							}
							if (aK == "kb_c_CLOSE" && (R.settings.pressStatus == 1 || R.settings.pressStatus == 2)) {
								setTimeout(function() {
									call(BL.SV + "/123.svg");
								},
								100);
							}
							if (R.settings.chaosMode == 2 && event == 0 && BL.Mov == 0) {
								var aN = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
								aN = R.gC(aN, R.caps);
								var au = $("#char_keyboard")[0].querySelectorAll(".row1pwd,.row2pwd,.row3pwdb");
								setTimeout(function() {
									for (var j = 0; j < au.length; j++) {
										au[j].innerHTML = aN[j];
									}
								},
								100)
							}
							BL.Mov = 1;
						}
					});
					$("#" + aK).on("touchstart",
					function(e) {
						BL.WH = $(window).height();
						var key = this.innerText;
						if (aK != "kb_c_D") {
							if (aK == "kb_c_SPACE") {
								return;
							} else if (aK == "kb_c_CLOSE" && BL.double == 0) {
								if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
									call(BL.SV + "/123_2.svg");
								};
								if (BL.fixed == "") {
									$("body").css({
										position: "relative",
										left: 0,
										top: 0,
										dQ: "all 0.3s"
									});
								} else {
									$("body").css({
										position: "relative",
										left: 0,
										top: 0,
										dQ: "all 0.3s"
									});
									$("#" + BL.fixed).css({
										bottom: 0 + "px",
										dQ: "all 0.3s"
									});
								};
								$(aY).removeClass("pwdkeyboard").addClass("pwdkeyboardout");
								document.querySelector(aY).addEventListener("webkitAnimationEnd", R.cf, false);
								document.querySelector(aY).addEventListener("animationEnd", R.cf, false);
								event = 1;
								setTimeout(function() {
									PH.s_n();
									PH.add++;
									PH.cs = 1;
									R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								},
								80)
							}
							e.preventDefault();
						}
					});
				}
				if (oq.test(aK)) {
					function del3() {
						if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
							setTimeout(function() {
								var url = BL.SV + "/quanDEL.svg";
								var img = new Image;
								img.src = url;
								img.onload = function() {
									$("#kb_n_D").css({
										backgroundImage: 'url(' + BL.SV + '/quanDEL.svg' + ')',
										backgroundSize: "100% 100%"
									});
									$("#kb_n_D>div").css({
										backgroundImage: 'url(' + BL.SV + '/DEL.svg' + ')',
										backgroundSize: "100% 100%"
									});
								}
							},
							80);
						}
						clearInterval(dv);
						for (var bG = 0; bG < av.length; bG++) {
							clearInterval(av[bG]);
						}
						av = [];
						var input = document.getElementById(R.settings.aQ.settings.id);
						var dO = "";
						if (R.settings.hasMap == 1) {
							for (var i = 0; i < R.settings.aQ.bu.length; i++) {
								dO += "*";
							};
						} else {
							for (var i = 0; i < R.settings.aQ.bg; i++) {
								dO += "*";
							};
						}
						if (R.settings.aQ.settings.displayMode == 1) {
							var fq = R.settings.aQ;
							if (R.settings.aQ.bg == 0) {
								input.value = "";
							} else {
								input.value = (fq.asm + fq.bsm + fq.csm + fq.dsm + fq.esm + fq.fsm + fq.gsm + fq.hsm + fq.ism + fq.jsm + fq.ksm + fq.lsm + fq.msm + fq.nsm + fq.osm + fq.psm + fq.qsm + fq.rsm + fq.ssm + fq.tsm + fq.usm + fq.vsm + fq.wsm + fq.xsm + fq.ysm + fq.zsm + fq.aasm + fq.bbsm + fq.ccsm + fq.ddsm).substring(0, fq.bg)
							}
						} else {
							input.value = dO;
						};
						BL.double = 0;
					};
					if ((aK != "kb_n_D") && (aK != "kb_n_CLOSE")) {
						$("#" + aK).on("touchstart",
						function(e) {
							if (BL.double == 0) {
								var key = this.innerText;
								clearTimeout(BL.FD);
								BL.once = 0;
								BL.Mov = 0;
								BL.key2 = $(this).attr("data-name");
								BL.double = 1;
								$(".fd").eq(0).remove();
								if (/_SPACE/i.test(aK)) {
									event = 7;
									if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
										var url = BL.SV + "/space_2.svg";
										var img = new Image;
										img.src = url;
										img.onload = function() {
											$(".anxia").css({
												background: "url(" + BL.SV + "/anjian.svg) ",
												backgroundSize: "100% 100%"
											});
											$(".anxia5").css({
												background: "url(" + BL.SV + "/quanDEL_2.svg) ",
												backgroundSize: "100% 100%"
											});
											$("#number_keyboard div").removeClass("anxia");
											$("#kb_n_SPACE").css({
												backgroundImage: 'url(' + BL.SV + '/space_2.svg' + ')',
												backgroundSize: "100% 100%"
											});
										}
									}
								} else if (/_C/.test(aK)) {
									event = 7;
									if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
										call(BL.SV + "/123_2.svg");
									}
								} else if (/_S/.test(aK)) {
									event = 7;
									if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
										call(BL.SV + "/quanDEL_2.svg");
									}
								} else {
									if (R.settings.pressStatus == 1) {
										var cc = $(this);
										var Html = $(this).html();
										cc.append($("<div class='fd'></div>"));
										cc.css({
											position: "relative"
										});
										if (cc.hasClass("rowleft")) {
											var img = new Image;
											img.src = BL.SV + '/dianji_left.svg';
											img.onload = function() {
												$(".fd").eq(0).html(Html);
												$(".fd").eq(0).css({
													backgroundImage: 'url(' + img.src + ')',
													backgroundSize: "100% 100%",
													position: "absolute",
													width: "140%",
													height: aE * 0.4 + "px",
													left: 0,
													bottom: "0px",
													textAlign: "center",
													fontSize: "1.5em",
													zIndex: "999",
													lineHeight: aE * 0.19 + "px"
												});
											}
										} else if (cc.hasClass("rowright")) {
											var img = new Image;
											img.src = BL.SV + '/dianji_right.svg';
											img.onload = function() {
												$(".fd").eq(0).html(Html);
												$(".fd").eq(0).css({
													backgroundImage: 'url(' + img.src + ')',
													backgroundSize: "100% 100%",
													position: "absolute",
													width: "140%",
													height: aE * 0.4 + "px",
													right: 0,
													bottom: "0px",
													textAlign: "center",
													fontSize: "1.5em",
													zIndex: "999",
													lineHeight: aE * 0.19 + "px"
												});
											}
										} else {
											if ($("#" + aK).hasClass("row3pwdd")) {
												var img = new Image;
												img.src = BL.SV + '/dianji.svg';
												img.onload = function() {
													$(".fd").eq(0).html(Html);
													$(".fd").eq(0).css({
														backgroundImage: 'url(' + img.src + ')',
														position: "absolute",
														width: "150%",
														height: aE * 0.4 + "px",
														left: "-25%",
														bottom: "0px",
														textAlign: "center",
														fontSize: "1.5em",
														zIndex: "999",
														lineHeight: aE * 0.19 + "px",
														backgroundSize: "100% 100%"
													});
												}
											} else {
												var img = new Image;
												img.src = BL.SV + '/dianji.svg';
												img.onload = function() {
													$(".fd").eq(0).html(Html);
													$(".fd").eq(0).css({
														backgroundImage: 'url(' + img.src + ')',
														position: "absolute",
														width: "140%",
														height: aE * 0.4 + "px",
														left: "-20%",
														bottom: "0px",
														textAlign: "center",
														fontSize: "1.5em",
														zIndex: "999",
														lineHeight: aE * 0.19 + "px",
														backgroundSize: "100% 100%"
													});
												}
											}
										}
									} else if (R.settings.pressStatus == 2) {
										if ($("#" + aK).hasClass("row3pwdd")) {
											var url = BL.SV + "/quanDEL.svg";
											var img = new Image;
											img.src = url;
											img.onload = function() {
												$(".anxia").css({
													background: "url(" + BL.SV + "/anjian.svg) ",
													backgroundSize: "100% 100%"
												});
												$(".anxia5").css({
													background: "url(" + BL.SV + "/quanDEL_2.svg) ",
													backgroundSize: "100% 100%"
												});
												$("#number_keyboard div").removeClass("anxia");
												$("#number_keyboard div").removeClass("anxia5");
												$("#" + aK).addClass("anxia5");
												$("#" + aK).css({
													backgroundImage: 'url(' + BL.SV + '/quanDEL.svg' + ')',
													backgroundSize: "100% 100%"
												});
											}
										} else {
											var url = BL.SV + "/anjian_2.svg";
											var img = new Image;
											img.src = url;
											img.onload = function() {
												$(".anxia").css({
													background: "url(" + BL.SV + "/anjian.svg) ",
													backgroundSize: "100% 100%"
												});
												$(".anxia5").css({
													background: "url(" + BL.SV + "/quanDEL_2.svg) ",
													backgroundSize: "100% 100%"
												});
												$("#number_keyboard div").removeClass("anxia");
												$("#number_keyboard div").removeClass("anxia5");
												$("#" + aK).addClass("anxia");
												$("#" + aK).css({
													backgroundImage: 'url(' + BL.SV + '/anjian_2.svg' + ')',
													backgroundSize: "100% 100%"
												});
											}
										}
									}
								}
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								e.preventDefault();
							}
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH + 1 && BL.Mov == 0) {
								if (/_SPACE/i.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/space.svg");
									},
									100);
								} else if (/_C/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/123.svg");
									},
									80);
								} else if (/_S/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/quanDEL.svg");
									},
									80);
								} else {
									if ($("#" + aK).hasClass("row3pwdd")) {
										call(BL.SV + "/quanDEL_2.svg");
									} else {
										call(BL.SV + "/anjian.svg");
									}
									BL.FD = setTimeout(function() {
										$(".fd").remove();
									},
									100);
								};
								if (e.target.className.indexOf("chg") > -1) {
									if (R.settings.chaosMode == 2 && event == 0) {
										var aN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
										aN = R.gC(aN);
										var bY = [];
										var au = $("#number_keyboard > .row1")[0].querySelectorAll(".row1pwd");
										setTimeout(function() {
											for (var j = 0,
											i = 0; j < au.length; j++) {
												if (au[j].id == "kb_n_CLOSE" || au[j].id == "kb_n_D") continue;
												i++;
												bY.push(au[j]);
											}
											for (var j = 0; j < bY.length; j++) {
												bY[j].innerHTML = aN[j];
											}
										},
										100)
									}
								};
								BL.once = 1;
								BL.Mov = 1;
								BL.double = 0;
								e.preventDefault();
							}
						});
						$("#" + aK).on("touchend",
						function(e) {
							if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
								BL.double = 0;
								if (/_SPACE/i.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/space.svg");
									},
									100);
								} else if (/_C/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/123.svg");
									},
									80);
								} else if (/_S/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/quanDEL.svg");
									},
									80);
								} else {
									setTimeout(function() {
										if ($("#" + aK).hasClass("row3pwdd")) {
											call(BL.SV + "/quanDEL_2.svg");
										} else {
											call(BL.SV + "/anjian.svg");
										}
									},
									100);
									BL.FD = setTimeout(function() {
										$(".fd").remove();
									},
									100);
								};
								e.preventDefault();
							}
						});
					} else if (aK == "kb_n_D") {
						var key = this.innerText;
						var event = 2;
						var dv;
						var av = [];
						$("#" + aK).on("touchstart",
						function(e) {
							if (BL.double == 0) {
								BL.double = 1;
								BL.once = 0;
								BL.Mov = 0;
								BL.key2 = $(this).attr("data-name");
								var key = this.innerText;
								if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
									$(".anxia").css({
										background: "url(" + BL.SV + "/anjian.svg) ",
										backgroundSize: "100% 100%"
									});
									$(".anxia5").css({
										background: "url(" + BL.SV + "/quanDEL_2.svg) ",
										backgroundSize: "100% 100%"
									});
									$("#number_keyboard div").removeClass("anxia");
									var url = BL.SV + "/quanDEL_2.svg";
									var img = new Image;
									img.src = url;
									img.onload = function() {
										$("#kb_n_D").css({
											backgroundImage: 'url(' + BL.SV + '/quanDEL_2.svg' + ')',
											backgroundSize: "100% 100%"
										});
										$("#kb_n_D>div").css({
											backgroundImage: 'url(' + BL.SV + '/DEL_2.svg' + ')',
											backgroundSize: "100% 100%"
										});
									}
								}
								fr = new Date().getTime();
								dv = window.setInterval(function() {
									eO = new Date().getTime();
									var x = eO - fr;
									if (x > 500) {
										var input = document.getElementById(R.settings.aQ.settings.id);
										var fK = setInterval(function() {
											if (R.settings.hasMap == 1) {
												R.settings.aQ.bu = R.settings.aQ.bu.substr(0, R.settings.aQ.bu.length - 1);
											}
											R.settings.aQ.bg -= 1;
											if (R.settings.aQ.bg < 0) R.settings.aQ.bg = 0;
											if (R.settings.aQ.bg == 0) R.settings.aQ.asm = [""];
											if (R.settings.aQ.bg == 1) R.settings.aQ.bsm = [""];
											if (R.settings.aQ.bg == 2) R.settings.aQ.csm = [""];
											if (R.settings.aQ.bg == 3) R.settings.aQ.dsm = [""];
											if (R.settings.aQ.bg == 4) R.settings.aQ.esm = [""];
											if (R.settings.aQ.bg == 5) R.settings.aQ.fsm = [""];
											if (R.settings.aQ.bg == 6) R.settings.aQ.gsm = [""];
											if (R.settings.aQ.bg == 7) R.settings.aQ.hsm = [""];
											if (R.settings.aQ.bg == 8) R.settings.aQ.ism = [""];
											if (R.settings.aQ.bg == 9) R.settings.aQ.jsm = [""];
											if (R.settings.aQ.bg == 10) R.settings.aQ.ksm = [""];
											if (R.settings.aQ.bg == 11) R.settings.aQ.lsm = [""];
											if (R.settings.aQ.bg == 12) R.settings.aQ.msm = [""];
											if (R.settings.aQ.bg == 13) R.settings.aQ.nsm = [""];
											if (R.settings.aQ.bg == 14) R.settings.aQ.osm = [""];
											if (R.settings.aQ.bg == 15) R.settings.aQ.psm = [""];
											if (R.settings.aQ.bg == 16) R.settings.aQ.qsm = [""];
											if (R.settings.aQ.bg == 17) R.settings.aQ.rsm = [""];
											if (R.settings.aQ.bg == 18) R.settings.aQ.ssm = [""];
											if (R.settings.aQ.bg == 19) R.settings.aQ.tsm = [""];
											if (R.settings.aQ.bg == 20) R.settings.aQ.usm = [""];
											if (R.settings.aQ.bg == 21) R.settings.aQ.vsm = [""];
											if (R.settings.aQ.bg == 22) R.settings.aQ.wsm = [""];
											if (R.settings.aQ.bg == 23) R.settings.aQ.xsm = [""];
											if (R.settings.aQ.bg == 24) R.settings.aQ.ysm = [""];
											if (R.settings.aQ.bg == 25) R.settings.aQ.zsm = [""];
											if (R.settings.aQ.bg == 26) R.settings.aQ.aasm = [""];
											if (R.settings.aQ.bg == 27) R.settings.aQ.bbsm = [""];
											if (R.settings.aQ.bg == 28) R.settings.aQ.ccsm = [""];
											if (R.settings.aQ.bg == 29) R.settings.aQ.ddsm = [""];
											input.value = input.value.substr(0, input.value.length - 1);
											if (R.settings.aQ.settings.jump == 1) {
												R.settings.aQ.settings.del(R.settings.aQ.bg);
											}
										},
										50);
										av.push(fK);
										clearInterval(dv);
									}
								},
								1);
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								e.preventDefault();
								return false;
							}
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH) {
								del3();
							}
							e.preventDefault();
							return false;
						});
						$("#" + aK).on("touchend",
						function(e) {
							if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
								del3();
								BL.Mov = 1;
								e.preventDefault();
								return false;
							}
						});
					};
					$("#" + aK).on("touchend",
					function(e) {
						if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
							if (aK == "kb_n_CLOSE" && (R.settings.pressStatus == 1 || R.settings.pressStatus == 2)) {
								setTimeout(function() {
									call(BL.SV + "/123.svg");
								},
								80);
							};
							if (aK == "kb_n_S") {
								setTimeout(function() {
									$("#char_keyboard").css("display", "none");
									$("#number_keyboard").css("display", "none");
									$("#symble_keyboard").css("display", "block");
									$("#purenumber_keyboard").css("display", "none");
									justic3();
								},
								80);
							};
							if (aK == "kb_n_C") {
								setTimeout(function() {
									$("#char_keyboard").css("display", "block");
									$("#number_keyboard").css("display", "none");
									$("#symble_keyboard").css("display", "none");
									$("#purenumber_keyboard").css("display", "none");
									justic3();
								},
								80);
							};
							if (e.target.className.indexOf("chg") > -1) {
								if (R.settings.chaosMode == 2 && event == 0) {
									var aN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
									aN = R.gC(aN);
									var bY = [];
									var au = $("#number_keyboard > .row1")[0].querySelectorAll(".row1pwd");
									setTimeout(function() {
										for (var j = 0,
										i = 0; j < au.length; j++) {
											if (au[j].id == "kb_n_CLOSE" || au[j].id == "kb_n_D") continue;
											i++;
											bY.push(au[j]);
										}
										for (var j = 0; j < bY.length; j++) {
											bY[j].innerHTML = aN[j];
										}
									},
									100)
								}
							};
							BL.Mov = 1;
						}
					});
					$("#" + aK).on("touchstart",
					function(e) {
						BL.WH = $(window).height();
						var key = this.innerText;
						if (aK == "kb_n_SPACE") {
							return;
						} else if (aK == "kb_n_D") {
							event = 2;
						} else if (aK == "kb_n_CLOSE" && BL.double == 0) {
							if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
								call(BL.SV + "/123_2.svg");
							};
							if (BL.fixed == "") {
								$("body").css({
									position: "relative",
									left: 0,
									top: 0,
									dQ: "all 0.3s"
								});
							} else {
								$("body").css({
									position: "relative",
									left: 0,
									top: 0,
									dQ: "all 0.3s"
								});
								$("#" + BL.fixed).css({
									bottom: 0 + "px",
									dQ: "all 0.3s"
								});
							};
							$(aY).removeClass("pwdkeyboard").addClass("pwdkeyboardout");
							document.querySelector(aY).addEventListener("webkitAnimationEnd", R.cf, false);
							document.querySelector(aY).addEventListener("animationEnd", R.cf, false);
							event = 1;
							setTimeout(function() {
								PH.s_n();
								PH.add++;
								PH.cs = 1;
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
							},
							80)
						} else if (aK == "kb_n_S") {
							event = 6;
						} else if (aK == "kb_n_C") {
							event = 5;
						} else {}
						e.preventDefault();
					});
				}
				if (nV.test(aK)) {
					function del4() {
						if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
							setTimeout(function() {
								var url = BL.SV + "/quanDEL.svg";
								var img = new Image;
								img.src = url;
								img.onload = function() {
									$("#kb_s_D").css({
										backgroundImage: 'url(' + BL.SV + '/quanDEL.svg' + ')',
										backgroundSize: "100% 100%"
									});
									$("#kb_s_D>div").css({
										backgroundImage: 'url(' + BL.SV + '/DEL.svg' + ')',
										backgroundSize: "100% 100%"
									});
								}
							},
							80);
						}
						clearInterval(dv);
						for (var bG = 0; bG < av.length; bG++) {
							clearInterval(av[bG]);
						}
						av = [];
						var input = document.getElementById(R.settings.aQ.settings.id);
						var dO = "";
						if (R.settings.hasMap == 1) {
							for (var i = 0; i < R.settings.aQ.bu.length; i++) {
								dO += "*";
							};
						} else {
							for (var i = 0; i < R.settings.aQ.bg; i++) {
								dO += "*";
							};
						}
						if (R.settings.aQ.settings.displayMode == 1) {
							var fq = R.settings.aQ;
							if (R.settings.aQ.bg == 0) {
								input.value = "";
							} else {
								input.value = (fq.asm + fq.bsm + fq.csm + fq.dsm + fq.esm + fq.fsm + fq.gsm + fq.hsm + fq.ism + fq.jsm + fq.ksm + fq.lsm + fq.msm + fq.nsm + fq.osm + fq.psm + fq.qsm + fq.rsm + fq.ssm + fq.tsm + fq.usm + fq.vsm + fq.wsm + fq.xsm + fq.ysm + fq.zsm + fq.aasm + fq.bbsm + fq.ccsm + fq.ddsm).substring(0, fq.bg)
							}
						} else {
							input.value = dO;
						};
						BL.double = 0;
					};
					if ((aK != "kb_s_D") && (aK != "kb_s_CLOSE")) {
						$("#" + aK).on("touchstart",
						function(e) {
							if (BL.double == 0) {
								var key = this.innerText;
								clearTimeout(BL.FD);
								BL.once = 0;
								BL.Mov = 0;
								BL.key2 = $(this).attr("data-name");
								BL.double = 1;
								$(".fd").remove();
								if (/_SPACE/i.test(aK)) {
									event = 7;
									if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
										var url = BL.SV + "/space_2.svg";
										var img = new Image;
										img.src = url;
										img.onload = function() {
											$(".anxia").css({
												background: "url(" + BL.SV + "/anjian.svg) ",
												backgroundSize: "100% 100%"
											});
											$(".anxia5").css({
												background: "url(" + BL.SV + "/quanDEL_2.svg) ",
												backgroundSize: "100% 100%"
											});
											$("#symble_keyboard div").removeClass("anxia");
											$("#symble_keyboard div").removeClass("anxia5");
											$("#kb_s_SPACE").css({
												backgroundImage: 'url(' + BL.SV + '/space_2.svg' + ')',
												backgroundSize: "100% 100%"
											});
										}
									}
								} else if (/_C/.test(aK)) {
									event = 7;
									if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
										call(BL.SV + "/123_2.svg");
									}
								} else if (/_N/.test(aK)) {
									event = 7;
									if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
										call(BL.SV + "/quanDEL_2.svg");
									}
								} else {
									if (R.settings.pressStatus == 1) {
										var cc = $(this);
										var Html = $(this).html();
										cc.append($("<div class='fd'></div>"));
										cc.css({
											position: "relative"
										});
										if (cc.hasClass("rowleft")) {
											var img = new Image;
											img.src = BL.SV + '/dianji_left.svg';
											img.onload = function() {
												$(".fd").eq(0).html(Html);
												$(".fd").eq(0).css({
													backgroundImage: 'url(' + img.src + ')',
													position: "absolute",
													width: "140%",
													height: aE * 0.4 + "px",
													left: 0,
													bottom: "0px",
													textAlign: "center",
													fontSize: "1.5em",
													zIndex: "999",
													lineHeight: aE * 0.19 + "px",
													backgroundSize: "100% 100%"
												});
											}
										} else if (cc.hasClass("rowright")) {
											var img = new Image;
											img.src = BL.SV + '/dianji_right.svg';
											img.onload = function() {
												$(".fd").eq(0).html(Html);
												$(".fd").eq(0).css({
													backgroundImage: 'url(' + img.src + ')',
													position: "absolute",
													width: "140%",
													height: aE * 0.4 + "px",
													right: 0,
													bottom: "0px",
													textAlign: "center",
													fontSize: "1.5em",
													zIndex: "999",
													lineHeight: aE * 0.19 + "px",
													backgroundSize: "100% 100%"
												});
											}
										} else {
											if ($("#" + aK).hasClass("row3pwdd")) {
												var img = new Image;
												img.src = BL.SV + '/dianji.svg';
												img.onload = function() {
													$(".fd").eq(0).html(Html);
													$(".fd").eq(0).css({
														backgroundImage: 'url(' + img.src + ')',
														position: "absolute",
														width: "150%",
														height: aE * 0.4 + "px",
														left: "-25%",
														bottom: "0px",
														textAlign: "center",
														fontSize: "1.5em",
														zIndex: "999",
														lineHeight: aE * 0.19 + "px",
														backgroundSize: "100% 100%"
													});
												}
											} else {
												var img = new Image;
												img.src = BL.SV + '/dianji.svg';
												img.onload = function() {
													$(".fd").eq(0).html(Html);
													$(".fd").eq(0).css({
														backgroundImage: 'url(' + img.src + ')',
														position: "absolute",
														width: "140%",
														height: aE * 0.4 + "px",
														left: "-20%",
														bottom: "0px",
														textAlign: "center",
														fontSize: "1.5em",
														zIndex: "999",
														lineHeight: aE * 0.19 + "px",
														backgroundSize: "100% 100%"
													});
												}
											}
										}
									} else if (R.settings.pressStatus == 2) {
										if ($("#" + aK).hasClass("row3pwdd")) {
											var url = BL.SV + "/quanDEL.svg";
											var img = new Image;
											img.src = url;
											img.onload = function() {
												$(".anxia").css({
													background: "url(" + BL.SV + "/anjian.svg) ",
													backgroundSize: "100% 100%"
												});
												$(".anxia5").css({
													background: "url(" + BL.SV + "/quanDEL_2.svg) ",
													backgroundSize: "100% 100%"
												});
												$("#symble_keyboard div").removeClass("anxia");
												$("#symble_keyboard div").removeClass("anxia5");
												$("#" + aK).addClass("anxia5");
												$("#" + aK).css({
													backgroundImage: 'url(' + BL.SV + '/quanDEL.svg' + ')',
													backgroundSize: "100% 100%"
												});
											}
										} else {
											var url = BL.SV + "/anjian_2.svg";
											var img = new Image;
											img.src = url;
											img.onload = function() {
												$(".anxia").css({
													background: "url(" + BL.SV + "/anjian.svg) ",
													backgroundSize: "100% 100%"
												});
												$(".anxia5").css({
													background: "url(" + BL.SV + "/quanDEL_2.svg) ",
													backgroundSize: "100% 100%"
												});
												$("#symble_keyboard div").removeClass("anxia");
												$("#symble_keyboard div").removeClass("anxia5");
												$("#" + aK).addClass("anxia");
												$("#" + aK).css({
													backgroundImage: 'url(' + BL.SV + '/anjian_2.svg' + ')',
													backgroundSize: "100% 100%"
												});
											}
										}
									}
								}
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								e.preventDefault();
							}
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH + 1 && BL.Mov == 0) {
								if (/_SPACE/i.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/space.svg");
									},
									100);
								} else if (/_C/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/123.svg");
									},
									100);
								} else if (/_N/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/quanDEL.svg");
									},
									100);
								} else {
									if ($("#" + aK).hasClass("row3pwdd")) {
										call(BL.SV + "/quanDEL_2.svg");
									} else {
										call(BL.SV + "/anjian.svg");
									}
									BL.FD = setTimeout(function() {
										$(".fd").remove();
									},
									100);
								};
								BL.once = 1;
								BL.Mov = 1;
								BL.double = 0;
								e.preventDefault();
							}
						});
						$("#" + aK).on("touchend",
						function(e) {
							if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
								BL.double = 0;
								if (/_SPACE/i.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/space.svg");
									},
									100);
								} else if (/_C/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/123.svg");
									},
									100);
								} else if (/_N/.test(aK)) {
									setTimeout(function() {
										call(BL.SV + "/quanDEL.svg");
									},
									100);
								} else {
									setTimeout(function() {
										if ($("#" + aK).hasClass("row3pwdd")) {
											call(BL.SV + "/quanDEL_2.svg");
										} else {
											call(BL.SV + "/anjian.svg");
										}
									},
									100);
									BL.FD = setTimeout(function() {
										$(".fd").remove();
									},
									100);
								};
								e.preventDefault();
							}
						});
					} else if (aK == "kb_s_D") {
						var event = 2;
						var dv;
						var av = [];
						$("#" + aK).on("touchstart",
						function(e) {
							if (BL.double == 0) {
								BL.double = 1;
								BL.once = 0;
								BL.Mov = 0;
								BL.key2 = $(this).attr("data-name");
								var key = this.innerText;
								if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
									$(".anxia").css({
										background: "url(" + BL.SV + "/anjian.svg) ",
										backgroundSize: "100% 100%"
									});
									$(".anxia5").css({
										background: "url(" + BL.SV + "/quanDEL_2.svg) ",
										backgroundSize: "100% 100%"
									});
									$("#symble_keyboard div").removeClass("anxia");
									$("#symble_keyboard div").removeClass("anxia5");
									var url = BL.SV + "/quanDEL_2.svg";
									var img = new Image;
									img.src = url;
									img.onload = function() {
										$("#kb_s_D").css({
											backgroundImage: 'url(' + BL.SV + '/quanDEL_2.svg' + ')',
											backgroundSize: "100% 100%"
										});
										$("#kb_s_D>div").css({
											backgroundImage: 'url(' + BL.SV + '/DEL_2.svg' + ')',
											backgroundSize: "100% 100%"
										});
									}
								}
								fr = new Date().getTime();
								dv = window.setInterval(function() {
									eO = new Date().getTime();
									var x = eO - fr;
									if (x > 500) {
										var input = document.getElementById(R.settings.aQ.settings.id);
										var fK = setInterval(function() {
											if (R.settings.hasMap == 1) {
												R.settings.aQ.bu = R.settings.aQ.bu.substr(0, R.settings.aQ.bu.length - 1);
											}
											R.settings.aQ.bg -= 1;
											if (R.settings.aQ.bg < 0) R.settings.aQ.bg = 0;
											if (R.settings.aQ.bg == 0) R.settings.aQ.asm = [""];
											if (R.settings.aQ.bg == 1) R.settings.aQ.bsm = [""];
											if (R.settings.aQ.bg == 2) R.settings.aQ.csm = [""];
											if (R.settings.aQ.bg == 3) R.settings.aQ.dsm = [""];
											if (R.settings.aQ.bg == 4) R.settings.aQ.esm = [""];
											if (R.settings.aQ.bg == 5) R.settings.aQ.fsm = [""];
											if (R.settings.aQ.bg == 6) R.settings.aQ.gsm = [""];
											if (R.settings.aQ.bg == 7) R.settings.aQ.hsm = [""];
											if (R.settings.aQ.bg == 8) R.settings.aQ.ism = [""];
											if (R.settings.aQ.bg == 9) R.settings.aQ.jsm = [""];
											if (R.settings.aQ.bg == 10) R.settings.aQ.ksm = [""];
											if (R.settings.aQ.bg == 11) R.settings.aQ.lsm = [""];
											if (R.settings.aQ.bg == 12) R.settings.aQ.msm = [""];
											if (R.settings.aQ.bg == 13) R.settings.aQ.nsm = [""];
											if (R.settings.aQ.bg == 14) R.settings.aQ.osm = [""];
											if (R.settings.aQ.bg == 15) R.settings.aQ.psm = [""];
											if (R.settings.aQ.bg == 16) R.settings.aQ.qsm = [""];
											if (R.settings.aQ.bg == 17) R.settings.aQ.rsm = [""];
											if (R.settings.aQ.bg == 18) R.settings.aQ.ssm = [""];
											if (R.settings.aQ.bg == 19) R.settings.aQ.tsm = [""];
											if (R.settings.aQ.bg == 20) R.settings.aQ.usm = [""];
											if (R.settings.aQ.bg == 21) R.settings.aQ.vsm = [""];
											if (R.settings.aQ.bg == 22) R.settings.aQ.wsm = [""];
											if (R.settings.aQ.bg == 23) R.settings.aQ.xsm = [""];
											if (R.settings.aQ.bg == 24) R.settings.aQ.ysm = [""];
											if (R.settings.aQ.bg == 25) R.settings.aQ.zsm = [""];
											if (R.settings.aQ.bg == 26) R.settings.aQ.aasm = [""];
											if (R.settings.aQ.bg == 27) R.settings.aQ.bbsm = [""];
											if (R.settings.aQ.bg == 28) R.settings.aQ.ccsm = [""];
											if (R.settings.aQ.bg == 29) R.settings.aQ.ddsm = [""];
											input.value = input.value.substr(0, input.value.length - 1);
											if (R.settings.aQ.settings.jump == 1) {
												R.settings.aQ.settings.del(R.settings.aQ.bg);
											}
										},
										50);
										av.push(fK);
										clearInterval(dv);
									}
								},
								1);
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
								e.preventDefault();
								return false;
							}
						});
						$("#" + aK).on("touchmove",
						function(e) {
							var MH = e.originalEvent.changedTouches[0].clientY;
							if (BL.WH <= MH + 1) {
								del4();
								e.preventDefault();
								return false;
							}
						});
						$("#" + aK).on("touchend",
						function(e) {
							if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
								del4();
								BL.Mov = 1;
								e.preventDefault();
								return false;
							}
						});
					};
					$("#" + aK).on("touchend",
					function(e) {
						if (BL.key2 == $(this).attr("data-name") && BL.Mov == 0) {
							if (aK == "kb_s_CLOSE" && (R.settings.pressStatus == 1 || R.settings.pressStatus == 2)) {
								setTimeout(function() {
									call(BL.SV + "/123.svg");
								},
								100);
							};
							if (aK == "kb_s_N") {
								setTimeout(function() {
									$("#char_keyboard").css("display", "none");
									$("#number_keyboard").css("display", "block");
									$("#symble_keyboard").css("display", "none");
									$("#purenumber_keyboard").css("display", "none");
									justic3();
								},
								80);
							};
							if (aK == "kb_s_C") {
								setTimeout(function() {
									$("#char_keyboard").css("display", "block");
									$("#number_keyboard").css("display", "none");
									$("#symble_keyboard").css("display", "none");
									$("#purenumber_keyboard").css("display", "none");
									justic3();
								},
								80);
							}
							BL.Mov = 1;
						}
					});
					$("#" + aK).on("touchstart",
					function(e) {
						BL.WH = $(window).height();
						var key = this.innerText;
						if (aK == "kb_s_SPACE") {
							return;
						} else if (aK == "kb_s_D") {
							event = 2;
						} else if (aK == "kb_s_CLOSE" && BL.double == 0) {
							if (R.settings.pressStatus == 1 || R.settings.pressStatus == 2) {
								call(BL.SV + "/123_2.svg");
							};
							if (BL.fixed == "") {
								$("body").css({
									position: "relative",
									left: 0,
									top: 0,
									dQ: "all 0.3s"
								});
							} else {
								$("body").css({
									position: "relative",
									left: 0,
									top: 0,
									dQ: "all 0.3s"
								});
								$("#" + BL.fixed).css({
									bottom: 0 + "px",
									dQ: "all 0.3s"
								});
							};
							$(aY).removeClass("pwdkeyboard").addClass("pwdkeyboardout");
							document.querySelector(aY).addEventListener("webkitAnimationEnd", R.cf, false);
							document.querySelector(aY).addEventListener("animationEnd", R.cf, false);
							event = 1;
							setTimeout(function() {
								PH.s_n();
								PH.add++;
								PH.cs = 1;
								R.settings.aQ.cY(event, key.charCodeAt() ^ R.settings.odd);
							},
							80)
						} else if (aK == "kb_s_N") {
							event = 4;
						} else if (aK == "kb_s_C") {
							event = 5;
						} else {}
						e.preventDefault();
					});
				}
			}
		};
		$(aY).contents("div").filter(function() {
			if (pe.test(this.id)) {
				$("#" + this.id).contents("div").filter(function() {
					if (nQ.test(this.className)) {
						$(this).contents("div").filter(function() {
							kZ(this.id);
						});
					} else {
						kZ(this.id);
					}
				});
			}
		});
		$("div").on("touchstart", ".fd",
		function(e) {
			e.stopPropagation();
		});
		$(".de2").focus(function() {
			for (var bG = 0; bG < M.length; bG++) {
				window.clearInterval(M[bG]);
			};
			for (var bG = 0; bG < MM.length; bG++) {
				window.clearInterval(MM[bG]);
			};
			for (var bG = 0; bG < PH.L.length; bG++) {
				window.clearInterval(PH.L[bG]);
			};
			kJ = mI = undefined;
			miss = "";
			BL.sh = 1;
			clearTimeout(M3);
			clearTimeout(BL.ad);
			BL.ad = setTimeout(function() {
				if (BL.fixed == "") {
					$("body").css({
						position: "relative",
						left: 0,
						top: 0,
						dQ: "all 0.3s"
					});
				} else {
					$("body").css({
						position: "relative",
						left: 0,
						top: 0,
						dQ: "all 0.3s"
					});
					$("#" + BL.fixed).css({
						bottom: 0 + "px",
						dQ: "all 0.3s"
					});
				};
				BL.sh = 0;
			},
			400);
			$("#testkbid").removeClass("pwdkeyboard").addClass("pwdkeyboardout2").hide();
			if (miss == "") {
				miss = setInterval(function() {
					$("#testkbid").removeClass("pwdkeyboard").addClass("pwdkeyboardout2").hide();
				},
				20);
				PH.L.push(miss);
			};
			if (BL.olo == 1) {
				event = 1;
				R.settings.aQ.cY(event, '0'.charCodeAt() ^ R.settings.odd);
				if (PH.Id != "" && ($("#testkbid").hasClass("pwdkeyboardout") || $("#testkbid").hasClass("pwdkeyboardout2"))) {
					if (PH.add == 1) {
						PH.s_n();
						PH.add++;
					}
					PH.cs = 1;
				};
			}
		});
		$(document).on("touchstart",
		function(e) {
			var hO = $(aY);
			var input = $("#" + R.settings.id);
			if (hO.has(e.target).length === 0) {
				if (e.target.className.indexOf("default") > -1 || e.target.className == "fd" || e.target.className.indexOf("de2") > -1) {
					$(".fd").remove();
					return;
				} else {
					for (var bG = 0; bG < PH.L.length; bG++) {
						window.clearInterval(PH.L[bG]);
					};
					miss = "";
					Show = 1;
					clearTimeout(Show2);
					Show2 = setTimeout(function() {
						Show = 0;
					},
					350);
					clearTimeout(Hid);
					Hid = setTimeout(function() {
						for (var bG = 0; bG < M.length; bG++) {
							window.clearInterval(M[bG]);
						};
						for (var bG = 0; bG < MM.length; bG++) {
							window.clearInterval(MM[bG]);
						};
						setTimeout(function() {
							if (PH.Id != "" && ($("#testkbid").hasClass("pwdkeyboardout") || $("#testkbid").hasClass("pwdkeyboardout2"))) {
								if (PH.add == 1) {
									PH.s_n();
									PH.add++;
								} else if (PH.add == 2) {
									var fq;
									PH.pm = PH.arrId.indexOf(PH.Id);
									fq = eval("(" + PH.arrPGD[PH.pm] + ")");
									if (fq.settings.blur != "") {
										fq.settings.blur()
									};
								}
								PH.cs = 1;
							};
							BL.kb = setInterval(function() {
								var kb = document.getElementById("testkbid");
								if (kb.className == "pwdkeyboard" && $("#testkbid").css("display") == 'none') {
									$("#testkbid").css({
										display: "block"
									});
								}
							},
							20);
							T.push(BL.kb);
							setTimeout(function() {
								for (var i = 0; i < T.length; i++) {
									window.clearInterval(T[i]);
								};
							},
							2000);
						},
						100);
						var vN;
						clearTimeout(vN);
						var b = hO.css("display") == "block" ? 1 : 0;
						if (BL.lol == 0 && Tim == 0 && b && e.target.className.indexOf("de2") == -1) {
							if (BL.fixed == "") {
								$("body").css({
									position: "relative",
									left: 0,
									top: 0 + "px",
									dQ: "all 0.3s"
								});
							} else {
								$("body").css({
									position: "relative",
									left: 0,
									top: 0 + "px",
									dQ: "all 0.3s"
								});
								$("#" + BL.fixed).css({
									bottom: 0 + "px",
									dQ: "all 0.3s"
								});
							};
							hO.removeClass("pwdkeyboard").addClass("pwdkeyboardout");
							document.querySelector(aY).addEventListener("webkitAnimationEnd", R.cf, false);
							document.querySelector(aY).addEventListener("animationEnd", R.cf, false);
							event = 1;
							R.settings.aQ.cY(event, '0'.charCodeAt() ^ R.settings.odd);
							var fq;
							PH.pm = PH.arrId.indexOf(PH.Id);
							$("#" + PH.Id).attr('placeholder', PH.arrPlace[PH.pm]);
							Tim = 1;
							vN = setTimeout(function() {
								Tim = 0
							},
							300);
						};
					},
					400)
				}
			};
		});
		window.addEventListener("orientationchange",
		function() {
			$(".fd").hide();
			var Ah = lA ? 300 : 0;
			if (/ OPR/i.test(u) || / OPiOS/i.test(u) || /MicroMessenger/i.test(u)) {
				R.gg = document.activeElement;
				if (R.gg != undefined) {
					R.gg.blur();
					setTimeout(function() {
						if (R.gg != undefined) {
							R.gg = undefined;
						}
					},
					300);
				}
			};
			var ct;
			if ($(aY).is(':visible')) {
				if ($("#char_keyboard").is(":hidden")) {
					ct = 1;
				} else {
					ct = 0;
				}
			} else {
				ct = 2;
			};
			$(aY).addClass("pwdkeyboardout2").hide();
			if (BL.fixed == "") {
				$("body").css({
					position: "relative",
					left: 0,
					top: 0 + "px",
					dQ: "all 0.3s"
				});
			} else {
				$("body").css({
					position: "relative",
					left: 0,
					top: 0 + "px",
					dQ: "all 0.3s"
				});
				$("#" + BL.fixed).css({
					bottom: 0 + "px",
					dQ: "all 0.3s"
				});
			};
			$(window).one("resize",
			function() {
				setTimeout(function() {
					kM();
					eW = $(window).height();
					if ($("body").height() < $(window).height()) {
						$("body").css({
							height: "100%"
						});
						$("html").css({
							height: "100%"
						});
					} else {
						$("body").css({
							height: "auto"
						});
						$("html").css({
							height: "auto"
						});
					}
				},
				200);
				if (ct != 2) {
					setTimeout(function() {
						if (ct == 1) {
							BL.KK = aE;
						} else {
							BL.KK = aE;
						};
						R.show(ct);
					},
					300);
				}
			});
		});
		this.aV = true;
	}
};
keyBoard.prototype.gC = function(data, hu) {    ;    ;
	var lm = data.length;    ;    ;
	var try1 = new Array();    ;
	for (var i = 0; i < lm; i++) {        ;
		try1[i] = i;    
	}    ;    ;
	var try2 = new Array();    ;
	for (var i = 0; i < lm; i++) {        ;
		try2[i] = try1.splice(Math.floor(Math.random() * try1.length), 1);    
	}    ;    ;
	var try3 = new Array();    ;
	for (var i = 0; i < lm; i++) {
		if (hu) {       ;
			try3[i] = data[try2[i]].toUpperCase();
		} else {
			try3[i] = data[try2[i]].toLowerCase();
		}    
	}    ;
	return try3;
};
keyBoard.prototype.yp = function() {
	var h1 = (document.documentElement.clientHeight);
	var h2 = (window.innerHeight);
	alert(document.documentElement.clientHeight);
	alert(window.innerHeight);
	alert(h1);
	alert(h2);
	if (document.documentElement.clientHeight > window.innerHeight) return document.documentElement.clientHeight;
	else return window.innerHeight;
};
var kJ = mI = null;
keyBoard.prototype.show = function(ct) {
	var R = this;
	var aY = "#" + this.settings.id;
	if ((R.settings.chaosMode == 1 || R.settings.chaosMode == 2) && ct == 0) {
		var aN = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
		aN = R.gC(aN);
		var au = $("#char_keyboard")[0].querySelectorAll(".row1pwd,.row2pwd,.row3pwdb");
		if (R.caps || R.shift) {
			for (var j = 0; j < au.length; j++) {
				au[j].innerHTML = aN[j].toUpperCase();
			}
		} else {
			for (var j = 0; j < au.length; j++) {
				au[j].innerHTML = aN[j];
			}
		}
	}
	if ((R.settings.chaosMode == 1 || R.settings.chaosMode == 2) && ct == 1) {
		var aN = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		aN = R.gC(aN);
		var au = $("#purenumber_keyboard")[0].querySelectorAll(".pwd");
		var bY = [];
		for (var j = 0,
		i = 0; j < au.length; j++) {
			if (au[j].id == "kb_p_CLOSE" || au[j].id == "kb_p_D") continue;
			i++;
			bY.push(au[j]);
		}
		for (var j = 0; j < bY.length; j++) {
			bY[j].innerHTML = aN[j];
		}
	};
	$(aY).css("height", "213px");
	var ii = parseInt($(aY).css("height"));
	$("#purenumber_keyboard").css("height", aE);
	$("#char_keyboard").css("height", aE);
	$("#number_keyboard").css("height", aE);
	$("#symble_keyboard").css("height", aE);
	$(aY).css("height", aE);
	if (BL.lol == 0) {
		if (BL.sh == 0) {
			kJ = setInterval(function() {
				if ($(window).height() >= eW * 0.8) {
					BL.T = 0;
					setTimeout(function() {
						var H3 = $(window).height() - $("#" + PH.Id).outerHeight() - $("#" + PH.Id).offset().top + $(document).scrollTop();
						var H = BL.KK;
						if (H3 < H) {
							rD = H3 - H - 2;
							if (BL.fixed == "") {
								$("body").css({
									position: "relative",
									left: 0,
									top: (H3 - H - 2) + "px",
									dQ: "all 0.3s"
								});
							} else {
								$("body").css({
									position: "relative",
									left: 0,
									top: -H + "px",
									dQ: "all 0.3s"
								});
								$("#" + BL.fixed).css({
									bottom: H + "px",
									dQ: "all 0.3s"
								});
							}
						};
						$(aY).show();
						if ($(aY).hasClass("pwdkeyboardout") || $(aY).hasClass("pwdkeyboardout2")) {
							$(aY).removeClass("pwdkeyboardout").removeClass("pwdkeyboardout2").addClass("pwdkeyboard");
						};
						R.ht();
					},
					100);
					BL.lol = 1;
					setTimeout(function() {
						BL.lol = 0;
					},
					300);
					clearInterval(kJ);
					kJ == undefined;
				}
			},
			20);
			M.push(kJ);
		} else {
			clearTimeout(M3);
			M3 = setTimeout(function() {
				mI = setInterval(function() {
					if ($(window).height() >= eW * 0.8) {
						BL.T = 0;
						setTimeout(function() {
							var H3 = $(window).height() - $("#" + PH.Id).outerHeight() - $("#" + PH.Id).offset().top + $(document).scrollTop();
							var H = BL.KK;
							if (H3 < H) {
								rD = H3 - H - 2;
								if (BL.fixed == "") {
									$("body").css({
										position: "relative",
										left: 0,
										top: (H3 - H - 2) + "px",
										dQ: "all 0.3s"
									});
								} else {
									$("body").css({
										position: "relative",
										left: 0,
										top: -H + "px",
										dQ: "all 0.3s"
									});
									$("#" + BL.fixed).css({
										bottom: H + "px",
										dQ: "all 0.3s"
									});
								};
							};
							$(aY).show();
							if ($(aY).hasClass("pwdkeyboardout") || $(aY).hasClass("pwdkeyboardout2")) {
								$(aY).removeClass("pwdkeyboardout").removeClass("pwdkeyboardout2").addClass("pwdkeyboard");
							};
							R.ht();
						},
						100);
						BL.lol = 1;
						setTimeout(function() {
							BL.lol = 0;
						},
						300);
						clearInterval(mI);
						mI == undefined;
					}
				},
				20);
				MM.push(mI);
			},
			300);
		}
	}
};
keyBoard.prototype.hide = function(e) {
	BL.double = 0;
	var R = this;
	var aY = "#" + this.settings.id;
	for (var bG = 0; bG < M.length; bG++) {
		window.clearInterval(M[bG]);
	};
	for (var bG = 0; bG < MM.length; bG++) {
		window.clearInterval(MM[bG]);
	};
	for (var bG = 0; bG < PH.L.length; bG++) {
		window.clearInterval(PH.L[bG]);
	};
	$(aY).removeClass("pwdkeyboard").addClass("pwdkeyboardout2").hide();
	if (BL.fixed == "") {
		$("body").css({
			position: "relative",
			left: 0,
			top: 0 + "px",
			dQ: "all 0.3s"
		});
	} else {
		$("body").css({
			position: "relative",
			left: 0,
			top: 0 + "px",
			dQ: "all 0.3s"
		});
		$("#" + BL.fixed).css({
			bottom: 0 + "px",
			dQ: "all 0.3s"
		});
	};
	if (BL.olo == 1) {
		event = 1;
		R.settings.aQ.cY(event, '0'.charCodeAt() ^ R.settings.odd);
		if (PH.Id != "" && ($("#testkbid").hasClass("pwdkeyboardout") || $("#testkbid").hasClass("pwdkeyboardout2"))) {
			if (PH.add == 1) {
				PH.s_n();
				PH.add++;
			}
			PH.cs = 1;
		};
	}
	return false;
};
function passGuard(options) {
	this.settings = {
		"id": "",
		"maxLength": 12,
		"regExp1": "[0-9]",
		"displayMode": 0,
		"rsaPublicKey": "",
		"mappurl": "",
		"mC": "",
		"enterEvent": "",
		"keyBoard": {},
		"mappingArray": []
	};
	this.bg = 0;
	this.bu = "";
	this.asm = [""];
	this.bsm = [""];
	this.csm = [""];
	this.dsm = [""];
	this.esm = [""];
	this.fsm = [""];
	this.gsm = [""];
	this.hsm = [""];
	this.ism = [""];
	this.jsm = [""];
	this.ksm = [""];
	this.lsm = [""];
	this.msm = [""];
	this.nsm = [""];
	this.osm = [""];
	this.psm = [""];
	this.qsm = [""];
	this.rsm = [""];
	this.ssm = [""];
	this.tsm = [""];
	this.usm = [""];
	this.vsm = [""];
	this.wsm = [""];
	this.xsm = [""];
	this.ysm = [""];
	this.zsm = [""];
	this.aasm = [""];
	this.bbsm = [""];
	this.ccsm = [""];
	this.ddsm = [""];
	if (options != undefined) {
		this.settings = options;
	}
};
passGuard.ep = [];
passGuard.gA = [];
passGuard.ib = undefined;
passGuard.prototype.generate = function(id, keyBoard, pgd, ct) {
	PH.arrPlace.push($("#" + id).attr("placeholder"));
	this.settings.keyBoard = keyBoard;
	this.settings.id = id;
	PH.arrId.push(id);
	PH.arrPGD.push(pgd);
	var bA = document.getElementById(id);
	passGuard.gA.push(bA);
	var aQ = this;
	var oJ = null;
	var hu = false;
	var flag2 = false;
	PH.s_n = function() {
		var fq;
		PH.pm = PH.arrId.indexOf(PH.Id);
		fq = eval("(" + PH.arrPGD[PH.pm] + ")");
		if (fq.bg == 0) {
			$("#" + PH.Id).attr('placeholder', PH.arrPlace[PH.pm]);
		}
		if (PH.cs == 0) {
			if (fq.settings.blur != undefined) {
				fq.settings.blur()
			};
			if (fq.settings.callBack == "") {} else {
				var pz = new RegExp(fq.settings.regExp2);
				if (fq.asm == undefined) {
					fq.settings.errorCallBack();
				} else if (pz.test((fq.asm + fq.bsm + fq.csm + fq.dsm + fq.esm + fq.fsm + fq.gsm + fq.hsm + fq.ism + fq.jsm + fq.ksm + fq.lsm + fq.msm + fq.nsm + fq.osm + fq.psm + fq.qsm + fq.rsm + fq.ssm + fq.tsm + fq.usm + fq.vsm + fq.wsm + fq.xsm + fq.ysm + fq.zsm + fq.aasm + fq.bbsm + fq.ccsm + fq.ddsm).substring(0, fq.bg))) {
					fq.settings.callBack()
				} else {
					fq.settings.errorCallBack()
				}
			}
		}
	};
	bA.onfocus = function(e) {
		var fq;
		PH.pm = PH.arrId.indexOf(id);
		fq = eval("(" + PH.arrPGD[PH.pm] + ")");
		if (fq.settings.focus != undefined) {
			fq.settings.focus()
		};
		this.blur();
		if (Show == 0 || id != PH.Id) {
			for (var bG = 0; bG < PH.L.length; bG++) {
				window.clearInterval(PH.L[bG]);
			};
			for (var i = 0; i < T.length; i++) {
				window.clearInterval(T[i]);
			};
			$(this).attr('placeholder', '');
			PH.add = 1;
			BL.olo = 1;
			press2 = 1;
			BL.T = 1;
			clearTimeout(Hid);
			if (ct == 1) {
				$("#char_keyboard").hide();
				$("#number_keyboard").hide();
				$("#symble_keyboard").hide();
				$("#purenumber_keyboard").show();
				BL.KK = aE;
			} else {
				$("#char_keyboard").show();
				$("#number_keyboard").hide();
				$("#symble_keyboard").hide();
				$("#purenumber_keyboard").hide();
				BL.KK = aE;
			};
			var input = this;
			for (var bG = 0; bG < passGuard.ep.length; bG++) {
				window.clearInterval(passGuard.ep[bG]);
			}
			for (var fT = 0; fT < passGuard.gA.length; fT++) {
				passGuard.gA[fT].value = passGuard.gA[fT].value.replace("|", "");
			}
			passGuard.ep = [];
			if (keyBoard.settings.hasMap == 1) {
				if (passGuard.ib == undefined) {
					if (aQ.settings.mappurl == undefined || aQ.settings.mappurl == "") {
						alert("无效的映射申请地址。");
						return;
					}
					/*$.ajax({
						url: aQ.settings.mappurl + "?" + get_time(),
						type: "GET",
						async: false,
						success: function(bu) {
							aQ.tI(bu);
						}
					});*/
					aQ.tI(aQ.settings.mappurl);
				}
			};
			oJ = setInterval(function() {
				if (!document.getElementById(id)) {
					return;
				}
				document.getElementById(id).setAttribute("placeholder", "");
				if (hu) {
					input.value = input.value.replace("|", "");
					hu = false;
				} else {
					input.value = input.value + "|";
					hu = true;
				}
			},
			500);
			passGuard.ep.push(oJ);
			setTimeout(function() {
				keyBoard.cY = aQ.cY;
				if (aQ.settings.fixed == undefined) {
					BL.fixed = "";
				} else {
					BL.fixed = aQ.settings.fixed;
				}
				keyBoard.settings.aQ = aQ;
				keyBoard.settings.odd = 51;
				keyBoard.show(ct);
				if (PH.Id != "" && PH.Id != id) {
					PH.s_n();
					PH.cs = 0;
				}
				PH.cs = 0;
				PH.Id = id;
				e.preventDefault();
				return false;
			},
			20)
		}
	}
};
var SH;
passGuard.prototype.cY = function(event, key) {
	var pB = key ^ 51;
	var aQ = this;
	var input = document.getElementById(aQ.settings.id);
	input.value = input.value.replace("|", "");
	if (event == 1) {
		BL.T = 0;
		for (var bG = 0; bG < passGuard.ep.length; bG++) {
			window.clearInterval(passGuard.ep[bG]);
		}
	} else if (event == 2) {
		input.value = input.value.substr(0, input.value.length - 1);
		if (aQ.settings.keyBoard.settings.hasMap == 1) {
			aQ.bu = aQ.bu.substr(0, aQ.bu.length - 1);
		}
		aQ.bg -= 1;
		if (aQ.bg < 0) aQ.bg = 0;
		if (aQ.bg == 0) aQ.asm = [""];
		if (aQ.bg == 1) aQ.bsm = [""];
		if (aQ.bg == 2) aQ.csm = [""];
		if (aQ.bg == 3) aQ.dsm = [""];
		if (aQ.bg == 4) aQ.esm = [""];
		if (aQ.bg == 5) aQ.fsm = [""];
		if (aQ.bg == 6) aQ.gsm = [""];
		if (aQ.bg == 7) aQ.hsm = [""];
		if (aQ.bg == 8) aQ.ism = [""];
		if (aQ.bg == 9) aQ.jsm = [""];
		if (aQ.bg == 10) aQ.ksm = [""];
		if (aQ.bg == 11) aQ.lsm = [""];
		if (aQ.bg == 12) aQ.msm = [""];
		if (aQ.bg == 13) aQ.nsm = [""];
		if (aQ.bg == 14) aQ.osm = [""];
		if (aQ.bg == 15) aQ.psm = [""];
		if (aQ.bg == 16) aQ.qsm = [""];
		if (aQ.bg == 17) aQ.rsm = [""];
		if (aQ.bg == 18) aQ.ssm = [""];
		if (aQ.bg == 19) aQ.tsm = [""];
		if (aQ.bg == 20) aQ.usm = [""];
		if (aQ.bg == 21) aQ.vsm = [""];
		if (aQ.bg == 22) aQ.wsm = [""];
		if (aQ.bg == 23) aQ.xsm = [""];
		if (aQ.bg == 24) aQ.ysm = [""];
		if (aQ.bg == 25) aQ.zsm = [""];
		if (aQ.bg == 26) aQ.aasm = [""];
		if (aQ.bg == 27) aQ.bbsm = [""];
		if (aQ.bg == 28) aQ.ccsm = [""];
		if (aQ.bg == 29) aQ.ddsm = [""];
		if (aQ.settings.jump == 1) {
			aQ.settings.del(aQ.bg);
		}
	} else if (event == 0) {
		var ld = new RegExp(aQ.settings.regExp1);
		var iC = String.fromCharCode(pB);
		var wD = aQ.settings.maxLength;
		var aG = input.value.length;
		if (aG < wD) {
			aQ.bg += 1;
			if (aQ.bg == 1) aQ.asm = [iC];
			if (aQ.bg == 2) aQ.bsm = [iC];
			if (aQ.bg == 3) aQ.csm = [iC];
			if (aQ.bg == 4) aQ.dsm = [iC];
			if (aQ.bg == 5) aQ.esm = [iC];
			if (aQ.bg == 6) aQ.fsm = [iC];
			if (aQ.bg == 7) aQ.gsm = [iC];
			if (aQ.bg == 8) aQ.hsm = [iC];
			if (aQ.bg == 9) aQ.ism = [iC];
			if (aQ.bg == 10) aQ.jsm = [iC];
			if (aQ.bg == 11) aQ.ksm = [iC];
			if (aQ.bg == 12) aQ.lsm = [iC];
			if (aQ.bg == 13) aQ.msm = [iC];
			if (aQ.bg == 14) aQ.nsm = [iC];
			if (aQ.bg == 15) aQ.osm = [iC];
			if (aQ.bg == 16) aQ.psm = [iC];
			if (aQ.bg == 17) aQ.qsm = [iC];
			if (aQ.bg == 18) aQ.rsm = [iC];
			if (aQ.bg == 19) aQ.ssm = [iC];
			if (aQ.bg == 20) aQ.tsm = [iC];
			if (aQ.bg == 21) aQ.usm = [iC];
			if (aQ.bg == 22) aQ.vsm = [iC];
			if (aQ.bg == 23) aQ.wsm = [iC];
			if (aQ.bg == 24) aQ.xsm = [iC];
			if (aQ.bg == 25) aQ.ysm = [iC];
			if (aQ.bg == 26) aQ.zsm = [iC];
			if (aQ.bg == 27) aQ.aasm = [iC];
			if (aQ.bg == 28) aQ.bbsm = [iC];
			if (aQ.bg == 29) aQ.ccsm = [iC];
			if (aQ.bg == 30) aQ.ddsm = [iC];
			if (aQ.settings.keyBoard.settings.hasMap == 1) {
				aQ.bu += aQ.wQ(iC);
			}
			if (aQ.settings.displayMode == 1) {
				input.value = (aQ.asm + aQ.bsm + aQ.csm + aQ.dsm + aQ.esm + aQ.fsm + aQ.gsm + aQ.hsm + aQ.ism + aQ.jsm + aQ.ksm + aQ.lsm + aQ.msm + aQ.nsm + aQ.osm + aQ.psm + aQ.qsm + aQ.rsm + aQ.ssm + aQ.tsm + aQ.usm + aQ.vsm + aQ.wsm + aQ.xsm + aQ.ysm + aQ.zsm + aQ.aasm + aQ.bbsm + aQ.ccsm + aQ.ddsm).substring(0, aQ.bg);
			} else {
				input.value += "*";
			}
			if (aQ.settings.jump == 1) {
				aQ.settings.add(aQ.bg);
			}
		}
	}
};
passGuard.prototype.tI = function(mO) {
	if (mO) {
		passGuard.ib = mO;
	}
};
passGuard.prototype.clearpwd = function() {
	var input = document.getElementById(this.settings.id);
	input.value = "";
	this.bg = 0;
	this.bu = "";
	this.asm = "";
	this.bsm = "";
	this.csm = "";
	this.dsm = "";
	this.esm = "";
	this.fsm = "";
	this.gsm = "";
	this.hsm = "";
	this.ism = "";
	this.jsm = "";
	this.ksm = "";
	this.lsm = "";
	this.msm = "";
	this.nsm = "";
	this.osm = "";
	this.psm = "";
	this.qsm = "";
	this.rsm = "";
	this.ssm = "";
	this.tsm = "";
	this.usm = "";
	this.vsm = "";
	this.wsm = "";
	this.xsm = "";
	this.ysm = "";
	this.zsm = "";
	this.aasm = "";
	this.bbsm = "";
	this.ccsm = "";
	this.ddsm = "";
};
passGuard.prototype.getValid = function() {
	if (!verifyFlag) {
		alert("license verify error!");
		return 1;
	}
	var aQ = this;
	if (aQ.bg < 0) aQ.bg = 0;
	if (aQ.bg == 0) aQ.asm = [""];
	if (aQ.bg == 1) aQ.bsm = [""];
	if (aQ.bg <= 2) aQ.csm = [""];
	if (aQ.bg <= 3) aQ.dsm = [""];
	if (aQ.bg <= 4) aQ.esm = [""];
	if (aQ.bg <= 5) aQ.fsm = [""];
	if (aQ.bg <= 6) aQ.gsm = [""];
	if (aQ.bg <= 7) aQ.hsm = [""];
	if (aQ.bg <= 8) aQ.ism = [""];
	if (aQ.bg <= 9) aQ.jsm = [""];
	if (aQ.bg <= 10) aQ.ksm = [""];
	if (aQ.bg <= 11) aQ.lsm = [""];
	if (aQ.bg <= 12) aQ.msm = [""];
	if (aQ.bg <= 13) aQ.nsm = [""];
	if (aQ.bg <= 14) aQ.osm = [""];
	if (aQ.bg <= 15) aQ.psm = [""];
	if (aQ.bg <= 16) aQ.qsm = [""];
	if (aQ.bg <= 17) aQ.rsm = [""];
	if (aQ.bg <= 18) aQ.ssm = [""];
	if (aQ.bg <= 19) aQ.tsm = [""];
	if (aQ.bg <= 20) aQ.usm = [""];
	if (aQ.bg <= 21) aQ.vsm = [""];
	if (aQ.bg <= 22) aQ.wsm = [""];
	if (aQ.bg <= 23) aQ.xsm = [""];
	if (aQ.bg <= 24) aQ.ysm = [""];
	if (aQ.bg <= 25) aQ.zsm = [""];
	if (aQ.bg <= 26) aQ.aasm = [""];
	if (aQ.bg <= 27) aQ.bbsm = [""];
	if (aQ.bg <= 28) aQ.ccsm = [""];
	if (aQ.bg <= 29) aQ.ddsm = [""];
	var ld = new RegExp(aQ.settings.regExp2);
	if (aQ.asm == undefined) {
		var pare = 1;
	} else {
		var pare = ld.test((aQ.asm + aQ.bsm + aQ.csm + aQ.dsm + aQ.esm + aQ.fsm + aQ.gsm + aQ.hsm + aQ.ism + aQ.jsm + aQ.ksm + aQ.lsm + aQ.msm + aQ.nsm + aQ.osm + aQ.psm + aQ.qsm + aQ.rsm + aQ.ssm + aQ.tsm + aQ.usm + aQ.vsm + aQ.wsm + aQ.xsm + aQ.ysm + aQ.zsm + aQ.aasm + aQ.bbsm + aQ.ccsm + aQ.ddsm).substring(0, aQ.bg)) ? 0 : 1;
	}
	return pare;
};
passGuard.prototype.getOutput = function() {
	if (!verifyFlag) {
		alert("license verify error!");
		return false;
	}
	var kW = new db();
	kW.uO(this.settings.rsaPublicKey);
	if (this.settings.keyBoard.settings.hasMap == 1) {
		var sn = kW.bZ(this.bu);
	} else {
		var sn = kW.bZ(this.asm + this.bsm + this.csm + this.dsm + this.esm + this.fsm + this.gsm + this.hsm + this.ism + this.jsm + this.ksm + this.lsm + this.msm + this.nsm + this.osm + this.psm + this.qsm + this.rsm + this.ssm + this.tsm + this.usm + this.vsm + this.wsm + this.xsm + this.ysm + this.zsm + this.aasm + this.bbsm + this.ccsm + this.ddsm);
	}
	var xS = qh($.trim(this.settings.mC), $.trim(sn));
	passGuard.ib = undefined;
	this.bg = 0;
	this.asm = [""];
	this.bsm = [""];
	this.csm = [""];
	this.dsm = [""];
	this.esm = [""];
	this.fsm = [""];
	this.gsm = [""];
	this.hsm = [""];
	this.ism = [""];
	this.jsm = [""];
	this.ksm = [""];
	this.lsm = [""];
	this.msm = [""];
	this.nsm = [""];
	this.osm = [""];
	this.psm = [""];
	this.qsm = [""];
	this.rsm = [""];
	this.ssm = [""];
	this.tsm = [""];
	this.usm = [""];
	this.vsm = [""];
	this.wsm = [""];
	this.xsm = [""];
	this.ysm = [""];
	this.zsm = [""];
	this.aasm = [""];
	this.bbsm = [""];
	this.ccsm = [""];
	this.ddsm = [""];
	this.bu = "";
	return xS;
};
passGuard.prototype.getLength = function() {
	if (!verifyFlag) {
		alert("license verify error!");
		return 0;
	}
	if (this.settings.keyBoard.settings.hasMap == 1) {
		return this.bu.length;
	} else {
		return this.bg;
	}
};
passGuard.prototype.getHash = function() {
	if (!verifyFlag) {
		alert("license verify error!");
		return false;
	}
	var aQ = this;
	if (this.settings.keyBoard.settings.hasMap == 1) {
		return hash(this.bu).toString();
	} else {
		return hash(aQ.asm + aQ.bsm + aQ.csm + aQ.dsm + aQ.esm + aQ.fsm + aQ.gsm + aQ.hsm + aQ.ism + aQ.jsm + aQ.ksm + aQ.lsm + aQ.msm + aQ.nsm + aQ.osm + aQ.psm + aQ.qsm + aQ.rsm + aQ.ssm + aQ.tsm + aQ.usm + aQ.vsm + aQ.wsm + aQ.xsm + aQ.ysm + aQ.zsm + aQ.aasm + aQ.bbsm + aQ.ccsm + aQ.ddsm).toString();
	}
};
passGuard.prototype.wQ = function(key) {
	var keyCode = key.charCodeAt(0);
	var bS = aB(passGuard.ib);
	var wl = eval(bS);
	return String.fromCharCode(wl[keyCode - 33]);
};
passGuard.prototype.setRandKey = function(lP) {
	try {
		if (lP) this.settings.mC = lP;
	} catch(e) {
		alert(e);
	}
};
var cert = "-----BEGIN CERTIFICATE-----\n";
cert += "MIICHjCCAYegAwIBAgIFBO2Kp0UwDQYJKoZIhvcNAQELBQAwVDEOMAwGA1UEAxMFU0lDQ0ExCzAJ\n";
cert += "BgNVBAsTAlNDMQ4wDAYDVQQKEwVTSUNDQTELMAkGA1UEBxMCQkoxCzAJBgNVBAgTAkJKMQswCQYD\n";
cert += "VQQGEwJDTjAeFw0xNzAxMTYwODM3MzlaFw0xNzAxMTYwODM3MzlaMFIxDDAKBgNVBAMTA0xlZTEL\n";
cert += "MAkGA1UECxMCU0MxDjAMBgNVBAoTBVNJQ0NBMQswCQYDVQQHEwJCSjELMAkGA1UECBMCQkoxCzAJ\n";
cert += "BgNVBAYTAkNOMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDm0MpZBsaKYQSGj1lytQ+ubUm/\n";
cert += "4pvmIKTWtqtrGo75cF4N7Hajlm29wjOf7I7fTe4+JlxYmMhqxoXeoiLFwPUgVm6oMGU5T80R9Iw6\n";
cert += "cg36dX8l7bYwiETs/rI09Kzs+r7GZAEI1XueCNQygN9wfUcBDuXIsjjmzcUkpC5GNFGzxQIDAQAB\n";
cert += "MA0GCSqGSIb3DQEBCwUAA4GBADq6BvU5ILNZ9OanxqrTZ86o6qNgYMkopZrw0h0skNDRQ4GX1deQ\n";
cert += "AKSamow9ZW6g93/KkatMmF2vc2P43zeJ+vwunt+Tu57IUb4VJ+eKafGSo9ySilzVcWTUW8dR0zoN\n";
cert += "N3cAL5v1zWqhe/9z09xtsLwShtvv/PF0xgs3qmTKe8tG\n";
cert += "-----END CERTIFICATE-----";
function getYMD() {
	var myDate = new Date();
	var yy = myDate.getFullYear();
	var mm = myDate.getMonth() + 1;
	if (mm < 10) {
		mm = "0" + mm;
	}
	var dd = myDate.getDate();
	if (dd < 10) {
		dd = "0" + dd;
	}
	return "" + yy + mm + dd;
};
var verifyFlag = true;
function verifyLicense(bS) {
	var b64oneStr = aB(bS);
	var indexs = b64oneStr.indexOf("{");
	var sMsg = b64oneStr.substring(indexs);
	b64oneStr = b64oneStr.substring(0, indexs);
	hexoneStr = new Base642().ei(b64oneStr);
	var qx = new X509();
	qx.readCertPEM(cert);
	var isValid = qx.subjectPublicKeyRSA.verifyString(sMsg, hexoneStr);
	var bA = JSON.parse(sMsg);
	var today = getYMD();
	if (isValid) {
		if (bA.type == "test") {
			console.log("this is a test license!");
			if (today > bA.notafter) {
				verifyFlag = false;
				console.log("this license is out date!");
			}
		} else if (bA.type == "product") {
			console.log("this is a product license!");
			var hostname = location.hostname;
			var apps = bA.applyname;
			if (apps.length == 1) {
				var regobj = new RegExp(apps[0].replace(/\./g, "[.]*").replace(/\*/, "[.]*"));
				if (regobj.test(hostname)) {} else {
					verifyFlag = false;
					console.log("hostname verify error!");
				}
			} else if (apps.length > 1) {
				var hu = false;
				for (var i = 0; i < apps.length; i++) {
					var regobj = new RegExp(apps[i].replace(/\./g, "\\.").replace("*", "."));
					if (regobj.test(hostname)) {
						hu = true;
						break;
					}
				}
				if (!hu) {
					verifyFlag = false;
					console.log("hostname verify error!");
				}
			}
		}
	} else {
		verifyFlag = false;
		console.log("license verify error!");
	}
}; (function(root, lo) {
	if (typeof fg === "object") {
		la.fg = fg = lo();
	} else if (typeof define === "function" && define.xg) {
		define([], lo);
	} else {
		root.aX = lo();
	}
} (this,
function() {
	var aX = aX || (function(Math, undefined) {
		var C = {};
		var bC = C.bf = {};
		var Base = bC.Base = (function() {
			function F() {};
			return {
				extend: function(fj) {
					F.prototype = this;
					var fl = new F();
					if (fj) {
						fl.jT(fj);
					}
					if (!fl.hasOwnProperty('aV')) {
						fl.aV = function() {
							fl.ro.aV.apply(this, arguments);
						};
					}
					fl.aV.prototype = fl;
					fl.ro = this;
					return fl;
				},
				create: function() {
					var kf = this.extend();
					kf.aV.apply(kf, arguments);
					return kf;
				},
				aV: function() {},
				jT: function(gY) {
					for (var propertyName in gY) {
						if (gY.hasOwnProperty(propertyName)) {
							this[propertyName] = gY[propertyName];
						}
					}
					if (gY.hasOwnProperty('toString')) {
						this.toString = gY.toString;
					}
				},
				clone: function() {
					return this.aV.prototype.extend(this);
				}
			};
		} ());
		var bd = bC.bd = Base.extend({
			aV: function(bq, aI) {
				bq = this.bq = bq || [];
				if (aI != undefined) {
					this.aI = aI;
				} else {
					this.aI = bq.length * 4;
				}
			},
			toString: function(vX) {
				return (vX || cJ).stringify(this);
			},
			concat: function(aH) {
				var mg = this.bq;
				var ng = aH.bq;
				var jo = this.aI;
				var jJ = aH.aI;
				this.ag();
				if (jo % 4) {
					for (var i = 0; i < jJ; i++) {
						var so = (ng[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
						mg[(jo + i) >>> 2] |= so << (24 - ((jo + i) % 4) * 8);
					}
				} else {
					for (var i = 0; i < jJ; i += 4) {
						mg[(jo + i) >>> 2] = ng[i >>> 2];
					}
				}
				this.aI += jJ;
				return this;
			},
			ag: function() {
				var bq = this.bq;
				var aI = this.aI;
				bq[aI >>> 2] &= 0xffffffff << (32 - (aI % 4) * 8);
				bq.length = Math.ceil(aI / 4);
			},
			clone: function() {
				var clone = Base.clone.call(this);
				clone.bq = this.bq.slice(0);
				return clone;
			},
			random: function(eE) {
				var bq = [];
				var r = (function(eH) {
					var eH = eH;
					var iH = 0x3ade68b1;
					var mask = 0xffffffff;
					return function() {
						iH = (0x9069 * (iH & 0xFFFF) + (iH >> 0x10)) & mask;
						eH = (0x4650 * (eH & 0xFFFF) + (eH >> 0x10)) & mask;
						var result = ((iH << 0x10) + eH) & mask;
						result /= 0x100000000;
						result += 0.5;
						return result * (Math.random() > .5 ? 1 : -1);
					}
				});
				for (var i = 0,
				mt; i < eE; i += 4) {
					var mz = r((mt || Math.random()) * 0x100000000);
					mt = mz() * 0x3ade67b7;
					bq.push((mz() * 0x100000000) | 0);
				}
				return new bd.aV(bq, eE);
			}
		});
		var ck = C.bJ = {};
		var cJ = ck.cJ = {
			stringify: function(aH) {
				var bq = aH.bq;
				var aI = aH.aI;
				var jm = [];
				for (var i = 0; i < aI; i++) {
					var iY = (bq[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
					jm.push((iY >>> 4).toString(16));
					jm.push((iY & 0x0f).toString(16));
				}
				return jm.join('');
			},
			parse: function(oX) {
				var nU = oX.length;
				var bq = [];
				for (var i = 0; i < nU; i += 2) {
					bq[i >>> 3] |= parseInt(oX.substr(i, 2), 16) << (24 - (i % 8) * 4);
				}
				return new bd.aV(bq, nU / 2);
			}
		};
		var lq = ck.lq = {
			stringify: function(aH) {
				var bq = aH.bq;
				var aI = aH.aI;
				var mw = [];
				for (var i = 0; i < aI; i++) {
					var iY = (bq[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
					mw.push(String.fromCharCode(iY));
				}
				return mw.join('');
			},
			parse: function(mK) {
				var mn = mK.length;
				var bq = [];
				for (var i = 0; i < mn; i++) {
					bq[i >>> 2] |= (mK.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
				}
				return new bd.aV(bq, mn);
			}
		};
		var hh = ck.hh = {
			stringify: function(aH) {
				try {
					return decodeURIComponent(escape(lq.stringify(aH)));
				} catch(e) {
					throw new Error('Malformed UTF-8 data');
				}
			},
			parse: function(ox) {
				return lq.parse(unescape(encodeURIComponent(ox)));
			}
		};
		var fk = bC.fk = Base.extend({
			reset: function() {
				this.hs = new bd.aV();
				this.qY = 0;
			},
			ji: function(data) {
				if (typeof data == 'string') {
					data = hh.parse(data);
				}
				this.hs.concat(data);
				this.qY += data.aI;
			},
			gq: function(wx) {
				var data = this.hs;
				var jk = data.bq;
				var gF = data.aI;
				var bB = this.bB;
				var cq = bB * 4;
				var gD = gF / cq;
				if (wx) {
					gD = Math.ceil(gD);
				} else {
					gD = Math.max((gD | 0) - this.lN, 0);
				}
				var iO = gD * bB;
				var nu = Math.min(iO * 4, gF);
				if (iO) {
					for (var offset = 0; offset < iO; offset += bB) {
						this.kq(jk, offset);
					}
					var rj = jk.splice(0, iO);
					data.aI -= nu;
				}
				return new bd.aV(rj, nu);
			},
			clone: function() {
				var clone = Base.clone.call(this);
				clone.hs = this.hs.clone();
				return clone;
			},
			lN: 0
		});
		var wh = bC.wh = fk.extend({
			aL: Base.extend(),
			aV: function(aL) {
				this.aL = this.aL.extend(aL);
				this.reset();
			},
			reset: function() {
				fk.reset.call(this);
				this.jf();
			},
			update: function(jw) {
				this.ji(jw);
				this.gq();
				return this;
			},
			fU: function(jw) {
				if (jw) {
					this.ji(jw);
				}
				var hash = this.kG();
				return hash;
			},
			bB: 512 / 32,
			jx: function(jM) {
				return function(message, aL) {
					return new jM.aV(aL).fU(message);
				};
			},
			zS: function(jM) {
				return function(message, key) {
					return new cw.AP.aV(jM, key).fU(message);
				};
			}
		});
		var cw = C.jg = {};
		return C;
	} (Math)); (function() {
		var C = aX;
		var bC = C.bf;
		var bd = bC.bd;
		var ck = C.bJ;
		var aM = ck.aM = {
			stringify: function(aH) {
				var bq = aH.bq;
				var aI = aH.aI;
				var map = this.mo;
				aH.ag();
				var hQ = [];
				for (var i = 0; i < aI; i += 3) {
					var wT = (bq[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
					var vx = (bq[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
					var wB = (bq[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
					var ue = (wT << 16) | (vx << 8) | wB;
					for (var j = 0; (j < 4) && (i + j * 0.75 < aI); j++) {
						hQ.push(map.charAt((ue >>> (6 * (3 - j))) & 0x3f));
					}
				}
				var ge = map.charAt(64);
				if (ge) {
					while (hQ.length % 4) {
						hQ.push(ge);
					}
				}
				return hQ.join('');
			},
			parse: function(jD) {
				var mc = jD.length;
				var map = this.mo;
				var ge = map.charAt(64);
				if (ge) {
					var lU = jD.indexOf(ge);
					if (lU != -1) {
						mc = lU;
					}
				}
				var bq = [];
				var eE = 0;
				for (var i = 0; i < mc; i++) {
					if (i % 4) {
						var wi = map.indexOf(jD.charAt(i - 1)) << ((i % 4) * 2);
						var wu = map.indexOf(jD.charAt(i)) >>> (6 - (i % 4) * 2);
						bq[eE >>> 2] |= (wi | wu) << (24 - (eE % 4) * 8);
						eE++;
					}
				}
				return bd.create(bq, eE);
			},
			mo: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
		};
	} ()); (function() {
		if (typeof xF != 'function') {
			return;
		}
		var C = aX;
		var bC = C.bf;
		var bd = bC.bd;
		var lH = bd.aV;
		var qo = bd.aV = function(ao) {
			if (ao instanceof xF) {
				ao = new ny(ao);
			}
			if (ao instanceof AH || (typeof rX !== "undefined" && ao instanceof rX) || ao instanceof zp || ao instanceof AK || ao instanceof zn || ao instanceof sI || ao instanceof za || ao instanceof AG) {
				ao = new ny(ao.AQ, ao.Az, ao.vu);
			}
			if (ao instanceof ny) {
				var pk = ao.vu;
				var bq = [];
				for (var i = 0; i < pk; i++) {
					bq[i >>> 2] |= ao[i] << (24 - (i % 4) * 8);
				}
				lH.call(this, bq, pk);
			} else {
				lH.apply(this, arguments);
			}
		};
		qo.prototype = bd;
	} ());
	aX.bf.eU || (function(undefined) {
		var C = aX;
		var bC = C.bf;
		var Base = bC.Base;
		var bd = bC.bd;
		var fk = bC.fk;
		var ck = C.bJ;
		var hh = ck.hh;
		var aM = ck.aM;
		var cw = C.jg;
		var nZ = cw.nZ;
		var eU = bC.eU = fk.extend({
			aL: Base.extend(),
			kR: function(key, aL) {
				return this.create(this.jU, key, aL);
			},
			kg: function(key, aL) {
				return this.create(this.qp, key, aL);
			},
			aV: function(qN, key, aL) {
				this.aL = this.aL.extend(aL);
				this.nt = qN;
				this.hJ = key;
				this.reset();
			},
			reset: function() {
				fk.reset.call(this);
				this.jf();
			},
			zW: function(jy) {
				this.ji(jy);
				return this.gq();
			},
			fU: function(jy) {
				if (jy) {
					this.ji(jy);
				}
				var xb = this.kG();
				return xb;
			},
			ah: 128 / 32,
			fN: 128 / 32,
			jU: 1,
			qp: 2,
			jx: (function() {
				function ou(key) {
					if (typeof key == 'string') {
						return ni;
					} else {
						return hw;
					}
				};
				return function(aT) {
					return {
						bZ: function(message, key, aL) {
							return ou(key).bZ(aT, message, key, aL);
						},
						eV: function(bD, key, aL) {
							return ou(key).eV(aT, bD, key, aL);
						}
					};
				};
			} ())
		});
		var dC = bC.dC = eU.extend({
			kG: function() {
				var gH = this.gq(!!'flush');
				return gH;
			},
			bB: 1
		});
		var wJ = C.mode = {};
		var eL = bC.eL = Base.extend({
			kR: function(aT, bP) {
				return this.cB.create(aT, bP);
			},
			kg: function(aT, bP) {
				return this.eZ.create(aT, bP);
			},
			aV: function(aT, bP) {
				this.cd = aT;
				this.cQ = bP;
			}
		});
		var fi = wJ.fi = (function() {
			var fi = eL.extend();
			fi.cB = fi.extend({
				co: function(bq, offset) {
					var aT = this.cd;
					var bB = aT.bB;
					ph.call(this, bq, offset, bB);
					aT.fL(bq, offset);
					this.fO = bq.slice(offset, offset + bB);
				}
			});
			fi.eZ = fi.extend({
				co: function(bq, offset) {
					var aT = this.cd;
					var bB = aT.bB;
					var iM = bq.slice(offset, offset + bB);
					aT.kQ(bq, offset);
					ph.call(this, bq, offset, bB);
					this.fO = iM;
				}
			});
			function ph(bq, offset, bB) {
				var bP = this.cQ;
				if (bP) {
					var block = bP;
					this.cQ = undefined;
				} else {
					var block = this.fO;
				}
				for (var i = 0; i < bB; i++) {
					bq[offset + i] ^= block[i];
				}
			};
			return fi;
		} ());
		var vt = C.bH = {};
		var kB = vt.kB = {
			bH: function(data, bB) {
				var cq = bB * 4;
				var aZ = cq - data.aI % cq;
				var xu = (aZ << 24) | (aZ << 16) | (aZ << 8) | aZ;
				var mB = [];
				for (var i = 0; i < aZ; i += 4) {
					mB.push(xu);
				}
				var padding = bd.create(mB, aZ);
				data.concat(padding);
			},
			es: function(data) {
				var aZ = data.bq[(data.aI - 1) >>> 2] & 0xff;
				data.aI -= aZ;
			}
		};
		var gi = bC.gi = eU.extend({
			aL: eU.aL.extend({
				mode: fi,
				padding: kB
			}),
			reset: function() {
				eU.reset.call(this);
				var aL = this.aL;
				var bP = aL.bP;
				var mode = aL.mode;
				if (this.nt == this.jU) {
					var nd = mode.kR;
				} else {
					var nd = mode.kg;
					this.lN = 1;
				}
				this.pu = nd.call(mode, this, bP && bP.bq);
			},
			kq: function(bq, offset) {
				this.pu.co(bq, offset);
			},
			kG: function() {
				var padding = this.aL.padding;
				if (this.nt == this.jU) {
					padding.bH(this.hs, this.bB);
					var gH = this.gq(!!'flush');
				} else {
					var gH = this.gq(!!'flush');
					padding.es(gH);
				}
				return gH;
			},
			bB: 128 / 32
		});
		var fw = bC.fw = Base.extend({
			aV: function(eI) {
				this.jT(eI);
			},
			toString: function(kU) {
				return (kU || this.kU).stringify(this);
			}
		});
		var lf = C.format = {};
		var yV = lf.vj = {
			stringify: function(eI) {
				var bD = eI.bD;
				var dG = eI.dG;
				if (dG) {
					var aH = bd.create([0x53616c74, 0x65645f5f]).concat(dG).concat(bD);
				} else {
					var aH = bD;
				}
				return aH.toString(aM);
			},
			parse: function(xW) {
				var bD = aM.parse(xW);
				var iR = bD.bq;
				if (iR[0] == 0x53616c74 && iR[1] == 0x65645f5f) {
					var dG = bd.create(iR.slice(2, 4));
					iR.splice(0, 4);
					bD.aI -= 16;
				}
				return fw.create({
					bD: bD,
					dG: dG
				});
			}
		};
		var hw = bC.hw = Base.extend({
			aL: Base.extend({
				format: yV
			}),
			bZ: function(aT, message, key, aL) {
				aL = this.aL.extend(aL);
				var nX = aT.kR(key, aL);
				var bD = nX.fU(message);
				var kd = nX.aL;
				return fw.create({
					bD: bD,
					key: key,
					bP: kd.bP,
					yC: aT,
					mode: kd.mode,
					padding: kd.padding,
					bB: aT.bB,
					kU: aL.format
				});
			},
			eV: function(aT, bD, key, aL) {
				aL = this.aL.extend(aL);
				bD = this.lX(bD, aL.format);
				var plaintext = aT.kg(key, aL).fU(bD.bD);
				return plaintext;
			},
			lX: function(bD, format) {
				if (typeof bD == 'string') {
					return format.parse(bD, this);
				} else {
					return bD;
				}
			}
		});
		var wV = C.ly = {};
		var yd = wV.vj = {
			oB: function(password, ah, fN, dG) {
				if (!dG) {
					dG = bd.random(64 / 8);
				}
				var key = nZ.create({
					ah: ah + fN
				}).Aj(password, dG);
				var bP = bd.create(key.bq.slice(ah), fN * 4);
				key.aI = ah * 4;
				return fw.create({
					key: key,
					bP: bP,
					dG: dG
				});
			}
		};
		var ni = bC.ni = hw.extend({
			aL: hw.aL.extend({
				ly: yd
			}),
			bZ: function(aT, message, password, aL) {
				aL = this.aL.extend(aL);
				var er = aL.ly.oB(password, aT.ah, aT.fN);
				aL.bP = er.bP;
				var bD = hw.bZ.call(this, aT, message, er.key, aL);
				bD.jT(er);
				return bD;
			},
			eV: function(aT, bD, password, aL) {
				aL = this.aL.extend(aL);
				bD = this.lX(bD, aL.format);
				var er = aL.ly.oB(password, aT.ah, aT.fN, bD.dG);
				aL.bP = er.bP;
				var plaintext = hw.eV.call(this, aT, bD, er.key, aL);
				return plaintext;
			}
		});
	} ());
	aX.mode.gn = (function() {
		var gn = aX.bf.eL.extend();
		gn.cB = gn.extend({
			co: function(bq, offset) {
				var aT = this.cd;
				var bB = aT.bB;
				nI.call(this, bq, offset, bB, aT);
				this.fO = bq.slice(offset, offset + bB);
			}
		});
		gn.eZ = gn.extend({
			co: function(bq, offset) {
				var aT = this.cd;
				var bB = aT.bB;
				var iM = bq.slice(offset, offset + bB);
				nI.call(this, bq, offset, bB, aT);
				this.fO = iM;
			}
		});
		function nI(bq, offset, bB, aT) {
			var bP = this.cQ;
			if (bP) {
				var cP = bP.slice(0);
				this.cQ = undefined;
			} else {
				var cP = this.fO;
			}
			aT.fL(cP, 0);
			for (var i = 0; i < bB; i++) {
				bq[offset + i] ^= cP[i];
			}
		};
		return gn;
	} ());
	aX.mode.ed = (function() {
		var ed = aX.bf.eL.extend();
		ed.cB = ed.extend({
			co: function(bq, offset) {
				this.cd.fL(bq, offset);
			}
		});
		ed.eZ = ed.extend({
			co: function(bq, offset) {
				this.cd.kQ(bq, offset);
			}
		});
		return ed;
	} ());
	aX.bH.yr = {
		bH: function(data, bB) {
			var gF = data.aI;
			var cq = bB * 4;
			var aZ = cq - gF % cq;
			var jK = gF + aZ - 1;
			data.ag();
			data.bq[jK >>> 2] |= aZ << (24 - (jK % 4) * 8);
			data.aI += aZ;
		},
		es: function(data) {
			var aZ = data.bq[(data.aI - 1) >>> 2] & 0xff;
			data.aI -= aZ;
		}
	};
	aX.bH.Ak = {
		bH: function(data, bB) {
			var cq = bB * 4;
			var aZ = cq - data.aI % cq;
			data.concat(aX.bf.bd.random(aZ - 1)).concat(aX.bf.bd.create([aZ << 24], 1));
		},
		es: function(data) {
			var aZ = data.bq[(data.aI - 1) >>> 2] & 0xff;
			data.aI -= aZ;
		}
	};
	aX.bH.Ai = {
		bH: function(data, bB) {
			data.concat(aX.bf.bd.create([0x80000000], 1));
			aX.bH.oQ.bH(data, bB);
		},
		es: function(data) {
			aX.bH.oQ.es(data);
			data.aI--;
		}
	};
	aX.mode.gK = (function() {
		var gK = aX.bf.eL.extend();
		var cB = gK.cB = gK.extend({
			co: function(bq, offset) {
				var aT = this.cd;
				var bB = aT.bB;
				var bP = this.cQ;
				var cP = this.qF;
				if (bP) {
					cP = this.qF = bP.slice(0);
					this.cQ = undefined;
				}
				aT.fL(cP, 0);
				for (var i = 0; i < bB; i++) {
					bq[offset + i] ^= cP[i];
				}
			}
		});
		gK.eZ = cB;
		return gK;
	} ());
	aX.bH.yh = {
		bH: function() {},
		es: function() {}
	}; (function(undefined) {
		var C = aX;
		var bC = C.bf;
		var fw = bC.fw;
		var ck = C.bJ;
		var cJ = ck.cJ;
		var lf = C.format;
		var xm = lf.cJ = {
			stringify: function(eI) {
				return eI.bD.toString(cJ);
			},
			parse: function(input) {
				var bD = cJ.parse(input);
				return fw.create({
					bD: bD
				});
			}
		};
	} ()); (function() {
		var C = aX;
		var bC = C.bf;
		var gi = bC.gi;
		var cw = C.jg;
		var bj = [];
		var oP = [];
		var eF = [];
		var eG = [];
		var fD = [];
		var ek = [];
		var kr = [];
		var lj = [];
		var ka = [];
		var lk = []; (function() {
			var d = [];
			for (var i = 0; i < 256; i++) {
				if (i < 128) {
					d[i] = i << 1;
				} else {
					d[i] = (i << 1) ^ 0x11b;
				}
			}
			var x = 0;
			var fm = 0;
			for (var i = 0; i < 256; i++) {
				var cr = fm ^ (fm << 1) ^ (fm << 2) ^ (fm << 3) ^ (fm << 4);
				cr = (cr >>> 8) ^ (cr & 0xff) ^ 0x63;
				bj[x] = cr;
				oP[cr] = x;
				var x2 = d[x];
				var pa = d[x2];
				var nm = d[pa];
				var t = (d[cr] * 0x101) ^ (cr * 0x1010100);
				eF[x] = (t << 24) | (t >>> 8);
				eG[x] = (t << 16) | (t >>> 16);
				fD[x] = (t << 8) | (t >>> 24);
				ek[x] = t;
				var t = (nm * 0x1010101) ^ (pa * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
				kr[cr] = (t << 24) | (t >>> 8);
				lj[cr] = (t << 16) | (t >>> 16);
				ka[cr] = (t << 8) | (t >>> 24);
				lk[cr] = t;
				if (!x) {
					x = fm = 1;
				} else {
					x = x2 ^ d[d[d[nm ^ x2]]];
					fm ^= d[d[fm]];
				}
			}
		} ());
		var pS = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
		var iG = cw.iG = gi.extend({
			jf: function() {
				var key = this.hJ;
				var keyWords = key.bq;
				var ah = key.aI / 4;
				var jO = this.qv = ah + 6;
				var kF = (jO + 1) * 4;
				var bV = this.qg = [];
				for (var aq = 0; aq < kF; aq++) {
					if (aq < ah) {
						bV[aq] = keyWords[aq];
					} else {
						var t = bV[aq - 1];
						if (! (aq % ah)) {
							t = (t << 8) | (t >>> 24);
							t = (bj[t >>> 24] << 24) | (bj[(t >>> 16) & 0xff] << 16) | (bj[(t >>> 8) & 0xff] << 8) | bj[t & 0xff];
							t ^= pS[(aq / ah) | 0] << 24;
						} else if (ah > 6 && aq % ah == 4) {
							t = (bj[t >>> 24] << 24) | (bj[(t >>> 16) & 0xff] << 16) | (bj[(t >>> 8) & 0xff] << 8) | bj[t & 0xff];
						}
						bV[aq] = bV[aq - ah] ^ t;
					}
				}
				var oA = this.qM = [];
				for (var fp = 0; fp < kF; fp++) {
					var aq = kF - fp;
					if (fp % 4) {
						var t = bV[aq];
					} else {
						var t = bV[aq - 4];
					}
					if (fp < 4 || aq <= 4) {
						oA[fp] = t;
					} else {
						oA[fp] = kr[bj[t >>> 24]] ^ lj[bj[(t >>> 16) & 0xff]] ^ ka[bj[(t >>> 8) & 0xff]] ^ lk[bj[t & 0xff]];
					}
				}
			},
			fL: function(M, offset) {
				this.lG(M, offset, this.qg, eF, eG, fD, ek, bj);
			},
			kQ: function(M, offset) {
				var t = M[offset + 1];
				M[offset + 1] = M[offset + 3];
				M[offset + 3] = t;
				this.lG(M, offset, this.qM, kr, lj, ka, lk, oP);
				var t = M[offset + 1];
				M[offset + 1] = M[offset + 3];
				M[offset + 3] = t;
			},
			lG: function(M, offset, bV, eF, eG, fD, ek, bj) {
				var jO = this.qv;
				var du = M[offset] ^ bV[0];
				var cC = M[offset + 1] ^ bV[1];
				var ci = M[offset + 2] ^ bV[2];
				var cG = M[offset + 3] ^ bV[3];
				var aq = 4;
				for (var round = 1; round < jO; round++) {
					var hW = eF[du >>> 24] ^ eG[(cC >>> 16) & 0xff] ^ fD[(ci >>> 8) & 0xff] ^ ek[cG & 0xff] ^ bV[aq++];
					var jr = eF[cC >>> 24] ^ eG[(ci >>> 16) & 0xff] ^ fD[(cG >>> 8) & 0xff] ^ ek[du & 0xff] ^ bV[aq++];
					var iA = eF[ci >>> 24] ^ eG[(cG >>> 16) & 0xff] ^ fD[(du >>> 8) & 0xff] ^ ek[cC & 0xff] ^ bV[aq++];
					var jz = eF[cG >>> 24] ^ eG[(du >>> 16) & 0xff] ^ fD[(cC >>> 8) & 0xff] ^ ek[ci & 0xff] ^ bV[aq++];
					du = hW;
					cC = jr;
					ci = iA;
					cG = jz;
				}
				var hW = ((bj[du >>> 24] << 24) | (bj[(cC >>> 16) & 0xff] << 16) | (bj[(ci >>> 8) & 0xff] << 8) | bj[cG & 0xff]) ^ bV[aq++];
				var jr = ((bj[cC >>> 24] << 24) | (bj[(ci >>> 16) & 0xff] << 16) | (bj[(cG >>> 8) & 0xff] << 8) | bj[du & 0xff]) ^ bV[aq++];
				var iA = ((bj[ci >>> 24] << 24) | (bj[(cG >>> 16) & 0xff] << 16) | (bj[(du >>> 8) & 0xff] << 8) | bj[cC & 0xff]) ^ bV[aq++];
				var jz = ((bj[cG >>> 24] << 24) | (bj[(du >>> 16) & 0xff] << 16) | (bj[(cC >>> 8) & 0xff] << 8) | bj[ci & 0xff]) ^ bV[aq++];
				M[offset] = hW;
				M[offset + 1] = jr;
				M[offset + 2] = iA;
				M[offset + 3] = jz;
			},
			ah: 256 / 32
		});
		C.iG = gi.jx(iG);
	} ()); (function(Math) {
		var C = aX;
		var bC = C.bf;
		var bd = bC.bd;
		var wh = bC.wh;
		var cw = C.jg;
		var T = []; (function() {
			for (var i = 0; i < 64; i++) {
				T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
			}
		} ());
		var AF = cw.AF = wh.extend({
			jf: function() {
				this._hash = new bd.aV([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
			},
			kq: function(M, offset) {
				for (var i = 0; i < 16; i++) {
					var offset_i = offset + i;
					var M_offset_i = M[offset_i];
					M[offset_i] = ((((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00));
				}
				var H = this._hash.bq;
				var M_offset_0 = M[offset + 0];
				var M_offset_1 = M[offset + 1];
				var M_offset_2 = M[offset + 2];
				var M_offset_3 = M[offset + 3];
				var M_offset_4 = M[offset + 4];
				var M_offset_5 = M[offset + 5];
				var M_offset_6 = M[offset + 6];
				var M_offset_7 = M[offset + 7];
				var M_offset_8 = M[offset + 8];
				var M_offset_9 = M[offset + 9];
				var M_offset_10 = M[offset + 10];
				var M_offset_11 = M[offset + 11];
				var M_offset_12 = M[offset + 12];
				var M_offset_13 = M[offset + 13];
				var M_offset_14 = M[offset + 14];
				var M_offset_15 = M[offset + 15];
				var a = H[0];
				var b = H[1];
				var c = H[2];
				var d = H[3];
				a = FF(a, b, c, d, M_offset_0, 7, T[0]);
				d = FF(d, a, b, c, M_offset_1, 12, T[1]);
				c = FF(c, d, a, b, M_offset_2, 17, T[2]);
				b = FF(b, c, d, a, M_offset_3, 22, T[3]);
				a = FF(a, b, c, d, M_offset_4, 7, T[4]);
				d = FF(d, a, b, c, M_offset_5, 12, T[5]);
				c = FF(c, d, a, b, M_offset_6, 17, T[6]);
				b = FF(b, c, d, a, M_offset_7, 22, T[7]);
				a = FF(a, b, c, d, M_offset_8, 7, T[8]);
				d = FF(d, a, b, c, M_offset_9, 12, T[9]);
				c = FF(c, d, a, b, M_offset_10, 17, T[10]);
				b = FF(b, c, d, a, M_offset_11, 22, T[11]);
				a = FF(a, b, c, d, M_offset_12, 7, T[12]);
				d = FF(d, a, b, c, M_offset_13, 12, T[13]);
				c = FF(c, d, a, b, M_offset_14, 17, T[14]);
				b = FF(b, c, d, a, M_offset_15, 22, T[15]);
				a = GG(a, b, c, d, M_offset_1, 5, T[16]);
				d = GG(d, a, b, c, M_offset_6, 9, T[17]);
				c = GG(c, d, a, b, M_offset_11, 14, T[18]);
				b = GG(b, c, d, a, M_offset_0, 20, T[19]);
				a = GG(a, b, c, d, M_offset_5, 5, T[20]);
				d = GG(d, a, b, c, M_offset_10, 9, T[21]);
				c = GG(c, d, a, b, M_offset_15, 14, T[22]);
				b = GG(b, c, d, a, M_offset_4, 20, T[23]);
				a = GG(a, b, c, d, M_offset_9, 5, T[24]);
				d = GG(d, a, b, c, M_offset_14, 9, T[25]);
				c = GG(c, d, a, b, M_offset_3, 14, T[26]);
				b = GG(b, c, d, a, M_offset_8, 20, T[27]);
				a = GG(a, b, c, d, M_offset_13, 5, T[28]);
				d = GG(d, a, b, c, M_offset_2, 9, T[29]);
				c = GG(c, d, a, b, M_offset_7, 14, T[30]);
				b = GG(b, c, d, a, M_offset_12, 20, T[31]);
				a = HH(a, b, c, d, M_offset_5, 4, T[32]);
				d = HH(d, a, b, c, M_offset_8, 11, T[33]);
				c = HH(c, d, a, b, M_offset_11, 16, T[34]);
				b = HH(b, c, d, a, M_offset_14, 23, T[35]);
				a = HH(a, b, c, d, M_offset_1, 4, T[36]);
				d = HH(d, a, b, c, M_offset_4, 11, T[37]);
				c = HH(c, d, a, b, M_offset_7, 16, T[38]);
				b = HH(b, c, d, a, M_offset_10, 23, T[39]);
				a = HH(a, b, c, d, M_offset_13, 4, T[40]);
				d = HH(d, a, b, c, M_offset_0, 11, T[41]);
				c = HH(c, d, a, b, M_offset_3, 16, T[42]);
				b = HH(b, c, d, a, M_offset_6, 23, T[43]);
				a = HH(a, b, c, d, M_offset_9, 4, T[44]);
				d = HH(d, a, b, c, M_offset_12, 11, T[45]);
				c = HH(c, d, a, b, M_offset_15, 16, T[46]);
				b = HH(b, c, d, a, M_offset_2, 23, T[47]);
				a = II(a, b, c, d, M_offset_0, 6, T[48]);
				d = II(d, a, b, c, M_offset_7, 10, T[49]);
				c = II(c, d, a, b, M_offset_14, 15, T[50]);
				b = II(b, c, d, a, M_offset_5, 21, T[51]);
				a = II(a, b, c, d, M_offset_12, 6, T[52]);
				d = II(d, a, b, c, M_offset_3, 10, T[53]);
				c = II(c, d, a, b, M_offset_10, 15, T[54]);
				b = II(b, c, d, a, M_offset_1, 21, T[55]);
				a = II(a, b, c, d, M_offset_8, 6, T[56]);
				d = II(d, a, b, c, M_offset_15, 10, T[57]);
				c = II(c, d, a, b, M_offset_6, 15, T[58]);
				b = II(b, c, d, a, M_offset_13, 21, T[59]);
				a = II(a, b, c, d, M_offset_4, 6, T[60]);
				d = II(d, a, b, c, M_offset_11, 10, T[61]);
				c = II(c, d, a, b, M_offset_2, 15, T[62]);
				b = II(b, c, d, a, M_offset_9, 21, T[63]);
				H[0] = (H[0] + a) | 0;
				H[1] = (H[1] + b) | 0;
				H[2] = (H[2] + c) | 0;
				H[3] = (H[3] + d) | 0;
			},
			kG: function() {
				var data = this.hs;
				var jk = data.bq;
				var nBitsTotal = this.qY * 8;
				var nBitsLeft = data.aI * 8;
				jk[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
				var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
				var nBitsTotalL = nBitsTotal;
				jk[(((nBitsLeft + 64) >>> 9) << 4) + 15] = ((((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) | (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00));
				jk[(((nBitsLeft + 64) >>> 9) << 4) + 14] = ((((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) | (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00));
				data.aI = (jk.length + 1) * 4;
				this.gq();
				var hash = this._hash;
				var H = hash.bq;
				for (var i = 0; i < 4; i++) {
					var H_i = H[i];
					H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
				}
				return hash;
			},
			clone: function() {
				var clone = wh.clone.call(this);
				clone._hash = this._hash.clone();
				return clone;
			}
		});
		function FF(a, b, c, d, x, s, t) {
			var n = a + ((b & c) | (~b & d)) + x + t;
			return ((n << s) | (n >>> (32 - s))) + b;
		};
		function GG(a, b, c, d, x, s, t) {
			var n = a + ((b & d) | (c & ~d)) + x + t;
			return ((n << s) | (n >>> (32 - s))) + b;
		};
		function HH(a, b, c, d, x, s, t) {
			var n = a + (b ^ c ^ d) + x + t;
			return ((n << s) | (n >>> (32 - s))) + b;
		};
		function II(a, b, c, d, x, s, t) {
			var n = a + (c ^ (b | ~d)) + x + t;
			return ((n << s) | (n >>> (32 - s))) + b;
		};
		C.AF = wh.jx(AF);
		C.HmacMD5 = wh.zS(AF);
	} (Math));
	aX.mode.hn = (function() {
		var hn = aX.bf.eL.extend();
		function oT(word) {
			if (((word >> 24) & 0xff) === 0xff) {
				var il = (word >> 16) & 0xff;
				var iL = (word >> 8) & 0xff;
				var jq = word & 0xff;
				if (il === 0xff) {
					il = 0;
					if (iL === 0xff) {
						iL = 0;
						if (jq === 0xff) {
							jq = 0;
						} else {++jq;
						}
					} else {++iL;
					}
				} else {++il;
				}
				word = 0;
				word += (il << 16);
				word += (iL << 8);
				word += jq;
			} else {
				word += (0x01 << 24);
			}
			return word;
		};
		function pp(counter) {
			if ((counter[0] = oT(counter[0])) === 0) {
				counter[1] = oT(counter[1]);
			}
			return counter;
		};
		var cB = hn.cB = hn.extend({
			co: function(bq, offset) {
				var aT = this.cd;
				var bB = aT.bB;
				var bP = this.cQ;
				var counter = this.jY;
				if (bP) {
					counter = this.jY = bP.slice(0);
					this.cQ = undefined;
				}
				pp(counter);
				var cP = counter.slice(0);
				aT.fL(cP, 0);
				for (var i = 0; i < bB; i++) {
					bq[offset + i] ^= cP[i];
				}
			}
		});
		hn.eZ = cB;
		return hn;
	} ()); (function() {
		var C = aX;
		var bC = C.bf;
		var dC = bC.dC;
		var cw = C.jg;
		var S = [];
		var aJ = [];
		var G = [];
		var jG = cw.jG = dC.extend({
			jf: function() {
				var K = this.hJ.bq;
				var bP = this.aL.bP;
				for (var i = 0; i < 4; i++) {
					K[i] = (((K[i] << 8) | (K[i] >>> 24)) & 0x00ff00ff) | (((K[i] << 24) | (K[i] >>> 8)) & 0xff00ff00);
				}
				var X = this.hC = [K[0], (K[3] << 16) | (K[2] >>> 16), K[1], (K[0] << 16) | (K[3] >>> 16), K[2], (K[1] << 16) | (K[0] >>> 16), K[3], (K[2] << 16) | (K[1] >>> 16)];
				var C = this.kt = [(K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff), (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff), (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff), (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)];
				this.fP = 0;
				for (var i = 0; i < 4; i++) {
					eQ.call(this);
				}
				for (var i = 0; i < 8; i++) {
					C[i] ^= X[(i + 4) & 7];
				}
				if (bP) {
					var hD = bP.bq;
					var cz = hD[0];
					var dz = hD[1];
					var dc = (((cz << 8) | (cz >>> 24)) & 0x00ff00ff) | (((cz << 24) | (cz >>> 8)) & 0xff00ff00);
					var cN = (((dz << 8) | (dz >>> 24)) & 0x00ff00ff) | (((dz << 24) | (dz >>> 8)) & 0xff00ff00);
					var fQ = (dc >>> 16) | (cN & 0xffff0000);
					var hH = (cN << 16) | (dc & 0x0000ffff);
					C[0] ^= dc;
					C[1] ^= fQ;
					C[2] ^= cN;
					C[3] ^= hH;
					C[4] ^= dc;
					C[5] ^= fQ;
					C[6] ^= cN;
					C[7] ^= hH;
					for (var i = 0; i < 4; i++) {
						eQ.call(this);
					}
				}
			},
			kq: function(M, offset) {
				var X = this.hC;
				eQ.call(this);
				S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
				S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
				S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
				S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
				for (var i = 0; i < 4; i++) {
					S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) | (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);
					M[offset + i] ^= S[i];
				}
			},
			bB: 128 / 32,
			fN: 64 / 32
		});
		function eQ() {
			var X = this.hC;
			var C = this.kt;
			for (var i = 0; i < 8; i++) {
				aJ[i] = C[i];
			}
			C[0] = (C[0] + 0x4d34d34d + this.fP) | 0;
			C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (aJ[0] >>> 0) ? 1 : 0)) | 0;
			C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (aJ[1] >>> 0) ? 1 : 0)) | 0;
			C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (aJ[2] >>> 0) ? 1 : 0)) | 0;
			C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (aJ[3] >>> 0) ? 1 : 0)) | 0;
			C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (aJ[4] >>> 0) ? 1 : 0)) | 0;
			C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (aJ[5] >>> 0) ? 1 : 0)) | 0;
			C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (aJ[6] >>> 0) ? 1 : 0)) | 0;
			this.fP = (C[7] >>> 0) < (aJ[7] >>> 0) ? 1 : 0;
			for (var i = 0; i < 8; i++) {
				var da = X[i] + C[i];
				var eS = da & 0xffff;
				var dX = da >>> 16;
				var jE = ((((eS * eS) >>> 17) + eS * dX) >>> 15) + dX * dX;
				var jc = (((da & 0xffff0000) * da) | 0) + (((da & 0x0000ffff) * da) | 0);
				G[i] = jE ^ jc;
			}
			X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
			X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
			X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
			X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
			X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
			X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
			X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
			X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
		};
		C.jG = dC.jx(jG);
	} ());
	aX.mode.gM = (function() {
		var gM = aX.bf.eL.extend();
		var cB = gM.cB = gM.extend({
			co: function(bq, offset) {
				var aT = this.cd;
				var bB = aT.bB;
				var bP = this.cQ;
				var counter = this.jY;
				if (bP) {
					counter = this.jY = bP.slice(0);
					this.cQ = undefined;
				}
				var cP = counter.slice(0);
				aT.fL(cP, 0);
				counter[bB - 1] = (counter[bB - 1] + 1) | 0;
				for (var i = 0; i < bB; i++) {
					bq[offset + i] ^= cP[i];
				}
			}
		});
		gM.eZ = cB;
		return gM;
	} ()); (function() {
		var C = aX;
		var bC = C.bf;
		var dC = bC.dC;
		var cw = C.jg;
		var S = [];
		var aJ = [];
		var G = [];
		var kS = cw.kS = dC.extend({
			jf: function() {
				var K = this.hJ.bq;
				var bP = this.aL.bP;
				var X = this.hC = [K[0], (K[3] << 16) | (K[2] >>> 16), K[1], (K[0] << 16) | (K[3] >>> 16), K[2], (K[1] << 16) | (K[0] >>> 16), K[3], (K[2] << 16) | (K[1] >>> 16)];
				var C = this.kt = [(K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff), (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff), (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff), (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)];
				this.fP = 0;
				for (var i = 0; i < 4; i++) {
					eQ.call(this);
				}
				for (var i = 0; i < 8; i++) {
					C[i] ^= X[(i + 4) & 7];
				}
				if (bP) {
					var hD = bP.bq;
					var cz = hD[0];
					var dz = hD[1];
					var dc = (((cz << 8) | (cz >>> 24)) & 0x00ff00ff) | (((cz << 24) | (cz >>> 8)) & 0xff00ff00);
					var cN = (((dz << 8) | (dz >>> 24)) & 0x00ff00ff) | (((dz << 24) | (dz >>> 8)) & 0xff00ff00);
					var fQ = (dc >>> 16) | (cN & 0xffff0000);
					var hH = (cN << 16) | (dc & 0x0000ffff);
					C[0] ^= dc;
					C[1] ^= fQ;
					C[2] ^= cN;
					C[3] ^= hH;
					C[4] ^= dc;
					C[5] ^= fQ;
					C[6] ^= cN;
					C[7] ^= hH;
					for (var i = 0; i < 4; i++) {
						eQ.call(this);
					}
				}
			},
			kq: function(M, offset) {
				var X = this.hC;
				eQ.call(this);
				S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
				S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
				S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
				S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);
				for (var i = 0; i < 4; i++) {
					S[i] = (((S[i] << 8) | (S[i] >>> 24)) & 0x00ff00ff) | (((S[i] << 24) | (S[i] >>> 8)) & 0xff00ff00);
					M[offset + i] ^= S[i];
				}
			},
			bB: 128 / 32,
			fN: 64 / 32
		});
		function eQ() {
			var X = this.hC;
			var C = this.kt;
			for (var i = 0; i < 8; i++) {
				aJ[i] = C[i];
			}
			C[0] = (C[0] + 0x4d34d34d + this.fP) | 0;
			C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (aJ[0] >>> 0) ? 1 : 0)) | 0;
			C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (aJ[1] >>> 0) ? 1 : 0)) | 0;
			C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (aJ[2] >>> 0) ? 1 : 0)) | 0;
			C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (aJ[3] >>> 0) ? 1 : 0)) | 0;
			C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (aJ[4] >>> 0) ? 1 : 0)) | 0;
			C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (aJ[5] >>> 0) ? 1 : 0)) | 0;
			C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (aJ[6] >>> 0) ? 1 : 0)) | 0;
			this.fP = (C[7] >>> 0) < (aJ[7] >>> 0) ? 1 : 0;
			for (var i = 0; i < 8; i++) {
				var da = X[i] + C[i];
				var eS = da & 0xffff;
				var dX = da >>> 16;
				var jE = ((((eS * eS) >>> 17) + eS * dX) >>> 15) + dX * dX;
				var jc = (((da & 0xffff0000) * da) | 0) + (((da & 0x0000ffff) * da) | 0);
				G[i] = jE ^ jc;
			}
			X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
			X[1] = (G[1] + ((G[0] << 8) | (G[0] >>> 24)) + G[7]) | 0;
			X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
			X[3] = (G[3] + ((G[2] << 8) | (G[2] >>> 24)) + G[1]) | 0;
			X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
			X[5] = (G[5] + ((G[4] << 8) | (G[4] >>> 24)) + G[3]) | 0;
			X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
			X[7] = (G[7] + ((G[6] << 8) | (G[6] >>> 24)) + G[5]) | 0;
		};
		C.kS = dC.jx(kS);
	} ());
	aX.bH.oQ = {
		bH: function(data, bB) {
			var cq = bB * 4;
			data.ag();
			data.aI += cq - ((data.aI % cq) || cq);
		},
		es: function(data) {
			var jk = data.bq;
			var i = data.aI - 1;
			while (! ((jk[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
				i--;
			}
			data.aI = i + 1;
		}
	};
	return aX;
}));
function qh(ns, rd) {
	var yg = [0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x1A, 0x2A, 0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x3A, 0x3B, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x1A, 0x2A, 0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x3A, 0x3B];
	var gf = "";
	var mj = "";
	for (var i = 0; i < ns.length; i++) {
		mj = String.fromCharCode(ns[i].charCodeAt(0) ^ yg[i]);
		gf += mj;
	}
	gf = gf.substr(0, gf.length - 16);
	var wv = aX.bJ.hh.parse(gf);
	var wy = aX.iG.bZ(rd, wv, {
		mode: aX.mode.ed,
		padding: aX.bH.kB
	});
	return wy.toString();
};
function hash(bS) {
	return aX.AF(bS);
};;
var lT = {}; (function(fg) {
	var fC;
	var wr = 0xdeadbeefcafe;
	var mT = ((wr & 0xffffff) == 0xefcafe);
	function O(a, b, c) {
		if (a != null) if ("number" == typeof a) this.ki(a, b, c);
		else if (b == null && "string" != typeof a) this.gw(a, 256);
		else this.gw(a, b);
	};
	function aO() {
		return new O(null);
	};
	function pD(i, x, w, j, c, n) {
		while (--n >= 0) {
			var v = x * this[i++] + w[j] + c;
			c = Math.floor(v / 0x4000000);
			w[j++] = v & 0x3ffffff;
		}
		return c;
	};
	function sc(i, x, w, j, c, n) {
		var gE = x & 0x7fff,
		fR = x >> 15;
		while (--n >= 0) {
			var l = this[i] & 0x7fff;
			var h = this[i++] >> 15;
			var m = fR * l + h * gE;
			l = gE * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
			c = (l >>> 30) + (m >>> 15) + fR * h + (c >>> 30);
			w[j++] = l & 0x3fffffff;
		}
		return c;
	};
	function rN(i, x, w, j, c, n) {
		var gE = x & 0x3fff,
		fR = x >> 14;
		while (--n >= 0) {
			var l = this[i] & 0x3fff;
			var h = this[i++] >> 14;
			var m = fR * l + h * gE;
			l = gE * l + ((m & 0x3fff) << 14) + w[j] + c;
			c = (l >> 28) + (m >> 14) + fR * h;
			w[j++] = l & 0xfffffff;
		}
		return c;
	};
	if (mT && (navigator.appName == "Microsoft Internet Explorer")) {
		O.prototype.dN = sc;
		fC = 30;
	} else if (mT && (navigator.appName != "Netscape")) {
		O.prototype.dN = pD;
		fC = 26;
	} else {
		O.prototype.dN = rN;
		fC = 28;
	}
	O.prototype.bb = fC;
	O.prototype.aW = ((1 << fC) - 1);
	O.prototype.dq = (1 << fC);
	var lu = 52;
	O.prototype.wY = Math.pow(2, lu);
	O.prototype.oK = lu - fC;
	O.prototype.oM = 2 * fC - lu;
	var vW = "0123456789abcdefghijklmnopqrstuvwxyz";
	var ix = new Array();
	var eA, cu;
	eA = "0".charCodeAt(0);
	for (cu = 0; cu <= 9; ++cu) ix[eA++] = cu;
	eA = "a".charCodeAt(0);
	for (cu = 10; cu < 36; ++cu) ix[eA++] = cu;
	eA = "A".charCodeAt(0);
	for (cu = 10; cu < 36; ++cu) ix[eA++] = cu;
	function dE(n) {
		return vW.charAt(n);
	};
	function mE(s, i) {
		var c = ix[s.charCodeAt(i)];
		return (c == null) ? -1 : c;
	};
	function sN(r) {
		for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
		r.t = this.t;
		r.s = this.s;
	};
	function qf(x) {
		this.t = 1;
		this.s = (x < 0) ? -1 : 0;
		if (x > 0) this[0] = x;
		else if (x < -1) this[0] = x + this.dq;
		else this.t = 0;
	};
	function dV(i) {
		var r = aO();
		r.gr(i);
		return r;
	};
	function pR(s, b) {
		var k;
		if (b == 16) k = 4;
		else if (b == 8) k = 3;
		else if (b == 256) k = 8;
		else if (b == 2) k = 1;
		else if (b == 32) k = 5;
		else if (b == 4) k = 2;
		else {
			this.wq(s, b);
			return;
		}
		this.t = 0;
		this.s = 0;
		var i = s.length,
		eP = false,
		sh = 0;
		while (--i >= 0) {
			var x = (k == 8) ? s[i] & 0xff: mE(s, i);
			if (x < 0) {
				if (s.charAt(i) == "-") eP = true;
				continue;
			}
			eP = false;
			if (sh == 0) this[this.t++] = x;
			else if (sh + k > this.bb) {
				this[this.t - 1] |= (x & ((1 << (this.bb - sh)) - 1)) << sh;
				this[this.t++] = (x >> (this.bb - sh));
			} else this[this.t - 1] |= x << sh;
			sh += k;
			if (sh >= this.bb) sh -= this.bb;
		}
		if (k == 8 && (s[0] & 0x80) != 0) {
			this.s = -1;
			if (sh > 0) this[this.t - 1] |= ((1 << (this.bb - sh)) - 1) << sh;
		}
		this.ag();
		if (eP) O.ZERO.aj(this, this);
	};
	function sr() {
		var c = this.s & this.aW;
		while (this.t > 0 && this[this.t - 1] == c)--this.t;
	};
	function sg(b) {
		if (this.s < 0) return "-" + this.fF().toString(b);
		var k;
		if (b == 16) k = 4;
		else if (b == 8) k = 3;
		else if (b == 2) k = 1;
		else if (b == 32) k = 5;
		else if (b == 4) k = 2;
		else return this.tj(b);
		var jt = (1 << k) - 1,
		d,
		m = false,
		r = "",
		i = this.t;
		var p = this.bb - (i * this.bb) % k;
		if (i-->0) {
			if (p < this.bb && (d = this[i] >> p) > 0) {
				m = true;
				r = dE(d);
			}
			while (i >= 0) {
				if (p < k) {
					d = (this[i] & ((1 << p) - 1)) << (k - p);
					d |= this[--i] >> (p += this.bb - k);
				} else {
					d = (this[i] >> (p -= k)) & jt;
					if (p <= 0) {
						p += this.bb; --i;
					}
				}
				if (d > 0) m = true;
				if (m) r += dE(d);
			}
		}
		return m ? r: "0";
	};
	function pF() {
		var r = aO();
		O.ZERO.aj(this, r);
		return r;
	};
	function rG() {
		return (this.s < 0) ? this.fF() : this;
	};
	function uq(a) {
		var r = this.s - a.s;
		if (r != 0) return r;
		var i = this.t;
		r = i - a.t;
		if (r != 0) return (this.s < 0) ? -r: r;
		while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
		return 0;
	};
	function ij(x) {
		var r = 1,
		t;
		if ((t = x >>> 16) != 0) {
			x = t;
			r += 16;
		}
		if ((t = x >> 8) != 0) {
			x = t;
			r += 8;
		}
		if ((t = x >> 4) != 0) {
			x = t;
			r += 4;
		}
		if ((t = x >> 2) != 0) {
			x = t;
			r += 2;
		}
		if ((t = x >> 1) != 0) {
			x = t;
			r += 1;
		}
		return r;
	};
	function rK() {
		if (this.t <= 0) return 0;
		return this.bb * (this.t - 1) + ij(this[this.t - 1] ^ (this.s & this.aW));
	};
	function qD(n, r) {
		var i;
		for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
		for (i = n - 1; i >= 0; --i) r[i] = 0;
		r.t = this.t + n;
		r.s = this.s;
	};
	function rg(n, r) {
		for (var i = n; i < this.t; ++i) r[i - n] = this[i];
		r.t = Math.max(this.t - n, 0);
		r.s = this.s;
	};
	function qZ(n, r) {
		var cO = n % this.bb;
		var gc = this.bb - cO;
		var iJ = (1 << gc) - 1;
		var cX = Math.floor(n / this.bb),
		c = (this.s << cO) & this.aW,
		i;
		for (i = this.t - 1; i >= 0; --i) {
			r[i + cX + 1] = (this[i] >> gc) | c;
			c = (this[i] & iJ) << cO;
		}
		for (i = cX - 1; i >= 0; --i) r[i] = 0;
		r[cX] = c;
		r.t = this.t + cX + 1;
		r.s = this.s;
		r.ag();
	};
	function sm(n, r) {
		r.s = this.s;
		var cX = Math.floor(n / this.bb);
		if (cX >= this.t) {
			r.t = 0;
			return;
		}
		var cO = n % this.bb;
		var gc = this.bb - cO;
		var iJ = (1 << cO) - 1;
		r[0] = this[cX] >> cO;
		for (var i = cX + 1; i < this.t; ++i) {
			r[i - cX - 1] |= (this[i] & iJ) << gc;
			r[i - cX] = this[i] >> cO;
		}
		if (cO > 0) r[this.t - cX - 1] |= (this.s & iJ) << gc;
		r.t = this.t - cX;
		r.ag();
	};
	function sk(a, r) {
		var i = 0,
		c = 0,
		m = Math.min(a.t, this.t);
		while (i < m) {
			c += this[i] - a[i];
			r[i++] = c & this.aW;
			c >>= this.bb;
		}
		if (a.t < this.t) {
			c -= a.s;
			while (i < this.t) {
				c += this[i];
				r[i++] = c & this.aW;
				c >>= this.bb;
			}
			c += this.s;
		} else {
			c += this.s;
			while (i < a.t) {
				c -= a[i];
				r[i++] = c & this.aW;
				c >>= this.bb;
			}
			c -= a.s;
		}
		r.s = (c < 0) ? -1 : 0;
		if (c < -1) r[i++] = this.dq + c;
		else if (c > 0) r[i++] = c;
		r.t = i;
		r.ag();
	};
	function sT(a, r) {
		var x = this.abs(),
		y = a.abs();
		var i = x.t;
		r.t = i + y.t;
		while (--i >= 0) r[i] = 0;
		for (i = 0; i < y.t; ++i) r[i + x.t] = x.dN(0, y[i], r, i, 0, x.t);
		r.s = 0;
		r.ag();
		if (this.s != a.s) O.ZERO.aj(r, r);
	};
	function st(r) {
		var x = this.abs();
		var i = r.t = 2 * x.t;
		while (--i >= 0) r[i] = 0;
		for (i = 0; i < x.t - 1; ++i) {
			var c = x.dN(i, x[i], r, 2 * i, 0, 1);
			if ((r[i + x.t] += x.dN(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.dq) {
				r[i + x.t] -= x.dq;
				r[i + x.t + 1] = 1;
			}
		}
		if (r.t > 0) r[r.t - 1] += x.dN(i, x[i], r, 2 * i, 0, 1);
		r.s = 0;
		r.ag();
	};
	function qk(m, q, r) {
		var pm = m.abs();
		if (pm.t <= 0) return;
		var pt = this.abs();
		if (pt.t < pm.t) {
			if (q != null) q.gr(0);
			if (r != null) this.eB(r);
			return;
		}
		if (r == null) r = aO();
		var y = aO(),
		pq = this.s,
		ms = m.s;
		var hj = this.bb - ij(pm[pm.t - 1]);
		if (hj > 0) {
			pm.fB(hj, y);
			pt.fB(hj, r);
		} else {
			pm.eB(y);
			pt.eB(r);
		}
		var cE = y.t;
		var ik = y[cE - 1];
		if (ik == 0) return;
		var nN = ik * (1 << this.oK) + ((cE > 1) ? y[cE - 2] >> this.oM: 0);
		var xG = this.wY / nN,
		yn = (1 << this.oK) / nN,
		e = 1 << this.oM;
		var i = r.t,
		j = i - cE,
		t = (q == null) ? aO() : q;
		y.gG(j, t);
		if (r.az(t) >= 0) {
			r[r.t++] = 1;
			r.aj(t, r);
		}
		O.ONE.gG(cE, t);
		t.aj(y, y);
		while (y.t < cE) y[y.t++] = 0;
		while (--j >= 0) {
			var jL = (r[--i] == ik) ? this.aW: Math.floor(r[i] * xG + (r[i - 1] + e) * yn);
			if ((r[i] += y.dN(0, jL, r, j, 0, cE)) < jL) {
				y.gG(j, t);
				r.aj(t, r);
				while (r[i] < --jL) r.aj(t, r);
			}
		}
		if (q != null) {
			r.gk(cE, q);
			if (pq != ms) O.ZERO.aj(q, q);
		}
		r.t = cE;
		r.ag();
		if (hj > 0) r.aD(hj, r);
		if (pq < 0) O.ZERO.aj(r, r);
	};
	function sD(a) {
		var r = aO();
		this.abs().ey(a, null, r);
		if (this.s < 0 && r.az(O.ZERO) > 0) a.aj(r, r);
		return r;
	};
	function ew(m) {
		this.m = m;
	};
	function rS(x) {
		if (x.s < 0 || x.az(this.m) >= 0) return x.dn(this.m);
		else return x;
	};
	function sS(x) {
		return x;
	};
	function sj(x) {
		x.ey(this.m, null, x);
	};
	function rZ(x, y, r) {
		x.fW(y, r);
		this.reduce(r);
	};
	function rF(x, r) {
		x.gL(r);
		this.reduce(r);
	};
	ew.prototype.convert = rS;
	ew.prototype.revert = sS;
	ew.prototype.reduce = sj;
	ew.prototype.eb = rZ;
	ew.prototype.cL = rF;
	function rm() {
		if (this.t < 1) return 0;
		var x = this[0];
		if ((x & 1) == 0) return 0;
		var y = x & 3;
		y = (y * (2 - (x & 0xf) * y)) & 0xf;
		y = (y * (2 - (x & 0xff) * y)) & 0xff;
		y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;
		y = (y * (2 - x * y % this.dq)) % this.dq;
		return (y > 0) ? this.dq - y: -y;
	};
	function dY(m) {
		this.m = m;
		this.mQ = m.wc();
		this.mF = this.mQ & 0x7fff;
		this.wf = this.mQ >> 15;
		this.sL = (1 << (m.bb - 15)) - 1;
		this.yF = 2 * m.t;
	};
	function pf(x) {
		var r = aO();
		x.abs().gG(this.m.t, r);
		r.ey(this.m, null, r);
		if (x.s < 0 && r.az(O.ZERO) > 0) this.m.aj(r, r);
		return r;
	};
	function qz(x) {
		var r = aO();
		x.eB(r);
		this.reduce(r);
		return r;
	};
	function pN(x) {
		while (x.t <= this.yF) x[x.t++] = 0;
		for (var i = 0; i < this.m.t; ++i) {
			var j = x[i] & 0x7fff;
			var tc = (j * this.mF + (((j * this.wf + (x[i] >> 15) * this.mF) & this.sL) << 15)) & x.aW;
			j = i + this.m.t;
			x[j] += this.m.dN(0, tc, x, i, 0, this.m.t);
			while (x[j] >= x.dq) {
				x[j] -= x.dq;
				x[++j]++;
			}
		}
		x.ag();
		x.gk(this.m.t, x);
		if (x.az(this.m) >= 0) x.aj(this.m, x);
	};
	function qy(x, r) {
		x.gL(r);
		this.reduce(r);
	};
	function ov(x, y, r) {
		x.fW(y, r);
		this.reduce(r);
	};
	dY.prototype.convert = pf;
	dY.prototype.revert = qz;
	dY.prototype.reduce = pN;
	dY.prototype.eb = ov;
	dY.prototype.cL = qy;
	function qB() {
		return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
	};
	function qK(e, z) {
		if (e > 0xffffffff || e < 1) return O.ONE;
		var r = aO(),
		r2 = aO(),
		g = z.convert(this),
		i = ij(e) - 1;
		g.eB(r);
		while (--i >= 0) {
			z.cL(r, r2);
			if ((e & (1 << i)) > 0) z.eb(r2, g, r);
			else {
				var t = r;
				r = r2;
				r2 = t;
			}
		}
		return z.revert(r);
	};
	function rO(e, m) {
		var z;
		if (e < 256 || m.cU()) z = new ew(m);
		else z = new dY(m);
		return this.exp(e, z);
	};
	O.prototype.eB = sN;
	O.prototype.gr = qf;
	O.prototype.gw = pR;
	O.prototype.ag = sr;
	O.prototype.gG = qD;
	O.prototype.gk = rg;
	O.prototype.fB = qZ;
	O.prototype.aD = sm;
	O.prototype.aj = sk;
	O.prototype.fW = sT;
	O.prototype.gL = st;
	O.prototype.ey = qk;
	O.prototype.wc = rm;
	O.prototype.cU = qB;
	O.prototype.exp = qK;
	O.prototype.toString = sg;
	O.prototype.fF = pF;
	O.prototype.abs = rG;
	O.prototype.az = uq;
	O.prototype.ho = rK;
	O.prototype.dn = sD;
	O.prototype.mk = rO;
	O.ZERO = dV(0);
	O.ONE = dV(1);
	function uy() {
		var r = aO();
		this.eB(r);
		return r;
	};
	function sO() {
		if (this.s < 0) {
			if (this.t == 1) return this[0] - this.dq;
			else if (this.t == 0) return - 1;
		} else if (this.t == 1) return this[0];
		else if (this.t == 0) return 0;
		return ((this[1] & ((1 << (32 - this.bb)) - 1)) << this.bb) | this[0];
	};
	function ss() {
		return (this.t == 0) ? this.s: (this[0] << 24) >> 24;
	};
	function sY() {
		return (this.t == 0) ? this.s: (this[0] << 16) >> 16;
	};
	function sb(r) {
		return Math.floor(Math.LN2 * this.bb / Math.log(r));
	};
	function si() {
		if (this.s < 0) return - 1;
		else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
		else return 1;
	};
	function rI(b) {
		if (b == null) b = 10;
		if (this.dh() == 0 || b < 2 || b > 36) return "0";
		var cs = this.lL(b);
		var a = Math.pow(b, cs);
		var d = dV(a),
		y = aO(),
		z = aO(),
		r = "";
		this.ey(d, y, z);
		while (y.dh() > 0) {
			r = (a + z.hy()).toString(b).substr(1) + r;
			y.ey(d, y, z);
		}
		return z.hy().toString(b) + r;
	};
	function qP(s, b) {
		this.gr(0);
		if (b == null) b = 10;
		var cs = this.lL(b);
		var d = Math.pow(b, cs),
		eP = false,
		j = 0,
		w = 0;
		for (var i = 0; i < s.length; ++i) {
			var x = mE(s, i);
			if (x < 0) {
				if (s.charAt(i) == "-" && this.dh() == 0) eP = true;
				continue;
			}
			w = b * w + x;
			if (++j >= cs) {
				this.oa(d);
				this.eD(w, 0);
				j = 0;
				w = 0;
			}
		}
		if (j > 0) {
			this.oa(Math.pow(b, j));
			this.eD(w, 0);
		}
		if (eP) O.ZERO.aj(this, this);
	};
	function qW(a, b, c) {
		if ("number" == typeof b) {
			if (a < 2) this.gr(1);
			else {
				this.ki(a, c);
				if (!this.lZ(a - 1)) this.J(O.ONE.shiftLeft(a - 1), jC, this);
				if (this.cU()) this.eD(1, 0);
				while (!this.gJ(b)) {
					this.eD(2, 0);
					if (this.ho() > a) this.aj(O.ONE.shiftLeft(a - 1), this);
				}
			}
		} else {
			var x = new Array(),
			t = a & 7;
			x.length = (a >> 3) + 1;
			b.lp(x);
			if (t > 0) x[0] &= ((1 << t) - 1);
			else x[0] = 0;
			this.gw(x, 256);
		}
	};
	function rJ() {
		var i = this.t,
		r = new Array();
		r[0] = this.s;
		var p = this.bb - (i * this.bb) % 8,
		d,
		k = 0;
		if (i-->0) {
			if (p < this.bb && (d = this[i] >> p) != (this.s & this.aW) >> p) r[k++] = d | (this.s << (this.bb - p));
			while (i >= 0) {
				if (p < 8) {
					d = (this[i] & ((1 << p) - 1)) << (8 - p);
					d |= this[--i] >> (p += this.bb - 8);
				} else {
					d = (this[i] >> (p -= 8)) & 0xff;
					if (p <= 0) {
						p += this.bb; --i;
					}
				}
				if ((d & 0x80) != 0) d |= -256;
				if (k == 0 && (this.s & 0x80) != (d & 0x80))++k;
				if (k > 0 || d != this.s) r[k++] = d;
			}
		}
		return r;
	};
	function tA(a) {
		return (this.az(a) == 0);
	};
	function bQ(a) {
		return (this.az(a) < 0) ? this: a;
	};
	function rz(a) {
		return (this.az(a) > 0) ? this: a;
	};
	function pZ(a, ej, r) {
		var i, f, m = Math.min(a.t, this.t);
		for (i = 0; i < m; ++i) r[i] = ej(this[i], a[i]);
		if (a.t < this.t) {
			f = a.s & this.aW;
			for (i = m; i < this.t; ++i) r[i] = ej(this[i], f);
			r.t = this.t;
		} else {
			f = this.s & this.aW;
			for (i = m; i < a.t; ++i) r[i] = ej(f, a[i]);
			r.t = a.t;
		}
		r.s = ej(this.s, a.s);
		r.ag();
	};
	function ri(x, y) {
		return x & y;
	};
	function sM(a) {
		var r = aO();
		this.J(a, ri, r);
		return r;
	};
	function jC(x, y) {
		return x | y;
	};
	function qI(a) {
		var r = aO();
		this.J(a, jC, r);
		return r;
	};
	function oz(x, y) {
		return x ^ y;
	};
	function sC(a) {
		var r = aO();
		this.J(a, oz, r);
		return r;
	};
	function oS(x, y) {
		return x & ~y;
	};
	function sU(a) {
		var r = aO();
		this.J(a, oS, r);
		return r;
	};
	function qc() {
		var r = aO();
		for (var i = 0; i < this.t; ++i) r[i] = this.aW & ~this[i];
		r.t = this.t;
		r.s = ~this.s;
		return r;
	};
	function rv(n) {
		var r = aO();
		if (n < 0) this.aD( - n, r);
		else this.fB(n, r);
		return r;
	};
	function sQ(n) {
		var r = aO();
		if (n < 0) this.fB( - n, r);
		else this.aD(n, r);
		return r;
	};
	function nB(x) {
		if (x == 0) return - 1;
		var r = 0;
		if ((x & 0xffff) == 0) {
			x >>= 16;
			r += 16;
		}
		if ((x & 0xff) == 0) {
			x >>= 8;
			r += 8;
		}
		if ((x & 0xf) == 0) {
			x >>= 4;
			r += 4;
		}
		if ((x & 3) == 0) {
			x >>= 2;
			r += 2;
		}
		if ((x & 1) == 0)++r;
		return r;
	};
	function sy() {
		for (var i = 0; i < this.t; ++i) if (this[i] != 0) return i * this.bb + nB(this[i]);
		if (this.s < 0) return this.t * this.bb;
		return - 1;
	};
	function ta(x) {
		var r = 0;
		while (x != 0) {
			x &= x - 1; ++r;
		}
		return r;
	};
	function rM() {
		var r = 0,
		x = this.s & this.aW;
		for (var i = 0; i < this.t; ++i) r += ta(this[i] ^ x);
		return r;
	};
	function sH(n) {
		var j = Math.floor(n / this.bb);
		if (j >= this.t) return (this.s != 0);
		return ((this[j] & (1 << (n % this.bb))) != 0);
	};
	function tk(n, ej) {
		var r = O.ONE.shiftLeft(n);
		this.J(r, ej, r);
		return r;
	};
	function rq(n) {
		return this.jP(n, jC);
	};
	function uT(n) {
		return this.jP(n, oS);
	};
	function tS(n) {
		return this.jP(n, oz);
	};
	function pO(a, r) {
		var i = 0,
		c = 0,
		m = Math.min(a.t, this.t);
		while (i < m) {
			c += this[i] + a[i];
			r[i++] = c & this.aW;
			c >>= this.bb;
		}
		if (a.t < this.t) {
			c += a.s;
			while (i < this.t) {
				c += this[i];
				r[i++] = c & this.aW;
				c >>= this.bb;
			}
			c += this.s;
		} else {
			c += this.s;
			while (i < a.t) {
				c += a[i];
				r[i++] = c & this.aW;
				c >>= this.bb;
			}
			c += a.s;
		}
		r.s = (c < 0) ? -1 : 0;
		if (c > 0) r[i++] = c;
		else if (c < -1) r[i++] = this.dq + c;
		r.t = i;
		r.ag();
	};
	function sX(a) {
		var r = aO();
		this.jh(a, r);
		return r;
	};
	function sl(a) {
		var r = aO();
		this.aj(a, r);
		return r;
	};
	function sV(a) {
		var r = aO();
		this.fW(a, r);
		return r;
	};
	function sR() {
		var r = aO();
		this.gL(r);
		return r;
	};
	function su(a) {
		var r = aO();
		this.ey(a, r, null);
		return r;
	};
	function rH(a) {
		var r = aO();
		this.ey(a, null, r);
		return r;
	};
	function uI(a) {
		var q = aO(),
		r = aO();
		this.ey(a, q, r);
		return new Array(q, r);
	};
	function qt(n) {
		this[this.t] = this.dN(0, n - 1, this, 0, 0, this.t); ++this.t;
		this.ag();
	};
	function qH(n, w) {
		if (n == 0) return;
		while (this.t <= w) this[this.t++] = 0;
		this[w] += n;
		while (this[w] >= this.dq) {
			this[w] -= this.dq;
			if (++w >= this.t) this[this.t++] = 0; ++this[w];
		}
	};
	function gR() {};
	function oW(x) {
		return x;
	};
	function pL(x, y, r) {
		x.fW(y, r);
	};
	function qr(x, r) {
		x.gL(r);
	};
	gR.prototype.convert = oW;
	gR.prototype.revert = oW;
	gR.prototype.eb = pL;
	gR.prototype.cL = qr;
	function tg(e) {
		return this.exp(e, new gR());
	};
	function rs(a, n, r) {
		var i = Math.min(this.t + a.t, n);
		r.s = 0;
		r.t = i;
		while (i > 0) r[--i] = 0;
		var j;
		for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.dN(0, a[i], r, i, 0, this.t);
		for (j = Math.min(a.t, n); i < j; ++i) this.dN(0, a[i], r, i, 0, n - i);
		r.ag();
	};
	function rU(a, n, r) {--n;
		var i = r.t = this.t + a.t - n;
		r.s = 0;
		while (--i >= 0) r[i] = 0;
		for (i = Math.max(n - this.t, 0); i < a.t; ++i) r[this.t + i - n] = this.dN(n - i, a[i], r, 0, 0, this.t + i - n);
		r.ag();
		r.gk(1, r);
	};
	function dW(m) {
		this.r2 = aO();
		this.nj = aO();
		O.ONE.gG(2 * m.t, this.r2);
		this.xB = this.r2.divide(m);
		this.m = m;
	};
	function rC(x) {
		if (x.s < 0 || x.t > 2 * this.m.t) return x.dn(this.m);
		else if (x.az(this.m) < 0) return x;
		else {
			var r = aO();
			x.eB(r);
			this.reduce(r);
			return r;
		}
	};
	function sf(x) {
		return x;
	};
	function ru(x) {
		x.gk(this.m.t - 1, this.r2);
		if (x.t > this.m.t + 1) {
			x.t = this.m.t + 1;
			x.ag();
		}
		this.xB.yA(this.r2, this.m.t + 1, this.nj);
		this.m.yk(this.nj, this.m.t + 1, this.r2);
		while (x.az(this.r2) < 0) x.eD(1, this.m.t + 1);
		x.aj(this.r2, x);
		while (x.az(this.m) >= 0) x.aj(this.m, x);
	};
	function tf(x, r) {
		x.gL(r);
		this.reduce(r);
	};
	function sB(x, y, r) {
		x.fW(y, r);
		this.reduce(r);
	};
	dW.prototype.convert = rC;
	dW.prototype.revert = sf;
	dW.prototype.reduce = ru;
	dW.prototype.eb = sB;
	dW.prototype.cL = tf;
	function sd(e, m) {
		var i = e.ho(),
		k,
		r = dV(1),
		z;
		if (i <= 0) return r;
		else if (i < 18) k = 1;
		else if (i < 48) k = 3;
		else if (i < 144) k = 4;
		else if (i < 768) k = 5;
		else k = 6;
		if (i < 8) z = new ew(m);
		else if (m.cU()) z = new dW(m);
		else z = new dY(m);
		var g = new Array(),
		n = 3,
		fY = k - 1,
		jt = (1 << k) - 1;
		g[1] = z.convert(this);
		if (k > 1) {
			var oi = aO();
			z.cL(g[1], oi);
			while (n <= jt) {
				g[n] = aO();
				z.eb(oi, g[n - 2], g[n]);
				n += 2;
			}
		}
		var j = e.t - 1,
		w, nC = true,
		r2 = aO(),
		t;
		i = ij(e[j]) - 1;
		while (j >= 0) {
			if (i >= fY) w = (e[j] >> (i - fY)) & jt;
			else {
				w = (e[j] & ((1 << (i + 1)) - 1)) << (fY - i);
				if (j > 0) w |= e[j - 1] >> (this.bb + i - fY);
			}
			n = k;
			while ((w & 1) == 0) {
				w >>= 1; --n;
			}
			if ((i -= n) < 0) {
				i += this.bb; --j;
			}
			if (nC) {
				g[w].eB(r);
				nC = false;
			} else {
				while (n > 1) {
					z.cL(r, r2);
					z.cL(r2, r);
					n -= 2;
				}
				if (n > 0) z.cL(r, r2);
				else {
					t = r;
					r = r2;
					r2 = t;
				}
				z.eb(r2, g[w], r);
			}
			while (j >= 0 && (e[j] & (1 << i)) == 0) {
				z.cL(r, r2);
				t = r;
				r = r2;
				r2 = t;
				if (--i < 0) {
					i = this.bb - 1; --j;
				}
			}
		}
		return z.revert(r);
	};
	function rV(a) {
		var x = (this.s < 0) ? this.fF() : this.clone();
		var y = (a.s < 0) ? a.fF() : a.clone();
		if (x.az(y) < 0) {
			var t = x;
			x = y;
			y = t;
		}
		var i = x.cg(),
		g = y.cg();
		if (g < 0) return x;
		if (i < g) g = i;
		if (g > 0) {
			x.aD(g, x);
			y.aD(g, y);
		}
		while (x.dh() > 0) {
			if ((i = x.cg()) > 0) x.aD(i, x);
			if ((i = y.cg()) > 0) y.aD(i, y);
			if (x.az(y) >= 0) {
				x.aj(y, x);
				x.aD(1, x);
			} else {
				y.aj(x, y);
				y.aD(1, y);
			}
		}
		if (g > 0) y.fB(g, y);
		return y;
	};
	function pW(n) {
		if (n <= 0) return 0;
		var d = this.dq % n,
		r = (this.s < 0) ? n - 1 : 0;
		if (this.t > 0) if (d == 0) r = this[0] % n;
		else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
		return r;
	};
	function sG(m) {
		var he = m.cU();
		if ((this.cU() && he) || m.dh() == 0) return O.ZERO;
		var u = m.clone(),
		v = this.clone();
		var a = dV(1),
		b = dV(0),
		c = dV(0),
		d = dV(1);
		while (u.dh() != 0) {
			while (u.cU()) {
				u.aD(1, u);
				if (he) {
					if (!a.cU() || !b.cU()) {
						a.jh(this, a);
						b.aj(m, b);
					}
					a.aD(1, a);
				} else if (!b.cU()) b.aj(m, b);
				b.aD(1, b);
			}
			while (v.cU()) {
				v.aD(1, v);
				if (he) {
					if (!c.cU() || !d.cU()) {
						c.jh(this, c);
						d.aj(m, d);
					}
					c.aD(1, c);
				} else if (!d.cU()) d.aj(m, d);
				d.aD(1, d);
			}
			if (u.az(v) >= 0) {
				u.aj(v, u);
				if (he) a.aj(c, a);
				b.aj(d, b);
			} else {
				v.aj(u, v);
				if (he) c.aj(a, c);
				d.aj(b, d);
			}
		}
		if (v.az(O.ONE) != 0) return O.ZERO;
		if (d.az(m) >= 0) return d.cK(m);
		if (d.dh() < 0) d.jh(m, d);
		else return d;
		if (d.dh() < 0) return d.add(m);
		else return d;
	};
	var dR = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
	var wN = (1 << 26) / dR[dR.length - 1];
	function rY(t) {
		var i, x = this.abs();
		if (x.t == 1 && x[0] <= dR[dR.length - 1]) {
			for (i = 0; i < dR.length; ++i) if (x[0] == dR[i]) return true;
			return false;
		}
		if (x.cU()) return false;
		i = 1;
		while (i < dR.length) {
			var m = dR[i],
			j = i + 1;
			while (j < dR.length && m < wN) m *= dR[j++];
			m = x.wt(m);
			while (i < j) if (m % dR[i++] == 0) return false;
		}
		return x.vn(t);
	};
	function pM(t) {
		var gd = this.cK(O.ONE);
		var k = gd.cg();
		if (k <= 0) return false;
		var r = gd.sq(k);
		t = (t + 1) >> 1;
		if (t > dR.length) t = dR.length;
		var a = aO();
		for (var i = 0; i < t; ++i) {
			a.gr(dR[Math.floor(Math.random() * dR.length)]);
			var y = a.hZ(r, this);
			if (y.az(O.ONE) != 0 && y.az(gd) != 0) {
				var j = 1;
				while (j++<k && y.az(gd) != 0) {
					y = y.mk(2, this);
					if (y.az(O.ONE) == 0) return false;
				}
				if (y.az(gd) != 0) return false;
			}
		}
		return true;
	};
	O.prototype.lL = sb;
	O.prototype.tj = rI;
	O.prototype.wq = qP;
	O.prototype.ki = qW;
	O.prototype.J = pZ;
	O.prototype.jP = tk;
	O.prototype.jh = pO;
	O.prototype.oa = qt;
	O.prototype.eD = qH;
	O.prototype.yk = rs;
	O.prototype.yA = rU;
	O.prototype.wt = pW;
	O.prototype.vn = pM;
	O.prototype.clone = uy;
	O.prototype.hy = sO;
	O.prototype.AI = ss;
	O.prototype.yL = sY;
	O.prototype.dh = si;
	O.prototype.ti = rJ;
	O.prototype.zD = tA;
	O.prototype.min = bQ;
	O.prototype.max = rz;
	O.prototype.and = sM;
	O.prototype.ct = qI;
	O.prototype.xor = sC;
	O.prototype.xR = sU;
	O.prototype.not = qc;
	O.prototype.shiftLeft = rv;
	O.prototype.sq = sQ;
	O.prototype.cg = sy;
	O.prototype.zj = rM;
	O.prototype.lZ = sH;
	O.prototype.Ae = rq;
	O.prototype.AA = uT;
	O.prototype.xs = tS;
	O.prototype.add = sX;
	O.prototype.cK = sl;
	O.prototype.multiply = sV;
	O.prototype.divide = su;
	O.prototype.Af = rH;
	O.prototype.zA = uI;
	O.prototype.hZ = sd;
	O.prototype.ja = sG;
	O.prototype.pow = tg;
	O.prototype.hG = rV;
	O.prototype.gJ = rY;
	O.prototype.square = sR;
	function lh() {
		this.i = 0;
		this.j = 0;
		this.S = new Array();
	};
	function rW(key) {
		var i, j, t;
		for (i = 0; i < 256; ++i) this.S[i] = i;
		j = 0;
		for (i = 0; i < 256; ++i) {
			j = (j + this.S[i] + key[i % key.length]) & 255;
			t = this.S[i];
			this.S[i] = this.S[j];
			this.S[j] = t;
		}
		this.i = 0;
		this.j = 0;
	};
	function sF() {
		var t;
		this.i = (this.i + 1) & 255;
		this.j = (this.j + this.S[this.i]) & 255;
		t = this.S[this.i];
		this.S[this.i] = this.S[this.j];
		this.S[this.j] = t;
		return this.S[(t + this.S[this.i]) & 255];
	};
	lh.prototype.aV = rW;
	lh.prototype.next = sF;
	function rc() {
		return new lh();
	};
	var kT = 256;
	var iB;
	var eK;
	var cS;
	if (eK == null) {
		eK = new Array();
		cS = 0;
		var t;
		if (window.crypto && window.crypto.ww) {
			var z = new sI(256);
			window.crypto.ww(z);
			for (t = 0; t < z.length; ++t) eK[cS++] = z[t] & 255;
		}
		var jl = function(cv) {
			this.count = this.count || 0;
			if (this.count >= 256 || cS >= kT) {
				if (window.removeEventListener) window.removeEventListener("mousemove", jl);
				else if (window.detachEvent) window.detachEvent("onmousemove", jl);
				return;
			}
			this.count += 1;
			var vq = cv.x + cv.y;
			eK[cS++] = vq & 255;
		};
		if (window.addEventListener) window.addEventListener("mousemove", jl);
		else if (window.attachEvent) window.attachEvent("onmousemove", jl);
	}
	function pH() {
		if (iB == null) {
			iB = rc();
			while (cS < kT) {
				var random = Math.floor(65536 * Math.random());
				eK[cS++] = random & 255;
			}
			iB.aV(eK);
			for (cS = 0; cS < eK.length; ++cS) eK[cS] = 0;
			cS = 0;
		}
		return iB.next();
	};
	function pQ(dj) {
		var i;
		for (i = 0; i < dj.length; ++i) dj[i] = pH();
	};
	function js() {};
	js.prototype.lp = pQ;
	function bw(bS, r) {
		return new O(bS, r);
	};
	function yW(s, n) {
		var bk = "";
		var i = 0;
		while (i + n < s.length) {
			bk += s.substring(i, i + n) + "\n";
			i += n;
		}
		return bk + s.substring(i, s.length);
	};
	function zi(b) {
		if (b < 0x10) return "0" + b.toString(16);
		else return b.toString(16);
	};
	function pE(s, n) {
		if (n < s.length + 11) {
			console.error("Message too long for RSA");
			return null;
		}
		var dj = new Array();
		var i = s.length - 1;
		while (i >= 0 && n > 0) {
			var c = s.charCodeAt(i--);
			if (c < 128) {
				dj[--n] = c;
			} else if ((c > 127) && (c < 2048)) {
				dj[--n] = (c & 63) | 128;
				dj[--n] = (c >> 6) | 192;
			} else {
				dj[--n] = (c & 63) | 128;
				dj[--n] = ((c >> 6) & 63) | 128;
				dj[--n] = (c >> 12) | 224;
			}
		}
		dj[--n] = 0;
		var fs = new js();
		var x = new Array();
		while (n > 2) {
			x[0] = 0;
			while (x[0] == 0) fs.lp(x);
			dj[--n] = x[0];
		}
		dj[--n] = 2;
		dj[--n] = 0;
		return new O(dj);
	};
	function ae() {
		this.n = null;
		this.e = 0;
		this.d = null;
		this.p = null;
		this.q = null;
		this.ca = null;
		this.dK = null;
		this.dr = null;
	};
	function qu(N, E) {
		if (N != null && E != null && N.length > 0 && E.length > 0) {
			this.n = bw(N, 16);
			this.e = parseInt(E, 16);
		} else console.error("Invalid RSA public key");
	};
	function ql(x) {
		return x.mk(this.e, this.n);
	};
	function pv(text) {
		var m = pE(text, (this.n.ho() + 7) >> 3);
		if (m == null) return null;
		var c = this.xa(m);
		if (c == null) return null;
		var h = c.toString(16);
		if ((h.length & 1) == 0) h = h;
		else h = "0" + h;
		return h;
	};
	ae.prototype.xa = ql;
	ae.prototype.AU = qu;
	ae.prototype.bZ = pv;
	function ra(d, n) {
		var b = d.ti();
		var i = 0;
		while (i < b.length && b[i] == 0)++i;
		if (b.length - i != n - 1 || b[i] != 2) return null; ++i;
		while (b[i] != 0) if (++i >= b.length) return null;
		var bk = "";
		while (++i < b.length) {
			var c = b[i] & 255;
			if (c < 128) {
				bk += String.fromCharCode(c);
			} else if ((c > 191) && (c < 224)) {
				bk += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63)); ++i;
			} else {
				bk += String.fromCharCode(((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63));
				i += 2;
			}
		}
		return bk;
	};
	function qX(N, E, D) {
		if (N != null && E != null && N.length > 0 && E.length > 0) {
			this.n = bw(N, 16);
			this.e = parseInt(E, 16);
			this.d = bw(D, 16);
		} else console.error("Invalid RSA private key");
	};
	function qm(N, E, D, P, Q, wK, wU, C) {
		if (N != null && E != null && N.length > 0 && E.length > 0) {
			this.n = bw(N, 16);
			this.e = parseInt(E, 16);
			this.d = bw(D, 16);
			this.p = bw(P, 16);
			this.q = bw(Q, 16);
			this.ca = bw(wK, 16);
			this.dK = bw(wU, 16);
			this.dr = bw(C, 16);
		} else console.error("Invalid RSA private key");
	};
	function pw(B, E) {
		var fs = new js();
		var hl = B >> 1;
		this.e = parseInt(E, 16);
		var bx = new O(E, 16);
		for (;;) {
			for (;;) {
				this.p = new O(B - hl, 1, fs);
				if (this.p.cK(O.ONE).hG(bx).az(O.ONE) == 0 && this.p.gJ(10)) break;
			}
			for (;;) {
				this.q = new O(hl, 1, fs);
				if (this.q.cK(O.ONE).hG(bx).az(O.ONE) == 0 && this.q.gJ(10)) break;
			}
			if (this.p.az(this.q) <= 0) {
				var t = this.p;
				this.p = this.q;
				this.q = t;
			}
			var gm = this.p.cK(O.ONE);
			var hf = this.q.cK(O.ONE);
			var hz = gm.multiply(hf);
			if (hz.hG(bx).az(O.ONE) == 0) {
				this.n = this.p.multiply(this.q);
				this.d = bx.ja(hz);
				this.ca = this.d.dn(gm);
				this.dK = this.d.dn(hf);
				this.dr = this.q.ja(this.p);
				break;
			}
		}
	};
	function qR(x) {
		if (this.p == null || this.q == null) return x.hZ(this.d, this.n);
		var iX = x.dn(this.p).hZ(this.ca, this.p);
		var iU = x.dn(this.q).hZ(this.dK, this.q);
		while (iX.az(iU) < 0) iX = iX.add(this.p);
		return iX.cK(iU).multiply(this.dr).dn(this.p).multiply(this.q).add(iU);
	};
	function pJ(yM) {
		var c = bw(yM, 16);
		var m = this.vi(c);
		if (m == null) return null;
		return ra(m, (this.n.ho() + 7) >> 3);
	};
	ae.prototype.vi = qR;
	ae.prototype.yU = qX;
	ae.prototype.ye = qm;
	ae.prototype.generate = pw;
	ae.prototype.eV = pJ; (function() {
		var sA = function(B, E, callback) {
			var fs = new js();
			var hl = B >> 1;
			this.e = parseInt(E, 16);
			var bx = new O(E, 16);
			var aa = this;
			var lM = function() {
				var vB = function() {
					if (aa.p.az(aa.q) <= 0) {
						var t = aa.p;
						aa.p = aa.q;
						aa.q = t;
					}
					var gm = aa.p.cK(O.ONE);
					var hf = aa.q.cK(O.ONE);
					var hz = gm.multiply(hf);
					if (hz.hG(bx).az(O.ONE) == 0) {
						aa.n = aa.p.multiply(aa.q);
						aa.d = bx.ja(hz);
						aa.ca = aa.d.dn(gm);
						aa.dK = aa.d.dn(hf);
						aa.dr = aa.q.ja(aa.p);
						setTimeout(function() {
							callback()
						},
						0);
					} else {
						setTimeout(lM, 0);
					}
				};
				var nb = function() {
					aa.q = aO();
					aa.q.oV(hl, 1, fs,
					function() {
						aa.q.cK(O.ONE).oZ(bx,
						function(r) {
							if (r.az(O.ONE) == 0 && aa.q.gJ(10)) {
								setTimeout(vB, 0);
							} else {
								setTimeout(nb, 0);
							}
						});
					});
				};
				var mD = function() {
					aa.p = aO();
					aa.p.oV(B - hl, 1, fs,
					function() {
						aa.p.cK(O.ONE).oZ(bx,
						function(r) {
							if (r.az(O.ONE) == 0 && aa.p.gJ(10)) {
								setTimeout(nb, 0);
							} else {
								setTimeout(mD, 0);
							}
						});
					});
				};
				setTimeout(mD, 0);
			};
			setTimeout(lM, 0);
		};
		ae.prototype.vS = sA;
		var vA = function(a, callback) {
			var x = (this.s < 0) ? this.fF() : this.clone();
			var y = (a.s < 0) ? a.fF() : a.clone();
			if (x.az(y) < 0) {
				var t = x;
				x = y;
				y = t;
			}
			var i = x.cg(),
			g = y.cg();
			if (g < 0) {
				callback(x);
				return;
			}
			if (i < g) g = i;
			if (g > 0) {
				x.aD(g, x);
				y.aD(g, y);
			}
			var oO = function() {
				if ((i = x.cg()) > 0) {
					x.aD(i, x);
				}
				if ((i = y.cg()) > 0) {
					y.aD(i, y);
				}
				if (x.az(y) >= 0) {
					x.aj(y, x);
					x.aD(1, x);
				} else {
					y.aj(x, y);
					y.aD(1, y);
				}
				if (! (x.dh() > 0)) {
					if (g > 0) y.fB(g, y);
					setTimeout(function() {
						callback(y)
					},
					0);
				} else {
					setTimeout(oO, 0);
				}
			};
			setTimeout(oO, 10);
		};
		O.prototype.oZ = vA;
		var wZ = function(a, b, c, callback) {
			if ("number" == typeof b) {
				if (a < 2) {
					this.gr(1);
				} else {
					this.ki(a, c);
					if (!this.lZ(a - 1)) {
						this.J(O.ONE.shiftLeft(a - 1), jC, this);
					}
					if (this.cU()) {
						this.eD(1, 0);
					}
					var gy = this;
					var lO = function() {
						gy.eD(2, 0);
						if (gy.ho() > a) gy.aj(O.ONE.shiftLeft(a - 1), gy);
						if (gy.gJ(b)) {
							setTimeout(function() {
								callback()
							},
							0);
						} else {
							setTimeout(lO, 0);
						}
					};
					setTimeout(lO, 0);
				}
			} else {
				var x = new Array(),
				t = a & 7;
				x.length = (a >> 3) + 1;
				b.lp(x);
				if (t > 0) x[0] &= ((1 << t) - 1);
				else x[0] = 0;
				this.gw(x, 256);
			}
		};
		O.prototype.oV = wZ;
	})();
	var fZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var mR = "=";
	function nM(h) {
		var i;
		var c;
		var bk = "";
		for (i = 0; i + 3 <= h.length; i += 3) {
			c = parseInt(h.substring(i, i + 3), 16);
			bk += fZ.charAt(c >> 6) + fZ.charAt(c & 63);
		}
		if (i + 1 == h.length) {
			c = parseInt(h.substring(i, i + 1), 16);
			bk += fZ.charAt(c << 2);
		} else if (i + 2 == h.length) {
			c = parseInt(h.substring(i, i + 2), 16);
			bk += fZ.charAt(c >> 2) + fZ.charAt((c & 3) << 4);
		}
		while ((bk.length & 3) > 0) bk += mR;
		return bk;
	};
	function kI(s) {
		var bk = "";
		var i;
		var k = 0;
		var eY;
		for (i = 0; i < s.length; ++i) {
			if (s.charAt(i) == mR) break;
			v = fZ.indexOf(s.charAt(i));
			if (v < 0) continue;
			if (k == 0) {
				bk += dE(v >> 2);
				eY = v & 3;
				k = 1;
			} else if (k == 1) {
				bk += dE((eY << 2) | (v >> 4));
				eY = v & 0xf;
				k = 2;
			} else if (k == 2) {
				bk += dE(eY);
				bk += dE(v >> 2);
				eY = v & 3;
				k = 3;
			} else {
				bk += dE((eY << 2) | (v >> 4));
				bk += dE(v & 0xf);
				k = 0;
			}
		}
		if (k == 1) bk += dE(eY << 2);
		return bk;
	};
	function Ag(s) {
		var h = kI(s);
		var i;
		var a = new Array();
		for (i = 0; 2 * i < h.length; ++i) {
			a[i] = parseInt(h.substring(2 * i, 2 * i + 2), 16);
		}
		return a;
	};
	var as = as || {};
	as.gU = as.gU || {};
	var L = as,
	kC = Object.prototype,
	vC = '[object Function]',
	mG = ["toString", "valueOf"];
	as.gU.rn = function(xA) {
		var bW = function(s) {
			var c = 0;
			return parseFloat(s.replace(/\./g,
			function() {
				return (c++==1) ? '': '.';
			}));
		},
		nav = navigator,
		o = {
			pb: 0,
			opera: 0,
			oG: 0,
			webkit: 0,
			chrome: 0,
			hB: null,
			yR: 0,
			ipad: 0,
			iphone: 0,
			ipod: 0,
			ios: null,
			yI: 0,
			pY: 0,
			AD: nav && nav.AL,
			secure: false,
			lB: null
		},
		ua = xA || (navigator && navigator.userAgent),
		mJ = window && window.location,
		href = mJ && mJ.href,
		m;
		o.secure = href && (href.toLowerCase().indexOf("https") === 0);
		if (ua) {
			if ((/windows|win32/i).test(ua)) {
				o.lB = 'windows';
			} else if ((/macintosh/i).test(ua)) {
				o.lB = 'macintosh';
			} else if ((/rhino/i).test(ua)) {
				o.lB = 'rhino';
			}
			if ((/KHTML/).test(ua)) {
				o.webkit = 1;
			}
			m = ua.match(/AppleWebKit\/([^\s]*)/);
			if (m && m[1]) {
				o.webkit = bW(m[1]);
				if (/ Mobile\//.test(ua)) {
					o.hB = 'Apple';
					m = ua.match(/OS ([^\s]*)/);
					if (m && m[1]) {
						m = bW(m[1].replace('_', '.'));
					}
					o.ios = m;
					o.ipad = o.ipod = o.iphone = 0;
					m = ua.match(/iPad|iPod|iPhone/);
					if (m && m[0]) {
						o[m[0].toLowerCase()] = o.ios;
					}
				} else {
					m = ua.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);
					if (m) {
						o.hB = m[0];
					}
					if (/webOS/.test(ua)) {
						o.hB = 'WebOS';
						m = ua.match(/webOS\/([^\s]*);/);
						if (m && m[1]) {
							o.pY = bW(m[1]);
						}
					}
					if (/ Android/.test(ua)) {
						o.hB = 'Android';
						m = ua.match(/Android ([^\s]*);/);
						if (m && m[1]) {
							o.yI = bW(m[1]);
						}
					}
				}
				m = ua.match(/Chrome\/([^\s]*)/);
				if (m && m[1]) {
					o.chrome = bW(m[1]);
				} else {
					m = ua.match(/AdobeAIR\/([^\s]*)/);
					if (m) {
						o.yR = m[0];
					}
				}
			}
			if (!o.webkit) {
				m = ua.match(/Opera[\s\/]([^\s]*)/);
				if (m && m[1]) {
					o.opera = bW(m[1]);
					m = ua.match(/Version\/([^\s]*)/);
					if (m && m[1]) {
						o.opera = bW(m[1]);
					}
					m = ua.match(/Opera Mini[^;]*/);
					if (m) {
						o.hB = m[0];
					}
				} else {
					m = ua.match(/MSIE\s([^;]*)/);
					if (m && m[1]) {
						o.pb = bW(m[1]);
					} else {
						m = ua.match(/Gecko\/([^\s]*)/);
						if (m) {
							o.oG = 1;
							m = ua.match(/rv:([^\s\)]*)/);
							if (m && m[1]) {
								o.oG = bW(m[1]);
							}
						}
					}
				}
			}
		}
		return o;
	};
	as.gU.ua = as.gU.rn();
	as.isFunction = function(o) {
		return (typeof o === 'function') || kC.toString.apply(o) === vC;
	};
	as.qU = (as.gU.ua.pb) ?
	function(r, s) {
		var i, gB, f;
		for (i = 0; i < mG.length; i = i + 1) {
			gB = mG[i];
			f = s[gB];
			if (L.isFunction(f) && f != kC[gB]) {
				r[gB] = f;
			}
		}
	}: function() {};
	as.extend = function(en, fA, fj) {
		if (!fA || !en) {
			throw new Error("extend failed, please check that " + "all dependencies are included.");
		}
		var F = function() {},
		i;
		F.prototype = fA.prototype;
		en.prototype = new F();
		en.prototype.constructor = en;
		en.bO = fA.prototype;
		if (fA.prototype.constructor == kC.constructor) {
			fA.prototype.constructor = fA;
		}
		if (fj) {
			for (i in fj) {
				if (L.hasOwnProperty(fj, i)) {
					en.prototype[i] = fj[i];
				}
			}
			L.qU(en.prototype, fj);
		}
	};
	if (typeof aF == "undefined" || !aF) aF = {};
	if (typeof aF.V == "undefined" || !aF.V) aF.V = {};
	aF.V.xU = new
	function() {
		this.AJ = function(i) {
			var h = i.toString(16);
			if ((h.length % 2) == 1) h = '0' + h;
			return h;
		};
		this.wG = function(iS) {
			var h = iS.toString(16);
			if (h.substr(0, 1) != '-') {
				if (h.length % 2 == 1) {
					h = '0' + h;
				} else {
					if (!h.match(/^[0-7]/)) {
						h = '00' + h;
					}
				}
			} else {
				var vm = h.substr(1);
				var iw = vm.length;
				if (iw % 2 == 1) {
					iw += 1;
				} else {
					if (!h.match(/^[0-7]/)) {
						iw += 2;
					}
				}
				var mN = '';
				for (var i = 0; i < iw; i++) {
					mN += 'f';
				}
				var vV = new O(mN, 16);
				var wS = vV.xor(iS).add(O.ONE);
				h = wS.toString(16).replace(/^-/, '');
			}
			return h;
		};
		this.xQ = function(xz, bz) {
			var xL = aX.bJ.cJ.parse(xz);
			var yj = aX.bJ.aM.stringify(xL);
			var kp = yj.replace(/(.{64})/g, "$1\r\n");
			kp = kp.replace(/\r\n$/, '');
			return "-----BEGIN " + bz + "-----\r\n" + kp + "\r\n-----END " + bz + "-----\r\n";
		};
	};
	aF.V.cD = function() {
		var bL = true;
		var ay = null;
		var aA = '00';
		var nl = '00';
		var bE = '';
		this.vG = function() {
			if (typeof this.bE == "undefined" || this.bE == null) {
				throw "this.bE is null ct undefined.";
			}
			if (this.bE.length % 2 == 1) {
				throw "value al must be even length: n=" + bE.length + ",v=" + this.bE;
			}
			var n = this.bE.length / 2;
			var fv = n.toString(16);
			if (fv.length % 2 == 1) {
				fv = "0" + fv;
			}
			if (n < 128) {
				return fv;
			} else {
				var pd = fv.length / 2;
				if (pd > 15) {
					throw "ASN.1 length too long to represent by 8x: n = " + n.toString(16);
				}
				var head = 128 + pd;
				return head.toString(16) + fv;
			}
		};
		this.fh = function() {
			if (this.ay == null || this.bL) {
				this.bE = this.cV();
				this.nl = this.vG();
				this.ay = this.aA + this.nl + this.bE;
				this.bL = false;
			}
			return this.ay;
		};
		this.zH = function() {
			this.fh();
			return this.bE;
		};
		this.cV = function() {
			return '';
		};
	};
	aF.V.dm = function(aC) {
		aF.V.dm.bO.constructor.call(this);
		var s = null;
		var bE = null;
		this.wg = function() {
			return this.s;
		};
		this.iF = function(jQ) {
			this.ay = null;
			this.bL = true;
			this.s = jQ;
			this.bE = ju(this.s);
		};
		this.ih = function(hx) {
			this.ay = null;
			this.bL = true;
			this.s = null;
			this.bE = hx;
		};
		this.cV = function() {
			return this.bE;
		};
		if (typeof aC != "undefined") {
			if (typeof aC['bS'] != "undefined") {
				this.iF(aC['bS']);
			} else if (typeof aC['al'] != "undefined") {
				this.ih(aC['al']);
			}
		}
	};
	as.extend(aF.V.dm, aF.V.cD);
	aF.V.fX = function(aC) {
		aF.V.fX.bO.constructor.call(this);
		var s = null;
		var date = null;
		this.we = function(d) {
			iZ = d.getTime() + (d.getTimezoneOffset() * 60000);
			var ot = new Date(iZ);
			return ot;
		};
		this.formatDate = function(ef, type) {
			var bH = this.pA;
			var d = this.we(ef);
			var year = String(d.getFullYear());
			if (type == 'iZ') year = year.substr(2, 2);
			var month = bH(String(d.getMonth() + 1), 2);
			var kc = bH(String(d.getDate()), 2);
			var je = bH(String(d.getHours()), 2);
			var min = bH(String(d.getMinutes()), 2);
			var jH = bH(String(d.getSeconds()), 2);
			return year + month + kc + je + min + jH + 'Z';
		};
		this.pA = function(s, aG) {
			if (s.length >= aG) return s;
			return new Array(aG - s.length + 1).join('0') + s;
		};
		this.wg = function() {
			return this.s;
		};
		this.iF = function(jQ) {
			this.ay = null;
			this.bL = true;
			this.s = jQ;
			this.bE = ju(this.s);
		};
		this.yN = function(year, month, kc, je, min, jH) {
			var ef = new Date(Date.UTC(year, month - 1, kc, je, min, jH, 0));
			this.hY(ef);
		};
		this.cV = function() {
			return this.bE;
		};
	};
	as.extend(aF.V.fX, aF.V.cD);
	aF.V.kn = function(aC) {
		aF.V.dm.bO.constructor.call(this);
		var ez = null;
		this.yc = function(xO) {
			this.ay = null;
			this.bL = true;
			this.ez = xO;
		};
		this.yY = function(cn) {
			this.ay = null;
			this.bL = true;
			this.ez.push(cn);
		};
		this.ez = new Array();
		if (typeof aC != "undefined") {
			if (typeof aC['array'] != "undefined") {
				this.ez = aC['array'];
			}
		}
	};
	as.extend(aF.V.kn, aF.V.cD);
	aF.V.lQ = function() {
		aF.V.lQ.bO.constructor.call(this);
		this.aA = "01";
		this.ay = "0101ff";
	};
	as.extend(aF.V.lQ, aF.V.cD);
	aF.V.dA = function(aC) {
		aF.V.dA.bO.constructor.call(this);
		this.aA = "02";
		this.lE = function(iS) {
			this.ay = null;
			this.bL = true;
			this.bE = aF.V.xU.wG(iS);
		};
		this.un = function(hy) {
			var kV = new O(String(hy), 10);
			this.lE(kV);
		};
		this.ip = function(hx) {
			this.bE = hx;
		};
		this.cV = function() {
			return this.bE;
		};
		if (typeof aC != "undefined") {
			if (typeof aC['bigint'] != "undefined") {
				this.lE(aC['bigint']);
			} else if (typeof aC['bG'] != "undefined") {
				this.un(aC['bG']);
			} else if (typeof aC['al'] != "undefined") {
				this.ip(aC['al']);
			}
		}
	};
	as.extend(aF.V.dA, aF.V.cD);
	aF.V.lw = function(aC) {
		aF.V.lw.bO.constructor.call(this);
		this.aA = "03";
		this.uJ = function(xe) {
			this.ay = null;
			this.bL = true;
			this.bE = xe;
		};
		this.zY = function(cW, wX) {
			if (cW < 0 || 7 < cW) {
				throw "unused aR shall be from 0 to 7: u = " + cW;
			}
			var wn = "0" + cW;
			this.ay = null;
			this.bL = true;
			this.bE = wn + wX;
		};
		this.nq = function(fV) {
			fV = fV.replace(/0+$/, '');
			var cW = 8 - fV.length % 8;
			if (cW == 8) cW = 0;
			for (var i = 0; i <= cW; i++) {
				fV += '0';
			}
			var h = '';
			for (var i = 0; i < fV.length - 1; i += 8) {
				var b = fV.substr(i, 8);
				var x = parseInt(b, 2).toString(16);
				if (x.length == 1) x = '0' + x;
				h += x;
			}
			this.ay = null;
			this.bL = true;
			this.bE = '0' + cW + h;
		};
		this.uZ = function(lY) {
			var s = '';
			for (var i = 0; i < lY.length; i++) {
				if (lY[i] == true) {
					s += '1';
				} else {
					s += '0';
				}
			}
			this.nq(s);
		};
		this.Aa = function(ml) {
			var a = new Array(ml);
			for (var i = 0; i < ml; i++) {
				a[i] = false;
			}
			return a;
		};
		this.cV = function() {
			return this.bE;
		};
		if (typeof aC != "undefined") {
			if (typeof aC['al'] != "undefined") {
				this.uJ(aC['al']);
			} else if (typeof aC['bin'] != "undefined") {
				this.nq(aC['bin']);
			} else if (typeof aC['array'] != "undefined") {
				this.uZ(aC['array']);
			}
		}
	};
	as.extend(aF.V.lw, aF.V.cD);
	aF.V.mf = function(aC) {
		aF.V.mf.bO.constructor.call(this, aC);
		this.aA = "04";
	};
	as.extend(aF.V.mf, aF.V.dm);
	aF.V.jV = function() {
		aF.V.jV.bO.constructor.call(this);
		this.aA = "05";
		this.ay = "0500";
	};
	as.extend(aF.V.jV, aF.V.cD);
	aF.V.gT = function(aC) {
		var lK = function(i) {
			var h = i.toString(16);
			if (h.length == 1) h = '0' + h;
			return h;
		};
		var rR = function(rE) {
			var h = '';
			var kV = new O(rE, 10);
			var b = kV.toString(2);
			var kY = 7 - b.length % 7;
			if (kY == 7) kY = 0;
			var nk = '';
			for (var i = 0; i < kY; i++) nk += '0';
			b = nk + b;
			for (var i = 0; i < b.length - 1; i += 7) {
				var jZ = b.substr(i, 7);
				if (i != b.length - 7) jZ = '1' + jZ;
				h += lK(parseInt(jZ, 2));
			}
			return h;
		};
		aF.V.gT.bO.constructor.call(this);
		this.aA = "06";
		this.ip = function(hx) {
			this.ay = null;
			this.bL = true;
			this.s = null;
			this.bE = hx;
		};
		this.lC = function(le) {
			if (!le.match(/^[0-9.]+$/)) {
				throw "malformed dI string: " + le;
			}
			var h = '';
			var a = le.split('.');
			var dc = parseInt(a[0]) * 40 + parseInt(a[1]);
			h += lK(dc);
			a.splice(0, 2);
			for (var i = 0; i < a.length; i++) {
				h += rR(a[i]);
			}
			this.ay = null;
			this.bL = true;
			this.s = null;
			this.bE = h;
		};
		this.sa = function(iK) {
			if (typeof aF.V.qx.yJ.yE[iK] != "undefined") {
				var dI = aF.V.qx.yJ.yE[iK];
				this.lC(dI);
			} else {
				throw "gT iK undefined: " + iK;
			}
		};
		this.cV = function() {
			return this.bE;
		};
		if (typeof aC != "undefined") {
			if (typeof aC['dI'] != "undefined") {
				this.lC(aC['dI']);
			} else if (typeof aC['al'] != "undefined") {
				this.ip(aC['al']);
			} else if (typeof aC['name'] != "undefined") {
				this.sa(aC['name']);
			}
		}
	};
	as.extend(aF.V.gT, aF.V.cD);
	aF.V.nK = function(aC) {
		aF.V.nK.bO.constructor.call(this, aC);
		this.aA = "0c";
	};
	as.extend(aF.V.nK, aF.V.dm);
	aF.V.mA = function(aC) {
		aF.V.mA.bO.constructor.call(this, aC);
		this.aA = "12";
	};
	as.extend(aF.V.mA, aF.V.dm);
	aF.V.mP = function(aC) {
		aF.V.mP.bO.constructor.call(this, aC);
		this.aA = "13";
	};
	as.extend(aF.V.mP, aF.V.dm);
	aF.V.pl = function(aC) {
		aF.V.pl.bO.constructor.call(this, aC);
		this.aA = "14";
	};
	as.extend(aF.V.pl, aF.V.dm);
	aF.V.mb = function(aC) {
		aF.V.mb.bO.constructor.call(this, aC);
		this.aA = "16";
	};
	as.extend(aF.V.mb, aF.V.dm);
	aF.V.pj = function(aC) {
		aF.V.pj.bO.constructor.call(this, aC);
		this.aA = "17";
		this.hY = function(ef) {
			this.ay = null;
			this.bL = true;
			this.date = ef;
			this.s = this.formatDate(this.date, 'iZ');
			this.bE = ju(this.s);
		};
		if (typeof aC != "undefined") {
			if (typeof aC['bS'] != "undefined") {
				this.iF(aC['bS']);
			} else if (typeof aC['al'] != "undefined") {
				this.ih(aC['al']);
			} else if (typeof aC['date'] != "undefined") {
				this.hY(aC['date']);
			}
		}
	};
	as.extend(aF.V.pj, aF.V.fX);
	aF.V.mv = function(aC) {
		aF.V.mv.bO.constructor.call(this, aC);
		this.aA = "18";
		this.hY = function(ef) {
			this.ay = null;
			this.bL = true;
			this.date = ef;
			this.s = this.formatDate(this.date, 'gen');
			this.bE = ju(this.s);
		};
		if (typeof aC != "undefined") {
			if (typeof aC['bS'] != "undefined") {
				this.iF(aC['bS']);
			} else if (typeof aC['al'] != "undefined") {
				this.ih(aC['al']);
			} else if (typeof aC['date'] != "undefined") {
				this.hY(aC['date']);
			}
		}
	};
	as.extend(aF.V.mv, aF.V.fX);
	aF.V.gZ = function(aC) {
		aF.V.gZ.bO.constructor.call(this, aC);
		this.aA = "30";
		this.cV = function() {
			var h = '';
			for (var i = 0; i < this.ez.length; i++) {
				var ll = this.ez[i];
				h += ll.fh();
			}
			this.bE = h;
			return this.bE;
		};
	};
	as.extend(aF.V.gZ, aF.V.kn);
	aF.V.mH = function(aC) {
		aF.V.mH.bO.constructor.call(this, aC);
		this.aA = "31";
		this.cV = function() {
			var a = new Array();
			for (var i = 0; i < this.ez.length; i++) {
				var ll = this.ez[i];
				a.push(ll.fh());
			}
			a.sort();
			this.bE = a.join('');
			return this.bE;
		};
	};
	as.extend(aF.V.mH, aF.V.kn);
	aF.V.lF = function(aC) {
		aF.V.lF.bO.constructor.call(this);
		this.aA = "a0";
		this.bE = '';
		this.hv = true;
		this.cn = null;
		this.ve = function(vJ, lJ, cn) {
			this.aA = lJ;
			this.hv = vJ;
			this.cn = cn;
			if (this.hv) {
				this.bE = this.cn.fh();
				this.ay = null;
				this.bL = true;
			} else {
				this.bE = null;
				this.ay = cn.fh();
				this.ay = this.ay.replace(/^../, lJ);
				this.bL = false;
			}
		};
		this.cV = function() {
			return this.bE;
		};
		if (typeof aC != "undefined") {
			if (typeof aC['bv'] != "undefined") {
				this.aA = aC['bv'];
			}
			if (typeof aC['explicit'] != "undefined") {
				this.hv = aC['explicit'];
			}
			if (typeof aC['bA'] != "undefined") {
				this.cn = aC['bA'];
				this.ve(this.hv, this.aA, this.cn);
			}
		}
	};
	as.extend(aF.V.lF, aF.V.cD); (function(undefined) {
		"use strict";
		var cJ = {},
		cR;
		cJ.ei = function(a) {
			var i;
			if (cR === undefined) {
				var al = "0123456789ABCDEF",
				ha = " \f\n\r\t\u00A0\u2028\u2029";
				cR = [];
				for (i = 0; i < 16; ++i) cR[al.charAt(i)] = i;
				al = al.toLowerCase();
				for (i = 10; i < 16; ++i) cR[al.charAt(i)] = i;
				for (i = 0; i < ha.length; ++i) cR[ha.charAt(i)] = -1;
			}
			var out = [],
			aR = 0,
			fc = 0;
			for (i = 0; i < a.length; ++i) {
				var c = a.charAt(i);
				if (c == '=') break;
				c = cR[c];
				if (c == -1) continue;
				if (c === undefined) throw 'Illegal character at offset ' + i;
				aR |= c;
				if (++fc >= 2) {
					out[out.length] = aR;
					aR = 0;
					fc = 0;
				} else {
					aR <<= 4;
				}
			}
			if (fc) throw "cJ encoding incomplete: 4 aR missing";
			return out;
		};
		window.cJ = cJ;
	})(); (function(undefined) {
		"use strict";
		var aM = {},
		cR;
		aM.ei = function(a) {
			var i;
			if (cR === undefined) {
				var xt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
				ha = "= \f\n\r\t\u00A0\u2028\u2029";
				cR = [];
				for (i = 0; i < 64; ++i) cR[xt.charAt(i)] = i;
				for (i = 0; i < ha.length; ++i) cR[ha.charAt(i)] = -1;
			}
			var out = [];
			var aR = 0,
			fc = 0;
			for (i = 0; i < a.length; ++i) {
				var c = a.charAt(i);
				if (c == '=') break;
				c = cR[c];
				if (c == -1) continue;
				if (c === undefined) throw 'Illegal character at offset ' + i;
				aR |= c;
				if (++fc >= 4) {
					out[out.length] = (aR >> 16);
					out[out.length] = (aR >> 8) & 0xFF;
					out[out.length] = aR & 0xFF;
					aR = 0;
					fc = 0;
				} else {
					aR <<= 6;
				}
			}
			switch (fc) {
			case 1:
				throw "aM encoding incomplete: at least 2 aR missing";
			case 2:
				out[out.length] = (aR >> 10);
				break;
			case 3:
				out[out.length] = (aR >> 16);
				out[out.length] = (aR >> 8) & 0xFF;
				break;
			}
			return out;
		};
		aM.eT = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;
		aM.rA = function(a) {
			var m = aM.eT.exec(a);
			if (m) {
				if (m[1]) a = m[1];
				else if (m[2]) a = m[2];
				else throw "RegExp out of sync";
			}
			return aM.ei(a);
		};
		window.aM = aM;
	})(); (function(undefined) {
		"use strict";
		var eh = 100,
		ellipsis = "\u2026",
		dM = {
			bv: function(tagName, className) {
				var t = document.createElement(tagName);
				t.className = className;
				return t;
			},
			text: function(bS) {
				return document.createTextNode(bS);
			}
		};
		function aU(bJ, pos) {
			if (bJ instanceof aU) {
				this.bJ = bJ.bJ;
				this.pos = bJ.pos;
			} else {
				this.bJ = bJ;
				this.pos = pos;
			}
		};
		aU.prototype.get = function(pos) {
			if (pos === undefined) pos = this.pos++;
			if (pos >= this.bJ.length) throw 'Requesting byte offset ' + pos + ' on a bn of length ' + this.bJ.length;
			return this.bJ[pos];
		};
		aU.prototype.oR = "0123456789ABCDEF";
		aU.prototype.pr = function(b) {
			return this.oR.charAt((b >> 4) & 0xF) + this.oR.charAt(b & 0xF);
		};
		aU.prototype.jn = function(start, end, ow) {
			var s = "";
			for (var i = start; i < end; ++i) {
				s += this.pr(this.get(i));
				if (ow !== true) switch (i & 0xF) {
				case 0x7:
					s += "  ";
					break;
				case 0xF:
					s += "\n";
					break;
				default:
					s += " ";
				}
			}
			return s;
		};
		aU.prototype.ke = function(start, end) {
			var s = "";
			for (var i = start; i < end; ++i) s += String.fromCharCode(this.get(i));
			return s;
		};
		aU.prototype.qi = function(start, end) {
			var s = "";
			for (var i = start; i < end;) {
				var c = this.get(i++);
				if (c < 128) s += String.fromCharCode(c);
				else if ((c > 191) && (c < 224)) s += String.fromCharCode(((c & 0x1F) << 6) | (this.get(i++) & 0x3F));
				else s += String.fromCharCode(((c & 0x0F) << 12) | ((this.get(i++) & 0x3F) << 6) | (this.get(i++) & 0x3F));
			}
			return s;
		};
		aU.prototype.qC = function(start, end) {
			var bS = "";
			for (var i = start; i < end; i += 2) {
				var vE = this.get(i);
				var wF = this.get(i + 1);
				bS += String.fromCharCode((vE << 8) + wF);
			}
			return bS;
		};
		aU.prototype.sz = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
		aU.prototype.qq = function(start, end) {
			var s = this.ke(start, end),
			m = this.sz.exec(s);
			if (!m) return "Unrecognized time: " + s;
			s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
			if (m[5]) {
				s += ":" + m[5];
				if (m[6]) {
					s += ":" + m[6];
					if (m[7]) s += "." + m[7];
				}
			}
			if (m[8]) {
				s += " UTC";
				if (m[8] != 'Z') {
					s += m[8];
					if (m[9]) s += ":" + m[9];
				}
			}
			return s;
		};
		aU.prototype.qn = function(start, end) {
			var aG = end - start;
			if (aG > 4) {
				aG <<= 3;
				var s = this.get(start);
				if (s === 0) aG -= 8;
				else while (s < 128) {
					s <<= 1; --aG;
				}
				return "(" + aG + " bit)";
			}
			var n = 0;
			for (var i = start; i < end; ++i) n = (n << 8) | this.get(i);
			return n;
		};
		aU.prototype.pI = function(start, end) {
			var ok = this.get(start),
			nf = ((end - start - 1) << 3) - ok,
			s = "(" + nf + " bit)";
			if (nf <= 20) {
				var mL = ok;
				s += " ";
				for (var i = end - 1; i > start; --i) {
					var b = this.get(i);
					for (var j = mL; j < 8; ++j) s += (b >> j) & 1 ? "1": "0";
					mL = 0;
				}
			}
			return s;
		};
		aU.prototype.mU = function(start, end) {
			var aG = end - start,
			s = "(" + aG + " byte) ";
			if (aG > eh) end = start + eh;
			for (var i = start; i < end; ++i) s += this.pr(this.get(i));
			if (aG > eh) s += ellipsis;
			return s;
		};
		aU.prototype.qj = function(start, end) {
			var s = '',
			n = 0,
			aR = 0;
			for (var i = start; i < end; ++i) {
				var v = this.get(i);
				n = (n << 7) | (v & 0x7F);
				aR += 7;
				if (! (v & 0x80)) {
					if (s === '') {
						var m = n < 80 ? n < 40 ? 0 : 1 : 2;
						s = m + "." + (n - m * 40);
					} else s += "." + ((aR >= 31) ? "bigint": n);
					n = aR = 0;
				}
			}
			return s;
		};
		function bh(bn, header, length, bv, sub) {
			this.bn = bn;
			this.header = header;
			this.length = length;
			this.bv = bv;
			this.sub = sub;
		};
		bh.prototype.iW = function() {
			if (this.bv === undefined) return "unknown";
			var jW = this.bv >> 6,
			zd = (this.bv >> 5) & 1,
			eN = this.bv & 0x1F;
			switch (jW) {
			case 0:
				switch (eN) {
				case 0x00:
					return "EOC";
				case 0x01:
					return "BOOLEAN";
				case 0x02:
					return "INTEGER";
				case 0x03:
					return "BIT_STRING";
				case 0x04:
					return "OCTET_STRING";
				case 0x05:
					return "NULL";
				case 0x06:
					return "OBJECT_IDENTIFIER";
				case 0x07:
					return "ObjectDescriptor";
				case 0x08:
					return "EXTERNAL";
				case 0x09:
					return "REAL";
				case 0x0A:
					return "ENUMERATED";
				case 0x0B:
					return "EMBEDDED_PDV";
				case 0x0C:
					return "UTF8String";
				case 0x10:
					return "SEQUENCE";
				case 0x11:
					return "SET";
				case 0x12:
					return "NumericString";
				case 0x13:
					return "PrintableString";
				case 0x14:
					return "TeletexString";
				case 0x15:
					return "VideotexString";
				case 0x16:
					return "IA5String";
				case 0x17:
					return "UTCTime";
				case 0x18:
					return "GeneralizedTime";
				case 0x19:
					return "GraphicString";
				case 0x1A:
					return "VisibleString";
				case 0x1B:
					return "GeneralString";
				case 0x1C:
					return "UniversalString";
				case 0x1E:
					return "BMPString";
				default:
					return "Universal_" + eN.toString(16);
				}
			case 1:
				return "Application_" + eN.toString(16);
			case 2:
				return "[" + eN + "]";
			case 3:
				return "Private_" + eN.toString(16);
			}
		};
		bh.prototype.sp = /^[ -~]+$/;
		bh.prototype.content = function() {
			if (this.bv === undefined) return null;
			var jW = this.bv >> 6,
			eN = this.bv & 0x1F,
			content = this.jb(),
			aG = Math.abs(this.length);
			if (jW !== 0) {
				if (this.sub !== null) return "(" + this.sub.length + " elem)";
				var s = this.bn.ke(content, content + Math.min(aG, eh));
				if (this.sp.test(s)) return s.substring(0, 2 * eh) + ((s.length > 2 * eh) ? ellipsis: "");
				else return this.bn.mU(content, content + aG);
			}
			switch (eN) {
			case 0x01:
				return (this.bn.get(content) === 0) ? "false": "true";
			case 0x02:
				return this.bn.qn(content, content + aG);
			case 0x03:
				return this.sub ? "(" + this.sub.length + " elem)": this.bn.pI(content, content + aG);
			case 0x04:
				return this.sub ? "(" + this.sub.length + " elem)": this.bn.mU(content, content + aG);
			case 0x06:
				return this.bn.qj(content, content + aG);
			case 0x10:
			case 0x11:
				return "(" + this.sub.length + " elem)";
			case 0x0C:
				return this.bn.qi(content, content + aG);
			case 0x12:
			case 0x13:
			case 0x14:
			case 0x15:
			case 0x16:
			case 0x1A:
				return this.bn.ke(content, content + aG);
			case 0x1E:
				return this.bn.qC(content, content + aG);
			case 0x17:
			case 0x18:
				return this.bn.qq(content, content + aG);
			}
			return null;
		};
		bh.prototype.toString = function() {
			return this.iW() + "@" + this.bn.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + ((this.sub === null) ? 'null': this.sub.length) + "]";
		};
		bh.prototype.print = function(indent) {
			if (indent === undefined) indent = '';
			document.writeln(indent + this);
			if (this.sub !== null) {
				indent += '  ';
				for (var i = 0,
				max = this.sub.length; i < max; ++i) this.sub[i].print(indent);
			}
		};
		bh.prototype.sZ = function(indent) {
			if (indent === undefined) indent = '';
			var s = indent + this.iW() + " @" + this.bn.pos;
			if (this.length >= 0) s += "+";
			s += this.length;
			if (this.bv & 0x20) s += " (constructed)";
			else if (((this.bv == 0x03) || (this.bv == 0x04)) && (this.sub !== null)) s += " (encapsulates)";
			s += "\n";
			if (this.sub !== null) {
				indent += '  ';
				for (var i = 0,
				max = this.sub.length; i < max; ++i) s += this.sub[i].sZ(indent);
			}
			return s;
		};
		bh.prototype.rQ = function() {
			var ai = dM.bv("div", "ai");
			ai.V = this;
			var head = dM.bv("div", "head");
			var s = this.iW().replace(/_/g, " ");
			head.innerHTML = s;
			var content = this.content();
			if (content !== null) {
				content = String(content).replace(/</g, "&lt;");
				var kx = dM.bv("span", "kx");
				kx.appendChild(dM.text(content));
				head.appendChild(kx);
			}
			ai.appendChild(head);
			this.ai = ai;
			this.head = head;
			var value = dM.bv("div", "value");
			s = "Offset: " + this.bn.pos + "<br/>";
			s += "Length: " + this.header + "+";
			if (this.length >= 0) s += this.length;
			else s += ( - this.length) + " (undefined)";
			if (this.bv & 0x20) s += "<br/>(constructed)";
			else if (((this.bv == 0x03) || (this.bv == 0x04)) && (this.sub !== null)) s += "<br/>(encapsulates)";
			if (content !== null) {
				s += "<br/>Value:<br/><b>" + content + "</b>";
				if ((typeof xv === 'object') && (this.bv == 0x06)) {
					var dI = xv[content];
					if (dI) {
						if (dI.d) s += "<br/>" + dI.d;
						if (dI.c) s += "<br/>" + dI.c;
						if (dI.w) s += "<br/>(warning!)";
					}
				}
			}
			value.innerHTML = s;
			ai.appendChild(value);
			var sub = dM.bv("div", "sub");
			if (this.sub !== null) {
				for (var i = 0,
				max = this.sub.length; i < max; ++i) sub.appendChild(this.sub[i].rQ());
			}
			ai.appendChild(sub);
			head.onclick = function() {
				ai.className = (ai.className == "ai collapsed") ? "ai": "ai collapsed";
			};
			return ai;
		};
		bh.prototype.hg = function() {
			return this.bn.pos;
		};
		bh.prototype.jb = function() {
			return this.bn.pos + this.header;
		};
		bh.prototype.hU = function() {
			return this.bn.pos + this.header + Math.abs(this.length);
		};
		bh.prototype.vp = function(current) {
			this.ai.className += " hover";
			if (current) this.head.className += " hover";
		};
		bh.prototype.vQ = function(current) {
			var eT = / ?hover/;
			this.ai.className = this.ai.className.replace(eT, "");
			if (current) this.head.className = this.head.className.replace(eT, "");
		};
		bh.prototype.hX = function(ai, className, bn, start, end) {
			if (start >= end) return;
			var sub = dM.bv("span", className);
			sub.appendChild(dM.text(bn.jn(start, end)));
			ai.appendChild(sub);
		};
		bh.prototype.sP = function(root) {
			var ai = dM.bv("span", "al");
			if (root === undefined) root = ai;
			this.head.od = ai;
			this.head.onmouseover = function() {
				this.od.className = "hexCurrent";
			};
			this.head.onmouseout = function() {
				this.od.className = "al";
			};
			ai.V = this;
			ai.onmouseover = function() {
				var current = !root.selected;
				if (current) {
					root.selected = this.V;
					this.className = "hexCurrent";
				}
				this.V.vp(current);
			};
			ai.onmouseout = function() {
				var current = (root.selected == this.V);
				this.V.vQ(current);
				if (current) {
					root.selected = null;
					this.className = "al";
				}
			};
			this.hX(ai, "bv", this.bn, this.hg(), this.hg() + 1);
			this.hX(ai, (this.length >= 0) ? "dlen": "ulen", this.bn, this.hg() + 1, this.jb());
			if (this.sub === null) ai.appendChild(dM.text(this.bn.jn(this.jb(), this.hU())));
			else if (this.sub.length > 0) {
				var first = this.sub[0];
				var last = this.sub[this.sub.length - 1];
				this.hX(ai, "intro", this.bn, this.jb(), first.hg());
				for (var i = 0,
				max = this.sub.length; i < max; ++i) ai.appendChild(this.sub[i].sP(root));
				this.hX(ai, "outro", this.bn, last.hU(), this.hU());
			}
			return ai;
		};
		bh.prototype.sK = function(root) {
			return this.bn.jn(this.hg(), this.hU(), true);
		};
		bh.kl = function(bn) {
			var ea = bn.get(),
			aG = ea & 0x7F;
			if (aG == ea) return aG;
			if (aG > 3) throw "Length over 24 aR not supported at position " + (bn.pos - 1);
			if (aG === 0) return - 1;
			ea = 0;
			for (var i = 0; i < aG; ++i) ea = (ea << 8) | bn.get();
			return ea;
		};
		bh.wH = function(bv, aG, bn) {
			if (bv & 0x20) return true;
			if ((bv < 0x03) || (bv > 0x04)) return false;
			var p = new aU(bn);
			if (bv == 0x03) p.get();
			var qT = p.get();
			if ((qT >> 6) & 0x01) return false;
			try {
				var py = bh.kl(p);
				return ((p.pos - bn.pos) + py == aG);
			} catch(Ay) {
				return false;
			}
		};
		bh.ei = function(bn) {
			if (! (bn instanceof aU)) bn = new aU(bn, 0);
			var nc = new aU(bn),
			bv = bn.get(),
			aG = bh.kl(bn),
			header = bn.pos - nc.pos,
			sub = null;
			if (bh.wH(bv, aG, bn)) {
				var start = bn.pos;
				if (bv == 0x03) bn.get();
				sub = [];
				if (aG >= 0) {
					var end = start + aG;
					while (bn.pos < end) sub[sub.length] = bh.ei(bn);
					if (bn.pos != end) throw "Content size is not correct for hO starting at offset " + start;
				} else {
					try {
						for (;;) {
							var s = bh.ei(bn);
							if (s.bv === 0) break;
							sub[sub.length] = s;
						}
						aG = start - bn.pos;
					} catch(e) {
						throw "Exception while decoding undefined length content: " + e;
					}
				}
			} else bn.pos += aG;
			return new bh(nc, header, aG, bv, sub);
		};
		bh.test = function() {
			var test = [{
				value: [0x27],
				gI: 0x27
			},
			{
				value: [0x81, 0xC9],
				gI: 0xC9
			},
			{
				value: [0x83, 0xFE, 0xDC, 0xBA],
				gI: 0xFEDCBA
			}];
			for (var i = 0,
			max = test.length; i < max; ++i) {
				var pos = 0,
				bn = new aU(test[i].value, 0),
				kw = bh.kl(bn);
				if (kw != test[i].gI) document.write("In test[" + i + "] gI " + test[i].gI + " got " + kw + "\n");
			}
		};
		window.bh = bh;
	})();
	bh.prototype.et = function() {
		var vR = this.sK();
		var offset = this.header * 2;
		var length = this.length * 2;
		return vR.substr(offset, length);
	};
	ae.prototype.qA = function(gV) {
		try {
			var hS = 0;
			var jp = 0;
			var nP = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
			var wz = nP.test(gV) ? cJ.ei(gV) : aM.rA(gV);
			var V = bh.ei(wz);
			if (V.sub.length === 3) {
				V = V.sub[2].sub[0];
			}
			if (V.sub.length === 9) {
				hS = V.sub[1].et();
				this.n = bw(hS, 16);
				jp = V.sub[2].et();
				this.e = parseInt(jp, 16);
				var qE = V.sub[3].et();
				this.d = bw(qE, 16);
				var pV = V.sub[4].et();
				this.p = bw(pV, 16);
				var qG = V.sub[5].et();
				this.q = bw(qG, 16);
				var wA = V.sub[6].et();
				this.ca = bw(wA, 16);
				var vy = V.sub[7].et();
				this.dK = bw(vy, 16);
				var yv = V.sub[8].et();
				this.dr = bw(yv, 16);
			} else if (V.sub.length === 2) {
				var start = (V.header + V.sub[0].header) * 2;
				var length = V.sub[0].length * 2;
				hS = gV.substr(start, length);
				this.n = bw(hS, 16);
				start = length + start + V.sub[1].header * 2;
				length = V.sub[1].length * 2;
				jp = gV.substr(start, length);
				this.e = parseInt(jp, 16);
			} else {
				return false;
			}
			return true;
		} catch(ex) {
			return false;
		}
	};
	ae.prototype.vo = function() {
		var options = {
			'array': [new aF.V.dA({
				'bG': 0
			}), new aF.V.dA({
				'bigint': this.n
			}), new aF.V.dA({
				'bG': this.e
			}), new aF.V.dA({
				'bigint': this.d
			}), new aF.V.dA({
				'bigint': this.p
			}), new aF.V.dA({
				'bigint': this.q
			}), new aF.V.dA({
				'bigint': this.ca
			}), new aF.V.dA({
				'bigint': this.dK
			}), new aF.V.dA({
				'bigint': this.dr
			})]
		};
		var kL = new aF.V.gZ(options);
		return kL.fh();
	};
	ae.prototype.nS = function() {
		return nM(this.vo());
	};
	ae.prototype.wW = function() {
		var options = {
			'array': [new aF.V.gT({
				'dI': '1.2.840.113549.1.1.1'
			}), new aF.V.jV()]
		};
		var wL = new aF.V.gZ(options);
		options = {
			'array': [new aF.V.dA({
				'bigint': this.n
			}), new aF.V.dA({
				'bG': this.e
			})]
		};
		var uu = new aF.V.gZ(options);
		options = {
			'al': '00' + uu.fh()
		};
		var vz = new aF.V.lw(options);
		options = {
			'array': [wL, vz]
		};
		var kL = new aF.V.gZ(options);
		return kL.fh();
	};
	ae.prototype.nx = function() {
		return nM(this.wW());
	};
	ae.prototype.nG = function(bS, width) {
		width = width || 64;
		if (!bS) {
			return bS;
		}
		var qO = '(.{1,' + width + '})( +|$\n?)|(.{1,' + width + '})';
		return bS.match(RegExp(qO, 'g')).join('\n');
	};
	ae.prototype.nL = function() {
		var key = "-----BEGIN RSA PRIVATE KEY-----\n";
		key += this.nG(this.nS()) + "\n";
		key += "-----END RSA PRIVATE KEY-----";
		return key;
	};
	ae.prototype.mr = function() {
		var key = "-----BEGIN PUBLIC KEY-----\n";
		key += this.nG(this.nx()) + "\n";
		key += "-----END PUBLIC KEY-----";
		return key;
	};
	ae.prototype.wC = function(bA) {
		bA = bA || {};
		return (bA.hasOwnProperty('n') && bA.hasOwnProperty('e'));
	};
	ae.prototype.ws = function(bA) {
		bA = bA || {};
		return (bA.hasOwnProperty('n') && bA.hasOwnProperty('e') && bA.hasOwnProperty('d') && bA.hasOwnProperty('p') && bA.hasOwnProperty('q') && bA.hasOwnProperty('ca') && bA.hasOwnProperty('dK') && bA.hasOwnProperty('dr'));
	};
	ae.prototype.qb = function(bA) {
		this.n = bA.n;
		this.e = bA.e;
		if (bA.hasOwnProperty('d')) {
			this.d = bA.d;
			this.p = bA.p;
			this.q = bA.q;
			this.ca = bA.ca;
			this.dK = bA.dK;
			this.dr = bA.dr;
		}
	};
	var gO = function(key) {
		ae.call(this);
		if (key) {
			if (typeof key === 'string') {
				this.qA(key);
			} else if (this.ws(key) || this.wC(key)) {
				this.qb(key);
			}
		}
	};
	gO.prototype = new ae();
	gO.prototype.constructor = gO;
	var db = function(options) {
		options = options || {};
		this.ks = parseInt(options.ks) || 1024;
		this.kX = options.kX || '010001';
		this.log = options.log || false;
		this.key = null;
	};
	db.prototype.na = function(key) {
		if (this.log && this.key) {
			console.xZ('A key was already set, overriding existing.');
		}
		this.key = new gO(key);
	};
	db.prototype.yK = function(rh) {
		this.na(rh);
	};
	db.prototype.uO = function(pG) {
		this.na(pG);
	};
	db.prototype.eV = function(string) {
		try {
			return this.an().eV(kI(string));
		} catch(ex) {
			return false;
		}
	};
	db.prototype.bZ = function(string) {
		try {
			return (this.an().bZ(string));
		} catch(ex) {
			return false;
		}
	};
	db.prototype.an = function(jS) {
		if (!this.key) {
			this.key = new gO();
			if (jS && {}.toString.call(jS) === '[object Function]') {
				this.key.vS(this.ks, this.kX, jS);
				return;
			}
			this.key.generate(this.ks, this.kX);
		}
		return this.key;
	};
	db.prototype.nL = function() {
		return this.an().nL();
	};
	db.prototype.yO = function() {
		return this.an().nS();
	};
	db.prototype.mr = function() {
		return this.an().mr();
	};
	db.prototype.zF = function() {
		return this.an().nx();
	};
	fg.db = db;
})(lT);
var db = lT.db;
var fC;
var wr = 0xdeadbeefcafe;
var mT = ((wr & 0xffffff) == 0xefcafe);
function O(a, b, c) {
	if (a != null) if ("number" == typeof a) this.ki(a, b, c);
	else if (b == null && "string" != typeof a) this.gw(a, 256);
	else this.gw(a, b);
};
function aO() {
	return new O(null);
};
function pD(i, x, w, j, c, n) {
	while (--n >= 0) {
		var v = x * this[i++] + w[j] + c;
		c = Math.floor(v / 0x4000000);
		w[j++] = v & 0x3ffffff;
	}
	return c;
};
function sc(i, x, w, j, c, n) {
	var gE = x & 0x7fff,
	fR = x >> 15;
	while (--n >= 0) {
		var l = this[i] & 0x7fff;
		var h = this[i++] >> 15;
		var m = fR * l + h * gE;
		l = gE * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
		c = (l >>> 30) + (m >>> 15) + fR * h + (c >>> 30);
		w[j++] = l & 0x3fffffff;
	}
	return c;
};
function rN(i, x, w, j, c, n) {
	var gE = x & 0x3fff,
	fR = x >> 14;
	while (--n >= 0) {
		var l = this[i] & 0x3fff;
		var h = this[i++] >> 14;
		var m = fR * l + h * gE;
		l = gE * l + ((m & 0x3fff) << 14) + w[j] + c;
		c = (l >> 28) + (m >> 14) + fR * h;
		w[j++] = l & 0xfffffff;
	}
	return c;
};
if (mT && (navigator.appName == "Microsoft Internet Explorer")) {
	O.prototype.dN = sc;
	fC = 30;
} else if (mT && (navigator.appName != "Netscape")) {
	O.prototype.dN = pD;
	fC = 26;
} else {
	O.prototype.dN = rN;
	fC = 28;
}
O.prototype.bb = fC;
O.prototype.aW = ((1 << fC) - 1);
O.prototype.dq = (1 << fC);
var lu = 52;
O.prototype.wY = Math.pow(2, lu);
O.prototype.oK = lu - fC;
O.prototype.oM = 2 * fC - lu;
var vW = "0123456789abcdefghijklmnopqrstuvwxyz";
var ix = new Array();
var eA, cu;
eA = "0".charCodeAt(0);
for (cu = 0; cu <= 9; ++cu) ix[eA++] = cu;
eA = "a".charCodeAt(0);
for (cu = 10; cu < 36; ++cu) ix[eA++] = cu;
eA = "A".charCodeAt(0);
for (cu = 10; cu < 36; ++cu) ix[eA++] = cu;
function dE(n) {
	return vW.charAt(n);
};
function mE(s, i) {
	var c = ix[s.charCodeAt(i)];
	return (c == null) ? -1 : c;
};
function sN(r) {
	for (var i = this.t - 1; i >= 0; --i) r[i] = this[i];
	r.t = this.t;
	r.s = this.s;
};
function qf(x) {
	this.t = 1;
	this.s = (x < 0) ? -1 : 0;
	if (x > 0) this[0] = x;
	else if (x < -1) this[0] = x + this.dq;
	else this.t = 0;
};
function dV(i) {
	var r = aO();
	r.gr(i);
	return r;
};
function pR(s, b) {
	var k;
	if (b == 16) k = 4;
	else if (b == 8) k = 3;
	else if (b == 256) k = 8;
	else if (b == 2) k = 1;
	else if (b == 32) k = 5;
	else if (b == 4) k = 2;
	else {
		this.wq(s, b);
		return;
	}
	this.t = 0;
	this.s = 0;
	var i = s.length,
	eP = false,
	sh = 0;
	while (--i >= 0) {
		var x = (k == 8) ? s[i] & 0xff: mE(s, i);
		if (x < 0) {
			if (s.charAt(i) == "-") eP = true;
			continue;
		}
		eP = false;
		if (sh == 0) this[this.t++] = x;
		else if (sh + k > this.bb) {
			this[this.t - 1] |= (x & ((1 << (this.bb - sh)) - 1)) << sh;
			this[this.t++] = (x >> (this.bb - sh));
		} else this[this.t - 1] |= x << sh;
		sh += k;
		if (sh >= this.bb) sh -= this.bb;
	}
	if (k == 8 && (s[0] & 0x80) != 0) {
		this.s = -1;
		if (sh > 0) this[this.t - 1] |= ((1 << (this.bb - sh)) - 1) << sh;
	}
	this.ag();
	if (eP) O.ZERO.aj(this, this);
};
function sr() {
	var c = this.s & this.aW;
	while (this.t > 0 && this[this.t - 1] == c)--this.t;
};
function sg(b) {
	if (this.s < 0) return "-" + this.fF().toString(b);
	var k;
	if (b == 16) k = 4;
	else if (b == 8) k = 3;
	else if (b == 2) k = 1;
	else if (b == 32) k = 5;
	else if (b == 4) k = 2;
	else return this.tj(b);
	var jt = (1 << k) - 1,
	d,
	m = false,
	r = "",
	i = this.t;
	var p = this.bb - (i * this.bb) % k;
	if (i-->0) {
		if (p < this.bb && (d = this[i] >> p) > 0) {
			m = true;
			r = dE(d);
		}
		while (i >= 0) {
			if (p < k) {
				d = (this[i] & ((1 << p) - 1)) << (k - p);
				d |= this[--i] >> (p += this.bb - k);
			} else {
				d = (this[i] >> (p -= k)) & jt;
				if (p <= 0) {
					p += this.bb; --i;
				}
			}
			if (d > 0) m = true;
			if (m) r += dE(d);
		}
	}
	return m ? r: "0";
};
function pF() {
	var r = aO();
	O.ZERO.aj(this, r);
	return r;
};
function rG() {
	return (this.s < 0) ? this.fF() : this;
};
function uq(a) {
	var r = this.s - a.s;
	if (r != 0) return r;
	var i = this.t;
	r = i - a.t;
	if (r != 0) return (this.s < 0) ? -r: r;
	while (--i >= 0) if ((r = this[i] - a[i]) != 0) return r;
	return 0;
};
function ij(x) {
	var r = 1,
	t;
	if ((t = x >>> 16) != 0) {
		x = t;
		r += 16;
	}
	if ((t = x >> 8) != 0) {
		x = t;
		r += 8;
	}
	if ((t = x >> 4) != 0) {
		x = t;
		r += 4;
	}
	if ((t = x >> 2) != 0) {
		x = t;
		r += 2;
	}
	if ((t = x >> 1) != 0) {
		x = t;
		r += 1;
	}
	return r;
};
function rK() {
	if (this.t <= 0) return 0;
	return this.bb * (this.t - 1) + ij(this[this.t - 1] ^ (this.s & this.aW));
};
function qD(n, r) {
	var i;
	for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i];
	for (i = n - 1; i >= 0; --i) r[i] = 0;
	r.t = this.t + n;
	r.s = this.s;
};
function rg(n, r) {
	for (var i = n; i < this.t; ++i) r[i - n] = this[i];
	r.t = Math.max(this.t - n, 0);
	r.s = this.s;
};
function qZ(n, r) {
	var cO = n % this.bb;
	var gc = this.bb - cO;
	var iJ = (1 << gc) - 1;
	var cX = Math.floor(n / this.bb),
	c = (this.s << cO) & this.aW,
	i;
	for (i = this.t - 1; i >= 0; --i) {
		r[i + cX + 1] = (this[i] >> gc) | c;
		c = (this[i] & iJ) << cO;
	}
	for (i = cX - 1; i >= 0; --i) r[i] = 0;
	r[cX] = c;
	r.t = this.t + cX + 1;
	r.s = this.s;
	r.ag();
};
function sm(n, r) {
	r.s = this.s;
	var cX = Math.floor(n / this.bb);
	if (cX >= this.t) {
		r.t = 0;
		return;
	}
	var cO = n % this.bb;
	var gc = this.bb - cO;
	var iJ = (1 << cO) - 1;
	r[0] = this[cX] >> cO;
	for (var i = cX + 1; i < this.t; ++i) {
		r[i - cX - 1] |= (this[i] & iJ) << gc;
		r[i - cX] = this[i] >> cO;
	}
	if (cO > 0) r[this.t - cX - 1] |= (this.s & iJ) << gc;
	r.t = this.t - cX;
	r.ag();
};
function sk(a, r) {
	var i = 0,
	c = 0,
	m = Math.min(a.t, this.t);
	while (i < m) {
		c += this[i] - a[i];
		r[i++] = c & this.aW;
		c >>= this.bb;
	}
	if (a.t < this.t) {
		c -= a.s;
		while (i < this.t) {
			c += this[i];
			r[i++] = c & this.aW;
			c >>= this.bb;
		}
		c += this.s;
	} else {
		c += this.s;
		while (i < a.t) {
			c -= a[i];
			r[i++] = c & this.aW;
			c >>= this.bb;
		}
		c -= a.s;
	}
	r.s = (c < 0) ? -1 : 0;
	if (c < -1) r[i++] = this.dq + c;
	else if (c > 0) r[i++] = c;
	r.t = i;
	r.ag();
};
function sT(a, r) {
	var x = this.abs(),
	y = a.abs();
	var i = x.t;
	r.t = i + y.t;
	while (--i >= 0) r[i] = 0;
	for (i = 0; i < y.t; ++i) r[i + x.t] = x.dN(0, y[i], r, i, 0, x.t);
	r.s = 0;
	r.ag();
	if (this.s != a.s) O.ZERO.aj(r, r);
};
function st(r) {
	var x = this.abs();
	var i = r.t = 2 * x.t;
	while (--i >= 0) r[i] = 0;
	for (i = 0; i < x.t - 1; ++i) {
		var c = x.dN(i, x[i], r, 2 * i, 0, 1);
		if ((r[i + x.t] += x.dN(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.dq) {
			r[i + x.t] -= x.dq;
			r[i + x.t + 1] = 1;
		}
	}
	if (r.t > 0) r[r.t - 1] += x.dN(i, x[i], r, 2 * i, 0, 1);
	r.s = 0;
	r.ag();
};
function qk(m, q, r) {
	var pm = m.abs();
	if (pm.t <= 0) return;
	var pt = this.abs();
	if (pt.t < pm.t) {
		if (q != null) q.gr(0);
		if (r != null) this.eB(r);
		return;
	}
	if (r == null) r = aO();
	var y = aO(),
	pq = this.s,
	ms = m.s;
	var hj = this.bb - ij(pm[pm.t - 1]);
	if (hj > 0) {
		pm.fB(hj, y);
		pt.fB(hj, r);
	} else {
		pm.eB(y);
		pt.eB(r);
	}
	var cE = y.t;
	var ik = y[cE - 1];
	if (ik == 0) return;
	var nN = ik * (1 << this.oK) + ((cE > 1) ? y[cE - 2] >> this.oM: 0);
	var xG = this.wY / nN,
	yn = (1 << this.oK) / nN,
	e = 1 << this.oM;
	var i = r.t,
	j = i - cE,
	t = (q == null) ? aO() : q;
	y.gG(j, t);
	if (r.az(t) >= 0) {
		r[r.t++] = 1;
		r.aj(t, r);
	}
	O.ONE.gG(cE, t);
	t.aj(y, y);
	while (y.t < cE) y[y.t++] = 0;
	while (--j >= 0) {
		var jL = (r[--i] == ik) ? this.aW: Math.floor(r[i] * xG + (r[i - 1] + e) * yn);
		if ((r[i] += y.dN(0, jL, r, j, 0, cE)) < jL) {
			y.gG(j, t);
			r.aj(t, r);
			while (r[i] < --jL) r.aj(t, r);
		}
	}
	if (q != null) {
		r.gk(cE, q);
		if (pq != ms) O.ZERO.aj(q, q);
	}
	r.t = cE;
	r.ag();
	if (hj > 0) r.aD(hj, r);
	if (pq < 0) O.ZERO.aj(r, r);
};
function sD(a) {
	var r = aO();
	this.abs().ey(a, null, r);
	if (this.s < 0 && r.az(O.ZERO) > 0) a.aj(r, r);
	return r;
};
function ew(m) {
	this.m = m;
};
function rS(x) {
	if (x.s < 0 || x.az(this.m) >= 0) return x.dn(this.m);
	else return x;
};
function sS(x) {
	return x;
};
function sj(x) {
	x.ey(this.m, null, x);
};
function rZ(x, y, r) {
	x.fW(y, r);
	this.reduce(r);
};
function rF(x, r) {
	x.gL(r);
	this.reduce(r);
};
ew.prototype.convert = rS;
ew.prototype.revert = sS;
ew.prototype.reduce = sj;
ew.prototype.eb = rZ;
ew.prototype.cL = rF;
function rm() {
	if (this.t < 1) return 0;
	var x = this[0];
	if ((x & 1) == 0) return 0;
	var y = x & 3;
	y = (y * (2 - (x & 0xf) * y)) & 0xf;
	y = (y * (2 - (x & 0xff) * y)) & 0xff;
	y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff;
	y = (y * (2 - x * y % this.dq)) % this.dq;
	return (y > 0) ? this.dq - y: -y;
};
function dY(m) {
	this.m = m;
	this.mQ = m.wc();
	this.mF = this.mQ & 0x7fff;
	this.wf = this.mQ >> 15;
	this.sL = (1 << (m.bb - 15)) - 1;
	this.yF = 2 * m.t;
};
function pf(x) {
	var r = aO();
	x.abs().gG(this.m.t, r);
	r.ey(this.m, null, r);
	if (x.s < 0 && r.az(O.ZERO) > 0) this.m.aj(r, r);
	return r;
};
function qz(x) {
	var r = aO();
	x.eB(r);
	this.reduce(r);
	return r;
};
function pN(x) {
	while (x.t <= this.yF) x[x.t++] = 0;
	for (var i = 0; i < this.m.t; ++i) {
		var j = x[i] & 0x7fff;
		var tc = (j * this.mF + (((j * this.wf + (x[i] >> 15) * this.mF) & this.sL) << 15)) & x.aW;
		j = i + this.m.t;
		x[j] += this.m.dN(0, tc, x, i, 0, this.m.t);
		while (x[j] >= x.dq) {
			x[j] -= x.dq;
			x[++j]++;
		}
	}
	x.ag();
	x.gk(this.m.t, x);
	if (x.az(this.m) >= 0) x.aj(this.m, x);
};
function qy(x, r) {
	x.gL(r);
	this.reduce(r);
};
function ov(x, y, r) {
	x.fW(y, r);
	this.reduce(r);
};
dY.prototype.convert = pf;
dY.prototype.revert = qz;
dY.prototype.reduce = pN;
dY.prototype.eb = ov;
dY.prototype.cL = qy;
function qB() {
	return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
};
function qK(e, z) {
	if (e > 0xffffffff || e < 1) return O.ONE;
	var r = aO(),
	r2 = aO(),
	g = z.convert(this),
	i = ij(e) - 1;
	g.eB(r);
	while (--i >= 0) {
		z.cL(r, r2);
		if ((e & (1 << i)) > 0) z.eb(r2, g, r);
		else {
			var t = r;
			r = r2;
			r2 = t;
		}
	}
	return z.revert(r);
};
function rO(e, m) {
	var z;
	if (e < 256 || m.cU()) z = new ew(m);
	else z = new dY(m);
	return this.exp(e, z);
};
O.prototype.eB = sN;
O.prototype.gr = qf;
O.prototype.gw = pR;
O.prototype.ag = sr;
O.prototype.gG = qD;
O.prototype.gk = rg;
O.prototype.fB = qZ;
O.prototype.aD = sm;
O.prototype.aj = sk;
O.prototype.fW = sT;
O.prototype.gL = st;
O.prototype.ey = qk;
O.prototype.wc = rm;
O.prototype.cU = qB;
O.prototype.exp = qK;
O.prototype.toString = sg;
O.prototype.fF = pF;
O.prototype.abs = rG;
O.prototype.az = uq;
O.prototype.ho = rK;
O.prototype.dn = sD;
O.prototype.mk = rO;
O.ZERO = dV(0);
O.ONE = dV(1);
function uy() {
	var r = aO();
	this.eB(r);
	return r;
};
function sO() {
	if (this.s < 0) {
		if (this.t == 1) return this[0] - this.dq;
		else if (this.t == 0) return - 1;
	} else if (this.t == 1) return this[0];
	else if (this.t == 0) return 0;
	return ((this[1] & ((1 << (32 - this.bb)) - 1)) << this.bb) | this[0];
};
function ss() {
	return (this.t == 0) ? this.s: (this[0] << 24) >> 24;
};
function sY() {
	return (this.t == 0) ? this.s: (this[0] << 16) >> 16;
};
function sb(r) {
	return Math.floor(Math.LN2 * this.bb / Math.log(r));
};
function si() {
	if (this.s < 0) return - 1;
	else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
	else return 1;
};
function rI(b) {
	if (b == null) b = 10;
	if (this.dh() == 0 || b < 2 || b > 36) return "0";
	var cs = this.lL(b);
	var a = Math.pow(b, cs);
	var d = dV(a),
	y = aO(),
	z = aO(),
	r = "";
	this.ey(d, y, z);
	while (y.dh() > 0) {
		r = (a + z.hy()).toString(b).substr(1) + r;
		y.ey(d, y, z);
	}
	return z.hy().toString(b) + r;
};
function qP(s, b) {
	this.gr(0);
	if (b == null) b = 10;
	var cs = this.lL(b);
	var d = Math.pow(b, cs),
	eP = false,
	j = 0,
	w = 0;
	for (var i = 0; i < s.length; ++i) {
		var x = mE(s, i);
		if (x < 0) {
			if (s.charAt(i) == "-" && this.dh() == 0) eP = true;
			continue;
		}
		w = b * w + x;
		if (++j >= cs) {
			this.oa(d);
			this.eD(w, 0);
			j = 0;
			w = 0;
		}
	}
	if (j > 0) {
		this.oa(Math.pow(b, j));
		this.eD(w, 0);
	}
	if (eP) O.ZERO.aj(this, this);
};
function qW(a, b, c) {
	if ("number" == typeof b) {
		if (a < 2) this.gr(1);
		else {
			this.ki(a, c);
			if (!this.lZ(a - 1)) this.J(O.ONE.shiftLeft(a - 1), jC, this);
			if (this.cU()) this.eD(1, 0);
			while (!this.gJ(b)) {
				this.eD(2, 0);
				if (this.ho() > a) this.aj(O.ONE.shiftLeft(a - 1), this);
			}
		}
	} else {
		var x = new Array(),
		t = a & 7;
		x.length = (a >> 3) + 1;
		b.lp(x);
		if (t > 0) x[0] &= ((1 << t) - 1);
		else x[0] = 0;
		this.gw(x, 256);
	}
};
function rJ() {
	var i = this.t,
	r = new Array();
	r[0] = this.s;
	var p = this.bb - (i * this.bb) % 8,
	d,
	k = 0;
	if (i-->0) {
		if (p < this.bb && (d = this[i] >> p) != (this.s & this.aW) >> p) r[k++] = d | (this.s << (this.bb - p));
		while (i >= 0) {
			if (p < 8) {
				d = (this[i] & ((1 << p) - 1)) << (8 - p);
				d |= this[--i] >> (p += this.bb - 8);
			} else {
				d = (this[i] >> (p -= 8)) & 0xff;
				if (p <= 0) {
					p += this.bb; --i;
				}
			}
			if ((d & 0x80) != 0) d |= -256;
			if (k == 0 && (this.s & 0x80) != (d & 0x80))++k;
			if (k > 0 || d != this.s) r[k++] = d;
		}
	}
	return r;
};
function tA(a) {
	return (this.az(a) == 0);
};
function bQ(a) {
	return (this.az(a) < 0) ? this: a;
};
function rz(a) {
	return (this.az(a) > 0) ? this: a;
};
function pZ(a, ej, r) {
	var i, f, m = Math.min(a.t, this.t);
	for (i = 0; i < m; ++i) r[i] = ej(this[i], a[i]);
	if (a.t < this.t) {
		f = a.s & this.aW;
		for (i = m; i < this.t; ++i) r[i] = ej(this[i], f);
		r.t = this.t;
	} else {
		f = this.s & this.aW;
		for (i = m; i < a.t; ++i) r[i] = ej(f, a[i]);
		r.t = a.t;
	}
	r.s = ej(this.s, a.s);
	r.ag();
};
function ri(x, y) {
	return x & y;
};
function sM(a) {
	var r = aO();
	this.J(a, ri, r);
	return r;
};
function jC(x, y) {
	return x | y;
};
function qI(a) {
	var r = aO();
	this.J(a, jC, r);
	return r;
};
function oz(x, y) {
	return x ^ y;
};
function sC(a) {
	var r = aO();
	this.J(a, oz, r);
	return r;
};
function oS(x, y) {
	return x & ~y;
};
function sU(a) {
	var r = aO();
	this.J(a, oS, r);
	return r;
};
function qc() {
	var r = aO();
	for (var i = 0; i < this.t; ++i) r[i] = this.aW & ~this[i];
	r.t = this.t;
	r.s = ~this.s;
	return r;
};
function rv(n) {
	var r = aO();
	if (n < 0) this.aD( - n, r);
	else this.fB(n, r);
	return r;
};
function sQ(n) {
	var r = aO();
	if (n < 0) this.fB( - n, r);
	else this.aD(n, r);
	return r;
};
function nB(x) {
	if (x == 0) return - 1;
	var r = 0;
	if ((x & 0xffff) == 0) {
		x >>= 16;
		r += 16;
	}
	if ((x & 0xff) == 0) {
		x >>= 8;
		r += 8;
	}
	if ((x & 0xf) == 0) {
		x >>= 4;
		r += 4;
	}
	if ((x & 3) == 0) {
		x >>= 2;
		r += 2;
	}
	if ((x & 1) == 0)++r;
	return r;
};
function sy() {
	for (var i = 0; i < this.t; ++i) if (this[i] != 0) return i * this.bb + nB(this[i]);
	if (this.s < 0) return this.t * this.bb;
	return - 1;
};
function ta(x) {
	var r = 0;
	while (x != 0) {
		x &= x - 1; ++r;
	}
	return r;
};
function rM() {
	var r = 0,
	x = this.s & this.aW;
	for (var i = 0; i < this.t; ++i) r += ta(this[i] ^ x);
	return r;
};
function sH(n) {
	var j = Math.floor(n / this.bb);
	if (j >= this.t) return (this.s != 0);
	return ((this[j] & (1 << (n % this.bb))) != 0);
};
function tk(n, ej) {
	var r = O.ONE.shiftLeft(n);
	this.J(r, ej, r);
	return r;
};
function rq(n) {
	return this.jP(n, jC);
};
function uT(n) {
	return this.jP(n, oS);
};
function tS(n) {
	return this.jP(n, oz);
};
function pO(a, r) {
	var i = 0,
	c = 0,
	m = Math.min(a.t, this.t);
	while (i < m) {
		c += this[i] + a[i];
		r[i++] = c & this.aW;
		c >>= this.bb;
	}
	if (a.t < this.t) {
		c += a.s;
		while (i < this.t) {
			c += this[i];
			r[i++] = c & this.aW;
			c >>= this.bb;
		}
		c += this.s;
	} else {
		c += this.s;
		while (i < a.t) {
			c += a[i];
			r[i++] = c & this.aW;
			c >>= this.bb;
		}
		c += a.s;
	}
	r.s = (c < 0) ? -1 : 0;
	if (c > 0) r[i++] = c;
	else if (c < -1) r[i++] = this.dq + c;
	r.t = i;
	r.ag();
};
function sX(a) {
	var r = aO();
	this.jh(a, r);
	return r;
};
function sl(a) {
	var r = aO();
	this.aj(a, r);
	return r;
};
function sV(a) {
	var r = aO();
	this.fW(a, r);
	return r;
};
function sR() {
	var r = aO();
	this.gL(r);
	return r;
};
function su(a) {
	var r = aO();
	this.ey(a, r, null);
	return r;
};
function rH(a) {
	var r = aO();
	this.ey(a, null, r);
	return r;
};
function uI(a) {
	var q = aO(),
	r = aO();
	this.ey(a, q, r);
	return new Array(q, r);
};
function qt(n) {
	this[this.t] = this.dN(0, n - 1, this, 0, 0, this.t); ++this.t;
	this.ag();
};
function qH(n, w) {
	if (n == 0) return;
	while (this.t <= w) this[this.t++] = 0;
	this[w] += n;
	while (this[w] >= this.dq) {
		this[w] -= this.dq;
		if (++w >= this.t) this[this.t++] = 0; ++this[w];
	}
};
function gR() {};
function oW(x) {
	return x;
};
function pL(x, y, r) {
	x.fW(y, r);
};
function qr(x, r) {
	x.gL(r);
};
gR.prototype.convert = oW;
gR.prototype.revert = oW;
gR.prototype.eb = pL;
gR.prototype.cL = qr;
function tg(e) {
	return this.exp(e, new gR());
};
function rs(a, n, r) {
	var i = Math.min(this.t + a.t, n);
	r.s = 0;
	r.t = i;
	while (i > 0) r[--i] = 0;
	var j;
	for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.dN(0, a[i], r, i, 0, this.t);
	for (j = Math.min(a.t, n); i < j; ++i) this.dN(0, a[i], r, i, 0, n - i);
	r.ag();
};
function rU(a, n, r) {--n;
	var i = r.t = this.t + a.t - n;
	r.s = 0;
	while (--i >= 0) r[i] = 0;
	for (i = Math.max(n - this.t, 0); i < a.t; ++i) r[this.t + i - n] = this.dN(n - i, a[i], r, 0, 0, this.t + i - n);
	r.ag();
	r.gk(1, r);
};
function dW(m) {
	this.r2 = aO();
	this.nj = aO();
	O.ONE.gG(2 * m.t, this.r2);
	this.xB = this.r2.divide(m);
	this.m = m;
};
function rC(x) {
	if (x.s < 0 || x.t > 2 * this.m.t) return x.dn(this.m);
	else if (x.az(this.m) < 0) return x;
	else {
		var r = aO();
		x.eB(r);
		this.reduce(r);
		return r;
	}
};
function sf(x) {
	return x;
};
function ru(x) {
	x.gk(this.m.t - 1, this.r2);
	if (x.t > this.m.t + 1) {
		x.t = this.m.t + 1;
		x.ag();
	}
	this.xB.yA(this.r2, this.m.t + 1, this.nj);
	this.m.yk(this.nj, this.m.t + 1, this.r2);
	while (x.az(this.r2) < 0) x.eD(1, this.m.t + 1);
	x.aj(this.r2, x);
	while (x.az(this.m) >= 0) x.aj(this.m, x);
};
function tf(x, r) {
	x.gL(r);
	this.reduce(r);
};
function sB(x, y, r) {
	x.fW(y, r);
	this.reduce(r);
};
dW.prototype.convert = rC;
dW.prototype.revert = sf;
dW.prototype.reduce = ru;
dW.prototype.eb = sB;
dW.prototype.cL = tf;
function sd(e, m) {
	var i = e.ho(),
	k,
	r = dV(1),
	z;
	if (i <= 0) return r;
	else if (i < 18) k = 1;
	else if (i < 48) k = 3;
	else if (i < 144) k = 4;
	else if (i < 768) k = 5;
	else k = 6;
	if (i < 8) z = new ew(m);
	else if (m.cU()) z = new dW(m);
	else z = new dY(m);
	var g = new Array(),
	n = 3,
	fY = k - 1,
	jt = (1 << k) - 1;
	g[1] = z.convert(this);
	if (k > 1) {
		var oi = aO();
		z.cL(g[1], oi);
		while (n <= jt) {
			g[n] = aO();
			z.eb(oi, g[n - 2], g[n]);
			n += 2;
		}
	}
	var j = e.t - 1,
	w, nC = true,
	r2 = aO(),
	t;
	i = ij(e[j]) - 1;
	while (j >= 0) {
		if (i >= fY) w = (e[j] >> (i - fY)) & jt;
		else {
			w = (e[j] & ((1 << (i + 1)) - 1)) << (fY - i);
			if (j > 0) w |= e[j - 1] >> (this.bb + i - fY);
		}
		n = k;
		while ((w & 1) == 0) {
			w >>= 1; --n;
		}
		if ((i -= n) < 0) {
			i += this.bb; --j;
		}
		if (nC) {
			g[w].eB(r);
			nC = false;
		} else {
			while (n > 1) {
				z.cL(r, r2);
				z.cL(r2, r);
				n -= 2;
			}
			if (n > 0) z.cL(r, r2);
			else {
				t = r;
				r = r2;
				r2 = t;
			}
			z.eb(r2, g[w], r);
		}
		while (j >= 0 && (e[j] & (1 << i)) == 0) {
			z.cL(r, r2);
			t = r;
			r = r2;
			r2 = t;
			if (--i < 0) {
				i = this.bb - 1; --j;
			}
		}
	}
	return z.revert(r);
};
function rV(a) {
	var x = (this.s < 0) ? this.fF() : this.clone();
	var y = (a.s < 0) ? a.fF() : a.clone();
	if (x.az(y) < 0) {
		var t = x;
		x = y;
		y = t;
	}
	var i = x.cg(),
	g = y.cg();
	if (g < 0) return x;
	if (i < g) g = i;
	if (g > 0) {
		x.aD(g, x);
		y.aD(g, y);
	}
	while (x.dh() > 0) {
		if ((i = x.cg()) > 0) x.aD(i, x);
		if ((i = y.cg()) > 0) y.aD(i, y);
		if (x.az(y) >= 0) {
			x.aj(y, x);
			x.aD(1, x);
		} else {
			y.aj(x, y);
			y.aD(1, y);
		}
	}
	if (g > 0) y.fB(g, y);
	return y;
};
function pW(n) {
	if (n <= 0) return 0;
	var d = this.dq % n,
	r = (this.s < 0) ? n - 1 : 0;
	if (this.t > 0) if (d == 0) r = this[0] % n;
	else for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n;
	return r;
};
function sG(m) {
	var he = m.cU();
	if ((this.cU() && he) || m.dh() == 0) return O.ZERO;
	var u = m.clone(),
	v = this.clone();
	var a = dV(1),
	b = dV(0),
	c = dV(0),
	d = dV(1);
	while (u.dh() != 0) {
		while (u.cU()) {
			u.aD(1, u);
			if (he) {
				if (!a.cU() || !b.cU()) {
					a.jh(this, a);
					b.aj(m, b);
				}
				a.aD(1, a);
			} else if (!b.cU()) b.aj(m, b);
			b.aD(1, b);
		}
		while (v.cU()) {
			v.aD(1, v);
			if (he) {
				if (!c.cU() || !d.cU()) {
					c.jh(this, c);
					d.aj(m, d);
				}
				c.aD(1, c);
			} else if (!d.cU()) d.aj(m, d);
			d.aD(1, d);
		}
		if (u.az(v) >= 0) {
			u.aj(v, u);
			if (he) a.aj(c, a);
			b.aj(d, b);
		} else {
			v.aj(u, v);
			if (he) c.aj(a, c);
			d.aj(b, d);
		}
	}
	if (v.az(O.ONE) != 0) return O.ZERO;
	if (d.az(m) >= 0) return d.cK(m);
	if (d.dh() < 0) d.jh(m, d);
	else return d;
	if (d.dh() < 0) return d.add(m);
	else return d;
};
var dR = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var wN = (1 << 26) / dR[dR.length - 1];
function rY(t) {
	var i, x = this.abs();
	if (x.t == 1 && x[0] <= dR[dR.length - 1]) {
		for (i = 0; i < dR.length; ++i) if (x[0] == dR[i]) return true;
		return false;
	}
	if (x.cU()) return false;
	i = 1;
	while (i < dR.length) {
		var m = dR[i],
		j = i + 1;
		while (j < dR.length && m < wN) m *= dR[j++];
		m = x.wt(m);
		while (i < j) if (m % dR[i++] == 0) return false;
	}
	return x.vn(t);
};
function pM(t) {
	var gd = this.cK(O.ONE);
	var k = gd.cg();
	if (k <= 0) return false;
	var r = gd.sq(k);
	t = (t + 1) >> 1;
	if (t > dR.length) t = dR.length;
	var a = aO();
	for (var i = 0; i < t; ++i) {
		a.gr(dR[Math.floor(Math.random() * dR.length)]);
		var y = a.hZ(r, this);
		if (y.az(O.ONE) != 0 && y.az(gd) != 0) {
			var j = 1;
			while (j++<k && y.az(gd) != 0) {
				y = y.mk(2, this);
				if (y.az(O.ONE) == 0) return false;
			}
			if (y.az(gd) != 0) return false;
		}
	}
	return true;
};
O.prototype.lL = sb;
O.prototype.tj = rI;
O.prototype.wq = qP;
O.prototype.ki = qW;
O.prototype.J = pZ;
O.prototype.jP = tk;
O.prototype.jh = pO;
O.prototype.oa = qt;
O.prototype.eD = qH;
O.prototype.yk = rs;
O.prototype.yA = rU;
O.prototype.wt = pW;
O.prototype.vn = pM;
O.prototype.clone = uy;
O.prototype.hy = sO;
O.prototype.AI = ss;
O.prototype.yL = sY;
O.prototype.dh = si;
O.prototype.ti = rJ;
O.prototype.zD = tA;
O.prototype.min = bQ;
O.prototype.max = rz;
O.prototype.and = sM;
O.prototype.ct = qI;
O.prototype.xor = sC;
O.prototype.xR = sU;
O.prototype.not = qc;
O.prototype.shiftLeft = rv;
O.prototype.sq = sQ;
O.prototype.cg = sy;
O.prototype.zj = rM;
O.prototype.lZ = sH;
O.prototype.Ae = rq;
O.prototype.AA = uT;
O.prototype.xs = tS;
O.prototype.add = sX;
O.prototype.cK = sl;
O.prototype.multiply = sV;
O.prototype.divide = su;
O.prototype.Af = rH;
O.prototype.zA = uI;
O.prototype.hZ = sd;
O.prototype.ja = sG;
O.prototype.pow = tg;
O.prototype.hG = rV;
O.prototype.gJ = rY;
O.prototype.square = sR;
function bw(bS, r) {
	return new O(bS, r);
};
function yW(s, n) {
	var bk = "";
	var i = 0;
	while (i + n < s.length) {
		bk += s.substring(i, i + n) + "\n";
		i += n;
	}
	return bk + s.substring(i, s.length);
};
function zi(b) {
	if (b < 0x10) return "0" + b.toString(16);
	else return b.toString(16);
};
function pE(s, n) {
	if (n < s.length + 11) {
		alert("Message too long for RSA");
		return null;
	}
	var dj = new Array();
	var i = s.length - 1;
	while (i >= 0 && n > 0) {
		var c = s.charCodeAt(i--);
		if (c < 128) {
			dj[--n] = c;
		} else if ((c > 127) && (c < 2048)) {
			dj[--n] = (c & 63) | 128;
			dj[--n] = (c >> 6) | 192;
		} else {
			dj[--n] = (c & 63) | 128;
			dj[--n] = ((c >> 6) & 63) | 128;
			dj[--n] = (c >> 12) | 224;
		}
	}
	dj[--n] = 0;
	var fs = new js();
	var x = new Array();
	while (n > 2) {
		x[0] = 0;
		while (x[0] == 0) fs.lp(x);
		dj[--n] = x[0];
	}
	dj[--n] = 2;
	dj[--n] = 0;
	return new O(dj);
};
function oaep_mgf1_arr(seed, aG, hash) {
	var mask = '',
	i = 0;
	while (mask.length < aG) {
		mask += hash(String.fromCharCode.apply(String, seed.concat([(i & 0xff000000) >> 24, (i & 0x00ff0000) >> 16, (i & 0x0000ff00) >> 8, i & 0x000000ff])));
		i += 1;
	}
	return mask;
};
function oaep_pad(s, n, hash, hashLen) {
	var MD = aF.crypto.MessageDigest;
	var Util = aF.crypto.Util;
	var algName = null;
	if (!hash) hash = "sha1";
	if (typeof hash === "string") {
		algName = MD.getCanonicalAlgName(hash);
		hashLen = MD.getHashLength(algName);
		hash = function(s) {
			return hextorstr(Util.hashString(s, algName));
		};
	}
	if (s.length + 2 * hashLen + 2 > n) {
		throw "Message too long for RSA";
	}
	var PS = '',
	i;
	for (i = 0; i < n - s.length - 2 * hashLen - 2; i += 1) {
		PS += '\x00';
	}
	var bb = hash('') + PS + '\x01' + s;
	var seed = new Array(hashLen);
	new js().lp(seed);
	var dbMask = oaep_mgf1_arr(seed, bb.length, hash);
	var maskedDB = [];
	for (i = 0; i < bb.length; i += 1) {
		maskedDB[i] = bb.charCodeAt(i) ^ dbMask.charCodeAt(i);
	}
	var seedMask = oaep_mgf1_arr(maskedDB, seed.length, hash);
	var maskedSeed = [0];
	for (i = 0; i < seed.length; i += 1) {
		maskedSeed[i + 1] = seed[i] ^ seedMask.charCodeAt(i);
	}
	return new O(maskedSeed.concat(maskedDB));
};
function ae() {
	this.n = null;
	this.e = 0;
	this.d = null;
	this.p = null;
	this.q = null;
	this.ca = null;
	this.dK = null;
	this.dr = null;
};
function qu(N, E) {
	this.isPublic = true;
	if (typeof N !== "string") {
		this.n = N;
		this.e = E;
	} else if (N != null && E != null && N.length > 0 && E.length > 0) {
		this.n = bw(N, 16);
		this.e = parseInt(E, 16);
	} else alert("Invalid RSA public key");
};
function ql(x) {
	return x.mk(this.e, this.n);
};
function pv(text) {
	var m = pE(text, (this.n.ho() + 7) >> 3);
	if (m == null) return null;
	var c = this.xa(m);
	if (c == null) return null;
	var h = c.toString(16);
	if ((h.length & 1) == 0) return h;
	else return "0" + h;
};
function RSAEncryptOAEP(text, hash, hashLen) {
	var m = oaep_pad(text, (this.n.ho() + 7) >> 3, hash, hashLen);
	if (m == null) return null;
	var c = this.xa(m);
	if (c == null) return null;
	var h = c.toString(16);
	if ((h.length & 1) == 0) return h;
	else return "0" + h;
};
ae.prototype.xa = ql;
ae.prototype.AU = qu;
ae.prototype.bZ = pv;
ae.prototype.encryptOAEP = RSAEncryptOAEP;
ae.prototype.type = "RSA";
var fZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var mR = "=";
function nM(h) {
	var i;
	var c;
	var bk = "";
	for (i = 0; i + 3 <= h.length; i += 3) {
		c = parseInt(h.substring(i, i + 3), 16);
		bk += fZ.charAt(c >> 6) + fZ.charAt(c & 63);
	}
	if (i + 1 == h.length) {
		c = parseInt(h.substring(i, i + 1), 16);
		bk += fZ.charAt(c << 2);
	} else if (i + 2 == h.length) {
		c = parseInt(h.substring(i, i + 2), 16);
		bk += fZ.charAt(c >> 2) + fZ.charAt((c & 3) << 4);
	}
	if (mR) while ((bk.length & 3) > 0) bk += mR;
	return bk;
};
function kI(s) {
	var bk = "";
	var i;
	var k = 0;
	var eY;
	var v;
	for (i = 0; i < s.length; ++i) {
		if (s.charAt(i) == mR) break;
		v = fZ.indexOf(s.charAt(i));
		if (v < 0) continue;
		if (k == 0) {
			bk += dE(v >> 2);
			eY = v & 3;
			k = 1;
		} else if (k == 1) {
			bk += dE((eY << 2) | (v >> 4));
			eY = v & 0xf;
			k = 2;
		} else if (k == 2) {
			bk += dE(eY);
			bk += dE(v >> 2);
			eY = v & 3;
			k = 3;
		} else {
			bk += dE((eY << 2) | (v >> 4));
			bk += dE(v & 0xf);
			k = 0;
		}
	}
	if (k == 1) bk += dE(eY << 2);
	return bk;
};
function Ag(s) {
	var h = kI(s);
	var i;
	var a = new Array();
	for (i = 0; 2 * i < h.length; ++i) {
		a[i] = parseInt(h.substring(2 * i, 2 * i + 2), 16);
	}
	return a;
};
var AM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var iI = new Array( - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
function aB(bS) {
	var jj, hF, fG, eR;
	var i, aG, out;
	aG = bS.length;
	i = 0;
	out = "";
	while (i < aG) {
		do {
			jj = iI[bS.charCodeAt(i++) & 0xff];
		} while ( i < aG && jj == - 1 );
		if (jj == -1) break;
		do {
			hF = iI[bS.charCodeAt(i++) & 0xff];
		} while ( i < aG && hF == - 1 );
		if (hF == -1) break;
		out += String.fromCharCode((jj << 2) | ((hF & 0x30) >> 4));
		do {
			fG = bS.charCodeAt(i++) & 0xff;
			if (fG == 61) return out;
			fG = iI[fG];
		} while ( i < aG && fG == - 1 );
		if (fG == -1) break;
		out += String.fromCharCode(((hF & 0XF) << 4) | ((fG & 0x3C) >> 2));
		do {
			eR = bS.charCodeAt(i++) & 0xff;
			if (eR == 61) return out;
			eR = iI[eR];
		} while ( i < aG && eR == - 1 );
		if (eR == -1) break;
		out += String.fromCharCode(((fG & 0x03) << 6) | eR);
	}
	return out;
};
function encodeArr(aN) {
	var bS = "";
	for (var i = 0; i < aN.length; i++) {
		var tmp = aN[i].toString(16);
		if (tmp.length == 1) {
			tmp = "0" + tmp;
		}
		bS += tmp;
	}
	return bS.toUpperCase();
};
function _string2Bin2(bS) {
	var result = [];
	for (var i = 0; i < bS.length; i++) {
		var x = bS.charCodeAt(i);
		result.push(x);
	}
	return result;
};
function Base642() {
	_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	this.ei = function(input, te) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		if (te) {
			output = [];
			while (i < input.length) {
				enc1 = _keyStr.indexOf(input.charAt(i++));
				enc2 = _keyStr.indexOf(input.charAt(i++));
				enc3 = _keyStr.indexOf(input.charAt(i++));
				enc4 = _keyStr.indexOf(input.charAt(i++));
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
				output.push(chr1);
				if (enc3 != 64) {
					output.push(chr2);
				}
				if (enc4 != 64) {
					output.push(chr3);
				}
			}
			return output;
		} else {
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			while (i < input.length) {
				enc1 = _keyStr.indexOf(input.charAt(i++));
				enc2 = _keyStr.indexOf(input.charAt(i++));
				enc3 = _keyStr.indexOf(input.charAt(i++));
				enc4 = _keyStr.indexOf(input.charAt(i++));
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
				output = output + String.fromCharCode(chr1);
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
			}
		}
		return encodeArr(_string2Bin2(output));
	}
};
var aX = aX || (function(Math, undefined) {
	var create = Object.create || (function() {
		function F() {};
		return function(bA) {
			var fl;
			F.prototype = bA;
			fl = new F();
			F.prototype = null;
			return fl;
		};
	} ());
	var C = {};
	var bC = C.bf = {};
	var Base = bC.Base = (function() {
		return {
			extend: function(fj) {
				var fl = create(this);
				if (fj) {
					fl.jT(fj);
				}
				if (!fl.hasOwnProperty('aV') || this.aV === fl.aV) {
					fl.aV = function() {
						fl.ro.aV.apply(this, arguments);
					};
				}
				fl.aV.prototype = fl;
				fl.ro = this;
				return fl;
			},
			create: function() {
				var kf = this.extend();
				kf.aV.apply(kf, arguments);
				return kf;
			},
			aV: function() {},
			jT: function(gY) {
				for (var propertyName in gY) {
					if (gY.hasOwnProperty(propertyName)) {
						this[propertyName] = gY[propertyName];
					}
				}
				if (gY.hasOwnProperty('toString')) {
					this.toString = gY.toString;
				}
			},
			clone: function() {
				return this.aV.prototype.extend(this);
			}
		};
	} ());
	var bd = bC.bd = Base.extend({
		aV: function(bq, aI) {
			bq = this.bq = bq || [];
			if (aI != undefined) {
				this.aI = aI;
			} else {
				this.aI = bq.length * 4;
			}
		},
		toString: function(vX) {
			return (vX || cJ).stringify(this);
		},
		concat: function(aH) {
			var mg = this.bq;
			var ng = aH.bq;
			var jo = this.aI;
			var jJ = aH.aI;
			this.ag();
			if (jo % 4) {
				for (var i = 0; i < jJ; i++) {
					var so = (ng[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
					mg[(jo + i) >>> 2] |= so << (24 - ((jo + i) % 4) * 8);
				}
			} else {
				for (var i = 0; i < jJ; i += 4) {
					mg[(jo + i) >>> 2] = ng[i >>> 2];
				}
			}
			this.aI += jJ;
			return this;
		},
		ag: function() {
			var bq = this.bq;
			var aI = this.aI;
			bq[aI >>> 2] &= 0xffffffff << (32 - (aI % 4) * 8);
			bq.length = Math.ceil(aI / 4);
		},
		clone: function() {
			var clone = Base.clone.call(this);
			clone.bq = this.bq.slice(0);
			return clone;
		},
		random: function(eE) {
			var bq = [];
			var r = (function(eH) {
				var eH = eH;
				var iH = 0x3ade68b1;
				var mask = 0xffffffff;
				return function() {
					iH = (0x9069 * (iH & 0xFFFF) + (iH >> 0x10)) & mask;
					eH = (0x4650 * (eH & 0xFFFF) + (eH >> 0x10)) & mask;
					var result = ((iH << 0x10) + eH) & mask;
					result /= 0x100000000;
					result += 0.5;
					return result * (Math.random() > .5 ? 1 : -1);
				}
			});
			for (var i = 0,
			mt; i < eE; i += 4) {
				var mz = r((mt || Math.random()) * 0x100000000);
				mt = mz() * 0x3ade67b7;
				bq.push((mz() * 0x100000000) | 0);
			}
			return new bd.aV(bq, eE);
		}
	});
	var ck = C.bJ = {};
	var cJ = ck.cJ = {
		stringify: function(aH) {
			var bq = aH.bq;
			var aI = aH.aI;
			var jm = [];
			for (var i = 0; i < aI; i++) {
				var iY = (bq[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
				jm.push((iY >>> 4).toString(16));
				jm.push((iY & 0x0f).toString(16));
			}
			return jm.join('');
		},
		parse: function(oX) {
			var nU = oX.length;
			var bq = [];
			for (var i = 0; i < nU; i += 2) {
				bq[i >>> 3] |= parseInt(oX.substr(i, 2), 16) << (24 - (i % 8) * 4);
			}
			return new bd.aV(bq, nU / 2);
		}
	};
	var lq = ck.lq = {
		stringify: function(aH) {
			var bq = aH.bq;
			var aI = aH.aI;
			var mw = [];
			for (var i = 0; i < aI; i++) {
				var iY = (bq[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
				mw.push(String.fromCharCode(iY));
			}
			return mw.join('');
		},
		parse: function(mK) {
			var mn = mK.length;
			var bq = [];
			for (var i = 0; i < mn; i++) {
				bq[i >>> 2] |= (mK.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
			}
			return new bd.aV(bq, mn);
		}
	};
	var hh = ck.hh = {
		stringify: function(aH) {
			try {
				return decodeURIComponent(escape(lq.stringify(aH)));
			} catch(e) {
				throw new Error('Malformed UTF-8 data');
			}
		},
		parse: function(ox) {
			return lq.parse(unescape(encodeURIComponent(ox)));
		}
	};
	var fk = bC.fk = Base.extend({
		reset: function() {
			this.hs = new bd.aV();
			this.qY = 0;
		},
		ji: function(data) {
			if (typeof data == 'string') {
				data = hh.parse(data);
			}
			this.hs.concat(data);
			this.qY += data.aI;
		},
		gq: function(wx) {
			var data = this.hs;
			var jk = data.bq;
			var gF = data.aI;
			var bB = this.bB;
			var cq = bB * 4;
			var gD = gF / cq;
			if (wx) {
				gD = Math.ceil(gD);
			} else {
				gD = Math.max((gD | 0) - this.lN, 0);
			}
			var iO = gD * bB;
			var nu = Math.min(iO * 4, gF);
			if (iO) {
				for (var offset = 0; offset < iO; offset += bB) {
					this.kq(jk, offset);
				}
				var rj = jk.splice(0, iO);
				data.aI -= nu;
			}
			return new bd.aV(rj, nu);
		},
		clone: function() {
			var clone = Base.clone.call(this);
			clone.hs = this.hs.clone();
			return clone;
		},
		lN: 0
	});
	var wh = bC.wh = fk.extend({
		aL: Base.extend(),
		aV: function(aL) {
			this.aL = this.aL.extend(aL);
			this.reset();
		},
		reset: function() {
			fk.reset.call(this);
			this.jf();
		},
		update: function(jw) {
			this.ji(jw);
			this.gq();
			return this;
		},
		fU: function(jw) {
			if (jw) {
				this.ji(jw);
			}
			var hash = this.kG();
			return hash;
		},
		bB: 512 / 32,
		jx: function(jM) {
			return function(message, aL) {
				return new jM.aV(aL).fU(message);
			};
		},
		zS: function(jM) {
			return function(message, key) {
				return new cw.AP.aV(jM, key).fU(message);
			};
		}
	});
	var cw = C.jg = {};
	return C;
} (Math)); (function() {
	var C = aX;
	var bC = C.bf;
	var bd = bC.bd;
	var wh = bC.wh;
	var cw = C.jg;
	var W = [];
	var SHA1 = cw.SHA1 = wh.extend({
		jf: function() {
			this._hash = new bd.aV([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
		},
		kq: function(M, offset) {
			var H = this._hash.bq;
			var a = H[0];
			var b = H[1];
			var c = H[2];
			var d = H[3];
			var e = H[4];
			for (var i = 0; i < 80; i++) {
				if (i < 16) {
					W[i] = M[offset + i] | 0;
				} else {
					var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
					W[i] = (n << 1) | (n >>> 31);
				}
				var t = ((a << 5) | (a >>> 27)) + e + W[i];
				if (i < 20) {
					t += ((b & c) | (~b & d)) + 0x5a827999;
				} else if (i < 40) {
					t += (b ^ c ^ d) + 0x6ed9eba1;
				} else if (i < 60) {
					t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
				} else {
					t += (b ^ c ^ d) - 0x359d3e2a;
				}
				e = d;
				d = c;
				c = (b << 30) | (b >>> 2);
				b = a;
				a = t;
			}
			H[0] = (H[0] + a) | 0;
			H[1] = (H[1] + b) | 0;
			H[2] = (H[2] + c) | 0;
			H[3] = (H[3] + d) | 0;
			H[4] = (H[4] + e) | 0;
		},
		kG: function() {
			var data = this.hs;
			var jk = data.bq;
			var nBitsTotal = this.qY * 8;
			var nBitsLeft = data.aI * 8;
			jk[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
			jk[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
			jk[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
			data.aI = jk.length * 4;
			this.gq();
			return this._hash;
		},
		clone: function() {
			var clone = wh.clone.call(this);
			clone._hash = this._hash.clone();
			return clone;
		}
	});
	C.SHA1 = wh.jx(SHA1);
	C.HmacSHA1 = wh.zS(SHA1);
} ());
function lh() {
	this.i = 0;
	this.j = 0;
	this.S = new Array();
};
function rW(key) {
	var i, j, t;
	for (i = 0; i < 256; ++i) this.S[i] = i;
	j = 0;
	for (i = 0; i < 256; ++i) {
		j = (j + this.S[i] + key[i % key.length]) & 255;
		t = this.S[i];
		this.S[i] = this.S[j];
		this.S[j] = t;
	}
	this.i = 0;
	this.j = 0;
};
function sF() {
	var t;
	this.i = (this.i + 1) & 255;
	this.j = (this.j + this.S[this.i]) & 255;
	t = this.S[this.i];
	this.S[this.i] = this.S[this.j];
	this.S[this.j] = t;
	return this.S[(t + this.S[this.i]) & 255];
};
lh.prototype.aV = rW;
lh.prototype.next = sF;
function rc() {
	return new lh();
};
var kT = 256;
var iB;
var eK;
var cS;
function rng_seed_int(x) {
	eK[cS++] ^= x & 255;
	eK[cS++] ^= (x >> 8) & 255;
	eK[cS++] ^= (x >> 16) & 255;
	eK[cS++] ^= (x >> 24) & 255;
	if (cS >= kT) cS -= kT;
};
function rng_seed_time() {
	rng_seed_int(new Date().getTime());
};
if (eK == null) {
	eK = new Array();
	cS = 0;
	var t;
	if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
		var z = window.crypto.random(32);
		for (t = 0; t < z.length; ++t) eK[cS++] = z.charCodeAt(t) & 255;
	}
	while (cS < kT) {
		t = Math.floor(65536 * Math.random());
		eK[cS++] = t >>> 8;
		eK[cS++] = t & 255;
	}
	cS = 0;
	rng_seed_time();
}
function pH() {
	if (iB == null) {
		rng_seed_time();
		iB = rc();
		iB.aV(eK);
		for (cS = 0; cS < eK.length; ++cS) eK[cS] = 0;
		cS = 0;
	}
	return iB.next();
};
function pQ(dj) {
	var i;
	for (i = 0; i < dj.length; ++i) dj[i] = pH();
};
function js() {};
js.prototype.lp = pQ;
var _RE_HEXDECONLY = new RegExp("");
_RE_HEXDECONLY.compile("[^0-9a-f]", "gi");
function _rsasign_getHexPaddedDigestInfoForString(s, ah, hashAlg) {
	var hashFunc = function(s) {
		return aF.crypto.Util.hashString(s, hashAlg);
	};
	var sHashHex = hashFunc(s);
	return aF.crypto.Util.getPaddedDigestInfoHex(sHashHex, hashAlg, ah);
};
function _zeroPaddingOfSignature(al, ho) {
	var s = "";
	var nZero = ho / 4 - al.length;
	for (var i = 0; i < nZero; i++) {
		s = s + "0";
	}
	return s + al;
};
function _rsasign_signString(s, hashAlg) {
	var hashFunc = function(s) {
		return aF.crypto.Util.hashString(s, hashAlg);
	};
	var sHashHex = hashFunc(s);
	return this.signWithMessageHash(sHashHex, hashAlg);
};
function _rsasign_signWithMessageHash(sHashHex, hashAlg) {
	var hPM = aF.crypto.Util.getPaddedDigestInfoHex(sHashHex, hashAlg, this.n.ho());
	var biPaddedMessage = bw(hPM, 16);
	var biSign = this.vi(biPaddedMessage);
	var hexSign = biSign.toString(16);
	return _zeroPaddingOfSignature(hexSign, this.n.ho());
};
function _rsasign_signStringWithSHA1(s) {
	return _rsasign_signString.call(this, s, 'sha1');
};
function _rsasign_signStringWithSHA256(s) {
	return _rsasign_signString.call(this, s, 'sha256');
};
function pss_mgf1_str(seed, aG, hash) {
	var mask = '',
	i = 0;
	while (mask.length < aG) {
		mask += hextorstr(hash(rstrtohex(seed + String.fromCharCode.apply(String, [(i & 0xff000000) >> 24, (i & 0x00ff0000) >> 16, (i & 0x0000ff00) >> 8, i & 0x000000ff]))));
		i += 1;
	}
	return mask;
};
function _rsasign_signStringPSS(s, hashAlg, sLen) {
	var hashFunc = function(sHex) {
		return aF.crypto.Util.hashHex(sHex, hashAlg);
	};
	var hHash = hashFunc(rstrtohex(s));
	if (sLen === undefined) sLen = -1;
	return this.signWithMessageHashPSS(hHash, hashAlg, sLen);
};
function _rsasign_signWithMessageHashPSS(hHash, hashAlg, sLen) {
	var mHash = hextorstr(hHash);
	var hLen = mHash.length;
	var emBits = this.n.ho() - 1;
	var emLen = Math.ceil(emBits / 8);
	var i;
	var hashFunc = function(sHex) {
		return aF.crypto.Util.hashHex(sHex, hashAlg);
	};
	if (sLen === -1 || sLen === undefined) {
		sLen = hLen;
	} else if (sLen === -2) {
		sLen = emLen - hLen - 2;
	} else if (sLen < -2) {
		throw "invalid salt length";
	}
	if (emLen < (hLen + sLen + 2)) {
		throw "data too long";
	}
	var dG = '';
	if (sLen > 0) {
		dG = new Array(sLen);
		new js().lp(dG);
		dG = String.fromCharCode.apply(String, dG);
	}
	var H = hextorstr(hashFunc(rstrtohex('\x00\x00\x00\x00\x00\x00\x00\x00' + mHash + dG)));
	var PS = [];
	for (i = 0; i < emLen - sLen - hLen - 2; i += 1) {
		PS[i] = 0x00;
	}
	var bb = String.fromCharCode.apply(String, PS) + '\x01' + dG;
	var dbMask = pss_mgf1_str(H, bb.length, hashFunc);
	var maskedDB = [];
	for (i = 0; i < bb.length; i += 1) {
		maskedDB[i] = bb.charCodeAt(i) ^ dbMask.charCodeAt(i);
	}
	var mask = (0xff00 >> (8 * emLen - emBits)) & 0xff;
	maskedDB[0] &= ~mask;
	for (i = 0; i < hLen; i++) {
		maskedDB.push(H.charCodeAt(i));
	}
	maskedDB.push(0xbc);
	return _zeroPaddingOfSignature(this.vi(new O(maskedDB)).toString(16), this.n.ho());
};
function _rsasign_getDecryptSignatureBI(biSig, fv, hE) {
	var aa = new ae();
	aa.AU(fv, hE);
	var biDecryptedSig = aa.xa(biSig);
	return biDecryptedSig;
};
function _rsasign_getHexDigestInfoFromSig(biSig, fv, hE) {
	var biDecryptedSig = _rsasign_getDecryptSignatureBI(biSig, fv, hE);
	var hDigestInfo = biDecryptedSig.toString(16).replace(/^1f+00/, '');
	return hDigestInfo;
};
function _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo) {
	for (var algName in aF.crypto.Util.DIGESTINFOHEAD) {
		var head = aF.crypto.Util.DIGESTINFOHEAD[algName];
		var aG = head.length;
		if (hDigestInfo.substring(0, aG) == head) {
			var a = [algName, hDigestInfo.substring(aG)];
			return a;
		}
	}
	return [];
};
function _rsasign_verifySignatureWithArgs(sMsg, biSig, fv, hE) {
	var hDigestInfo = _rsasign_getHexDigestInfoFromSig(biSig, fv, hE);
	var digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo);
	if (digestInfoAry.length == 0) return false;
	var algName = digestInfoAry[0];
	var diHashValue = digestInfoAry[1];
	var ff = function(s) {
		return aF.crypto.Util.hashString(s, algName);
	};
	var msgHashValue = ff(sMsg);
	return (diHashValue == msgHashValue);
};
function _rsasign_verifyHexSignatureForMessage(hSig, sMsg) {
	var biSig = bw(hSig, 16);
	var result = _rsasign_verifySignatureWithArgs(sMsg, biSig, this.n.toString(16), this.e.toString(16));
	return result;
};
function _rsasign_verifyString(sMsg, hSig) {
	hSig = hSig.replace(_RE_HEXDECONLY, '');
	hSig = hSig.replace(/[ \n]+/g, "");
	var biSig = bw(hSig, 16);
	if (biSig.ho() > this.n.ho()) return 0;
	var biDecryptedSig = this.xa(biSig);
	var hDigestInfo = biDecryptedSig.toString(16).replace(/^1f+00/, '');
	var digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo);
	if (digestInfoAry.length == 0) return false;
	var algName = digestInfoAry[0];
	var diHashValue = digestInfoAry[1];
	var ff = function(s) {
		return aF.crypto.Util.hashString(s, algName);
	};
	var msgHashValue = ff(sMsg);
	return (diHashValue == msgHashValue);
};
function _rsasign_verifyWithMessageHash(sHashHex, hSig) {
	hSig = hSig.replace(_RE_HEXDECONLY, '');
	hSig = hSig.replace(/[ \n]+/g, "");
	var biSig = bw(hSig, 16);
	if (biSig.ho() > this.n.ho()) return 0;
	var biDecryptedSig = this.xa(biSig);
	var hDigestInfo = biDecryptedSig.toString(16).replace(/^1f+00/, '');
	var digestInfoAry = _rsasign_getAlgNameAndHashFromHexDisgestInfo(hDigestInfo);
	if (digestInfoAry.length == 0) return false;
	var algName = digestInfoAry[0];
	var diHashValue = digestInfoAry[1];
	return (diHashValue == sHashHex);
};
function _rsasign_verifyStringPSS(sMsg, hSig, hashAlg, sLen) {
	var hashFunc = function(sHex) {
		return aF.crypto.Util.hashHex(sHex, hashAlg);
	};
	var hHash = hashFunc(rstrtohex(sMsg));
	if (sLen === undefined) sLen = -1;
	return this.verifyWithMessageHashPSS(hHash, hSig, hashAlg, sLen);
};
function _rsasign_verifyWithMessageHashPSS(hHash, hSig, hashAlg, sLen) {
	var biSig = new O(hSig, 16);
	if (biSig.ho() > this.n.ho()) {
		return false;
	}
	var hashFunc = function(sHex) {
		return aF.crypto.Util.hashHex(sHex, hashAlg);
	};
	var mHash = hextorstr(hHash);
	var hLen = mHash.length;
	var emBits = this.n.ho() - 1;
	var emLen = Math.ceil(emBits / 8);
	var i;
	if (sLen === -1 || sLen === undefined) {
		sLen = hLen;
	} else if (sLen === -2) {
		sLen = emLen - hLen - 2;
	} else if (sLen < -2) {
		throw "invalid salt length";
	}
	if (emLen < (hLen + sLen + 2)) {
		throw "data too long";
	}
	var em = this.xa(biSig).ti();
	for (i = 0; i < em.length; i += 1) {
		em[i] &= 0xff;
	}
	while (em.length < emLen) {
		em.unshift(0);
	}
	if (em[emLen - 1] !== 0xbc) {
		throw "encoded message does not end in 0xbc";
	}
	em = String.fromCharCode.apply(String, em);
	var maskedDB = em.substr(0, emLen - hLen - 1);
	var H = em.substr(maskedDB.length, hLen);
	var mask = (0xff00 >> (8 * emLen - emBits)) & 0xff;
	if ((maskedDB.charCodeAt(0) & mask) !== 0) {
		throw "bits beyond keysize not zero";
	}
	var dbMask = pss_mgf1_str(H, maskedDB.length, hashFunc);
	var bb = [];
	for (i = 0; i < maskedDB.length; i += 1) {
		bb[i] = maskedDB.charCodeAt(i) ^ dbMask.charCodeAt(i);
	}
	bb[0] &= ~mask;
	var checkLen = emLen - hLen - sLen - 2;
	for (i = 0; i < checkLen; i += 1) {
		if (bb[i] !== 0x00) {
			throw "leftmost octets not zero";
		}
	}
	if (bb[checkLen] !== 0x01) {
		throw "0x01 marker not found";
	}
	return H === hextorstr(hashFunc(rstrtohex('\x00\x00\x00\x00\x00\x00\x00\x00' + mHash + String.fromCharCode.apply(String, bb.slice( - sLen)))));
};
ae.prototype.signWithMessageHash = _rsasign_signWithMessageHash;
ae.prototype.signString = _rsasign_signString;
ae.prototype.signStringWithSHA1 = _rsasign_signStringWithSHA1;
ae.prototype.signStringWithSHA256 = _rsasign_signStringWithSHA256;
ae.prototype.sign = _rsasign_signString;
ae.prototype.signWithSHA1 = _rsasign_signStringWithSHA1;
ae.prototype.signWithSHA256 = _rsasign_signStringWithSHA256;
ae.prototype.signWithMessageHashPSS = _rsasign_signWithMessageHashPSS;
ae.prototype.signStringPSS = _rsasign_signStringPSS;
ae.prototype.signPSS = _rsasign_signStringPSS;
ae.SALT_LEN_HLEN = -1;
ae.SALT_LEN_MAX = -2;
ae.prototype.verifyWithMessageHash = _rsasign_verifyWithMessageHash;
ae.prototype.verifyString = _rsasign_verifyString;
ae.prototype.verifyHexSignatureForMessage = _rsasign_verifyHexSignatureForMessage;
ae.prototype.verify = _rsasign_verifyString;
ae.prototype.verifyHexSignatureForByteArrayMessage = _rsasign_verifyHexSignatureForMessage;
ae.prototype.verifyWithMessageHashPSS = _rsasign_verifyWithMessageHashPSS;
ae.prototype.verifyStringPSS = _rsasign_verifyStringPSS;
ae.prototype.verifyPSS = _rsasign_verifyStringPSS;
ae.SALT_LEN_RECOVER = -2;
var ASN1HEX = new
function() {};
ASN1HEX.getByteLengthOfL_AtObj = function(s, pos) {
	if (s.substring(pos + 2, pos + 3) != '8') return 1;
	var i = parseInt(s.substring(pos + 3, pos + 4));
	if (i == 0) return - 1;
	if (0 < i && i < 10) return i + 1;
	return - 2;
};
ASN1HEX.getHexOfL_AtObj = function(s, pos) {
	var aG = ASN1HEX.getByteLengthOfL_AtObj(s, pos);
	if (aG < 1) return '';
	return s.substring(pos + 2, pos + 2 + aG * 2);
};
ASN1HEX.getIntOfL_AtObj = function(s, pos) {
	var hLength = ASN1HEX.getHexOfL_AtObj(s, pos);
	if (hLength == '') return - 1;
	var kV;
	if (parseInt(hLength.substring(0, 1)) < 8) {
		kV = new O(hLength, 16);
	} else {
		kV = new O(hLength.substring(2), 16);
	}
	return kV.hy();
};
ASN1HEX.getStartPosOfV_AtObj = function(s, pos) {
	var l_len = ASN1HEX.getByteLengthOfL_AtObj(s, pos);
	if (l_len < 0) return l_len;
	return pos + (l_len + 1) * 2;
};
ASN1HEX.getHexOfV_AtObj = function(s, pos) {
	var pos1 = ASN1HEX.getStartPosOfV_AtObj(s, pos);
	var aG = ASN1HEX.getIntOfL_AtObj(s, pos);
	return s.substring(pos1, pos1 + aG * 2);
};
ASN1HEX.getHexOfTLV_AtObj = function(s, pos) {
	var aA = s.substr(pos, 2);
	var nl = ASN1HEX.getHexOfL_AtObj(s, pos);
	var bE = ASN1HEX.getHexOfV_AtObj(s, pos);
	return aA + nl + bE;
};
ASN1HEX.getPosOfNextSibling_AtObj = function(s, pos) {
	var pos1 = ASN1HEX.getStartPosOfV_AtObj(s, pos);
	var aG = ASN1HEX.getIntOfL_AtObj(s, pos);
	return pos1 + aG * 2;
};
ASN1HEX.getPosArrayOfChildren_AtObj = function(h, pos) {
	var a = new Array();
	var p0 = ASN1HEX.getStartPosOfV_AtObj(h, pos);
	if (h.substr(pos, 2) == "03") {
		a.push(p0 + 2);
	} else {
		a.push(p0);
	}
	var aG = ASN1HEX.getIntOfL_AtObj(h, pos);
	var p = p0;
	var k = 0;
	while (1) {
		var pNext = ASN1HEX.getPosOfNextSibling_AtObj(h, p);
		if (pNext == null || (pNext - p0 >= (aG * 2))) break;
		if (k >= 200) break;
		a.push(pNext);
		p = pNext;
		k++;
	}
	return a;
};
ASN1HEX.getNthChildIndex_AtObj = function(h, idx, nth) {
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, idx);
	return a[nth];
};
ASN1HEX.getDecendantIndexByNthList = function(h, currentIndex, nthList) {
	if (nthList.length == 0) {
		return currentIndex;
	}
	var firstNth = nthList.shift();
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, currentIndex);
	return ASN1HEX.getDecendantIndexByNthList(h, a[firstNth], nthList);
};
ASN1HEX.getDecendantHexTLVByNthList = function(h, currentIndex, nthList) {
	var idx = ASN1HEX.getDecendantIndexByNthList(h, currentIndex, nthList);
	return ASN1HEX.getHexOfTLV_AtObj(h, idx);
};
ASN1HEX.getDecendantHexVByNthList = function(h, currentIndex, nthList) {
	var idx = ASN1HEX.getDecendantIndexByNthList(h, currentIndex, nthList);
	return ASN1HEX.getHexOfV_AtObj(h, idx);
};
ASN1HEX.getVbyList = function(h, currentIndex, nthList, checkingTag) {
	var idx = ASN1HEX.getDecendantIndexByNthList(h, currentIndex, nthList);
	if (idx === undefined) {
		throw "can't find nthList object";
	}
	if (checkingTag !== undefined) {
		if (h.substr(idx, 2) != checkingTag) {
			throw "checking tag doesn't match: " + h.substr(idx, 2) + "!=" + checkingTag;
		}
	}
	return ASN1HEX.getHexOfV_AtObj(h, idx);
};
ASN1HEX.hextooidstr = function(al) {
	var pA = function(s, aG) {
		if (s.length >= aG) return s;
		return new Array(aG - s.length + 1).join('0') + s;
	};
	var a = [];
	var hex0 = al.substr(0, 2);
	var dc = parseInt(hex0, 16);
	a[0] = new String(Math.floor(dc / 40));
	a[1] = new String(dc % 40);
	var hex1 = al.substr(2);
	var b = [];
	for (var i = 0; i < hex1.length / 2; i++) {
		b.push(parseInt(hex1.substr(i * 2, 2), 16));
	}
	var c = [];
	var cbin = "";
	for (var i = 0; i < b.length; i++) {
		if (b[i] & 0x80) {
			cbin = cbin + pA((b[i] & 0x7f).toString(2), 7);
		} else {
			cbin = cbin + pA((b[i] & 0x7f).toString(2), 7);
			c.push(new String(parseInt(cbin, 2)));
			cbin = "";
		}
	}
	var s = a.join(".");
	if (c.length > 0) s = s + "." + c.join(".");
	return s;
};
ASN1HEX.dump = function(hexOrObj, flags, idx, indent) {
	var al = hexOrObj;
	if (hexOrObj instanceof aF.V.cD) al = hexOrObj.fh();
	var _skipLongHex = function(al, limitNumOctet) {
		if (al.length <= limitNumOctet * 2) {
			return al;
		} else {
			var s = al.substr(0, limitNumOctet) + "..(total " + al.length / 2 + "bytes).." + al.substr(al.length - limitNumOctet, limitNumOctet);
			return s;
		};
	};
	if (flags === undefined) flags = {
		"ommit_long_octet": 32
	};
	if (idx === undefined) idx = 0;
	if (indent === undefined) indent = "";
	var skipLongHex = flags.ommit_long_octet;
	if (al.substr(idx, 2) == "01") {
		var v = ASN1HEX.getHexOfV_AtObj(al, idx);
		if (v == "00") {
			return indent + "BOOLEAN FALSE\n";
		} else {
			return indent + "BOOLEAN TRUE\n";
		}
	}
	if (al.substr(idx, 2) == "02") {
		var v = ASN1HEX.getHexOfV_AtObj(al, idx);
		return indent + "INTEGER " + _skipLongHex(v, skipLongHex) + "\n";
	}
	if (al.substr(idx, 2) == "03") {
		var v = ASN1HEX.getHexOfV_AtObj(al, idx);
		return indent + "BITSTRING " + _skipLongHex(v, skipLongHex) + "\n";
	}
	if (al.substr(idx, 2) == "04") {
		var v = ASN1HEX.getHexOfV_AtObj(al, idx);
		if (ASN1HEX.isASN1HEX(v)) {
			var s = indent + "OCTETSTRING, encapsulates\n";
			s = s + ASN1HEX.dump(v, flags, 0, indent + "  ");
			return s;
		} else {
			return indent + "OCTETSTRING " + _skipLongHex(v, skipLongHex) + "\n";
		}
	}
	if (al.substr(idx, 2) == "05") {
		return indent + "NULL\n";
	}
	if (al.substr(idx, 2) == "06") {
		var bE = ASN1HEX.getHexOfV_AtObj(al, idx);
		var oidDot = aF.V.xU.oidHexToInt(bE);
		var iK = aF.V.qx.yJ.oid2name(oidDot);
		var oidSpc = oidDot.replace(/\./g, ' ');
		if (iK != '') {
			return indent + "ObjectIdentifier " + iK + " (" + oidSpc + ")\n";
		} else {
			return indent + "ObjectIdentifier (" + oidSpc + ")\n";
		}
	}
	if (al.substr(idx, 2) == "0c") {
		return indent + "UTF8String '" + hextoutf8(ASN1HEX.getHexOfV_AtObj(al, idx)) + "'\n";
	}
	if (al.substr(idx, 2) == "13") {
		return indent + "PrintableString '" + hextoutf8(ASN1HEX.getHexOfV_AtObj(al, idx)) + "'\n";
	}
	if (al.substr(idx, 2) == "14") {
		return indent + "TeletexString '" + hextoutf8(ASN1HEX.getHexOfV_AtObj(al, idx)) + "'\n";
	}
	if (al.substr(idx, 2) == "16") {
		return indent + "IA5String '" + hextoutf8(ASN1HEX.getHexOfV_AtObj(al, idx)) + "'\n";
	}
	if (al.substr(idx, 2) == "17") {
		return indent + "UTCTime " + hextoutf8(ASN1HEX.getHexOfV_AtObj(al, idx)) + "\n";
	}
	if (al.substr(idx, 2) == "18") {
		return indent + "GeneralizedTime " + hextoutf8(ASN1HEX.getHexOfV_AtObj(al, idx)) + "\n";
	}
	if (al.substr(idx, 2) == "30") {
		if (al.substr(idx, 4) == "3000") {
			return indent + "SEQUENCE {}\n";
		}
		var s = indent + "SEQUENCE\n";
		var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(al, idx);
		var flagsTemp = flags;
		if ((aIdx.length == 2 || aIdx.length == 3) && al.substr(aIdx[0], 2) == "06" && al.substr(aIdx[aIdx.length - 1], 2) == "04") {
			var oidHex = ASN1HEX.getHexOfV_AtObj(al, aIdx[0]);
			var oidDot = aF.V.xU.oidHexToInt(oidHex);
			var iK = aF.V.qx.yJ.oid2name(oidDot);
			var flagsClone = JSON.parse(JSON.stringify(flags));
			flagsClone.x509ExtName = iK;
			flagsTemp = flagsClone;
		}
		for (var i = 0; i < aIdx.length; i++) {
			s = s + ASN1HEX.dump(al, flagsTemp, aIdx[i], indent + "  ");
		}
		return s;
	}
	if (al.substr(idx, 2) == "31") {
		var s = indent + "SET\n";
		var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(al, idx);
		for (var i = 0; i < aIdx.length; i++) {
			s = s + ASN1HEX.dump(al, flags, aIdx[i], indent + "  ");
		}
		return s;
	}
	var bv = parseInt(al.substr(idx, 2), 16);
	if ((bv & 128) != 0) {
		var eN = bv & 31;
		if ((bv & 32) != 0) {
			var s = indent + "[" + eN + "]\n";
			var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(al, idx);
			for (var i = 0; i < aIdx.length; i++) {
				s = s + ASN1HEX.dump(al, flags, aIdx[i], indent + "  ");
			}
			return s;
		} else {
			var v = ASN1HEX.getHexOfV_AtObj(al, idx);
			if (v.substr(0, 8) == "68747470") {
				v = hextoutf8(v);
			}
			if (flags.x509ExtName === "subjectAltName" && eN == 2) {
				v = hextoutf8(v);
			}
			var s = indent + "[" + eN + "] " + v + "\n";
			return s;
		}
	}
	return indent + "UNKNOWN(" + al.substr(idx, 2) + ") " + ASN1HEX.getHexOfV_AtObj(al, idx) + "\n";
};
ASN1HEX.isASN1HEX = function(al) {
	if (al.length % 2 == 1) return false;
	var intL = ASN1HEX.getIntOfL_AtObj(al, 0);
	var tV = al.substr(0, 2);
	var lV = ASN1HEX.getHexOfL_AtObj(al, 0);
	var hVLength = al.length - tV.length - lV.length;
	if (hVLength == intL * 2) return true;
	return false;
};
function X509() {
	this.subjectPublicKeyRSA = null;
	this.subjectPublicKeyRSA_hN = null;
	this.subjectPublicKeyRSA_hE = null;
	this.al = null;
	this.getSerialNumberHex = function() {
		return ASN1HEX.getDecendantHexVByNthList(this.al, 0, [0, 1]);
	};
	this.getSignatureAlgorithmField = function() {
		var sigAlgOidHex = ASN1HEX.getDecendantHexVByNthList(this.al, 0, [0, 2, 0]);
		var sigAlgOidInt = aF.V.xU.oidHexToInt(sigAlgOidHex);
		var sigAlgName = aF.V.qx.yJ.oid2name(sigAlgOidInt);
		return sigAlgName;
	};
	this.getIssuerHex = function() {
		return ASN1HEX.getDecendantHexTLVByNthList(this.al, 0, [0, 3]);
	};
	this.getIssuerString = function() {
		return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.al, 0, [0, 3]));
	};
	this.getSubjectHex = function() {
		return ASN1HEX.getDecendantHexTLVByNthList(this.al, 0, [0, 5]);
	};
	this.getSubjectString = function() {
		return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.al, 0, [0, 5]));
	};
	this.getNotBefore = function() {
		var s = ASN1HEX.getDecendantHexVByNthList(this.al, 0, [0, 4, 0]);
		s = s.replace(/(..)/g, "%$1");
		s = decodeURIComponent(s);
		return s;
	};
	this.getNotAfter = function() {
		var s = ASN1HEX.getDecendantHexVByNthList(this.al, 0, [0, 4, 1]);
		s = s.replace(/(..)/g, "%$1");
		s = decodeURIComponent(s);
		return s;
	};
	this.readCertPEM = function(sCertPEM) {
		var hCert = X509.pemToHex(sCertPEM);
		var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
		var aa = new ae();
		aa.AU(a[0], a[1]);
		this.subjectPublicKeyRSA = aa;
		this.subjectPublicKeyRSA_hN = a[0];
		this.subjectPublicKeyRSA_hE = a[1];
		this.al = hCert;
	};
	this.readCertPEMWithoutRSAInit = function(sCertPEM) {
		var hCert = X509.pemToHex(sCertPEM);
		var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
		if (typeof this.subjectPublicKeyRSA.AU === "function") {
			this.subjectPublicKeyRSA.AU(a[0], a[1]);
		}
		this.subjectPublicKeyRSA_hN = a[0];
		this.subjectPublicKeyRSA_hE = a[1];
		this.al = hCert;
	};
	this.getInfo = function() {
		var s = "Basic Fields\n";
		s += "  serial number: " + this.getSerialNumberHex() + "\n";
		s += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n";
		s += "  issuer: " + this.getIssuerString() + "\n";
		s += "  notBefore: " + this.getNotBefore() + "\n";
		s += "  notAfter: " + this.getNotAfter() + "\n";
		s += "  subject: " + this.getSubjectString() + "\n";
		s += "  subject public key info: " + "\n";
		var pSPKI = X509.getSubjectPublicKeyInfoPosFromCertHex(this.al);
		var hSPKI = ASN1HEX.getHexOfTLV_AtObj(this.al, pSPKI);
		var keyObj = KEYUTIL.an(hSPKI, null, "pkcs8pub");
		if (keyObj instanceof ae) {
			s += "    key algorithm: RSA\n";
			s += "    n=" + keyObj.n.toString(16).substr(0, 16) + "...\n";
			s += "    e=" + keyObj.e.toString(16) + "\n";
		}
		s += "X509v3 Extensions:\n";
		var aExt = X509.getV3ExtInfoListOfCertHex(this.al);
		for (var i = 0; i < aExt.length; i++) {
			var info = aExt[i];
			var extName = aF.V.qx.yJ.oid2name(info["oid"]);
			if (extName === '') extName = info["oid"];
			var critical = '';
			if (info["critical"] === true) critical = "CRITICAL";
			s += "  " + extName + " " + critical + ":\n";
			if (extName === "basicConstraints") {
				var bc = X509.getExtBasicConstraints(this.al);
				if (bc.cA === undefined) {
					s += "    {}\n";
				} else {
					s += "    cA=true";
					if (bc.pathLen !== undefined) s += ", pathLen=" + bc.pathLen;
					s += "\n";
				}
			} else if (extName === "keyUsage") {
				s += "    " + X509.getExtKeyUsageString(this.al) + "\n";
			} else if (extName === "subjectKeyIdentifier") {
				s += "    " + X509.getExtSubjectKeyIdentifier(this.al) + "\n";
			} else if (extName === "authorityKeyIdentifier") {
				var akid = X509.getExtAuthorityKeyIdentifier(this.al);
				if (akid.kid !== undefined) s += "    kid=" + akid.kid + "\n";
			} else if (extName === "extKeyUsage") {
				var eku = X509.getExtExtKeyUsageName(this.al);
				s += "    " + eku.join(", ") + "\n";
			} else if (extName === "subjectAltName") {
				var san = X509.getExtSubjectAltName(this.al);
				s += "    " + san.join(", ") + "\n";
			} else if (extName === "cRLDistributionPoints") {
				var cdp = X509.getExtCRLDistributionPointsURI(this.al);
				s += "    " + cdp + "\n";
			} else if (extName === "authorityInfoAccess") {
				var aia = X509.getExtAIAInfo(this.al);
				if (aia.ocsp !== undefined) s += "    ocsp: " + aia.ocsp.join(",") + "\n";
				if (aia.caissuer !== undefined) s += "    caissuer: " + aia.caissuer.join(",") + "\n";
			}
		}
		s += "signature algorithm: " + X509.getSignatureAlgorithmName(this.al) + "\n";
		s += "signature: " + X509.getSignatureValueHex(this.al).substr(0, 16) + "...\n";
		return s;
	};
};
X509.pemToBase64 = function(sCertPEM) {
	var s = sCertPEM;
	s = s.replace("-----BEGIN CERTIFICATE-----", "");
	s = s.replace("-----END CERTIFICATE-----", "");
	s = s.replace(/[ \n]+/g, "");
	return s;
};
X509.pemToHex = function(sCertPEM) {
	var b64Cert = X509.pemToBase64(sCertPEM);
	var hCert = kI(b64Cert);
	return hCert;
};
X509.getSubjectPublicKeyPosFromCertHex = function(hCert) {
	var pInfo = X509.getSubjectPublicKeyInfoPosFromCertHex(hCert);
	if (pInfo == -1) return - 1;
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pInfo);
	if (a.length != 2) return - 1;
	var pBitString = a[1];
	if (hCert.substring(pBitString, pBitString + 2) != '03') return - 1;
	var pBitStringV = ASN1HEX.getStartPosOfV_AtObj(hCert, pBitString);
	if (hCert.substring(pBitStringV, pBitStringV + 2) != '00') return - 1;
	return pBitStringV + 2;
};
X509.getSubjectPublicKeyInfoPosFromCertHex = function(hCert) {
	var pTbsCert = ASN1HEX.getStartPosOfV_AtObj(hCert, 0);
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pTbsCert);
	if (a.length < 1) return - 1;
	if (hCert.substring(a[0], a[0] + 10) == "a003020102") {
		if (a.length < 6) return - 1;
		return a[6];
	} else {
		if (a.length < 5) return - 1;
		return a[5];
	}
};
X509.getPublicKeyHexArrayFromCertHex = function(hCert) {
	var p = X509.getSubjectPublicKeyPosFromCertHex(hCert);
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, p);
	if (a.length != 2) return [];
	var fv = ASN1HEX.getHexOfV_AtObj(hCert, a[0]);
	var hE = ASN1HEX.getHexOfV_AtObj(hCert, a[1]);
	if (fv != null && hE != null) {
		return [fv, hE];
	} else {
		return [];
	}
};
X509.getHexTbsCertificateFromCert = function(hCert) {
	var pTbsCert = ASN1HEX.getStartPosOfV_AtObj(hCert, 0);
	return pTbsCert;
};
X509.getPublicKeyHexArrayFromCertPEM = function(sCertPEM) {
	var hCert = X509.pemToHex(sCertPEM);
	var a = X509.getPublicKeyHexArrayFromCertHex(hCert);
	return a;
};
X509.hex2dn = function(al, idx) {
	if (idx === undefined) idx = 0;
	if (al.substr(idx, 2) !== "30") throw "malformed DN";
	var a = new Array();
	var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(al, idx);
	for (var i = 0; i < aIdx.length; i++) {
		a.push(X509.hex2rdn(al, aIdx[i]));
	}
	a = a.map(function(s) {
		return s.replace("/", "\\/");
	});
	return "/" + a.join("/");
};
X509.hex2rdn = function(al, idx) {
	if (idx === undefined) idx = 0;
	if (al.substr(idx, 2) !== "31") throw "malformed RDN";
	var a = new Array();
	var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(al, idx);
	for (var i = 0; i < aIdx.length; i++) {
		a.push(X509.hex2attrTypeValue(al, aIdx[i]));
	}
	a = a.map(function(s) {
		return s.replace("+", "\\+");
	});
	return a.join("+");
};
X509.hex2attrTypeValue = function(al, idx) {
	if (idx === undefined) idx = 0;
	if (al.substr(idx, 2) !== "30") throw "malformed attribute type and value";
	var aIdx = ASN1HEX.getPosArrayOfChildren_AtObj(al, idx);
	if (aIdx.length !== 2 || al.substr(aIdx[0], 2) !== "06")"malformed attribute type and value";
	var oidHex = ASN1HEX.getHexOfV_AtObj(al, aIdx[0]);
	var oidInt = aF.V.xU.oidHexToInt(oidHex);
	var atype = aF.V.qx.yJ.oid2atype(oidInt);
	var bE = ASN1HEX.getHexOfV_AtObj(al, aIdx[1]);
	var rawV = hextorstr(bE);
	return atype + "=" + rawV;
};
X509.getPublicKeyFromCertPEM = function(sCertPEM) {
	var info = X509.getPublicKeyInfoPropOfCertPEM(sCertPEM);
	if (info.algoid == "2a864886f70d010101") {
		var aRSA = KEYUTIL.parsePublicRawRSAKeyHex(info.keyhex);
		var key = new ae();
		key.AU(aRSA.n, aRSA.e);
		return key;
	} else if (info.algoid == "2a8648ce3d0201") {
		var curveName = aF.crypto.yJ.oidhex2name[info.algparam];
		var key = new aF.crypto.ECDSA({
			'curve': curveName,
			'info': info.keyhex
		});
		key.setPublicKeyHex(info.keyhex);
		return key;
	} else if (info.algoid == "2a8648ce380401") {
		var p = ASN1HEX.getVbyList(info.algparam, 0, [0], "02");
		var q = ASN1HEX.getVbyList(info.algparam, 0, [1], "02");
		var g = ASN1HEX.getVbyList(info.algparam, 0, [2], "02");
		var y = ASN1HEX.getHexOfV_AtObj(info.keyhex, 0);
		y = y.substr(2);
		var key = new aF.crypto.DSA();
		key.AU(new O(p, 16), new O(q, 16), new O(g, 16), new O(y, 16));
		return key;
	} else {
		throw "unsupported key";
	}
};
X509.getPublicKeyInfoPropOfCertPEM = function(sCertPEM) {
	var result = {};
	result.algparam = null;
	var hCert = X509.pemToHex(sCertPEM);
	var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, 0);
	if (a1.length != 3) throw "malformed X.509 certificate PEM (code:001)";
	if (hCert.substr(a1[0], 2) != "30") throw "malformed X.509 certificate PEM (code:002)";
	var a2 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a1[0]);
	var idx_spi = 6;
	if (hCert.substr(a2[0], 2) !== "a0") idx_spi = 5;
	if (a2.length < idx_spi + 1) throw "malformed X.509 certificate PEM (code:003)";
	var a3 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a2[idx_spi]);
	if (a3.length != 2) throw "malformed X.509 certificate PEM (code:004)";
	var a4 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a3[0]);
	if (a4.length != 2) throw "malformed X.509 certificate PEM (code:005)";
	result.algoid = ASN1HEX.getHexOfV_AtObj(hCert, a4[0]);
	if (hCert.substr(a4[1], 2) == "06") {
		result.algparam = ASN1HEX.getHexOfV_AtObj(hCert, a4[1]);
	} else if (hCert.substr(a4[1], 2) == "30") {
		result.algparam = ASN1HEX.getHexOfTLV_AtObj(hCert, a4[1]);
	}
	if (hCert.substr(a3[1], 2) != "03") throw "malformed X.509 certificate PEM (code:006)";
	var unusedBitAndKeyHex = ASN1HEX.getHexOfV_AtObj(hCert, a3[1]);
	result.keyhex = unusedBitAndKeyHex.substr(2);
	return result;
};
X509.getPublicKeyInfoPosOfCertHEX = function(hCert) {
	var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, 0);
	if (a1.length != 3) throw "malformed X.509 certificate PEM (code:001)";
	if (hCert.substr(a1[0], 2) != "30") throw "malformed X.509 certificate PEM (code:002)";
	var a2 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a1[0]);
	if (a2.length < 7) throw "malformed X.509 certificate PEM (code:003)";
	return a2[6];
};
X509.getV3ExtInfoListOfCertHex = function(hCert) {
	var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, 0);
	if (a1.length != 3) throw "malformed X.509 certificate PEM (code:001)";
	if (hCert.substr(a1[0], 2) != "30") throw "malformed X.509 certificate PEM (code:002)";
	var a2 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a1[0]);
	if (a2.length < 8) throw "malformed X.509 certificate PEM (code:003)";
	if (hCert.substr(a2[7], 2) != "a3") throw "malformed X.509 certificate PEM (code:004)";
	var a3 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a2[7]);
	if (a3.length != 1) throw "malformed X.509 certificate PEM (code:005)";
	if (hCert.substr(a3[0], 2) != "30") throw "malformed X.509 certificate PEM (code:006)";
	var a4 = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, a3[0]);
	var numExt = a4.length;
	var aInfo = new Array(numExt);
	for (var i = 0; i < numExt; i++) {
		aInfo[i] = X509.getV3ExtItemInfo_AtObj(hCert, a4[i]);
	}
	return aInfo;
};
X509.getV3ExtItemInfo_AtObj = function(hCert, pos) {
	var info = {};
	info.posTLV = pos;
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pos);
	if (a.length != 2 && a.length != 3) throw "malformed X.509v3 Ext (code:001)";
	if (hCert.substr(a[0], 2) != "06") throw "malformed X.509v3 Ext (code:002)";
	var valueHex = ASN1HEX.getHexOfV_AtObj(hCert, a[0]);
	info.dI = ASN1HEX.hextooidstr(valueHex);
	info.critical = false;
	if (a.length == 3) info.critical = true;
	var posExtV = a[a.length - 1];
	if (hCert.substr(posExtV, 2) != "04") throw "malformed X.509v3 Ext (code:003)";
	info.posV = ASN1HEX.getStartPosOfV_AtObj(hCert, posExtV);
	return info;
};
X509.getHexOfTLV_V3ExtValue = function(hCert, oidOrName) {
	var pos = X509.getPosOfTLV_V3ExtValue(hCert, oidOrName);
	if (pos == -1) return null;
	return ASN1HEX.getHexOfTLV_AtObj(hCert, pos);
};
X509.getHexOfV_V3ExtValue = function(hCert, oidOrName) {
	var pos = X509.getPosOfTLV_V3ExtValue(hCert, oidOrName);
	if (pos == -1) return null;
	return ASN1HEX.getHexOfV_AtObj(hCert, pos);
};
X509.getPosOfTLV_V3ExtValue = function(hCert, oidOrName) {
	var dI = oidOrName;
	if (!oidOrName.match(/^[0-9.]+$/)) dI = aF.V.qx.yJ.name2oid(oidOrName);
	if (dI == '') return - 1;
	var infoList = X509.getV3ExtInfoListOfCertHex(hCert);
	for (var i = 0; i < infoList.length; i++) {
		var info = infoList[i];
		if (info.dI == dI) return info.posV;
	}
	return - 1;
};
X509.getExtBasicConstraints = function(hCert) {
	var hBC = X509.getHexOfV_V3ExtValue(hCert, "basicConstraints");
	if (hBC === null) return null;
	if (hBC === '') return {};
	if (hBC === '0101ff') return {
		"cA": true
	};
	if (hBC.substr(0, 8) === '0101ff02') {
		var pathLexHex = ASN1HEX.getHexOfV_AtObj(hBC, 6);
		var pathLen = parseInt(pathLexHex, 16);
		return {
			"cA": true,
			"pathLen": pathLen
		};
	}
	throw "unknown error";
};
X509.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];
X509.getExtKeyUsageBin = function(hCert) {
	var hKeyUsage = X509.getHexOfV_V3ExtValue(hCert, "keyUsage");
	if (hKeyUsage == '') return '';
	if (hKeyUsage.length % 2 != 0 || hKeyUsage.length <= 2) throw "malformed key usage value";
	var cW = parseInt(hKeyUsage.substr(0, 2));
	var bKeyUsage = parseInt(hKeyUsage.substr(2), 16).toString(2);
	return bKeyUsage.substr(0, bKeyUsage.length - cW);
};
X509.getExtKeyUsageString = function(hCert) {
	var bKeyUsage = X509.getExtKeyUsageBin(hCert);
	var a = new Array();
	for (var i = 0; i < bKeyUsage.length; i++) {
		if (bKeyUsage.substr(i, 1) == "1") a.push(X509.KEYUSAGE_NAME[i]);
	}
	return a.join(",");
};
X509.getExtSubjectKeyIdentifier = function(hCert) {
	var hSKID = X509.getHexOfV_V3ExtValue(hCert, "subjectKeyIdentifier");
	return hSKID;
};
X509.getExtAuthorityKeyIdentifier = function(hCert) {
	var result = {};
	var hAKID = X509.getHexOfTLV_V3ExtValue(hCert, "authorityKeyIdentifier");
	if (hAKID === null) return null;
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(hAKID, 0);
	for (var i = 0; i < a.length; i++) {
		if (hAKID.substr(a[i], 2) === "80") result.kid = ASN1HEX.getHexOfV_AtObj(hAKID, a[i]);
	}
	return result;
};
X509.getExtExtKeyUsageName = function(hCert) {
	var result = new Array();
	var h = X509.getHexOfTLV_V3ExtValue(hCert, "extKeyUsage");
	if (h === null) return null;
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, 0);
	for (var i = 0; i < a.length; i++) {
		var al = ASN1HEX.getHexOfV_AtObj(h, a[i]);
		var dI = aF.V.xU.oidHexToInt(al);
		var name = aF.V.qx.yJ.oid2name(dI);
		result.push(name);
	}
	return result;
};
X509.getExtSubjectAltName = function(hCert) {
	var result = new Array();
	var h = X509.getHexOfTLV_V3ExtValue(hCert, "subjectAltName");
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, 0);
	for (var i = 0; i < a.length; i++) {
		if (h.substr(a[i], 2) === "82") {
			var fqdn = hextoutf8(ASN1HEX.getHexOfV_AtObj(h, a[i]));
			result.push(fqdn);
		}
	}
	return result;
};
X509.getExtCRLDistributionPointsURI = function(hCert) {
	var result = new Array();
	var h = X509.getHexOfTLV_V3ExtValue(hCert, "cRLDistributionPoints");
	var a = ASN1HEX.getPosArrayOfChildren_AtObj(h, 0);
	for (var i = 0; i < a.length; i++) {
		var hDP = ASN1HEX.getHexOfTLV_AtObj(h, a[i]);
		var a1 = ASN1HEX.getPosArrayOfChildren_AtObj(hDP, 0);
		for (var j = 0; j < a1.length; j++) {
			if (hDP.substr(a1[j], 2) === "a0") {
				var hDPN = ASN1HEX.getHexOfV_AtObj(hDP, a1[j]);
				if (hDPN.substr(0, 2) === "a0") {
					var hFullName = ASN1HEX.getHexOfV_AtObj(hDPN, 0);
					if (hFullName.substr(0, 2) === "86") {
						var hURI = ASN1HEX.getHexOfV_AtObj(hFullName, 0);
						var uri = hextoutf8(hURI);
						result.push(uri);
					}
				}
			}
		}
	}
	return result;
};
X509.getExtAIAInfo = function(hCert) {
	var result = {};
	result.ocsp = [];
	result.caissuer = [];
	var pos1 = X509.getPosOfTLV_V3ExtValue(hCert, "authorityInfoAccess");
	if (pos1 == -1) return null;
	if (hCert.substr(pos1, 2) != "30") throw "malformed AIA Extn Value";
	var posAccDescList = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, pos1);
	for (var i = 0; i < posAccDescList.length; i++) {
		var p = posAccDescList[i];
		var posAccDescChild = ASN1HEX.getPosArrayOfChildren_AtObj(hCert, p);
		if (posAccDescChild.length != 2) throw "malformed AccessDescription of AIA Extn";
		var pOID = posAccDescChild[0];
		var pName = posAccDescChild[1];
		if (ASN1HEX.getHexOfV_AtObj(hCert, pOID) == "2b06010505073001") {
			if (hCert.substr(pName, 2) == "86") {
				result.ocsp.push(hextoutf8(ASN1HEX.getHexOfV_AtObj(hCert, pName)));
			}
		}
		if (ASN1HEX.getHexOfV_AtObj(hCert, pOID) == "2b06010505073002") {
			if (hCert.substr(pName, 2) == "86") {
				result.caissuer.push(hextoutf8(ASN1HEX.getHexOfV_AtObj(hCert, pName)));
			}
		}
	}
	return result;
};
X509.getSignatureAlgorithmName = function(hCert) {
	var sigAlgOidHex = ASN1HEX.getDecendantHexVByNthList(hCert, 0, [1, 0]);
	var sigAlgOidInt = aF.V.xU.oidHexToInt(sigAlgOidHex);
	var sigAlgName = aF.V.qx.yJ.oid2name(sigAlgOidInt);
	return sigAlgName;
};
X509.getSignatureValueHex = function(hCert) {
	var h = ASN1HEX.getDecendantHexVByNthList(hCert, 0, [2]);
	if (h.substr(0, 2) !== "00") throw "can't get signature value";
	return h.substr(2);
};
X509.getSerialNumberHex = function(hCert) {
	return ASN1HEX.getDecendantHexVByNthList(hCert, 0, [0, 1]);
};
if (typeof aF == "undefined" || !aF) aF = {};
if (typeof aF.crypto == "undefined" || !aF.crypto) aF.crypto = {};
aF.crypto.Util = new
function() {
	this.DIGESTINFOHEAD = {
		'sha1': "3021300906052b0e03021a05000414",
		'sha224': "302d300d06096086480165030402040500041c",
		'sha256': "3031300d060960864801650304020105000420",
		'sha384': "3041300d060960864801650304020205000430",
		'sha512': "3051300d060960864801650304020305000440",
		'md2': "3020300c06082a864886f70d020205000410",
		'md5': "3020300c06082a864886f70d020505000410",
		'ripemd160': "3021300906052b2403020105000414",
	};
	this.DEFAULTPROVIDER = {
		'md5': 'cryptojs',
		'sha1': 'cryptojs',
		'sha224': 'cryptojs',
		'sha256': 'cryptojs',
		'sha384': 'cryptojs',
		'sha512': 'cryptojs',
		'ripemd160': 'cryptojs',
		'hmacmd5': 'cryptojs',
		'hmacsha1': 'cryptojs',
		'hmacsha224': 'cryptojs',
		'hmacsha256': 'cryptojs',
		'hmacsha384': 'cryptojs',
		'hmacsha512': 'cryptojs',
		'hmacripemd160': 'cryptojs',
		'MD5withRSA': 'cryptojs/jsrsa',
		'SHA1withRSA': 'cryptojs/jsrsa',
		'SHA224withRSA': 'cryptojs/jsrsa',
		'SHA256withRSA': 'cryptojs/jsrsa',
		'SHA384withRSA': 'cryptojs/jsrsa',
		'SHA512withRSA': 'cryptojs/jsrsa',
		'RIPEMD160withRSA': 'cryptojs/jsrsa',
		'MD5withECDSA': 'cryptojs/jsrsa',
		'SHA1withECDSA': 'cryptojs/jsrsa',
		'SHA224withECDSA': 'cryptojs/jsrsa',
		'SHA256withECDSA': 'cryptojs/jsrsa',
		'SHA384withECDSA': 'cryptojs/jsrsa',
		'SHA512withECDSA': 'cryptojs/jsrsa',
		'RIPEMD160withECDSA': 'cryptojs/jsrsa',
		'SHA1withDSA': 'cryptojs/jsrsa',
		'SHA224withDSA': 'cryptojs/jsrsa',
		'SHA256withDSA': 'cryptojs/jsrsa',
		'MD5withRSAandMGF1': 'cryptojs/jsrsa',
		'SHA1withRSAandMGF1': 'cryptojs/jsrsa',
		'SHA224withRSAandMGF1': 'cryptojs/jsrsa',
		'SHA256withRSAandMGF1': 'cryptojs/jsrsa',
		'SHA384withRSAandMGF1': 'cryptojs/jsrsa',
		'SHA512withRSAandMGF1': 'cryptojs/jsrsa',
		'RIPEMD160withRSAandMGF1': 'cryptojs/jsrsa',
	};
	this.CRYPTOJSMESSAGEDIGESTNAME = {
		'md5': aX.jg.AF,
		'sha1': aX.jg.SHA1,
		'sha224': aX.jg.SHA224,
		'sha256': aX.jg.SHA256,
		'sha384': aX.jg.SHA384,
		'sha512': aX.jg.SHA512,
		'ripemd160': aX.jg.RIPEMD160
	};
	this.getDigestInfoHex = function(hHash, alg) {
		if (typeof this.DIGESTINFOHEAD[alg] == "undefined") throw "alg not supported in Util.DIGESTINFOHEAD: " + alg;
		return this.DIGESTINFOHEAD[alg] + hHash;
	};
	this.getPaddedDigestInfoHex = function(hHash, alg, ah) {
		var hDigestInfo = this.getDigestInfoHex(hHash, alg);
		var pmStrLen = ah / 4;
		if (hDigestInfo.length + 22 > pmStrLen) throw "key is too short for SigAlg: keylen=" + ah + "," + alg;
		var hHead = "0001";
		var hTail = "00" + hDigestInfo;
		var hMid = "";
		var fLen = pmStrLen - hHead.length - hTail.length;
		for (var i = 0; i < fLen; i += 2) {
			hMid += "ff";
		}
		var hPaddedMessage = hHead + hMid + hTail;
		return hPaddedMessage;
	};
	this.hashString = function(s, alg) {
		var md = new aF.crypto.MessageDigest({
			'alg': alg
		});
		return md.digestString(s);
	};
	this.hashHex = function(sHex, alg) {
		var md = new aF.crypto.MessageDigest({
			'alg': alg
		});
		return md.digestHex(sHex);
	};
	this.sha1 = function(s) {
		var md = new aF.crypto.MessageDigest({
			'alg': 'sha1',
			'prov': 'cryptojs'
		});
		return md.digestString(s);
	};
	this.sha256 = function(s) {
		var md = new aF.crypto.MessageDigest({
			'alg': 'sha256',
			'prov': 'cryptojs'
		});
		return md.digestString(s);
	};
	this.sha256Hex = function(s) {
		var md = new aF.crypto.MessageDigest({
			'alg': 'sha256',
			'prov': 'cryptojs'
		});
		return md.digestHex(s);
	};
	this.sha512 = function(s) {
		var md = new aF.crypto.MessageDigest({
			'alg': 'sha512',
			'prov': 'cryptojs'
		});
		return md.digestString(s);
	};
	this.sha512Hex = function(s) {
		var md = new aF.crypto.MessageDigest({
			'alg': 'sha512',
			'prov': 'cryptojs'
		});
		return md.digestHex(s);
	};
};
aF.crypto.Util.md5 = function(s) {
	var md = new aF.crypto.MessageDigest({
		'alg': 'md5',
		'prov': 'cryptojs'
	});
	return md.digestString(s);
};
aF.crypto.Util.ripemd160 = function(s) {
	var md = new aF.crypto.MessageDigest({
		'alg': 'ripemd160',
		'prov': 'cryptojs'
	});
	return md.digestString(s);
};
aF.crypto.Util.SECURERANDOMGEN = new js();
aF.crypto.Util.getRandomHexOfNbytes = function(n) {
	var dj = new Array(n);
	aF.crypto.Util.SECURERANDOMGEN.lp(dj);
	return BAtohex(dj);
};
aF.crypto.Util.getRandomBigIntegerOfNbytes = function(n) {
	return new O(aF.crypto.Util.getRandomHexOfNbytes(n), 16);
};
aF.crypto.Util.getRandomHexOfNbits = function(n) {
	var n_remainder = n % 8;
	var n_quotient = (n - n_remainder) / 8;
	var dj = new Array(n_quotient + 1);
	aF.crypto.Util.SECURERANDOMGEN.lp(dj);
	dj[0] = (((255 << n_remainder) & 255) ^ 255) & dj[0];
	return BAtohex(dj);
};
aF.crypto.Util.getRandomBigIntegerOfNbits = function(n) {
	return new O(aF.crypto.Util.getRandomHexOfNbits(n), 16);
};
aF.crypto.Util.getRandomBigIntegerZeroToMax = function(biMax) {
	var bitLenMax = biMax.ho();
	while (1) {
		var biRand = aF.crypto.Util.getRandomBigIntegerOfNbits(bitLenMax);
		if (biMax.az(biRand) != -1) return biRand;
	}
};
aF.crypto.Util.getRandomBigIntegerMinToMax = function(biMin, biMax) {
	var flagCompare = biMin.az(biMax);
	if (flagCompare == 1) throw "biMin is greater than biMax";
	if (flagCompare == 0) return biMin;
	var biDiff = biMax.cK(biMin);
	var biRand = aF.crypto.Util.getRandomBigIntegerZeroToMax(biDiff);
	return biRand.add(biMin);
};
aF.crypto.MessageDigest = function(aC) {
	var md = null;
	var algName = null;
	var provName = null;
	this.setAlgAndProvider = function(alg, prov) {
		alg = aF.crypto.MessageDigest.getCanonicalAlgName(alg);
		if (alg !== null && prov === undefined) prov = aF.crypto.Util.DEFAULTPROVIDER[alg];
		if (':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(alg) != -1 && prov == 'cryptojs') {
			try {
				this.md = aF.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[alg].create();
			} catch(ex) {
				throw "setAlgAndProvider hash alg set fail alg=" + alg + "/" + ex;
			}
			this.updateString = function(bS) {
				this.md.update(bS);
			};
			this.updateHex = function(al) {
				var wHex = aX.bJ.cJ.parse(al);
				this.md.update(wHex);
			};
			this.digest = function() {
				var hash = this.md.fU();
				return hash.toString(aX.bJ.cJ);
			};
			this.digestString = function(bS) {
				this.updateString(bS);
				return this.digest();
			};
			this.digestHex = function(al) {
				this.updateHex(al);
				return this.digest();
			};
		}
		if (':sha256:'.indexOf(alg) != -1 && prov == 'sjcl') {
			try {
				this.md = new sjcl.hash.sha256();
			} catch(ex) {
				throw "setAlgAndProvider hash alg set fail alg=" + alg + "/" + ex;
			}
			this.updateString = function(bS) {
				this.md.update(bS);
			};
			this.updateHex = function(al) {
				var baHex = sjcl.codec.al.toBits(al);
				this.md.update(baHex);
			};
			this.digest = function() {
				var hash = this.md.fU();
				return sjcl.codec.al.fromBits(hash);
			};
			this.digestString = function(bS) {
				this.updateString(bS);
				return this.digest();
			};
			this.digestHex = function(al) {
				this.updateHex(al);
				return this.digest();
			};
		}
	};
	this.updateString = function(bS) {
		throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
	};
	this.updateHex = function(al) {
		throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
	};
	this.digest = function() {
		throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
	};
	this.digestString = function(bS) {
		throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
	};
	this.digestHex = function(al) {
		throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
	};
	if (aC !== undefined) {
		if (aC['alg'] !== undefined) {
			this.algName = aC['alg'];
			if (aC['prov'] === undefined) this.provName = aF.crypto.Util.DEFAULTPROVIDER[this.algName];
			this.setAlgAndProvider(this.algName, this.provName);
		}
	}
};
aF.crypto.MessageDigest.getCanonicalAlgName = function(alg) {
	if (typeof alg === "string") {
		alg = alg.toLowerCase();
		alg = alg.replace(/-/, '');
	}
	return alg;
};
aF.crypto.MessageDigest.getHashLength = function(alg) {
	var MD = aF.crypto.MessageDigest;
	var alg2 = MD.getCanonicalAlgName(alg);
	if (MD.HASHLENGTH[alg2] === undefined) throw "not supported algorithm: " + alg;
	return MD.HASHLENGTH[alg2];
};
aF.crypto.MessageDigest.HASHLENGTH = {
	'md5': 16,
	'sha1': 20,
	'sha224': 28,
	'sha256': 32,
	'sha384': 48,
	'sha512': 64,
	'ripemd160': 20
};
aF.crypto.Mac = function(aC) {
	var mac = null;
	var pass = null;
	var algName = null;
	var provName = null;
	var algProv = null;
	this.setAlgAndProvider = function(alg, prov) {
		alg = alg.toLowerCase();
		if (alg == null) alg = "hmacsha1";
		alg = alg.toLowerCase();
		if (alg.substr(0, 4) != "hmac") {
			throw "setAlgAndProvider unsupported HMAC alg: " + alg;
		}
		if (prov === undefined) prov = aF.crypto.Util.DEFAULTPROVIDER[alg];
		this.algProv = alg + "/" + prov;
		var hashAlg = alg.substr(4);
		if (':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(hashAlg) != -1 && prov == 'cryptojs') {
			try {
				var mdObj = aF.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[hashAlg];
				this.mac = aX.jg.AP.create(mdObj, this.pass);
			} catch(ex) {
				throw "setAlgAndProvider hash alg set fail hashAlg=" + hashAlg + "/" + ex;
			}
			this.updateString = function(bS) {
				this.mac.update(bS);
			};
			this.updateHex = function(al) {
				var wHex = aX.bJ.cJ.parse(al);
				this.mac.update(wHex);
			};
			this.doFinal = function() {
				var hash = this.mac.fU();
				return hash.toString(aX.bJ.cJ);
			};
			this.doFinalString = function(bS) {
				this.updateString(bS);
				return this.doFinal();
			};
			this.doFinalHex = function(al) {
				this.updateHex(al);
				return this.doFinal();
			};
		}
	};
	this.updateString = function(bS) {
		throw "updateString(str) not supported for this alg/prov: " + this.algProv;
	};
	this.updateHex = function(al) {
		throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
	};
	this.doFinal = function() {
		throw "digest() not supported for this alg/prov: " + this.algProv;
	};
	this.doFinalString = function(bS) {
		throw "digestString(str) not supported for this alg/prov: " + this.algProv;
	};
	this.doFinalHex = function(al) {
		throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
	};
	this.setPassword = function(pass) {
		if (typeof pass == 'string') {
			var hPass = pass;
			if (pass.length % 2 == 1 || !pass.match(/^[0-9A-Fa-f]+$/)) {
				hPass = rstrtohex(pass);
			}
			this.pass = aX.bJ.cJ.parse(hPass);
			return;
		}
		if (typeof pass != 'object') throw "KJUR.crypto.Mac unsupported password type: " + pass;
		var hPass = null;
		if (pass.al !== undefined) {
			if (pass.al.length % 2 != 0 || !pass.al.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + pass.al;
			hPass = pass.al;
		}
		if (pass.utf8 !== undefined) hPass = utf8tohex(pass.utf8);
		if (pass.rstr !== undefined) hPass = rstrtohex(pass.rstr);
		if (pass.xt !== undefined) hPass = kI(pass.xt);
		if (pass.b64u !== undefined) hPass = b64utohex(pass.b64u);
		if (hPass == null) throw "KJUR.crypto.Mac unsupported password type: " + pass;
		this.pass = aX.bJ.cJ.parse(hPass);
	};
	if (aC !== undefined) {
		if (aC.pass !== undefined) {
			this.setPassword(aC.pass);
		}
		if (aC.alg !== undefined) {
			this.algName = aC.alg;
			if (aC['prov'] === undefined) this.provName = aF.crypto.Util.DEFAULTPROVIDER[this.algName];
			this.setAlgAndProvider(this.algName, this.provName);
		}
	}
};
aF.crypto.Signature = function(aC) {
	var prvKey = null;
	var pubKey = null;
	var md = null;
	var sig = null;
	var algName = null;
	var provName = null;
	var algProvName = null;
	var mdAlgName = null;
	var pubkeyAlgName = null;
	var state = null;
	var pssSaltLen = -1;
	var initParams = null;
	var sHashHex = null;
	var hDigestInfo = null;
	var hPaddedDigestInfo = null;
	var hSign = null;
	this._setAlgNames = function() {
		var matchResult = this.algName.match(/^(.+)with(.+)$/);
		if (matchResult) {
			this.mdAlgName = matchResult[1].toLowerCase();
			this.pubkeyAlgName = matchResult[2].toLowerCase();
		}
	};
	this._zeroPaddingOfSignature = function(al, ho) {
		var s = "";
		var nZero = ho / 4 - al.length;
		for (var i = 0; i < nZero; i++) {
			s = s + "0";
		}
		return s + al;
	};
	this.setAlgAndProvider = function(alg, prov) {
		this._setAlgNames();
		if (prov != 'cryptojs/jsrsa') throw "provider not supported: " + prov;
		if (':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(this.mdAlgName) != -1) {
			try {
				this.md = new aF.crypto.MessageDigest({
					'alg': this.mdAlgName
				});
			} catch(ex) {
				throw "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + ex;
			}
			this.aV = function(keyparam, pass) {
				var keyObj = null;
				try {
					if (pass === undefined) {
						keyObj = KEYUTIL.an(keyparam);
					} else {
						keyObj = KEYUTIL.an(keyparam, pass);
					}
				} catch(ex) {
					throw "init failed:" + ex;
				}
				if (keyObj.isPrivate === true) {
					this.prvKey = keyObj;
					this.state = "SIGN";
				} else if (keyObj.isPublic === true) {
					this.pubKey = keyObj;
					this.state = "VERIFY";
				} else {
					throw "init failed.:" + keyObj;
				}
			};
			this.initSign = function(aC) {
				if (typeof aC['ecprvhex'] == 'string' && typeof aC['eccurvename'] == 'string') {
					this.ecprvhex = aC['ecprvhex'];
					this.eccurvename = aC['eccurvename'];
				} else {
					this.prvKey = aC;
				}
				this.state = "SIGN";
			};
			this.initVerifyByPublicKey = function(aC) {
				if (typeof aC['ecpubhex'] == 'string' && typeof aC['eccurvename'] == 'string') {
					this.ecpubhex = aC['ecpubhex'];
					this.eccurvename = aC['eccurvename'];
				} else if (aC instanceof aF.crypto.ECDSA) {
					this.pubKey = aC;
				} else if (aC instanceof ae) {
					this.pubKey = aC;
				}
				this.state = "VERIFY";
			};
			this.initVerifyByCertificatePEM = function(certPEM) {
				var qx = new X509();
				qx.readCertPEM(certPEM);
				this.pubKey = qx.subjectPublicKeyRSA;
				this.state = "VERIFY";
			};
			this.updateString = function(bS) {
				this.md.updateString(bS);
			};
			this.updateHex = function(al) {
				this.md.updateHex(al);
			};
			this.sign = function() {
				this.sHashHex = this.md.digest();
				if (typeof this.ecprvhex != "undefined" && typeof this.eccurvename != "undefined") {
					var ec = new aF.crypto.ECDSA({
						'curve': this.eccurvename
					});
					this.hSign = ec.signHex(this.sHashHex, this.ecprvhex);
				} else if (this.prvKey instanceof ae && this.pubkeyAlgName == "rsaandmgf1") {
					this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);
				} else if (this.prvKey instanceof ae && this.pubkeyAlgName == "rsa") {
					this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);
				} else if (this.prvKey instanceof aF.crypto.ECDSA) {
					this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
				} else if (this.prvKey instanceof aF.crypto.DSA) {
					this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
				} else {
					throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
				}
				return this.hSign;
			};
			this.signString = function(bS) {
				this.updateString(bS);
				return this.sign();
			};
			this.signHex = function(al) {
				this.updateHex(al);
				return this.sign();
			};
			this.verify = function(hSigVal) {
				this.sHashHex = this.md.digest();
				if (typeof this.ecpubhex != "undefined" && typeof this.eccurvename != "undefined") {
					var ec = new aF.crypto.ECDSA({
						curve: this.eccurvename
					});
					return ec.verifyHex(this.sHashHex, hSigVal, this.ecpubhex);
				} else if (this.pubKey instanceof ae && this.pubkeyAlgName == "rsaandmgf1") {
					return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, hSigVal, this.mdAlgName, this.pssSaltLen);
				} else if (this.pubKey instanceof ae && this.pubkeyAlgName == "rsa") {
					return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
				} else if (this.pubKey instanceof aF.crypto.ECDSA) {
					return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
				} else if (this.pubKey instanceof aF.crypto.DSA) {
					return this.pubKey.verifyWithMessageHash(this.sHashHex, hSigVal);
				} else {
					throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
				}
			};
		}
	};
	this.aV = function(key, pass) {
		throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
	};
	this.initVerifyByPublicKey = function(rsaPubKey) {
		throw "initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov=" + this.algProvName;
	};
	this.initVerifyByCertificatePEM = function(certPEM) {
		throw "initVerifyByCertificatePEM(certPEM) not supported for this alg:prov=" + this.algProvName;
	};
	this.initSign = function(prvKey) {
		throw "initSign(prvKey) not supported for this alg:prov=" + this.algProvName;
	};
	this.updateString = function(bS) {
		throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
	};
	this.updateHex = function(al) {
		throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
	};
	this.sign = function() {
		throw "sign() not supported for this alg:prov=" + this.algProvName;
	};
	this.signString = function(bS) {
		throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
	};
	this.signHex = function(al) {
		throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
	};
	this.verify = function(hSigVal) {
		throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
	};
	this.initParams = aC;
	if (aC !== undefined) {
		if (aC['alg'] !== undefined) {
			this.algName = aC['alg'];
			if (aC['prov'] === undefined) {
				this.provName = aF.crypto.Util.DEFAULTPROVIDER[this.algName];
			} else {
				this.provName = aC['prov'];
			}
			this.algProvName = this.algName + ":" + this.provName;
			this.setAlgAndProvider(this.algName, this.provName);
			this._setAlgNames();
		}
		if (aC['psssaltlen'] !== undefined) this.pssSaltLen = aC['psssaltlen'];
		if (aC['prvkeypem'] !== undefined) {
			if (aC['prvkeypas'] !== undefined) {
				throw "both prvkeypem and prvkeypas parameters not supported";
			} else {
				try {
					var prvKey = new ae();
					prvKey.readPrivateKeyFromPEMString(aC['prvkeypem']);
					this.initSign(prvKey);
				} catch(ex) {
					throw "fatal error to load pem private key: " + ex;
				}
			}
		}
	}
};
aF.crypto.eU = function(aC) {};
aF.crypto.eU.bZ = function(s, keyObj, algName) {
	if (keyObj instanceof ae && keyObj.isPublic) {
		var algName2 = aF.crypto.eU.getAlgByKeyAndName(keyObj, algName);
		if (algName2 === "RSA") return keyObj.bZ(s);
		if (algName2 === "RSAOAEP") return keyObj.encryptOAEP(s, "sha1");
		var a = algName2.match(/^RSAOAEP(\d+)$/);
		if (a !== null) return keyObj.encryptOAEP(s, "sha" + a[1]);
		throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + algName;
	} else {
		throw "Cipher.encrypt: unsupported key or algorithm";
	}
};
aF.crypto.eU.eV = function(al, keyObj, algName) {
	if (keyObj instanceof ae && keyObj.isPrivate) {
		var algName2 = aF.crypto.eU.getAlgByKeyAndName(keyObj, algName);
		if (algName2 === "RSA") return keyObj.eV(al);
		if (algName2 === "RSAOAEP") return keyObj.decryptOAEP(al, "sha1");
		var a = algName2.match(/^RSAOAEP(\d+)$/);
		if (a !== null) return keyObj.decryptOAEP(al, "sha" + a[1]);
		throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + algName;
	} else {
		throw "Cipher.decrypt: unsupported key or algorithm";
	}
};
aF.crypto.eU.getAlgByKeyAndName = function(keyObj, algName) {
	if (keyObj instanceof ae) {
		if (":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(algName) != -1) return algName;
		if (algName === null || algName === undefined) return "RSA";
		throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + algName;
	}
	throw "getAlgByKeyAndName: not supported algorithm name: " + algName;
};
aF.crypto.yJ = new
function() {
	this.oidhex2name = {
		'2a864886f70d010101': 'rsaEncryption',
		'2a8648ce3d0201': 'ecPublicKey',
		'2a8648ce380401': 'dsa',
		'2a8648ce3d030107': 'secp256r1',
		'2b8104001f': 'secp192k1',
		'2b81040021': 'secp224r1',
		'2b8104000a': 'secp256k1',
		'2b81040023': 'secp521r1',
		'2b81040022': 'secp384r1',
		'2a8648ce380403': 'SHA1withDSA',
		'608648016503040301': 'SHA224withDSA',
		'608648016503040302': 'SHA256withDSA',
	};
};
keyBoard.prototype.apiversion = "1.0.1";