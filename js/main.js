/*

  Template Name: Mosque - Responsive html5 template
  Author: http://wprand.com/
  Version: 1.0

  Note: This is the main JS file to activate all jQuery plugin.

*/

/* =============================================
[  Table of contents  ]
=============================================
  1. MeanMenu active
  2. Hero slick slider active
  3. Portfolio masonry active
  4. Image popup active
  5. Image gallery active
  6. Video popup active
  7. ScrollToTop active
  8. WOW js active
=============================================
[ End table content ]
============================================= */

(function($) {
  'use strict';

  /* =============================================
        1. MeanMenu active
    ============================================= */
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '991'
  });

  /* =============================================
        2. Hero slick slider active
    ============================================= */
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find(
        '[data-animation]'
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      prevArrow: '<button type="button" class="slick-prev">PR<br>EV</button>',
      nextArrow: '<button type="button" class="slick-next">NE<br>XT</button>',
      arrows: true,
      responsive: [{ breakpoint: 992, settings: { dots: true, arrows: false } }]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  /* =============================================
        3. Portfolio masonry active
    ============================================= */
  $('.portfolio-area').imagesLoaded(function() {
    // init Isotope
    var $grid = $('.portfolio-grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item'
      }
    });

    // filter items on button click
    $('.portfolio-filter').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-filter button').on('click', function(event) {
      $(this)
        .siblings('.active')
        .removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });

  /* =============================================
        4. Image popup active
    ============================================= */
  $('.popup-image').magnificPopup({
    type: 'image'
  });

  /* =============================================
        5. Image gallery active
    ============================================= */
  $('.gallery-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /* =============================================
        6. Video popup active
    ============================================= */
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

  /* =============================================
        7. ScrollToTop active
    ============================================= */
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-double-up"></i>', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  /* =============================================
        8. WOW js active
    ============================================= */
  new WOW().init();
})(jQuery);

document.getElementById('ourFacebook').onclick = function() {
  location.href = 'www.facebook.com/COMYEC';
};
