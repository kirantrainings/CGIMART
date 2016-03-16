
angular.module("DemoMart")
      .controller("vehicleCtrl",["$scope","vehicleService",
        "$rootScope","compareFact",
        function($scope,vehicleService,$rootScope,compareFact){

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
                compareFact.addVehiclesToCompare(vehicle);
            }
        }]);