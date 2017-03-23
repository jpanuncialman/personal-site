jQuery(document).ready(function() {

	jQuery('.portfolio-filter-button').click(function(){

			var category = jQuery(this).attr('id');
			
			if (category == 'all') {
				jQuery('.portfolio-post').addClass('hide-portfolio-post');
				setTimeout(function(){
					jQuery('.portfolio-post').removeClass('hide-portfolio-post');
				}, 300);
			} else {
				jQuery('.portfolio-post').addClass('hide-portfolio-post');
				setTimeout(function(){
					jQuery('.' + category).removeClass('hide-portfolio-post');
			}, 300);
		}


	});

})(jQuery); 

/*
jQuery(document).ready(function() {

	jQuery('.portfolio-filter-button').click(function(){

			var category = jQuery(this).attr('id');
			
			if (category == 'all') {
				jQuery('.portfolio-post').animate({opacity:0});
				setTimeout(function(){
					jQuery('.portfolio-post').animate({opacity:1});
				}, 300);
			} else {
				jQuery('.portfolio-post').animate({opacity:0});
				setTimeout(function(){
					jQuery('.portfolio-post').animate({opacity:1});
			}, 300);
		}


	});

})(jQuery);
*/