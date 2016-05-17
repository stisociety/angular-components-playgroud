(function () {
    angular.module('app.package3')
        .run(LoadRoutes);

    function LoadRoutes(routehelper) {

        console.log('package3 configureRoute'); 

        routehelper.configureRoute(
            {
                Name: 'package3',
                Url: '/package3',
                TemplateUrl: 'app/package3/main.html',
                Controller: 'package3.home',
                ControllerAs: 'vm'
            });
    }

})();