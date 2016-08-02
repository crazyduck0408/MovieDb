/**
 * Created by Rajeev on 8/1/16.
 */
// create the module and name it scotchApp
var movieApp = angular.module('movieApp', ['ngRoute']);

// configure our routes
movieApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'views/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/now-playing', {
            templateUrl : 'views/now-playing.html',
            controller  : 'nowPlayingController'
        })

        // route for the contact page
        .when('/upcoming', {
            templateUrl : 'views/upcoming.html',
            controller  : 'upComingController   '
        });
});

// create the controller and inject Angular's $scope
movieApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

movieApp.controller('nowPlayingController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

movieApp.controller('upComingController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});