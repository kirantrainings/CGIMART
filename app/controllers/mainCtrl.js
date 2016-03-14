

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

            tabService.tabs().success(function(response){
               $scope.tabs=response.tabs;
            }).error(function(err){
                console.log(err)
            });
        $scope.loadPage=function(tab){
            tab.cssClass="active";
            $scope.selectedPage=tab.templateUrl;
        }
    }]);