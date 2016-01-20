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
    $scope.message = "========Angular cool==========";
});