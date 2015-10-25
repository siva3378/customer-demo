(function() {
    'use strict';
    angular.module('app.main').directive('appNavbar', appNavbar);
    /** @ngInject */
    function appNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'src/app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
        /** @ngInject */
        function NavbarController(moment, views, config,$location) {
            var vm = this;
            vm.menu = views;
            vm.appName = config.appTitle;

            vm.getClass = function(path) {
                if (('#'+$location.path().substr(0, path.length))===path) {
                    return true
                } else {
                    return false;
                }
            }
        }
    }
})();
