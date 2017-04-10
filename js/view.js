var view = (function(){
  "use strict";

  var view = {};

  //glob vars
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  var span_pmodal = document.getElementsByClassName("close")[1];
  var privacy_modal = document.getElementById('privacy-policy');
  var twitter_ico = document.getElementById('twitter_ico');
  var twitter_ico_big = document.getElementById('twitter_ico_big');
  var twitter_modal = document.getElementById('twitter_modal');
  var sm_modal = document.getElementById('social-media-modal');

  document.getElementById('aboutme').onclick = function () {
    modal.style.display = "inline-block";
  }

  document.getElementById('ppolicy').onclick = function () {
    privacy_modal.style.display = "inline-block";
  }

  document.getElementById('socialmedia').onclick = function () {
    var content = `
    <div class="modal-content">
      <span id="close_sm_modal" class="close">&times;</span>
      <h1>Find, Follow, & Contact me @</h1> <br>
      <div class="icon-outer">
        <i id="twitter_ico_big" class="fa fa-twitter fa-5x icon-inner twico" aria-hidden="true"></i>
        <i class="fa fa-facebook fa-5x icon-inner fbico" aria-hidden="true"></i>
        <i class="fa fa-tumblr fa-5x icon-inner tico" aria-hidden="true"></i>
        <a href="https://github.com/persa188" class="gitico">
          <i class="fa fa-github fa-5x icon-inner" aria-hidden="true"></i>
        </a>
        <a href="mailto:dev.persaud@mail.utoronto.ca?Subject=Whats%20Up%3F" class="defaultico-alt">
          <i class="fa fa-envelope icon-inner fa-5x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    `;
    sm_modal.innerHTML = content;
    sm_modal.style.display = 'inline-block';
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
   } else if (event.target.id.toLowerCase() === 'close_sm_modal') {
     sm_modal.style.display = "none";
   } else if (event.target.id.toLowerCase() == 'twitter_ico_big') {
     sm_modal.style.display = "none";
     twitter_modal.style.display = 'block';
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
      } else if (event.target == sm_modal) {
        sm_modal.style.display = "none";
      }
  }

  return view;
}(window));
