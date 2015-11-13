(function() {
    angular.module('app.main')
        .controller('TODOCtrl', [TODOCtrl]);

    function TODOCtrl() {
        var vm = this;
        vm.addTask = addTask;
        vm.categories = {
            work: [{
                task: "Fill timesheet",
                desc: "Blah Blah Blah",
                isDone: false
            }, {
                task: "Sign New NDA document",
                desc: "Wellington Project",
                isDone: false
            }, {
                task: "Validate Investment declarations",
                desc: "Calculate your investment & update in KBG",
                isDone: false
            }],
            personal: [{
                task: "Book Movie tickets",
                desc: "Book 10 tickets",
                isDone: true
            }],
            shopping: [{
                task: "Buy Mobile phone",
                desc: "iPhone 6 from flipkart ;) ",
                isDone: false
            }],
            finance: [{
                task: "Pay Credit Card Bill",
                desc: "Blah Blah Blah",
                isDone: false
            }]
        };
        ////////////////
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
