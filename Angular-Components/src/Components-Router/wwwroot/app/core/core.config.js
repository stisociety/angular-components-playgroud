/// <reference path="../../../scripts/_references.js" />
(function () {
    'use strict';

    var core = angular.module('ssmart.core');
       
    core.config(ConfigCoreApp);
    core.run(ExecuteDefaults);
    
    function ConfigCoreApp($logProvider, $stateProvider, $urlRouterProvider, $locationProvider, routehelperConfigProvider) {
        console.log('App core init config');

        if ($logProvider.debugEnabled)
            $logProvider.debugEnabled(true);       

        $urlRouterProvider.deferIntercept();
        routehelperConfigProvider.config.$stateProvider = $stateProvider;
        $locationProvider.html5Mode({ enabled: false });
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('/', { url: '/' });
        console.log('App core finished config');
    }   

    function ExecuteDefaults($q, $state, $http, $ocLazyLoad, $urlRouter, routehelper, $rootScope) {
        console.log('App core init run');
        var packages = [];
        var queue = [];

        $rootScope
       .$on('$stateChangeStart',
           function (event, toState, toParams, fromState, fromParams) {
               console.log("change: " + fromState.name + "->" + toState.name);
           });
        $rootScope
        .$on('$stateNotFound',
            function (event, toState, toParams, fromState, fromParams) {
                console.log("Error State Change: " + toState.name);
            });

        $http.get('app/data/packages.json').success(function (data) {
            packages = data;

            console.log('Carregar módulos:');
            angular.forEach(packages, function (packageItem) {
                console.log(packageItem);
                loadPackage(packageItem.Name, packageItem.Dependencies);
                if (!packageItem.UseRouteFile)
                    routehelper.configureRoute(packageItem.Route);
            });

            $q.all(queue)
                .then(function (results) {
                    $urlRouter.sync();
                    $urlRouter.listen();
                    console.log('App core routes loaded');
                });
            console.log('App core finished run');
        });        

        function loadPackage(name, files) {
            var ocConfig = [{
                "name": name,
                "files": files,
                "serie": true
            }];
            queue.push($ocLazyLoad.load(ocConfig));
        }
    }


})();