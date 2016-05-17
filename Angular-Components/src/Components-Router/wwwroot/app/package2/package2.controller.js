(function (undefined) {
    'use strict';
    angular.module('app.package2')
        .controller('package2.home', ControllerListaUsuarios);

    function ControllerListaUsuarios($rootScope, $scope, usuarioDataService) {
        var vm = this;
        vm.Title = "";
        vm.Usuarios = [];

        obterUsuarios();
        obterTitulo();

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
    }

})();