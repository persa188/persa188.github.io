var view = (function(){
  "use strict";

  const CLR_TRANSPARENT = "rgba(0,0,0,0)";
  const CLR_BLK = "rgba(0,0,0,1)";
  const CLR_WHITE = "#FFF";
  const NAV_ITEM_HIGHLITED = "nav-item nav-item-highlighted";
  const NAV_ITEM = "nav-item";
  const SCROLL_OFFSET = 100;

  var view = {};

  var top_nav = document.getElementById('topnav');
  var top_nav_brand = document.getElementById("nav-brand");
  var top_nav_about = document.getElementById("about-nv-btn");
  var top_nav_contact = document.getElementById("contact-nv-btn");

  top_nav_about.onclick = function() {
    scrollTo("#about");
  }

  top_nav_contact.onclick = function() {
    scrollTo("#contact");
  }

  top_nav_brand.onclick = function() {
    scrollTo("#main");
  }

  window.addEventListener('scroll', function(e) {
    var p = $(window).scrollTop();
    //for the topnav color & brand visibility & animations
    if (p) {
      top_nav.style.background = CLR_BLK;
      top_nav_brand.style.color = CLR_WHITE;
    } else {
      top_nav.style.background = CLR_TRANSPARENT;
      top_nav_brand.style.color = CLR_TRANSPARENT;
    }

    //highlight the currently focused section in NAV
    top_nav_about.className = isScrolledIntoView("#about") ? NAV_ITEM_HIGHLITED : NAV_ITEM;
    top_nav_contact.className = isScrolledIntoView("#contact") ? NAV_ITEM_HIGHLITED : NAV_ITEM;
  });

  var scrollTo = function(EID) {
    $('html, body').animate({
      scrollTop: $(EID).offset().top - SCROLL_OFFSET
    }, 1000);
  }

  //too lazy to wtite this, stolen from https://goo.gl/YHuvYy
  var isScrolledIntoView = function(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }


  return view;
}($, window));
