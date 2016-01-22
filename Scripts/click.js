/**
 * Created by codename on 2016-01-21.
 */

/// <reference path="angular.min.js" />

var myApp;
myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope)
{
    var technologies =
        [
            { name: "C#", likes:0, dislikes:0 },
            { name: "ASP.NET", likes:0, dislikes:0 },
            { name: "SQL Server", likes:0, dislikes:0 },
            { name: "Angular JS", likes:0, dislikes:0 },

        ];
        $scope.technologies = technologies;

        $scope.incrementLikes = function (technology)
        {
            technology.likes++;
        }

        $scope.incrementDislikes = function (technology)
        {
            technology.dislikes++;
        }

});

