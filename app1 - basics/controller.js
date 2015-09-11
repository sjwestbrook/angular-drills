angular.module(myBasicsAppName).controller('leonardoCtrl', function($scope){      // every controller should have $scope parameter injected in function
                                                                                 // (dependency injection - if we don't have it - $scope - the code will break)
  $scope.moarWurds = "Something random";

});
