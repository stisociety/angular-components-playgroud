
(function () {

    angular.module('app.package3')
        .controller('package3.home', ControllerListaOutrosUsuarios);

    function ControllerListaOutrosUsuarios($rootScope, $scope, outrosUsuarioDataService) {
        var vm = this;
        vm.Title = "";
        vm.OutrosUsuarios = [];

        obterUsuarios();
        obterTitulo();

        $scope.$on('OutrosUsuariosUpdated', function (event, data) {
            console.log('$on OutrosUsuariosUpdated.');
            vm.OutrosUsuarios = data.lista;
            console.log(vm.OutrosUsuarios);
        });

        function obterUsuarios() {
            return outrosUsuarioDataService.getOutrosUsuarios().then(function (response) {
                $rootScope.$broadcast('OutrosUsuariosUpdated', { lista: response.data });
                console.log('$broadcast OutrosUsuariosUpdated.');
            });
        }

        function obterTitulo() {
            vm.Title = "Lista de outros usuários";
        }
    }

})();

