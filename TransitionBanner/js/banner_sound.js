;(function($){
	$.fn.banner_sound = function(audio_src){
		var banner_audio;
		return this.each(function(){
			$(this)
				.bind('mouseover focusin',function(){
						banner_audio = new Audio(audio_src);
						banner_audio.play();
				})
				.bind('mouseout focusout',function(){
						banner_audio.pause();
				});
		});
	};
})(jQuery);