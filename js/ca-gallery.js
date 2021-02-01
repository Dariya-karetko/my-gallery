
(function ($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  renderPortfolio()
})(jQuery); // End of use strict

function renderPortfolio() {
  var projs = getProjs();

  for (var i = 0; i < projs.length; i++) {
    var currProj = projs[i]
    $('.img-fluid').attr('src',currProj.img);
    $('.portfolio-caption h4').text(currProj.name);
    $('.portfolio-caption p').text(currProj.title);

    $('.modal-body h2').text(currProj.name);
    $('.item-intro').text(currProj.title);
    $('.description').text(currProj.desc);
    $('.date').text('Date: ' + currProj.publishedAt);
    $('.category').text('Category: ' + currProj.labels)
    $('.github').attr('href',currProj.url)
  }
}


