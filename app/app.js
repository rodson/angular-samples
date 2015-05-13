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
      })
      .state('testdirectivescope', {
        url: '/testdirectivescope',
        templateUrl: 'app/testdirectivescope/testdirectivescope.html'
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

(function() {
  'use strict';

  function MyCtrl($scope) {
    $scope.aaa = 'apple';
    $scope.loggedInUser = {
      name: 'Austin Powers'
    };
    $scope.bbb = 'sssss';
  }

  function myFirst() {
    return {
      scope: false,
      link: function(scope, el) {
        scope.myNewProp = "OOPS, I'm on the parent!";
      }
    };
  }

  function mySecond() {
    return {
      scope: true,
      link: function(scope, el) {
        scope.myNewProp = "reset new prop";
      }
    }
  }

  function myThird() {
    return {
      restrict: 'E',
      template: [
        '<div><input ng-model="user" /></div>',
        '<div><input ng-model="aa" /></div>'
      ].join(''),
      scope: {
        user: "=",
        aa: "@"
      },
      link: function(scope) {
        console.log(scope.user);
      }
    }
  }

  angular
    .module('app')
    .controller('MyCtrl', MyCtrl)
    .directive('myFirst', myFirst)
    .directive('mySecond', mySecond)
    .directive('myThird', myThird);

})();
