(function() {
    angular.module('app.main')
        .controller('TODOCtrl', TODOCtrl);

    function TODOCtrl(TodoService) {
        var vm = this;
        vm.addTask = addTask;
        vm.categories = null;
        vm.loadCategories = loadCategories;
        init();
        ////////////////
        function init() {
            vm.loadCategories();
        }

        function loadCategories() {
            TodoService.getList().then(function(config) {
                vm.categories = config.data;
            });
        }

        function addTask(newTask) {
            var cateoryKeys = Object.keys(vm.categories);
            var categoryName = newTask.category.toLowerCase();
            if (cateoryKeys.indexOf(categoryName) < 0) {
                //create a new category in category list
                vm.categories[categoryName] = [];
            }
            // add to an array
            vm.categories[categoryName].push({
                task: newTask.taskName,
                desc: newTask.taskDesc,
                isDone: false
            });
        }
    }
})();
