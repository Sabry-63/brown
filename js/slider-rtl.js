/*global $*/
$("document").ready(function() {
  "use strict";
  $('.responsive').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    prevArrow: '<i class="slick_left fas fa-angle-left"></i>',
    nextArrow: '<i class="slick_right fas fa-angle-right"></i>',
    speed: 300,
    slidesToShow: 5,
    rtl: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
