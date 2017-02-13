
(function() {

  var app =  angular.module('app', []); 
 // A controller that displays hello world
  app.controller('HomeCtrl', function() {
     this.message = "Hello, world";
     this.imageUrls = [
       {
         url : "http://www.w3schools.com/css/trolltunga.jpg",
         isVideo : false,
        //  text : `<div class="text"><h2>I am awesome</h2><button>awesome button</button></div>`,
         thumburl : "http://www.w3schools.com/css/trolltunga.jpg"
       },
       { 
          url : "https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg",
          isVideo : false,
          // text : "",
          thumburl : "https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg"
       },
       {
         url : "http://localhost:4001/js/videos/me22.mp4",
         isVideo: true,
         thumburl : "http://localhost:4001/js/videos/me22.mp4"
       }
      ];

       this.slideroptions = {
        autoPlay : false,
        videoAutoPlay : true,
        bulletNavigator : false,
        bulletNumber : 20,
        arrowNavigator : true,
        arrowNumber : 18,
        slideTime : 3000,
        // slideTransition : "Fade"
       };
  });
})();