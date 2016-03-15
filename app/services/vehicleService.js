
angular.module('DemoMart')
       .service('vehicleService',
    ["$http",function($http){
     this.getVehicles = function(){
         return $http.get("app/api/vehicles.json");
     };
    }])