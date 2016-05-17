(function () {
    'use strict';
    var package1 = angular.module('app.package1', []);

    package1.controller('package1.home', ShowController)
    function ShowController($state)
    {
        var vm = this;
        vm.Title = "Package 1";
        vm.Informacao = "Cumulative update package 1 is available for Microsoft AppFabric 1.1 for Windows Server. This hotfix package resolves several issues and adds several features that are described in the \"More Information\" section.";
        vm.states = $state.get();

    }
})();