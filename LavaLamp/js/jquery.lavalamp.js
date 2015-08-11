/* jquery.lavalamp.js - 熔岩灯导航插件, 2012 © yamoo9.com

	选项设置
	
		gap 	: 在lava上下添加的空间
		bgColor	: lava的背景颜色
		speed	: 导航速度设定 1000 = 1秒,
		easing 	: Easing设定(请参考 http://gsgd.co.uk/sandbox/jquery/easing/),
		reset 	: 设定当鼠标滑出时返回原来位置的速度 1000 = 1秒
		
		easeOutQuad   | easeOutQuad    | easeInOutQuad
		easeInCubic   | easeOutCubic   | easeInOutCubic
		easeInQuart   | easeOutQuart   | easeInOutQuart
		easeInQuint   | easeOutQuint   | easeInOutQuint
		easeInSine    | easeOutSine    | easeInOutSine
		easeInExpo    | easeOutExpo    | easeInOutExpo 
		easeInCirc    | easeOutCirc    | easeInOutCirc 
		easeInElastic | easeOutElastic | easeInOutElastic
		easeInBack    | easeOutBack    | easeInOutBack
		easeInBounce  | easeOutBounce  | easeInOutBounce 

---------------------------------------------------------------- */

;(function($) {
	$.fn.lavalamp = function(options) {
		options = $.extend({
			gap: 20,
			bgColor: '#eee',
			speed: 400,
			easing: 'easeInOutElastic',	
			reset: 2000
		}, options);
		
		return this.each(function() {
		
			// 对象引用
			var $nav = $(this),
				$current_item = $(this).find('.focus'),
				$lava = $('<li class="lava"/>'),
				reset;
		
			// 设定$lava的基准元素$(this)及调整<a> z-index的值
			$nav.css('position', 'relative')
				.find('a').css({
					position: 'relative',
					zIndex: 1
				});
				
			// $lava操作及样式
			$lava.css({
				position: 'absolute',
				top: $current_item.position().top - options.gap/2,
				left: $current_item.position().left,
				width: $current_item.outerWidth(),
				height: $current_item.outerHeight() + options.gap,
				backgroundColor: options.bgColor		
			}).appendTo($nav.find('ul'));
		
			// 当$nav的li发生鼠标移上/获得焦点事件时调用处理函数
			$nav.find('li')
			.bind('mouseover focusin', function() {
				// 发生MouseOver或FocusIn事件时执行的代码
				clearTimeout(reset);
				$lava.animate({ 
					left: $(this).position().left,
					width: $(this).outerWidth()
				}, {
					duration: options.speed,
					easing: options.easing,
					queue: false
				});
			})
			.bind('mouseout focusout', function() {
				// 发生MouseOut或FocusOut事件时执行的代码
				reset = setTimeout(function() {
					$lava.animate({
						left: $current_item.position().left,
						width: $current_item.outerWidth()					
					}, options.speed);
				}, options.reset);
			})
			// 单击<li>时添加.focus
			.click(function() {
				$(this)
					.siblings().removeClass('focus')
				.end().addClass('focus');
				$current_item = $(this);
			});
		});
	};
})(jQuery);