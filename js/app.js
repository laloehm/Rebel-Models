$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

/* Smooth scrolling para anclas */
$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body").stop().animate({
		scrollTop: $(anchor).offset().top - 100 + "px"
	}, 1000);
	$('#nav-icon').toggleClass('open');
});

new WOW().init();