(function () {

    'use strict';
    angular.module('ssmart.atendimento', []);

})();



(function () {

    angular.module('ssmart.atendimento')
        .run(LoadRoutes);

    function LoadRoutes(routehelper) {
        routehelper.configureRoute(
            {
                Name: 'atendimento',
                Url: '/atendimento',
                TemplateUrl: 'app/atendimento/main.html',
                Controller: 'atendimento.home',
                ControllerAs: 'vm'
            });
    }

})();


(function () {

    angular.module('ssmart.atendimento')
        .controller('atendimento.home', ControllerAtendimento);

    function ControllerAtendimento() {
        var vm = this;
        vm.Title = "";

        obterTitulo();

        function obterTitulo() {
            vm.Title = "Atendimento";
        }
    }

})();

