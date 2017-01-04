$(document).ready(function(){
	if ($(window).width() >= 975) {
		$("#nav").toggleClass("navbar-fixed-top");
	}
});

$(window).resize(function(){
	if ($(window).width() < 975) {
		$("#nav").toggleClass("navbar-fixed-top");
	}
});

$('a').click(function(){
	if ($(window).width() >= 975) {
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 80
	    }, 500);
	    $(this).blur();
	    return false;
	} else {
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 500);
	    $(this).blur();
	    return false;
	}
});