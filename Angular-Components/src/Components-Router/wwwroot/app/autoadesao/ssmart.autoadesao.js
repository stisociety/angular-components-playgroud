(function () {
    'use strict';

    angular
        .module('ssmart.autoadesao',[]);
  

}());

(function () {

    angular.module('ssmart.autoadesao')
        .run(LoadRoutes);

    function LoadRoutes(routehelper) {
        routehelper.configureRoute(
            {
                Name: 'autoadesao',
                Url: '/autoadesao',
                TemplateUrl: 'app/autoadesao/main.html',
                Controller: 'ssmart.autoadesao.home',
                ControllerAs: 'vm'
            });
    }

})();


(function () {

    angular.module('ssmart.autoadesao')
        .controller('ssmart.autoadesao.home', ControllerAutoAdesao);

    function ControllerAutoAdesao() {
        var vm = this;
        vm.Title = "";

        obterTitulo();

        function obterTitulo() {
            vm.Title = "Auto Adesão";
        }
    }

})();


(function () {

    angular
        .module('ssmart.autoadesao')
        .component('autoAdesao', {
            templateUrl: "/app/autoadesao/main.html",
            controller: 'ControllerAdesao',
            controllerAs: 'vm'
        })
        .controller('ControllerAdesao', ControllerAdesao);

    function ControllerAdesao($http) {
        console.log('Adesão');
        var vm = this;
    }

})();