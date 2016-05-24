(function (undefined) {
    'use strict';
    angular.module('app.package2')
        .controller('package2.home', ControllerListaUsuarios);

    function ControllerListaUsuarios($rootScope, $scope, usuarioDataService) {
        console.log("load ControllerListaUsuarios");
        var vm = this;
        vm.Title = "";
        vm.ValorEdicao = "?";
        vm.ValorAdesao = "?";
        vm.Usuarios = [];

        obterUsuarios();
        obterTitulo();

        vm.RealizarAdesao = function () {
            vm.ValorAdesao = "Adicionado com sucesso! Uuid: " + guid();
            realizarAdesao();
        }
        
        vm.RealizarEdicao = function () {
            vm.ValorEdicao = "Editado com sucesso! Uuid: " + guid();
        }

        $scope.$on('UsuariosUpdated', function (event, data) {
            vm.Usuarios = data.lista;
        });

        function obterUsuarios() {
            return usuarioDataService.getUsuarios().then(function (response) {
                $rootScope.$broadcast('UsuariosUpdated', { lista: response.data });
            });
        }

        function obterTitulo() {
            vm.Title = "Lista de usuários";
        }
        
        function realizarAdesao() {
            console.log("click RealizarAdesao");
        }

        function guid() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
              s4() + '-' + s4() + s4() + s4();
        }

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }
    }

})();