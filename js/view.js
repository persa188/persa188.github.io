var view = (function(){
  "use strict";

  var view = {};

 document.querySelector('body').addEventListener('click', function(event) {
 })

  // When the user clicks anywhere outside of the modal, close it
  window.onload =   $(function() {
        $('#nav-wrapper').height($("#nav").height());

        $('#nav').affix({
            offset: { top: $('#nav').offset().top }
        });
    });

  return view;
}(window));
