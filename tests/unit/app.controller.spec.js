describe("The app main module - ", function() {
    beforeEach(module('app.main'));

    describe("App Controller", function() {
        var appCtrl, scope;

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            appCtrl = $controller('AppCtrl', {
                $scope: scope,
                //$routeParam:{user:'new'},
                //$routeParam:{user:'siva'}
            });
        }));

        it("should be defined", function() {
            expect(appCtrl).toBeDefined();
        });
        it("app name - should not be empty", function() {
            expect(scope.appName).not.toBe("");
        })
        it("app menu - should be defined", function() {
            expect(scope.menu).toBeDefined();
        })
        it("app menu - should not be empty", function() {
            expect(scope.menu.length > 0).toBeTruthy();
        })
    });
});
