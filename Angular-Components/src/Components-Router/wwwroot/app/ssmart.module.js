(function () {
    'use strict';
    
    angular
	    .module('ssmart', ['ssmart.core']);

    angular.module('ssmart').controller('main', ShowController);
    
    function ShowController($state) {
        var vm = this;
        vm.estado = $state.get();
        vm.teste = "teste 123";
           
    }

})();