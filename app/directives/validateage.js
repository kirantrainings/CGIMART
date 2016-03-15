/**
 * Created by Administrator on 3/15/2016.
 */
angular.module('DemoMart')
       .directive('validateage',[function(){
        return{
            restrict:"A",
            require:"ngModel",
            link:function(scope,element,attrs,ctrl){
                ctrl.$parsers.unshift(validateAge);
                ctrl.$formatters.unshift(validateAge);
                function validateAge(age){
                  var validAge=  parseInt(age);
                    if(validAge>=18 && validAge<=100){
                        console.log("Valid Age");
                        ctrl.$setValidity("validateage",true);
                    }
                    else{
                        console.log("Invalid Age");
                        ctrl.$setValidity("validateage",false);
                    }

                }
            }
        }
    }]);