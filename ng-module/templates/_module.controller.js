(function() {
    'use strict';

    angular
        .module('<%= appName %>.<%= moduleName %>')
        .controller('<%= moduleNameCap %>', <%= moduleNameCap %>);

    <%= moduleNameCap %>.$inject = ['$q'];
    /**
     * @description <%= moduleNameCap %> Controller Constructor
     * @constructor
     */
    function <%= moduleNameCap %>($q) {
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
