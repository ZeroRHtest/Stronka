$(document).ready(function(){
	// menu click event
	$('.guzik').click(function() {
		$(this).toggleClass('dupa');
			
		if($(this).hasClass('dupa')) {
				$('.navigation-list_menu').addClass('dupa');
			}
			
		else {
				$('.navigation-list_menu').removeClass('dupa');
			}
	});
});