angular.module('app', ['ngRoute'])
  .controller('MyCtrl', ['$scope', '$anchorScroll', function ($scope,  $anchorScroll) {
      $scope.scroll = function () {
        $anchorScroll();
      };
  }]);