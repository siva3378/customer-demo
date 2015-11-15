describe("TODO Service - ", function() {
    beforeEach(module('app.main'));
    var todoService, httpBackend, data;
    beforeEach(inject(function(TodoService, _$httpBackend_) {
        // inject the service to test
        todoService = TodoService;

        // inject angular-mock's $httpBackend service
        // to emulate a monitor for ajax requests & its response data
        httpBackend = _$httpBackend_;

        //set the JSON path, from where to load the mock data
        jasmine.getJSONFixtures().fixturesPath = 'base/tests/mocks';
    }));
    afterEach(function() {
        // make sure all requests where handled as expected.
        httpBackend.verifyNoOutstandingRequest();
        httpBackend.verifyNoOutstandingExpectation();
    });

    it("should be defined", function() {
        expect(todoService).toBeDefined();
    });

    it('should return todoList when calling getList', function() {
        var mockData = getJSONFixture("todo-list.json");
        var data = null;

        // add $httpBackend request handler
        // & set the what should be return when there is a GET request
        httpBackend.expectGET("data/todo-list.json").respond(mockData);
        todoService.getList().then(function(result) {
            data = result.data;
        });
        httpBackend.flush();
        
        var aKey = Object.keys(data)[0];
        expect(data[aKey][0].task).toBe(mockData[aKey][0].task);
    });

});
