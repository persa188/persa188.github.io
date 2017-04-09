var view = (function(){
  "use strict";

  var view = {};

  //glob vars
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  var span_pmodal = document.getElementsByClassName("close")[1];
  var privacy_modal = document.getElementById('privacy-policy');

  document.getElementById('aboutme').onclick = function () {
    modal.style.display = "inline-block";
  }

  document.getElementById('ppolicy').onclick = function () {
    privacy_modal.style.display = "inline-block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  span_pmodal.onclick = function () {
    privacy_modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      } else if (event.target == privacy_modal) {
        privacy_modal.style.display = "none";
      }
  }

  return view;
}(window));
