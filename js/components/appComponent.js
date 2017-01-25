(function(){
  'use strict';
  var app = angular.module('app');
 app.controller('HomeCtrl', function() {
     this.message = "Hello, world";
  });
  app.component('menuBar', {
    // defines a two way binding in and out of the component
    bindings: {
      brand:'<'
     },
    // Load the template
    templateUrl: '/js/components/appComponent.html',
    controller: function () {
    // A list of menus(th((is)
        //console.log(this);
      this.menu = [{
        name: "Home",
        component: "home"
      }, {
        name: "About",
        component: "about"
      }, {
        name: "Contact",
        component: "contact"
      }];
    }
  });
})();