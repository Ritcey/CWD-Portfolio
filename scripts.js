document.addEventListener('DOMContentLoaded', function() {
    var carouselOptions = {
    };
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, carouselOptions);

    function nextSlide() {
        var carouselInstance = M.Carousel.getInstance(elems[0]);
        carouselInstance.next();
    }

    setInterval(nextSlide, 1000);
});
    

document.addEventListener('DOMContentLoaded', function() {
    var parallaxOptions = {
    };
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, parallaxOptions);

});
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.png");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/1.png");
   
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    /*
        Wow
    */
    new WOW().init();
	
});


jQuery(window).load(function() {
	
	/*
		Hidden images
	*/
});