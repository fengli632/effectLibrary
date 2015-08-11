/* tooltip.js - ToolTip设计脚本, 2012 © yamoo9.com	
---------------------------------------------------------------- */
(function($) {		// 在自运行函数内，将jQuery对象放入$中
	$(function() {	// jQuery Ready()语句
	
		/* ///////////////////////////////////////////////////
		为了IE 7~8使用PIE库
		border-radius | box-shadow | linear-gradient
		/////////////////////////////////////////////////// */			
		if($.browser.msie && $.browser.version > 6 && $.browser.version < 9) {
			$.getScript('js/PIE.js', function() {
				$('.tooltip').each(function() {
					PIE.attach(this);
				});	
			});
		};
	
		// 若浏览器不支持CSS Transtion属性
		if(!Modernizr.csstransitions) {
			// 隐藏.tooltip-box元素
			$('.tooltip-box').fadeTo(10, 0);
			
			// 当鼠标移动到a.tooltip之上
			$('a.tooltip').hover(function() {
				// 当鼠标移动到a.tootip之上时执行的动作
				$(this).stop().animate({'border-color': '#fff'}, 400)
				.find('.tooltip-box').stop().animate({'opacity': 1, 'bottom': '90px'}, 400);
			}, function() {
				// 当鼠标移出时执行的动作
				$(this).stop().animate({'border-color': '#4b4b4b'}, 400)
				.find('.tooltip-box').stop().animate({'opacity': 0, 'bottom': '100px'}, 400);
			});
		};
		
	});	
})(jQuery);