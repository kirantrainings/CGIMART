/**
 * Created by Administrator on 3/15/2016.
 */
angular.module('common.filters')
       .filter('formatphone',[function(){
         return function(input,criteria){

             if(criteria=='US') {
                 if (input && input.length == 10) {
                     var firstThree = input.substring(0, 3);
                     var secondThree = input.substring(3, 6);
                     var lastFour = input.substring(6, 10);
                     return firstThree + "-" + secondThree + "-" + lastFour;

                 }
             }
             if(criteria=='IN') {
                 if (input && input.length == 10) {
                     var firstFive = input.substring(0, 5);
                     var lastFive = input.substring(5, 10);
                     return firstFive + "-" + lastFive ;
                 }
             }

             return input;
         }
    }]);