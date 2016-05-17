(function () {
    'use strict';
    angular
        .module('ssmart', []);
    /*'ngComponentRouter', 'ssmart.autenticacao'*/
    /*.value("$routerRootComponent", "ssmart");   */
})();

(function () {

    angular
       .module('ssmart')
       .component("batataFrita", {
           template: '<h1>TESTE</h1>',
           /*templateUrl: "/app/atendimento/main.html",
           controller: 'ControllerTeste as vm',*/
       });

    console.log("O ssmartApp abriu!!! ");

    function ControllerTeste() {
        console.log("O controller do ssmartApp abriu!!! ");
    }

});

/*
(function () {
    "use strict";

    var module = angular.module("ssmart");

    module.component("ssmartApp", {
        templateUrl: "/app/atendimento/main.html",
        $routeConfig: [
            { path: "/atendimento", component: "atendimentoMain", name: "Atendimento" },
            { path: "/contato", component: "contato", name: "Contato" },
            { path: "/atendimento/card/:id/...", component: "cardInfor", name: "CardInfor" },
            { path: "/**", redirectTo: ["Atendimento", ""] }
        ]
    });

    module.component("contato", {
        template: "Contato - e-mail: society@society.com.br"
    });

}());
*/