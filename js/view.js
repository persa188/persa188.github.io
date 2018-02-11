var view = (function(){
  "use strict";

  var view = {};

  // prevent nav from jumping, want to stick properly
  window.onload =   $(function() {
        $('#nav-wrapper').height($("#nav").height());

        $('#nav').affix({
            offset: {
              top: $('#nav').offset().top,
              bottom: $('#nav').offset().bottom
            }
        });
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('header', 'assets/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
    });

  // Wait for window load
  window.load = $(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
  });

  return view;
}(window, particlesJS));
