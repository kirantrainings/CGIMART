/**
 * Created by Administrator on 3/16/2016.
 */
angular.module('DemoMart')
       .factory("compareFact",[function(){
         var comparedVehicles=[];
        return{
            getComparedVehicles:function(){
                return comparedVehicles;
            },
            addVehiclesToCompare:function(vehicle){

                comparedVehicles.push(vehicle);
            }
        };
    }]);