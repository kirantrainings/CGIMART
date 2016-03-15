
angular.module("DemoMart")
      .controller("vehicleCtrl",["$scope","vehicleService","$rootScope",
        function($scope,vehicleService,$rootScope){

            vehicleService.getVehicles()
                .success(function(response){
                console.log(response);
                    $scope.vehicles=response.vehicles;
            }).error(function(err){
                    console.log(err);
                });


            $scope.selectedVehicle= function(vehicle){
                if(vehicle.selected){
                    $rootScope.$broadcast("VEHICLE_ADDED",{details:vehicle});
                }
                else{
                    $rootScope.$broadcast("VEHICLE_DELETED",{details:vehicle});
                }

            }
        }]);