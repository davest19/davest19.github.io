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

        // route for the CREExposure page
        .when('/CREExposure', {
           //No HTML for this page yet , just controller defaults to first link
            templateUrl: 'view/ETDpositions.html',
            controller: 'ETDpositionsController'
        })

        // route for the ETDpositions page
        .when('/ETDpositions', {
            templateUrl: 'view/ETDpositions.html',
            controller: 'ETDpositionsController'
        })

        // route for the collateralizedOTC page
        .when('/collateralizedOTC', {
            templateUrl: 'view/collateralizedOTC.html',
            controller: 'collateralizedOTCController'
        })
        // route for the CREExposure page
        .when('/MREExposure', {
           //No HTML for this page yet , just controller defaults to first link
            templateUrl: 'view/P&LRave.html',
            controller: 'P&LRaveController'
        })

        // route for the P&LRave page
        .when('/P&LRave', {
            templateUrl: 'view/P&LRave.html',
            controller: 'P&LRaveController'
        })

        // route for the P&LHierarchy page
        .when('/P&LHierarchy', {
            templateUrl: 'view/P&LHierarchy.html',
            controller: 'P&LHierarchyController'
        })
                // route for the VARInvestmentBank page
        .when('/VARInvestmentBank', {
            templateUrl: 'view/VARInvestmentBank.html',
            controller: 'VARInvestmentBankController'
        })

        // route for the VARSummary page
        .when('/VARSummary', {
            templateUrl: 'view/VARSummary.html',
            controller: 'VARSummaryController'
        })
        // route for the helpme page
        .when('/helpme', {
            templateUrl: 'view/helpme.html',
            controller: 'helpmeController'
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
    $scope.message = 'This one works too, awesome !!';
});

// This piece of code will hold service call for data pull
mainApp.controller('P&LRaveController', function ($scope) {
    // Not used Anymore
    $scope.message = 'This one works too, awesome !!';
});

// This piece of code will hold service call for data pull
mainApp.controller('P&LHierarchyController', function ($scope) {
    // Not used Anymore
    $scope.message = 'This one works too, awesome !!';
});

// This piece of code will hold service call for data pull
mainApp.controller('VARInvestmentBankController', function ($scope) {
    // Not used Anymore
    $scope.message = 'This one works too, awesome !!';
});

// This piece of code will hold service call for data pull
mainApp.controller('VARSummaryController', function ($scope) {
    // Not used Anymore
    $scope.message = 'This one works too, awesome !!';
});

// This piece of code will hold service call for data pull
mainApp.controller('helpmeController', function ($scope) {
    // Not used Anymore
    $scope.message = 'This one works too, awesome !!';
});