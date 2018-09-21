$('.main-menu li').removeClass('active');
var path = window.location.pathname;
$('.main-menu li a').each(function() {
	var href = $(this).attr('href');
	if(path.slice(1).substring(0, href.length) === href) {
		$(this).parent('li').addClass('active');
	}
});
