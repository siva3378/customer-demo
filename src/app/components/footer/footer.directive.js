(function() {
    'use strict';
    angular.module('app.main').directive('appFooter', appFooter);
    /** @ngInject */
    function appFooter() {
        var directive = {
            restrict: 'E',
            replace:true,
            scope: {
                author: "="
            },
            templateUrl: 'src/app/components/footer/footer.html',
            controller: ctrlFun,
        };

        function ctrlFun($scope) {
            $scope.likeCount = 0;
            $scope.like = function() {
                $scope.likeCount++;
            }
        }
        return directive;
    }
})();
