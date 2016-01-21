/**
 * Created by codename on 2016-01-20.
 */
/// <reference path="angular.min.js" />

var myApp;
myApp = angular.module("myModule", []);

/*
var myController = function($scope)
{
    $scope.message = "Tutorial";
};
*/

//myApp.controller("myController", myController);

myApp.controller("myController", function ($scope)
{
   /*
    // complex object
    var employee =
    {
        firstName: "David",
        lastName: "Zhong",
        gender:"Male"
    };
    */

  ///  $scope.employee = employee;

  ///  $scope.message = "========Angular cool==========";

    var country =
    {
        name: "USA",
        capital:"BC",
        flag:"images/m.jpg"
    };

    $scope.country = country;
});

// Above all in one line by using the method "chaining"
/*
var myApp = angular
                  .module("myModule", [])
                  .controller("myController", function ($scope)
                  {
                    // complex object
                    var employee =
                    {
                        firstName: "David",
                        lastName: "Zhong",
                        gender:"Male"
                    };

                    $scope.employee = employee;

                    $scope.message = "========Angular cool==========";
                  });
 */

// ng-src (source directive)