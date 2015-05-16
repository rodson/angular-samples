(function() {
  'use strict';

  function MyTabsDirective() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: MyTabsController,
      template: [
        '<div>',
          '<ul>',
            '<li ng-repeat="pane in panes">',
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>',
            '</li>',
          '</ul>',
          '<div ng-transclude></div>',
        '<div>'
      ].join('')
    };

    function MyTabsController($scope) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane) {
        if (panes.length === 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    }
  }

  function MyPaneDirective() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      link: link,
      template: [
        '<div ng-show="selected" ng-transclude></div>'
      ].join('')
    };

    function link(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    }
  }

  angular
    .module('app')
    .directive('myTabs', MyTabsDirective)
    .directive('myPane', MyPaneDirective);
})();
