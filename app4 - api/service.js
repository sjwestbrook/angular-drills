angular.module('apiApp').service('swapiVehicleService', function($http){      // $http bc using an API

  var rootVehicleUrl = "http://swapi.co/api/vehicles/";

  this.getVehicles = function() {
    return $http ({
      method: 'GET',
      url: rootVehicleUrl
    }).then(function(webResponse){     // .then is the promise. the result of the promise is a callback function
      if (webResponse.status !== 200){    // eg if you get error code 404
        return "You broke something you nooob";
      }
      console.log(webResponse.data);
      return webResponse.data;
    });
  } // end this.getVehicles

});
