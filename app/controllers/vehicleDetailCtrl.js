/**
 * Created by Administrator on 3/15/2016.
 */
angular.module('DemoMart')
       .controller('vehicleDetailCtrl',["$scope",function($scope){
            $scope.$on('VEHICLE_DETAIL',function(event,args){
                console.log(args.details);
            })
    }]);