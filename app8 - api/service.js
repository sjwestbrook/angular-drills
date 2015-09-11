angular.module('myApp').service('myService', function($http, $q){

  var rootUrl = 'http://swapi.co/api/species/';

  this.getSpecies = function() {
    var deferred = $q.defer();
    var arr = [];
    $http({
      method: 'GET',
      url: rootUrl
    }).then(function(res) {
      for (var i = 0; i < res.data.results.length; i++) {
        arr.push(this.formatData(res.data.results[i]));
      }
      console.log(arr);
      deferred.resolve(arr);
    }.bind(this));
    return deferred.promise;
  };

  this.formatData = function(res) {   // myService.formatData
    return {
      Name: res.name,
      Designation: res.designation,
      SkinColors: res.skin_colors,
    };
  };



/*
  this.getSpecies = function() {
    var deferred = $q.defer();
    var arr = [];
    $http({
      method: 'GET',
      url: rootUrl
    }).then(function(response) {
      console.log(response);
      var parsedData = response.results; // or response.data.results?
      console.log(parsedData);

      for (var i = 0; i < parsedData.length; i++) {
        var item = {
            //Name: parsedData[i].name,   // ?
            Designation: parsedData[i].designation,
            SkinColor: parsedData[i].skin_colors
        }
        arr.push(item);
      }
      deferred.resolve(arr);
    })
    return deferred.promise;
  }
*/

});  // end myApp
