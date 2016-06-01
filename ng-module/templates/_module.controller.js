(function() {
    'use strict';

    angular
        .module('<%= appName %>.<%= moduleName %>')
        .controller('<%= moduleNameCap %>', <%= moduleNameCap %>);

    <%= moduleNameCap %>.$inject = [];
    /**
     * @description <%= moduleNameCap %> Controller Constructor
     * @constructor
     */
    function <%= moduleNameCap %>() {
        /*jshint validthis: true */
        var vm = this;

        init();

        /**
         * @description Initialize Controller
         * @returns {*}
         */
        function init() {
            var promises = [];

            return $q.all(promises);
        }

        /* Public Members */

        /* Private Members */
    }
})();
