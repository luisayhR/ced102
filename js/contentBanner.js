$(document).ready(function(){
    var $container = $('.container');
    var $slides = $('.container').find('img');
    var currentSlide = 1;
    var animateSpeed = 1000;
    var interval = 4000;
  
    var successCallback = function() {
      if (currentSlide < ($slides.length - 1)) {
        currentSlide++;
      } else {
        $container.css({'marginLeft': '0px'});
        currentSlide =1;
      }
    };
  
    var animateSlide = function() {
      $container.animate({'marginLeft':'-='+'400px'},animateSpeed, successCallback);
    };
  
    setInterval(animateSlide,interval);
  
  });
  