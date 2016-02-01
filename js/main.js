$(function() {
	$('#burger').click(function() {
		$('.main-menu').slideToggle('fast');
		$(window).resize(function(){
			if($('.main-menu').is(':hidden')) {
				$('.main-menu').css('display', 'block');
			}
		});
	});
});
