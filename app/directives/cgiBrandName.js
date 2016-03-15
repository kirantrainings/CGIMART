/**
 * Created by Administrator on 3/15/2016.
 */
angular.module('DemoMart')
       .directive("cgiBrand",[function(){
        return{
            //template:"<h1>CGI</h1>",
            templateUrl:"app/templates/header.tpl.html",
            restrict:"AEC"
        };
    }]);