/*jslint browser: true*/
/*global angular*/

angular.module('TFSApp').controller('welcomeController', 
                                    ['$scope', '$http', function($scope, $http) {
                                    	 var url = "/api/buckets";
         
            $http.get(url).success( function(response) {
               $scope.proposals = response;
               console.log(response);
               console.log(response.display + ',' + response.action)
            });
    
}]);