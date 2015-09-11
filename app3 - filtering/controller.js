// implicit notation with the 'this' pointer --> the 'this' pointer is going to be implied, "whatever is to the left of the dot" is meant

// use ARRAY to **explicitly** say that the first parameter in the array is the same as the first parameter in the function
// the 2nd parameter in the array is the same as the 2nd parameter in the function
// important for minification --> will change variable names in the function to, e.g. 's' and 'e' --> code will download much faster for your customers
// must then change $scope to scp, and employeeService to employees below


angular.module('arrayApp').controller('arrayController', ['$scope', 'employeeService', function(scp, employees){

  scp.employees = employees.getEmployees();

}]);
