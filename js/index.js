var view = (function(){
  "use strict";

  const SCROLL_OFFSET = 100;

  var view = {};

  var c_down = document.getElementById('c-down');

  c_down.onclick = function() {
    var e = (c_down.className == "circle-up zio") ? "#main" : "#contact";
    scrollTo(e);
  }

  document.addEventListener('scroll', function(e) {
    var a = isScrolledIntoView("#contact") ? "circle-up zio" : "circle-down zio";
    c_down.className = a;
  });

  var isScrolledIntoView = function(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  var scrollTo = function(EID) {
    $('html, body').animate({
      scrollTop: $(EID).offset().top - SCROLL_OFFSET
    }, 1000);
  }

  return view;
}($, window));
