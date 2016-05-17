(function () {
    'use strict';
    angular.module('app.package2', []);        
})();


(function () {

    angular.module('app.package2')
        .factory('usuarioDataService', DataService);
    
    function DataService($http) {
        return {
            getUsuarios: getUsuarios
        };

        function getUsuarios() {
            return $http.get('app/data/usuarios.json');
        }
    }

})();