angular.module('apiApp').controller('swapiCtrl', function($scope, swapiVehicleService){

  $scope.vader = "I am your father";
  swapiVehicleService.getVehicles().then(function(vehiclesObj){     //need .then so we can actually get the data bc we only returned a promise
    var vehicles = vehiclesObj.results;
    vehicles.forEach(function(vehicle){
      vehicle.cost_in_usd = vehicle.cost_in_credits * 1000;
    });
    $scope.vehicles = vehicles;
  });

});
