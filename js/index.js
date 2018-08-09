var view = (function(){
  "use strict";

  const CLR_TRANSPARENT = "rgba(0,0,0,0)";
  const CLR_BLK = "rgba(0,0,0,1)";
  const CLR_WHITE = "#FFF";
  const NAV_ITEM_HIGHLITED = "nav-item nav-item-highlighted";
  const NAV_ITEM = "nav-item";
  const SCROLL_OFFSET = 100;

  var view = {};

  var c_down = document.getElementById('c-down');

  c_down.onclick = function() {
    scrollTo("#contact");
  }

  var scrollTo = function(EID) {
    $('html, body').animate({
      scrollTop: $(EID).offset().top - SCROLL_OFFSET
    }, 1000);
  }

  return view;
}($, window));
