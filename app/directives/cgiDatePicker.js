/**
 * Created by Administrator on 3/15/2016.
 */
angular.module('DemoMart')
       .directive('cgiDatePicker',[function(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                console.log(scope);
                var configDate={}
                if(attrs.mindate){
                    configDate.minDate=attrs.mindate;
                }
                if(attrs.maxdate){
                    configDate.maxDate=attrs.maxdate;
                }
                $(element).datepicker(configDate);
            }
        }
    }]);