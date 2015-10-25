(function() {
    'use strict';
    angular.module('app.main').directive('appFooter', appFooter);
    /** @ngInject */
    function appFooter() {
        var directive = {
            restrict: 'E',
            templateUrl: 'src/app/components/footer/footer.html',
        };
        return directive;
    }
})();