(function() {
    'use strict';
    angular.module('app.main')
        .run(function(storageService) {
        	storageService.check();
        })

})();
