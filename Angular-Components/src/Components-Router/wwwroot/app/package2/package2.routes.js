(function (undefined) {
    'use strict';
    angular.module('app.package2')
        .run(LoadRoutes);


    function LoadRoutes(routehelper) {

        routehelper.configureRoute(
            {
                Name: 'package2',
                Url: '/package2',
                TemplateUrl: 'app/package2/main.html',
                Controller: 'package2.home',
                ControllerAs: 'vm'
            });
    }


})();