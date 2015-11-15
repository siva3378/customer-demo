describe("The navbar directive - ", function() {
    var scope, ctrl, elm, directive = "<app-navbar></app-navbar>";

    beforeEach(module('app.main', 'app.templates'));

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        elm = angular.element(directive);
        $compile(elm)(scope);
        scope.$digest();
        ctrl = elm.controller('app-navbar');
    }));

    describe("Controller", function() {
        it("should be defined", function() {
            expect(ctrl).toBeDefined();
        });

        it("app name - should be defined", function() {
            expect(ctrl.appName).toBeDefined();
        })
        it("app name - should not be empty", function() {
            expect(ctrl.appName).not.toBe("");
        })
        it("app menu - should be defined", function() {
            expect(ctrl.menu).toBeDefined();
        })
        it("app menu - should not be empty", function() {
            expect(ctrl.menu.length > 0).toBeTruthy();
        })

    });
});
