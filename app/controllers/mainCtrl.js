

angular.module("DemoMart")
       .controller("mainCtrl",["$scope","tabService",
        function($scope,tabService){

      /*  $scope.tabs=[
            { "name":"Home",
                "cssClass":"",
                "templateUrl":'app/templates/home.tpl.html'
        },
            { "name":"Vehicles",
                "cssClass":"",
                "templateUrl":'app/templates/vehicles.tpl.html'
            },
            { "name":"Compare",
                "cssClass":"",
                "templateUrl":'app/templates/compare.tpl.html'
            },
        ];*/

            $scope.brandname="CGI Brand";
            $scope.data={name:"kiran"};


            tabService.tabs().success(function(response){
               $scope.tabs=response.tabs;
            }).error(function(err){
                console.log(err)
            });

            $scope.loadPage=function(tab){
            tab.cssClass="active";
            $scope.selectedPage=tab.templateUrl;

                $scope.selectedVehicleCount=0;
                $scope.$on("VEHICLE_ADDED",function(event,args){
                    $scope.selectedVehicleCount++
                });

                $scope.$on("VEHICLE_DELETED",function(event,args){
                    $scope.selectedVehicleCount--;
                });
        };

            $scope.loadLogin = function(){
                $scope.selectedPage="app/templates/login.tpl.html";
            }
    }]);