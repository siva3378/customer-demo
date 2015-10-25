(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);
    core.config(configure);

    ////////////////
    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = "6000";
        toastr.options.positionClass = 'toast-top-center';
               toastr.options.closeButton = true;
        //        toastr.options.preventDuplicates = true;

    }

    configure.$inject = ['$compileProvider', '$logProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure(
        $compileProvider,
        $logProvider,
        exceptionHandlerProvider) {

        $compileProvider.debugInfoEnabled(false);
        $logProvider.debugEnabled(true);
        exceptionHandlerProvider.configure("[APP]");
        
    }
})();
