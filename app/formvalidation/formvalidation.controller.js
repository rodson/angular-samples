(function() {
  'use strict';

  angular
    .module('app')
    .controller('FormValidationController', FormValidationController);

  function FormValidationController($scope) {
    var vm = this;

    vm.submit = submit;
    vm.pattern = '[a-zA-Z]';

    function submit() {
      console.log('submit is fired');
    }
  }

})();
