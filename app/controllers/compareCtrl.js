/**
 * Created by Administrator on 3/16/2016.
 */

angular.module('DemoMart')
        .controller('compareCtrl',["$scope","compareFact",
        function($scope,compareFact){
            $scope.comparedVehicles= compareFact.getComparedVehicles();

    }]);