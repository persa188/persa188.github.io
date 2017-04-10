var view = (function(){
  "use strict";

  var view = {};

  //glob vars
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  var span_pmodal = document.getElementsByClassName("close")[1];
  var privacy_modal = document.getElementById('privacy-policy');
  var twitter_ico = document.getElementById('twitter_ico');
  var twitter_modal = document.getElementById('twitter_modal');

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

 document.querySelector('body').addEventListener('click', function(event) {
   if (event.target.id.toLowerCase() === 'close_tmodal'){
     twitter_modal.style.display = "none";
   }
 })

  twitter_ico.onclick = function () {
    twitter_modal.style.display = 'block';
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      } else if (event.target == privacy_modal) {
        privacy_modal.style.display = "none";
      } else if (event.target == twitter_modal) {
        twitter_modal.style.display = 'none';
      }
  }

  return view;
}(window));
