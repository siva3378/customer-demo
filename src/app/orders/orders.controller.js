//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the orders view
angular
    .module('app.main').controller('OrdersController', function ($scope, customersService) {
    $scope.customers = [];

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }
    $scope.getOverAllSale = function(){
    	return customersService.calculateAllOrders();
    }
});