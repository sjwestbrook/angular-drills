angular.module('arrayApp').controller('arrayController', function($scope, employeeService){  // no quotes around employeeService bc inside function

  $scope.employees = employeeService.getEmployees();  // incl parentheses bc you want the function to do something
})
