//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the order view
angular
    .module('app.main')
    .controller('CustomerOrdersController', CustomerOrdersController);

function CustomerOrdersController($scope, $routeParams, customersService) {
        $scope.customer = {};
        $scope.ordersTotal = 0.00;

        //I like to have an init() for controllers that need to perform some initialization. Keeps things in
        //one place...not required though especially in the simple example below
        init();

        function init() {
            //Grab customerID off of the route        
            var customerID = ($routeParams.customerID) ? parseInt($routeParams.customerID) : 0;
            if (customerID > 0) {
                $scope.customer = customersService.getCustomer(customerID);
            }
        }

    }