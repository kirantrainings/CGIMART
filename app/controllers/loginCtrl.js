/**
 * Created by Administrator on 3/15/2016.
 */

angular.module('DemoMart')
       .controller("loginCtrl",['$scope',function($scope){
        $scope.user={
            age:10
        };
        $scope.login=function(){
           if(userForm.age.validateage.$invalid){
               console.log("invalid age");
           }
            else{
               console.log("Valid age");
           }
        }
    }]);