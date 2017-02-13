

angular.module('app').component('buttonComponent', {
  // Binds the attibute data to the component controller.
  bindings: {
    data: '@'
  },

  // We can now access the data from the data attribute with `$ctrl`
  template:`<button type="button" class="btn btn-success"><i class="fa fa-gitlab fa-2x" aria-hidden="true"></i> {{$ctrl.data}}</button>
<h1>testing </h1> 
  `
});