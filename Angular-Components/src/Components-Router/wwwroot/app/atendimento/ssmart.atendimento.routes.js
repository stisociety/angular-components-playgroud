(function () {
    'use strict';
    console.log('atendimento carregado!');

    angular.module('ssmart.atendimento')
        .controller('ssmart.atendimento.main', RunController);

    function RunController() {
        console.log('atendimento controller executed ...');
    }

    angular.module('ssmart.atendimento')
        .run(LoadRoutes);    

    function LoadRoutes(routehelper) {
        console.log('atendimento routes executed ...');

        routehelper.configureRoute(
            {
                Name: 'atendimento',
                Url: '/atendimento',
                TemplateUrl: 'app/atendimento/main.html',
                Controller: 'ssmart.atendimento.main',
                ControllerAs: 'vm'
            });
    }

})();