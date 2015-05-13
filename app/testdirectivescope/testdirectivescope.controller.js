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
