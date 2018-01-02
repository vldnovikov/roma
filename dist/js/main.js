/* 
   CounterUp
   ========================================================================== */
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        time: 500
    });
});

/* 
   MixitUp
   ========================================================================== */
$(function () {
    $('#portfolio').mixItUp();
});

/* 
   Touch Owl Carousel
   ========================================================================== */
$(".touch-slider").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 1000,
    stopOnHover: true,
    autoPlay: true,
    items: 1,
    itemsDesktopSmall: [1024, 1],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
});
$('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
$('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');


$(".doors-block").owlCarousel({
    navigation: false,
    pagination: true,
    slideSpeed: 2000,
    stopOnHover: true,
    autoPlay: true,
    loop: true,
    margin:10,
    items: 3,
    itemsDesktopSmall: [1024, 1],
    itemsTablet: [600, 1],
    itemsMobile: [479, 1]
});
/* 
   Sticky Nav
   ========================================================================== */
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('.header-top-area').addClass('menu-bg');
    } else {
        $('.header-top-area').removeClass('menu-bg');
    }
});

/* 
   VIDEO POP-UP
   ========================================================================== */
$('.video-popup').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
});

/* 
   Back Top Link
   ========================================================================== */
var offset = 200;
var duration = 500;
$(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
    } else {
        $('.back-to-top').fadeOut(400);
    }
});
$('.back-to-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
})

/* 
   One Page Navigation & wow js
   ========================================================================== */
jQuery(function ($) {
    //Initiat WOW JS
    new WOW().init();

    // one page navigation
    $('.main-navigation').onePageNav({
        currentClass: 'active'
    });
});

jQuery(document).ready(function () {

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.fixed-top').addClass('menu-bg');
        } else {
            $('.fixed-top').removeClass('menu-bg');
        }
    });

});

/* Nivo Lightbox
========================================================*/
jQuery(document).ready(function ($) {
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });

});

/* stellar js
========================================================*/
$(function () {
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40,
        responsive: true
    });
});

/* 
   Page Loader
   ========================================================================== */
$(window).load(function () {
    "use strict";
    $('#loader').fadeOut();
});

var freeOrderForm = document.querySelector('#free-order');


freeOrderForm.addEventListener('click', function (e) {
    var target = e.target;
    // var freeZamer = document.querySelector('#free-zamer');

    if (target.classList.contains('popup')) {
        freeOrderForm.classList.remove('open');
    }
    if (target.classList.contains('close')) {
        freeOrderForm.classList.remove('open');
    }

    // freeZamer.addEventListener('submit', function () {
    //     freeOrderForm.classList.remove('open');
    // })
});

var openBtnFree = document.querySelector('#openFree');

openBtnFree.addEventListener('click', function (e) {
    e.preventDefault();
    if (!freeOrderForm.classList.contains('open')) {
        freeOrderForm.classList.add('open');
    }

});
