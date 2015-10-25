(function () {
    'use strict';

    angular
        .module('app.core', [
                /* Angular modules */
                'ngRoute',
                'ngStorage',
                'nvd3',

                /* 3rd-party modules */
                'ui.bootstrap',

                /* Re-usable components*/
                'core.exception',
                'core.logger',
            ]);

})();
