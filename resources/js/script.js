$(document).ready(function() {

  // For the sticky Navigation
  $('.js--section-family').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  //For the scroll on buttons
  $('.js--scroll-to-friends').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-friends').offset().top
    }, 500);
  });

  $('.js--scroll-to-family').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-family').offset().top
    }, 500);
  });

  /* Navigation Scroll */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});