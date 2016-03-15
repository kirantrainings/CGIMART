/**
 * Created by Administrator on 3/15/2016.
 */
angular.module('DemoMart')
       .directive("cgiNavBar",[function(){
          return{
            restrict:"A",
            templateUrl:"app/templates/header.tpl.html"
          };
    }]);