(function () {
    'use strict';

    angular.module('ssmart.autoadesao').controller('ssmart.autoadesao.main', RunController);
    function RunController() {
        console.log('autoadesao controller executed ...');
    }

    angular.module('ssmart.autoadesao')
        .run(LoadRoutes);

    function LoadRoutes(routehelper) {
        console.log('autoadesao routes executed ...');

        routehelper.configureRoute(
            {
                Name: 'autoadesao',
                Url: '/autoadesao',
                TemplateUrl: 'app/autoadesao/main.html',
                Controller: 'ssmart.autoadesao.main',
                ControllerAs: 'vm'
            });
    }

})();