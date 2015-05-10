(function () {
  'use strict';

  angular
    .module('app', ['ui.router'])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');

    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: 'app/list/list.html'
      })
      .state('formvalidation', {
        url: '/formvalidation',
        templateUrl: 'app/formvalidation/formvalidation.html',
        controller: 'FormValidationController',
        controllerAs: 'vm'
      })
      .state('testchildscope', {
        url: '/testchildscope',
        templateUrl: 'app/testchildscope/testchildscope.html'
      });
  }
})();

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
