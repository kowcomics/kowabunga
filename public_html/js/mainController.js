var primaryApp = angular.module('primaryApp', ['ngRoute', 'ui.bootstrap', 'ngLoadScript']);

// create the controller and inject Angular's $scope
primaryApp.controller('mainController', ['$scope', 'navBarLinks', '$http', function ($scope, navBarLinks, $http) {
  $scope.navBarLinks = navBarLinks;
}]);