(function(){
  "use strict";
  var $, scroll;
  $ = window.jQuery;
  scroll = function (scrol){
    var elementClicked, destination;
    if(scrol.length > 0 && $("#"+scrol[scrol.length-1]).length > 0){
      elementClicked = scrol[scrol.length-1];
      destination = $("#"+elementClicked).offset().top - $(".navbar").outerHeight();
      if (destination > $('#contact-container').offset().top - $(".navbar").outerHeight()){
        destination -= $('#contact-container').outerHeight();
      }
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 500 );
      return false;
    }
  };
  $(document).ready(function(){
    if(window.location && window.location.hash && window.location.hash.length > 0){
      scroll(window.location.hash.split("#"));
    }
    $('.scroll').click(function() {
       var scrol = $(this).attr("href").split("#");
       scroll(scrol);
    });
  });
}).call(this);