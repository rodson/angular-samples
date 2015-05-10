(function() {
  'use strict';

  function TestParentCtrl() {
    $scope.test = 'parent';
  }

  function TestChildCtrl() {

  }

  angular
    .module('app')
    .controller('TestParentCtrl', TestParentCtrl)
    .controller('TestChildCtrl', TestChildCtrl);
})();
