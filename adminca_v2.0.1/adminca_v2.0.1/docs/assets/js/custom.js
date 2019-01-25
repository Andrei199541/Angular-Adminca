$(function(){
	"use strict";

	$("a[data-href]").on("click", function(e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 90
        }, 1e3), e.preventDefault()
    });

	$("#sidebarScroll").find(".docs-sidebar-list li a[href^='#']").on('click', function (e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 90
		}, 500, function () {
		});
	});

	$('header').click('.sidebar-toggler',function(){
		$('.docs-sidebar').toggleClass('opened');
	});

});