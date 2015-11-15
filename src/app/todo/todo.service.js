angular.module('app.main')
    .service('TodoService', ['$http', function($http) {
        return {
            getList: function() {
                return $http.get("data/todo-list.json");
            }
        }
    }]);
