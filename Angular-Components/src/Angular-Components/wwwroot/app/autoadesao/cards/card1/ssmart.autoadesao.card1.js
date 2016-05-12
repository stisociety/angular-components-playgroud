(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
        .component('autoadesaoCard1', {
            templateUrl: "/app/autoadesao/cards/card1/main.html",
            controller: 'ControllerAdesaoCard1',
            controllerAs: 'vm'
        })
        .controller('ControllerAdesaoCard1', ControllerAdesaoCard1);

    function ControllerAdesaoCard1($http) {
        console.log('Adesão Card 1');
        var vm = this;
       
    }

}());

/*
 :: https://github.com/johnpapa/angular-styleguide/issues/662 ::
*/