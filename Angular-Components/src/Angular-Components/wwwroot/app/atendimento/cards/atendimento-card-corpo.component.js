(function () {
    'use strict'

    angular
    .module('ssmart.atendimento')
    .directive('atendimentoCardCorpo', atendimentoCardCorpo);

    function atendimentoCardCorpo($compile) {

        var directive = {
            link: link,
            templateUrl: 'app/atendimento/cards/atendimento-card-corpo.component.html',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            var newElement = angular.element(scope.card.template);
            element.append(newElement);
            $compile(newElement)(scope);
        }
    }

})();
/*

(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
        .component('atendimentoMain', {
            templateUrl: "/app/atendimento/atendimento.main.component.html",
            controller: 'ControllerMain',
            controllerAs: 'vm'
        })
        .controller('ControllerMain', ControllerMain);

    function ControllerMain($http) {
        console.log('Controller Main');
        var vm = this;
        vm.$onInit = Iniciar($http);

        function Iniciar($http) {
            console.log('Iniciar');
            return ObterListaCard($http).then(function (cards) {
                vm.cards = cards;
                console.log(vm.cards);
            });
        }
    }

    function ObterListaCard($http) {
        console.log('ObterInformacoesCard');
        return $http.get("/app/atendimento/cards.json").then(function (response) {
            return response.data;
        });
    }


}());
*/