(function(){


	$('#shortcut-2013').before('<div id="jqfb-index" style="background:#F8F8F8;height:45px"><div class="jqfb-min" style="background:#fff001;height:auto;width:auto;"></div><div id="jqfb-max"></div></div>');

	var jqfbHtml = '<div id="jqfb-9th" class="jqfb-lay"><div class="jqfb-m" style="_width:991px;"><div class="bg"></div><h3 id="jqfb-name">金秋风暴</h3><div class="jqfb-sl"><div id="jqfb-s1" class="item"> <span class="back"></span> <span class="front"></span></div><div id="jqfb-s2" class="item"> <span class="back"></span> <span class="front"></span></div><div id="jqfb-s3" class="item"> <span class="back"></span> <span class="front"></span></div><div id="jqfb-s4" class="item"> <span class="back"></span> <span class="front"></span></div><div id="jqfb-s5" class="item"> <span class="back"></span> <span class="front"></span></div></div><div class="door"> <span id="doorLeft" class="left"></span> <span id="doorRight" class="right"></span></div><div class="jqfb-rl"><div id="jqfb-r1" class="item"> <span class="light"><img src="http://img12.360buyimg.com/da/g15/M00/07/01/rBEhWlIceg8IAAAAAAAcF4259r4AACgdQKyQv4AABwv486.png" alt="" /></span> <span class="img-1"><img src="http://img13.360buyimg.com/da/g15/M09/07/01/rBEhWVIcee0IAAAAAAAOTLUIrnIAACgdAJ8JPMAAA5k671.png" alt="" /></span> <span class="img-2"><img src="http://img10.360buyimg.com/da/g15/M0A/07/01/rBEhWFIceeMIAAAAAAAX80p3d9MAACgcwP_5JkAABgL571.png" alt="" /></span> <span class="img-3"><img src="http://img11.360buyimg.com/da/g15/M03/06/1D/rBEhWVIcedsIAAAAAAAlTNQvfrIAACfEANI_5EAACVk735.png" alt="" /></span> <span class="img-4"><img src="http://img12.360buyimg.com/da/g13/M05/08/08/rBEhVFIcedMIAAAAAAAbjCajfzgAACgSwP_2rQAABuk709.png" alt="" /></span> <span class="img-5"><img src="http://img13.360buyimg.com/da/g14/M06/0D/00/rBEhVVIcebwIAAAAAAAYplf4YvkAACi1QFTbgUAABi-408.png" alt="" /></span> <span class="joy"><img class="joy-1" src="http://img14.360buyimg.com/da/g13/M05/08/08/rBEhUlIcea0IAAAAAABGUw6zTDUAACgSwNQgJ0AAEZr823.png" alt="" /><img class="joy-2" src="http://img12.360buyimg.com/da/g13/M05/08/08/rBEhU1IceZoIAAAAAABFtR8oXkAAACgSwHHd2gAAEXN929.png" alt="" /></span></div><div id="jqfb-r2" class="item"> <span class="light"><img src="http://img11.360buyimg.com/da/g14/M0A/0D/00/rBEhVVIcencIAAAAAAAheHJHbBoAACi1wFkI1wAACGQ946.png" alt="" /></span> <span class="img-1"><img src="http://img11.360buyimg.com/da/g14/M06/0D/00/rBEhV1Icem8IAAAAAAAa_aQFoiAAACi1gP_3GMAABsV974.png" alt="" /></span> <span class="img-2"><img src="http://img10.360buyimg.com/da/g14/M06/0D/00/rBEhV1IcemgIAAAAAAAfx4LIuCgAACi1gN9hm8AAB_f635.png" alt="" /></span> <span class="img-3"><img src="http://img12.360buyimg.com/da/g14/M06/0D/00/rBEhVVIcemEIAAAAAAAWwd0TxJYAACi1gLoopMAABbZ227.png" alt="" /></span> <span class="img-4"><img src="http://img14.360buyimg.com/da/g13/M08/08/08/rBEhUlIceloIAAAAAAAikja9uPsAACgTQP_1bcAACKq359.png" alt="" /></span> <span class="img-5"><img src="http://img11.360buyimg.com/da/g14/M08/0D/00/rBEhVVIcelIIAAAAAAALqfNRSJoAACi1AP_6v4AAAvB677.png" alt="" /></span> <span class="joy"><img class="joy-1" src="http://img12.360buyimg.com/da/g13/M08/08/08/rBEhVFIcekgIAAAAAAA-UBvc694AACgTQOKWBMAAD5o949.png" alt="" /><img class="joy-2" src="http://img10.360buyimg.com/da/g13/M08/08/08/rBEhU1Icej8IAAAAAAA-cAMS8DgAACgTQKc2_UAAD6I744.png" alt="" /></span></div><div id="jqfb-r3" class="item"> <span class="light"><img src="http://img10.360buyimg.com/da/g13/M05/08/08/rBEhUlIcfMwIAAAAAAAUmXO3sbwAACgUwKVgQAAABSx386.png" alt="" /></span> <span class="img-1"><img src="http://img12.360buyimg.com/da/g15/M07/07/01/rBEhWFIcfMQIAAAAAAAmT1e_Zh0AACgewP7iMUAACZn955.png" alt="" /></span> <span class="img-2"><img src="http://img14.360buyimg.com/da/g15/M07/07/01/rBEhWFIcfLwIAAAAAAAulRqgUtMAACgewLnlWYAAC6t857.png" alt="" /></span> <span class="img-3"><img src="http://img10.360buyimg.com/da/g14/M05/0D/00/rBEhVlIcfIsIAAAAAAAdFMKAjvYAACi3AHApVcAAB0s413.png" alt="" /></span> <span class="img-4"><img src="http://img10.360buyimg.com/da/g14/M05/0D/00/rBEhV1IcfIQIAAAAAAAYTL58j6oAACi3AFE6gcAABhk126.png" alt="" /></span> <span class="img-5"><img src="http://img12.360buyimg.com/da/g13/M05/08/08/rBEhVFIcfHwIAAAAAAAgA_Y6-joAACgUwGiCM4AACAb190.png" alt="" /></span> <span class="joy"><img class="joy-1" src="http://img13.360buyimg.com/da/g13/M03/08/08/rBEhVFIce7UIAAAAAABDn2CbXLwAACgUQB75wUAAEO3916.png" alt="" /><img class="joy-2" src="http://img11.360buyimg.com/da/g13/M02/08/08/rBEhVFIce6wIAAAAAABDh7jBgKMAACgUANQ9XUAAEOf134.png" alt="" /></span></div><div id="jqfb-r4" class="item"> <span class="light"><img src="http://img10.360buyimg.com/da/g14/M08/0D/00/rBEhVVIcfRkIAAAAAAAi6TF1M-sAACi3QKkJqAAACMB276.png" alt="" /></span> <span class="img-1"><img src="http://img12.360buyimg.com/da/g14/M08/0D/00/rBEhV1IcfREIAAAAAAAauKspydYAACi3QILa3gAABrQ428.png" alt="" /></span> <span class="img-2"><img src="http://img12.360buyimg.com/da/g14/M08/0D/00/rBEhVVIcfQsIAAAAAABLMfPz3cAAACi3QGzAmYAAEtJ986.png" alt="" /></span> <span class="img-3"><img src="http://img13.360buyimg.com/da/g14/M05/0D/00/rBEhVVIcfQQIAAAAAAAQaGdAeUwAACi3AP_0OIAABCA116.png" alt="" /></span> <span class="img-4"><img src="http://img11.360buyimg.com/da/g14/M05/0D/00/rBEhVVIcfPwIAAAAAAAOwqJe3sQAACi3AP_wggAAA7a217.png" alt="" /></span> <span class="img-5"><img src="http://img14.360buyimg.com/da/g13/M05/08/08/rBEhUlIcfPQIAAAAAAATwCuULUUAACgUwP_120AABPY360.png" alt="" /></span> <span class="joy"><img class="joy-1" src="http://img13.360buyimg.com/da/g15/M08/07/01/rBEhWVIcfO0IAAAAAABLruTMN-8AACgfAGigmMAAEvG690.png" alt="" /><img class="joy-2" src="http://img14.360buyimg.com/da/g13/M05/08/08/rBEhVFIcfOUIAAAAAABLLwxnMBAAACgUwOZa68AAEtH909.png" alt="" /></span></div><div id="jqfb-r5" class="item"> <span class="light"><img src="http://img14.360buyimg.com/da/g15/M08/07/01/rBEhWVIcfY8IAAAAAAAgoRrXt2EAACgfQI4boUAACC5560.png" alt="" /></span> <span class="img-1"><img src="http://img10.360buyimg.com/da/g14/M09/0D/01/rBEhV1IcjxEIAAAAAAAR2HzJjyEAACi-wHgw_YAABHw404.png" alt="" /></span> <span class="img-2"><img src="http://img10.360buyimg.com/da/g13/M06/08/08/rBEhU1IcfYgIAAAAAAAI0XHvn6wAACgVAP_3oUAAAjp653.png" alt="" /></span> <span class="img-3"><img src="http://img13.360buyimg.com/da/g13/M06/08/08/rBEhU1IcfYAIAAAAAAAizNTnF1kAACgVAPGl3IAACLk370.png" alt="" /></span> <span class="img-4"><img src="http://img12.360buyimg.com/da/g15/M08/07/01/rBEhWFIcfXAIAAAAAAATyRDUwzsAACgfAP_6fgAABPh682.png" alt="" /></span> <span class="img-5"><img src="http://img12.360buyimg.com/da/g14/M09/0D/00/rBEhVlIcfVEIAAAAAAAhx3ZFZgAAACi3gG-J_0AACHf672.png" alt="" /></span> <span class="joy"><img class="joy-1" src="http://img12.360buyimg.com/da/g14/M08/0D/00/rBEhVVIcfTwIAAAAAAA_42my9-wAACi3QO0Hp8AAD_7349.png" alt="" /><img class="joy-2" src="http://img14.360buyimg.com/da/g14/M08/0D/00/rBEhVlIcfS0IAAAAAABAP_ID4YsAACi3QMgBlUAAEBX487.png" alt="" /></span></div></div></div><div id="resultMsg" class="jqfb-msg"><div class="mask"></div><div class="msg"><div class="top"><h4 id="msgTitle"></h4></div><div class="bottom"><h5 id="msgVerse"></h5><p id="msgTicket" class="content"></p><p id="msgTips" class="tips"></p></div> <a class="close resultReset" href="javascript:void(0)"></a> <a class="btn-link reset resultReset" href="javascript:void(0)"></a> <a class="btn-link" target="_blank" id="msgUrl" href="javascript:void(0)"></a></div></div><div style="width:0;height:0;display:inline;background-image:url(http://img11.360buyimg.com/da/g15/M01/07/01/rBEhWFIcdv4IAAAAAAG7CbXtDloAACgawDy0-gAAbsh400.png)"></div></div><div id="jqfb-link" href=""> <a class="link-1" target="_blank" href="http://sale.jd.com/act/TyY1Bv2RLOnxCP.html"></a> <a class="link-2" target="_blank" href="http://sale.jd.com/act/eH8ulzx3CE.html"></a></div> <a class="jqfb-up" href="javascript:void(0)" style="background:url(http://img13.360buyimg.com/da/g14/M04/0D/00/rBEhV1Icd-QIAAAAAAAOW1J47V0AACizwJadRYAAA5z108.png) no-repeat"></a> <a class="jqfb-close" href="javascript:void(0)"></a>'

	// 宽窄版图片判断
	var jqfbMin =  $('<img style="display:block; margin:0 auto;"></img>');

	if(!$('body').hasClass('root61')){
		jqfbMin.attr('src', 'http://img13.360buyimg.com/da/g13/M02/08/0B/rBEhVFIdb0cIAAAAAAC2xx0kJpQAACheQMEy8AAALbf887.jpg');
	}else{
		jqfbMin.attr('src', 'http://img12.360buyimg.com/da/g15/M09/07/04/rBEhWVIdb2UIAAAAAADpu7BsSpcAAChmwP-7lkAAOnT254.jpg');
	}
	$('.jqfb-min').html(jqfbMin);

	//用户uid
	if(getCookie('__jda') != undefined){

		var u_jda  = getCookie('__jda').split('.')[1]; 
		// 用户uid 末位
		u_jda = u_jda.charAt(u_jda.length-1);
		// 末位奇偶判断
		if((u_jda % 2) == 0){
			setCookie('a9th','1', 1);
		};

	};
	

	// 用户每天首次打开状态cookie
	var flag = getCookie('a9th'); 
	// 是否每天首次访问
	if(flag == '1'){
		setjqfbMin();
	}else{
		setjqfbMax();
	};

	// 小广告位 点击展开绑定
	$('#jqfb-index').find('.jqfb-min').bind('click', function() {
		if($('#jqfb-9th').length == 0){
			$('#jqfb-max').append(jqfbHtml);
			setJqfbEvent();
		};
	
		$('.jqfb-min').hide();
		$('#jqfb-max').show();

		$('#jqfb-index').animate({'height': '420px'}, 1200);

		// 显示用户点击提示
		showClickTips();

	});

	// 显示小广告位
	function setjqfbMin(){
		$('#jqfb-index').css({'height': '45px'});
		$('#jqfb-max').hide();
		$('.jqfb-min').show();
	};

	// 显示大广告位
	function setjqfbMax(){
		// 设置首次访问cookie
		setCookie('a9th','1', 1);
		// 插入大展开数据
		$('#jqfb-max').append(jqfbHtml);
		// 设置动画绑定
		setJqfbEvent();
		// 展开
		$('#jqfb-index').animate({'height': '420px'}, 1200);

		// 显示用户点击提示
		showClickTips();
	};

	/**
	 * [showClickTips 显示用户点击提示]
	 */
	function showClickTips(){
		
		var tips = $('<div id="jqfb-ctips" style="display:none;position:absolute;z-index:8;top:260px;left:170px;width:646px;height:76px;background:url(http://img14.360buyimg.com/da/g15/M00/07/0E/rBEhWFIfHNMIAAAAAAARNw__ChkAAClvgOX0QsAABFP509.png) no-repeat;"></div>');
		
		setTimeout(function(){

			if($('#jqfb-ctips').length == 0){
				$('.jqfb-m').append(tips);
			};
			$('#jqfb-ctips').fadeIn(300);

			setTimeout(function(){
				$('#jqfb-ctips').fadeOut(300);
			}, 10000);

		}, 1500);

	};


	function setJqfbEvent(){

		// 收起展开
		$('.jqfb-up, .jqfb-close').bind('click', function() {
			
			$('#jqfb-index').animate({
				'height': '45px'},
				800, function() {
					$('#jqfb-max').hide();
					$('.jqfb-min').show();
			});

		});

		// 签点击绑定
		$('.jqfb-sl').find('.item').bind('click', function(){

			// 当前点击索引值
			var index = $(this).parent().find('.item').index(this) + 1;

			// 设置已选签
			card.select(index);

			// 设置结果随机内容
			resultMsg.set(activityData, index);

			// 开门抽签动画
			resultAnimate.show(index);

			// 结果展示动画
			setTimeout(function(){

				resultMsg.show();
				
			}, 3000);


		});

		// 再求一次 reset 绑定
		$('.resultReset').bind('click', function(){

			resultMsg.reset();

		});

		// 门抖动 点击绑定
		$('.jqfb-rl').bind('click', function() {
			$('#doorLeft, #doorRight').addClass('blink');

			setTimeout(function(){
				$('#doorLeft, #doorRight').removeClass('blink');
			}, 400);
		});

	};
				
	

	/**
	 * [isLowBrowser 是否低IE9一下版本浏览器]
	 * @return {Boolean} [true:是 false 不是]
	 */
	function isLowBrowser(){
		var v = $.browser.msie && parseInt($.browser.version, 10) <= 9;
		v == undefined ? v = false : v;
		return v;
	};

	/**
	 * [setCookie 设置cookie]
	 * @param {[String]} key        [key]
	 * @param {[String]} value      [value]
	 * @param {[Number]} expiredays [过期时间]
	 */
	function setCookie(key, value, expiredays) {　　　　
		var exdate = new Date();

		exdate.setHours(0, 0, 0);

		exdate.setDate(exdate.getDate() + expiredays);

		document.cookie = key + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());　　
	}
	
	/**
	 * [getCookie 获得cookie]
	 * @param  {[String]} key [key]
	 * @return {[String]}     [cookie value]
	 */
	function getCookie(key) {　　　　
		if (document.cookie.length > 0) {　　 
			　　　　　　
			c_start = document.cookie.indexOf(key + "=");　 
			if (c_start != -1) {　　　　　　　　
				c_start = c_start + key.length + 1;
				c_end = document.cookie.indexOf(";", c_start);　　 
				if (c_end == -1) {
					c_end = document.cookie.length;
				}　　　　　　　　　　
				return unescape(document.cookie.substring(c_start, c_end));　　
				　　　　　　
			};　　　
		}　　　　
		return undefined;
	}

	// 签选择控制器
	var card = {
		/**
		 * [card.select()]
		 * @param  {[Number]} index [当前选择的签索引]
		 */
		select: function(index){

			var selectCard = $('.jqfb-sl').find('.item').eq(index - 1);

			selectCard.addClass('selected')
				.siblings().removeClass('selected').animate({'opacity': '0.4'}, 300);

			if(isLowBrowser()){
				// 低版本
				
				// postion prefix 
				switch(index){
					case 1:  $('#jqfb-s1').css('margin', '0px 0 0 -20px');
					break;
					case 2:  $('#jqfb-s2').css('margin', '-6px 0 0 -28px');
					break;
					case 3:  $('#jqfb-s3').css('margin', '0 0 0 -20px');
					break;
					case 4:  $('#jqfb-s4').css('margin', '-3px 0 0 -10px');
					break;
				};
				

				if(parseInt($.browser.version, 10) == 6){
					// ie6
					selectCard.find('.front').css('display','block');
					selectCard.find('.back').css('display','none');

				}else{
					// ie7 8 9
					selectCard.find('.front').css({
						'display': 'block',
						'opacity': '0',
						'position': 'absolute',
						'top': '0',
						'left': '0'
					}).animate({'opacity': '1'}, 300);

					selectCard.find('.back').css({
						'position': 'absolute',
						'top': '0',
						'left': '0'
					}).animate({'opacity': '0'}, 300, function(){
						$(this).css({
							'display': 'none'
						});
					});

				};
				
			}else{
				// 高版本
				setTimeout(function(){
					selectCard.find('.front').css('display', 'block');
					selectCard.find('.back').css('display', 'none');
				}, 300);

			};

			// 误操作屏蔽层
			misopMask.show();
			
		},
		/**
		 * [card.reset() 签重置]
		 */
		reset: function(){

			var selectCard = $('.jqfb-sl').find('.selected');

			selectCard.removeClass('selected')
				.siblings().animate({'opacity': '1'}, 300);

			if(isLowBrowser()){
				// 低版本
				
				// postion prefix 
				$('.jqfb-sl').find('.item').css('margin', '0');

				if(parseInt($.browser.version, 10) == 6){
					// ie6
					selectCard.find('.front').css('display','none');
					selectCard.find('.back').css('display','block');
				}else{

					// ie7 8 9
					selectCard.find('.back').css({
						'display': 'block',
						'opacity': '0'
					}).animate({'opacity': '1'}, 300);

					selectCard.find('.front').animate({'opacity': '0'}, 300, function(){
						$(this).css({
							'display': 'none'
						});
					});

				};
				

			}else{
				// 高版本
				setTimeout(function(){
					selectCard.find('.back').css('display', 'block');
					selectCard.find('.front').css('display', 'none');
				}, 300);

			};

		}

	};

	// 抽签动画控制器
	var resultAnimate = {
		/**
		 * [resultAnimate.show()]
		 * @param  {[Number]} index [需要展示的结果索引]
		 */
		show: function(index){

			var result    = $('#jqfb-r'+ index);
			var joy       = result.find('.joy');
			var doorLeft  = $('#doorLeft');
			var doorRight = $('#doorRight');

			
			if(isLowBrowser()){
				// 低版本
				doorLeft.animate({'left': '-172px'}, 1000);
				doorRight.animate({'right': '-172px'}, 1000);

				setTimeout(function(){
					result.find('span').css({
						'opacity': '0'
					});
					result.addClass('show');
					result.find('span').animate({'opacity': '1'}, 1000);
				},200);

			}else{
				// 高版本
				doorLeft.addClass('open');
				doorRight.addClass('open');

				setTimeout(function(){
					result.addClass('show');
				},200);

			};

			

			// 设置joy动画
			var joyAnimate = setInterval(function(){

				if(joy.hasClass('on')){
					joy.removeClass('on');
				}else{
					joy.addClass('on');
				}

			},350);


			setTimeout(function(){
				window.clearInterval(joyAnimate);
			},3200);

		},
		/**
		 * [resultAnimate.reset() 结果动画重置]
		 */
		reset: function(){

			var doorLeft  = $('#doorLeft');
			var doorRight = $('#doorRight');

			if(isLowBrowser()){
				// 低版本
				doorLeft.animate({'left': '0px'}, 1000);
				doorRight.animate({'right': '0px'}, 1000);

				$('.jqfb-rl').find('.show').find('span').animate({'opacity': '0'}, 800 ,function(){
					$('.jqfb-rl').find('.show').removeClass('show');
				});

			}else{
				// 高版本
				setTimeout(function(){
					doorLeft.removeClass('open');
					doorRight.removeClass('open');
				},300);

				$('.jqfb-rl').find('.show').removeClass('show');

			};
			

		}


	};

	// 抽签结果信息控制器
	var resultMsg = {
		/**
		 * [resultMsg.show() 抽签结果显示]
		 */
		show: function(){

			// $('#resultMsg').css('display', 'block').animate({'opacity': '1'}, 300);
			$('#resultMsg').fadeIn(300); // fixed IE9 jquery1.2.6
			setTimeout(function(){
				$('#resultMsg').find('.bottom').addClass('show');
			},20);
			

		},
		/**
		 * [resultMsg.set() 随机更新抽签结果内容]
		 * @param {[Object]} data  [description]
		 * @param {[type]} index [description]
		 */
		set: function(data, index){

			var randomNum = parseInt(Math.random() * 3, 10);
			var msgData   = data[index - 1].msg[randomNum];

			$('#msgTitle').html('求得' + msgData.title);
			$('#msgVerse').html(msgData.verse);
			$('#msgTicket').html('可领取<br />' + msgData.ticket);
			$('#msgTips').html(msgData.tips);
			$('#msgUrl').attr('href', msgData.url);

		},
		/**
		 * [resultMsg.reset() 抽签结果信息重置]
		 */
		reset: function(){

			$('#resultMsg').find('.bottom').removeClass('show');

			$('#resultMsg').fadeOut(300, function() {
				// 结果动画重置
				resultAnimate.reset();
				// 签重置
				card.reset();
				// 移除屏蔽层
				// 
				setTimeout(function(){
					misopMask.hide();
				},1000);
			});
			// fixed IE9 jquery1.2.6
			// $('#resultMsg').animate({'opacity': '0'}, 300, function(){
			// 	$(this).css('display', 'none');
			// 	// 结果动画重置
			// 	resultAnimate.reset();
			// 	// 签重置
			// 	card.reset();
			// 	// 移除屏蔽层
			// 	// 
			// 	setTimeout(function(){
			// 		misopMask.hide();
			// 	},1000);

			// });

		}

	};

	// 防止误操作屏蔽层
	var misopMask = {

		show: function(){
			// 添加误操作屏蔽层
			var mask = '<div id="opMask" style="position:absolute;width:100%;height:100%;z-index:15;top:0;left:0;"></div>';
			$('.jqfb-lay').append(mask);
		},

		hide: function(){
			$('#opMask').remove();
		}
	};


	var activityData = [{
		name: '求学业',
		msg: [{
			title: '上上签',
			verse: '一机定乾坤，卷卷皆满分',
			ticket: '手机满1000元减50元<br />护身符',
			tips: '请于9月1日-9月3日【求学业】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=5a7060d94d3146518c9d8a610fe4c969&roleId=127445&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}, {
			title: '上签',
			verse: '若得“神器”助，功名进一步',
			ticket: '办公文具满100元减20元、<br />满1000元减100元护身符',
			tips: '请于9月1日-9月3日【求学业】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=86149b113a5848a99e671837c8fc8883&roleId=127798&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}, {
			title: '中签',
			verse: '读书破万卷，学成了心愿',
			ticket: '图书满100元减20元<br />护身符',
			tips: '请于9月1日-9月3日【求学业】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponSendFront/send_index.action?key=1b21f08221f940e5bc7d136d766ebabf&roleId=126722&to=sale.jd.com/act/cfjd4khilo.html'
		}]
	}, {
		name: '求换装',
		msg: [{
			title: '上上签',
			verse: '缤纷霓裳装，国色有天香',
			ticket: '服装满199元减40元<br />护身符',
			tips: '请于9月4日-9月6日【求换装】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=72AB9D7B8FE81E45CD9406DCFBD623E18EC6CC1CEE980B17995A678294A84203278F4876704FB7D7EB4F6B4B2C7F8EE0&roleId=127977&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}, {
			title: '上签',
			verse: '大牌显身价，名款添奢华',
			ticket: '服装满299元减60元<br />护身符',
			tips: '请于9月4日-9月6日【求换装】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=152383F53A696180AA87E064463475A033A2A595701F640088325079BBE6C812D423FAFAE0BB348B2DFE9069435A95D4&roleId=127976&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}, {
			title: '中签',
			verse: '仪态万千夺群芳',
			ticket: '服装满399减80元<br />护身符',
			tips: '请于9月4日-9月6日【求换装】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=6B664AE128DE0E9F7C6C8430AFC67CB47EC8166DA0A2A87D22C96DA63265D2048AB49C1D5BE0BEAB6AF2367DA67AA6E7&roleId=127972&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}]
	}, {
		name: '求团圆',
		msg: [{
			title: '上上签',
			verse: '佳节备好礼，团圆表心意',
			ticket: '食品100元减5元<br />护身符',
			tips: '请于9月7日-9月9日【求团圆】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=f9714f14115549d68299b8265d8bdfdd&roleId=127469&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}, {
			title: '上签',
			verse: '金秋饕餮足，举杯享口福',
			ticket: '食品200元减10元<br />护身符',
			tips: '请于9月7日-9月9日【求团圆】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=bec35ac8838d4bb3863567e0faccad20&roleId=127784&to=sale.jd.com/act/rfl46xxrlonctv.html'
		}, {
			title: '中签',
			verse: '育儿应有方，健康伴成长',
			ticket: '食品满300元减20元<br />护身符',
			tips: '请于9月7日-9月9日【求团圆】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=cb1386c0edea4073b3e35394e4e0d16a&roleId=127785&to=sale.jd.com/act/rfl46xxrlonctv.html'
		}]
	}, {
		name: '求出游',
		msg: [{
			title: '上上签',
			verse: '影音随身装，美景镜内藏',
			ticket: '数码影音满1000元减50元<br />护身符',
			tips: '请于9月10日-9月12日【求出游】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=287f214bc2864722bf8f49d5272525a7&roleId=127612&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}, {
			title: '上签',
			verse: '装备满行囊，潇洒游四方',
			ticket: '运动户外满100元减10元<br />护身符',
			tips: '请于9月10日-9月12日【求出游】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=d516faf63b33497698d993cbad34d1b0&roleId=127426&to=sale.jd.com/act/TyY1Bv2RLOnxCP.html'
		}, {
			title: '中签',
			verse: '驾驭势如风，千里任驰骋',
			ticket: '汽车用品满199元减40元、<br />满299元减80元护身符',
			tips: '请于9月10日-9月12日【求出游】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=f01367e903bf4ed7b59b0bdea8b94085&roleId=127499&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}]
	}, {
		name: '求安居',
		msg: [{
			title: '上上签',
			verse: '乔迁家电随，蓬荜更生辉',
			ticket: '家电满1500元减150元<br />护身符',
			tips: '请于9月13日-9月15日【求安居】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=AFA02C92C58360E555A18FD42B364C541633BB7DF99B123B3878500FBBD3B2E2D41E82DD55FE6D6C0C1018B21FE4562C&roleId=128123&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}, {
			title: '上签',
			verse: '安居成家喜入宅',
			ticket: '家电满3000元减300元<br />护身符',
			tips: '请于9月13日-9月15日【求安居】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=1264497A8235653B12993E6AC4CB1223BE66E18F7F3FC5C9AADD097BCFA5F9F27C71AF66A84B4A1B5A470D7775F6180F&roleId=128122&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}, {
			title: '中签',
			verse: '宜大举置办家电、粉饰居所',
			ticket: '满6000元减600元<br />护身符',
			tips: '请于9月13日-9月15日【求安居】专场使用',
			url: 'http://active.coupon.jd.com/ilink/couponActiveFront/front_index.action?key=6DB87935593C7DBED4C038C5CB36360B8023A03F4238CE046FFAF82888B4B2EC7116A52ACDD334D17BD4CAF8543C1095&roleId=128120&to=sale.jd.com/act/tyy1bv2rlonxcp.html'
		}]
	}];

})();