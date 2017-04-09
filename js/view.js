var view = (function(){
  "use strict";

  var view = {};

  //glob vars
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];

  document.getElementById('aboutme').onclick = function () {
    modal.style.display = "inline-block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  return view;
}(window));
