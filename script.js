document.addEventListener("DOMContentLoaded", function(event) {
   // var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
//var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
 // return new bootstrap.Offcanvas(offcanvasEl)
//})

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

    var typed = new Typed(".auto-type", {
      strings: ["Frontend-Developer", "Backend-Developer","Fullstack-Developer"],
      typeSpeed: 150,
      backspeed: 150,
      loop:true
    });

    $(document).ready(function(){
      // Add smooth scrolling to all links
      $(".items a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
    var header = document.getElementById("item-box");
var btns = header.getElementsByClassName("items");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active","");
  }
  this.className += " active";
  });
}
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#item-box',
  offset: 50
});

});
