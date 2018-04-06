
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        stagePadding: 50,
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
        }
    })
})

$('header .top-cart .cart').hover(function(e){
    jQuery(this).find('>.dropdown-menu').addClass("fadeInUp animated");
},function(e){
    jQuery(this).find('>.cart-detail').removeClass("fadeInUp animated");
});

$('.carousel').carousel({
    interval: 2000
})

$(function () {
    'use strict'
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
})



$('.product-grid').hover(function(e){
    jQuery(this).find('.product-button').addClass("fadeInUp animated");
},function(e){
    jQuery(this).find('.product-button').removeClass("fadeInUp animated");
});