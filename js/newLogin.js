
    /* 判断各个浏览器  */
    function getExplorer(){
    	var explorer = window.navigator.userAgent;
        if(explorer.indexOf("Firefox") >= 0){
//    		alert("Firefox");//火狐浏览器
    		alert("暂不支持firefox浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
        	return;
    	}
    	else if(explorer.indexOf("Chrome") >= 0){
//    		alert("Chrome");//谷歌浏览器
    		alert("暂不支持chrome浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
        	return;
    	}
    	else if(explorer.indexOf("Opera") >= 0){
//    		alert("Opera");//欧朋浏览器
    		alert("暂不支持Opera浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
        	return;
    	}else if(!!window.ActiveXObject || "ActiveXObject" in window){
	        if(navigator.appName == "Microsoft Internet Explorer"){
		  //  alert("暂不支持当前浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
		  //  return;
		}
	    }else if(explorer.indexOf("Safari") >= 0){
    	}else{
	    alert("暂不支持当前浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
		    return;
	    }
    }
//    getExplorer();
    
    function phoneOrWeChatSet(){
    	$.lily.ajax({
				url:'queryPhoneAndVX.do',
				data:{"currentBusinessCode":'20171013'},
				type: 'post', 
				dataType:'json',
				async:false,
				processResponse: function(data){
					if(data.personalBankFlag=='true'){
						$("#wechatShowMsg").css("background","url(images/wechatShowMsgOn.png) no-repeat");
						//微信按钮鼠标悬停事件   
						$("#wechatShowMsg").hover(function () {
							var offTop = $("#wechatShowMsg").offset().top;
							var offLeft = $("#wechatShowMsg").offset().left;
							var thisLeft = $("#wechatMsgDIVOn").innerWidth();
							$("#wechatMsgDIVOn").show();
							$("#wechatMsgDIV").hide();
							$("#wechatMsgDIVOn").offset({
								top: offTop + 30,
								left: offLeft - thisLeft / 2 + 9
							});
						}, function () {
							var el = window.document.body; //声明一个变量，默认值为body
							window.document.body.onmouseover = function (event) {
								el = event.target.id; //鼠标每经过一个元素，就把该元素赋值给变量el
								if (el == "wechatMsgDIVOn") {
									$("#wechatMsgDIVOn").show();
									$("#wechatMsgDIV").hide();
								}
								$("#wechatMsgDIVOn").hover(function () {
									$("#wechatMsgDIVOn").show();
									$("#wechatMsgDIV").hide();
								}, function () {
									$("#wechatMsgDIVOn").hide();
									$("#wechatMsgDIV").hide();
								})
							}
							$("#wechatMsgDIVOn").hide();
							$("#wechatMsgDIV").hide();
						}); 
					}else{
						$("#wechatShowMsg").css("background","url(images/wechatShowMsgOff.png) no-repeat");
						$("#wechatShowMsg").hover(function () {
							var offTop = $("#wechatShowMsg").offset().top;
							var offLeft = $("#wechatShowMsg").offset().left;
							var thisLeft = $("#wechatMsgDIV").innerWidth();
							$("#wechatMsgDIV").show();
							$("#wechatMsgDIVOn").hide();
							$("#wechatMsgDIV").offset({
								top: offTop + 30,
								left: offLeft - thisLeft / 2 + 9
							});
						}, function () {
							var el = window.document.body; //声明一个变量，默认值为body
							window.document.body.onmouseover = function (event) {
								el = event.target.id; //鼠标每经过一个元素，就把该元素赋值给变量el
								if (el == "wechatMsgDIV") {
									$("#wechatMsgDIV").show();
									$("#wechatMsgDIVOn").hide();
								}
								$("#wechatMsgDIV").hover(function () {
									$("#wechatMsgDIV").show();
									$("#wechatMsgDIVOn").hide();
								}, function () {
									$("#wechatMsgDIV").hide();
									$("#wechatMsgDIVOn").hide();
								})
							}
							$("#wechatMsgDIV").hide();
							$("#wechatMsgDIVOn").hide();
						}); 
					}
					if(data.phoneBankFlag=='true'){
						$("#phoneShowMsg").css("background","url(images/phoneShowMsgOn.png) no-repeat");
						//手机按钮鼠标悬停事件
						$("#phoneShowMsg").hover(function () {
							var offTop = $("#phoneShowMsg").offset().top;
							var offLeft = $("#phoneShowMsg").offset().left;
							var thisLeft = $("#phoneMsgDIV").innerWidth();
							$("#phoneMsgDIVOn").show();
							$("#phoneMsgDIV").hide();
							$("#phoneMsgDIVOn").offset({
								top: offTop + 30,
								left: offLeft - thisLeft / 2 + 9
							});
						}, function () {
							var el = window.document.body; //声明一个变量，默认值为body
							window.document.body.onmouseover = function (event) {
								el = event.target.id; //鼠标每经过一个元素，就把该元素赋值给变量el
								if (el == "phoneMsgDIVOn") {
									$("#phoneMsgDIVOn").show();
									$("#phoneMsgDIV").hide();
								}
								$("#phoneMsgDIVOn").hover(function () {
									$("#phoneMsgDIVOn").show();
									$("#phoneMsgDIV").hide();
								}, function () {
									$("#phoneMsgDIVOn").hide();
									$("#phoneMsgDIV").hide();
								})
							}
							$("#phoneMsgDIVOn").hide();
							$("#phoneMsgDIV").hide();
						});
					}else{
						$("#phoneShowMsg").css("background","url(images/phoneShowMsgOff.png) no-repeat");
						$("#phoneShowMsg").hover(function () {
							var offTop = $("#phoneShowMsg").offset().top;
							var offLeft = $("#phoneShowMsg").offset().left;
							var thisLeft = $("#phoneMsgDIV").innerWidth();
							$("#phoneMsgDIV").show();
							$("#phoneMsgDIVOn").hide();
							$("#phoneMsgDIV").offset({
								top: offTop + 30,
								left: offLeft - thisLeft / 2 + 9
							});
						}, function () {
							var el = window.document.body; //声明一个变量，默认值为body
							window.document.body.onmouseover = function (event) {
								el = event.target.id; //鼠标每经过一个元素，就把该元素赋值给变量el
								if (el == "phoneMsgDIV") {
									$("#phoneMsgDIV").show();
									$("#phoneMsgDIVOn").hide();
								}
								$("#phoneMsgDIV").hover(function () {
									$("#phoneMsgDIV").show();
									$("#phoneMsgDIVOn").hide();
								}, function () {
									$("#phoneMsgDIV").hide();
									$("#phoneMsgDIVOn").hide();
								})
							}
							$("#phoneMsgDIV").hide();
							$("#phoneMsgDIVOn").hide();
						});
					}
				}
			});
    }
    
    
    $("#Map1").bind('click',function(){
    	$('#animate2').html('<img src="images/guide/animate2.png" class="fill" border="0" usemap="#Map2" style="height: 1871px; width: 1366px; margin-left: -60px; visibility: visible;"/> <map name="Map2" id="Map2"> <area shape="poly" coords="650,269,658,254,670,248,680,244,692,242,705,238,720,238,729,238,740,240,743,242,747,243,748,250,745,256,737,260,730,264,721,268,712,269,696,272,681,276,671,275" href="#" /></map>');
    	$('#animate2').show();
    	$("#Map2").bind('click',function(){
    		$("#animate2").removeAttr('class');
    		$("#animate2").attr('class','guide-item');
    		$("#animate3").attr('class','guide-item in');
    		$('#animate3').html('<img src="images/guide/animate3.png" class="fill" border="0" usemap="#Map3" style="height: 1871px; width: 1366px; margin-left: -60px; visibility: visible;"/> <map name="Map3" id="Map3"> <area shape="poly" coords="693,301,704,285,722,277,731,273,745,270,761,270,777,269,786,273,794,277,792,286,780,294,770,299,756,301,737,307,723,308,712,308,704,307" href="#" /></map>');
    		$('#animate3').show();
    		$("#Map3").bind('click',function(){
    			$("#animate3").removeAttr('class');
        		$("#animate3").attr('class','guide-item');
        		$("#animate4").attr('class','guide-item in');
        		$("#animate4").attr('scrolltop','0');
        		$('#animate4').html('<img src="images/guide/animate4.png" class="fill" border="0" usemap="#Map4" style="height: 1871px; width: 1366px; margin-left: -60px; visibility: visible;"/> <map name="Map4" id="Map4"> <area shape="poly" coords="469,381,492,371,516,367,533,369,541,373,560,377,570,387,571,396,566,400,549,403,534,407,517,404,498,403,489,398,474,390" href="#" /></map>');
        		$('#animate4').show();
        		$("#Map4").bind('click',function(){
        			$("#animate4").removeAttr('class');
            		$("#animate4").attr('class','guide-item');
            		$("#animate5").attr('class','guide-item in');
            		$('#animate5').html('<img src="images/guide/animate5.png" class="fill" border="0" usemap="#Map5" style="height: 1871px; width: 1366px; margin-left: -60px; margin-top:-400px;visibility: visible;"/> <map name="Map5" id="Map5"> <area shape="poly" coords="657,558,680,539,716,533,743,533,764,539,761,547,747,557,728,567,706,567,682,568,671,568,664,564" href="#" /></map>');
            		$('#animate5').show();
            		$("#Map5").bind('click',function(){
            			$("#animate5").removeAttr('class');
                		$("#animate5").attr('class','guide-item');
                		$("#animate6").attr('class','guide-item in');
                		$('#animate6').html('<img src="images/guide/animate6.png" class="fill" border="0" usemap="#Map6" style="height: 1871px; width: 1366px; margin-left: -60px; margin-top:-1000px; visibility: visible;"/> <map name="Map6" id="Map6"> <area shape="poly" coords="496,1140,517,1127,543,1124,559,1128,579,1132,588,1140,594,1148,587,1155,574,1159,555,1162,532,1160,515,1156,505,1152,493,1140" href="#" /></map>');
                		$('#animate6').show();
                		$("#Map6").bind('click',function(){
                			$('.guide-close').click();
                    	});
                	});
            	});
        	});
    	});
    });
//    $("#Map3").bind('click',function(){
//    	$('#animate4').html('<div class="guide-item" data-scrollTop="251"> <img class="fill" src="images/guide/animate4.png" border="0" usemap="#Map4"/> <map name="Map4" id="Map4"> <area shape="poly" coords="469,381,492,371,516,367,533,369,541,373,560,377,570,387,571,396,566,400,549,403,534,407,517,404,498,403,489,398,474,390" href="#" /></map></div>');
//	});
   //enter登录
	/*$(document).keydown(function(e){
		var key =e.which;
		if(key==13){
			$("#loginBtnPop").focus();
			setTimeout(function(){
				$("#loginBtnPop").click();
			},3000);
		}
	});*/
    //$("#logonIdPop").focus();
	/*var paramArray={"code":"00000100"} 
	$.lily.market.execute($("body"),paramArray);*/
         //验证码
		 var src= $("#verifyImgPop").attr('src');
			 if(!src){
				 $("#verifyImgPop").attr('src', 'VerifyImage?update=' + Math.random());
			 }
		 $("#verifyImgPop").show();
		 $("#verifyImgPop").bind('click',function(){
			 $("#verifyImgPop").attr('src', 'VerifyImage?update=' + Math.random());
		 });
		// 刷新检测UKey	 
	 	   setInterval(function(){
	 	    	if($.lily.CONFIG_SESSION_ID==null||$.lily.CONFIG_SESSION_ID==''){
	 	    		    var USBKeyI;
				        var USBKeyI1;
				        var USBKeyI2;
				       function OpenToken2(){
				    	    myocx= document.all("USBKeyMGRindex");
				    	   	if(myocx!=null && myocx!=""){
				    	   		var ret = myocx.OpenToken();
				    	   		if(ret!=0){
				    	   		   return false;
				    	   		}	
				    	   	    return true;
				    	   	}else{
				    	   	   return false;
				    	   	}
				        };
				       function OpenToken1(){
				    	   	myocx= document.all("USBKeyMGRTwo");
				    	   	if(myocx!=null && myocx!=""){
				    	   		var ret = myocx.OpenToken();
				    	   		if(ret!=0){
				    	   		   return false;
				    	   		}	
				    	   	    return true;
				    	   	}else{
				    	   	   return false;
				    	   	}
				        };
                       function CloseToken1()
				        {
				        	rtn = myocx.CloseToken();
				        	return rtn;
				        }
				       function GetSerialNum(){
						   		var myocx,rtn;
						   		myocx = document.all("USBKeyMGRTwo");
						   		rtn = myocx.GetSerialNum();
						   		return rtn;
				   	    };
					    	try{
					    	    if ( OpenToken2()) {
					    			USBKeyI2 = GetSerialNum2();
					    		} 
					    	}catch(e){};
					      	try{
					      		/*if ( OpenToken1()) {
					      			USBKeyI1 = GetSerialNum();
					      		} */
					      		if ( GetSerialNum()) {
					      			USBKeyI1 = GetSerialNum();
					      		}
					     	}catch(e){};

					    	if(USBKeyI1==null && USBKeyI2==null){
					        	$('#logonIdPop').removeAttr("disabled");
					        	$("#pin").val("");
					    	}else if(USBKeyI1==null && USBKeyI2!=null ){
					    	  	USBKeyI=USBKeyI2; // 二代key插入
					    	  	$("#pin").val(USBKeyI);
					    	  	$.lily.ajax({
						    		url:"checkUSBKeyforlogin.do",
						    		type: 'post', 
							        dataType:'json',
							        data:{"currentBusinessCode":"IM975003","temp5":USBKeyI},
							        async: false,
							        processResponse: function(data){
							        	$('#logonIdPop').val(data.clientName);
							        	if($('#logonIdPop').val()){
							        		$('#logonIdPop').attr("disabled","disabled");
							        	}
							        	//CloseToken2();
							        }
						    	})
					    	}else if(USBKeyI1!=null && USBKeyI2==null ){
					    	    USBKeyI=USBKeyI1;
					    	  	$("#pin").val(USBKeyI);
					    	  	$.lily.ajax({
						    		url:"checkUSBKeyforlogin.do",
						    		type: 'post', 
							        dataType:'json',
							        data:{"currentBusinessCode":"IM975003","temp5":USBKeyI},
							        async: false,
							        processResponse: function(data){
							        	$('#logonIdPop').val(data.clientName);
							        	if($('#logonIdPop').val()){
							        		$('#logonIdPop').attr("disabled","disabled");
							        	}
							        	//CloseToken1();
							        }
						    	})
					    	}else if(USBKeyI1!=null && USBKeyI2!=null){

					    	}
			   
	 	    	}else{
	 	    		return;
	 	    	}
	 	   },3000);	
		 //登录
		 $('#loginBtnPop').bind('click',function(){
			 var explorer = window.navigator.userAgent;
//		        if(explorer.indexOf("Firefox") >= 0){
////		    		alert("Firefox");//火狐浏览器
//		    		alert("暂不支持firefox浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
//		        	return;
//		    	}
//		    	else if(explorer.indexOf("Chrome") >= 0){
////		    		alert("Chrome");//谷歌浏览器
//		    		alert("暂不支持chrome浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
//		        	return;
//		    	}
//		    	else if(explorer.indexOf("Opera") >= 0){
////		    		alert("Opera");//欧朋浏览器
//		    		alert("暂不支持Opera浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
//		        	return;
//		    	}else if(!!window.ActiveXObject || "ActiveXObject" in window){
//			        if(navigator.appName == "Microsoft Internet Explorer"){
////				    alert("暂不支持当前浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
////				    return;
//				}
//			    }else if(explorer.indexOf("Safari") >= 0){
//		    	}else{
//			    alert("暂不支持当前浏览器，推荐您使用IE8及以上浏览器或safari浏览器访问廊坊银行网上银行。");
//				    return;
//			    }
      					 var passResult = $.lily.passwd.getPasswd($("body"),"_ocx_password",undefined,loginForm);     
	     });
	   
	   function loginForm(passResult){
			 var pin=$("#pin").val();
			 var logonId;
			 if(pin==null||pin==""){				
				 logonId = $.trim($('#logonIdPop').val()); 
				 if(logonId==null||logonId==""){
			        	alert("请输入登录ID");
			          return false;
			        }
			 }else{
				 var logonId ='';
			 }
			   var mac="";

		       var machineNetwork=passResult.machineNetwork;//获取MAC,获取网卡信息密文
		       var passwordEncrypted=passResult.password;//$.trim($('#_ocx_password').val());
		         if(passwordEncrypted==null||passwordEncrypted==""){
				 alert("请输入密码");
		          return false;
		        }
		        //取验证码数值
		        var checkCode = $.trim($('#checkCodePop').val());
		        if(checkCode==null||checkCode==""){
		          alert("请输入验证码!");
		          return false;
		        }
//		        if(logonId!=null||logonId!="" ||pin!=null ||pin!=""){
//		        	var state = "1";
//		        	$.lily.ajax({
//	         			url : 'getLogonIdExist.do',
//	         			type : 'post',
//	         			async:false,
//	         			data:{"logonId":logonId,"pin":pin},
//	         			processResponse : function(data) {
//	         				//state = data.state;
//	         			},
//	         			selfdefineFailed:function(data){
//	         				state = '0';
//	         			}
//	         		});
//		        	 /*if(state=="0"){
//						 window.location.href='register.html?state='+state;
//						 return;
//					 }
//		        	 if(state=="2"){
//		        		 window.location.href='register.html?state='+state;
//						 return;
//					 }*/
//		        	if(state=="0" || state=="2"){
//		        		/*alert("身份证号码、卡号或密码错误，连续输错3次账户被暂时锁定；或者未注册个人网上银行，请点击“现在注册”，注册成功即可登录；");
//		        		return;*/
//		        		var windowId = "userLoginErrorMessage" + $.lily.generateUID();
//		        		$.openWindow({
//		        			allowClose: true,
//					    	isSmallWindow:true,
//							appendTo:'body',
//							windowClass:"model model-a",
//							tranCode: "userLoginErrorMessage",
//							windowId: "userLoginErrorMessage" + $.lily.generateUID(),
//							cssHeight:"330",
//							cssWidth:"512",
//							param:{state:state}
//		  		        });
//		        		return;
//		        	}
//		        	 
//	            }   
	            var options = 'fullscreen=3,resizable=yes,left=0,top=0,scrollbars=yes';
	        	
	            $.lily.ajax({
         			url : 'getSysTime.do',
         			type : 'post',
         			async:false,
         			processResponse : function(data) {
         				thisDate = data.sysTime.substring(0,2);
         			}
         		});  
	         	  if(machineNetwork!=null || machineNetwork!=''){
	         		 $.lily.ajax({
					     url : 'getMachineNetwork.do',
			             type : 'post',
			        	 async:false,
			        	 data:{"machineNetwork":machineNetwork},
			        	 processResponse : function(data) {
			        				var macNet = data.machineNet;
			        				var macM=macNet.split(";");//分割
				        			for(var i=0;i<macM.length;i++){
				        				var macMessage=macM[i];
				        				var m=macMessage.split(":");
			        						if(m[1]!='0.0.0.0'){
					        					mac+=m[0]+":"+m[1]+";";	
					        				}			
							    	}
				        		}
			        	 })
	         	  }
									 $.lily.ajax({
							              url: 'signIn.do',
								          type: 'post', 
								          dataType:'json',//"passwordEncrypted":passwordEncrypted,"checkCode":checkCode,
								          data:{"logonId":logonId,"password":passwordEncrypted,"checkCode":checkCode,"logonType":"1","channel":"1101","logRecordFlag":"1","currentBusinessCode":"00000100","responseFormat":"JSON","pin":pin,"mac":mac},//防止乱码
								          async: false,
								          processResponse: function(data){
								        	  var switchState = data.switchState;
								        	  if(switchState == "1"){
								              var kehuhaoo=data.kehuhaoo;
								  			  var kehuzhwm=data.kehuzhwm;
								  			  var pinyinxs=data.pinyinxs;
								  			  var pinyinmc=data.pinyinmc;
								  			  var yingwenx=data.yingwenx;
								  			  var yingwenm=data.yingwenm;
								  			  var cengymch=data.cengymch;
								  			  var xingbiee=data.xingbiee;
								  			  var cheweibz=data.cheweibz;
								  			  var chenwmin=data.chenwmin;
								  			  var xuexingg=data.xuexingg;
								  			  var zjoxyang=data.zjoxyang;
								  			  var kehuzhjb=data.kehuzhjb;
								  			  var shifjnjm=data.shifjnjm;
								  			  var juminshx=data.juminshx;
								  			  var shifouyg=data.shifouyg;
								  			  var yuangbho=data.yuangbho;
								  			  var ygsshjig=data.ygsshjig;
								  			  var guobdaim=data.guobdaim;
								  			  var diqudaim=data.diqudaim;
								  			  var diqmingc=data.diqmingc;
								  			  var hqdxzdma=data.hqdxzdma;
								  			  var hqszchsh=data.hqszchsh;
								  			  var jzdxzdma=data.jzdxzdma;
								  			  var chusriqi=data.chusriqi;
								  			  var gzuodanw=data.gzuodanw;
								  			  var renzhbum=data.renzhbum;
								  			  var cjdanwrq=data.cjdanwrq;
								  			  var danweixz=data.danweixz;
								  			  var hangyelb=data.hangyelb;
								  			  var hangyedm=data.hangyedm;
								  		  	  var frdbleib=data.frdbleib;
								  			  var fardbmch=data.fardbmch;
								  			  var frjumshx=data.frjumshx;
								  			  var frdbdhhm=data.frdbdhhm;
								  			  var zhiwuuuu=data.zhiwuuuu;
								  			  var zhiyeeee=data.zhiyeeee;
								  			  var zhicheng=data.zhicheng;
								  			  var yueshour=data.yueshour;
								  			  var nianxinn=data.nianxinn;
								  			  var minzuuuu=data.minzuuuu;
								  			  var yuyannnn=data.yuyannnn;
								  			  var xueliiii=data.xueliiii;
								  			  var zhuanyee=data.zhuanyee;
								  			  var hunyinqk=data.hunyinqk;
								  			  var zinqingk=data.zinqingk;
								  			  var ywsijiac=data.ywsijiac;
								  			  var zhfqingk=data.zhfqingk;
								  			  var zhfmianj=data.zhfmianj;
								  			  var fangcguj=data.fangcguj;
								  			  var pinggriq=data.pinggriq;
								  			  var kehzyzig=data.kehzyzig;
								  			  var gerzicze=data.gerzicze;
								  			  var gerjdzee=data.gerjdzee;
								  			  var fdjtcysm=data.fdjtcysm;
								  			  var jtnshrze=data.jtnshrze;
								  			  var zhuyjjly=data.zhuyjjly;
								  			  var qitjjily=data.qitjjily;
								  			  var gerennsh=data.gerennsh;
								  			  var grshhbxh=data.grshhbxh;
								  			  var zyzigezk=data.zyzigezk;
								  			  var canjgznf=data.canjgznf;
								  			  var shfgudkh=data.shfgudkh;
								  			  var chigushu=data.chigushu;
								  			  var gujinzhh=data.gujinzhh;
								  			  var daikzhao=data.daikzhao;
								  			  var jiazhixx=data.jiazhixx;
								  			  var chaxunmm=data.chaxunmm;
								  			  var kehujfen=data.kehujfen;
								  			  var kehuxydu=data.kehuxydu;
								  			  var wbxinydj=data.wbxinydj;
								  			  var kehufxjb=data.kehufxjb;
								  			  var kehufwjb=data.kehufwjb;
								  			  var lirungxd=data.lirungxd;
								  			  var shfmshui=data.shfmshui;
								  			  var shuilvgb=data.shuilvgb;
								  			  var sfsmkehu=data.sfsmkehu;
								  			  var shfdongj=data.shfdongj;
								  			  var shifousw=data.shifousw;
								  			  var shenfhec=data.shenfhec;
								  			  var kehufuyj=data.kehufuyj;
								  			  var sdingbzh=data.sdingbzh;
								  			  var qingchbz=data.qingchbz;
								  			  var kehuztai=data.kehuztai;
								  			  var beizhuxx=data.beizhuxx;
								  			  var shengxrq=data.shengxrq;
								  			  var kehxxily=data.kehxxily;
								  			  var waiwyewj=data.waiwyewj;
								  			  var guishjig=data.guishjig;
								  			  var jjzcrxmn=data.jjzcrxmn;
								  			  var jjzczjlx=data.jjzczjlx;
								  			  var jjzczjhm=data.jjzczjhm;
								  			  var jjzclxdh=data.jjzclxdh;
								  			  var qiazleix=data.qiazleix;
								  			  var qiazyoxq=data.qiazyoxq;
								  			  var sfzhyrns=data.sfzhyrns;
								  			  var fjmshmzt=data.fjmshmzt;
								  			  var jwzgssjm=data.jwzgssjm;
								  			  var ssjmsfbz=data.ssjmsfbz;
								  			  var zhwenxin=data.zhwenxin;
								  			  var zhwenmin=data.zhwenmin;
								  			  var ywzhjmin=data.ywzhjmin;
								  			  var chushguo=data.chushguo;
								  			  var shshjmg1=data.shshjmg1;
								  			  var nsrsbho1=data.nsrsbho1;
								  			  var wshbhyy1=data.wshbhyy1;
								  			  var wsbhjty1=data.wsbhjty1;
								  			  var smwjjsh1=data.smwjjsh1;
								  			  var zwxjgjia=data.zwxjgjia;
								  			  var ywxjgjia=data.ywxjgjia;
								  			  var zwxjshen=data.zwxjshen;
								  			  var ywxjshen=data.ywxjshen;
								  			  var zwxjcshi=data.zwxjcshi;
								  			  var ywxjcshi=data.ywxjcshi;
								  			  var zwxjdzhi=data.zwxjdzhi;
								  			  var ywxjdzhi=data.ywxjdzhi;
								  			  var shshjmg2=data.shshjmg2;
								  			  var nsrsbho2=data.nsrsbho2;
								  			  var wshbhyy2=data.wshbhyy2;
								  			  var wsbhjty2=data.wsbhjty2;
								  			  var smwjjsh2=data.smwjjsh2;
								  			  var shshjmg3=data.shshjmg3;
								  			  var nsrsbho3=data.nsrsbho3;
								  			  var wshbhyy3=data.wshbhyy3;
								  			  var wsbhjty3=data.wsbhjty3;
								  			  var smwjjsh3=data.smwjjsh3;
								  			  var shifcyyx=data.shifcyyx;
								  			  var yingxren=data.yingxren;
								  			  var yingxrmc=data.yingxrmc;
								  			  var yingxjig=data.yingxjig;
								  			  var privateCstAddressInfoList = data.privateCstAddressInfoList;
								  			  var privateCsteleContactInfoList = data.privateCsteleContactInfoList;
								  			  var privateCstContactInfoList = data.privateCstContactInfoList;
								  			  var privateCstGuardianInfoList = data.privateCstGuardianInfoList;
								  			  var privateCstCertInfoList = data.privateCstCertInfoList;
								        	  var zhjianzl = privateCstCertInfoList[0].zhjianzl;
								        	  var zhjhaoma = privateCstCertInfoList[0].zhjhaoma;
								        	  var yueshoru=data.yueshoru;
								        	  var jinjlaiy=data.jinjlaiy;
								        	  var shifdail=data.shifdail;
								        	  var dlirxinm=data.dlirxinm;
								        	  var dlirzjzl=data.dlirzjzl;
								        	  var dlirzjhm=data.dlirzjhm;
								        	  var dlircsrq=data.dlircsrq;
								        	  var dlirguoj=data.dlirguoj;
								        	  var dlirlxdh=data.dlirlxdh;
								        	  var dlirbeiz=data.dlirbeiz;
								        	  if(fjmshmzt=='2'){
										  			
										  			$("#marqueeChange").show();
										  			$("#marqueeChangeClose").bind("click",function(){
										  		    	$("#marqueeChange").hide();
										  		    });
										  			$("#writeImmediately").bind("click",function(){
										  				var paramList = {};
										  				paramList.kehuhaoo=kehuhaoo;
										  				paramList.kehuzhwm=kehuzhwm;
										  				paramList.pinyinxs=pinyinxs;
										  				paramList.pinyinmc=pinyinmc;
										  				paramList.yingwenx=yingwenx;
										  				paramList.yingwenm=yingwenm;
										  				paramList.cengymch=cengymch;
										  				paramList.xingbiee=xingbiee;
										  				paramList.cheweibz=cheweibz;
										  				paramList.chenwmin=chenwmin;
										  				paramList.xuexingg=xuexingg;
										  				paramList.zjoxyang=zjoxyang;
										  				paramList.kehuzhjb=kehuzhjb;
										  				paramList.shifjnjm=shifjnjm;
										  				paramList.juminshx=juminshx;
										  				paramList.shifouyg=shifouyg;
										  				paramList.yuangbho=yuangbho;
										  				paramList.ygsshjig=ygsshjig;
										  				paramList.guobdaim=guobdaim;
										  				paramList.diqudaim=diqudaim;
										  				paramList.diqmingc=diqmingc;
										  				paramList.hqdxzdma=hqdxzdma;
										  				paramList.hqszchsh=hqszchsh;
										  				paramList.jzdxzdma=jzdxzdma;
										  				paramList.chusriqi=chusriqi;
										  				paramList.gzuodanw=gzuodanw;
										  				paramList.renzhbum=renzhbum;
										  				paramList.cjdanwrq=cjdanwrq;
										  				paramList.danweixz=danweixz;
										  				paramList.hangyelb=hangyelb;
										  				paramList.hangyedm=hangyedm;
										  				paramList.frdbleib=frdbleib;
										  				paramList.fardbmch=fardbmch;
										  				paramList.frjumshx=frjumshx;
										  				paramList.frdbdhhm=frdbdhhm;
										  				paramList.zhiwuuuu=zhiwuuuu;
										  				paramList.zhiyeeee=zhiyeeee;
										  				paramList.zhicheng=zhicheng;
										  				paramList.yueshour=yueshour;
										  				paramList.nianxinn=nianxinn;
										  				paramList.minzuuuu=minzuuuu;
										  				paramList.yuyannnn=yuyannnn;
										  				paramList.xueliiii=xueliiii;
										  				paramList.zhuanyee=zhuanyee;
										  				paramList.hunyinqk=hunyinqk;
										  				paramList.zinqingk=zinqingk;
										  				paramList.ywsijiac=ywsijiac;
										  				paramList.zhfqingk=zhfqingk;
										  				paramList.zhfmianj=zhfmianj;
										  				paramList.fangcguj=fangcguj;
										  				paramList.pinggriq=pinggriq;
										  				paramList.kehzyzig=kehzyzig;
										  				paramList.gerzicze=gerzicze;
										  				paramList.gerjdzee=gerjdzee;
										  				paramList.fdjtcysm=fdjtcysm;
										  				paramList.jtnshrze=jtnshrze;
										  				paramList.zhuyjjly=zhuyjjly;
										  				paramList.qitjjily=qitjjily;
										  				paramList.gerennsh=gerennsh;
										  				paramList.grshhbxh=grshhbxh;
										  				paramList.zyzigezk=zyzigezk;
										  				paramList.canjgznf=canjgznf;
										  				paramList.shfgudkh=shfgudkh;
										  				paramList.chigushu=chigushu;
										  				paramList.gujinzhh=gujinzhh;
										  				paramList.daikzhao=daikzhao;
										  				paramList.jiazhixx=jiazhixx;
										  				paramList.chaxunmm=chaxunmm;
										  				paramList.kehujfen=kehujfen;
										  				paramList.kehuxydu=kehuxydu;
										  				paramList.wbxinydj=wbxinydj;
										  				paramList.kehufxjb=kehufxjb;
										  				paramList.kehufwjb=kehufwjb;
										  				paramList.lirungxd=lirungxd;
										  				paramList.shfmshui=shfmshui;
										  				paramList.shuilvgb=shuilvgb;
										  				paramList.sfsmkehu=sfsmkehu;
										  				paramList.shfdongj=shfdongj;
										  				paramList.shifousw=shifousw;
										  				paramList.shenfhec=shenfhec;
										  				paramList.kehufuyj=kehufuyj;
										  				paramList.sdingbzh=sdingbzh;
										  				paramList.qingchbz=qingchbz;
										  				paramList.kehuztai=kehuztai;
										  				paramList.beizhuxx=beizhuxx;
										  				paramList.shengxrq=shengxrq;
										  				paramList.kehxxily=kehxxily;
										  				paramList.waiwyewj=waiwyewj;
										  				paramList.guishjig=guishjig;
										  				paramList.jjzcrxmn=jjzcrxmn;
										  				paramList.jjzczjlx=jjzczjlx;
										  				paramList.jjzczjhm=jjzczjhm;
										  				paramList.jjzclxdh=jjzclxdh;
										  				paramList.qiazleix=qiazleix;
										  				paramList.qiazyoxq=qiazyoxq;
										  				paramList.sfzhyrns=sfzhyrns;
										  				paramList.fjmshmzt=fjmshmzt;
										  				paramList.jwzgssjm=jwzgssjm;
										  				paramList.ssjmsfbz=ssjmsfbz;
										  				paramList.zhwenxin=zhwenxin;
										  				paramList.zhwenmin=zhwenmin;
										  				paramList.ywzhjmin=ywzhjmin;
										  				paramList.chushguo=chushguo;
										  				paramList.shshjmg1=shshjmg1;
										  				paramList.nsrsbho1=nsrsbho1;
										  				paramList.wshbhyy1=wshbhyy1;
										  				paramList.wsbhjty1=wsbhjty1;
										  				paramList.smwjjsh1=smwjjsh1;
										  				paramList.zwxjgjia=zwxjgjia;
										  				paramList.ywxjgjia=ywxjgjia;
										  				paramList.zwxjshen=zwxjshen;
										  				paramList.ywxjshen=ywxjshen;
										  				paramList.zwxjcshi=zwxjcshi;
										  				paramList.ywxjcshi=ywxjcshi;
										  				paramList.zwxjdzhi=zwxjdzhi;
										  				paramList.ywxjdzhi=ywxjdzhi;
										  				paramList.shshjmg2=shshjmg2;
										  				paramList.nsrsbho2=nsrsbho2;
										  				paramList.wshbhyy2=wshbhyy2;
										  				paramList.wsbhjty2=wsbhjty2;
										  				paramList.smwjjsh2=smwjjsh2;
										  				paramList.shshjmg3=shshjmg3;
										  				paramList.nsrsbho3=nsrsbho3;
										  				paramList.wshbhyy3=wshbhyy3;
										  				paramList.wsbhjty3=wsbhjty3;
										  				paramList.smwjjsh3=smwjjsh3;
										  				paramList.shifcyyx=shifcyyx;
										  				paramList.yingxren=yingxren;
										  				paramList.yingxrmc=yingxrmc;
										  				paramList.yingxjig=yingxjig;
										  				paramList.zhjianzl=zhjianzl;
										  				paramList.zhjhaoma=zhjhaoma;
										  				paramList.privateCstAddressInfoList=privateCstAddressInfoList;
										  				paramList.privateCsteleContactInfoList=privateCsteleContactInfoList;
										  				paramList.privateCstContactInfoList=privateCstContactInfoList;
										  				paramList.privateCstGuardianInfoList=privateCstGuardianInfoList;
										  				paramList.privateCstCertInfoList=privateCstCertInfoList;	
										  				paramList.yueshoru=yueshoru;
										  				paramList.jinjlaiy=jinjlaiy;
										  				paramList.shifdail=shifdail;
										  				paramList.dlirxinm=dlirxinm;
										  				paramList.dlirzjzl=dlirzjzl;
										  				paramList.dlirzjhm=dlirzjhm;
										  				paramList.dlircsrq=dlircsrq;
										  				paramList.dlirguoj=dlirguoj;
										  				paramList.dlirlxdh=dlirlxdh;
										  				paramList.dlirbeiz=dlirbeiz;
										  				$.openWindow({
												    		allowClose: false,
															btnClass: 'float-btn',
												    		isSmallWindow:true,
															appendTo:'body',
															windowClass:"common-smallsub-window",
															tranCode: "cstMsgEntry",
															param:paramList,
															windowId: windowId,
															cssHeight:"480",
															mvcOptions:{fixedHeight:true},
															cssWidth:"700",
															hasHeader:false
									  		          });
										  				$("#marqueeChange").hide();
										  			});
										  		}
								        	  }
								              getMenu();
								        	  getFundPro();
								        	  $(".main_pic_box").hide();
								        	  $(".myaccount").show();
								        	  $(".welcome_banner").show();
								        	 
								        	    var greeting="";
								        		var sayWord="";
						
								        	    //var myDate = new Date();  
								        		//var thisDate = myDate.getHours();
								        		//上次登录时间
								        		var session_customerLastLogon = data.session_customerLastLogon;
								        		if(!(""==session_customerLastLogon || null==session_customerLastLogon)){
								        			session_customerLastLogon = $.lily.format.formatDateTime(session_customerLastLogon,"yyyy-MM-dd hh:mm:ss");
									        		$("#newDate").text(session_customerLastLogon);
								        		}else{
								        			$("#newDate").text("--");
								        		}
								        		if(thisDate>=0 && thisDate<6){
								        			greeting="晚上好!"
								        			sayWord="（喝杯咖啡，让精神抖擞起来）";
								        		}else if(thisDate>=6 && thisDate<11){
								        			greeting="上午好!";
								        			sayWord="（喝杯咖啡，让精神抖擞起来）";
								        		}else if(thisDate>=11 && thisDate<13){
								        			greeting="中午好!"
								        			sayWord="（喝杯咖啡，让精神抖擞起来）";
								        		}else if(thisDate>=13 && thisDate<18){
								        			greeting="下午好!"
								        			sayWord="（喝杯咖啡，让精神抖擞起来）";
								        		}else if(thisDate>=18 && thisDate<24){
								        			greeting="晚上好!"
								        			sayWord="（喝杯咖啡，让精神抖擞起来）";
								        		}else{
								        			greeting="晚上好!"
								        			sayWord="（喝杯咖啡，让精神抖擞起来）";
								        		}
								        		
								        		//alert(data.customerStt);
								        		
								        	  /*if(data.changePWD3Monthflag==2){
									        		$("#passwordpop").show();
									        	}*/
								        		//alert(data.customerStt);
								        	  if(data.customerStt == '0' || data.customerStt == '3'){//data.customerStt == '0' || data.customerStt == '3'
									    		  $(window).scrollTop(0);
									    		  $("#loginSuccess").css("top",($(window).height()-$("#loginSuccess").height())/2+"px");
									        	  $("#loginSuccess").fadeIn();
									        	  openAfterLogin(data);
									        	  setTimeout(function(){
									        	    $("#loginSuccess").animate({'top':'12px',"margin-left":'-426px','height':'0px','width':'50px'},'1000','swing',function(){			        	    	
							 		        	  });
									        	  },1000);
									        	  
									        	
									        	  
									        	 /* $("#lookAllMessage").bind("click",function(){
											 			$('#login_index').hide();
														$('#main-transaction-area').empty().show();
											            $('#main-content').hide();
														$.openWindow({
														tranCode: "B0060030_menu",
														tranCode: "lookAllMessage",
														windowId: "lookAllMessage" + $.lily.generateUID()
													   });
											 		});*/
									        	  
									        		//判断是否验证手机号
						//				        	  $.lily.ajax({
						//				        		  url: 'selectPhoneNo.do',
						//			        			  data:{"currentBusinessCode":'97500070'},
						//						          type: 'post', 
						//						          dataType:'json',
						//						          async: false,
						//						          processResponse: function(data){
						//						        	  if(data.flag!=1){
						//						        		  var windowId = "queryPhoneNoforLogin" + $.lily.generateUID();
						//						  		          $.openWindow({
						//									    		allowClose: true,
						//												//btnClass: 'float-btn',
						//									    		isSmallWindow:true,
						//												appendTo:'body',
						//												windowClass:"model model-a",
						//												tranCode: "queryPhoneNoforLogin",
						//												windowId: windowId,
						//												cssHeight:"200",
						//												//mvcOptions:{fixedHeight:true},
						//												cssWidth:"500"
						//												//overflow-y:none
						//												//hasHeader:false
						//						  		          });
						//						        	  }
						//						          }
						//				        	  })
									        	  
									        	  phoneOrWeChatSet();
									        	  
						                            //判断是否需要重置私密问题
													  $.lily.ajax({
										        		  url: 'selectPrivateNo.do',
									        			  data:{"currentBusinessCode":'97500110'},
												          type: 'post', 
												          dataType:'json',
												          async: false,
												          processResponse: function(data){
												        	  if(data.flag!=0){
												        		  var windowId = "queryPrivateNoforLogin" + $.lily.generateUID();
												  		          $.openWindow({
															    		allowClose: true,
																		//btnClass: 'float-btn',
															    		isSmallWindow:true,
																		appendTo:'body',
																		windowClass:"model model-a",
																		tranCode: "queryPrivateNoforLogin",
																		windowId: windowId,
																		cssHeight:"200",
																		//mvcOptions:{fixedHeight:true},
																		cssWidth:"500"
																		//overflow-y:none
																		//hasHeader:false
												  		          });
												        	  }
												          }
										        	  })
										        	  $('#oftenuser').hide();
														$('#mylove').show();
														$("#btn_left1",$("body")).css('display','block');
														$("#btn_right1",$("body")).css('display','block');
														$('#quickmenu',$("body")).find('li').remove();
														function htmladdmenu(data){
															  var html="";
															  html+="<li>";
														      html+="<span>";
														      html+="<a data-toggle='lilyMenu' data-menuno="+data.menuNoTop+" data-content='frame_item' data-value="+data.jsonname+">";
														      html+="<img src='images/icon_quick/"+data.menuno+".png'/>";
														     // html+="<img src='images/icon_quick/"+data.imagename+"'>";
														      html+="</a>";
														      html+="</span>";
														      html+="<p>"+data.menuname+"</p>";
														      html+="</li>";
													        $("#quickmenu",$("body")).append(html);
														}
														function htmladdimage(){
															  var html="";
															  html+="<li>";
														      html+="<span id='addmenu'><img src='images/icon_quick/icon_add_1.png'></span>";
														      html+="<p>添加</p>";
														      html+="</li>";
													        $("#quickmenu",$("body")).append(html);
														}
													//查询登录信息(整合)
										        	  var paramforMsg={
										        		  "currentBusinessCode":'01100019'
										        	  };
										        		$.lily.ajax({
										        			  url: 'getOnMessage.do',
										        			  data:paramforMsg,
													          type: 'post', 
													          dataType:'json',
													          async: false,
													          processResponse: function(data){
													        	  //查询我的提醒
													        	  $("#customMsg").text(data.customerMessage);
													        	  $(".t1").text(data.temp8+","+greeting);
													        	  $("#userName").text(data.temp8);
													              if(thisDate<=6||thisDate>=18){
													        		  $("span[class='t1']").addClass("t3").removeClass("t1");
													        	  }
													              if(data.temp6!=null||data.temp6!=""){
													        	      var birthday=data.temp6.substr(10,10);
													        	      var b=birthday.substr(0,4);
													        	      var sysDate=data.temp7.substr(4,4);
													        	      if(b==sysDate){
													        		     $("#birthdayAlert").text("亲，今天是您的生日，我行全体员工祝您生日快乐！");
													        	      }
													        	      else{
													        	    	  $("#birthdayAlert").hide();
													        	      }
													        	  }
													              var eventAlertText =  $("#eventAlert")[0].innerText
													              if(eventAlertText == ""){
													            	  $("#eventAlert").hide();
													              }
													              

													              //查询留言
													              var customMsg=data.iMessage;
													              if(data.endDate!=null||data.temp7!=""){
													        	  var endDate=data.endDate.substr(0,8);
													        	  var flag=data.temp7.substr(0,8);
													        	  if(endDate-flag>0&&endDate-flag<100){
													        		  $(".msg_list").append('<li>证书即将到期，请及时更新</li>');
													        	  }
													        	  if(customMsg==null||customMsg==''){
													        		  $(".msg_list").append('<li>暂无提醒信息</li>');
													        		  $("#lookAllMessage").hide();
													        	  };
													        	  for(var i=0;i<customMsg.length;i++){
													        		  var cm=customMsg[i];
													        		  var messageContent=cm.messageContent;
													        	      $(".msg_list").append('<li>'+messageContent+'</li>'); 
													        	  }
													        	  if(customMsg.length > 2){
													        		  function autoScroll(){  
													        			  $(".msg_article").find(".msg_list").animate({  
													        				  marginTop : "-29px"
													        			  },500,function(){  
													        				  $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
													        			  });
													        		  } 
													        		  var iCount = setInterval(autoScroll, 3000);
													        	      var animateStopFlag = true;
													        	      $("#animateStop",$("body")).bind("click",function() {
													        	    	  if(animateStopFlag){
													        	    		  clearInterval(iCount);
													        	    		  animateStopFlag = false;
													        	    		  $(this).removeClass("btn_stop").addClass("btn_play");
													        	    		  $("#animateStop",$("body")).text("继续提醒");
													        	    		  
													        	    	  }else{
													        	    		  iCount = setInterval(autoScroll, 3000);
													        	    		  animateStopFlag = true;
													        	    		  $(this).removeClass("btn_play").addClass("btn_stop");
													        	    		  $("#animateStop",$("body")).text("不再提醒");
													        	    	  }
													        	           
													        	      });
													        	      $(function(){  
													        			   autoScroll(".msg_article");//  setInterval(autoScroll(".msg_article"),0);
													        		  });  
													        	  }
													            }
													            //查询客户的营销信息
													            if (data.MarketingItem.length != 0){
													  	            var MarketingItem = data.MarketingItem;
													  	            appendMarketing(MarketingItem,"010001");
												  	            }
													            //查询电话是否注册
													        	if(data.flag1!=1){
													                var windowId = "queryPhoneNoforLogin" + $.lily.generateUID();
													  		        $.openWindow({
																        allowClose: true,
																		//btnClass: 'float-btn',
																    	isSmallWindow:true,
																		appendTo:'body',
																		windowClass:"model model-a",
																		tranCode: "queryPhoneNoforLogin",
																		windowId: windowId,
																		cssHeight:"200",
																		//mvcOptions:{fixedHeight:true},
																		cssWidth:"500"
																		//overflow-y:none
																		//hasHeader:false
													  		        });
													        	}
													        	//查询是否需要重置私密问题
													        	if(data.flag2!=0){
													        		var windowId = "queryPrivateNoforLogin" + $.lily.generateUID();
													  		        $.openWindow({
																        allowClose: true,
																		//btnClass: 'float-btn',
																    	isSmallWindow:true,
																		appendTo:'body',
																		windowClass:"model model-a",
																		tranCode: "queryPrivateNoforLogin",
																		windowId: windowId,
																		cssHeight:"200",
																		//mvcOptions:{fixedHeight:true},
																		cssWidth:"500"
																		//overflow-y:none
																		//hasHeader:false
													  		        });
													        	}
													            //显示个性化设置界面
													        	var cip_style=data.cip_style;
																setStyle(cip_style);
																//查询本人快捷菜单
																var menuList = data.menuList;
																if(menuList.length==0){
																	htmladdimage();
															    }
																for(var i=0;i<menuList.length;i++){
																	htmladdmenu(menuList[i]);
																	if(i==menuList.length-1){
																		htmladdimage();
																	}
																}
																var len = menuList.length;
																if(len > 6){
																	var quickMenuFlag = true;
																	$("#btn_left1",$("body")).bind("click",function(){
																		if(quickMenuFlag){
																			return;
																		}
																		quickMenuFlag =true;
																	    $('.scroll_inner_quick ul').animate({left:'+=952px'},500);
																	});
																	$("#btn_right1",$("body")).bind("click",function(){
																		if(!quickMenuFlag){
																			return;
																		}
																		quickMenuFlag =false;
																		$('.scroll_inner_quick ul').animate({left:'-=952px'},500);
																	});
																}
																$("#addmenu",$("body")).live("click",function(){
																	 var windowId = "add_quickmenu" + $.lily.generateUID();
													  		          $.openWindow({
																    		allowClose: true,
																			btnClass: 'float-btn',
																    		isSmallWindow:true,
																			appendTo:'body',
																			windowClass:"common-smallsub-window",
																			tranCode: "add_quickmenu",
																			windowId: windowId,
																			cssHeight:"530",
																			mvcOptions:{fixedHeight:true},
																			cssWidth:"1025",
																			hasHeader:false
													  		          });
																});
													          }
										        		});				        		
										        		
						//				        	var iAccList = '';
						//							$.lily.ajax({
						//								url: "queryAllAccounts.do",
						//								type: 'post', 
						//								dataType:'json',
						//								async:false,
						//								data:{'currentBusinessCode':'00000504'},//'accountNo':'6221403001566047'
						//								processResponse: function(resultdata){
						//									    var accountList = resultdata.iAccountInfoList;         			   // 下挂账户信息
						//								    	iAccList += accountList[0].accountNo;
						//									    for(var i = 1;i < accountList.length;i ++){
						//									    	iAccList += "#" + accountList[i].accountNo;
						//									    }
						//									    var assetStr = $.lily.format.removeComma(resultdata.TxnAmt);
						//									    var age = '';
						//									    if($.lily.sessionData.session_certType == '0' || $.lily.sessionData.session_certType == '01'){
						//											var birthday = $.lily.sessionData.session_certNo.substr(6,8);
						//											var a = new Date();
						//											age = a.getFullYear() - birthday.substr(0,4);
						//									    }
						//										}
						//								});
													
													//默认查询我的账户
													//var leftOne = 0;
													//var rightOne=0;
													function htmladdview(data){
														var xzhileix;
														var kongzhzt;
														var signFlag="1";
														var voucherStt;
														var list;
														var coreState;
														var alias = data.alias;
														if(alias==null || alias==""){
															alias="设置别名";
														}
														var accountNo1 = data.accountNo;
														var accountNo = data.accountNo;
														accountNo = $.lily.format.dealAccountNoHide(accountNo);
														var balanceAvailable = parseFloat(data.balanceAvailable).toFixed(2);
														$.lily.ajax({
															url: "querySignFlag.do",
															type: 'post', 
															dataType:'json',
															async:false,
															data:{'currentBusinessCode' : '00800368','accountNo' : accountNo1},
															processResponse: function(responsedata){
																//kongzhzt = responsedata.kongzhzt;
																signFlag = responsedata.flag;
																//voucherStt = responsedata.voucherStt;
																//list = responsedata.iFixAccountList;
																//coreState = list[0].state;
																//xzhileix = list[0].xzhileix;
															}
														});
														// accountNo=accountNo.substr(0,4)+"********"+accountNo.substr(12,4);
														var html="";
														html+="<li>";
														html+="<div class='card_scroll'>";
														html+="<span class='cardst m_xp' style='text-align:center;' id='one_"+accountNo1+"'>"+alias+"</span>";
														html+="<input class='cardst m_xp' type='text' maxlength='6' id='one1_"+accountNo1+"' style='display:none;width:56px;height:27px;text-align:center;' value='"+data.alias+"'>";
														html+="<p class='logo_card'></p>";
														html+="<p class='code_card'>"+accountNo+"</p>";
														html+="<div class='card_bottom'>";
														html+="<p class='car_txt' >余额&nbsp;&nbsp;<span>"+balanceAvailable+"</span>（元）</p>";
														html+="<p class='car_txt1' style='display:none;'>余额&nbsp;&nbsp;<span>******</span>（元）</p>";
														html+="<span class='icon_eye'></span>";
														html+="</div>";
														if(signFlag == "2"){
															html+="<div class='card_link'><a data-toggle='lilyMenu' data-menuno='A0050000' data-content='frame_item' data-value='0050010_myDebitCard'>交易明细</a></div>";
														}else{
														html+="<div class='card_link'><a data-toggle='lilyMenu' data-menuno='A0010000' data-content='frame_item' data-value='transferAccountInline'>行内转账</a><a data-toggle='lilyMenu' data-menuno='A0010000' data-content='frame_item' data-value='transferAccountOutline'>行外转账</a><a data-toggle='lilyMenu' data-menuno='A0050000' data-content='frame_item' data-value='0050010_myDebitCard'>交易明细</a></div>";
														}
												        html+="</div>";
												        html+="</li>";
												        $("#addAccount",$("body")).append(html);
												        updateone(accountNo1,data.alias);
													};
													function updateone(data,alias) {
														$('#one_'+data).bind('click',function() {
															$('#one_'+data).hide();
															$('#one1_'+data).show().focus();
															$('#one1_'+data).bind('blur',function() {
																var alias1 =  $('#one1_'+data).val();
																if(alias1=="" || alias1==null){
																	$('#one1_'+data).hide();
																	$('#one_'+data).show();
																	$('#one_'+data).text("设置别名");
																	alias1="";
																}else{
																	$('#one1_'+data).hide();
																	$('#one_'+data).show();
																	$('#one_'+data).text(alias1);
																}
														
															/*
															 * if(alias==alias1){ return; }
															 */
																$.lily.ajax({
																	url: 'updateforalias.do',
																	type: 'post', 
																	async: false,
																	data:{'currentBusinessCode':'01000911','accountNo':data,'alias':alias1},
																	processResponse: function(data){
																	    var flag = data.flag;
																	    if(flag=='1'){
																	    	// alert("修改成功");
																	    	$('#one1_'+data).hide();
																	    	$('#one_'+data).show();
																	    	$('#one_'+data).text(alias1);
																	    	$('#one1_'+data).val(alias1);
																	    }
																	    }
																	});
															});
														});
													}
													$.lily.ajax({
														url: 'queryAccountMoney.do',
														type: 'post', 
														async: false,
														data:{'currentBusinessCode':'01000911'},
														processResponse: function(data){
															var trade = data.tradelstAccmixi2;
															for(var i=0;i<trade.length;i++){
																htmladdview(trade[i]);
															}
															var len = trade.length;
															if(len > 2){
																var quickMenuFlag =true;
																$(".btn_left",$("body")).bind("click",function(){
																	if(quickMenuFlag){
																		return;
																	}
																	quickMenuFlag =true;
																    $('.scroll_inner ul').animate({left:'+=933px'},500);
																});
																
																$(".btn_right",$("body")).bind("click",function(){
																	if(!quickMenuFlag){
																		return;
																	}
																	quickMenuFlag =false;
																	$('.scroll_inner ul').animate({left:'-=933px'},500);
																});
															}
														    }
														});
													
													$("#zhuanzhang",$("body")).bind("click",function(){
														$('#login_index').hide();
														$('#main-transaction-area').empty().show();
											            $('#main-content').hide();
											            
														$.openWindow({
														tranCode: "transferAccountOutline",
														windowId: "transferAccountOutline" + $.lily.generateUID()
													   });
													});
						//							rightOne = $('.scroll_inner ul li').length-3;
						//							$('.btn_left').click(function(){
						//								if(leftOne < 1){
						//									return;
						//								}
						//								leftOne--;
						//								rightOne++;
						//							    $('.scroll_inner ul').animate({left:'+=310px'},500);
						//							})
						//							$('.btn_right').click(function(){
						//								if(rightOne < 1){
						//									return;
						//								}
						//								leftOne++;
						//								rightOne--;
						//								$('.scroll_inner ul').animate({left:'-=310px'},500);
						//							});
													 //隐藏显示金额
													/*$('#hideMoeny').click(function(){
														$('.car_txt').find("span").toggle();
														if($('.car_txt').find("span").css("display")=='none'){
															$('#hideMoeny a').text("显示全部余额");
															$('.btnacc_eye_hidd').css('background','url(images/eye_gray.png)');
														} else {
															$('#hideMoeny a').text("隐藏全部余额");
															$('.btnacc_eye_hidd').css('background','url(images/eye_gray.png)');
														};
													});*/
													$('#hideMoeny').click(function(){
														$('.car_txt').find("span").toggle();
														if($('.car_txt').find("span").css("display")=='none'){
															$('#hideMoeny a').text("显示全部余额");
															$('.car_txt1').show();
															$('.car_txt').hide();
															$('#hideMoeny').attr("class","btnacc_eye_hidd");
														} else {
															$('#hideMoeny a').text("隐藏全部余额");
															$('.car_txt1').hide();
															$('.car_txt').show();
															$('#hideMoeny').attr("class","btnacc_eye");
														};
													});
													
													// 查询资产负债图 --饼状
													//饼状  刷新按钮
													$('#shuaimg').live('click',function(){
														$("#chartFund").empty();
														//刷新按钮旋转
														$(this).rotate({
															 duration:5000,
															 angle: 0,
															 animateTo:2880
															 });
														
														var huoqi = 0;
														var dingqi = 0;
														var UseVol = 0;
														//查询定活期
														$.lily.ajax({
															url: 'queryindexData.do',
															data: {"currentBusinessCode":'01000911',"flag":"1"},
															type: 'post',
															async: false,
															dataType : 'json',	    	
															processResponse : function(responseData) {
						//										var lstAccmixi = responseData.lstAccmixi;
						//										var iAccountInfo = $.lily.sessionData.iAccountInfo;
						//										for(j=0;j<iAccountInfo.length;j++){
						//											for(i=0;i<lstAccmixi.length;i++){
						//												if(lstAccmixi[i].uni_acctNo==iAccountInfo[j].accountNo){
						//												if(lstAccmixi[i].fzcpleix==0){
						//													huoqi+=parseFloat(lstAccmixi[i].zhhuyuee);
						//												}else{
						//													dingqi+=parseFloat(lstAccmixi[i].zhhuyuee);
						//												}
						//												}
						//											}
						//										}
																huoqi=parseFloat(responseData.huoMoney);
																dingqi=parseFloat(responseData.dingMoney);
																//理财
																var licai = responseData.receiveIcollData;
																for(i=0;i<licai.length;i++){
																	UseVol+=parseFloat(licai[i].UseVol);
																}
															},
															selfdefineFailed:function(data){
																return;
															}
														});
						//								//查询定理财
						//								$.lily.ajax({
						//									url: 'queryindexData.do',
						//									data: {"currentBusinessCode":'01000911',"flag":"2"},
						//									type: 'post',
						//									async: false,
						//									dataType : 'json',	    	
						//									processResponse : function(responseData) {
						////										var lstAccmixi = responseData.lstAccmixi;
						//										var licai = responseData.receiveIcollData;
						//										for(i=0;i<licai.length;i++){
						//											UseVol+=parseFloat(licai[i].UseVol);
						//										}
						//									},
						//									selfdefineFailed:function(data){
						//										return;
						//									}
						//								}); 
													     var moneyTotal=UseVol+huoqi+dingqi;
													     moneyTotal=moneyTotal.toFixed(2);
														 UseVol = UseVol.toFixed(2);
													     huoqi = huoqi.toFixed(2);
													     dingqi = dingqi.toFixed(2);
													     if(moneyTotal=='0.00'){
													    	 $('#chartFund').hide();
													    	 $('#chartFund1').show();
													    	 $('#caifu').show();
													    }else{
													    	 $('#chartFund').show();
													    	 $('#chartFund1').hide();
													    	var myChart = echarts.init(document.getElementById('chartFund'));
															option = {
														    tooltip : {
														        trigger: 'item',
														        formatter: "{a} <br/>{b} : {c} ({d}%)"
														    },
														    legend: {//图例
														        orient: 'vertical',
														        x:'right',
														        y:'top',
														        itemGap:10,
														        itemStyle:{
														        	normal: {
															        	borderWidth:1,
															        	borderColor:'#333' 
																    }
														        },
														        textStyle: {  
																	color: '#999',
																	fontFamily: 'microsoft yahei',
																	fontSize: 14
																},
														        data: ['活期','定期','理财']
														    },
														    color:['#009fe8','#3cbc7e','#f4be19'],  //扇面颜色
														    series : [
														        {
														            name:'财富总览',
														            type: 'pie',
														            radius : '60%',
														            center: ['40%', '50%'], 
														            data:[
														                 {value: huoqi, name:'活期'},
															             {value: dingqi, name:'定期'},
															             {value: UseVol, name:'理财'}
														            ],
														            itemStyle: {
														                emphasis: {
														                    shadowBlur: 10,
														                    shadowOffsetX: 0,
														                    shadowColor: 'rgba(0, 0, 0, 0.5)'
														                }
														            }
														        }
														    ]
														};
														myChart.setOption(option); 
													    }
														
													});
													
													$('#queryData li').click(function(){
														$(".pop-layer").html('<script type="text/javascript" src="js/echarts-all.js"></script>');	
														var indeVal = $(this).val();
														if(indeVal==1){
															$('.scroll_inner ul').remove();
															var huoqi = 0;
															var dingqi = 0;
															var UseVol = 0;
															//查询定活期
															$.lily.ajax({
																url: 'queryindexData.do',
																data: {"currentBusinessCode":'01000911',"flag":"1"},
																type: 'post',
																async: false,
																dataType : 'json',	    	
																processResponse : function(responseData) {
						//											var lstAccmixi = responseData.lstAccmixi;
						//											var iAccountInfo = $.lily.sessionData.iAccountInfo;
						//											for(j=0;j<iAccountInfo.length;j++){
						//												for(i=0;i<lstAccmixi.length;i++){
						//													if(lstAccmixi[i].uni_acctNo==iAccountInfo[j].accountNo){
						//													if(lstAccmixi[i].fzcpleix==0){
						//														huoqi+=parseFloat(lstAccmixi[i].zhhuyuee);
						//													}else{
						//														dingqi+=parseFloat(lstAccmixi[i].zhhuyuee);
						//													}
						//													}
						//												}
						//											}
																	//查询定活期
																	huoqi=parseFloat(responseData.huoMoney);
																	dingqi=parseFloat(responseData.dingMoney);
																	//理财
																	var licai = responseData.receiveIcollData;
																	for(i=0;i<licai.length;i++){
																		UseVol+=parseFloat(licai[i].UseVol);
																	}
																},
																selfdefineFailed:function(data){
																	return;
																}
															});
						//									$.lily.ajax({
						//										url: 'queryindexData.do',
						//										data: {"currentBusinessCode":'01000911',"flag":"1"},
						//										type: 'post',
						//										async: false,
						//										dataType : 'json',	    	
						//										processResponse : function(responseData) {
						//											var lstAccmixi = responseData.lstAccmixi;
						//											var iAccountInfo = $.lily.sessionData.iAccountInfo;
						//											for(j=0;j<iAccountInfo.length;j++){
						//												for(i=0;i<lstAccmixi.length;i++){
						//													if(lstAccmixi[i].uni_acctNo==iAccountInfo[j].accountNo){
						//													if(lstAccmixi[i].fzcpleix==0){
						//														huoqi+=parseFloat(lstAccmixi[i].zhhuyuee);
						//													}else{
						//														dingqi+=parseFloat(lstAccmixi[i].zhhuyuee);
						//													}
						//													}
						//												}
						//											}
						//										},
						//										selfdefineFailed:function(data){
						//											return;
						//										}
						//									});
															var moneyTotal=UseVol+huoqi+dingqi;
															moneyTotal = moneyTotal.toFixed(2);
															UseVol = UseVol.toFixed(2);
														    huoqi = huoqi.toFixed(2);
														    dingqi = dingqi.toFixed(2);
														    $('#moneyTotal').text(moneyTotal);
														    
									     //		==============	 查询账户详情==============
														    var insum1=0;
														    var insum2=0;
														    var insum3=0;
														    var insum4=0;
														    var insum5=0;
														    var insum6=0;
														    var outsum1=0;
														    var outsum2=0;
														    var outsum3=0;
														    var outsum4=0;
														    var outsum5=0;
														    var outsum6=0;
														    var riqi1;
														    var riqi2;
														    var riqi3;
														    var riqi4;
														    var riqi5;
														    var riqi6;
														    var systime = getSysTimeyyyyMMdd();
														    var riqi1 = getHistoryDateOne(systime,5);
														    var riqi2 = getHistoryDateOne(systime,4);
														    var riqi3 = getHistoryDateOne(systime,3);
														    var riqi4 = getHistoryDateOne(systime,2);
														    var riqi5 = getHistoryDateOne(systime,1);
														    var riqi6 = getHistoryDateOne(systime,0);
														    $.lily.ajax({
																url: 'queryAccountData.do',
																type: 'post', 
																async: false,
																data:{'currentBusinessCode':'01000911'},
																processResponse: function(data){
																	var trademixi =data.getinoutmoney;
																	for(var i=0;i<trademixi.length;i++){
																		if(trademixi[i].tradeTime==riqi1){
																			//riqi1 = trademixi[i].tradeTime;
																			insum1 =trademixi[i].inmoney;
																			outsum1 =trademixi[i].outmoney;
																		}else if(trademixi[i].tradeTime==riqi2){
																			//riqi2 = trademixi[i].tradeTime;
																			insum2 =trademixi[i].inmoney;
																			outsum2 =trademixi[i].outmoney;
																		}else if(trademixi[i].tradeTime==riqi3){
																			//riqi3 = trademixi[i].tradeTime;
																			insum3 =trademixi[i].inmoney;
																			outsum3 =trademixi[i].outmoney;
																		}else if(trademixi[i].tradeTime==riqi4){
																			//riqi4 = trademixi[i].tradeTime;
																			insum4 =trademixi[i].inmoney;
																			outsum4 =trademixi[i].outmoney;
																		}else if(trademixi[i].tradeTime==riqi5){
																			//riqi5 = trademixi[i].tradeTime;
																			insum5 =trademixi[i].inmoney;
																			outsum5 =trademixi[i].outmoney;
																		}else if(trademixi[i].tradeTime==riqi6){
																			//riqi6 = trademixi[i].tradeTime;
																			insum6 =trademixi[i].inmoney;
																			outsum6 =trademixi[i].outmoney;
																		}
																	}
																}
															});
						//								 
														     insum1 = parseFloat(insum1/10000).toFixed(2);
														     insum2 = parseFloat(insum2/10000).toFixed(2);
														     insum3 = parseFloat(insum3/10000).toFixed(2);
														     insum4 = parseFloat(insum4/10000).toFixed(2);
														     insum5 = parseFloat(insum5/10000).toFixed(2);
														     insum6 = parseFloat(insum6/10000).toFixed(2);
														     outsum1 = parseFloat(outsum1/10000).toFixed(2);
														     outsum2 = parseFloat(outsum2/10000).toFixed(2);
														     outsum3 = parseFloat(outsum3/10000).toFixed(2);
														     outsum4 = parseFloat(outsum4/10000).toFixed(2);
														     outsum5 = parseFloat(outsum5/10000).toFixed(2);
														     outsum6 = parseFloat(outsum6/10000).toFixed(2);
														     if(moneyTotal=='0.00'){
														    	 $('#chartFund').hide();
														    	 $('#chartFund1').show();
														    	 $('#caifu').show();
														    }else{
														    	 $('#chartFund').show();
														    	 $('#chartFund1').hide();
														    	var myChart = echarts.init(document.getElementById('chartFund'));
																option = {
															    tooltip : {
															        trigger: 'item',
															        formatter: "{a} <br/>{b} : {c} ({d}%)"
															    },
															    legend: {//图例
															        orient: 'vertical',
															        x:'right',
															        y:'top',
															        itemGap:10,
															        itemStyle:{
															        	normal: {
																        	borderWidth:1,
																        	borderColor:'#333' 
																	    }
															        },
															        textStyle: {  
																		color: '#999',
																		fontFamily: 'microsoft yahei',
																		fontSize: 14
																	},
															        data: ['活期','定期','理财']
															    },
															    color:['#009fe8','#3cbc7e','#f4be19'],  //扇面颜色
															    series : [
															        {
															            name:'财富总览',
															            type: 'pie',
															            radius : '60%',
															            center: ['40%', '50%'], 
															            data:[
															                {value: huoqi, name:'活期'},
															                {value: dingqi, name:'定期'},
															                {value: UseVol, name:'理财'}
															            ],
															            itemStyle: {
															                emphasis: {
															                    shadowBlur: 10,
															                    shadowOffsetX: 0,
															                    shadowColor: 'rgba(0, 0, 0, 0.5)'
															                }
															            }
															        }
															    ]
															};
															myChart.setOption(option); 
														    }
														     //加载折线图
																var myChart3 = echarts.init(document.getElementById('chartPay'));
																var option1 = {
															    title: {
															        //text: '累计支出增长率', 
															        x: 'center',  
															        y: 'top',
															        textStyle: {
															        	color:"#666",
															        	fontSize:14,
															        	fontWeight:'normal'
															        }
															    },
															    tooltip : {
															        trigger: 'axis'
															    },
															    toolbox: {
															        show : true
															    },
															    legend: {
															        data:['收入金额','支出金额']
															    },
															    xAxis : [
															        {
															            type : 'category',
															            boundaryGap : false,
																    	axisLine:{
																		 lineStyle: {
																			color: '#254c79',
																			width: 1,
																			type: 'solid'
																			}
																		},
															            data: [riqi1, riqi2, riqi3,riqi4,riqi5,riqi6]
															        }
															    ],
															    yAxis : [
															        {
															            type : 'value',
																        axisLine:{
																		 	show:false
																		}
															        }
															    ],
															    series : [
															        {
															            name:'收入金额',
															            type:'line',
															            lineStyle:{
															            	normal:{
																            	color:'#009fe8',
																            	width: 2
															            	}
															            },
															            data:[insum1, insum2, insum3,insum4,insum5,insum6]
															        },
															        {
															            name:'支出金额',
															            type:'line',
															            lineStyle:{
															            	normal:{
																            	color:'#3cbc7e',
																            	width: 2
															            	}
															            },
															            data:[outsum1, outsum2, outsum3,outsum4,outsum5,outsum6]
															        }
															    ]
															};
															// 使用刚指定的配置项和数据显示图表。
															myChart3.setOption(option1);
														}else{
															$('.scroll_inner ul').remove();
															$('.scroll_inner').append('<ul id="addAccount"></ul>');
															$('.scroll_inner ul').css('left',0);
															$.lily.ajax({
																url: 'queryAccountMoney.do',
																type: 'post', 
																async: false,
																data:{'currentBusinessCode':'01000911'},
																processResponse: function(data){
																	var trade = data.tradelstAccmixi2;
																	for(var i=0;i<trade.length;i++){
																		htmladdview(trade[i]);
																	}
																	var len = trade.length;
																	if(len > 3){
																		var quickMenuFlag =true;
																		$(".btn_left",$("body")).bind("click",function(){
																			if(quickMenuFlag){
																				return;
																			}
																			quickMenuFlag =true;
																		    $('.scroll_inner ul').animate({left:'+=933px'},500);
																		});
																		
																		$(".btn_right",$("body")).bind("click",function(){
																			if(!quickMenuFlag){
																				return;
																			}
																			quickMenuFlag =false;
																			$('.scroll_inner ul').animate({left:'-=933px'},500);
																		});
																	}
																    }
																});
															function htmladdview(data){
																var xzhileix;
																var kongzhzt;
																var signFlag;
																var voucherStt;
																var list;
																var coreState;
																var alias = data.alias;
																if(alias==null || alias==""){
																	alias="设置别名";
																}
																
																var accountNo1 = data.accountNo;
																var accountNo = data.accountNo;accountNo = $.lily.format.dealAccountNoHide(accountNo);
																var balanceAvailable = parseFloat(data.balanceAvailable).toFixed(2);
																$.lily.ajax({
																	url: "querySignFlag.do",
																	type: 'post', 
																	dataType:'json',
																	async:false,
																	data:{'currentBusinessCode' : '00800368','accountNo' : accountNo1},
																	processResponse: function(responsedata){
																		//kongzhzt = responsedata.kongzhzt;
																		signFlag = responsedata.flag;
																		//voucherStt = responsedata.voucherStt;
																		//list = responsedata.iFixAccountList;
																		//coreState = list[0].state;
																		//xzhileix = list[0].xzhileix;
																	}
																});
																// accountNo=accountNo.substr(0,4)+"********"+accountNo.substr(12,4);
																var html="";
																html+="<li>";
																html+="<div class='card_scroll'>";
																html+="<span class='cardst m_xp' style='text-align:center;' id='two_"+accountNo1+"'>"+alias+"</span>";
																html+="<input class='cardst m_xp' type='text' maxlength='6' id='two1_"+accountNo1+"' style='display:none;width:56px;height:27px;text-align:center;' value='"+data.alias+"'>";
																html+="<p class='logo_card'></p>";
																html+="<p class='code_card'>"+accountNo+"</p>";
																html+="<div class='card_bottom'>";
																html+="<p class='car_txt' >余额&nbsp;&nbsp;<span>"+balanceAvailable+"</span>（元）</p>";
																html+="<p class='car_txt1' style='display:none;'>余额&nbsp;&nbsp;<span>******</span>（元）</p>";
																html+="<span class='icon_eye'></span>";
																html+="</div>";
																if(signFlag == "2"){
																	html+="<div class='card_link'><a data-toggle='lilyMenu' data-menuno='A0050000' data-content='frame_item' data-value='0050010_myDebitCard'>交易明细</a></div>";
																}else{
																	html+="<div class='card_link'><a data-toggle='lilyMenu' data-menuno='A0010000' data-content='frame_item' data-value='transferAccountInline'>行内转账</a><a data-toggle='lilyMenu' data-menuno='A0010000' data-content='frame_item' data-value='transferAccountOutline'>行外转账</a><a data-toggle='lilyMenu' data-menuno='A0050000' data-content='frame_item' data-value='0050010_myDebitCard'>交易明细</a></div>";
																}
														        html+="</div>";
														        html+="</li>";
														        $("#addAccount",$("body")).append(html);
															        updatetwo(accountNo1,data.alias);
															}
															function updatetwo(data,alias) {
																$('#two_'+data).bind('click',function() {
																	$('#two_'+data).hide();
																	$('#two1_'+data).show().focus();
																	$('#two1_'+data).bind('blur',function() {
																		var alias1 =  $('#two1_'+data).val();
																		if(alias1=="" || alias1==null){
																			$('#two1_'+data).hide();
																			$('#two_'+data).show();
																			$('#two_'+data).text("设置别名");
																			alias1="";
																		}else{
																			$('#two1_'+data).hide();
																			$('#two_'+data).show();
																			$('#two_'+data).text(alias1);
																		}
																		/*
																		 * if(alias==alias1){ return; }
																		 */
																		$.lily.ajax({
																			url: 'updateforalias.do',
																			type: 'post', 
																			async: false,
																			data:{'currentBusinessCode':'01000911','accountNo':data,'alias':alias1},
																			processResponse: function(data){
																			    var flag = data.flag;
																			    if(flag=='1'){
																			    	// alert("修改成功");
																			    	$('#two1_'+data).hide();
																			    	$('#two_'+data).show();
																			    	$('#two_'+data).text(alias1);
																			    	$('#two1_'+data).val(alias1);
																			    }
																			    }
																			});
																	});
																});
															}
															$("#tradeDetail1",$("body")).bind("click",function(){
																$('#login_index').hide();
																$('#main-transaction-area').empty().show();
													            $('#main-content').hide();
													            
																$.openWindow({
																tranCode: "transferAccountOutline",
																windowId: "transferAccountOutline" + $.lily.generateUID()
															   });
															})
															$("#zhuanzhang1",$("body")).bind("click",function(){
																$('#login_index').hide();
																$('#main-transaction-area').empty().show();
													            $('#main-content').hide();
													            
																$.openWindow({
																tranCode: "transferAccountOutline",
																windowId: "transferAccountOutline" + $.lily.generateUID()
															   });
															})
															///rightOne = $('.scroll_inner ul li').length-3;
															//leftOne=0;
															$(".scroll_inner ul li").mouseover(function(){
																$(this).addClass("on");
																$(this).find(".card_bottom").css("margin-top","10px").siblings(".card_link").show();
															});
															$(".scroll_inner ul li").mouseout(function(){
																$(this).removeClass("on");
																$(this).find(".card_bottom").css("margin-top","23px").siblings(".card_link").hide();
															});
															//显示隐藏余额
															$(".icon_eye").click(function(){
																var accountNoId = $('#accountNoId').val();
																$(this).toggleClass("openeye").siblings(".car_txt").find("span").toggle();
															}) 
														}
													});
													
													$(".scroll_inner ul li").mouseover(function(){
														$(this).addClass("on");
														$(this).find(".card_bottom").css("margin-top","10px").siblings(".card_link").show();
													});
													$(".scroll_inner ul li").mouseout(function(){
														$(this).removeClass("on");
														$(this).find(".card_bottom").css("margin-top","23px").siblings(".card_link").hide();
													});
													//显示隐藏余额
													$(".icon_eye").click(function(){
														$(this).toggleClass("openeye").siblings(".car_txt").find("span").toggle();
													}); 
										 //------------------------快捷菜单-----------------------//
						//							$.lily.ajax({
						//								url: 'queryquickmenu.do',
						//								type: 'post', 
						//								async: true,
						//								data:{'currentBusinessCode':'01000911'},
						//								processResponse: function(data){
						//									
						//										var menuList = data.menuList;
						//										if(menuList.length==0){
						//											htmladdimage();
						//									    }
						//										for(var i=0;i<menuList.length;i++){
						//											htmladdmenu(menuList[i]);
						//											if(i==menuList.length-1){
						//												htmladdimage();
						//											}
						//										}
						//										
						//										var len = menuList.length;
						//										if(len > 6){
						//											var quickMenuFlag =true;
						//											$("#btn_left1",$("body")).bind("click",function(){
						//												if(quickMenuFlag){
						//													return;
						//												}
						//												quickMenuFlag =true;
						//											    $('.scroll_inner_quick ul').animate({left:'+=952px'},500);
						//											});
						//											
						//											$("#btn_right1",$("body")).bind("click",function(){
						//												if(!quickMenuFlag){
						//													return;
						//												}
						//												quickMenuFlag =false;
						//												$('.scroll_inner_quick ul').animate({left:'-=952px'},500);
						//											});
						//										}
						//										$("#addmenu",$("body")).live("click",function(){
						//											 var windowId = "add_quickmenu" + $.lily.generateUID();
						//							  		          $.openWindow({
						//										    		allowClose: true,
						//													btnClass: 'float-btn',
						//										    		isSmallWindow:true,
						//													appendTo:'body',
						//													windowClass:"common-smallsub-window",
						//													tranCode: "add_quickmenu",
						//													windowId: windowId,
						//													cssHeight:"530",
						//													mvcOptions:{fixedHeight:true},
						//													cssWidth:"1015",
						//													hasHeader:false
						//							  		          });
						//										});
						//										    
						//									
						//								    }
						//								});
													
														
														
														var indexlis = 0;
														//导航二级菜单
											        	  $(function(){
											        		  		
											        		  		$(".nav #firsrMenu a").on("mouseenter",function(event){
											        		  			event.preventDefault();
											        		  			//$(this).addClass("cur").parents("li").siblings("li").find("a").removeClass("cur");
											        		  			var i=$(this).parents("li").index();
											        		  			$(".twoMenu").css({
											        		  				"display":"block"
											        		  			});
					        		  			$(".twoMenu").find("ul").eq(i).css({
												        		  				"display":"block"
												        		  			}).siblings().css({
												        		  				"display":"none"
												        		  			});
											        		  			
											        		  			
											        		  		});
											        		  		$(".twoMenu").find("a").on("click",function(event){
											        		  			event.preventDefault();
											        		  			$(this).parents(".twoMenu").css({"display":"none"});
											        		  			$(this).parents("ul").css({"display":"none"});
											        		  		});
											        		  		$(".nav").on("mouseleave",function(event){
											        		  			event.preventDefault();
											        		  			$(this).find(".twoMenu").css({"display":"none"});
											        		  		});
											        		  		
											        		  		
											        	  			$('#indexHref').bind('click.main-content',function(){
											        	  				$(".nav li").removeClass("cur");
											        	  				 $(this).addClass("cur");
											        	  				 $('#main-transaction-area').empty().hide();
											        	  	             $('#main-content').show();
											        	  	            $('.scroll_inner ul').remove();
																		$('.scroll_inner').append('<ul id="addAccount"></ul>');
																		$('.scroll_inner ul').css('left',0);
																		
																		phoneOrWeChatSet();
																		
											        	  	           function htmladdview(data){
											        	  	        	    var xzhileix;
											        	  	        	    var kongzhzt;
											        	  	        	    var signFlag;
											        	  	        	    var voucherStt;
																			var list;
																			var coreState;
																			var alias = data.alias;
																			if(alias==null || alias==""){
																				alias="设置别名";
																			}
																			
																			var accountNo1 = data.accountNo;
																			var accountNo = data.accountNo;accountNo = $.lily.format.dealAccountNoHide(accountNo);
																			var balanceAvailable = parseFloat(data.balanceAvailable).toFixed(2);
																			$.lily.ajax({
																				url: "querySignFlag.do",
																				type: 'post', 
																				dataType:'json',
																				async:false,
																				data:{'currentBusinessCode' : '00800368','accountNo' : accountNo1},
																				processResponse: function(responsedata){
																					//kongzhzt = responsedata.kongzhzt;
																					signFlag = responsedata.flag;
																					//voucherStt = responsedata.voucherStt;
																					//list = responsedata.iFixAccountList;
																					//coreState = list[0].state;
																					//xzhileix = list[0].xzhileix;
																				}
																			});
																			// accountNo=accountNo.substr(0,4)+"********"+accountNo.substr(12,4);
																			var html="";
																			html+="<li>";
																			html+="<div class='card_scroll'>";
																			html+="<span class='cardst m_xp' style='text-align:center;' id='two_"+accountNo1+"'>"+alias+"</span>";
																			html+="<input class='cardst m_xp' type='text' maxlength='6' id='two1_"+accountNo1+"' style='display:none;width:56px;height:27px;text-align:center;' value='"+data.alias+"'>";
																			html+="<p class='logo_card'></p>";
																			html+="<p class='code_card'>"+accountNo+"</p>";
																			html+="<div class='card_bottom'>";
																			html+="<p class='car_txt' >余额&nbsp;&nbsp;<span>"+balanceAvailable+"</span>（元）</p>";
																			html+="<p class='car_txt1' style='display:none;'>余额&nbsp;&nbsp;<span>******</span>（元）</p>";
																			html+="<span class='icon_eye'></span>";
																			html+="</div>";
																			if(signFlag == "2"){
																				html+="<div class='card_link'><a data-toggle='lilyMenu' data-menuno='A0050000' data-content='frame_item' data-value='0050010_myDebitCard'>交易明细</a></div>";
																			}else{
																			html+="<div class='card_link'><a data-toggle='lilyMenu' data-menuno='A0010000' data-content='frame_item' data-value='transferAccountInline'>行内转账</a><a data-toggle='lilyMenu' data-menuno='A0010000' data-content='frame_item' data-value='transferAccountOutline'>行外转账</a><a data-toggle='lilyMenu' data-menuno='A0050000' data-content='frame_item' data-value='0050010_myDebitCard'>交易明细</a></div>";
																			}
																	        html+="</div>";
																	        html+="</li>";
																	        $("#addAccount",$("body")).append(html);
																		        updatetwo(accountNo1,data.alias);
																		}
																		$.lily.ajax({
																			url: 'queryAccountMoney.do',
																			type: 'post', 
																			async: false,
																			data:{'currentBusinessCode':'01000911'},
																			processResponse: function(data){
																				var trade = data.tradelstAccmixi2;
																				for(var i=0;i<trade.length;i++){
																					htmladdview(trade[i]);
																				}
																				var len = trade.length;
																				if(len > 3){
																					var quickMenuFlag =true;
																					$(".btn_left",$("body")).bind("click",function(){
																						if(quickMenuFlag){
																							return;
																						}
																						quickMenuFlag =true;
																					    $('.scroll_inner ul').animate({left:'+=933px'},500);
																					});
																					
																					$(".btn_right",$("body")).bind("click",function(){
																						if(!quickMenuFlag){
																							return;
																						}
																						quickMenuFlag =false;
																						$('.scroll_inner ul').animate({left:'-=933px'},500);
																					});
																				}
																			    }
																			});
																		function updatetwo(data,alias) {
																			$('#two_'+data).bind('click',function() {
																				$('#two_'+data).hide();
																				$('#two1_'+data).show().focus();
																				$('#two1_'+data).bind('blur',function() {
																					var alias1 =  $('#two1_'+data).val();
																					if(alias1=="" || alias1==null){
																						$('#two1_'+data).hide();
																						$('#two_'+data).show();
																						$('#two_'+data).text("设置别名");
																						alias1="";
																					}else{
																						$('#two1_'+data).hide();
																						$('#two_'+data).show();
																						$('#two_'+data).text(alias1);
																					}
																					/*
																					 * if(alias==alias1){ return; }
																					 */
																					$.lily.ajax({
																						url: 'updateforalias.do',
																						type: 'post', 
																						async: false,
																						data:{'currentBusinessCode':'01000911','accountNo':data,'alias':alias1},
																						processResponse: function(data){
																						    var flag = data.flag;
																						    if(flag=='1'){
																						    	// alert("修改成功");
																						    	$('#two1_'+data).hide();
																						    	$('#two_'+data).show();
																						    	$('#two_'+data).text(alias1);
																						    	$('#two1_'+data).val(alias1);
																						    }
																						    }
																						});
																				});
																			});
																		}
																		$(".scroll_inner ul li").mouseover(function(){
																			$(this).addClass("on");
																			$(this).find(".card_bottom").css("margin-top","10px").siblings(".card_link").show();
																		});
																		$(".scroll_inner ul li").mouseout(function(){
																			$(this).removeClass("on");
																			$(this).find(".card_bottom").css("margin-top","23px").siblings(".card_link").hide();
																		});
											        	  			});
											        	  	})
														
														
											        	  //查询消息
						//						        	var paramforSM={"currentBusinessCode":'01100012'};
						//						        	$.lily.ajax({
						//					        			  url: 'selectMessage.do',
						//					        			  data:paramforSM,
						//								          type: 'post', 
						//								          dataType:'json',
						//								          async: false,
						//								          processResponse: function(data){
						//								        	  var customMsg=data.iMessage;
						//								              if(data.endDate!=null||data.flag!=""){
						//								        	  var endDate=data.endDate.substr(0,8);
						//								        	  var flag=data.flag.substr(0,8);
						//								        	 if(endDate-flag>0&&endDate-flag<100){
						//								        		 $(".msg_list").append('<li>证书即将到期，请及时更新</li>');
						//								        	  }
						//								        	 if(customMsg==null||customMsg==''){
						//								        		  $(".msg_list").append('<li>暂无提醒信息</li>');
						//								        	  };
						//								        	 for(var i=0;i<customMsg.length;i++){
						//								        		  var cm=customMsg[i];
						//								        		  var messageContent=cm.messageContent;
						//								        	      $(".msg_list").append('<li>'+messageContent+'</li>'); 
						//								        	  }
						//								        	  
						//								        	  if(customMsg.length > 2){
						//								        		  var iCount = setInterval(autoScroll, 3000);
						//								        	         function autoScroll(){  
						//								        		       $(".msg_article").find(".msg_list").animate({  
						//								        				   marginTop : "-29px"
						//								        				   },500,function(){  
						//								        				       $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
						//								        				       });
						//								        			   } 
						//								        	         $("#animateStop",$("body")).bind("click",function() {
						//								        	             clearInterval(iCount);
						//								        	         });
						//								        			 $(function(){  
						//								        				 autoScroll(".msg_article");//  setInterval(autoScroll(".msg_article"),0);
						//								        			 })  
						//								        	        
						//								        	  }
						//								            }
														          }
						//					        		});
									       //------------------------添加代码结束-----------------------//
													
													      	  /*if ($.lily.sessionData.birthday =="1")
													      		{  
													      		  if ($.lily.sessionData.customerSex =="0"){
													      			  $(".birthday-show").show();
													      			  $("#birthday").attr("src","images/birthday1.png");
													      		  }
													      		  else if ($.lily.sessionData.customerSex =="1"){
													      			  $(".birthday-show").show();
													      			  $("#birthday").attr("src","images/birthday2.png");
													      			  }
													      		 }
													  	}else */
													  		if(data.customerStt == '1' || data.customerStt == '5'){//data.customerStt == '1' || data.customerStt == '5'
											  		          
													  		  $(window).scrollTop(0);
											      	          openAfterLogin(data);			        	
											  		          $.lily.CONFIG_SESSION_ID  =  data.sessionId;
														      $.lily.sessionData = data;
											  		          //currentMVC.currentWindow.close();
														      //首次登录插入图标
														      $.lily.ajax({
											        			  url: 'insertIntoImage.do',
											        			  data:{"currentBusinessCode":'97500120'},
														          type: 'post', 
														          dataType:'json',
														          async: false,
														          processResponse: function(data){
														        	  
														        	  }
														          })
														      //首次登录设置问题
											  		          var windowId = "00652006_firstloginpwd" + $.lily.generateUID();
											  		          $.openWindow({
														    		allowClose: false,
																	btnClass: 'float-btn',
														    		isSmallWindow:true,
																	appendTo:'body',
																	windowClass:"common-smallsub-window",
																	tranCode: "00652006_firstloginpwd",
																	windowId: windowId,
																	cssHeight:"480",
																	mvcOptions:{fixedHeight:true},
																	cssWidth:"700",
																	hasHeader:false
											  		          });
											  		         
													  	}
													/*//关闭打开窗口
													currentMVC.currentWindow.close();
													$("#loginexplain").remove();
													if(parentMVC){
														if(responseData){
															if(responseData.code){//弹窗
															openTabBarWindow(responseData.code,parentMVC.currentStepDiv);
															}else if(responseData.step){//当前MVC某一步
															parentMVC.gotoStep(responseData.step,responseData);
															}//此处可继续扩展	
														}else{
															parentMVC.nextStep();//当前MVC下一步
														}
													}*/
													  		var retCodeMoblieMsg =data.retCode;
													  		var errorMsgMoblieMsg =data.errorMsg;
													  		if(retCodeMoblieMsg == 'EBMB8072'){
													  			alert(errorMsgMoblieMsg);
													  		}
													  		
													  		getTransfinite();
													},
													
													selfdefineFailed:function(data){
														if(data.ec=="EBPB0000"){
															$.openWindow({
											        			allowClose: true,
														    	isSmallWindow:true,
																appendTo:'body',
																windowClass:"model model-a",
																tranCode: "userLoginErrorMessage",
																windowId: "userLoginErrorMessage" + $.lily.generateUID(),
																cssHeight:"330",
																cssWidth:"512",
																param:{state:'0'}
											  		        });
														    $("#verifyImgPop").attr('src', 'VerifyImage?update=' + Math.random());
														    $('#checkCodePop').val('');
														    return;
														}else{
															 alert(data.em);
															 $("#verifyImgPop").attr('src', 'VerifyImage?update=' + Math.random());
															 $('#checkCodePop').val('');
														}
													}
													
												});
	/*						   }
	   });*/
	  /* }
	   });*/
			   //------------------------添加换肤代码-----------------------//
				function setStyle(name){
					$("#style-theme").attr("href",'css/'+name+'.css');
				};
				
				//点击事件弹出换肤框
				 $('.hc_skin .hc_hf').click(function(){ 
					 $('.hc_skin').addClass('hc_skin_ss').siblings().removeClass('hc_skin_ss');
					 $('#hc_chenger_index').show();
					 
				 })
				    var pageStyle;
				// 点击换肤框获取title	
				$('#hc_chenger_index .hc_chenger_a1').click(function(){
					pageStyle=$(this).attr("title");
					setStyle($(this).attr("title"));
					
				});

			 	// 点击保存按钮关闭弹出框同时保存cookie myskin
				$('#hc_btn_save').click(function(){
					$('.hc_skin').removeClass('hc_skin_ss');
				    $("#hc_chenger_index").hide();
						$.lily.ajax({
							url: 'updatePageStyle.do',
							type: 'post', 
							dataType:'json',
							data:{
								"currentBusinessCode":"00400105",
								"pageStyle":pageStyle
								},
							processResponse: function(data){
							}
						});
					/*	if(!$.lily.CONFIG_SESSION_ID)
						{
						$.openWindow({
							appendTo:'body',
							isSmallWindow:true,
							title:'登录',

							allowClose:true,
							windowClass:'common-smallsub-window-login',
							tranCode : 'login',
						
							cssWidth:600,
							cssHeight:800,
							hasHeader:false
							
						});
						}
					else{
						$.openWindow({
//								backdrop: true,	   //点击关闭
								allowClose: true,
								btnClass: 'float-btn',
								tranCode: "saveSuccess",
								isSmallWindow:true,
								appendTo:'body',
								windowClass: "common-smallsub-window",
								cssHeight:'260',
								mvcOptions:{fixedHeight:false},
								cssWidth:'500',
								hasHeader:false
							});
					}
					*/
				 		
				});
//				var cip_style;
//				$.lily.ajax({
//					url: 'showPersonalSettingPage.do',
//					type: 'post', 
//					dataType:'json',
//					data:{"currentBusinessCode":"00400105"},
//					processResponse: function(data){
//						cip_style=data.cip_style;
//						setStyle(cip_style);
//					}
//				});
				//取消按钮
				$('#hc_btn_ress').click(function(){
					$.lily.ajax({
						url: 'showPersonalSettingPage.do',
						type: 'post', 
						dataType:'json',
						data:{"currentBusinessCode":"00400105"},
						processResponse: function(data){
							var changeStyle=data.cip_style;
							setStyle(changeStyle);
						}
					});
					$("#hc_chenger_index").hide();
				});
		 }
		 
			function getMenu(){
				// 获得菜单
		        $.lily.ajax({
		            url: 'getMenu.do',
		            type: 'post',
		            data: {'flag':'1'},
		            async: false,
		            processResponse: function(data){
		            $.lily.menuInfo = data.menuInfoAll;
		            var menuList = data.menuInfoAll;
		            var menuNo;
			 		var menuName ;
			 	    var menuDesc;
			 		var menuLevel;
			 		var menuAppCode;
			 		var menuHot;
			 		var menuState;
			 		var menuFather;
			 		var menuSequ;
			 		var hot;
			 		var param='<li id="indexHref" button-toggle="button" class="cur"><a href="javascript:void(0)">首页</a></li>';
			 		var secondParam='';
			 		var menuNoHotTop='';// 用于得到 热门应用的功能中的 三(二)级菜单功能 所对应的一级菜单编号
		            var menuAppCodeHotTop='';
		            var hotNum = '9'; //默认显示9个
		            $(".twoMenu .nav_inner").empty().append('<ul class="none"><li id="indexSec"><a class="f_bold" href="javascript:;"> 首页</a></li></ul>');
			 		for(var i=0;i<menuList.length;i++){
		            	menuNo = menuList[i].menuNo;
		            	menuName = menuList[i].menuName;
		            	menuDesc=  menuList[i].menuDesc;
		            	menuLevel= menuList[i].menuLevel;
		            	menuAppCode= menuList[i].menuAppCode;
		            	menuHot= menuList[i].menuHot ;
		            	menuState= menuList[i].menuState ;
		            	menuFather= menuList[i].menuFather ;
		            	menuSequ= menuList[i].menuSequ ;
		            	var menuIcons= menuList[i].menuIcon;
		            	var menuIcon = '10';
		            	var menuPCIcon;
		              	if(menuIcons.indexOf('@') > -1){
		              		// 数组0位普通版样式
		              	    menuIcon= menuIcons.split('@')[0];
		              	    // 数组0为热点图标位置 1为菜单图标
		              		menuPCIcon= menuIcon.split('$');
		              	}
		              	function isIE() { //ie?
		              		return window.ActiveXObject ? true : false;
							 /*if (!!window.ActiveXObject || "ActiveXObject" in window)
							 return true;
							 else
							 return false;*/
						}
			       	   if(menuLevel=="0"){// 添加一级菜单
		           		   if(menuHot=='0'){
		        			   hot='';
		           		   }
		           		   else{
		           			   if(isIE()){ //ie
		           				   hot='<span style="top: -12px;"><img src="images/hotNewSet.png" style="margin-top:-4px;" /></span>';
		           				   /*hot='<span style="top: -12px;"><img src="images/hot.png" /></span>';*/
		           			   }else{
		           				   hot='<span><img src="images/hotNewSet.png" style="margin-top:-4px;" /></span>';
		           				   /*hot='<span><img src="images/hot.png" /></span>';*/
		           			   }
		        		   }
		           		  param = param+'<li data-toggle="lilyMenu" data-menuno='+menuNo+' data-content="frame_item" data-value='+menuAppCode+'><a href="javascript:void(0)">'+menuName+''+hot+'</a></li>';
//		           		  secondParam=secondParam+'<ul class="none" data-menuid='+menuNo+'></ul>';
		           		  $(".twoMenu .nav_inner").append('<ul class="none" data-menuid='+menuNo+'></ul>');//首页二级菜单
		          	   }else{// 添加热门服务
			       		   	if(menuHot=='1'){
			       		   	  var temp = menuNo.split('');
			       		   	  menuNoHotTop = 'A00'+temp[3]+'0000';// 利用菜单代码规则进行截取获得最高级菜单代码
				       		  var paramHot='<li><a href="javascript:void(0)"><span id="'+ menuNo + '" data-toggle="lilyMenu" data-menuno="'+menuNoHotTop+'" data-content="frame_item" data-value="'+menuAppCode+'"/>'+menuName+'</a></li>';
				       		  $("#hotService").append(paramHot); 
				       		  $('#' +　menuNo).css('background-position', menuPCIcon[0] + 'px 0px');
				       		  hotNum++;
			       		   	}
			       	   }
			       	   
				       	if(menuLevel=='1'){
			   		   		$("ul[data-menuid='"+menuFather+"']").append('<li data-value="'+menuAppCode+'" data-content="frame_item" data-menuno="'+menuFather+'" data-toggle="lilyMenu" class=""><a href="javascript:void(0)">'+menuName+'</a></li>');
			   		   		
			 		
			   		   	}
		           	}
			 		
			 		
			 		
			 		
			 		
			 		$('#hotService').width(hotNum * $('#hotService li').width());
//		            param=param+' <li style="background:none;" id="loginArea"><input type="button" value="登录" id="login" class="login-s" /><input type="button" value="注册" id="register" /></li>';
		            $("#firsrMenu").empty().append(param);
		            $('#indexHref,#indexSec').bind('click.main-content',function(){
		  				$(".nav li").removeClass("cur");
		  				 $(this).addClass("cur");
		  				 $('#main-transaction-area').empty().hide();
		  	             $('#main-content').show();
		  	           if($.lily.CONFIG_SESSION_ID){
				 			var paramforMsg={"currentBusinessCode":'01100011'};
			        		$.lily.ajax({
			        			  url: 'selectPerInfo.do',
			        			  data:paramforMsg,
						          type: 'post', 
						          dataType:'json',
						          async: false,
						          processResponse: function(data){
						        	  $("#customMsg").text(data.customerMessage);
						          }
			        		}); 
				 		}
		  			});
		            
		            
		            // 登陆
		    		$('#login').bind('click',function(){
		    			$.lily.login.judgeLogin4Common();
		    		});
		    		// 注册
		    		$('#register').bind('click',function(){
		    			window.open($.lily.getContextPath()+'/register.html','_blank');
		    		});
		          }
		       });
			}
			function getTransfinite(){
				$.lily.ajax({
      			  url: 'judgeCstLimitFirstPage.do',
      			  data:{"currentBusinessCode":"00200111"},
			      type: 'post', 
			      dataType:'json',
			      async: false,
			      processResponse: function(data){
			          var nobdayTransfiniteFlag = data.nobdayTransfiniteFlag;
			          var nobsinTransfiniteFlag = data.nobsinTransfiniteFlag;
			          var comdayTransfiniteFlag = data.comdayTransfiniteFlag;
			          var comsinTransfiniteFlag = data.comsinTransfiniteFlag;
			          if(nobdayTransfiniteFlag=='1' && nobsinTransfiniteFlag=='1'){//贵宾客户日累计、单笔都超限超限
			        	  $("#warning").show();
			        	  $("#warningCstType").text("贵宾版");
			        	  $("#warningMsg").text("单笔限额500万元，日累计限额1000万");
			          }else if(nobdayTransfiniteFlag=='1' && nobsinTransfiniteFlag!='1'){//贵宾客户日累计超限
			        	  $("#warning").show();
			        	  $("#warningCstType").text("贵宾版");
			        	  $("#warningMsg").text("日累计限额1000万");
			          }else if(nobdayTransfiniteFlag!='1' && nobsinTransfiniteFlag=='1'){//贵宾客户单笔超限
			        	  $("#warning").show();
			        	  $("#warningCstType").text("贵宾版");
			        	  $("#warningMsg").text("单笔限额500万元");
			          }
			          if(comdayTransfiniteFlag=='1' && comsinTransfiniteFlag=='1'){//普通客户日累计、单笔超限
			        	  $("#warning").show();
			        	  $("#warningMsg").text("单笔限额100万元，日累计限额300万");
			          }else if(comdayTransfiniteFlag=='1' && comsinTransfiniteFlag!='1'){//普通客户日累计超限
			        	  $("#warning").show();
			        	  $("#warningMsg").text("日累计限额300万");
			          }else if(comdayTransfiniteFlag!='1' && comsinTransfiniteFlag=='1'){//普通客户单笔超限
			        	  $("#warning").show();
			        	  $("#warningMsg").text("单笔限额100万元");
			          }
			          $('#joinWhiteList').bind('click',function(){
			        	  $.lily.ajax({
			      			  url: 'selectCstMsg.do',
			      			  data:{"currentBusinessCode":"01000879"},
						      type: 'post', 
						      dataType:'json',
						      async: false,
						      processResponse: function(data){
						    	  var accountName = data.accountName;
			        	          $.openWindow({
								      backdrop: true,	   // 点击关闭
								      allowClose: true,
								      btnClass: 'float-btn',
								      tranCode: "joinWhiteListOperation",
								      param:{accountName:accountName},
								      isSmallWindow:true,
								      appendTo:'body',
								      windowClass: "common-smallsub-window",
								      cssHeight:'600',
								      mvcOptions:{fixedHeight:false},
								      cssWidth:'500',
								      hasHeader:false
							      });
			        	          $("#warning").hide();
						      }
			        	  });
			    	  });
			      }
      		});
			}

		    function getFundPro() {
		    	$("#applyTaxhide").remove();
		    	//添加云质押
		    	$("#fundProduct_Y").empty().append('<a data-toggle="lilyMenu" data-menuno="A0080000" data-content="frame_item" data-value="0080044_Instructions" href="javascript:void(0)" class="btn_detail">详情</a>');
		    	$("#fundProduct_1").empty().append('<a data-toggle="lilyMenu" data-menuno="A0080000" data-content="frame_item" data-value="0080010_Instructions" href="javascript:void(0)" class="btn_detail">详情</a>');
		    	$("#fundProduct_2").empty().append('<a data-toggle="lilyMenu" data-menuno="A0080000" data-content="frame_item" data-value="0080020_Instructions" href="javascript:void(0)" class="btn_detail">详情</a>');
		    	$("#fundProduct_3").empty().append('<a data-toggle="lilyMenu" data-menuno="A0080000" data-content="frame_item" data-value="0080030_Instructions" href="javascript:void(0)" class="btn_detail">详情</a>');
			}
		 
		   //------------------------添加换肤代码结束-----------------------//
		    	//登录展示
				 function openAfterLogin(data){
					if(!$.cookie("lfperbankck")){
						new Animate($("#guide1"),{});
						$.cookie('lfperbankck','1',{
							"expires":3*365
						});
					}
			    	  $.lily.CONFIG_SESSION_ID  =  data.sessionId;
			    	  $.lily.sessionData = data;
			    	  $('#userSign').hide();
			    	  $("#login_index").hide();
			    	  $('#loginArea').hide();
			    	  $('#userExit').show();
			    	  //var userName='<span>'+data.session_customerNameCN+'，欢迎进入网上营业厅！</span>';
			    	  //$('span', $('#userExit')).remove();
			    	  //$('#userExit').prepend(userName);
//			    	  $.lily.ajax({
//			  	            url: 'queryCstMarketing.do',
//			  	            type: 'post',
//			  	            data:{'currentBusinessCode':'01500001'},
//			  	            async: false,
//			  	            processResponse: function(marketData){
//			  	            	if (marketData.MarketingItem.length != 0){
//				  	            	var MarketingItem = marketData.MarketingItem;
//				  	            	appendMarketing(MarketingItem,"010001");
//			  	            	}
//			  	            }
//			    	  });		   
				   }
				 
				//忘记密码		 
		 		$("#forPassword").bind('click',function(){
//		 			$('#login_index').hide();
//					$('#main-transaction-area').empty().show();
//		            $('#main-content').hide();
//					$.openWindow({
//					tranCode: "forPassword",
//					windowId: "forPassword" + $.lily.generateUID()
//				   });
		 			var datelistfor={
			 				"requestId":"20181029210608146559",
			 				"appId":"001",
			 				"appChaId":"0001",
			 				"interfaceId":"acctOpen",
			 				"applicationId":"applicationId",
			 				"version":"1.0",
			 				"timeStamp":"20181030184750",
			 				"userData":"{'ip':'127.0.0.1','version_num':'0.0.1'}",
//			 				"openId":"sg",
			 				"idName":"M79ztth6mWA0mqhbkHH3ByaxaTdc2h28UwTtVCjI6OD1WSSodBny3Lzaas32V9rrUpwz91SRfwmNv6Vy8HyNIXj/L9umqQu/P5yfPyE9ezkF/pWoQH25lsaECpEFyMUfHiH8OktBx/l8aTRbLN2bQwWCT67WnzE6i9haGt4+Em9XeAordiExuqD7PoY0QZTQStBVXQ/OLaszEqjkEYgkjabdm2gTHVJp2XKKyMkxqroPZqMYT7jWOq4xwdbiIdRn2sYWl9c7bPbsFfkAH8iN+juOdNKJE0hLdJmytxtAD3g+RrARLS/NTgK+7l+rER8pilrDvDxZL3fxGhJzDYxoGA==",
			 				"idNo":"Tjae6RS+nCodUW5GLC2IhK1N/6GVDIkm/vEUfuaBmZiZQPpU5Lb3wbDqRtEAsQnqT6LZXgSHQmRV3vaYny02yH35gxgO49q0fiYISlfm0P3d8Jf1a1Dtk4bqXk0+S2kDzvDwZOSLfmKDgAgeMm5FJclG6xZXWEo1wDJmBYAPq9QBOUqD9qsVDhtoQDf12hBmT7UP+bd84HXGL5+LgPk8A8OGSrDYDGiCyr1cZIdoCVehpFcTMgD7u/UpYoSKTK6ze0LV+lKRMW0kuI8bifdrKBJLpU2poaAs/ioiScrw/hlmmxNZQvX7aIcBENTLb/VpfrhVdf8QXQdbBlh6kG8TMw==",
//			 				"bindCard":"6798752666666666",
//			 				"bindTele":"15210026151",
			 				'signature':"ZoUGMiQmBxj4LW8FK5CO8HrHaQrvd9clkXUL6xSM1FFnzdC3/Xn8l0PWiJn6w6as59xxI22LRjVLlsSxXjBmCU3NpO/JuT66pVBPLnDEA33yeZy/KF3n9O2Eu7D0j0wD61EVvVT7ImoKUZTfMvOkkbyu2U+ilvcvYHcubYtaGLV3iifMxvwNMZayXDB6KDn/+sT32fLKOwqoTxqnW4bUxB7zPEKrUDjZGrf9xKroBP9jYZEe6DjH1Ir3kcZyweZpfA3sc96rtTY24tNJpbnSYtYipG9tIEJrsrtfpOBYe6y7KaRd132RFQCNg4lw9uAYUOM8BZp5OwIqPMQxiNKgxQ==",
			 		        'url':'k0XOphFu4xyQHFkauxjJSttOsh4TntwGgz2vjrGST2F9zBtiN9gyk/DLXL8LWHiXaT7WfGru201LMbJo+CAgqd+fO/LWvZfF1UihNOiQXk867rgsb9nBuM+TOGDZm6Ez+i+gJ9eW35ZXjS7hHqLVaS8l4JX4wFuXqk46cm+1HoWacAvL/1pYHEtpNU/jru4TkpT4SmWCw8UmTXe+AJ804uRWugbvd0EUrZSgkxCKhNWzwyZHvDXaXGk8D1hZ3HFFACkkqhiy1ybrF9qOG5bF8R1fz4kP2NPpSXcWdp8z5JOi7FR1995U3JftH/xncH9jOTgBuI9/gbxlF31mxbBj2A=='	
		 			}

		 			$.ajax({
		  	            url: 'acctOpen.do',	
		  	            type: 'post',
		  	            data:datelistfor,
		  	            async: false,
		  	            success: function (data,status) {
                           document.write(data);
				},
				fail: function(data, status, c){
                           document.write(data.responseText);
	            }
//		  	          processResponse: function(data){
//		  	        	document.write(data.responseText);
//		  	          }
		    	    });
		 		});
		 		//储蓄存款页面拼接
		    	function depositView(chanpshm,cunrzxje,interestRate,i,chapbhao) {
		    		var desc;
		    		var bkg;
		    		var attrA;
		    		var data = {'chanpshm':chanpshm,'cunrzxje':cunrzxje,'interestRate':interestRate,'chapbhao':chapbhao};
		    		if (i == 0) {
						desc = "零存整取 一次签约 两份利息";
						bkg = "<li class='ft_li'>";
						attrA = "<a id="+data.chapbhao+" data-toggle='lilyMenu' data-menuno='A0030000' data-content='frame_item' data-menuCode='01000800_shuangxibao' data-value='01000800_shuangxibao' href='javascript:void(0)'>购买</a></div>";
					}else if (i == 1) {
						desc = "1元起存 自动定存 支持漏存";
						bkg = "<li class='sc_li'>";
						attrA = "<a id="+data.chapbhao+" data-toggle='lilyMenu' data-menuno='A0030000' data-content='frame_item' data-menuCode='01000800_yuecunbao' data-value='01000800_yuecunbao' href='javascript:void(0)'>购买</a></div>";
					}
					var html = "";
					html += bkg;
					html += "<div class='dm_title'><p>"+chanpshm+"</p></div>";
					html += "<div class='dm_content'><dl><span>"+desc+"</span></dl>";
					html += "<dl><dt>起购金额</dt><dd class='dm_content_stMon'>"+cunrzxje+"起购</dd></dl>";
					html += "<dl><dt>预期年化收益率</dt><dd class='dm_content_rate'><label>"+interestRate+"%</label></dd></dl></div>";
					html += "<div class='dm_btn'>";
					html += attrA;
					html += "</li>";
					$("#depositMoney",$("body")).append(html);
					$("#"+chapbhao,$("body")).data("PARAMS",data);
				}
		    	//查询储蓄存款
		    	for( var i=0;i<2;i++){
		    		var chapbhao = '010035';
		    		if (i == 0) {
		    			chapbhao = '010035';
					} else if (i == 1){
						chapbhao = '010036';
					}
			    	$.lily.ajax({
			    		url: 'structuredDepositsIndex.do',
			    		type: 'post', 
			    		dataType:'json',
			    		async: false,
			    		data:{'currentBusinessCode':'01000831','chapbhao':chapbhao},
			    		processResponse: function(data){
			    			var istructuredDepositsList = data.istructuredDepositsList_bei;
			    			var icunqiiiiList = data.icunqiiiiList_jiebei;
			    			chapbhao = istructuredDepositsList[0].chapbhao;
		    				var cunkzlei = istructuredDepositsList[0].cunkzlei;
		    				var chanpshm = istructuredDepositsList[0].chanpshm;
		    				var cunrzxje = parseFloat(icunqiiiiList[0].cunrzxje).toString();
		    				if (cunrzxje.length >= 4) {
		    					cunrzxje = parseFloat(cunrzxje)/10000;
		    					cunrzxje = cunrzxje.toString() + "万";
							}else{
								cunrzxje += "元";
							}
		    				var cunqi = icunqiiiiList[0].cunqiiii;
		    				if(cunqi=="1Y"){
		    					cunqi = "12M";
		    				}else if(cunqi=="2Y"){
		    					cunqi = "24M";
		    				}else if(cunqi=="3Y"){
		    					cunqi = "36M";
		    				}else if(cunqi=="5Y"){
		    					cunqi = "60M";
		    				}
		    				$.lily.ajax({
		    					url: 'selectRateInfoIndex.do',
		    					type: 'post', 
		    					dataType:'json',
		    					async: false,
		    					data:{'chanphao' : chapbhao,
		    					      'cunkzlei' : cunkzlei,
		    						  'huobdaih' : '01',
		    						  'cunqiiii' : cunqi,
		    						  'currentBusinessCode' : '01000832'},
		    					processResponse: function(data){
	    						 	var interestRateList = data.interestRateListforJGH;
	    						    for(var k=0;k<interestRateList.length;k++){
	    						    	var cunqiiii = interestRateList[k].cunqiiii;
	    						    	if(cunqiiii == cunqi){
	    						    		var interestRate = parseFloat(interestRateList[k].jizhunll).toFixed(2).toString();
	    						    	}
	    						    }
		    						depositView(chanpshm,cunrzxje,interestRate,i,chapbhao);
		    					}
		    				});
			    		}
			    	});
		    	}
		 		//理财产品页面拼接
		 		function htmlview(data){
		 			        var rate=data.GuestRate*100;
		 			        //rate=$.lily.format.toCashWithComma(rate.toFixed(2));
		 			       rate = (parseFloat(rate)).toFixed(3).toString()+"%";
		 			        if(data.PrdTemplate=='1100'){
		 			        	rate = queryFinanceProductYield(data.PrdCode);
		 			        	data.rate = rate;
		 			        }
		 			        var pfirst=data.PfirstAmt/10000;
		                	var html="";
		                	html+="<li>";
		                	html+="<div class='hc_sityeli_div'><p>"+data.PrdName+"</p><span class='m_xp'>新品</span></div>";
		                	html+="<div class='hc_sityeli_mess'><dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New1'>";
		                	html+="<dd class='hc_mess_dd'><span class='hc_dd_span'>"+rate+"</span></dd><dt class='hc_mess_dt'>年化收益率</dt></dl>";
		                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New2'><dt class='hc_mess_dt'>最低认购金额</dt>";                                                                        // "+data.RiskLevel+"
		                	html+="<dd class='hc_mess_dd'><span class='hc_dd_span2'>"+pfirst+"万元</span></dd></dl>";
			                if(data.RiskLevel=='1'){
			                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>谨慎型</p></dd></dl>";//
			                	}
			                else if(data.RiskLevel=='2'){
			                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>稳健型</p></dd></dl>";
			                	}
			                else if(data.RiskLevel=='3'){
			                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>平稳型</p></dd></dl>";
			                	}
			                else if(data.RiskLevel=='4'){
			                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>平衡型</p></dd></dl>";
			                	}
			                else if(data.RiskLevel=='5'){
			                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>进取型</p></dd></dl>";
			                	}
		                	html+="</div><div class='hc_sityeli_input'><a id="+data.PrdCode+" data-toggle='lilyMenu' data-menuno='A0040000' data-content='frame_item' data-menuCode='financial_product_buy' data-value='query_buy_financial_product' class='btn_detail' href='javascript:void(0)'>购买</a></div>";//<input type='text' class='hc_input_type' placeholder='输入购买金额'>
			               // html+="</div><div class='hc_sityeli_input'><a class='btn_detail' href='javascript:void(0)'>购买</a></div>";
		                    html+="</li>";
		                	$("#makeMoney",$("body")).append(html);  
		                	$("#"+data.PrdCode,$("body")).data("PARAMS",data);
		                	
		 		}
		 		function htmlview1(data){
 			        var rate=data.GuestRate*100;
 			        //rate=$.lily.format.toCashWithComma(rate.toFixed(2));
 			       rate = (parseFloat(rate)).toFixed(3).toString()+"%";
 			       if(data.PrdTemplate=='1100'){
			        	rate = queryFinanceProductYield(data.PrdCode);
			        	data.rate = rate;
			        }
 			        var pfirst=data.PfirstAmt/10000;
                	var html="";
                	html+="<li>";
                	html+="<div class='rightbg'></div>";
                	html+="<div class='hc_sityeli_div'><p>"+data.PrdName+"</p><span class='m_xp'>新品</span></div>";
                	html+="<div class='hc_sityeli_mess'><dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New1'>";
                	html+="<dd class='hc_mess_dd'><span class='hc_dd_span'>"+rate+"</span></dd><dt class='hc_mess_dt'>年化收益率</dt></dl>";
                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New2'><dt class='hc_mess_dt'>最低认购金额</dt>";                                                                        // "+data.RiskLevel+"
                	html+="<dd class='hc_mess_dd'><span class='hc_dd_span2'>"+pfirst+"万元</span></dd></dl>";
	                if(data.RiskLevel=='1'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>谨慎型</p></dd></dl>";//
	                	}
	                else if(data.RiskLevel=='2'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>稳健型</p></dd></dl>";
	                	}
	                else if(data.RiskLevel=='3'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>平稳型</p></dd></dl>";
	                	}
	                else if(data.RiskLevel=='4'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>平衡型</p></dd></dl>";
	                	}
	                else if(data.RiskLevel=='5'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>进取型</p></dd></dl>";
	                	}
                	html+="</div><div class='hc_sityeli_input'><a id="+data.PrdCode+" data-toggle='lilyMenu' data-menuno='A0040000' data-content='frame_item' data-menuCode='financial_product_buy' data-value='query_buy_financial_product' class='btn_detail' href='javascript:void(0)'>购买</a></div>";//<input type='text' class='hc_input_type' placeholder='输入购买金额'>
	               // html+="</div><div class='hc_sityeli_input'><a class='btn_detail' href='javascript:void(0)'>购买</a></div>";
                    html+="</li>";
                	$("#makeMoney",$("body")).append(html);  
                	$("#"+data.PrdCode,$("body")).data("PARAMS",data);
 		        }
		 		function htmlview2(data){
 			        var rate=data.GuestRate*100;
 			        //rate=$.lily.format.toCashWithComma(rate.toFixed(2));
 			        rate = (parseFloat(rate)).toFixed(3).toString()+"%";
 			        if(data.PrdTemplate=='1100'){
			        	rate = queryFinanceProductYield(data.PrdCode);
			        	data.rate = rate;
			        }
 			        var pfirst=data.PfirstAmt/10000;
                	var html="";
                	html+="<li>";
                	html+="<div class='hc_sityeli_div'><p>"+data.PrdName+"</p><span class='m_xp'>新品</span></div>";
                	html+="<div class='hc_sityeli_mess'><dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New1'>";
                	html+="<dd class='hc_mess_dd'><span class='hc_dd_span'>"+rate+"</span></dd><dt class='hc_mess_dt'>年化收益率</dt></dl>";
                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New2'><dt class='hc_mess_dt'>最低认购金额</dt>";                                                                        // "+data.RiskLevel+"
                	html+="<dd class='hc_mess_dd'><span class='hc_dd_span2'>"+pfirst+"万元</span></dd></dl>";
	                if(data.RiskLevel=='1'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>谨慎型</p></dd></dl>";//
	                	}
	                else if(data.RiskLevel=='2'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>稳健型</p></dd></dl>";
	                	}
	                else if(data.RiskLevel=='3'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>平稳型</p></dd></dl>";
	                	}
	                else if(data.RiskLevel=='4'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>平衡型</p></dd></dl>";
	                	}
	                else if(data.RiskLevel=='5'){
	                	html+="<dl class='hc_mess_dl1 hc_mess_dl1New hc_mess_dl1New3'><dt class='hc_mess_dt'>风险等级</dt><dd class='hc_mess_dd'><span class='hc_level level_1'></span><p class='hc_dd_jb1'>进取型</p></dd></dl>";
	                	}
                	html+="</div><div class='hc_sityeli_input'><a href='javascript:void(0)'  class='btn_detail' style='background:#DBDEE1'>售罄</a></div>";//<input type='text' class='hc_input_type' placeholder='输入购买金额'>
	               // html+="</div><div class='hc_sityeli_input'><a class='btn_detail' href='javascript:void(0)'>购买</a></div>";
                    //id="+data.PrdCode+" data-toggle='lilyMenu' data-menuno='A0030000' data-content='frame_item' data-menuCode='financial_product_buy' data-value='query_buy_financial_product' class='btn_detail' 
                	html+="</li>";
                	$("#makeMoney",$("body")).append(html);  
                	$("#"+data.PrdCode,$("body")).data("PARAMS",data);
                	
 		}
		 		//查询理财产品
		 		var paramforMakeMoney={"currentBusinessCode":'01000800',"turnPageShowNum":'3',"currencyType":"","RiskLevel":"","MinRiskLevel":"","TypeNo":"","Status":"0,1"};
		 		var paramforEnd={"currentBusinessCode":'01000800',"turnPageShowNum":'3',"currencyType":"","RiskLevel":"","MinRiskLevel":"","TypeNo":"","Status":"a","OrderFlag":"0"};
		 		$.lily.ajax({
		 			url:'queryFinanceforMakeMoney.do',
		 			data:paramforMakeMoney,
		 			type: 'post', 
					dataType:'json',
					async:true,
					processResponse: function(data){
						var makeMoneyList=data.fundProductsSelect;
						if(makeMoneyList.length<3){
							var j=3-makeMoneyList.length;
							for(var i=0;i<makeMoneyList.length;i++){
						 		if(i==0){
						 			htmlview1(makeMoneyList[0]);
						 		}else{
						 			htmlview(makeMoneyList[i]);
						 		}
						 	}
							$.lily.ajax({
					 			url:'queryFinanceforMakeMoney.do',
					 			data:paramforEnd,
					 			type: 'post', 
								dataType:'json',
								async:true,
								processResponse: function(data){
									var makeMoneyforEnd=data.fundProductsSelect;
									for(var t=0;t<j;t++){
										htmlview2(makeMoneyforEnd[t]);
									}
								}
							})
						}else{
							for(var i=0;i<makeMoneyList.length;i++){
						 		if(i==3){break;}
						 		if(i==0){
						 			htmlview1(makeMoneyList[0]);
						 		}else{
						 			htmlview(makeMoneyList[i]);
						 		}

						 	}
						}	
					}
		 		});

//		 		pageCallback = function(currentElement,reponseData,currentMVC,parentMVC) {
		       //首页电子回单链接功能
		 		$("#electronic_Receipt").bind("click",function(){
		 			alert("12");
		 			currentMVC.gotoOtherMVCStep('electronic_Receipt');
		 		});
//		 		}
		 		//查看更多公告
		 		$("#lookMoreNotice").bind("click",function(){
		 			$('#login_index').hide();
					$('#main-transaction-area').empty().show();
		            $('#main-content').hide();
					$.openWindow({
					tranCode: "lookMoreNotice",
					windowId: "lookMoreNotice" + $.lily.generateUID()
				   });
		 		});
		 		//查看更多问题
		 		$("#lookMoreQuestion").bind("click",function(){
		 			$('#login_index').hide();
					$('#main-transaction-area').empty().show();
		            $('#main-content').hide();
					$.openWindow({
					tranCode: "lookMoreQuestion",
					windowId: "lookMoreQuestion" + $.lily.generateUID()
				   });
		 		});
		 		//底部图标
//		 		$("#bottomLink").bind("click",function(){
//		 			$('#login_index').hide();
//					$('#main-transaction-area').empty().show();
//		            $('#main-content').hide();
//					$.openWindow({
//					tranCode: "bottomLink",
//					windowId: "bottomLink" + $.lily.generateUID()
//				   });
//		 		});
		 		
		 		$("#recharge1",$("#charge1")).bind('click',function(){
		 			var phoneNo=$("#phoneNo",$("#charge1")).val();
		 			$(this).data("PARAMS",{"phoneNo":phoneNo});
		 		});
		 		
			      $(".hc_mess_dl:last-child").css("border","0px none");
			      /* IE8浏览器样式修改  */
			      if(navigator.userAgent.indexOf("MSIE")>0){
			      	  if(navigator.userAgent.indexOf("MSIE 8.0")>0){
			      		  $(".tabNewSetLife ol li input").css("margin-left","0px");
			      	  }
			      	  if(navigator.userAgent.indexOf("MSIE 9.0")>0){
			      		  $(".tabNewSetLife ol li input").css("margin-left","0px");
			      	  }
			      }
		 		
			      function queryFinanceProductYield(PrdCode){
			  		var rate;
			  		$.lily.ajax({
			  			url: 'queryFinanceProductYield_page.do',
			  			data:{
			  				'currentBusinessCode' : '01000800', 
			  				'logRecordFlag' : '1',
			  				'PrdCode':PrdCode
			  			},
			  		    type: 'post', 
			  		    dataType:'json',
			  		    async: false, 
			  		    processResponse: function(data){
			  		    	var List = data.queryProductYieldRate;
			  		    	var i = parseInt(List.length)-1;
			  		    	var arr = new Array();
			  		    	for(var i=0;i<List.length;i++){
			  		    		arr.push(parseFloat(List[i].ClientRatio));
			  		    	}
			  		    	  for(var i=0,len=arr.length;i<len;i++){
			  		    	      for(var j=arr.length-1;j>i;j--){
			  		    	        if(arr[j]<arr[j-1]){
			  		    	          temp = arr[j];
			  		    	          arr[j] = arr[j-1];
			  		    	          arr[j-1] = temp;
			  		    	        }
			  		    	      }
			  		    	    }
			  		    	rateMin = arr[0];
			  			    rateMax = arr[i-1];
			  		    	if(rateMin == rateMax){
			  		    		rate = (parseFloat(rateMin)*100).toFixed(3).toString()+"%";
			  		    	}else{
			  		    		rate = (parseFloat(rateMin)*100).toFixed(3).toString()+"%"+"-"+(parseFloat(rateMax)*100).toFixed(3).toString()+"%";
			  		    	}
			  		    }
			  		});
			  		return rate;
			  	} 
			      
			      
			      
			      (function($){
			    	  $.getUrlParam = function (name) {
			    		   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			    		   var r = window.location.search.substr(1).match(reg);
			    		   if (r != null) return unescape(r[2]); return null;
			    	  }
			    	  if($.getUrlParam('flag') == "applyTax"){
			    		  var n=4;
						  var iID=setInterval(function(){
							  n=n-1
							  if(n!=1){
							  }else if(n==1){
								  $("#appClick").trigger("click");
								  clearInterval(iID);
							  }
						  }, 1000);
			    	  }
			    	
			    })(jQuery);
			      
			      
			     
			      
