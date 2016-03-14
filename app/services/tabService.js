/**
 * Created by Administrator on 3/14/2016.
 */
angular.module('DemoMart')
       .service("tabService",["$http",function($http){
        this.tabs=function(){
            return $http.get("app/api/tabs.json");
        }
    }]);