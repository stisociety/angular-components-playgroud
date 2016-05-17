(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
        .component('atendimentoCard2', {
            templateUrl: "/app/atendimento/cards/card2/main.html",
            controller: 'ControllerCard2',
            controllerAs: 'vm'
        })
        .controller('ControllerCard2', ControllerCard2);

    function ControllerCard2($http) {
        console.log('Controller Card 2');
        var vm = this;
     
    }

}());

/*
 :: https://github.com/johnpapa/angular-styleguide/issues/662 ::
*/