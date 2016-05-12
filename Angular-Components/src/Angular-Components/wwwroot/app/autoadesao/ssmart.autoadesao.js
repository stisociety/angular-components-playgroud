(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
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

}());
