(function() {
  'use strict';

  angular
    .module('app')
    .controller('FormValidationController', FormValidationController);

  function FormValidationController($scope) {
    var vm = this;

    vm.submit = submit;

    function submit() {
      console.log('submit is fired');
    }
  }

})();
