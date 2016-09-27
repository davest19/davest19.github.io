// script.js

// create the module for mainApp
// includes ngRoute for all our routing needs
var mainApp = angular.module('mainApp', ['ngRoute']);

// configure our routes
mainApp.config(function ($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/ETDpositions', {
            templateUrl: 'view/ETDpositions.html',
            controller: 'ETDpositionsController'
        })

        // route for the contact page
        .when('/collateralizedOTC', {
            templateUrl: 'view/collateralizedOTC.html',
            controller: 'collateralizedOTCController'
        })
        .otherwise({
            templateUrl: 'view/home.html',
            controller: 'mainController'        });
});

// create the controller and inject Angular's $scope
mainApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Home Page Testing Successful!!!!';
});

// This piece of code will hold service call for data pull
mainApp.controller('ETDpositionsController', function ($scope) {
    // Not used Anymore
    //$scope.message = 'Sub Nav Bar dropdown works like a magic!!';
});

// This piece of code will hold service call for data pull
mainApp.controller('collateralizedOTCController', function ($scope) {
    // Not used Anymore
    //$scope.message = 'This one works too, awesome !!';
});