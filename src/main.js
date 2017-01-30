$(document).ready(function(){
	if ($(window).width() >= 975) {
		$("#nav").toggleClass("navbar-fixed-top");
	}
	treehouse();
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

function treehouse(){
	$.ajax({
		url: "https://teamtreehouse.com/richardzimmerman.json",
		type: "GET",
		dataType: "json"
	}).done(function(data){
		// console.log(data);
		$("#pts-html").text(data.points.HTML+" points");
		$("#pts-css").text(data.points.CSS+" points");
		$("#pts-js").text(data.points.JavaScript+" points");
		$("#pts-php").text(data.points.PHP+" points");
		$("#pts-sql").text(data.points.Databases+" points");
		$("#pts-java").text(data.points.Java+" points");
	});
}