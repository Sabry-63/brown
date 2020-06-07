/*global $*/
$("document").ready(function() {
  "use strict";
  $('.responsive').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="slick_left fas fa-angle-left"></i>',
    nextArrow: '<i class="slick_right fas fa-angle-right"></i>',
    speed: 300,
    slidesToShow: 6,
    rtl: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});
