describe("TODO Controller - ", function() {
    var todoCtrl, todoService;
    beforeEach(module('app.main'));
    beforeEach(module('app.main', function($provide) {
        $provide.value('TodoService', {
            getList: function() {
                return {
                    then: function(callback) {
                        jasmine.getJSONFixtures().fixturesPath = 'base/tests/mocks';
                        return callback({
                            data: getJSONFixture('todo-list.json')
                        });
                    }
                };
            }
        })
    }))
    beforeEach(inject(function($controller, $rootScope, TodoService) {
        todoCtrl = $controller('TODOCtrl');
        // get service to make spyies
        todoService = TodoService;
    }));

    it("should be defined", function() {
        expect(todoCtrl).toBeDefined();
    });

    it("categories - should be defined", function() {
        expect(todoCtrl.categories).not.toBe(null);
    })

    describe("addTask method", function() {
        it("should be defined", function() {
            expect(todoCtrl.addTask).toBeDefined();
        });
        it("should add a task to categories list", function() {
            var aKey = Object.keys(todoCtrl.categories)[0];
            var bfrLen = todoCtrl.categories[aKey].length;
            var mockInput = {
                category: aKey,
                taskName: "Task Name",
                taskDesc: "Task Description"
            };
            todoCtrl.addTask(mockInput);
            expect(todoCtrl.categories[aKey].length > bfrLen).toBeTruthy();
        })
        it("should add a new category", function() {
            var oldKeys = Object.keys(todoCtrl.categories);
            var mockInput = {
                category: "abc123",
                taskName: "Task Name",
                taskDesc: "Task Description"
            };
            todoCtrl.addTask(mockInput);
            var newKeys = Object.keys(todoCtrl.categories);
            expect(oldKeys.length < newKeys.length).toBeTruthy();
        })
    })
});
