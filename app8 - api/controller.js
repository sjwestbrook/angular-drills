angular.module('myApp').controller('mainCtrl', function($scope, myService){

  $scope.getSpeciesInfo = function() {
    myService.getSpecies().then(function(res){
        console.log(res);
        $scope.species = res;
      });
  };
  $scope.getSpeciesInfo();

}); // end myApp
