(function(){
  "use strict";
  var $ = window.jQuery,
  topPadding = $(".navbar").outerHeight(),
  topOffset = $('#contact-container').offset().top - topPadding;
  $.fn.fixOnTop = function (pos) {
    var $this = $(this),
    $window = $(window);

    $window.scroll(function(e){
      if ($window.scrollTop() > pos) {
        $this.next().css({
          paddingTop: $this.outerHeight()
        });
        $this.css({
          position: 'fixed',
          top: topPadding
        });
      } else {
        $this.next().css({
          paddingTop: 0
        });
        $this.css({
          position: 'static'
        });
      }
    });
  };

  $(document).ready(function(){
    $('#contact-container').fixOnTop(topOffset);
    if ($(window).scrollTop() > topOffset) {
      $('#contact-container').css({
        position: 'fixed',
        top: topPadding
      });
    }
  });
}).call(this);