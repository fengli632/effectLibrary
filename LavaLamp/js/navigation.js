/* jquery.lavalamp.js - 熔岩灯导航插件, 2012 © yamoo9.com
----------------------------------------------------------------- */
(function($) {
	$(function() {
			
		// 运行熔岩灯插件	
		$('#navigation').lavalamp({
			gap: 20,
			speed: 600,
			easing: 'easeInOutElastic',
			reset: 1500
		});
		
		// 单击<a>时阻止链接到href地址
		$('#navigation').find('a').click(function(e) {
			e.preventDefault();						
		});
		
		/* ///////////////////////////////////////////////////
		  为了IE 6-9浏览器，应用PIE库
		border-radius | box-shadow | linear-gradient
		/////////////////////////////////////////////////// */			
		if($.browser.msie && $.browser.version < 9) {
			$.getScript('js/PIE.js', function() {
				$('li.lava', '#nav').each(function() {
					PIE.attach(this);
				});	
			});
		};
			
	});	
})(jQuery);