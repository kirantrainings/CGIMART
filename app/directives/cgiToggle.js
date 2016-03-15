angular.module('DemoMart')
       .directive('cgiToggle',[function(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                var btn=element.find("#btnExpand");
                var content= element.find('.panel-body');
                console.log(content);
                $(btn).bind('click',function(){
                    this.innerText=
                        this.innerText=='Expand'?
                            'Collapse':'Expand';

                    $(content).toggle();
                })
            }
        }
    }]);