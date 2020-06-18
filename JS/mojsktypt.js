$(document).ready(function(){
	// menu click event
	$('.menu_button').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.Menu').addClass('act');
			}
			else {
				$('.Menu').removeClass('act');
			}
	});
});