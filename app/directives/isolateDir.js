/**
 * Created by Administrator on 3/15/2016.
 */

angular.module("DemoMart")
      .directive('cgiReadOnly',[function(){
        return{
            restrict:"A",
            templateUrl:"app/templates/isolated.tpl.html",

            scope:{
                myBrand:"@",//readonlny or one way binding
                twoWayBrand:"="
            }
        }
    }]);
