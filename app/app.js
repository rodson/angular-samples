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
        templateUrl: 'app/formvalidation/formvalidation.html'
      });
  }
})();
