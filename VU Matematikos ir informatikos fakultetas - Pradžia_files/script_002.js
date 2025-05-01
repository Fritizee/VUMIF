(function($) {
	// Add affix
  $(window).on('load', function() {
  	var nav_pills = $('#t3-header');

  	if (nav_pills.length) {
  		setTimeout(function(){
  			nav_pills.affix({
			  offset: {
				top: $('.t3-topbar').height()
			  }
			});
  		}, 1000);

		$(window).resize(function(){
			nav_pills.data('bs.affix').options.offset.top = $('.t3-topbar').height();
		});


  	}
  });
})(jQuery);