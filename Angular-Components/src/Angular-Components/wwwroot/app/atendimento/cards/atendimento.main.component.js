(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
        .component('atendimentoMain', {
            templateUrl: "/app/atendimento/cards/atendimento.main.component.html",
            controller: 'ControllerMain',
            controllerAs: 'vm'
        })
        .controller('ControllerMain', ControllerMain);
 
    function ControllerMain(atendimentoCadsDataService) {
        console.log('Controller Main');
        var vm = this;
        vm.$onInit = Iniciar();

        function Iniciar() {
            console.log('Iniciar');
            return atendimentoCadsDataService.obterListaCard().then(function (cards) {
                vm.cards = cards;
                console.log(vm.cards);
            });
        }
    }
    
}());
