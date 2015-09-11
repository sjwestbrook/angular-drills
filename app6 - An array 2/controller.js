angular.module('myApp').controller('mainCtrl', function ($scope, myService){

  $scope.employees = myService.getEmployees();

});
