describe("The footer directive - ", function() {
    var scope, ctrl, elm, iScope,
        authorObj = {
            name: 'sample-name',
            email: "sample-email"
        };

    beforeEach(module('app.templates', 'app.main'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.authorObj = authorObj;
        elm = angular.element('<app-footer author="authorObj"></app-footer>');
        elm = $compile(elm)(scope);
        scope.$digest();
    }));

    it("should render author name in footer", function() {
        expect($(elm).find('#auth-name').text()).toBe(authorObj.name);
    })
    it("should render author email in footer", function() {
        expect($(elm).find('#auth-email').text()).toBe(authorObj.email);
    })
});
