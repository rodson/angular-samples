(function() {
  'use strict';

  function TestParentCtrl() {
  }

  function TestChildCtrl() {

  }

  angular
    .module('app')
    .controller('TestParentCtrl', TestParentCtrl)
    .controller('TestChildCtrl', TestChildCtrl);
})();
