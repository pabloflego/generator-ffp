(function() {
    'use strict';

    angular
        .module('<%= appName %>.<%= moduleName %>')
        .run(appRun);

    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    getRoutes.$inject = [];
    function getRoutes() {
        return [
            {
                url: '/<%= moduleName %>',
                config: {
                    templateUrl: 'app/modules/<%= moduleName %>/<%= moduleName %>.html',
                    controller: '<%= moduleNameCap %>',
                    controllerAs: 'vm',
                    title: '<%= moduleNameCap %>',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> <%= moduleNameCap %>'
                    }
                }
            }
        ];
    }
})();
