$(document).ready(function(){
	// menu click event
	$('.menu_button').click(function() {
		$(this).toggleClass('act');
			
		if($(this).hasClass('act')) {
				$('.navigation-list_menu').addClass('act');
			}
			
		else {
				$('.navigation-list_menu').removeClass('act');
			}
	});
});