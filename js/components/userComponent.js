(function(){
    'use strict';
    
    var app = angular.module('app');

    app.component('userInfo',{
        bindings: {
                caption: '<'
        },
        templateUrl: '/js/components/userComponent.html',
        controller: function() {
            this.records = [{
        name: "Batman",
        city: "Gotham",
        secretIdentity: "Bruce Wayne"
      }, {
        name: "Superman",
        city: "Metropolis",
        secretIdentity: "Clark Kent/Kal-El"
      }, {
        name: "Green Arrow",
        city: "Star City",
        secretIdentity: "Oliver Queen"
      }, {
        name: "The Doctor",
        city: "Galifrey",
        secretIdentity: "Unknown"
      }];
        }
    });
})();