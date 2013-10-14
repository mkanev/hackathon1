'use strict';

angular.module('hackathon20131014App', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/view1',
                controller: 'MainCtrl'
            })
            .when('/view2', {
                templateUrl: 'partials/view2'
            })
            .when('/view3', {
                templateUrl: 'partials/view3'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
