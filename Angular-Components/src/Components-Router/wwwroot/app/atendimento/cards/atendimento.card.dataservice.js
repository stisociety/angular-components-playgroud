(function () {
    'use strict';

    angular
        .module('ssmart.atendimento')
        .service('atendimentoCadsDataService', atendimentoCadsDataService);
    
    function atendimentoCadsDataService($http) {
        var service = {
            obterListaCard: ObterListaCard
        };

        return service;
        
        function ObterListaCard() {
            console.log('ObterInformacoesCard');
            return $http.get("/app/atendimento/cards.json")
               .then(function (response) {
                   if (typeof response.data === 'object') {
                       return response.data;
                   } else {
                       alert("Ops, resultado inesperado. A consulta retornou vazia.");
                       return $q.reject(response.data);
                   }

               }, function (response) {
                   alert("Ops, resultado inesperado. A consulta não foi encontrada.");
                   return $q.reject(response.data);
               });

        }
    }
    
})();
