 angular.module("DemoMart",['common.filters']);

 angular.module("DemoMart")
        .config([function(){
         console.log("main Modules");
     }]);


 angular.module("DemoMart")
     .run([function(){
         console.log("Run===>Main Module");
     }]);
