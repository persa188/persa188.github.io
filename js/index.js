var view = (function(){
  "use strict";

  var view = {};

  document.getElementById("about-nv-btn").onclick = function() {
    alert("Not Implemented - I'll probably add something here eventually :p")
  }

  document.getElementById("contact-nv-btn").onclick = function() {
    window.location.href="mailto:dev.persaud@mail.utoronto.ca";
  }

  window.addEventListener('scroll', function(e) {
    console.log(e);
    document.getElementById("nav-brand").className="nav-brand nav-item";
    document.getElementById('topnav').className="topnav nav-bg";
  });

  return view;
}(window));
