/*jslint browser: true*/
/*global angular*/

angular.module('TFSApp').controller('activityController',
                                    ['$scope', '$rootScope' , '$http', function($scope, $rootScope , $http) {

console.log("activityController" + $rootScope.proposals);
    
}]);