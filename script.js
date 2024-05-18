document.addEventListener("DOMContentLoaded", function(event) {
    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})
/*
var i = 0;
    var txt = "I'm Dishika Maity";
    var speed = 50;

    // Trigger typewriter effect when the document loads
    window.onload = function() {
      typeWriter();
    };
    

    function typeWriter() {
      var nameElement = document.getElementById("name");
      if (i < txt.length) {
        nameElement.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    */

    var typed = new Typed('.element', {
      strings: ["First sentence.", "Second sentence."],
      typeSpeed: 30
    });

});