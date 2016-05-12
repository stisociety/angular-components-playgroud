(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
        .component('autoadesaoCard2', {
            templateUrl: "/app/autoadesao/cards/card2/main.html",
            controller: 'ControllerAdesaoCard2',
            controllerAs: 'vm'
        })
        .controller('ControllerAdesaoCard2', ControllerAdesaoCard2);

    function ControllerAdesaoCard2($http) {
        console.log('Adesão Card 2');
        var vm = this;
     
    }

}());

/*
 :: https://github.com/johnpapa/angular-styleguide/issues/662 ::
*/