describe("The Customer Controller - ", function() {
    beforeEach(module('app.main'));

    var scope, uibModal, ctrl, root;
    beforeEach(inject(function($controller, $uibModal, $rootScope) {
        scope = $rootScope.$new();
        root = $rootScope;
        uibModal = $uibModal;
        ctrl = $controller('CustomersController', {
            $scope: scope,
            $uibModal: uibModal
        })
        scope.$digest();
    }));
    it("should be defined", function() {
        expect(ctrl).toBeDefined();
    });

    it("should open a pop-up when calls for take an order", function() {
        spyOn(uibModal, 'open');
        scope.takeOrderInPopup(scope.customers[0]);
        expect(uibModal.open).toHaveBeenCalled();
    })
   
    it("should handle broadcasts", function() {
        expect(scope.orderInfo).toBe(null);

        var obj = {
            count: 5,
            name: "Customer name"
        };
        var eventName = "EVENT.ORDER_PLACED";
        scope.$apply(function() {
            root.$broadcast(eventName, obj);
        })
        expect(scope.orderInfo).toBe(obj);
    });
});
