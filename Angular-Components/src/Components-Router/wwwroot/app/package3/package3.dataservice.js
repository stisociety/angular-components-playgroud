
(function () {

    angular.module('app.package3')
        .factory('outrosUsuarioDataService', DataService);

    function DataService($http) {
        return {
            getOutrosUsuarios: getOutrosUsuarios
        };

        function getOutrosUsuarios() {
            console.log('function getOutrosUsuarios.');
            return $http.get('app/data/outros-usuarios.json');
        }
    }

})();
