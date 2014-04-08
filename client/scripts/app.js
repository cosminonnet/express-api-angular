'use strict';

angular
    .module('expressApiAngularApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'lodash'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: "/index",
                templateUrl: "views/main.html"
            })
            .state('about', {
                url: "/about",
                templateUrl: "views/about.html"
            })
            .state('customers', {
                url: "/customers",
                templateUrl: "views/customers.html"
            })
            .state('pricing', {
                url: "/pricing",
                templateUrl: "views/pricing.html"
            });

        $urlRouterProvider.otherwise("/index");
    }]);