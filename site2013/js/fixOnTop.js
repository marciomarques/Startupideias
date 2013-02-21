(function(){
  "use strict";
  var $ = window.jQuery,
  topPadding = $(".navbar").outerHeight(),
  topOffset = topPadding;
  if ($('#contact-container').length > 0) {
    topOffset = $('#contact-container').offset().top - topPadding;
  }
  $.fn.fixOnTop = function (pos, nextPadding, top) {
    var $this = $(this),
    $window = $(window);
    
    if (nextPadding == null) {
      nextPadding = false;
    }

    $window.scroll(function(e){
      if ($window.scrollTop() > pos) {
        if (nextPadding) {
          $this.next().css({
            paddingTop: $this.outerHeight()
          });
        }
        $this.css({
          position: 'fixed',
          top: top
        });
      } else {
        if (nextPadding) {
          $this.next().css({
            paddingTop: 0
          });
        }
        $this.css({
          position: 'static'
        });
      }
    });
  };

  $(document).ready(function(){
    if ($('#contact-container').length > 0){
      $('#contact-container').fixOnTop(topOffset, true, topPadding);
    }
    if ($('.sidebar-float').length > 0){
      $('.sidebar-float').fixOnTop($('.sidebar-float').offset().top, false, 0);
    }
    if ($(window).scrollTop() > topOffset) {
      $('#contact-container').css({
        position: 'fixed',
        top: topPadding
      });
    }
  });
}).call(this);