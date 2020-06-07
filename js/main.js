/*global $, console */

$(function() {
  "use strict";
  const wiCart = $(".end-pay").innerWidth(),
    nav = $("nav").innerHeight();
    $('body').css('paddingTop',nav)

  $(".end-pay").css("left", -wiCart);
  // When Scroll body Sticky Nav bar
  $(window).scroll(function() {
    const scroll = $(this).scrollTop();

    //add class in nav
    if (scroll > 1) {
      if ($("nav").hasClass() !== "top-nav") {
        $("nav").addClass("top-nav animated fadeInDown");
        $(".end-pay ").addClass("top");
      }
    } else {
      $("nav").removeClass("top-nav animated fadeInDown");
    }
  });

  // Add To
  $(".add").click(function() {
    $(this).hide();
    $(this)
      .siblings(".count")
      .css("display", "flex");
  });

  // Cart
  $(".list-nav .cart").click(function() {
    $(".end-pay").addClass("show");
    $("body").animate(
      {
        marginLeft: wiCart
      },
      400
    );
    $(".end-pay").animate(
      {
        left: 0,
        top: nav
      },
      400
    );
    $(this)
      .children()
      .addClass("fa-cart-plus");
  });

  $(".end-pay .head .fa-times ").click(function() {
    $("body").animate(
      {
        marginLeft: 0
      },
      400
    );
    $(".end-pay").animate(
      {
        left: -wiCart,
        top: nav
      },
      400
    );
    $(".list-nav .cart").fadeIn();
    $(".list-nav .cart")
      .children()
      .removeClass("fa-cart-plus");
    $(".end-pay").removeClass("show");
  });

  // Home
  $(".list-nav .home").click(function() {
    $(".upper-nav .list").toggleClass("show");
  });

  //Open Popup
  $("nav .user").click(function() {
    $(".pernt-pop").fadeIn();
  });

  // Popup Control
  $(".content-pop .link-form ").click(function(e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
    $(".content-pop .title-log .title").text($(this).text());
    if ($(this).hasClass("log")) {
      $(".log").addClass("show");
      $(".log")
        .siblings()
        .removeClass("show");
    }
    if ($(this).hasClass("new")) {
      $(".new").addClass("show");
      $(".new")
        .siblings()
        .removeClass("show");
    }
  });

  // Close Popup
  $(".popUp .fa-times").click(function() {
    $(".pernt-pop").fadeOut();
  });
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      $(".pernt-pop").fadeOut();
    }
  });
});
