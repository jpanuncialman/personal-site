(function($) {
	$(function() {

		$('.menu-toggle').click(function() {
			$('.menu-main-nav-container').toggleClass('toggled-on');
			$('ul#menu-main-nav').toggleClass('toggled-on');
			$('.menu-close').toggleClass('toggled-on');
		});

	});

	$(function() {

		$('.menu-close').click(function() {
			$('.menu-main-nav-container').removeClass('toggled-on');
			$('ul#menu-main-nav').removeClass('toggled-on');
			$('.menu-close').removeClass('toggled-on');
		});
	});

})(jQuery);
