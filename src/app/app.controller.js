(function() {
    angular.module('app.main').controller('AppCtrl', ['$scope', 'config', 'views', AppCtrl]);

    function AppCtrl($scope, config, views) {
        $scope.appName = config.appTitle;
        $scope.menu = views;
        $scope.author = config.author;
    }
})();