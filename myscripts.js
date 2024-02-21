//------------------------------ HEADER NAV ---------------------------------
/* scroll animation*/

(function($) { "use strict";

$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        } else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
});		

// color
$(document).scroll(() => {
    let scrollTop = $(document).scrollTop();

    if (scrollTop > 0) {
        navMenu.addClass('is-sticky');
        logo.css('color', '#000');
        navMenuActive.css('color','rgb(97, 3, 3)');
        headerElem.css('background', '#fff');
        navToggle.css('border-color', '#000');
        navToggle.find('.strip').css('background-color', '#000');
    } else {
        navMenu.removeClass('is-sticky');
        logo.css('color', 'gray');
        navMenuActive.css('color','black')
        headerElem.css('background', '#fff');
        navToggle.css('border-color', '#fff');
        navToggle.find('.strip').css('background-color', 'gray');
    }

    headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : 
    {'padding': '1rem 0', 'box-shadow': 'none' });
});
    
//Dropdoown Menu On Hover
    
$('body').on('mouseenter mouseleave','.nav-item',function(e){
        if ($(window).width() > 750) {
            var _d=$(e.target).closest('.nav-item');_d.addClass('show');
            setTimeout(function(){
            _d[_d.is(':hover')?'addClass':'removeClass']('show');
            },1);
        }
});	

})(jQuery); 


//------------------------------ SELL YOUR DESIGNS SPONSERS---------------------------------
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


