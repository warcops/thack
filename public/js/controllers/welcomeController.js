/*jslint browser: true*/
/*global angular*/

angular.module('TFSApp').controller('welcomeController',
                                    ['$scope', '$rootScope' , '$http', function($scope, $rootScope , $http) {
            
             var url = "/api/buckets";
         
            $http.get(url).success( function(response) {
               $scope.proposals = response;
               console.log(response);
               console.log(response.display + ',' + response.action)
               $rootScope.proposals = $scope.proposals;
            });
    
}]);