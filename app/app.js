 angular.module("DemoMart",['common.filters','ui.router']);

 angular.module("DemoMart")
        .config(["$urlRouterProvider","$stateProvider",
         function($urlRouterProvider,$stateProvider){
         console.log("main Modules");
                 //define states
             $urlRouterProvider.otherwise("/");
             var home={
                 url:"/",
                 templateUrl:"app/templates/home.tpl.html",
                 controller:"homeCtrl"
             };
             var login={
                 url:'/login',
                 templateUrl:"app/templates/login.tpl.html",
                 controller:"loginCtrl"
             };
             var compare={};
             var vehicles={};

             //Register state
             $stateProvider.state("home",home);
             $stateProvider.state("login",login);
             /*
             $stateProvider.state("vehicles",vehicles);
             $stateProvider.state("compare",compare)*/;
     }]);


 angular.module("DemoMart")
     .run([function(){
         console.log("Run===>Main Module");
     }]);
