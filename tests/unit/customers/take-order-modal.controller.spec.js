describe("The TakeOrderModal Controller - ", function() {
    beforeEach(module('app.main'));

    var scope, modalInstance, ctrl, root, service;
    
    beforeEach(inject(function($controller, $rootScope, customersService) {
        scope = $rootScope.$new();
        root = $rootScope;
        service = customersService;
        modalInstance = {
            close: jasmine.createSpy('modalInstance.close'),
            dismiss: jasmine.createSpy('modalInstance.dismiss'),
            result: {
                then: jasmine.createSpy('modalInstance.result.then')
            }
        };
        ctrl = $controller('TakeOrderModalCtrl', {
            $scope: scope,
            $rootScope : root,
            $uibModalInstance:modalInstance,
            customer:service.getCustomers()[0]
        })
        scope.$digest();
    }));
    it("should be defined", function() {
        expect(ctrl).toBeDefined();
    });

    it("should call modal close when 'Done' button is pressed", function(){
        scope.ok();
        expect(modalInstance.close).toHaveBeenCalled();
    })

     it("should emit broadcast event @ root", function() {
        spyOn(root, "$broadcast").and.callThrough();
        var eventName = "EVENT.ORDER_PLACED";
        scope.ok();
        expect(root.$broadcast).toHaveBeenCalled();
    })
});
