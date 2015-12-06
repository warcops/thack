/*jslint browser: true*/
/*global angular*/
var tfsApp = angular.module('TFSApp', ['ui.router', 'oc.lazyLoad']);

tfsApp.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
              function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        // For any unmatched url, redirect to /state1
        //$urlRouterProvider.otherwise("/search");/*commemted because it is not loading FB buttons*/

        // Now set up the states
        $stateProvider
            .state('search', { // search
                url: '/search',
                templateUrl: '/js/views/search.html',
                controller: 'searchController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/searchController.js'
                            ]
                        });
                    }]
                }
            })
            .state('welcome', {
                url: '/welcome',
                templateUrl: '/js/views/welcome.html',
                controller: 'welcomeController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/welcomeController.js'
                            ]
                        });
                    }]
                }
            })
            .state('places', {
                url: '/places',
                templateUrl: '/js/views/places.html',
                controller: 'placesController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/placesController.js'
                            ]
                        });
                    }]
                }
            })
            .state('itinerary', {
                url: '/itinerary',
                templateUrl: '/js/views/itinerary.html',
                controller: 'itineraryController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/itineraryController.js'
                            ]
                        });
                    }]
                }
            })
            .state('editHotel', {
                url: '/editHotel',
                templateUrl: '/js/views/editHotel.html',
                controller: 'editHotelController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/editHotelController.js'
                            ]
                        });
                    }]
                }
            })
            .state('editTravel', {
                url: '/editTravel',
                templateUrl: '/js/views/editTravel.html',
                controller: 'editTravelController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/editTravelController.js'
                            ]
                        });
                    }]
                }
            })
            .state('activity', {
                url: '/activity',
                templateUrl: '/js/views/activity.html',
                controller: 'activityController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/activityController.js'
                            ]
                        });
                    }]
                }
            })
            .state('editActivity', {
                url: '/editActivity',
                templateUrl: '/js/views/editActivity.html',
                controller: 'editActivityController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/editActivityController.js'
                            ]
                        });
                    }]
                }
            })
            .state('editExtra', {
                url: '/editExtra',
                templateUrl: '/js/views/editExtra.html',
                controller: 'editExtraController',
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'files',
                            files: [
                                '/js/controllers/editExtraController.js'
                            ]
                        });
                    }]
                }
            });
        }
]);

// set the state to root scope. this will used to sensitize the screen based on url
tfsApp.run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.state = $state;
}]);