document.addEventListener( 'DOMContentLoaded', function() {
   var splide = new Splide( '.splide',{
     type : "loop",
     autoplay : true,
     interval : 2000,
     speed : 2000
   } );
   splide.mount();
 } );
