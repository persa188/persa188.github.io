var view = (function(){
  "use strict";

  var view = {};

 document.querySelector('body').addEventListener('click', function(event) {
 })

  // prevent nav from jumping, want to stick properly
  window.onload =   $(function() {
        $('#nav-wrapper').height($("#nav").height());

        $('#nav').affix({
            offset: { top: $('#nav').offset().top }
        });
    });

  return view;
}(window));
