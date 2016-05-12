(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
        .component('atendimentoCard1', {
            templateUrl: "/app/atendimento/cards/card1/main.html",
            controller: 'ControllerCard1',
            controllerAs: 'vm'
        })
        .controller('ControllerCard1', ControllerCard1);

    function ControllerCard1($http) {
        console.log('Controller Card 1');
        var vm = this;
       
    }

}());

/*
 :: https://github.com/johnpapa/angular-styleguide/issues/662 ::
*/