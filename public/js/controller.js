var secretApp = angular.module('secretApp', []);

secretApp.controller('alerter', ['$scope', '$http', function($scope,
    $http) {
    $scope.alerts = ["bannas", "apples", "oranges"];
}]);
