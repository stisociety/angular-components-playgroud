(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
        .component('atendimentoAtenderSocio', {
            templateUrl: "/app/atendimento/atendersocio/main.html",
            controller: 'ControllerAtenderSocio',
            controllerAs: 'vm'
        })
        .controller('ControllerAtenderSocio', ControllerAtenderSocio);

    function ControllerAtenderSocio($http) {
        console.log('Controller atender sócio');
        var vm = this;
    }

}());