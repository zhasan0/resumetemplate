// loader js start
$(function() {

  "use strict";

  var window_width = $(window).width();

  /*Preloader*/
  $(window).load(function() {
    setTimeout(function() {
      $('body').addClass('loaded');
    }, 1000);
  });
}); // loader js end


//navbar top fixed js
var affixElement = '#navbar-main';

$(affixElement).affix({
  offset: {
    // Distance of between element and top page
    top: function () {
      return (this.top = $(affixElement).offset().top)
    }
  }
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//progressbar custom jquery
$(document).ready(function() {
  $('.progress .progress-bar').progressbar({display_text: 'fill'});
});

//Testimonial Carousel 
$('.carousel').carousel({
  interval: 10000
})

//mixitup Custom js
jQuery(document).ready(function($){
    $('.protfolio-list').mixItUp();
    $('.timer').countTo();
    var map = new GMaps({
        scrollwheel:false,
      el: '#map',
      lat: 23.746465,
      lng: 90.376013
    });
});

//FANCYBOX custom js
$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
