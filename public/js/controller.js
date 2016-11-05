var secretApp = angular.module('myApp', []);

secretApp.controller('GreetingController', ['$scope', '$http', function($scope,
    $http) {
    $scope.alerts = [];
}]);
