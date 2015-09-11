// safer way to create app.js file

var myBasicsAppName = 'basicsApp';    // global variable. choose a unique name so it's less likely that someone else uses this. don't use it yourself elsewhere
                                      // 'basicsApp parameter must match ng-app="" in html doc'
angular.module(myBasicsAppName, []);
