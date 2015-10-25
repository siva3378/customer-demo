//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
angular.module('app.main').controller('CustomersController', function ($scope, customersService,logger) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var stateName = $scope.newCustomer.stateName;
        customersService.insertCustomer(firstName, lastName, stateName);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.stateName = '';
        logger.success("Data Saved Successfully");
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };

    $scope.getTotalAmount = function(customer){
        return  customersService.calculateTotalOrders(customer);
    }
});