var myApp = angular.module('myApp', ['ui.router', 'ocLazyLoad']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('search', {
            url: "/state1",
            templateUrl: "partials/state1.html"
        })
        .state('places', {
            url: "/places",
            templateUrl: "partials/state1.list.html",
            controller: function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('itinerary', {
            url: "/itinerary",
            templateUrl: "partials/state2.html"
        })
        .state('editHotel', {
            url: "/list",
            templateUrl: "partials/state2.list.html",
            controller: function ($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        }).state('editTravel', {
            url: "/itinerary",
            templateUrl: "partials/state2.html"
        }).state('editActivity', {
            url: "/itinerary",
            templateUrl: "partials/state2.html"
        }).state('editExtra', {
            url: "/itinerary",
            templateUrl: "partials/state2.html"
        });
});