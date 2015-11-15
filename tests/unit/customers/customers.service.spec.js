describe("The Customer Service - ", function() {
    beforeEach(module('app.main'));

    var custService;
    beforeEach(inject(function(customersService) {
        custService = customersService;
    }));
    it("should be defined", function() {
        expect(custService).toBeDefined();
    });
    
    it("should retrive customers", function(){
    	expect(custService.getCustomers()).toBeDefined();
    });

    it("should calculate total orders of a customer", function(){
        var aCust = custService.getCustomers()[0];
        expect(custService.calculateTotalOrders(aCust)>0).toBeTruthy();
    })

});
