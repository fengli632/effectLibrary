/* lavalamp.nav.js - 熔岩灯导航设计样式, 2012 © yamoo9.com
---------------------------------------------------------------- */
(function($) { // JavaScript自运行函数
	$(function() { // jQuery Ready()语句
	
		// 对象引用
		var $nav = $('#navigation'),
			$current_item = $nav.find('.focus'),
			$lava = $('<li class="lava"/>'),
			// 设置选项
			options = {
				gap: 20,
				bgColor: '#eee',
				speed: 400,
				easing: 'easeInOutElastic',	
				reset: 2000
			},
			reset;
		
		// 设置$lava的基准元素$nav及调整<a> z-index的高度
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
		});
		
	});
})(jQuery); // 传入window.jQuery对象